#!/bin/bash
# Runs a one-off technical SEO/deploy health check for wrightbythebeach.com
# via a headless Claude Code call, writes a report, and fires a desktop
# notification. Invoked by a personal crontab entry (see: crontab -l).

PROJECT_DIR="/Users/edwin/Development/wrightbythebeach-website"
REPORTS_DIR="$PROJECT_DIR/reports"
mkdir -p "$REPORTS_DIR"
REPORT_FILE="$REPORTS_DIR/seo-check-$(date +%Y-%m-%d).md"
CLAUDE_BIN="/opt/homebrew/bin/claude"

cd "$PROJECT_DIR" || exit 1

"$CLAUDE_BIN" -p --allowedTools "Bash(curl:*) Bash(vercel:*) Write" "$(cat <<PROMPT
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

Write the results as a pass/fail checklist with a one-paragraph summary at
the top of the report.

Append this fixed reminder section verbatim at the end of the report --
do not guess at numbers you have no access to, just leave this section as
written:

## Manual follow-up needed

This automated check has no API access to Google Search Console or GA4 --
it only verifies site plumbing, not real indexing or traffic data. Please:
1. Open https://search.google.com/search-console and check Coverage/Performance
   for wrightbythebeach.com -- look for indexing errors and impressions/clicks
   trending since the 2026-07-12 launch.
2. Open GA4 and check the booking_handoff key event volume and which CTA
   locations / booking widget sources are converting best.
3. Bring what you see to your next Claude Code session in this project so we
   can discuss content or SEO adjustments based on real traffic.
PROMPT
)" > "$REPORTS_DIR/claude-run-$(date +%Y-%m-%d).log" 2>&1

osascript -e 'display notification "Two-week SEO/deploy health check finished — see reports/ folder" with title "Wright by the Beach"' 2>/dev/null || true

# One-shot job: remove this run's own crontab line now that it has fired.
crontab -l 2>/dev/null | grep -v 'wbtb-seo-check-2026-07-26' | crontab -
