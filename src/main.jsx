import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock3,
  GraduationCap,
  Layers3,
  Menu,
  PenTool,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  X
} from 'lucide-react';
import { syllabus } from './data/syllabus.js';
import { lessons } from './data/lessons.js';
import './styles.css';

const tracks = [
  { name: 'Grammar Sprint', detail: 'Senior secondary grammar, usage, vocabulary and comprehension.', icon: PenTool },
  { name: 'Literature Mastery', detail: 'English, American and Indian authors with exam-safe recall.', icon: BookOpen },
  { name: 'Theory & Language', detail: 'Literary terms, periods, movements and varieties of language.', icon: Layers3 },
  { name: 'Pedagogy & ICT', detail: 'Teaching models, TLM, digital learning and assessment.', icon: GraduationCap }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState(lessons[0]);
  const [answers, setAnswers] = useState({});
  const score = useMemo(() => Object.values(answers).filter(Boolean).length, [answers]);

  function answerKey(lessonId, idx) {
    return `${lessonId}-${idx}`;
  }

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="RPSC Lecturer English home">
          <span>RL</span>
          <strong>RPSC Lecturer English</strong>
        </a>
        <button className="menuToggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={menuOpen ? 'navLinks open' : 'navLinks'}>
          <a href="#courses">Courses</a>
          <a href="#practice">Practice</a>
          <a href="#syllabus">Syllabus</a>
          <a href="#plan">Study plan</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="heroCopy">
          <div className="eyebrow"><Sparkles size={16} /> Complete English preparation</div>
          <h1>Master RPSC Lecturer English with active learning.</h1>
          <p className="lede">
            Structured lessons, exam-style MCQs, misconception traps and fast revision paths for Grammar, Literature, Literary Theory, Pedagogy and ICT.
          </p>
          <div className="heroActions">
            <a className="btn primary" href="#practice">Start learning <ArrowRight size={18} /></a>
            <a className="btn secondary" href="#syllabus">View syllabus</a>
          </div>
          <div className="trustRow">
            <span><ShieldCheck size={17} /> Syllabus aligned</span>
            <span><Target size={17} /> 150 MCQ pattern</span>
            <span><Clock3 size={17} /> 3-hour exam focus</span>
          </div>
        </div>
        <div className="heroCard" aria-label="Exam dashboard preview">
          <div className="dashTop"><span>Diagnostic Path</span><strong>RPSC English</strong></div>
          <div className="ring"><span>4</span><small>core sections</small></div>
          <div className="dashList">
            <DashItem label="Grammar accuracy" value="Foundation" />
            <DashItem label="Literature recall" value="High yield" />
            <DashItem label="Pedagogy judgement" value="Scoring" />
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Exam pattern">
        <Stat icon={<BarChart3 />} label="Maximum marks" value="300" />
        <Stat icon={<Brain />} label="Total questions" value="150 MCQs" />
        <Stat icon={<Clock3 />} label="Duration" value="3 hours" />
        <Stat icon={<Target />} label="Negative marking" value="1/3" />
      </section>

      <section id="courses" className="section">
        <div className="sectionHead">
          <span className="kicker">Course architecture</span>
          <h2>Four tracks. One exam-focused path.</h2>
          <p>Every topic is broken into concept clarity, contrast examples, active recall and explanation-based practice.</p>
        </div>
        <div className="trackGrid">
          {tracks.map(({ name, detail, icon: Icon }) => (
            <article className="trackCard" key={name}>
              <div className="iconBox"><Icon size={23} /></div>
              <h3>{name}</h3>
              <p>{detail}</p>
              <a href="#practice">Explore <ChevronRight size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="practice" className="practiceShell">
        <div className="lessonRail">
          <span className="kicker">Interactive practice</span>
          <h2>Learn by answering, not scrolling.</h2>
          <p>Choose a lesson. Read the concept, catch the trap, then answer exam-style questions with explanations.</p>
          <div className="lessonTabs">
            {lessons.map((lesson) => (
              <button
                key={lesson.id}
                className={lesson.id === activeLesson.id ? 'lessonTab active' : 'lessonTab'}
                onClick={() => setActiveLesson(lesson)}
              >
                <span>{lesson.track}</span>
                {lesson.title}
                <small>{lesson.difficulty} · {lesson.minutes} min</small>
              </button>
            ))}
          </div>
        </div>

        <article className="lessonPanel">
          <div className="lessonMeta">
            <span>{activeLesson.track}</span>
            <small>{activeLesson.difficulty}</small>
          </div>
          <h2>{activeLesson.title}</h2>
          <p className="principle">{activeLesson.principle}</p>
          <div className="learningSteps">
            <Step index="01" title="Concept" text={activeLesson.concept} />
            <Step index="02" title="Example" text={activeLesson.example} />
            <Step index="03" title="Common trap" text={activeLesson.misconception} />
          </div>
          <div className="thinkBox">
            <strong>Pause and think</strong>
            <p>{activeLesson.prompt}</p>
            <details><summary>Reveal explanation</summary><p>{activeLesson.answer}</p></details>
          </div>
          <div className="quizBlock">
            <h3>Quick drill</h3>
            {activeLesson.quiz.map((item, idx) => (
              <Quiz
                key={idx}
                item={item}
                selected={answers[answerKey(activeLesson.id, idx)]}
                onSelect={(isCorrect) => setAnswers({ ...answers, [answerKey(activeLesson.id, idx)]: isCorrect })}
              />
            ))}
          </div>
          <p className="score"><CheckCircle2 size={18} /> Correct answers this session: {score}</p>
        </article>
      </section>

      <section id="syllabus" className="section syllabusSection">
        <div className="sectionHead">
          <span className="kicker">Syllabus coverage</span>
          <h2>Know exactly what must be prepared.</h2>
          <p>The exam combines school-level usage, graduation-level texts, postgraduate-level theory and teaching methodology.</p>
        </div>
        <div className="syllabusGrid">
          {syllabus.map((part) => (
            <article className="syllabusCard" key={part.id}>
              <span className="part">{part.part}</span>
              <h3>{part.title}</h3>
              <p>{part.weightHint}</p>
              <details>
                <summary>{part.topics.length} topics <ChevronRight size={16} /></summary>
                <ul>{part.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section id="plan" className="studyPlan">
        <div>
          <span className="kicker">Recommended route</span>
          <h2>Start with accuracy. Then build recall speed.</h2>
          <p>Because the paper has negative marking, the goal is not just “attempt more”. The goal is confident selection under time pressure.</p>
        </div>
        <ol>
          <li><strong>Week 1–2:</strong> Grammar and usage accuracy drills.</li>
          <li><strong>Week 3–5:</strong> Author-text mapping and literary terms.</li>
          <li><strong>Week 6–7:</strong> Pedagogy, ICT and mixed practice.</li>
          <li><strong>Final stretch:</strong> Full mock tests and error-log revision.</li>
        </ol>
        <a className="btn primary" href="#practice"><Play size={17} /> Continue practice</a>
      </section>
    </main>
  );
}

function Stat({ icon, label, value }) {
  return <div className="stat">{icon}<span>{label}</span><strong>{value}</strong></div>;
}

function DashItem({ label, value }) {
  return <div className="dashItem"><span>{label}</span><strong>{value}</strong></div>;
}

function Step({ index, title, text }) {
  return <div className="step"><span>{index}</span><div><strong>{title}</strong><p>{text}</p></div></div>;
}

function Quiz({ item, selected, onSelect }) {
  return (
    <div className="quiz">
      <p>{item.q}</p>
      <div className="options">
        {item.options.map((opt, idx) => (
          <button
            key={opt}
            onClick={() => onSelect(idx === item.correct)}
            className={selected === undefined ? '' : idx === item.correct ? 'correct' : 'muted'}
          >
            {opt}
          </button>
        ))}
      </div>
      {selected !== undefined && <p className={selected ? 'ok' : 'bad'}>{selected ? 'Correct.' : 'Not quite.'} {item.why}</p>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
