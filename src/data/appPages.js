export const pages = [
  {
    id: 'home',
    label: 'Home',
    headline: 'Master RPSC Lecturer English with active learning.',
    description: 'A structured exam-prep path for grammar, literature, theory, pedagogy and ICT.',
    cta: 'Start learning'
  },
  {
    id: 'courses',
    label: 'Courses',
    headline: 'Choose a focused course track.',
    description: 'Each track turns the official syllabus into lessons, active recall and exam-style practice.'
  },
  {
    id: 'practice',
    label: 'Practice',
    headline: 'Build accuracy before speed.',
    description: 'Short drills with explanations help reduce negative marking risk.'
  },
  {
    id: 'mock-tests',
    label: 'Mock Tests',
    headline: 'Simulate the 150-question paper.',
    description: 'Timed full-length mocks, section tests and post-test error analysis.'
  },
  {
    id: 'syllabus',
    label: 'Syllabus',
    headline: 'Track every topic from the official scope.',
    description: 'See the full coverage map across all four parts.'
  },
  {
    id: 'study-plan',
    label: 'Study Plan',
    headline: 'Follow a revision route that respects negative marking.',
    description: 'A practical sequence from concept clarity to mock-test discipline.'
  }
];

export const courseTracks = [
  {
    id: 'grammar',
    name: 'Grammar Sprint',
    level: 'Senior Secondary',
    detail: 'Articles, tenses, conditionals, prepositions, voice, narration, concord, vocabulary and comprehension.',
    outcome: 'Improve accuracy in rule-based questions and reduce avoidable negatives.',
    modules: ['Usage rules', 'Sentence transformation', 'Vocabulary', 'Reading comprehension']
  },
  {
    id: 'literature',
    name: 'Literature Mastery',
    level: 'Graduation',
    detail: 'Prescribed poems, prose, novels and drama from English, American and Indian writing.',
    outcome: 'Build author-text recall, context awareness and theme-based recognition.',
    modules: ['Poetry', 'Prose', 'Novel', 'Drama']
  },
  {
    id: 'theory',
    name: 'Theory & Language',
    level: 'Post Graduation',
    detail: 'Literary terms, periods, movements and varieties of language.',
    outcome: 'Answer conceptual questions with clean distinctions between similar terms.',
    modules: ['Terms', 'Periods', 'Movements', 'Language varieties']
  },
  {
    id: 'pedagogy',
    name: 'Pedagogy & ICT',
    level: 'Teaching Practice',
    detail: 'Classroom communication, teaching models, TLM, cooperative learning, ICT and assessment.',
    outcome: 'Apply teaching-learning principles to classroom situations.',
    modules: ['Teaching models', 'TLM', 'Cooperative learning', 'ICT']
  }
];

export const mockTests = [
  { id: 'diagnostic', title: 'Diagnostic Mini Mock', questions: 25, duration: '30 min', status: 'Available soon', purpose: 'Find weak zones before starting the full course.' },
  { id: 'section-grammar', title: 'Grammar Section Test', questions: 40, duration: '45 min', status: 'In production', purpose: 'Train accuracy in Part I.' },
  { id: 'full-mock-1', title: 'Full Mock Test 1', questions: 150, duration: '3 hours', status: 'Planned', purpose: 'Simulate the real paper with negative marking.' }
];

export const studyMilestones = [
  { week: 'Week 1–2', focus: 'Grammar foundations', action: 'Finish core rules and daily 25-question usage drills.' },
  { week: 'Week 3–5', focus: 'Literature recall', action: 'Map authors, genres, periods, texts and recurring themes.' },
  { week: 'Week 6–7', focus: 'Theory + pedagogy', action: 'Contrast similar literary terms and apply teaching models.' },
  { week: 'Final stretch', focus: 'Mocks + error log', action: 'Attempt full mocks, review mistakes and revise only weak zones.' }
];
