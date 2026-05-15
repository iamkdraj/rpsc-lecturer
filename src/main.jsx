import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BookOpen, CheckCircle2, Clock3, FileText, GraduationCap, LayoutDashboard, ListChecks, Menu, Route, ShieldCheck, Sparkles, Target, X } from 'lucide-react';
import { curriculum, allLessons } from './data/curriculum.js';
import { syllabus } from './data/syllabus.js';
import './styles.css';

const lessons = allLessons();
const nav = [
  ['dashboard', 'Dashboard'],
  ['courses', 'Courses'],
  ['lesson', 'Lesson'],
  ['syllabus', 'Syllabus'],
  ['mocks', 'Mock Tests']
];

function App() {
  const [view, setView] = useState('dashboard');
  const [menu, setMenu] = useState(false);
  const [activeTrackId, setActiveTrackId] = useState(curriculum[0].id);
  const [activeLessonId, setActiveLessonId] = useState(lessons[0].id);
  const [answers, setAnswers] = useState({});
  const activeTrack = curriculum.find(t => t.id === activeTrackId) || curriculum[0];
  const activeLesson = lessons.find(l => l.id === activeLessonId) || lessons[0];
  const answered = Object.keys(answers).length;
  const correct = Object.values(answers).filter(Boolean).length;

  function openLesson(trackId, lessonId) {
    setActiveTrackId(trackId);
    setActiveLessonId(lessonId);
    setView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function go(next) {
    setView(next);
    setMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return <main className="appFrame">
    <header className="topbar">
      <button className="brand" onClick={() => go('dashboard')}><span>R</span><strong>RPSC English</strong></button>
      <button className="menuButton" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
      <nav className={menu ? 'navMenu open' : 'navMenu'}>{nav.map(([id, label]) => <button key={id} className={view === id ? 'active' : ''} onClick={() => go(id)}>{label}</button>)}</nav>
    </header>

    {view === 'dashboard' && <Dashboard openLesson={openLesson} correct={correct} answered={answered} />}
    {view === 'courses' && <Courses activeTrackId={activeTrackId} setActiveTrackId={setActiveTrackId} openLesson={openLesson} />}
    {view === 'lesson' && <LessonPlayer lesson={activeLesson} answers={answers} setAnswers={setAnswers} openLesson={openLesson} />}
    {view === 'syllabus' && <Syllabus />}
    {view === 'mocks' && <Mocks go={go} />}
  </main>;
}

function Dashboard({ openLesson, correct, answered }) {
  return <>
    <section className="heroGrid">
      <div className="heroPanel">
        <div className="eyebrow"><Sparkles size={16} /> Challenge-first preparation</div>
        <h1>Study RPSC Lecturer English through guided lessons and MCQ challenges.</h1>
        <p>Pick a course path, solve a small challenge, read the explanation, and move to the next concept. Built for syllabus coverage and negative-marking discipline.</p>
        <div className="heroActions"><button className="primaryBtn" onClick={() => openLesson('grammar', 'articles-determiners')}>Start first challenge <ArrowRight size={18} /></button><button className="ghostBtn" onClick={() => document.querySelector('#course-map')?.scrollIntoView({ behavior: 'smooth' })}>View course map</button></div>
      </div>
      <div className="dailyCard">
        <span className="cardLabel">Today’s challenge</span>
        <h2>Choose the correct article</h2>
        <p>He is ___ honest man.</p>
        <div className="pillOptions"><span>a</span><span className="right">an</span><span>the</span></div>
        <div className="explainLine"><CheckCircle2 size={18} /> Answer first. Explanation second.</div>
      </div>
    </section>
    <section className="metricGrid">
      <Metric icon={<Target />} label="Exam pattern" value="150 MCQs" />
      <Metric icon={<Clock3 />} label="Duration" value="3 hours" />
      <Metric icon={<ShieldCheck />} label="Negative marking" value="1/3" />
      <Metric icon={<CheckCircle2 />} label="Session score" value={`${correct}/${answered || 0}`} />
    </section>
    <section id="course-map" className="sectionBlock"><SectionTitle icon={<Route />} kicker="Course map" title="Choose a path and start solving." /><CourseMap openLesson={openLesson} /></section>
  </>;
}

function Courses({ activeTrackId, setActiveTrackId, openLesson }) {
  const active = curriculum.find(t => t.id === activeTrackId) || curriculum[0];
  return <section className="workspace twoColumn">
    <aside className="rail"><span className="cardLabel">Courses</span>{curriculum.map(track => <button key={track.id} className={track.id === activeTrackId ? 'railItem active' : 'railItem'} onClick={() => setActiveTrackId(track.id)}><strong>{track.title}</strong><small>{track.subtitle}</small></button>)}</aside>
    <div className="mainCard"><span className={`trackBadge ${active.accent}`}>{active.subtitle}</span><h1>{active.title}</h1><p className="mutedText">{active.promise}</p>{active.units.map(unit => <Unit key={unit.id} track={active} unit={unit} openLesson={openLesson} />)}</div>
  </section>;
}

function CourseMap({ openLesson }) {
  return <div className="courseGrid">{curriculum.map(track => <article className="courseCard" key={track.id}><span className={`trackBadge ${track.accent}`}>{track.subtitle}</span><h3>{track.title}</h3><p>{track.promise}</p>{track.units.map(unit => <div key={unit.id} className="miniUnit"><strong>{unit.title}</strong>{unit.lessons.slice(0, 2).map(lesson => <button key={lesson.id} onClick={() => openLesson(track.id, lesson.id)}>{lesson.title}<ArrowRight size={15} /></button>)}</div>)}</article>)}</div>;
}

function Unit({ track, unit, openLesson }) {
  return <div className="unitBlock"><div><h2>{unit.title}</h2><p>{unit.summary}</p></div><div className="lessonPath">{unit.lessons.map((lesson, index) => <button key={lesson.id} className="lessonNode" onClick={() => openLesson(track.id, lesson.id)}><span>{index + 1}</span><div><strong>{lesson.title}</strong><small>{lesson.minutes} min · {lesson.difficulty}</small></div></button>)}</div></div>;
}

function LessonPlayer({ lesson, answers, setAnswers, openLesson }) {
  const key = lesson.id;
  const selected = answers[key];
  const choiceMade = selected !== undefined;
  const isCorrect = selected === true;
  const track = curriculum.find(t => t.id === lesson.trackId) || curriculum[0];
  const next = lessons[(lessons.findIndex(l => l.id === lesson.id) + 1) % lessons.length];
  return <section className="workspace lessonLayout">
    <aside className="rail lessonRail"><span className="cardLabel">Lesson path</span><strong>{lesson.trackTitle}</strong><small>{lesson.unitTitle}</small><div className="stepList"><span className="done">Concept</span><span className="active">Challenge</span><span>Explanation</span><span>Next</span></div></aside>
    <article className="mainCard lessonCard"><span className={`trackBadge ${track.accent}`}>{lesson.difficulty} · {lesson.minutes} min</span><h1>{lesson.title}</h1><p className="objective">Goal: {lesson.objective}</p><div className="conceptGrid"><Info title="Concept" text={lesson.concept} /><Info title="Example" text={lesson.example} /><Info title="Common trap" text={lesson.trap} /></div><div className="challengeBox"><span className="cardLabel">Try it</span><h2>{lesson.challenge.prompt}</h2><div className="answerGrid">{lesson.challenge.options.map((option, index) => <button key={option} className={choiceMade ? index === lesson.challenge.correct ? 'correct' : 'dim' : ''} onClick={() => setAnswers({ ...answers, [key]: index === lesson.challenge.correct })}>{option}</button>)}</div>{choiceMade && <div className={isCorrect ? 'feedback good' : 'feedback bad'}><strong>{isCorrect ? 'Correct.' : 'Not quite.'}</strong><p>{lesson.challenge.explanation}</p></div>}</div><button className="primaryBtn nextBtn" onClick={() => openLesson(next.trackId, next.id)}>Next lesson <ArrowRight size={18} /></button></article>
  </section>;
}

function Syllabus() {
  return <section className="sectionBlock"><SectionTitle icon={<ListChecks />} kicker="Syllabus" title="Full coverage map" /><div className="syllabusGrid">{syllabus.map(part => <article className="syllabusCard" key={part.id}><span className="cardLabel">{part.part}</span><h2>{part.title}</h2><p>{part.weightHint}</p><details><summary>{part.topics.length} topics</summary><ul>{part.topics.map(topic => <li key={topic}>{topic}</li>)}</ul></details></article>)}</div></section>;
}

function Mocks({ go }) {
  return <section className="sectionBlock"><SectionTitle icon={<FileText />} kicker="Mock tests" title="Practice under exam conditions." /><div className="courseGrid"><Mock title="Diagnostic Mini Mock" meta="25 questions · 30 min" /><Mock title="Grammar Section Test" meta="40 questions · 45 min" /><Mock title="Full Mock Test 1" meta="150 questions · 3 hours" /></div><button className="primaryBtn" onClick={() => go('lesson')}>Prepare with lessons first</button></section>;
}

function Mock({ title, meta }) { return <article className="courseCard"><span className="cardLabel">Coming soon</span><h3>{title}</h3><p>{meta}</p><p>Will include scoring, explanations and negative marking estimate.</p></article>; }
function Info({ title, text }) { return <div className="infoCard"><span className="cardLabel">{title}</span><p>{text}</p></div>; }
function Metric({ icon, label, value }) { return <div className="metricCard">{icon}<span>{label}</span><strong>{value}</strong></div>; }
function SectionTitle({ icon, kicker, title }) { return <div className="sectionTitle">{icon}<span>{kicker}</span><h2>{title}</h2></div>; }

createRoot(document.getElementById('root')).render(<App />);
