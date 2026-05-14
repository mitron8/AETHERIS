"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=1181&auto=format&fit=crop&ixlib=rb-4.1.0')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,179,106,0.10),transparent_45%)]" />

      {/* VIGNETTE */}
      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.95)]" />

      {/* ========================================= */}
      {/* MAIN CONTENT */}
      {/* ========================================= */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1320px] items-center px-8 sm:px-12 lg:px-20">

        {/* LEFT SIDE */}
        <div className="w-full max-w-[640px]">

          {/* TOP LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="mt-25 h-[1px] w-8 shrink-0 bg-[#c6a56a]" />

            <p className="mt-25 text-[9px] font-medium uppercase tracking-[0.38em] text-[#c6a56a]">
              Beyond Architecture
            </p>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-heading text-[clamp(38px,5vw,78px)] font-light leading-[0.95] tracking-[-0.05em] text-white"
          >
            TRANSCEND
            <br />
            THE ORDINARY.

            <span className="mt-1 block text-[#d6b36a]">
              LIVE THE
              <br />
              EXTRAORDINARY.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="mt-7 max-w-[500px] text-[14px] leading-7 text-white/60"
          >
            Discover cinematic luxury experiences crafted with
            immersive storytelling, elegant architecture, and
            premium motion inspired by modern editorial brands.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >

            {/* PRIMARY BUTTON */}
            <button className="group flex items-center gap-3 rounded-full border border-[#c6a56a]/40 bg-[#c6a56a]/10 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.28em] text-[#f6d28f] backdrop-blur-xl transition-all duration-500 hover:bg-[#d6b36a] hover:text-black">
              Explore More

              <ArrowRight
                size={14}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </button>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
            className="mt-8 flex flex-wrap items-center gap-10"
          >
            {[
              ["1200+", "Clients"],
              ["850+", "Estates"],
              ["120+", "Locations"],
            ].map(([number, label]) => (
              <div key={label}>
                <h3 className="font-heading text-2xl font-light text-[#f6d28f]">
                  {number}
                </h3>

                <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-white/35">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ========================================= */}
      {/* SCROLL INDICATOR */}
      {/* ========================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="absolute right-8 top-1/2 hidden -translate-y-1/2 xl:flex"
      >
        <div className="flex flex-col items-center gap-4">

          <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-[#c6a56a] to-transparent" />

          <motion.p
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="rotate-90 text-[9px] uppercase tracking-[0.42em] text-[#c6a56a]"
          >
            Scroll
          </motion.p>

          <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-[#c6a56a] to-transparent" />
        </div>
      </motion.div>

      {/* ========================================= */}
      {/* BOTTOM FADE */}
      {/* ========================================= */}
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}