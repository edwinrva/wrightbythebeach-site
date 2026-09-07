#!/usr/bin/env node
// Calls the Search Console URL Inspection API for every URL in the sitemap,
// using the same read-only service account as fetch-analytics-data.mjs.
// Requires GOOGLE_SERVICE_ACCOUNT_KEY_FILE env var. Prints JSON to stdout.

import { GoogleAuth } from "google-auth-library";

const KEY_FILE = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE;
const SITE_URL = "sc-domain:wrightbythebeach.com";

if (!KEY_FILE) {
  console.error("Missing GOOGLE_SERVICE_ACCOUNT_KEY_FILE env var");
  process.exit(1);
}

const auth = new GoogleAuth({
  keyFile: KEY_FILE,
  scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
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

async function fetchSitemapUrls() {
  const res = await fetch("https://wrightbythebeach.com/sitemap.xml");
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function inspectUrl(pageUrl) {
  const data = await authedFetch(
    "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
    {
      method: "POST",
      body: JSON.stringify({ inspectionUrl: pageUrl, siteUrl: SITE_URL }),
    }
  );
  const result = data.inspectionResult?.indexStatusResult ?? {};
  return {
    url: pageUrl,
    verdict: result.verdict,
    coverageState: result.coverageState,
    robotsTxtState: result.robotsTxtState,
    indexingState: result.indexingState,
    lastCrawlTime: result.lastCrawlTime,
    pageFetchState: result.pageFetchState,
    googleCanonical: result.googleCanonical,
    userCanonical: result.userCanonical,
  };
}

const urls = await fetchSitemapUrls();
const results = [];
for (const url of urls) {
  try {
    results.push(await inspectUrl(url));
  } catch (e) {
    results.push({ url, error: e.message });
  }
}

console.log(JSON.stringify(results, null, 2));
