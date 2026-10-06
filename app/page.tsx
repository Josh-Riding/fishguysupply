"use client";

import Image from "next/image";
import { useState } from "react";
import VersionSwitch from "./version-switch";

type Setup = "bundle" | "kit" | "supplies";

const setups: Record<Setup, { number: string; label: string; title: string; description: string; detail: string; image: string; alt: string }> = {
  bundle: { number: "01", label: "FISH + EVERYTHING", title: "The whole little world.", description: "A complete aquarium setup, the right supplies, and fish that fit the world you’re building.", detail: "For the ‘just tell me what works’ crowd.", image: "/images/hero-aquarium.png", alt: "A planted aquarium with small orange fish" },
  kit: { number: "02", label: "EVERYTHING BUT FISH", title: "Your tank, sorted.", description: "All the equipment and essentials to get a great aquarium going, minus the livestock.", detail: "For the ‘I’ve got fish plans’ crowd.", image: "/images/starter-kit.png", alt: "A glass aquarium, filter, plant, substrate, and supplies laid out together" },
  supplies: { number: "03", label: "THE GOOD STUFF", title: "The extras that matter.", description: "Thoughtfully picked aquarium supplies for keeping your setup looking and feeling its best.", detail: "For the ‘one more thing’ crowd.", image: "/images/fish-detail.png", alt: "Small orange fish swimming among aquatic plants" },
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>; }

function FishMark() {
  return <svg className="fish-mark" viewBox="0 0 60 42" fill="none" aria-hidden="true"><path d="M5 21C15 7 34 5 48 21C34 37 15 35 5 21Z" fill="currentColor" /><path d="M44 20L57 10V32L44 22" fill="currentColor" /><circle cx="19" cy="18" r="2.5" fill="var(--ink)" /><path d="M29 8C25 14 25 28 29 34" stroke="var(--ink)" strokeWidth="2" opacity=".5" /></svg>;
}

export default function Home() {
  const [selected, setSelected] = useState<Setup>("bundle");
  const active = setups[selected];

  return <main>
    <VersionSwitch current="v1" />
    <div className="announcement"><span className="announcement-spark">✳</span> YOUR NEW FAVORITE HOBBY STARTS HERE <span className="announcement-spark">✳</span></div>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Fish Guy Supply, back to top"><FishMark /><span>FISH GUY<br />SUPPLY<span className="brand-period">.</span></span></a>
      <nav className="nav-links" aria-label="Main navigation"><a href="#shop">Shop the goods</a><a href="#how-it-works">How it works</a><a href="#why-us">The fish guy way</a></nav>
      <a className="header-cta" href="#shop">Find your setup <Arrow diagonal /></a>
    </header>

    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-kicker"><span className="kicker-line" /> AQUARIUMS FOR ACTUAL HUMANS <span className="hero-kicker-index">EST. FOR THE CURIOUS</span></div>
        <h1 id="hero-heading">GOOD FISH.<br /><span>NO GUESSWORK.</span></h1>
        <div className="hero-subline"><p>Everything you need to get into fishkeeping.<br />Picked by fish people. Put together for you.</p><a className="round-cta" href="#shop" aria-label="Explore the setups"><Arrow diagonal /></a></div>
      </div>
      <div className="hero-visual"><Image src="/images/hero-aquarium.png" alt="A glowing planted aquarium with a small school of orange fish" fill loading="eager" sizes="100vw" className="hero-image" /><div className="hero-image-shade" /><div className="hero-side-note">THE DEEP END LOOKS GOOD ON YOU <span>↘</span></div><div className="hero-sticker" aria-hidden="true"><span>START<br />SOMETHING<br />GOOD</span><span className="sticker-star">✳</span></div><div className="hero-bottom-meta"><span>01 / YOUR NEW OBSESSION</span><span>SCROLL TO DIVE IN ↓</span></div></div>
    </section>

    <div className="marquee" aria-hidden="true"><div className="marquee-track">GOOD WATER, GOOD COMPANY <span>✳</span> LESS GOOGLING, MORE GUPPIES <span>✳</span> GOOD WATER, GOOD COMPANY <span>✳</span> LESS GOOGLING, MORE GUPPIES <span>✳</span></div></div>

    <section className="intro section-pad" id="why-us" aria-labelledby="intro-heading">
      <div className="section-label"><span className="label-dot" /> THE SHORT VERSION <span>00 / 03</span></div>
      <div className="intro-layout"><h2 id="intro-heading">YOU BRING<br />THE <em>CURIOSITY.</em><br />WE BRING<br />THE REST<span className="red-period">.</span></h2><div className="intro-aside"><div className="asterisk">✳</div><p>Getting an aquarium should feel like opening a new world, not taking a final exam.</p><p className="intro-small">We pair the right gear, clear guidance, and genuinely good fishkeeping advice so you can skip the 27 open tabs and get to the fun part.</p><a className="text-link" href="#how-it-works">See how we make it easy <Arrow diagonal /></a></div></div>
      <div className="intro-bottom"><span>NO MYSTERY PARTS.</span><span>NO “WAIT, WHAT NOW?”</span><span>JUST A REALLY GOOD START.</span></div>
    </section>

    <section className="shop section-pad" id="shop" aria-labelledby="shop-heading">
      <div className="section-label"><span className="label-dot" /> PICK YOUR STARTING POINT <span>01 / 03</span></div>
      <div className="shop-heading-row"><h2 id="shop-heading">CHOOSE YOUR<br /><em>OWN ADVENTURE.</em></h2><p>All-in, almost-all-in, or just grabbing the good stuff. There’s a way in for every kind of fish person.</p></div>
      <div className="setup-selector" role="group" aria-label="Choose a shopping category">{(Object.keys(setups) as Setup[]).map((key) => <button key={key} className={`setup-tab ${selected === key ? "is-active" : ""}`} type="button" onClick={() => setSelected(key)} aria-pressed={selected === key}><span className="setup-number">{setups[key].number}</span><span>{key === "bundle" ? "Fish bundles" : key === "kit" ? "Starter kits" : "Supplies"}</span><Arrow diagonal /></button>)}</div>
      <div className={`setup-feature setup-${selected}`} key={selected}><div className="setup-image-wrap"><Image src={active.image} alt={active.alt} fill sizes="(max-width: 800px) 100vw, 60vw" className="setup-image" /><span className="image-corner">FGS / {active.number}</span></div><div className="setup-copy"><span className="eyebrow">{active.label}</span><span className="setup-big-number" aria-hidden="true">{active.number}</span><div className="setup-copy-bottom"><h3>{active.title}</h3><p>{active.description}</p><span className="setup-detail">{active.detail}</span><a className="pill-link" href="#how-it-works">How this works <Arrow diagonal /></a></div></div></div>
      <p className="shop-note">GOOD NEWS: YOU DON’T NEED TO KNOW WHAT A BIOLOGICAL FILTER IS YET. <span>WE DO. ↗</span></p>
    </section>

    <section className="process section-pad" id="how-it-works" aria-labelledby="process-heading">
      <div className="section-label section-label-light"><span className="label-dot" /> THE SMART WAY TO START <span>02 / 03</span></div>
      <div className="process-heading-wrap"><h2 id="process-heading">FIRST THE WORLD.<br /><em>THEN THE FISH.</em></h2><p>Because timing matters when the cargo is alive.</p></div>
      <div className="process-story"><div className="shipping-art" aria-hidden="true"><div className="shipping-card shipping-card-one"><span className="shipping-small">SHIPMENT / 01</span><span className="shipping-icon">▣</span><strong>THE<br />SETUP.</strong><span className="shipping-foot">TANK + GEAR + A GAME PLAN</span></div><div className="shipping-path"><span>READY WHEN<br />YOU ARE</span><span className="path-arrow">↘</span></div><div className="shipping-card shipping-card-two"><span className="shipping-small">SHIPMENT / 02*</span><FishMark /><strong>THE<br />FISH.</strong><span className="shipping-foot">LIVE ARRIVAL, RIGHT ON TIME</span></div><span className="shipping-asterisk">*WHEN YOUR BUNDLE CALLS FOR IT</span></div><div className="process-steps"><div className="process-step"><span className="step-no">01</span><div><h3>Pick your setup.</h3><p>Choose a complete fish bundle, a kit without fish, or just the supplies you need.</p></div></div><div className="process-step"><span className="step-no">02</span><div><h3>Make some water magic.</h3><p>We send the tank, equipment, essentials, and clear instructions. Set it up with confidence.</p></div></div><div className="process-step"><span className="step-no">03</span><div><h3>Meet your fish.</h3><p>Some bundles arrive together. When a tank needs time to get ready, we ship your fish separately once it’s ready for them.</p></div></div></div></div>
      <div className="process-footer"><span>THE RIGHT THINGS.</span><span>IN THE RIGHT ORDER.</span><span>AT THE RIGHT TIME.</span></div>
    </section>

    <section className="manifesto" aria-labelledby="manifesto-heading"><div className="manifesto-image"><Image src="/images/fish-detail.png" alt="Orange fish swimming through a lush freshwater aquarium" fill sizes="100vw" /></div><div className="manifesto-overlay" /><div className="manifesto-content"><span className="eyebrow">A LITTLE NOTE FROM THE FISH PEOPLE</span><h2 id="manifesto-heading">LESS<br />“AM I DOING<br />THIS RIGHT?”<br /><em>MORE WOW.</em></h2><p>The good part starts the moment you decide to dive in.</p><a className="round-cta round-cta-light" href="#shop" aria-label="Find your setup"><Arrow diagonal /></a></div><span className="manifesto-side">FISH GUY SUPPLY / KEEP THE WONDER</span></section>

    <footer className="footer section-pad"><div className="footer-top"><span>READY WHEN YOU ARE</span><span>03 / 03</span></div><a className="footer-cta" href="#shop">LET’S GET<br /><em>FISHY.</em><Arrow diagonal /></a><div className="footer-bottom"><div className="footer-brand"><FishMark /><span>FISH GUY SUPPLY.</span></div><p>Good fishkeeping starts here.</p><a href="#top">Back to the top ↑</a></div></footer>
  </main>;
}
