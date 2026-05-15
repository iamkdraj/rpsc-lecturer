import React from 'react';
import { Menu, X } from 'lucide-react';
import { pages } from '../data/appPages.js';

const navItems = pages.map((page) => ({ id: page.id, label: page.label }));

export function Nav({ activePage, menuOpen, setMenuOpen, go }) {
  return <nav className="nav">
    <button className="brand" onClick={() => go('home')} aria-label="RPSC Lecturer English home"><span>RL</span><strong>RPSC Lecturer English</strong></button>
    <button className="menuToggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
    <div className={menuOpen ? 'navLinks open' : 'navLinks'}>{navItems.map((item) => <button key={item.id} className={activePage === item.id ? 'active' : ''} onClick={() => go(item.id)}>{item.label}</button>)}</div>
  </nav>;
}
