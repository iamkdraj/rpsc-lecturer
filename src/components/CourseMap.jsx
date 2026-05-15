import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';
import { courseTracks } from '../data/appPages.js';
import { SectionHead } from './common.jsx';
import { iconMap } from './icons.js';

export function LearningMap({ lessons, startLesson, compact = false }) {
  const learningNodes = lessons.map((lesson, index) => ({ ...lesson, node: index + 1, status: index === 0 ? 'Start' : index < 3 ? 'Unlocked' : 'Next' }));
  return <section className={compact ? 'section mapSection compactTop' : 'section mapSection'}>
    <SectionHead kicker="Course map" title="Follow the path one challenge at a time." text="Each node opens a focused lesson. More nodes will be added until the whole syllabus is covered." />
    <div className="pathMap">{learningNodes.map((lesson, index) => <button key={lesson.id} className="pathNode" onClick={() => startLesson(lesson)}><span className="nodeNumber">{lesson.node}</span><div><small>{lesson.status} · {lesson.track}</small><strong>{lesson.title}</strong><em>{lesson.minutes} min lesson</em></div>{index < learningNodes.length - 1 && <i className="pathLine" />}</button>)}</div>
  </section>;
}

export function CoursesPreview({ go, full = false }) {
  return <section className="section compactTop">
    {!full && <SectionHead kicker="Course architecture" title="Four tracks. One exam-focused path." text="Every topic is broken into concept clarity, contrast examples, active recall and explanation-based practice." />}
    <div className="trackGrid">{courseTracks.map((track) => { const Icon = iconMap[track.id] || BookOpen; return <article className="trackCard" key={track.id}><div className="iconBox"><Icon size={23} /></div><span className="miniLabel">{track.level}</span><h3>{track.name}</h3><p>{track.detail}</p>{full && <ul className="moduleList">{track.modules.map((m) => <li key={m}>{m}</li>)}</ul>}<strong className="outcome">{track.outcome}</strong><button onClick={() => go('practice')}>Start practice <ChevronRight size={16} /></button></article>; })}</div>
  </section>;
}
