"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "motion/react";
import Lenis from "@studio-freight/lenis";

export default function LuxuryScrollSection() {
  const sectionRef = useRef(null);

  const [locked, setLocked] = useState(false);

  // =========================
  // LENIS
  // =========================

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      smoothWheel: true,
      lerp: 0.14,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // =========================
  // SCROLL
  // =========================

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // =========================
  // LOCK AFTER COMPLETE
  // =========================

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.5) {
      setLocked(true);
    }
  });

  // =========================
  // ANIMATIONS
  // =========================

  const rawScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.72, 1]
  );

  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    [90, 0]
  );

  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.15, 1]
  );

  // =========================
  // LOCK FINAL STATE
  // =========================

  const scale = useSpring(
    locked ? 1 : rawScale,
    {
      stiffness: 120,
      damping: 18,
    }
  );

  const y = useSpring(
    locked ? 0 : rawY,
    {
      stiffness: 120,
      damping: 18,
    }
  );

  const opacity = useSpring(
    locked ? 1 : rawOpacity,
    {
      stiffness: 120,
      damping: 18,
    }
  );

  // =========================
  // IMAGE PARALLAX
  // =========================

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.25, 1]
  );

  const cardY = useTransform(
    scrollYProgress,
    [0, 1],
    [60, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[220vh]
        bg-[#050505]
      "
    >
      {/* ========================= */}
      {/* STICKY SCREEN */}
      {/* ========================= */}

      <div
        className="
          sticky
          top-0
          h-screen
          overflow-hidden
          flex
          items-center
          justify-center
          px-8
          sm:px-12
          lg:px-20
        "
      >
        {/* ========================= */}
        {/* BACKGROUND IMAGE */}
        {/* ========================= */}

        <motion.div
          style={{
            scale: imageScale,
          }}
          className="
            absolute
            inset-0
          "
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury"
            className="
              w-full
              h-full
              object-cover
            "
          />
        </motion.div>

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/65" />

        {/* GOLD LIGHT */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top, rgba(200,158,80,0.16), transparent 60%)",
          }}
        />

        {/* NOISE */}

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* ========================= */}
        {/* MAIN CONTAINER */}
        {/* ========================= */}

        <motion.div
          style={{
            scale,
            y,
            opacity,
          }}
          className="
            relative
            z-20
            w-full
            max-w-[1320px]
            rounded-[32px]
            border
            border-[#c89e5030]
            bg-black/30
            backdrop-blur-xl
            overflow-hidden
            shadow-[0_0_60px_rgba(200,158,80,0.08)]
            will-change-transform
          "
        >
          <div
            className="
              grid
              lg:grid-cols-2
              items-center
            "
          >
            {/* ========================= */}
            {/* LEFT CONTENT */}
            {/* ========================= */}

            <div
              className="
                relative
                p-8
                md:p-14
                lg:p-20
              "
            >
              {/* TOP LINE */}

              <div
                className="
                  absolute
                  top-0
                  left-10
                  right-10
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#c89e50]
                  to-transparent
                "
              />

              {/* LABEL */}

              <div className="mb-6 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#c89e50]" />

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-[#c89e50]
                  "
                >
                  Luxury Real Estate
                </p>
              </div>

              {/* HEADING */}

              <h1
                className="
                  mb-8
                  text-[42px]
                  leading-none
                  text-[#f5ece0]
                  md:text-[64px]
                  lg:text-[92px]
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Crafted For
                <br />
                Elevated Living
              </h1>

              {/* PARA */}

              <p
                className="
                  mb-10
                  max-w-xl
                  text-sm
                  leading-8
                  text-white/55
                  md:text-base
                "
              >
                Experience timeless architecture premium interiors and
                exceptional spaces designed to blend elegance comfort and modern
                luxury into one seamless lifestyle experience.
              </p>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-5">
                <button
                  className="
                    rounded-full
                    border
                    border-[#c89e5070]
                    bg-[#c89e50]
                    px-8
                    py-4
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-black
                    transition-all
                    duration-500
                    hover:scale-105
                    hover:bg-[#d9b06a]
                  "
                >
                  Explore Properties
                </button>

                <button
                  className="
                    rounded-full
                    border
                    border-[#c89e5030]
                    bg-white/[0.03]
                    px-8
                    py-4
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-[#c89e50]
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:bg-white/10
                  "
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* ========================= */}
            {/* RIGHT IMAGE */}
            {/* ========================= */}

            <div
              className="
                relative
                h-[350px]
                overflow-hidden
                md:h-[700px]
              "
            >
              <motion.img
                style={{
                  scale: imageScale,
                }}
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Home"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* FLOATING CARD */}

              <motion.div
                style={{
                  y: cardY,
                }}
                className="
                  absolute
                  bottom-6
                  left-6
                  max-w-[280px]
                  rounded-[24px]
                  border
                  border-[#c89e5030]
                  bg-black/40
                  p-5
                  backdrop-blur-xl
                  md:bottom-10
                  md:left-10
                  md:p-6
                "
              >
                <p
                  className="
                    mb-3
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-[#c89e50]
                  "
                >
                  Premium Collection
                </p>

                <h3
                  className="
                    mb-3
                    text-[28px]
                    leading-none
                    text-[#f5ece0]
                  "
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Modern
                  <br />
                  Luxury Villas
                </h3>

                <p className="text-sm leading-7 text-white/50">
                  Discover iconic homes crafted with timeless elegance and
                  architectural excellence.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}