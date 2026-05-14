"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Bed,
  Bath,
  Ruler,
} from "lucide-react";

const properties = [
  {
    title: "CLIFF HOUSE",
    location: "AMALFI COAST, ITALY",
    price: "$8,500,000",
    beds: 5,
    baths: 6,
    sqft: "5400 sq.ft",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "HORIZON PAVILION",
    location: "CAPE TOWN, SOUTH AFRICA",
    price: "$12,750,000",
    beds: 6,
    baths: 7,
    sqft: "8200 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "SILENT PEAK RETREAT",
    location: "ASPEN, COLORADO, USA",
    price: "$9,600,000",
    beds: 5,
    baths: 5,
    sqft: "6100 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "OCEAN VILLA",
    location: "MALIBU, CALIFORNIA",
    price: "$15,000,000",
    beds: 7,
    baths: 8,
    sqft: "9600 sq.ft",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "MOUNTAIN RETREAT",
    location: "SWITZERLAND",
    price: "$11,200,000",
    beds: 6,
    baths: 7,
    sqft: "7400 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
  },
];

const duplicatedProperties = [...properties, ...properties];

export default function LuxuryEstateCarousel() {
  const [active, setActive] = useState(0);
  const [cardWidth, setCardWidth] = useState(340);

  const gap = 20;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(260);
      } else if (window.innerWidth < 768) {
        setCardWidth(290);
      } else {
        setCardWidth(320);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setActive((prev) => prev + 1);
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? properties.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (active >= properties.length) {
      const timeout = setTimeout(() => {
        setActive(0);
      }, 1400);

      return () => clearTimeout(timeout);
    }
  }, [active]);

  const translateValue = useMemo(() => {
    return active * (cardWidth + gap);
  }, [active, cardWidth]);

  return (
    <section className="relative overflow-hidden bg-[#070707] py-14 lg:py-20">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col gap-12 px-8 sm:px-12 lg:flex-row lg:items-center lg:px-20">
        {/* LEFT CONTENT */}
        <div className="flex w-full shrink-0 flex-col items-start text-left lg:w-[300px] xl:w-[340px]">
          <p className="mb-4 text-[9px] uppercase tracking-[0.35em] text-[#c9a86a] sm:text-[10px]">
            Featured Neighborhoods
          </p>

          <h2 className="max-w-[320px] font-heading text-[34px] leading-[1.05] tracking-[-0.04em] text-[#f5f1ea] sm:text-[44px] md:text-[52px] lg:text-[56px]">
            Exceptional Spaces.
            <br />
            Extraordinary Lives.
          </h2>

          <p className="mt-5 max-w-[320px] text-[14px] leading-7 text-white/55">
            A curated collection of the world’s most exclusive
            properties crafted with timeless architecture and
            cinematic luxury experiences.
          </p>

          <button className="group flex mt-4 items-center gap-3 rounded-full border border-[#c6a56a]/40 bg-[#c6a56a]/10 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.28em] text-[#f6d28f] backdrop-blur-xl transition-all duration-500 hover:bg-[#d6b36a] hover:text-black">
            Explore More

            <span className="h-[1px] w-8 bg-[#d1ae72] transition-all duration-500 group-hover:w-14" />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex-1 overflow-hidden">
          {/* DESKTOP NAV */}
          <div className="absolute left-2 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
            <button
              onClick={prevSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2f2f2f] bg-[#0d0d0d]/90 text-[#a6a6a6] transition hover:border-[#c9a86a] hover:text-[#c9a86a]"
            >
              <ChevronLeft size={16} />
            </button>
          </div>

          <div className="absolute right-2 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
            <button
              onClick={nextSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2f2f2f] bg-[#0d0d0d]/90 text-[#a6a6a6] transition hover:border-[#c9a86a] hover:text-[#c9a86a]"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* VIEWPORT */}
          <div className="overflow-hidden">
            {/* TRACK */}
            <div
              className="flex gap-5 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${translateValue}px)`,
              }}
            >
              {duplicatedProperties.map((property, index) => {
                const currentIndex = index % properties.length;

                const isActive =
                  currentIndex === active % properties.length;

                return (
                  <div
                    key={index}
                    className={`
                    group relative shrink-0 overflow-hidden rounded-[18px] border transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]

                    w-[260px]
                    sm:w-[290px]
                    md:w-[320px]

                    ${
                      isActive
                        ? "border-[#c9a86a] opacity-100"
                        : "border-[#262626] opacity-70"
                    }
                  `}
                  >
                    {/* IMAGE */}
                    <div className="relative h-[340px] overflow-hidden sm:h-[380px] md:h-[430px]">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="h-full w-full object-cover transition duration-[2500ms] group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    </div>

                    {/* FEATURED */}
                    {isActive && (
                      <div className="absolute left-4 top-4 rounded-md border border-[#c9a86a] bg-black/70 px-3 py-[5px] text-[8px] uppercase tracking-[0.25em] text-[#d4b47c] backdrop-blur-xl sm:text-[9px]">
                        FEATURED
                      </div>
                    )}

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 w-full p-4 text-left sm:p-5">
                      <h3 className="font-heading text-[20px] uppercase tracking-[0.04em] text-[#f5f1ea] sm:text-[24px] md:text-[26px]">
                        {property.title}
                      </h3>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#8c8c8c] sm:text-[10px]">
                        {property.location}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-3 text-[10px] text-[#a0a0a0] sm:gap-4 sm:text-[11px]">
                        <div className="flex items-center gap-1">
                          <Bed size={12} />
                          {property.beds} Beds
                        </div>

                        <div className="flex items-center gap-1">
                          <Bath size={12} />
                          {property.baths} Baths
                        </div>

                        <div className="flex items-center gap-1">
                          <Ruler size={12} />
                          {property.sqft}
                        </div>
                      </div>

                      <div className="mt-4 font-heading text-[22px] text-[#d4b47c] sm:text-[24px]">
                        {property.price}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE NAV */}
          <div className="mt-7 flex items-center justify-center gap-4 lg:hidden">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2f2f2f] bg-[#0d0d0d] text-[#a6a6a6]"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2f2f2f] bg-[#0d0d0d] text-[#a6a6a6]"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}