'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Page() {
  const [showAbout, setShowAbout] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const href = window.location.origin + window.location.pathname;
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      const l = document.createElement('link'); l.rel = 'canonical'; l.href = href; document.head.appendChild(l);
    } else { link.href = href; }
    const og = document.createElement('meta'); og.setAttribute('property','og:url'); og.content = href; document.head.appendChild(og);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setShowAbout(false); setShowSocial(false); setShowContact(false); setShowMenu(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const scroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 84, behavior: 'smooth' });
  };
  const closeMenu = () => setShowMenu(false);

  return (
    <main className="container">
      {/* ===== Topbar ===== */}
      <header className="topbar" role="banner">
        <div className="topbar-inner">
          <div className="brand">MR NIPUN OFC / TECH-WEB</div>

          {/* Desktop menu */}
          <div className="menu" role="navigation" aria-label="Main">
            <button className="btn btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
            <button className="btn" onClick={() => setShowAbout(true)}>About</button>
            <button className="btn" onClick={() => scroll('#projects')}>Projects</button>
            <button className="btn" onClick={() => scroll('#skills')}>Skills</button>
            <button className="btn" onClick={() => setShowSocial(true)}>Social</button>
            <button className="btn" onClick={() => setShowContact(true)}>Contact</button>
          </div>

          {/* BIG visible hamburger (mobile) */}
          <button
            aria-label="Open menu"
            aria-controls="mobile-drawer"
            aria-expanded={showMenu}
            className={`hamburger ${showMenu ? 'active' : ''}`}
            onClick={() => setShowMenu(v => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* ===== Drawer (mobile) ===== */}
      <div className={`drawer-backdrop ${showMenu ? 'show' : ''}`} onClick={closeMenu} aria-hidden={!showMenu}/>
      <nav id="mobile-drawer" className={`drawer ${showMenu ? 'open' : ''}`} aria-label="Mobile">
        <div className="drawer-header">
          <div className="drawer-title"><span className="pulse"></span> <span>MONEY HEIST MD / DILA LK</span></div>
          <button className="drawer-close" onClick={closeMenu} aria-label="Close menu">×</button>
        </div>

        <button className="drawer-btn cta" onClick={() => { window.scrollTo({ top: 0, behavior:'smooth' }); closeMenu(); }}>Home</button>
        <button className="drawer-btn" onClick={() => { setShowAbout(true); closeMenu(); }}>About</button>
        <button className="drawer-btn" onClick={() => { scroll('#projects'); closeMenu(); }}>Projects</button>
        <button className="drawer-btn" onClick={() => { scroll('#skills'); closeMenu(); }}>Skills</button>
        <button className="drawer-btn" onClick={() => { setShowSocial(true); closeMenu(); }}>Social</button>
        <button className="drawer-btn" onClick={() => { setShowContact(true); closeMenu(); }}>Contact</button>
        <a className="drawer-btn" href="#privacy" onClick={(e)=>{e.preventDefault(); scroll('#privacy'); closeMenu();}}>Privacy</a>
        <a className="drawer-btn" href="#" onClick={(e)=>{e.preventDefault(); alert('Terms coming soon'); closeMenu();}}>Terms</a>
      </nav>

      {/* ==== (ඔයාගෙ Hero/Projects/Skills/Footer/Modals blocks 그대로 තබන්න) ==== */}
