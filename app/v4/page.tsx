import type { Metadata } from "next";
import Image from "next/image";
import VersionSwitch from "../version-switch";
import styles from "./v4.module.css";

export const metadata: Metadata = {
  title: "Fish Guy Supply — Fishkeeping, Considered",
  description: "Complete aquarium bundles, starter kits, and individual supplies. A considered way into fishkeeping from Fish Guy Supply.",
};

export default function V4Page() {
  return (
    <main className={styles.page} id="v4-top">
      <VersionSwitch current="v4" />
      <header className={styles.nav}>
        <a className={styles.navBrand} href="#v4-top">FISH GUY SUPPLY</a>
        <nav aria-label="Main navigation"><a href="#v4-top">INTRO</a><a href="#v4-setups">SETUPS</a><a href="#v4-method">METHOD</a><a href="#v4-why">WHY US</a></nav>
      </header>

      <section className={styles.hero} aria-labelledby="v4-hero-title">
        <Image src="/images/v4/editorial-setup.png" alt="A planted aquarium and setup tools arranged on a warm dark worktable" fill loading="eager" sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroVeil} aria-hidden="true" />
        <div className={styles.heroCopy}><span className={styles.eyebrow}>A BETTER FIRST STEP INTO FISHKEEPING</span><h1 id="v4-hero-title">EVERYTHING<br />IN ITS PLACE.<br />EVEN THE FISH.</h1><a className={styles.underLink} href="#v4-setups">EXPLORE THE SETUPS <span aria-hidden="true">↗</span></a></div>
        <div className={styles.heroInfo}><span>FISHKEEPING WITHOUT THE GUESSWORK.</span><div className={styles.dashedLine} /><p>COMPLETE AQUARIUM BUNDLES, KIT-ONLY STARTS, AND THE SUPPLIES THAT MATTER.</p></div>
        <span className={styles.verticalLabel}>FGS / OBJECT STUDY 04</span>
        <span className={styles.heroIndex}>01 — 05 / SCROLL TO DISCOVER</span>
      </section>

      <section className={styles.reveal} id="v4-fish-bundles" aria-labelledby="v4-bundle-title">
        <div className={styles.sectionTop}><span>01 / COMPLETE WORLDS</span><span>FISH + AQUARIUM BUNDLES</span></div>
        <div className={styles.revealGrid}><div className={styles.revealLeft}><h2 id="v4-bundle-title">ONE<br />COMPLETE<br />WORLD.</h2><a className={styles.underLink} href="#v4-setups">VIEW ALL STARTING POINTS <span aria-hidden="true">↗</span></a></div><div className={styles.revealImage}><Image src="/images/v4/aquarium-reveal.png" alt="A planted aquarium isolated against a warm dark background" fill sizes="(max-width: 800px) 100vw, 55vw" /></div><div className={styles.revealRight}><p>Tank, equipment, essentials, and fish selected to live well together. One decision becomes a whole little world.</p><span>FOR THE “I WANT THE WHOLE THING” PERSON.</span></div></div>
        <div className={styles.sectionBottom}><span>FGS / 001</span><span>CONSIDERED FROM THE FIRST DROP.</span></div>
      </section>

      <section className={styles.lineup} id="v4-setups" aria-labelledby="v4-setups-title">
        <div className={styles.sectionTop}><span>02 / THE LINEUP</span><span>THREE WAYS TO BEGIN</span></div>
        <div className={styles.lineupHeading}><h2 id="v4-setups-title">CHOOSE YOUR<br />STARTING POINT.</h2><p>Choose the amount of help you want. We have already considered the details.</p></div>
        <div className={styles.lineupRows}>
          <a href="#v4-fish-bundles" className={styles.lineupRow}><span className={styles.rowNumber}>01</span><span className={styles.rowImage}><Image src="/images/v4/aquarium-reveal.png" alt="" fill sizes="150px" /></span><span className={styles.rowMain}><strong>FISH BUNDLES</strong><small>THE COMPLETE AQUARIUM + FISH</small></span><span className={styles.rowArrow} aria-hidden="true">↗</span></a>
          <a href="#v4-starter-kits" className={styles.lineupRow}><span className={styles.rowNumber}>02</span><span className={styles.rowImage}><Image src="/images/v4/kit-reveal.png" alt="" fill sizes="150px" /></span><span className={styles.rowMain}><strong>STARTER KITS</strong><small>THE SETUP, WITHOUT LIVESTOCK</small></span><span className={styles.rowArrow} aria-hidden="true">↗</span></a>
          <a href="#v4-supplies" className={styles.lineupRow}><span className={styles.rowNumber}>03</span><span className={styles.rowImage}><Image src="/images/v4/editorial-setup.png" alt="" fill sizes="150px" /></span><span className={styles.rowMain}><strong>SUPPLIES</strong><small>INDIVIDUAL ESSENTIALS, THOUGHTFULLY PICKED</small></span><span className={styles.rowArrow} aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className={styles.reveal} id="v4-starter-kits" aria-labelledby="v4-kit-title">
        <div className={styles.sectionTop}><span>03 / THE FOUNDATION</span><span>KITS WITHOUT FISH</span></div>
        <div className={`${styles.revealGrid} ${styles.kitGrid}`}><div className={styles.revealLeft}><p>The tank, equipment, and essentials you need to begin. The guesswork has already been taken care of.</p><span>START WITH THE SPACE. ADD YOUR OWN FISH PLANS.</span></div><div className={styles.revealImage}><Image src="/images/v4/kit-reveal.png" alt="A complete aquarium starter kit isolated against a warm dark background" fill sizes="(max-width: 800px) 100vw, 55vw" /></div><div className={styles.revealRight}><h2 id="v4-kit-title">THE SETUP.<br />SORTED.</h2><a className={styles.underLink} href="#v4-method">SEE THE METHOD <span aria-hidden="true">↗</span></a></div></div>
        <div className={styles.sectionBottom}><span>FGS / 002</span><span>EVERYTHING HAS A REASON TO BE HERE.</span></div>
      </section>

      <section className={styles.method} id="v4-method" aria-labelledby="v4-method-title"><div className={styles.sectionTop}><span>04 / TIMING IS PART OF THE PLAN</span><span>HOW THE SHIPMENTS WORK</span></div><h2 id="v4-method-title">FIRST THE WORLD.<br />THEN THE FISH.</h2><div className={styles.methodVisual}><div className={styles.methodPhase}><span>SHIPMENT / 01</span><strong>THE SETUP</strong><p>Tank, equipment, supplies, and clear instructions arrive so you can prepare the aquarium.</p></div><div className={styles.methodImage}><Image src="/images/v4/editorial-setup.png" alt="An aquarium and its setup materials arranged on a dark worktable" fill sizes="(max-width: 800px) 100vw, 36vw" /></div><div className={styles.methodPhase}><span>SHIPMENT / 02*</span><strong>THE FISH</strong><p>For setups that need time, livestock ships separately once your aquarium is ready.</p></div></div><p className={styles.methodFootnote}>*SOME BUNDLES CAN SHIP TOGETHER. WHEN A TANK NEEDS TIME TO BE READY FOR FISH, WE SEND THE GEAR FIRST AND THE FISH LATER.</p></section>

      <section className={styles.supplies} id="v4-supplies" aria-labelledby="v4-supplies-title"><div className={styles.sectionTop}><span>05 / THE INDIVIDUAL PARTS</span><span>SUPPLIES WITH A PURPOSE</span></div><div className={styles.suppliesLayout}><div className={styles.suppliesPhoto}><Image src="/images/v4/editorial-setup.png" alt="Aquarium supplies, stones, plants, and instructions on a walnut worktable" fill sizes="(max-width: 800px) 100vw, 57vw" /></div><div className={styles.suppliesCopy}><h2 id="v4-supplies-title">ONLY WHAT<br />YOU NEED.</h2><p>Good equipment should make keeping fish easier, not give you another aisle of questions. Find the essentials, one considered piece at a time.</p><a className={styles.underLink} href="#v4-setups">RETURN TO THE LINEUP <span aria-hidden="true">↗</span></a></div></div></section>

      <section className={styles.final} id="v4-why" aria-labelledby="v4-final-title"><div className={styles.sectionTop}><span>THE FISH GUY WAY</span><span>END OF THE PAGE / START OF THE HOBBY</span></div><div className={styles.finalBody}><h2 id="v4-final-title">A BETTER WAY<br />TO BEGIN.</h2><p>Real fish people. The right things together. A clear path from empty tank to thriving little world.</p><a className={styles.filledButton} href="#v4-setups">EXPLORE YOUR OPTIONS <span aria-hidden="true">↗</span></a></div><div className={styles.finalCredit}>DIRECTION STUDY 04 / FISH GUY SUPPLY</div></section>

      <footer className={styles.footer}><span>FISH GUY SUPPLY © 2026</span><span>FISHKEEPING, CONSIDERED.</span><a href="#v4-top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
