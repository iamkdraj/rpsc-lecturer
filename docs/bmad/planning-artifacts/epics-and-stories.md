---
status: draft
method: BMAD-inspired
stepsCompleted: ["epics", "stories"]
---
# Epics and Stories

## Epic 1: App Structure and Design System
### Story 1.1: Componentize the app shell
Move navigation, page headers, course map, lesson player, stats, and cards into reusable components.
Acceptance: `main.jsx` becomes orchestration only; build passes.

### Story 1.2: Design tokens and component CSS split
Move colors, spacing, cards, nav, lesson player, and responsive rules into structured CSS files.
Acceptance: visual style preserved or improved; build passes.

## Epic 2: Challenge-First Lesson Experience
### Story 2.1: Lesson stepper
Add step states: concept → challenge → explanation → next lesson.
Acceptance: learner flow feels interactive, not like static text.

### Story 2.2: Progress and error log
Track wrong answers in local state and show review prompts.
Acceptance: user can see mistakes for current session.

## Epic 3: Content Coverage
### Story 3.1: Coverage matrix
Create coverage data for every syllabus topic.
Acceptance: each topic has status and linked lessons/questions where available.

### Story 3.2: Add 25 grammar questions
Add verified grammar MCQs with explanations.
Acceptance: content check validates answer indexes.

## Epic 4: Mock Test Engine
### Story 4.1: Timed mini mock
Implement 25-question diagnostic mode from static question data.
Acceptance: timer, score, explanations, negative marking estimate.
