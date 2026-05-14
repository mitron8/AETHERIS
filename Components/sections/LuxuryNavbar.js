"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export function LuxuryNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "Properties",
    "Experiences",
    "About Us",
    "Journal",
    "Contact",
  ];

  return (
    <>
      {/* ========================= */}
      {/* NAVBAR */}
      {/* ========================= */}

      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="mx-auto flex w-full items-center justify-between border-b border-white/5 bg-black/30 px-8 py-4 backdrop-blur-md sm:px-12 md:py-5 lg:px-20">
          {/* ========================= */}
          {/* LOGO */}
          {/* ========================= */}

          <div className="flex items-center gap-3">
            {/* ICON */}

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#d6b36a]/40
                bg-black/30
                backdrop-blur-xl
              "
            >
              <div className="h-4 w-4 rotate-45 border border-[#d6b36a]" />
            </div>

            {/* TEXT */}

            <div>
              <h2
                className="
                  font-heading
                  text-[16px]
                  font-extralight
                  tracking-[0.32em]
                  text-[#f8e7c2]

                  md:text-[18px]
                "
                style={{
                  fontWeight: 200,
                }}
              >
                AETHERIS
              </h2>

              <p
                className="
                  -mt-[2px]
                  text-[9px]
                  uppercase
                  tracking-[0.42em]
                  text-[#b9975b]

                  md:text-[10px]
                "
              >
                Living
              </p>
            </div>
          </div>

          {/* ========================= */}
          {/* DESKTOP NAV */}
          {/* ========================= */}

          <nav className="hidden items-center gap-10 xl:gap-12 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="
                  group
                  relative
                  text-[11px]
                  uppercase
                  tracking-[0.22em]
                  text-white/75
                  transition-all
                  duration-300
                  hover:text-[#f6d28f]
                "
              >
                {item}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[1px]
                    w-0
                    bg-[#f6d28f]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>

          {/* ========================= */}
          {/* RIGHT SIDE */}
          {/* ========================= */}

          <div className="flex items-center gap-4">
            {/* DESKTOP BUTTON */}

            <button
              className="
                group
                hidden
                items-center
                gap-3
                rounded-full
                border
                border-[#d6b36a]/40
                bg-black/30
                px-6
                py-3
                text-[10px]
                uppercase
                tracking-[0.26em]
                text-[#f6d28f]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:bg-[#d6b36a]
                hover:text-black

                lg:flex
              "
            >
              Book A Viewing

              <ArrowRight
                size={14}
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              />
            </button>

            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#d6b36a]/40
                bg-black/30
                text-[#f6d28f]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-[#d6b36a]
                hover:text-black

                lg:hidden
              "
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* ========================= */}
      {/* MOBILE MENU */}
      {/* ========================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              fixed
              inset-0
              z-40
              bg-black/92
              backdrop-blur-2xl
              pt-32

              lg:hidden
            "
          >
            {/* GOLD GLOW */}

            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at top, rgba(214,179,106,0.10), transparent 60%)",
              }}
            />

            {/* CONTENT */}

            <div
              className="
                relative
                flex
                h-full
                flex-col
                justify-center
                px-8
              "
            >
              {/* NAV ITEMS */}

              <div className="flex flex-col gap-7">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 20,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => setIsOpen(false)}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[#d6b36a]/10
                      pb-5
                    "
                  >
                    <span
                      className="
                        font-heading
                        text-[30px]
                        font-light
                        leading-none
                        tracking-[-0.03em]
                        text-[#f5ece0]
                      "
                    >
                      {item}
                    </span>

                    <ArrowRight
                      size={18}
                      className="
                        text-[#d6b36a]
                        transition-transform
                        duration-500
                        group-hover:translate-x-2
                      "
                    />
                  </motion.a>
                ))}
              </div>

              {/* BOTTOM */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                }}
                className="mt-14"
              >
                <button
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-[#d6b36a]/40
                    bg-[#d6b36a]
                    px-8
                    py-4
                    text-[11px]
                    uppercase
                    tracking-[0.28em]
                    text-black
                    transition-all
                    duration-500
                  "
                >
                  Book A Viewing

                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  />
                </button>

                {/* SMALL TEXT */}

                <div className="mt-10 flex items-center gap-4">
                  <div className="h-[1px] flex-1 bg-[#d6b36a]/20" />

                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.4em]
                      text-[#d6b36a]
                    "
                  >
                    AETHERIS Living
                  </p>

                  <div className="h-[1px] flex-1 bg-[#d6b36a]/20" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}