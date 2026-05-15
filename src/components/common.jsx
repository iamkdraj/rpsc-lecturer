import React from 'react';
import { BarChart3, Brain, Clock3, Target } from 'lucide-react';
import { pages } from '../data/appPages.js';

export function PageHeader({ pageId, icon }) {
  const page = pages.find((p) => p.id === pageId);
  return <section className="innerHero"><div className="iconBox large">{icon}</div><span className="kicker">{page.label}</span><h1>{page.headline}</h1><p>{page.description}</p></section>;
}
export function SectionHead({ kicker, title, text }) { return <div className="sectionHead"><span className="kicker">{kicker}</span><h2>{title}</h2><p>{text}</p></div>; }
export function ExamStats() { return <section className="stats" aria-label="Exam pattern"><Stat icon={<BarChart3 />} label="Maximum marks" value="300" /><Stat icon={<Brain />} label="Total questions" value="150 MCQs" /><Stat icon={<Clock3 />} label="Duration" value="3 hours" /><Stat icon={<Target />} label="Negative marking" value="1/3" /></section>; }
export function Feature({ icon, title, text }) { return <article className="featureCard">{icon}<h3>{title}</h3><p>{text}</p></article>; }
export function Stat({ icon, label, value }) { return <div className="stat">{icon}<span>{label}</span><strong>{value}</strong></div>; }
export function DashItem({ label, value }) { return <div className="dashItem"><span>{label}</span><strong>{value}</strong></div>; }
export function Step({ index, title, text }) { return <div className="step"><span>{index}</span><div><strong>{title}</strong><p>{text}</p></div></div>; }
export function Quiz({ item, selected, onSelect }) { return <div className="quiz"><p>{item.q}</p><div className="options">{item.options.map((opt, idx) => <button key={opt} onClick={() => onSelect(idx === item.correct)} className={selected === undefined ? '' : idx === item.correct ? 'correct' : 'muted'}>{opt}</button>)}</div>{selected !== undefined && <p className={selected ? 'ok' : 'bad'}>{selected ? 'Correct.' : 'Not quite.'} {item.why}</p>}</div>; }
