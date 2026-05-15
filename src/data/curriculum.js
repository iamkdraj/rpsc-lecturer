export const curriculum = [
  {
    id: 'grammar',
    title: 'Grammar Sprint',
    subtitle: 'Senior Secondary Level',
    promise: 'Build rule accuracy for the safest scoring zone of the paper.',
    accent: 'blue',
    units: [
      {
        id: 'grammar-foundations',
        title: 'Foundations of Usage',
        summary: 'Articles, determiners, tenses and conditionals.',
        lessons: [
          {
            id: 'articles-determiners',
            title: 'Articles & Determiners',
            minutes: 12,
            difficulty: 'Foundation',
            objective: 'Use articles to mark specific, general and already-known nouns.',
            concept: 'Articles and determiners help the reader identify whether a noun is general, specific, countable, uncountable, known or unknown.',
            example: 'A teacher entered the class. The teacher carried some answer sheets.',
            trap: '“The” does not mean important; it means identifiable in context.',
            challenge: {
              prompt: 'Choose the best option: ___ Ganga is a sacred river.',
              options: ['A', 'An', 'The', 'No article'],
              correct: 2,
              explanation: 'Names of rivers take “the”: the Ganga, the Yamuna, the Nile.'
            }
          },
          {
            id: 'conditional-sentences',
            title: 'Conditional Sentences',
            minutes: 14,
            difficulty: 'Foundation',
            objective: 'Match condition forms with probability and time.',
            concept: 'Conditionals express cause-result relationships: zero for facts, first for real future, second for unreal present/future, third for unreal past.',
            example: 'If she studies regularly, she will pass.',
            trap: 'In standard third conditional, avoid “would” inside the if-clause.',
            challenge: {
              prompt: 'If he had come, we ___ him.',
              options: ['meet', 'will meet', 'would meet', 'would have met'],
              correct: 3,
              explanation: 'Third conditional uses if + had + past participle, then would have + past participle.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'literature',
    title: 'Literature Mastery',
    subtitle: 'Graduation Level',
    promise: 'Learn author-text-context links with active recall.',
    accent: 'amber',
    units: [
      {
        id: 'poetry-core',
        title: 'Poetry Core',
        summary: 'Major prescribed poems and poetic contexts.',
        lessons: [
          {
            id: 'sonnet-130',
            title: 'Shakespeare: Sonnet 130',
            minutes: 15,
            difficulty: 'Graduation',
            objective: 'Recognise anti-Petrarchan comparison and tone.',
            concept: 'Sonnet 130 undercuts exaggerated love-poetry comparisons by describing the beloved realistically.',
            example: '“My mistress’ eyes are nothing like the sun” rejects conventional hyperbolic praise.',
            trap: 'The poem is not an insult poem; it argues that honest love need not use false comparisons.',
            challenge: {
              prompt: 'Sonnet 130 is best read as a critique of:',
              options: ['Epic convention', 'Petrarchan exaggeration', 'Gothic terror', 'Stream of consciousness'],
              correct: 1,
              explanation: 'The sonnet mocks exaggerated Petrarchan praise while still affirming love.'
            }
          },
          {
            id: 'metaphysical-poetry',
            title: 'Donne and Metaphysical Wit',
            minutes: 16,
            difficulty: 'Post Graduation',
            objective: 'Identify paradox, conceit and argumentative lyric style.',
            concept: 'Metaphysical poetry often fuses intense emotion with intellectual argument, paradox and startling conceits.',
            example: '“That I may rise and stand, o’erthrow me” uses paradox in Donne’s “Batter My Heart”.',
            trap: 'A conceit is not just any comparison; it is elaborate, surprising and extended.',
            challenge: {
              prompt: 'The term most associated with Donne’s poetic style is:',
              options: ['Objective correlative', 'Metaphysical conceit', 'Negative capability', 'Stream of consciousness'],
              correct: 1,
              explanation: 'Donne is central to metaphysical conceit and argumentative lyric poetry.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'theory',
    title: 'Theory & Language',
    subtitle: 'Post Graduation Level',
    promise: 'Make precise distinctions between terms, forms, periods and movements.',
    accent: 'violet',
    units: [
      {
        id: 'literary-forms',
        title: 'Forms and Figures',
        summary: 'Simile, metaphor, sonnet, ode, elegy and more.',
        lessons: [
          {
            id: 'sonnet-form',
            title: 'The Sonnet Form',
            minutes: 10,
            difficulty: 'Concept',
            objective: 'Identify sonnet structure and common variants.',
            concept: 'A sonnet is a fourteen-line lyric poem, often organised around a turn or volta.',
            example: 'English sonnets commonly use three quatrains and a closing couplet.',
            trap: 'Do not assume every fourteen-line poem has the same rhyme scheme.',
            challenge: {
              prompt: 'A sonnet normally contains how many lines?',
              options: ['10', '12', '14', '16'],
              correct: 2,
              explanation: 'The standard sonnet has fourteen lines.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'pedagogy',
    title: 'Pedagogy & ICT',
    subtitle: 'Teaching Learning Material',
    promise: 'Apply teaching principles to classroom situations and assessment.',
    accent: 'green',
    units: [
      {
        id: 'teaching-models',
        title: 'Teaching Models',
        summary: 'Advance organizer, inquiry training, group investigation and non-directive models.',
        lessons: [
          {
            id: 'advance-organizer',
            title: 'Advance Organizer Model',
            minutes: 10,
            difficulty: 'Pedagogy',
            objective: 'Use a conceptual hook before detailed instruction.',
            concept: 'Ausubel’s advance organizer model introduces a broad framework before detailed learning material.',
            example: 'Before teaching literary periods, show a timeline from Renaissance to Postmodernism.',
            trap: 'An advance organizer is not a summary after the lesson; it comes before instruction.',
            challenge: {
              prompt: 'Advance organizer model is mainly associated with:',
              options: ['Piaget', 'Ausubel', 'Skinner', 'Bruner'],
              correct: 1,
              explanation: 'David Ausubel is associated with meaningful verbal learning and advance organizers.'
            }
          }
        ]
      }
    ]
  }
];

export function allLessons() {
  return curriculum.flatMap(track => track.units.flatMap(unit => unit.lessons.map(lesson => ({ ...lesson, trackId: track.id, trackTitle: track.title, unitTitle: unit.title }))));
}
