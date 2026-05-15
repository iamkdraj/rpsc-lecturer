import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BookOpen, Check, ChevronRight, Clock, Compass, FileText, Flame, GraduationCap, Layers, Menu, Play, ShieldCheck, Sparkles, Target, X } from 'lucide-react';
import { course, lessons } from './data/course.js';
import { syllabus } from './data/syllabus.js';
import './styles.css';

function App() {
  const [view, setView] = useState('learn');
  const [menuOpen, setMenuOpen] = useState(false);
  const [trackId, setTrackId] = useState(course.tracks[0].id);
  const [lessonId, setLessonId] = useState(lessons[0].id);
  const [answers, setAnswers] = useState({});
  const activeTrack = course.tracks.find(t => t.id === trackId) || course.tracks[0];
  const activeLesson = lessons.find(l => l.id === lessonId) || lessons[0];
  const selected = answers[activeLesson.id];
  const solved = selected !== undefined;
  const correctCount = Object.values(answers).filter(Boolean).length;
  const progress = Math.round((Object.keys(answers).length / lessons.length) * 100);

  function openLesson(nextTrackId, nextLessonId) {
    setTrackId(nextTrackId);
    setLessonId(nextLessonId);
    setView('lesson');
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function nextLesson() {
    const idx = lessons.findIndex(l => l.id === activeLesson.id);
    const next = lessons[(idx + 1) % lessons.length];
    openLesson(next.track.id, next.id);
  }

  return <main className="shell">
    <aside className="side">
      <button className="brand" onClick={() => setView('learn')}><span>R</span><b>RPSC English</b></button>
      <button className="hamb" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <NavButton active={view === 'learn'} icon={<Compass />} onClick={() => setView('learn')}>Learn</NavButton>
        <NavButton active={view === 'lesson'} icon={<Play />} onClick={() => setView('lesson')}>Lesson</NavButton>
        <NavButton active={view === 'syllabus'} icon={<FileText />} onClick={() => setView('syllabus')}>Syllabus</NavButton>
        <NavButton active={view === 'mocks'} icon={<Target />} onClick={() => setView('mocks')}>Mocks</NavButton>
      </nav>
      <div className="sideStat"><span>Progress</span><strong>{progress}%</strong><i><em style={{ width: `${progress}%` }} /></i></div>
    </aside>

    <section className="stage">
      {view === 'learn' && <Learn activeTrack={activeTrack} setTrackId={setTrackId} openLesson={openLesson} correctCount={correctCount} />}
      {view === 'lesson' && <Lesson lesson={activeLesson} selected={selected} setAnswers={setAnswers} answers={answers} nextLesson={nextLesson} solved={solved} />}
      {view === 'syllabus' && <Syllabus />}
      {view === 'mocks' && <Mocks />}
    </section>
  </main>;
}

function NavButton({ active, icon, children, onClick }) {
  return <button className={active ? 'navBtn active' : 'navBtn'} onClick={onClick}>{icon}<span>{children}</span></button>;
}

function Learn({ activeTrack, setTrackId, openLesson, correctCount }) {
  return <>
    <section className="hero">
      <div>
        <div className="eyebrow"><Sparkles size={16} /> Interactive course</div>
        <h1>Master the RPSC English syllabus one challenge at a time.</h1>
        <p>Choose a track, unlock short lessons, answer exam-style questions, and learn from explanations immediately.</p>
        <div className="heroActions"><button className="primary" onClick={() => openLesson('grammar', 'articles')}>Start now <ArrowRight /></button><button className="secondary" onClick={() => document.querySelector('#map')?.scrollIntoView({ behavior: 'smooth' })}>See course map</button></div>
      </div>
      <div className="focusCard">
        <span>Today’s focus</span>
        <h2>Articles are signals</h2>
        <p>___ Ganga is a sacred river.</p>
        <div className="miniAnswers"><b>A</b><b>An</b><b className="ok">The</b></div>
        <small><Check size={16} /> Explanation unlocks after answer</small>
      </div>
    </section>

    <section className="stats">
      <Stat icon={<Target />} label="Questions" value={course.exam.questions} />
      <Stat icon={<GraduationCap />} label="Marks" value={course.exam.marks} />
      <Stat icon={<Clock />} label="Duration" value={course.exam.duration} />
      <Stat icon={<ShieldCheck />} label="Correct here" value={correctCount} />
    </section>

    <section id="map" className="panel">
      <Header kicker="Course map" title="Pick a track. Follow the lesson path." text="The course is arranged into tracks, units and short challenge lessons." />
      <div className="trackTabs">{course.tracks.map(track => <button key={track.id} className={track.id === activeTrack.id ? `tab active ${track.color}` : 'tab'} onClick={() => setTrackId(track.id)}><span>{track.label}</span>{track.title}</button>)}</div>
      <div className="mapLayout">
        <article className={`trackIntro ${activeTrack.color}`}><span>{activeTrack.label}</span><h2>{activeTrack.title}</h2><p>{activeTrack.outcome}</p></article>
        <div className="unitStack">{activeTrack.units.map(unit => <Unit key={unit.id} track={activeTrack} unit={unit} openLesson={openLesson} />)}</div>
      </div>
    </section>
  </>;
}

function Unit({ track, unit, openLesson }) {
  return <div className="unit"><div className="unitHead"><Layers /><div><h3>{unit.title}</h3><p>{unit.lessons.length} lessons</p></div></div><div className="nodes">{unit.lessons.map((lesson, index) => <button key={lesson.id} className="node" onClick={() => openLesson(track.id, lesson.id)}><i>{index + 1}</i><div><strong>{lesson.title}</strong><small>{lesson.type} · {lesson.minutes} min</small></div><ChevronRight /></button>)}</div></div>;
}

function Lesson({ lesson, selected, answers, setAnswers, nextLesson, solved }) {
  const isCorrect = selected === true;
  return <section className="lessonScreen">
    <div className="lessonTop"><span className={`badge ${lesson.track.color}`}>{lesson.track.title}</span><span>{lesson.minutes} min</span></div>
    <div className="lessonGrid">
      <aside className="lessonRail"><BookOpen /><h2>{lesson.title}</h2><p>{lesson.objective}</p><div className="railSteps"><b>1 Concept</b><b>2 Example</b><b className="hot">3 Challenge</b><b>4 Explain</b></div></aside>
      <article className="challenge">
        <span className="eyebrow">Learn</span>
        <h1>{lesson.setup}</h1>
        <div className="cards3"><Mini title="Key idea" text={lesson.insight} /><Mini title="Example" text={lesson.example} /><Mini title="Trap" text={lesson.trap} /></div>
        <div className="question"><span><Flame size={16} /> Challenge</span><h2>{lesson.question}</h2><div className="choices">{lesson.options.map((option, index) => <button key={option} className={solved ? index === lesson.answer ? 'right' : 'fade' : ''} onClick={() => setAnswers({ ...answers, [lesson.id]: index === lesson.answer })}>{option}</button>)}</div>{solved && <div className={isCorrect ? 'result good' : 'result wrong'}><strong>{isCorrect ? 'Correct.' : 'Not quite.'}</strong><p>{lesson.explanation}</p></div>}</div>
        <button className="primary next" onClick={nextLesson}>Continue <ArrowRight /></button>
      </article>
    </div>
  </section>;
}

function Syllabus() {
  return <section className="panel"><Header kicker="Syllabus" title="Everything mapped in one place." text="Use this as the coverage checklist while lessons expand." /><div className="syllabusGrid">{syllabus.map(part => <article className="syllabus" key={part.id}><span>{part.part}</span><h2>{part.title}</h2><p>{part.weightHint}</p><details><summary>{part.topics.length} topics</summary><ul>{part.topics.map(topic => <li key={topic}>{topic}</li>)}</ul></details></article>)}</div></section>;
}

function Mocks() {
  return <section className="panel"><Header kicker="Mock tests" title="Exam simulation comes after lesson foundations." text="The mock engine will use the same challenge system with timing, scoring and explanations." /><div className="mockGrid"><Mock title="Diagnostic Mini Mock" meta="25 questions · 30 min" /><Mock title="Grammar Section Test" meta="40 questions · 45 min" /><Mock title="Full Mock Test" meta="150 questions · 3 hours" /></div></section>;
}

function Header({ kicker, title, text }) { return <div className="sectionHeader"><span>{kicker}</span><h1>{title}</h1><p>{text}</p></div>; }
function Stat({ icon, label, value }) { return <div className="stat">{icon}<span>{label}</span><b>{value}</b></div>; }
function Mini({ title, text }) { return <div className="mini"><span>{title}</span><p>{text}</p></div>; }
function Mock({ title, meta }) { return <article className="mock"><span>Coming soon</span><h2>{title}</h2><p>{meta}</p></article>; }

createRoot(document.getElementById('root')).render(<App />);
