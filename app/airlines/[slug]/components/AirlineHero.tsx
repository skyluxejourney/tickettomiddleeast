"use client";

import Image from "next/image";
import SearchEngine from "@/components/SearchEngine";
import { Phone, Headphones } from "lucide-react";
import { BRAND } from "@/app/constants";
import type { AirlineData } from "../airlines-data";
import { useEffect, useState } from "react";

interface AirlineHeroProps {
  airline: AirlineData;
}

export default function AirlineHero({ airline }: AirlineHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Extract airline name from the data
  const airlineName = airline.airline.name;
  
  // Split the title to highlight the airline name
  const titleParts = airline.hero.title.split(airlineName);

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Image - Aeroplane ready for takeoff */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/airlinesherobg.png"
          alt={`${airlineName} flights - ${BRAND.name}`}
          fill
          className="object-cover object-center transition-all duration-1000 ease-out"
          priority
          quality={100}
          style={{
            transform: isVisible ? 'scale(1)' : 'scale(1.05)',
            transitionDelay: '100ms'
          }}
        />
        {/* Navy & Gold themed overlay */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom, #0c0a4aCC, #13116499, #0c0a4aCC)`
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-black/10" />
        
        {/* Gold accent glow */}
        <div 
          className="absolute inset-0 opacity-20 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, #b7901b33, transparent 70%)`,
            opacity: isVisible ? 0.2 : 0
          }}
        />
      </div>

      {/* Decorative Accent Line - Top */}
      <div 
        className="absolute top-0 left-0 right-0 z-10 h-1"
        style={{
          background: `linear-gradient(to right, #131164, #b7901b, #f5edc8)`
        }}
      />

      {/* Content - Left Aligned & Full Width */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full text-left">
          <h1 
            className={`mb-4 sm:mb-5 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {titleParts.length > 1 ? (
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight">
                {titleParts[0]}
                <span 
                  className="italic transition-all duration-300 hover:bg-gradient-to-r hover:from-[#f5edc8] hover:to-[#b7901b]"
                  style={{
                    background: `linear-gradient(to right, #b7901b, #f5edc8, #b7901b)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {airlineName}
                </span>
                {titleParts[1]}
              </span>
            ) : (
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight">
                {airline.hero.title}
              </span>
            )}
          </h1>

          <p 
            className={`text-white/80 italic text-sm sm:text-base md:text-lg w-full mb-6 sm:mb-8 font-light tracking-wide leading-relaxed max-w-none transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {BRAND.name} is an independent travel agency. Our agents can help you understand {airlineName} Airlines&apos; published change, cancellation, name-correction, and upgrade policies so you can decide on the right next step for your trip.
          </p>

          {/* Search Engine Component */}
          <div 
            className={`relative z-20 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <SearchEngine />
          </div>
        </div>
      </div>

      {/* Decorative Accent Line - Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-10 h-1"
        style={{
          background: `linear-gradient(to right, #f5edc8, #b7901b, #131164)`
        }}
      />

      {/* Gold corner accents */}
      <div 
        className={`absolute top-20 left-8 z-10 w-16 h-16 border-t-2 border-l-2 border-[#b7901b]/30 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{ transitionDelay: '500ms' }}
      />
      <div 
        className={`absolute top-20 right-8 z-10 w-16 h-16 border-t-2 border-r-2 border-[#b7901b]/30 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{ transitionDelay: '600ms' }}
      />

      {/* Professional Floating Call Widget - Navy & Gold Theme */}
      <div 
        className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 group flex items-center gap-3 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{ transitionDelay: '700ms' }}
      >
        {/* Chat Card - appears on hover with optimized animation */}
        <div
          className="
            hidden sm:block
            w-[280px]
            rounded-sm
            border border-gray-200/80
            bg-white/95
            backdrop-blur-xl
            p-4
            shadow-[0_20px_60px_rgba(19,17,100,0.18)]
            opacity-0
            translate-x-4
            scale-95
            pointer-events-none
            transition-all duration-400 
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            group-hover:opacity-100
            group-hover:translate-x-0
            group-hover:scale-100
            group-hover:pointer-events-auto
            will-change-transform
          "
        >
          <div className="flex items-start gap-3">

            {/* Support Icon with subtle animation */}
            <div className="relative mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#f0edf8] group-hover:scale-105 transition-transform duration-300">
              <span className="absolute inset-0 rounded-full bg-[#b7901b]/20 animate-ping"></span>
              <Headphones className="relative z-10 h-5 w-5 text-[#131164] group-hover:rotate-12 transition-transform duration-300" />
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

              <p className="text-base font-bold text-gray-900 group-hover:text-[#131164] transition-colors duration-300">
                {airline.hero.ctaPhone}
              </p>

              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Flight booking, changes and cancellations.
              </p>
            </div>
          </div>
        </div>

        {/* Circle Call Button with visible wave rings - Navy & Gold Theme */}
        <a
          href={`tel:${airline.hero.ctaPhone}`}
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
            background: `linear-gradient(to right, #131164, #b7901b)`
          }}
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