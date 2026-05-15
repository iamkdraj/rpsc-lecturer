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
  FileText,
  GraduationCap,
  Layers3,
  LayoutDashboard,
  ListChecks,
  Menu,
  PenTool,
  Play,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  X
} from 'lucide-react';
import { syllabus } from './data/syllabus.js';
import { lessons } from './data/lessons.js';
import { courseTracks, mockTests, pages, studyMilestones } from './data/appPages.js';
import './styles.css';

const iconMap = { grammar: PenTool, literature: BookOpen, theory: Layers3, pedagogy: GraduationCap };
const navItems = pages.map((page) => ({ id: page.id, label: page.label }));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [activeLesson, setActiveLesson] = useState(lessons[0]);
  const [answers, setAnswers] = useState({});
  const score = useMemo(() => Object.values(answers).filter(Boolean).length, [answers]);

  function go(page) {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function answerKey(lessonId, idx) {
    return `${lessonId}-${idx}`;
  }

  return (
    <main>
      <nav className="nav">
        <button className="brand" onClick={() => go('home')} aria-label="RPSC Lecturer English home">
          <span>RL</span>
          <strong>RPSC Lecturer English</strong>
        </button>
        <button className="menuToggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={menuOpen ? 'navLinks open' : 'navLinks'}>
          {navItems.map((item) => <button key={item.id} className={activePage === item.id ? 'active' : ''} onClick={() => go(item.id)}>{item.label}</button>)}
        </div>
      </nav>

      {activePage === 'home' && <HomePage go={go} />}
      {activePage === 'courses' && <CoursesPage go={go} />}
      {activePage === 'practice' && <PracticePage activeLesson={activeLesson} setActiveLesson={setActiveLesson} answers={answers} setAnswers={setAnswers} answerKey={answerKey} score={score} />}
      {activePage === 'mock-tests' && <MockTestsPage go={go} />}
      {activePage === 'syllabus' && <SyllabusPage />}
      {activePage === 'study-plan' && <StudyPlanPage go={go} />}
    </main>
  );
}

function HomePage({ go }) {
  return <>
    <section className="hero pageHero">
      <div className="heroCopy">
        <div className="eyebrow"><Sparkles size={16} /> Complete English preparation</div>
        <h1>Master RPSC Lecturer English with active learning.</h1>
        <p className="lede">Structured lessons, exam-style MCQs, misconception traps and revision paths for Grammar, Literature, Literary Theory, Pedagogy and ICT.</p>
        <div className="heroActions">
          <button className="btn primary" onClick={() => go('practice')}>Start learning <ArrowRight size={18} /></button>
          <button className="btn secondary" onClick={() => go('syllabus')}>View syllabus</button>
        </div>
        <div className="trustRow">
          <span><ShieldCheck size={17} /> Syllabus aligned</span>
          <span><Target size={17} /> 150 MCQ pattern</span>
          <span><Clock3 size={17} /> 3-hour exam focus</span>
        </div>
      </div>
      <div className="heroCard" aria-label="Exam dashboard preview">
        <div className="dashTop"><span>Preparation Path</span><strong>RPSC English</strong></div>
        <div className="ring"><span>4</span><small>core sections</small></div>
        <div className="dashList">
          <DashItem label="Grammar accuracy" value="Foundation" />
          <DashItem label="Literature recall" value="High yield" />
          <DashItem label="Pedagogy judgement" value="Scoring" />
        </div>
      </div>
    </section>
    <ExamStats />
    <section className="section">
      <SectionHead kicker="Inside the app" title="A complete prep workspace, not a notes dump." text="Move between course tracks, practice lessons, syllabus coverage, mock tests and a study plan built around negative marking." />
      <div className="featureGrid">
        <Feature icon={<LayoutDashboard />} title="Course dashboard" text="Four clear tracks for the four paper areas." />
        <Feature icon={<ListChecks />} title="Active recall" text="Lessons ask questions before revealing explanations." />
        <Feature icon={<FileText />} title="Mock test roadmap" text="Section tests and full mocks are planned into the product structure." />
        <Feature icon={<Route />} title="Revision route" text="A practical path from accuracy to exam-speed recall." />
      </div>
    </section>
    <CoursesPreview go={go} />
  </>;
}

function CoursesPage({ go }) {
  return <>
    <PageHeader pageId="courses" icon={<BookOpen />} />
    <CoursesPreview go={go} full />
  </>;
}

function CoursesPreview({ go, full = false }) {
  return <section className="section">
    {!full && <SectionHead kicker="Course architecture" title="Four tracks. One exam-focused path." text="Every topic is broken into concept clarity, contrast examples, active recall and explanation-based practice." />}
    <div className="trackGrid">
      {courseTracks.map((track) => {
        const Icon = iconMap[track.id] || BookOpen;
        return <article className="trackCard" key={track.id}>
          <div className="iconBox"><Icon size={23} /></div>
          <span className="miniLabel">{track.level}</span>
          <h3>{track.name}</h3>
          <p>{track.detail}</p>
          {full && <ul className="moduleList">{track.modules.map((m) => <li key={m}>{m}</li>)}</ul>}
          <strong className="outcome">{track.outcome}</strong>
          <button onClick={() => go('practice')}>Start practice <ChevronRight size={16} /></button>
        </article>;
      })}
    </div>
  </section>;
}

function PracticePage({ activeLesson, setActiveLesson, answers, setAnswers, answerKey, score }) {
  return <>
    <PageHeader pageId="practice" icon={<PenTool />} />
    <section className="practiceShell compactTop">
      <div className="lessonRail">
        <span className="kicker">Interactive practice</span>
        <h2>Learn by answering, not scrolling.</h2>
        <p>Choose a lesson. Read the concept, catch the trap, then answer exam-style questions with explanations.</p>
        <div className="lessonTabs">
          {lessons.map((lesson) => <button key={lesson.id} className={lesson.id === activeLesson.id ? 'lessonTab active' : 'lessonTab'} onClick={() => setActiveLesson(lesson)}><span>{lesson.track}</span>{lesson.title}<small>{lesson.difficulty} · {lesson.minutes} min</small></button>)}
        </div>
      </div>
      <article className="lessonPanel">
        <div className="lessonMeta"><span>{activeLesson.track}</span><small>{activeLesson.difficulty}</small></div>
        <h2>{activeLesson.title}</h2>
        <p className="principle">{activeLesson.principle}</p>
        <div className="learningSteps">
          <Step index="01" title="Concept" text={activeLesson.concept} />
          <Step index="02" title="Example" text={activeLesson.example} />
          <Step index="03" title="Common trap" text={activeLesson.misconception} />
        </div>
        <div className="thinkBox"><strong>Pause and think</strong><p>{activeLesson.prompt}</p><details><summary>Reveal explanation</summary><p>{activeLesson.answer}</p></details></div>
        <div className="quizBlock"><h3>Quick drill</h3>{activeLesson.quiz.map((item, idx) => <Quiz key={idx} item={item} selected={answers[answerKey(activeLesson.id, idx)]} onSelect={(isCorrect) => setAnswers({ ...answers, [answerKey(activeLesson.id, idx)]: isCorrect })} />)}</div>
        <p className="score"><CheckCircle2 size={18} /> Correct answers this session: {score}</p>
      </article>
    </section>
  </>;
}

function MockTestsPage({ go }) {
  return <>
    <PageHeader pageId="mock-tests" icon={<FileText />} />
    <ExamStats />
    <section className="section compactTop">
      <div className="mockGrid">
        {mockTests.map((test) => <article className="mockCard" key={test.id}>
          <span className="miniLabel">{test.status}</span>
          <h3>{test.title}</h3>
          <p>{test.purpose}</p>
          <div className="mockMeta"><strong>{test.questions} questions</strong><strong>{test.duration}</strong></div>
          <button className="btn primary" onClick={() => go('practice')}>Prepare first <ArrowRight size={17} /></button>
        </article>)}
      </div>
    </section>
  </>;
}

function SyllabusPage() {
  return <>
    <PageHeader pageId="syllabus" icon={<ListChecks />} />
    <section className="section compactTop syllabusSection"><div className="syllabusGrid">{syllabus.map((part) => <article className="syllabusCard" key={part.id}><span className="part">{part.part}</span><h3>{part.title}</h3><p>{part.weightHint}</p><details open><summary>{part.topics.length} topics <ChevronRight size={16} /></summary><ul>{part.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></details></article>)}</div></section>
  </>;
}

function StudyPlanPage({ go }) {
  return <>
    <PageHeader pageId="study-plan" icon={<Route />} />
    <section className="studyPlan standalone"><div><span className="kicker">Recommended route</span><h2>Start with accuracy. Then build recall speed.</h2><p>Because the paper has negative marking, the goal is confident selection under time pressure.</p></div><ol>{studyMilestones.map((m) => <li key={m.week}><strong>{m.week}: {m.focus}</strong><br />{m.action}</li>)}</ol><button className="btn primary" onClick={() => go('practice')}><Play size={17} /> Continue practice</button></section>
  </>;
}

function PageHeader({ pageId, icon }) {
  const page = pages.find((p) => p.id === pageId);
  return <section className="innerHero"><div className="iconBox large">{icon}</div><span className="kicker">{page.label}</span><h1>{page.headline}</h1><p>{page.description}</p></section>;
}
function SectionHead({ kicker, title, text }) { return <div className="sectionHead"><span className="kicker">{kicker}</span><h2>{title}</h2><p>{text}</p></div>; }
function ExamStats() { return <section className="stats" aria-label="Exam pattern"><Stat icon={<BarChart3 />} label="Maximum marks" value="300" /><Stat icon={<Brain />} label="Total questions" value="150 MCQs" /><Stat icon={<Clock3 />} label="Duration" value="3 hours" /><Stat icon={<Target />} label="Negative marking" value="1/3" /></section>; }
function Feature({ icon, title, text }) { return <article className="featureCard">{icon}<h3>{title}</h3><p>{text}</p></article>; }
function Stat({ icon, label, value }) { return <div className="stat">{icon}<span>{label}</span><strong>{value}</strong></div>; }
function DashItem({ label, value }) { return <div className="dashItem"><span>{label}</span><strong>{value}</strong></div>; }
function Step({ index, title, text }) { return <div className="step"><span>{index}</span><div><strong>{title}</strong><p>{text}</p></div></div>; }
function Quiz({ item, selected, onSelect }) { return <div className="quiz"><p>{item.q}</p><div className="options">{item.options.map((opt, idx) => <button key={opt} onClick={() => onSelect(idx === item.correct)} className={selected === undefined ? '' : idx === item.correct ? 'correct' : 'muted'}>{opt}</button>)}</div>{selected !== undefined && <p className={selected ? 'ok' : 'bad'}>{selected ? 'Correct.' : 'Not quite.'} {item.why}</p>}</div>; }

createRoot(document.getElementById('root')).render(<App />);
