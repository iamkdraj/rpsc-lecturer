export const course = {
  title: 'RPSC Lecturer English',
  subtitle: 'Interactive preparation for Grammar, Literature, Theory, Pedagogy and ICT',
  exam: {
    questions: 150,
    marks: 300,
    duration: '3 hours',
    negative: '1/3'
  },
  tracks: [
    {
      id: 'grammar',
      title: 'Grammar & Usage',
      label: 'Senior Secondary',
      color: 'blue',
      outcome: 'Answer rule-based MCQs with confidence and avoid careless negatives.',
      units: [
        {
          id: 'grammar-core',
          title: 'Core Usage',
          lessons: [
            {
              id: 'articles',
              title: 'Articles are signals',
              minutes: 8,
              type: 'Concept + MCQ',
              objective: 'Decide when a noun is general, specific, known or unique.',
              setup: 'Tiny words decide whether a noun is new, known, specific or general.',
              insight: 'Use “a/an” when introducing one non-specific countable noun. Use “the” when the noun is already known, unique, or contextually identifiable.',
              example: 'A teacher entered the class. The teacher carried some answer sheets.',
              trap: 'Do not use “the” merely because something feels important. Use it when the listener can identify the noun.',
              question: 'Choose the best option: ___ Ganga is a sacred river.',
              options: ['A', 'An', 'The', 'No article'],
              answer: 2,
              explanation: 'Names of rivers take “the”: the Ganga, the Yamuna, the Nile.'
            },
            {
              id: 'conditionals',
              title: 'Conditionals map probability',
              minutes: 10,
              type: 'Pattern Drill',
              objective: 'Match condition forms to time and possibility.',
              setup: 'Conditionals are not random formulas. They show whether a result is factual, possible, unreal, or missed.',
              insight: 'First conditional = real future possibility. Third conditional = unreal past condition and imagined past result.',
              example: 'If she studies regularly, she will pass.',
              trap: 'In standard third conditional, avoid “would” in the if-clause.',
              question: 'If he had come, we ___ him.',
              options: ['meet', 'will meet', 'would meet', 'would have met'],
              answer: 3,
              explanation: 'Third conditional uses: if + had + past participle, would have + past participle.'
            }
          ]
        }
      ]
    },
    {
      id: 'literature',
      title: 'Literature',
      label: 'Graduation',
      color: 'gold',
      outcome: 'Build author-text-context recall through short interpretive challenges.',
      units: [
        {
          id: 'poetry',
          title: 'Poetry Essentials',
          lessons: [
            {
              id: 'sonnet-130',
              title: 'Shakespeare: honest praise',
              minutes: 12,
              type: 'Poetry Lens',
              objective: 'Recognise anti-Petrarchan comparison in Sonnet 130.',
              setup: 'The poem begins by refusing the usual exaggerated praise of love poetry.',
              insight: 'Its power comes from honest comparison: the beloved is not idealised, yet the love remains real.',
              example: '“My mistress’ eyes are nothing like the sun” rejects conventional hyperbole.',
              trap: 'This is not simple mockery of the beloved; it mocks false poetic conventions.',
              question: 'Sonnet 130 is best read as a critique of:',
              options: ['Epic invocation', 'Petrarchan exaggeration', 'Gothic terror', 'Stream of consciousness'],
              answer: 1,
              explanation: 'The sonnet undercuts exaggerated Petrarchan comparisons while affirming sincere love.'
            },
            {
              id: 'donne-conceit',
              title: 'Donne: wit under pressure',
              minutes: 11,
              type: 'Literary Term',
              objective: 'Identify metaphysical conceit and paradox.',
              setup: 'Metaphysical poetry often turns emotion into argument.',
              insight: 'A conceit is an elaborate, surprising comparison that extends an idea intellectually.',
              example: '“That I may rise and stand, o’erthrow me” makes destruction a path to renewal.',
              trap: 'A conceit is not just any metaphor; it is developed and intellectually striking.',
              question: 'The term most associated with Donne’s poetic style is:',
              options: ['Objective correlative', 'Metaphysical conceit', 'Negative capability', 'Stream of consciousness'],
              answer: 1,
              explanation: 'Donne is central to metaphysical conceit and argumentative lyric poetry.'
            }
          ]
        }
      ]
    },
    {
      id: 'theory',
      title: 'Theory & Language',
      label: 'Post Graduation',
      color: 'violet',
      outcome: 'Make clean distinctions between forms, periods, movements and language varieties.',
      units: [
        {
          id: 'forms',
          title: 'Forms & Terms',
          lessons: [
            {
              id: 'sonnet-form',
              title: 'What makes a sonnet?',
              minutes: 7,
              type: 'Definition Check',
              objective: 'Identify basic sonnet structure.',
              setup: 'A sonnet is compact but highly structured.',
              insight: 'Most sonnets have fourteen lines and a turn or shift of thought called a volta.',
              example: 'English sonnets often use three quatrains and a final couplet.',
              trap: 'Fourteen lines alone do not guarantee the same rhyme scheme across traditions.',
              question: 'A sonnet normally contains how many lines?',
              options: ['10', '12', '14', '16'],
              answer: 2,
              explanation: 'The standard sonnet has fourteen lines.'
            }
          ]
        }
      ]
    },
    {
      id: 'pedagogy',
      title: 'Pedagogy & ICT',
      label: 'Teaching Practice',
      color: 'green',
      outcome: 'Apply teaching models and digital learning principles to classroom decisions.',
      units: [
        {
          id: 'models',
          title: 'Teaching Models',
          lessons: [
            {
              id: 'advance-organizer',
              title: 'Give the mind a hook',
              minutes: 9,
              type: 'Classroom Scenario',
              objective: 'Use advance organizers before detailed teaching.',
              setup: 'Students learn better when new material attaches to a clear structure.',
              insight: 'Ausubel’s advance organizer is a high-level conceptual frame presented before detailed instruction.',
              example: 'Before literary periods, show a timeline from Renaissance to Modernism.',
              trap: 'An advance organizer comes before instruction, not as a closing summary.',
              question: 'Advance organizer model is mainly associated with:',
              options: ['Piaget', 'Ausubel', 'Skinner', 'Bruner'],
              answer: 1,
              explanation: 'David Ausubel is associated with meaningful verbal learning and advance organizers.'
            }
          ]
        }
      ]
    }
  ]
};

export const lessons = course.tracks.flatMap(track =>
  track.units.flatMap(unit =>
    unit.lessons.map((lesson, index) => ({ ...lesson, track, unit, node: index + 1 }))
  )
);
