import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VersionSwitch from "../version-switch";
import ReadinessDemo from "./readiness-demo";
import "./styles.css";

export const metadata: Metadata = {
  title: "Fish Guy Supply — Your Little World Starts Here",
  description: "Fishkeeping without the guesswork. Explore complete fish bundles, aquarium starter kits, and handpicked supplies from Fish Guy Supply.",
};

function FishDoodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 88 55" fill="none" aria-hidden="true">
      <path d="M6 28C20 9 45 5 66 27C47 49 21 46 6 28Z" fill="currentColor" />
      <path d="M64 27 84 9v37L64 28Z" fill="currentColor" />
      <circle cx="27" cy="23" r="3" fill="#352b44" />
      <path d="M41 13c-4 10-4 21 0 29" stroke="#352b44" strokeWidth="2" strokeLinecap="round" opacity=".35" />
    </svg>
  );
}

function Sparkle({ className = "v2-sparkle" }: { className?: string }) {
  return <span className={className} aria-hidden="true">✳</span>;
}

export default function V2Page() {
  return (
    <main className="v2" id="v2-top">
      <VersionSwitch current="v2" />
      <div className="v2-topline"><span>GOOD FISH. GOOD FEELINGS. GOOD STARTS.</span><span>EST. FOR THE CURIOUS ✳</span></div>
      <header className="v2-header">
        <a className="v2-brand" href="#v2-top" aria-label="Fish Guy Supply, back to top"><FishDoodle /><span>fish guy<br />supply<span className="v2-brand-dot">.</span></span></a>
        <nav aria-label="Main navigation"><a href="#v2-shop">The good stuff</a><a href="#v2-journey">How it works</a><a href="#v2-hello">Our kind of fishkeeping</a></nav>
        <a className="v2-header-button" href="#v2-shop">Find your fit <span aria-hidden="true">↗</span></a>
      </header>

      <section className="v2-hero" aria-labelledby="v2-hero-title">
        <div className="v2-hero-content">
          <div className="v2-eyebrow"><span className="v2-eyebrow-dot" /> FISHKEEPING, MINUS THE GUESSWORK</div>
          <h1 id="v2-hero-title">Oh hey,<br /><em>future</em><br />fish person.</h1>
          <p>Your very own underwater world? We make the whole thing feel easy, exciting, and actually doable.</p>
          <div className="v2-hero-actions"><a className="v2-button v2-button-dark" href="#v2-shop">Find your starting point <span aria-hidden="true">↗</span></a><a className="v2-underlink" href="#v2-journey">How the magic works <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="v2-hero-photo"><Image src="/images/v2/sunny-aquarium.png" alt="A sunlit planted aquarium with orange fish on a lilac pedestal" fill loading="eager" sizes="(max-width: 800px) 100vw, 58vw" /></div>
        <div className="v2-hero-badge" aria-hidden="true"><span>WELCOME TO<br />YOUR LITTLE<br />WORLD</span><Sparkle /></div>
        <span className="v2-bubble v2-bubble-one" aria-hidden="true" /><span className="v2-bubble v2-bubble-two" aria-hidden="true" /><span className="v2-bubble v2-bubble-three" aria-hidden="true" />
        <div className="v2-hero-bottom"><span>NO EXPERIENCE REQUIRED</span><span>JUST ADD CURIOSITY ↘</span></div>
      </section>

      <div className="v2-ribbon" aria-hidden="true"><div>LESS RESEARCH SPIRAL <Sparkle /> MORE LITTLE FISH SMILES <Sparkle /> LESS RESEARCH SPIRAL <Sparkle /> MORE LITTLE FISH SMILES <Sparkle /></div></div>

      <section className="v2-hello v2-wrap" id="v2-hello" aria-labelledby="v2-hello-title">
        <div className="v2-section-top"><span>01 / HI, WE’RE FISH GUY SUPPLY</span><Sparkle /></div>
        <div className="v2-hello-grid"><h2 id="v2-hello-title">A great aquarium<br />should make you say<br /><em>“wow,”</em> not “wait, what?”</h2><div className="v2-hello-copy"><div className="v2-smile" aria-hidden="true">:)</div><p>We’re fish people who believe the first step into fishkeeping should be the fun part.</p><p>So we put the right tank, gear, guidance, and fish together for you. No mystery shopping list. No 27 open tabs. Just a little world you can’t wait to come home to.</p><a href="#v2-shop">Okay, show me the good stuff <span aria-hidden="true">↗</span></a></div></div>
        <div className="v2-scribble" aria-hidden="true">〰 〰 〰 〰 〰</div>
      </section>

      <section className="v2-shop v2-wrap" id="v2-shop" aria-labelledby="v2-shop-title">
        <div className="v2-section-top"><span>02 / THE GOOD STUFF</span><span>CHOOSE YOUR OWN ADVENTURE</span></div>
        <div className="v2-shop-heading"><h2 id="v2-shop-title">Pick a path.<br /><em>We’ve got you.</em></h2><p>Start with fish, start with a tank, or just find the things your aquarium needs. There’s no wrong way in.</p></div>
        <div className="v2-shop-mural">
          <article className="v2-shop-card v2-card-bundle" id="v2-bundles"><div className="v2-card-image"><Image src="/images/v2/colorful-fish.png" alt="Colorful small fish swimming in a bright planted aquarium" fill sizes="(max-width: 800px) 100vw, 54vw" /><span className="v2-card-chip">THE WHOLE SHEBANG</span></div><div className="v2-card-body"><span className="v2-card-number">01 / FISH + AQUARIUM</span><h3>Fish bundles</h3><p>A complete setup and fish chosen to thrive together. Everything feels like it belongs because it does.</p><a href="#v2-journey" aria-label="Learn how fish bundles work">See how it works <span aria-hidden="true">↗</span></a></div></article>
          <article className="v2-shop-card v2-card-kit" id="v2-kits"><div className="v2-card-image"><Image src="/images/v2/starter-kit.png" alt="A beginner aquarium kit with tank, light, filter, plant, and supplies" fill sizes="(max-width: 800px) 100vw, 40vw" /><span className="v2-card-chip">YOU’VE GOT THIS</span></div><div className="v2-card-body"><span className="v2-card-number">02 / THE SETUP</span><h3>Starter kits</h3><p>The tank, tools, and essentials, all sorted. Bring your own fish plans when you’re ready.</p><a href="#v2-journey" aria-label="Learn how starter kits work">See how it works <span aria-hidden="true">↗</span></a></div></article>
          <article className="v2-supplies-card" id="v2-supplies"><div className="v2-supplies-stamp"><Sparkle /><span>03</span></div><div><span className="v2-card-number">THE USEFUL EXTRAS</span><h3>Supplies that<br /><em>make sense.</em></h3><p>Good gear for your good little world. Pick up what you need without the aisle-long guessing game.</p></div><a href="#v2-journey" aria-label="Learn how Fish Guy Supply chooses supplies">The fish guy way <span aria-hidden="true">↗</span></a></article>
        </div>
      </section>

      <section className="v2-journey" id="v2-journey" aria-labelledby="v2-journey-title">
        <div className="v2-wrap"><div className="v2-section-top"><span>03 / THE PART WE FIGURED OUT FOR YOU</span><Sparkle /></div><div className="v2-journey-heading"><h2 id="v2-journey-title">A little world,<br /><em>in the right order.</em></h2><p>Fish are living little roommates. We make sure their new place is ready before move-in day.</p></div>
          <div className="v2-journey-layout"><div className="v2-steps"><div className="v2-step"><span>1</span><div><h3>Pick your happy place.</h3><p>Choose a fish bundle, a kit without fish, or individual supplies.</p></div></div><div className="v2-step"><span>2</span><div><h3>Build the little world.</h3><p>Your tank, gear, supplies, and clear instructions get you going.</p></div></div><div className="v2-step"><span>3</span><div><h3>Welcome your fish.</h3><p>For bundles that need it, fish ship separately when the aquarium is ready.</p></div></div></div><ReadinessDemo /></div>
          <div className="v2-journey-note"><span className="v2-note-spark">✳</span><p>Some bundles can ship all together. When a setup needs time to be ready for livestock, the tank and equipment arrive first, and the fish follow later.</p></div>
        </div>
      </section>

      <section className="v2-finale" aria-labelledby="v2-finale-title"><div className="v2-finale-image"><Image src="/images/v2/sunny-aquarium.png" alt="A bright planted aquarium in a sunny room" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="v2-finale-copy"><span className="v2-eyebrow">CONSIDER THIS YOUR SIGN</span><h2 id="v2-finale-title">More wonder.<br /><em>Less wondering.</em></h2><p>Come on in. The water’s lovely.</p><a className="v2-button v2-button-dark" href="#v2-shop">Find your starting point <span aria-hidden="true">↗</span></a><FishDoodle className="v2-finale-fish" /></div></section>

      <footer className="v2-footer"><div className="v2-footer-top"><FishDoodle /><h2>See you<br /><em>underwater.</em></h2><a href="#v2-top" aria-label="Back to the top">↑</a></div><div className="v2-footer-bottom"><span>FISH GUY SUPPLY © 2026</span><span>MADE FOR CURIOUS FISH PEOPLE</span><Link href="/">See the original page ↗</Link></div></footer>
    </main>
  );
}
