import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BookOpen, Brain, Building2, CheckCircle2, ChevronRight, Factory, GraduationCap, Sparkles, Target } from 'lucide-react';
import { syllabus } from './data/syllabus.js';
import { lessons } from './data/lessons.js';
import { company } from './data/company.js';
import './styles.css';

function App() {
  const [activeLesson, setActiveLesson] = useState(lessons[0]);
  const [answers, setAnswers] = useState({});
  const progress = useMemo(() => Object.values(answers).filter(Boolean).length, [answers]);

  function answerKey(lessonId, idx) { return `${lessonId}-${idx}`; }

  return <main>
    <section className="hero">
      <div className="eyebrow"><Sparkles size={16}/> AI-company built learning lab</div>
      <h1>RPSC Lecturer English Lab</h1>
      <p className="lede">A Brilliant-style static learning experience for Senior Secondary grammar, Graduation literature, PG concepts, pedagogy and ICT — built to be improved by autonomous AI agents.</p>
      <div className="heroGrid">
        <Metric icon={<Target/>} label="Exam" value="150 MCQs · 300 marks · 3 hours" />
        <Metric icon={<Brain/>} label="Penalty" value="1/3 negative marking" />
        <Metric icon={<Factory/>} label="Experiment" value="24/7 AI company workflow" />
      </div>
    </section>

    <section className="panel">
      <div className="sectionTitle"><GraduationCap/> Syllabus map</div>
      <div className="syllabusGrid">{syllabus.map(part => <article className="card" key={part.id}>
        <span className="part">{part.part}</span>
        <h2>{part.title}</h2>
        <p>{part.weightHint}</p>
        <details><summary>{part.topics.length} topics <ChevronRight size={16}/></summary>
          <ul>{part.topics.map(t => <li key={t}>{t}</li>)}</ul>
        </details>
      </article>)}</div>
    </section>

    <section className="learnLayout">
      <aside className="lessonList">
        <div className="sectionTitle"><BookOpen/> Interactive lessons</div>
        {lessons.map(lesson => <button key={lesson.id} className={lesson.id === activeLesson.id ? 'lessonBtn active' : 'lessonBtn'} onClick={() => setActiveLesson(lesson)}>
          <span>{lesson.track}</span>{lesson.title}<small>{lesson.difficulty} · {lesson.minutes} min</small>
        </button>)}
      </aside>
      <article className="lesson panel">
        <span className="tag">{activeLesson.track}</span>
        <h2>{activeLesson.title}</h2>
        <p className="principle">Teaching principle: {activeLesson.principle}</p>
        <Step title="Concept" text={activeLesson.concept}/>
        <Step title="Example" text={activeLesson.example}/>
        <Step title="Common trap" text={activeLesson.misconception}/>
        <div className="checkpoint"><strong>Think:</strong> {activeLesson.prompt}<details><summary>Reveal explanation</summary><p>{activeLesson.answer}</p></details></div>
        <h3>Quick drill</h3>
        {activeLesson.quiz.map((item, idx) => <Quiz key={idx} item={item} selected={answers[answerKey(activeLesson.id, idx)]} onSelect={(isCorrect) => setAnswers({...answers, [answerKey(activeLesson.id, idx)]: isCorrect})}/>) }
        <p className="progress"><CheckCircle2 size={18}/> Correct answers this session: {progress}</p>
      </article>
    </section>

    <section className="panel company">
      <div className="sectionTitle"><Building2/> The AI company behind the product</div>
      <p>{company.mission}</p>
      <p><strong>Business target:</strong> {company.revenueGoal}</p>
      <div className="deptGrid">{company.departments.map(d => <article className="dept" key={d.name}><h3>{d.name}</h3><p>{d.mandate}</p><ul>{d.agents.map(a => <li key={a}>{a}</li>)}</ul></article>)}</div>
    </section>
  </main>;
}

function Metric({icon, label, value}) { return <div className="metric">{icon}<div><span>{label}</span><strong>{value}</strong></div></div>; }
function Step({title, text}) { return <div className="step"><span>{title}</span><p>{text}</p></div>; }
function Quiz({item, selected, onSelect}) { return <div className="quiz"><p>{item.q}</p>{item.options.map((opt, idx) => <button key={opt} onClick={() => onSelect(idx === item.correct)} className={selected === undefined ? '' : idx === item.correct ? 'correct' : 'muted'}>{opt}</button>)}{selected !== undefined && <p className={selected ? 'ok' : 'bad'}>{selected ? 'Correct.' : 'Not quite.'} {item.why}</p>}</div>; }

createRoot(document.getElementById('root')).render(<App />);
