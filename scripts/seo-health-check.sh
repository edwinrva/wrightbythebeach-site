#!/bin/bash
# Runs a technical + performance SEO/deploy health check for wrightbythebeach.com
# via a headless Claude Code call, writes a report, and fires a desktop
# notification. Invoked manually, or by a personal crontab entry.

PROJECT_DIR="/Users/edwin/Development/wrightbythebeach-website"
REPORTS_DIR="$PROJECT_DIR/reports"
mkdir -p "$REPORTS_DIR"
REPORT_FILE="$REPORTS_DIR/seo-check-$(date +%Y-%m-%d).md"
CLAUDE_BIN="/opt/homebrew/bin/claude"

cd "$PROJECT_DIR" || exit 1

set -a
[ -f "$PROJECT_DIR/.env.reporting.local" ] && source "$PROJECT_DIR/.env.reporting.local"
set +a

# Real Search Console + GA4 numbers, fetched via service account (see
# scripts/fetch-analytics-data.mjs). Handed to Claude as data to interpret,
# not something it needs to go fetch itself.
ANALYTICS_JSON=$(node "$PROJECT_DIR/scripts/fetch-analytics-data.mjs" 2>&1)

PROMPT=$(cat <<PROMPT
Run a technical SEO/deployment health check for wrightbythebeach.com and write
a markdown report to exactly this path: $REPORT_FILE

Checks to run (use curl and the vercel CLI):
1. curl -sI https://wrightbythebeach.com/ -> confirm 200 and valid SSL (Strict-Transport-Security header present)
2. curl -sI https://www.wrightbythebeach.com/ -> confirm it 308-redirects to https://wrightbythebeach.com/
3. curl -s https://wrightbythebeach.com/sitemap.xml -> confirm 200 and every <loc> uses the apex domain (no www)
4. curl -s https://wrightbythebeach.com/robots.txt -> confirm it references https://wrightbythebeach.com/sitemap.xml
5. curl -s https://wrightbythebeach.com/ | grep canonical, and the same for /amenities and /book -> confirm canonical tags point to the apex domain
6. curl -sI https://wrightbythebeach.com/llms.txt -> confirm 200
7. vercel ls wrightbythebeach-website (run from $PROJECT_DIR) -> confirm the latest production deployment status is Ready

Write those results as a pass/fail checklist with a one-paragraph summary at
the top of the report.

Then add a "## Search & Analytics (last 28 days)" section built from this
real Search Console + GA4 data (already fetched via API -- do not call any
other tool for this part, just interpret the JSON below). If a section has
an "error" field, report the error plainly instead of guessing at numbers:

\`\`\`json
$ANALYTICS_JSON
\`\`\`

Summarize: top search queries and pages by impressions/clicks, sessions by
channel, and the page_view / booking_cta_click / booking_handoff funnel
counts. Call out anything that looks like it needs attention (e.g. high
impressions with 0 clicks, a channel with no sessions, a funnel drop-off).

Append this fixed reminder section verbatim at the end of the report:

## AEO/GEO note

Search Console and GA4 cover classic SEO and on-site behavior, but neither
tracks whether AI answer engines (ChatGPT, Perplexity, Google AI Overviews)
are citing this site. That still requires manually prompting those tools
with relevant queries and checking GA4/server logs for AI crawler traffic
(GPTBot, ClaudeBot, PerplexityBot, Google-Extended referrers).
PROMPT
)

"$CLAUDE_BIN" -p --allowedTools "Bash(curl:*) Bash(vercel:*) Write" <<< "$PROMPT" > "$REPORTS_DIR/claude-run-$(date +%Y-%m-%d).log" 2>&1

osascript -e 'display notification "SEO/deploy health check finished — see reports/ folder" with title "Wright by the Beach"' 2>/dev/null || true
