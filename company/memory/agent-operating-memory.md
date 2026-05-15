# Agent Operating Memory

## Project
RPSC Lecturer English Lab (`/home/ubuntu/.openclaw/workspace/rpsc-lecturer`), public repo `iamkdraj/rpsc-lecturer`.

## Product direction
This must feel like a serious learner-facing exam-prep app, not an AI experiment. Do not expose the internal AI-company experiment on public pages.

## Architecture direction
Static-first app is acceptable, but it must have real product structure:
- Home / landing page
- Course tracks
- Topic/lesson pages
- Practice / quizzes
- Syllabus tracker
- Mock tests
- Study plan / revision
- About / trust page eventually

## Agent company rules
- Work in branches and PRs unless explicitly told to commit to main.
- Run `npm run check:content` and `npm run build` before PRs.
- Do not invent literature facts. Use citations or mark TODO.
- Keep learner-facing copy polished and trustworthy.
- Use OpenRouter free models, but do not hammer providers in tight loops.
- If a model hits a rate limit, record the blocker and retry on the next scheduled shift.
- Prefer several useful shifts per day over noisy infinite loops.

## Current priority
Transform the proof-of-life single-page app into a proper structured learning application with navigation, pages/sections, content data model, and a scalable design system.
