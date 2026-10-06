"use client";

import Image from "next/image";
import { useState } from "react";

export default function ReadinessDemo() {
  const [ready, setReady] = useState(false);

  return (
    <div className={`v2-ready-demo ${ready ? "is-ready" : ""}`}>
      <div className="v2-demo-top"><span>TRY THE JOURNEY</span><span>↗</span></div>
      <div className="v2-demo-image"><Image src={ready ? "/images/v2/colorful-fish.png" : "/images/v2/starter-kit.png"} alt={ready ? "Colorful fish swimming in their planted aquarium" : "Aquarium starter kit with tank and equipment"} fill sizes="(max-width: 800px) 90vw, 38vw" /><div className="v2-demo-overlay"><span>{ready ? "CHAPTER TWO" : "CHAPTER ONE"}</span><strong>{ready ? "Hello, fish!" : "First, the setup."}</strong></div></div>
      <div className="v2-demo-bottom"><p aria-live="polite">{ready ? "Once your aquarium is ready for livestock, it’s time to welcome your fish home." : "Tank, equipment, supplies, and a plan arrive so you can get everything ready."}</p><button type="button" onClick={() => setReady((value) => !value)} aria-pressed={ready}>{ready ? "Back to setup" : "My tank is ready"}<span aria-hidden="true">{ready ? "↶" : "→"}</span></button></div>
    </div>
  );
}
