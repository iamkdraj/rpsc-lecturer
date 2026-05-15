# Free Model / Rate Limit Policy

Goal: use free OpenRouter capacity aggressively but sanely.

Rules:
1. No tight retry loops.
2. When a run hits a rate limit, stop that run, document the model and approximate reset if available.
3. Cron jobs resume work at scheduled intervals.
4. Prefer different free models by department to distribute load.
5. Do not bypass provider limits or create abusive traffic.
6. Each shift should produce a concrete artifact: PR, issue, audit note, or blocker.

Default cadence:
- Product/Frontend: every 6 hours
- Content Studio: every 6 hours
- Verification: twice daily
- Growth/SEO: daily
- CEO Summary: daily
