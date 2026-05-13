"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const checkpoints = [
  {
    number: "01",
    label: "Discover",
    icon: "*",
    title: "Exceptional Locations",
    desc: "Explore handpicked luxury properties in the world's most desirable destinations crafted for elevated living and timeless experiences.",
    align: "left",
  },
  {
    number: "02",
    label: "Design",
    icon: "+",
    title: "Around Your Lifestyle",
    desc: "From modern architecture to serene interiors every residence is thoughtfully composed to bring comfort elegance and functionality together.",
    align: "right",
  },
  {
    number: "03",
    label: "Invest",
    icon: "#",
    title: "In a Lasting Legacy",
    desc: "More than a property - each space is a statement of prestige offering long term value refined living and a future built with confidence.",
    align: "left",
  },
];

export default function CinematicLuxuryRoad() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    // =========================
    // LENIS
    // =========================

    const lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
      lerp: 0.08,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // =========================
    // ROAD DRAW
    // =========================

    const path = pathRef.current;

    if (path) {
      const pathLength = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",

        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 3,
        },
      });
    }

    // =========================
    // HERO
    // =========================

    gsap.fromTo(
      ".hero-content",
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: "expo.out",
      }
    );

    // =========================
    // CARDS
    // =========================

    gsap.utils.toArray(".checkpoint-card").forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.95,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 2,
          ease: "expo.out",

          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 55%",
            scrub: 2,
          },
        }
      );
    });

    // =========================
    // ROAD GLOW
    // =========================

    gsap.to(".road-glow", {
      opacity: 0.15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="
        relative
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >
      {/* ========================= */}
      {/* BACKGROUND */}
      {/* ========================= */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          opacity-20
          scale-105
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/80" />

      {/* GOLD GLOW */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(200,158,80,0.15), transparent 60%)",
        }}
      />

      {/* NOISE */}

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ========================= */}
      {/* CONTENT */}
      {/* ========================= */}

      <div className="relative z-20">
        {/* HERO */}

        <section
          className="
            hero-content
            flex
            flex-col
            items-center
            text-center
            pt-28
            px-6
            opacity-0
          "
        >
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[#c89e50]
              mb-5
            "
          >
            A journey of distinction
          </p>

          <h1
            className="
              text-[clamp(42px,8vw,110px)]
              leading-none
              font-light
              text-[#f5ece0]
              max-w-5xl
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            The Luxury Road
          </h1>

          <div
            className="
              mt-8
              w-24
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#c89e50]
              to-transparent
            "
          />
        </section>

        {/* ========================= */}
        {/* ROAD SECTION */}
        {/* ========================= */}

        <section
          className="
            relative
            mt-32
            pb-40
            px-5
            md:px-10
          "
        >
          {/* ROAD */}

          <div
            className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2
              h-full
              w-[260px]
              md:w-[420px]
              pointer-events-none
            "
          >
            <svg
              viewBox="0 0 700 2200"
              className="w-full h-full"
              fill="none"
            >
              {/* SHADOW */}

              <path
                d="M350 0 C140 320, 560 620, 350 980 C140 1320, 560 1680, 350 2200"
                stroke="#1a120a"
                strokeWidth="28"
                strokeLinecap="round"
              />

              {/* BASE */}

              <path
                d="M350 0 C140 320, 560 620, 350 980 C140 1320, 560 1680, 350 2200"
                stroke="#2e1e10"
                strokeWidth="20"
                strokeLinecap="round"
              />

              {/* GLOW */}

              <path
                className="road-glow"
                d="M350 0 C140 320, 560 620, 350 980 C140 1320, 560 1680, 350 2200"
                stroke="#f0c06a"
                strokeWidth="14"
                strokeLinecap="round"
                opacity="0.3"
                style={{
                  filter: "blur(10px)",
                }}
              />

              {/* ACTIVE */}

              <path
                ref={pathRef}
                d="M350 0 C140 320, 560 620, 350 980 C140 1320, 560 1680, 350 2200"
                stroke="#f0c06a"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{
                  filter:
                    "drop-shadow(0 0 8px rgba(240,192,106,0.9))",
                }}
              />

              {/* DASH */}

              <path
                d="M350 0 C140 320, 560 620, 350 980 C140 1320, 560 1680, 350 2200"
                stroke="#f0c06a"
                strokeWidth="1"
                strokeDasharray="5 24"
                opacity="0.15"
              />
            </svg>
          </div>

          {/* CHECKPOINTS */}

          <div className="space-y-40 md:space-y-56">
            {checkpoints.map((item, i) => (
              <div
                key={i}
                className={`
                  relative
                  flex
                  w-full

                  ${
                    item.align === "right"
                      ? "justify-end"
                      : "justify-start"
                  }
                `}
              >
                <div
                  className="
                    checkpoint-card
                    relative
                    w-full
                    max-w-[340px]
                    md:max-w-[420px]
                    rounded-[28px]
                    border
                    border-[#c89e5030]
                    bg-black/30
                    backdrop-blur-xl
                    p-6
                    md:p-8
                    opacity-0
                    will-change-transform
                    transform-gpu
                  "
                >
                  {/* TOP LINE */}

                  <div
                    className="
                      absolute
                      top-0
                      left-8
                      right-8
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#c89e50]
                      to-transparent
                    "
                  />

                  {/* CONNECTOR */}

                  <div
                    className={`
                      hidden md:block
                      absolute
                      top-[46px]
                      h-px
                      w-24

                      ${
                        item.align === "left"
                          ? "left-full bg-gradient-to-r from-[#c89e50]/60 to-transparent"
                          : "right-full bg-gradient-to-l from-[#c89e50]/60 to-transparent"
                      }
                    `}
                  />

                  {/* HEADER */}

                  <div
                    className={`
                      flex
                      items-center
                      gap-4
                      mb-6

                      ${
                        item.align === "right"
                          ? "justify-end"
                          : ""
                      }
                    `}
                  >
                    {item.align === "left" && (
                      <>
                        <span
                          className="
                            text-5xl
                            md:text-6xl
                            text-[#c89e50]
                            font-light
                            leading-none
                          "
                          style={{
                            fontFamily:
                              "'Cormorant Garamond', serif",
                          }}
                        >
                          {item.number}
                        </span>

                        <CheckpointDot />
                      </>
                    )}

                    {item.align === "right" && (
                      <>
                        <CheckpointDot />

                        <span
                          className="
                            text-5xl
                            md:text-6xl
                            text-[#c89e50]
                            font-light
                            leading-none
                          "
                          style={{
                            fontFamily:
                              "'Cormorant Garamond', serif",
                          }}
                        >
                          {item.number}
                        </span>
                      </>
                    )}
                  </div>

                  {/* LABEL */}

                  <div
                    className={`
                      flex
                      mb-4

                      ${
                        item.align === "right"
                          ? "justify-end"
                          : ""
                      }
                    `}
                  >
                    <span
                      className="
                        flex
                        items-center
                        gap-2
                        text-[10px]
                        uppercase
                        tracking-[0.3em]
                        text-[#c89e50]
                      "
                    >
                      <span className="text-[8px]">
                        {item.icon}
                      </span>

                      {item.label}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h2
                    className={`
                      text-[28px]
                      md:text-[38px]
                      leading-tight
                      text-[#f5ece0]
                      mb-4

                      ${
                        item.align === "right"
                          ? "text-right"
                          : ""
                      }
                    `}
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                    }}
                  >
                    {item.title}
                  </h2>

                  {/* DESC */}

                  <p
                    className={`
                      text-sm
                      md:text-base
                      leading-8
                      text-white/50

                      ${
                        item.align === "right"
                          ? "text-right"
                          : ""
                      }
                    `}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================= */}
        {/* CTA */}
        {/* ========================= */}

        <section
          className="
            flex
            flex-col
            items-center
            pb-28
            px-6
            text-center
          "
        >
          <div
            className="
              w-px
              h-20
              bg-gradient-to-b
              from-transparent
              to-[#c89e50]
              mb-8
            "
          />

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[#c89e50]
              mb-6
            "
          >
            Begin your journey
          </p>

          <button
            className="
              px-10
              py-4
              rounded-full
              border
              border-[#c89e5070]
              text-[#c89e50]
              uppercase
              tracking-[0.25em]
              text-xs
              transition-all
              duration-500
              bg-white/[0.03]
              backdrop-blur-md

              hover:bg-[#c89e50]
              hover:text-black
              hover:scale-105
            "
          >
            Explore Properties
          </button>
        </section>
      </div>
    </main>
  );
}

function CheckpointDot() {
  return (
    <div className="relative flex items-center justify-center shrink-0">
      <div
        className="
          absolute
          w-7
          h-7
          rounded-full
          bg-[#c89e5020]
        "
      />

      <div
        className="
          absolute
          w-5
          h-5
          rounded-full
          border
          border-[#c89e5060]
          animate-ping
        "
      />

      <div
        className="
          relative
          z-10
          w-2
          h-2
          rounded-full
          bg-[#f0c06a]
        "
        style={{
          boxShadow:
            "0 0 12px rgba(240,192,106,0.9), 0 0 4px rgba(240,192,106,0.5)",
        }}
      />
    </div>
  );
}