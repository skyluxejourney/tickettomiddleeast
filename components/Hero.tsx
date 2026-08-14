"use client";

import SearchEngine from "./SearchEngine";
import Image from "next/image";
import { Phone, Headphones } from "lucide-react";
import { CONTACT, BRAND } from "@/app/constants";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Image - Mobile vs Desktop */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image - Visible on desktop, hidden on mobile */}
        <Image
          src="/images/planebackground.png"
          alt="Ticket to Middle East - Travel Experiences"
          fill
          className="object-cover object-center hidden md:block"
          priority
          quality={100}
        />
        {/* Mobile Image - Visible only on mobile */}
        <Image
          src="/images/herobackgroundnavy.jpg"
          alt="Ticket to Middle East - Travel Experiences"
          fill
          className="object-cover object-center block md:hidden"
          priority
          quality={100}
        />
        
        {/* Dark Overlay - Mobile Only */}
        <div className="absolute inset-0 block md:hidden" style={{
          background: `linear-gradient(to bottom, rgba(12, 10, 74, 0.6), rgba(19, 17, 100, 0.5), rgba(12, 10, 74, 0.7))`
        }} />
        
        {/* Removed gradient overlays to show full image on desktop */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Mobile Only Heading - Visible only on mobile screens */}
          <div 
            className={`block md:hidden transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-[1.2] tracking-tight mb-2">
              <span className="text-white">Discover the World's</span>
              <br />
              <span 
                className="text-transparent bg-clip-text italic"
                style={{
                  background: `linear-gradient(to right, #b7901b, #f5edc8, #b7901b)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Best Travel Experiences
              </span>
            </h1>
          </div>

          {/* Mobile Only Subtitle - Visible only on mobile screens */}
          <div 
            className={`block md:hidden transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <p className="text-white/90 text-xs sm:text-sm max-w-md mx-auto mb-3 font-light tracking-wide leading-relaxed">
              Curated luxury journeys to the most breathtaking destinations.
              <br />
              Let us craft your perfect escape.
            </p>
          </div>

          {/* Search Engine Component - Different positioning for mobile vs desktop */}
          <div 
            className={`relative z-20 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ 
              transitionDelay: '300ms',
              marginTop: 'var(--search-margin-top)'
            }}
          >
            <style jsx>{`
              div[style*="--search-margin-top"] {
                --search-margin-top: 4rem; /* Default for mobile */
              }
              @media (min-width: 640px) {
                div[style*="--search-margin-top"] {
                  --search-margin-top: 6rem;
                }
              }
              @media (min-width: 768px) {
                div[style*="--search-margin-top"] {
                  --search-margin-top: 14rem;
                }
              }
              @media (min-width: 1024px) {
                div[style*="--search-margin-top"] {
                  --search-margin-top: 17rem;
                }
              }
            `}</style>
            <SearchEngine />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned at bottom of section */}
      <div 
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-opacity duration-1000 cursor-pointer z-10 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          color: '#b7901b80',
          transitionDelay: '800ms'
        }}
      >
        <div className="w-4 h-6 border border-white/15 rounded-full flex justify-center p-1">
          <div 
            className="w-0.5 h-1.5 rounded-full animate-bounce"
            style={{ backgroundColor: '#b7901b' }}
          />
        </div>
      </div>

      {/* Professional Floating Call Widget - Fixed to not block clicks */}
      <div 
        className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{ transitionDelay: '600ms', pointerEvents: 'none' }}
      >
        {/* Chat Card - Only appears when hovering the button directly */}
        <div
          className={`
            hidden sm:block
            w-[280px]
            rounded-sm
            border border-gray-200/80
            bg-white/95
            backdrop-blur-xl
            p-4
            shadow-[0_20px_60px_rgba(19,17,100,0.18)]
            transition-all duration-400 
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            will-change-transform
            ${isHovered 
              ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto' 
              : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
            }
          `}
        >
          <div className="flex items-start gap-3">
            {/* Support Icon with subtle animation */}
            <div className="relative mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#f0edf8] transition-transform duration-300 group-hover:scale-105">
              <span className="absolute inset-0 rounded-full bg-[#b7901b]/20 animate-ping"></span>
              <Headphones className="relative z-10 h-5 w-5 text-[#131164] transition-transform duration-300 group-hover:rotate-12" />
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                  24/7 Call Assistance
                </p>
              </div>
              <p className="text-base font-bold text-gray-900 transition-colors duration-300">
                {CONTACT.phone}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Flight booking, changes and cancellations.
              </p>
            </div>
          </div>
        </div>

        {/* Circle Call Button with visible wave rings - Navy & Gold Theme */}
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          aria-label="Call support"
          className="
            relative flex h-16 w-16 items-center justify-center
            rounded-full
            text-white
            shadow-[0_12px_32px_rgba(19,17,100,0.45)]
            transition-all duration-400 
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:scale-110
            hover:shadow-[0_20px_45px_rgba(19,17,100,0.55)]
            focus:outline-none focus:ring-4 focus:ring-[#b7901b]/30
            active:scale-95
            will-change-transform
          "
          style={{
            background: `linear-gradient(to right, #131164, #b7901b)`,
            pointerEvents: 'auto'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Wave Rings - with navy & gold colored borders for visibility */}
          <span className="absolute inset-0 rounded-full border-2 border-[#b7901b]/60 animate-[ping_2s_ease-in-out_infinite]"></span>
          <span className="absolute inset-[-4px] rounded-full border-2 border-[#b7901b]/40 animate-[pulse_2.5s_ease-in-out_infinite_0.5s]"></span>
          <span className="absolute inset-[-8px] rounded-full border-2 border-[#b7901b]/25 animate-[pulse_3s_ease-in-out_infinite_1s]"></span>
          
          {/* Inner Glass Circle with improved hover effect */}
          <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all duration-300">
            <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </span>

          {/* Hover glow effect */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#b7901b]/0 to-[#131164]/0 group-hover:from-[#b7901b]/30 group-hover:to-[#131164]/30 transition-all duration-500 blur-xl"></span>
        </a>
      </div>
    </section>
  );
}