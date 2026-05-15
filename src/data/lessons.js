export const lessons = [
  {
    id: 'articles-determiners',
    title: 'Articles & Determiners: Precision before fluency',
    track: 'Grammar',
    difficulty: 'Senior Secondary',
    minutes: 12,
    principle: 'Learn by contrast: tiny word changes create meaning changes.',
    concept: 'Articles (a, an, the) and determiners locate nouns for the listener: general, specific, counted, uncounted, known, unknown.',
    example: 'A teacher entered the class. The teacher carried some answer sheets.',
    misconception: '“The” is not just for important things; it marks shared or already identified reference.',
    prompt: 'Why is “the teacher” correct in the second sentence?',
    answer: 'Because the teacher has already been introduced and is now identifiable.',
    quiz: [
      { q: 'Choose the best option: ___ Ganga is a sacred river.', options: ['A','An','The','No article'], correct: 2, why: 'Names of rivers take “the”.' },
      { q: 'Choose the best option: He is ___ honest man.', options: ['a','an','the','no article'], correct: 1, why: '“Honest” begins with a vowel sound /ɒ/.' }
    ]
  },
  {
    id: 'conditional-sentences',
    title: 'Conditionals: Real, possible, impossible',
    track: 'Grammar',
    difficulty: 'Senior Secondary',
    minutes: 14,
    principle: 'Map form to probability instead of memorising isolated formulas.',
    concept: 'Conditionals show cause-result relationships: zero for general truth, first for real future, second for unreal present/future, third for unreal past.',
    example: 'If I had revised Milton earlier, I would have answered the question faster.',
    misconception: 'Do not use “would” in the if-clause of standard third conditional.',
    prompt: 'Classify: If water reaches 100°C, it boils.',
    answer: 'Zero conditional because it states a general scientific truth.',
    quiz: [
      { q: 'If she ___ hard, she will pass.', options: ['study','studies','studied','had studied'], correct: 1, why: 'First conditional: if + present simple, will + base verb.' },
      { q: 'If he had come, we ___ him.', options: ['meet','will meet','would meet','would have met'], correct: 3, why: 'Third conditional: had + past participle, would have + past participle.' }
    ]
  },
  {
    id: 'metaphysical-poetry',
    title: 'Metaphysical Poetry: Thought under pressure',
    track: 'Literature',
    difficulty: 'Post Graduation',
    minutes: 16,
    principle: 'Understand the engine of the style: wit, argument, paradox, conceit.',
    concept: 'Metaphysical poetry often combines emotional intensity with intellectual argument. Donne’s “Batter My Heart” turns spiritual surrender into a violent paradox.',
    example: '“That I may rise and stand, o’erthrow me” expresses a paradox: destruction becomes renewal.',
    misconception: 'A conceit is not any comparison; it is usually elaborate, surprising, and intellectually extended.',
    prompt: 'Why is Donne called metaphysical?',
    answer: 'Because his poetry fuses intense feeling with philosophical argument, paradox, and bold conceits.',
    quiz: [
      { q: 'The term most associated with Donne’s style is:', options: ['Objective correlative','Metaphysical conceit','Stream of consciousness','Negative capability'], correct: 1, why: 'Donne is central to metaphysical conceit and argumentative lyric.' },
      { q: '“Batter My Heart” is addressed to:', options: ['A beloved','God as three-personed God','The poet’s father','A political ruler'], correct: 1, why: 'The opening invokes “three-person’d God”.' }
    ]
  },
  {
    id: 'advance-organizer',
    title: 'Advance Organizer Model: Give the mind a hook',
    track: 'Pedagogy',
    difficulty: 'Pedagogy',
    minutes: 10,
    principle: 'Before detail, give structure. Learning sticks when new ideas attach to prior concepts.',
    concept: 'Ausubel’s advance organizer model introduces a high-level conceptual framework before teaching detailed material.',
    example: 'Before teaching literary periods, show a timeline from Renaissance to Postmodernism with dominant features.',
    misconception: 'An advance organizer is not a summary after teaching; it comes before instruction.',
    prompt: 'Where should an advance organizer appear in a lesson?',
    answer: 'At the beginning, before detailed learning material.',
    quiz: [
      { q: 'Advance organizer model is mainly associated with:', options: ['Piaget','Ausubel','Skinner','Bruner'], correct: 1, why: 'David Ausubel proposed meaningful verbal learning and advance organizers.' },
      { q: 'Best example of an advance organizer:', options: ['Final test','Pre-lesson concept map','Punishment chart','Attendance register'], correct: 1, why: 'It gives conceptual structure before instruction.' }
    ]
  }
];
