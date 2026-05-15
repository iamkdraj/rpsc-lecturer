import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { lessons } from './data/lessons.js';
import { Nav } from './components/Nav.jsx';
import { CoursesPage, HomePage, MockTestsPage, PracticePage, StudyPlanPage, SyllabusPage } from './components/pages.jsx';
import './styles.css';

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

  function startLesson(lesson) {
    setActiveLesson(lesson);
    go('practice');
  }

  function answerKey(lessonId, idx) {
    return `${lessonId}-${idx}`;
  }

  return <main>
    <Nav activePage={activePage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} go={go} />
    {activePage === 'home' && <HomePage go={go} startLesson={startLesson} />}
    {activePage === 'courses' && <CoursesPage go={go} startLesson={startLesson} />}
    {activePage === 'practice' && <PracticePage activeLesson={activeLesson} setActiveLesson={setActiveLesson} answers={answers} setAnswers={setAnswers} answerKey={answerKey} score={score} />}
    {activePage === 'mock-tests' && <MockTestsPage go={go} />}
    {activePage === 'syllabus' && <SyllabusPage />}
    {activePage === 'study-plan' && <StudyPlanPage go={go} />}
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
