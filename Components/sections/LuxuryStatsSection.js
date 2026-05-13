"use client";

import { motion, useInView, animate } from "framer-motion";
import {
  Building2,
  Globe,
  KeyRound,
  Users,
  Quote,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: Building2,
    number: 12,
    suffix: "B+",
    label: "Sales Volume",
  },
  {
    icon: Globe,
    number: 120,
    suffix: "+",
    label: "Global Locations",
  },
  {
    icon: KeyRound,
    number: 850,
    suffix: "+",
    label: "Exclusive Properties",
  },
  {
    icon: Users,
    number: 1200,
    suffix: "+",
    label: "Happy Clients",
  },
];

export default function LuxuryStatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-14 md:py-20">
      {/* TOP BORDER */}

      <div
        className="
          absolute
          top-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#c89e5040]
          to-transparent
        "
      />

      {/* BACKGROUND */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* GOLD LIGHT */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(200,158,80,0.10), transparent 60%)",
        }}
      />

      <div
        className="
          relative
          z-20
          mx-auto
          max-w-7xl
          px-5
          md:px-8
        "
      >
        <div
          className="
            grid
            gap-10
            border-y
            border-[#c89e5015]
            py-10

            lg:grid-cols-[1.4fr_1fr]
            lg:gap-16
          "
        >
          {/* ========================= */}
          {/* LEFT STATS */}
          {/* ========================= */}

          <div
            className="
              grid
              grid-cols-2
              gap-y-10

              sm:grid-cols-4
              sm:gap-0
            "
          >
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center
                    px-5
                    text-center
                  "
                >
                  {/* VERTICAL LINE */}

                  {index !== stats.length - 1 && (
                    <div
                      className="
                        absolute
                        right-0
                        top-1/2
                        hidden
                        h-[70%]
                        w-px
                        -translate-y-1/2
                        bg-gradient-to-b
                        from-transparent
                        via-[#c89e5025]
                        to-transparent

                        sm:block
                      "
                    />
                  )}

                  {/* ICON */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      mb-5
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#c89e5020]
                      bg-white/[0.02]
                      text-[#c89e50]
                      backdrop-blur-xl
                    "
                  >
                    <Icon size={24} strokeWidth={1.5} />
                  </motion.div>

                  {/* NUMBER */}

                  <div
                    className="
                      mb-2
                      flex
                      items-end
                      text-[#f5ece0]
                    "
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    <RollingNumber value={item.number} />

                    <span className="text-[20px] md:text-[24px]">
                      {item.suffix}
                    </span>
                  </div>

                  {/* LABEL */}

                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.28em]
                      text-white/45
                    "
                  >
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ========================= */}
          {/* RIGHT TESTIMONIAL */}
          {/* ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              flex
              flex-col
              justify-center
            "
          >
            {/* QUOTE ICON */}

            <Quote
              size={42}
              strokeWidth={1.5}
              className="
                mb-6
                text-[#c89e50]
                opacity-90
              "
            />

            {/* TEXT */}

            <p
              className="
                max-w-xl
                text-[22px]
                leading-[1.5]
                text-[#f5ece0]

                md:text-[28px]
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              AETHERIS doesn&apos;t just build homes; they curate the backdrop
              for a life of ultimate distinction.
            </p>

            {/* PROFILE */}

            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
                alt="Client"
                className="
                  h-14
                  w-14
                  rounded-full
                  object-cover
                  border
                  border-[#c89e5030]
                "
              />

              <div>
                <h4
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.25em]
                    text-[#c89e50]
                  "
                >
                  James Whitaker
                </h4>

                <p className="mt-1 text-sm text-white/45">
                  Entrepreneur
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ========================= */
/* ROLLING NUMBER */
/* ========================= */

function RollingNumber({ value }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],

      onUpdate(latest) {
        setDisplayValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="
        text-[44px]
        leading-none

        md:text-[56px]
      "
    >
      {displayValue}
    </span>
  );
}