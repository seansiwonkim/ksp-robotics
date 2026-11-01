"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import Crawler from "./Crawler";

// Tall section with a sticky stage: the crawler hovers, then comes apart as the page scrolls.
export default function HeroScroll() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const still = useMotionValue(0);
  const explode = useSpring(useTransform(scrollYProgress, [0.12, 0.7], [0, 1]), { stiffness: 90, damping: 22 });
  const progress = reduce ? still : explode;

  const textOpacity = useTransform(scrollYProgress, [0, 0.14], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.14], [0, -40]);
  const textEvents = useTransform(scrollYProgress, (v) => (v > 0.1 ? "none" : "auto"));
  const dimOpacity = useTransform(progress, [0, 0.25], [1, 0]);
  const figOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const shadowOpacity = useTransform(progress, [0, 1], [0.35, 0.15]);

  return (
    <section ref={ref} className="hero-scroll">
      <div className="stage">
        <motion.div className="stage-text" style={{ opacity: textOpacity, y: textY, pointerEvents: textEvents }}>
          <h1>See inside every pipe in the city.</h1>
          <p className="lead">
            Ksp Solutions builds a robot that crawls through water and sewage pipes, and software that turns what it
            sees into a clear picture of where pipes are failing.
          </p>
          <div className="actions">
            <a href="#contact" className="btn">Request a demo</a>
            <a href="#product" className="link">How it works</a>
          </div>
        </motion.div>

        <svg className="stage-art" viewBox="-80 -10 880 440" role="img"
          aria-label="Exploded diagram of the crawler robot showing its six parts">
          <motion.ellipse cx="330" cy="415" rx="210" ry="9" className="cr-shadow" style={{ opacity: shadowOpacity }}
            animate={reduce ? undefined : { scaleX: [1, 0.9, 1] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }} />
          <motion.g style={{ opacity: dimOpacity }} className="cr-dim">
            <path d="M100 100H600M100 92V108M600 92V108" />
            <text x="350" y="88" textAnchor="middle">Overall length</text>
          </motion.g>
          <motion.g animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}>
            <Crawler progress={progress} labels />
          </motion.g>
        </svg>

        <motion.p className="stage-fig" style={{ opacity: figOpacity }}>Fig. 1: Crawler, exploded view</motion.p>
      </div>
    </section>
  );
}
