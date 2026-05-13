"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function LuxuryFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-[#c89e50]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* Top */}
        <div className="flex flex-col justify-between gap-14 border-b border-white/10 pb-14 md:flex-row">
          {/* Brand */}
          <div className="max-w-md">
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#c89e50]">
              Luxury Real Estate
            </p>

            <h2
              className="text-4xl leading-none text-[#f5ece0] md:text-6xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              AETHERIS
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/50">
              Discover refined living experiences curated with timeless
              architecture and modern luxury.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#c89e50]">
                Navigation
              </p>

              <div className="flex flex-col gap-3 text-sm text-white/60">
                <a href="#" className="transition hover:text-white">
                  Home
                </a>
                <a href="#" className="transition hover:text-white">
                  Properties
                </a>
                <a href="#" className="transition hover:text-white">
                  About
                </a>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#c89e50]">
                Social
              </p>

              <div className="flex flex-col gap-3 text-sm text-white/60">
                <a href="#" className="transition hover:text-white">
                  Instagram
                </a>
                <a href="#" className="transition hover:text-white">
                  Twitter
                </a>
                <a href="#" className="transition hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#c89e50]">
                Contact
              </p>

              <div className="flex flex-col gap-5 text-sm text-white/60">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-1 text-[#c89e50]"
                  />

                  <span>Miami, Florida</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#c89e50]" />

                  <span>+1 999 888 777</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#c89e50]" />

                  <span>hello@aetheris.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-white/40 md:flex-row">
          <p>© 2026 AETHERIS. All rights reserved.</p>

          <p>
            Crafted with elegance & luxury.
          </p>
        </div>
      </div>
    </footer>
  );
}