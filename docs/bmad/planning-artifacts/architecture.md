---
status: draft
method: BMAD-inspired
stepsCompleted: ["architecture-overview"]
---
# Architecture: Static Learning App

## Current Stack
- Vite
- React
- Plain CSS design system
- Data files in `src/data/*.js`
- GitHub Pages deploy via GitHub Actions

## Architecture Direction
Keep static-first until there is a clear need for accounts, payments, analytics storage, or personalized persistence.

## Proposed Structure
```text
src/
  components/
    AppShell.jsx
    CourseMap.jsx
    LessonPlayer.jsx
    MockTestCard.jsx
    SyllabusGrid.jsx
  data/
    appPages.js
    syllabus.js
    lessons.js
    questionBank.js
    coverage.js
  styles/
    tokens.css
    layout.css
    components.css
```

## Near-Term Refactor
Move the current monolithic `main.jsx` into components. This is the first engineering story because it enables coherent future PRs.

## Deployment
- Keep GitHub Pages.
- Preserve `base: '/rpsc-lecturer/'`.
- Required gates: `npm run check:content`, `npm run build`.
