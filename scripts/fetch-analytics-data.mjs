#!/usr/bin/env node
// Pulls last-28-days Search Console + GA4 numbers via a service account.
// Requires GOOGLE_SERVICE_ACCOUNT_KEY_FILE and GA4_PROPERTY_ID env vars
// (see .env.reporting.local). Prints a single JSON object to stdout.

import { GoogleAuth } from "google-auth-library";

const KEY_FILE = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE;
const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID;

if (!KEY_FILE || !GA4_PROPERTY_ID) {
  console.error(
    "Missing GOOGLE_SERVICE_ACCOUNT_KEY_FILE or GA4_PROPERTY_ID env vars"
  );
  process.exit(1);
}

const auth = new GoogleAuth({
  keyFile: KEY_FILE,
  scopes: [
    "https://www.googleapis.com/auth/webmasters.readonly",
    "https://www.googleapis.com/auth/analytics.readonly",
  ],
});

async function authedFetch(url, options = {}) {
  const client = await auth.getClient();
  const { token } = await client.getAccessToken();
  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const body = await res.json();
  if (!res.ok) {
    throw new Error(`${url} -> ${res.status} ${JSON.stringify(body)}`);
  }
  return body;
}

function last28Days() {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - 28);
  const fmt = (d) => d.toISOString().slice(0, 10);
  return { startDate: fmt(start), endDate: fmt(end) };
}

// Site URL format (sc-domain:... vs https://...) depends on how the GSC
// property was verified. Discover it from the account's own site list
// instead of guessing.
async function findVerifiedSiteUrl() {
  const data = await authedFetch(
    "https://searchconsole.googleapis.com/webmasters/v3/sites"
  );
  const match = (data.siteEntry ?? []).find((s) =>
    s.siteUrl.includes("wrightbythebeach.com")
  );
  if (!match) {
    throw new Error(
      `Service account has no Search Console site access. Sites visible: ${JSON.stringify(
        data.siteEntry ?? []
      )}`
    );
  }
  return match.siteUrl;
}

async function fetchSearchConsole() {
  const siteUrl = await findVerifiedSiteUrl();
  const { startDate, endDate } = last28Days();
  const [byQuery, byPage] = await Promise.all([
    authedFetch(
      `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
        siteUrl
      )}/searchAnalytics/query`,
      {
        method: "POST",
        body: JSON.stringify({
          startDate,
          endDate,
          dimensions: ["query"],
          rowLimit: 15,
        }),
      }
    ),
    authedFetch(
      `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
        siteUrl
      )}/searchAnalytics/query`,
      {
        method: "POST",
        body: JSON.stringify({
          startDate,
          endDate,
          dimensions: ["page"],
          rowLimit: 15,
        }),
      }
    ),
  ]);
  return {
    siteUrl,
    dateRange: { startDate, endDate },
    topQueries: byQuery.rows ?? [],
    topPages: byPage.rows ?? [],
  };
}

async function fetchGa4() {
  const { startDate, endDate } = last28Days();
  const [byChannel, byEvent] = await Promise.all([
    authedFetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY_ID}:runReport`,
      {
        method: "POST",
        body: JSON.stringify({
          dateRanges: [{ startDate, endDate }],
          dimensions: [{ name: "sessionDefaultChannelGroup" }],
          metrics: [{ name: "sessions" }],
        }),
      }
    ),
    authedFetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY_ID}:runReport`,
      {
        method: "POST",
        body: JSON.stringify({
          dateRanges: [{ startDate, endDate }],
          dimensions: [{ name: "eventName" }],
          metrics: [{ name: "eventCount" }],
          dimensionFilter: {
            filter: {
              fieldName: "eventName",
              inListFilter: {
                values: ["booking_cta_click", "booking_handoff", "page_view"],
              },
            },
          },
        }),
      }
    ),
  ]);
  return {
    dateRange: { startDate, endDate },
    sessionsByChannel: byChannel.rows ?? [],
    keyEventCounts: byEvent.rows ?? [],
  };
}

const [searchConsole, ga4] = await Promise.all([
  fetchSearchConsole().catch((e) => ({ error: e.message })),
  fetchGa4().catch((e) => ({ error: e.message })),
]);

console.log(JSON.stringify({ searchConsole, ga4 }, null, 2));
