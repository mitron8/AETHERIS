"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const newsData = [
  {
    date: "May 12, 2026",
    title:
      "Luxury buyers are prioritizing wellness spaces and nature-inspired interiors in 2026",
  },
  {
    date: "May 08, 2026",
    title:
      "AETHERIS Living expands its premium waterfront collection across global destinations",
  },
  {
    date: "May 03, 2026",
    title:
      "Demand for ultra-modern smart homes continues to rise among next-generation homeowners",
  },
  {
    date: "Apr 28, 2026",
    title:
      "Architectural minimalism and warm organic textures dominate luxury design trends this spring",
  },
  {
    date: "Apr 21, 2026",
    title:
      "Exclusive estates in high-growth luxury markets are seeing faster sales despite rising rates",
  },
];

export default function RealEstateNewsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 md:py-32">
      {/* BACKGROUND */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* GOLD GLOW */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(200,158,80,0.12), transparent 60%)",
        }}
      />

      <div className="relative z-20 mx-auto max-w-7xl px-5 md:px-8">
        {/* TOP */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p
              className="
                mb-5
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-[#c89e50]
              "
            >
              AETHERIS Living Journal
            </p>

            <h2
              className="
                max-w-4xl
                text-[42px]
                leading-none
                text-[#f5ece0]
                md:text-[70px]
                lg:text-[88px]
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Real Estate
              <br />
              News & Insights
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-sm
              leading-8
              text-white/50
              md:text-base
            "
          >
            Explore the latest luxury property trends, market movements and
            design insights curated by AETHERIS Living.
          </p>
        </motion.div>

        {/* NEWS LIST */}

        <div className="space-y-5">
          {newsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
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
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[26px]
                border
                border-[#c89e5020]
                bg-white/[0.02]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-[#c89e5050]
                hover:bg-white/[0.04]
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
                  opacity-40
                "
              />

              <div
                className="
                  flex
                  flex-col
                  gap-8
                  p-6
                  md:flex-row
                  md:items-center
                  md:justify-between
                  md:p-8
                "
              >
                {/* LEFT */}

                <div className="flex-1">
                  <p
                    className="
                      mb-4
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-[#c89e50]
                    "
                  >
                    {item.date}
                  </p>

                  <h3
                    className="
                      max-w-4xl
                      text-[24px]
                      leading-[1.2]
                      text-[#f5ece0]
                      transition-colors
                      duration-500
                      group-hover:text-[#d9b06a]

                      md:text-[34px]
                    "
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* RIGHT */}

                <motion.div
                  whileHover={{
                    rotate: 45,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#c89e5030]
                    bg-black/30
                    text-[#c89e50]
                    backdrop-blur-xl
                  "
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="mt-16 flex justify-center"
        >
          <button
            className="
              rounded-full
              border
              border-[#c89e5070]
              bg-[#c89e50]
              px-8
              py-4
              text-[11px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-black
              transition-all
              duration-500
              hover:scale-[1.04]
              hover:bg-[#ddb56d]
            "
          >
            View All News
          </button>
        </motion.div>
      </div>
    </section>
  );
}