"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const properties = [
  {
    id: "1",
    title: "Modern Hillside Villa",
    location: "California, USA",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    interior:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
  },
  {
    id: "2",
    title: "Luxury Penthouse",
    location: "Miami, USA",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200",
    interior:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200",
  },
  {
    id: "3",
    title: "Ocean View Residence",
    location: "Malibu, USA",
    image:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1200",
    interior:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200",
  },
  {
    id: "4",
    title: "Elegant Family Home",
    location: "Toronto, Canada",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200",
    interior:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200",
  },
  {
    id: "5",
    title: "Minimalist Architecture",
    location: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
    interior:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    title: "Private Luxury Estate",
    location: "Beverly Hills",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
    interior:
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1200",
  },
  {
    id: "7",
    title: "Skyline Signature Tower",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=1200",
    interior:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const col1 = properties.slice(0, 2);
const col2 = properties.slice(2, 5);
const col3 = properties.slice(5, 7);

export default function ExecutiveImpactCarousel() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        const columns = gsap.utils.toArray(".reverse-scroll");

        columns.forEach((column) => {
          gsap.to(column, {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: column,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }, containerRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0A0A] py-24 pb-40 text-white">

      {/* Glow Effects */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#C29B6B]/10 blur-[120px]" />

      {/* Heading */}

      <div className="relative z-10 mx-auto mb-20 max-w-7xl px-6 text-center">

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#c9a86a]">
          Premium Collection
        </p>

        <h2 className="mx-auto max-w-5xl text-4xl font-light leading-tight md:text-6xl">
          Crafted Luxury Living

          <span className="mt-3 block text-neutral-500">
            With Timeless Architecture
          </span>
        </h2>
      </div>

      {/* Columns */}

      <div
        ref={containerRef}
        className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 gap-8 px-8 sm:px-12 md:grid-cols-3 lg:px-20"
      >
        <Column items={col1} reverse />

        <Column items={col2} />

        <Column items={col3} reverse />
      </div>
    </section>
  );
}

function Column({ items, reverse }) {
  return (
    <div
      className={`flex flex-col gap-10 ${
        reverse ? "reverse-scroll md:mt-32" : ""
      }`}
    >
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

function Card({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20">

      {/* Image Wrapper */}

      <div className="relative h-[500px] w-full overflow-hidden">

        {/* Main Image */}

        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-0"
        />

        {/* Hover Image */}

        <img
          src={item.interior}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      </div>

      {/* Content */}

      <div className="absolute bottom-0 left-0 z-10 w-full p-6">

        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-300">
          {item.location}
        </p>

        <div className="flex items-end justify-between gap-4">

          <h3 className="max-w-[80%] text-2xl font-light leading-snug md:text-3xl">
            {item.title}
          </h3>

          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black">
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>

      {/* Hover Shine */}

      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

        <div className="absolute -left-20 top-0 h-full w-32 rotate-12 bg-white/10 blur-2xl" />
      </div>
    </div>
  );
}