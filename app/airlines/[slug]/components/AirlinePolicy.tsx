"use client";

import Image from "next/image";
import { Phone, ChevronRight, Calendar, Edit, CheckCircle, ArrowRight, Clock, Headphones } from "lucide-react";
import { BRAND, COMPANY } from "@/app/constants";
import type { AirlineData } from "../constants";
import { useEffect, useState } from "react";

interface AirlinePolicyProps {
  airline: AirlineData;
}

export default function AirlinePolicy({ airline }: AirlinePolicyProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get phone number from airline data
  const phoneNumber = airline.airline.phoneNumber || COMPANY.phone || "+1-888-845-0220";
  
  // Get ONLY policy-related FAQs
  const policyFaqs = airline.faqs.filter((faq) => {
    const question = faq.question.toLowerCase();
    return (
      question.includes('policy') ||
      question.includes('change') ||
      question.includes('cancel') ||
      question.includes('reschedule') ||
      question.includes('refund') ||
      question.includes('fee') ||
      question.includes('same-day') ||
      question.includes('modification') ||
      question.includes('difference') ||
      question.includes('fare type') ||
      question.includes('class')
    );
  });

  const steps = [
    {
      icon: Calendar,
      title: "Select Your New Flight",
      description: "Choose your preferred new flight dates and times from available options.",
    },
    {
      icon: Edit,
      title: "Review Change Details",
      description: "Review the change details, including any fare differences or applicable fees.",
    },
    {
      icon: CheckCircle,
      title: "Confirm & Get Confirmation",
      description: "Confirm your changes and receive your updated itinerary via email.",
    },
  ];

  // Get the brand domain (remove spaces and convert to lowercase)
  const brandDomain = BRAND.name.toLowerCase().replace(/\s/g, '');

  return (
    <section className="py-12 sm:py-16" style={{ backgroundColor: '#faf5e6' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-0">
          {/* Left Side - 70% */}
          <div className="lg:w-[70%] border-r-0 lg:border-r" style={{ borderColor: '#e2e8f0' }}>
            <div className="pr-0 lg:pr-8">
              {/* Heading */}
              <h2 
                className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ color: '#0c0a4a', transitionDelay: '100ms' }}
              >
                {airline.airline.name} Flight Change, Reschedule & Cancellation
              </h2>
              
              {/* Phone Number */}
              <div 
                className={`flex items-center gap-3 mb-6 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '150ms' }}
              >
                <div 
                  className="p-2 rounded-full text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                  style={{
                    background: `linear-gradient(to right, #131164, #1e1a8a)`
                  }}
                >
                  <Phone size={16} />
                </div>
                <span className="text-sm sm:text-base font-medium" style={{ color: '#0c0a4a' }}>
                  Call Airlines Helpdesk:{" "}
                  <a 
                    href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                    className="font-bold transition-all duration-300 hover:text-[#b7901b] hover:scale-105 inline-block"
                    style={{ color: '#131164' }}
                  >
                    {phoneNumber}
                  </a>
                </span>
              </div>

              {/* Hero Banner - Brand Style with Left Fade */}
              <div 
                className={`relative w-full mb-10 overflow-hidden border border-[#E2E8F0]/10 shadow-2xl transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ backgroundColor: '#0c0a4a', transitionDelay: '200ms' }}
              >

                {/* Background */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/flightposter.jpg"
                    alt={`Change or Cancel Flight - ${BRAND.name}`}
                    fill
                    className="object-cover object-center transition-all duration-700 hover:scale-105"
                  />

                  {/* Left-side fade overlay - Updated to navy theme */}
                  <div className="absolute inset-0" style={{
                    background: `linear-gradient(to right, #1c1a53f2, #0c0a4aBF, transparent)`
                  }} />
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row min-h-[460px]">

                  {/* LEFT CONTENT */}
                  <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center max-w-2xl">

                    {/* Brand */}
                    <div 
                      className={`mb-6 transition-all duration-700 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: '250ms' }}
                    >
                      <div className="inline-flex items-center gap-3 backdrop-blur-md border border-white/10 text-white px-4 py-3 hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#1311641A' }}>
                        <Image
                          src="/logo/ticketlogo.png"
                          alt={BRAND.name}
                          width={34}
                          height={34}
                          className="object-contain transition-transform duration-300 hover:rotate-12"
                        />

                        <div className="leading-tight">
                          <p className="text-sm font-bold tracking-wide" style={{ color: '#ffffff' }}>
                            {brandDomain}.com
                          </p>
                          <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            24/7 Airline Support
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-3">
                      <h2 
                        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight transition-all duration-700 ease-out ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                        }`}
                        style={{ color: '#ffffff', transitionDelay: '300ms' }}
                      >
                        {airline.airline.name}
                      </h2>

                      <h2 
                        className={`text-2xl sm:text-3xl lg:text-4xl font-bold transition-all duration-700 ease-out ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                        }`}
                        style={{ color: '#ffffff', transitionDelay: '350ms' }}
                      >
                        Change or Cancel
                      </h2>

                      {/* Flight Divider */}
                      <div 
                        className={`flex items-center gap-4 py-2 max-w-md transition-all duration-700 ease-out ${
                          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                        }`}
                        style={{ transitionDelay: '400ms' }}
                      >
                        <div className="h-px flex-1 bg-white/20" />

                        <span className="text-3xl sm:text-4xl italic font-semibold" style={{ color: '#ffffff' }}>
                          Flight
                        </span>

                        <div className="h-px flex-1 bg-white/20" />
                      </div>

                      {/* With Brand - Updated accent color */}
                      <div 
                        className={`flex items-center gap-3 text-lg text-white/90 transition-all duration-700 ease-out ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                        }`}
                        style={{ transitionDelay: '450ms' }}
                      >
                        <span style={{ color: '#ffffff' }}>with</span>

                        <Image
                          src="/logo/ticketlogo.png"
                          alt={BRAND.name}
                          width={28}
                          height={28}
                          className="object-contain transition-transform duration-300 hover:scale-125"
                        />

                        <span className="font-extrabold italic transition-all duration-300 hover:text-[#f5edc8]" style={{ color: '#f5edc8' }}>
                          {BRAND.name}
                        </span>
                      </div>

                      <p 
                        className={`max-w-xl text-sm sm:text-base leading-relaxed pt-2 transition-all duration-700 ease-out ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{ color: 'rgba(255,255,255,0.75)', transitionDelay: '500ms' }}
                      >
                        Get instant assistance for flight changes, cancellations, same-day
                        rebooking, fare difference guidance, and refund-related queries from
                        our travel experts at {BRAND.name}.
                      </p>
                    </div>

                    {/* Features - Updated to navy theme */}
                    <div className="mt-8 space-y-5">
                      {[
                        { icon: Calendar, title: "Change or Cancel", desc: "Modify your flight hassle-free" },
                        { icon: Clock, title: "Save on Change Fees", desc: "Explore available fee-saving options" },
                        { icon: Headphones, title: "24/7 Support", desc: "Real travel assistance anytime" }
                      ].map((feature, index) => (
                        <div 
                          key={index}
                          className={`flex items-start gap-4 transition-all duration-700 ease-out ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                          }`}
                          style={{ transitionDelay: `${550 + index * 50}ms` }}
                        >
                          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-12" style={{ backgroundColor: '#131164' }}>
                            <feature.icon size={22} />
                          </div>

                          <div>
                            <h3 className="font-semibold text-base transition-colors duration-300 hover:text-[#f5edc8]" style={{ color: '#ffffff' }}>
                              {feature.title}
                            </h3>
                            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT SIDE - background image remains visible */}
                  <div className="lg:w-[38%]" />
                </div>

                {/* CALL BAR - Updated to navy theme */}
                <div 
                  className={`relative z-10 text-white border-t border-white/10 transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ backgroundColor: '#0c0a4aF2', transitionDelay: '700ms' }}
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4">

                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-12" style={{ backgroundColor: '#f5edc8' }}>
                        <Phone size={22} style={{ color: '#131164' }} />
                      </div>

                      <div>
                        <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                          Call Now
                        </p>

                        <p className="text-lg sm:text-xl font-extrabold tracking-wide transition-colors duration-300 hover:text-[#f5edc8]" style={{ color: '#ffffff' }}>
                          {phoneNumber}
                        </p>
                      </div>
                    </div>

                    <a
                      href={"tel:" + phoneNumber.replace(/\s/g, "")}
                      className="inline-flex items-center gap-2 px-6 py-3 font-bold transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl active:scale-95"
                      style={{
                        backgroundColor: '#f5edc8',
                        color: '#131164'
                      }}
                    >
                      <Phone size={18} className="animate-pulse" />
                      Call 24/7
                    </a>

                  </div>
                </div>
              </div>

              {/* Policy Queries - Only Policy Related FAQs */}
              <div className="space-y-4">
                {policyFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`bg-white shadow-sm hover:shadow-md transition-all duration-500 ease-out p-5 border hover:border-[#b7901b]/30 group ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      borderColor: '#e2e8f0',
                      transitionDelay: `${800 + index * 50}ms`
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                          style={{
                            backgroundColor: '#f5edc8',
                          }}
                        >
                          <ChevronRight size={14} style={{ color: '#131164' }} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base font-semibold transition-colors duration-300 group-hover:text-[#b7901b]" style={{ color: '#0c0a4a' }}>
                          {faq.question}
                        </h3>
                        <div className="mt-2">
                          <p className="text-xs sm:text-sm leading-relaxed transition-all duration-300 group-hover:text-[#0c0a4a]" style={{ color: '#0c0a4aB3' }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - 30% - Image Only */}
          <div className="lg:w-[30%] flex items-start justify-center">
            <div 
              className={`sticky top-24 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <Image
                src="/images/sidepannel.png"
                alt={`Review Us Now - ${BRAND.name}`}
                width={400}
                height={600}
                className="w-full max-w-[400px] h-auto object-contain transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Three Steps Section */}
        <div 
          className={`mt-12 pt-8 border-t transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ borderColor: '#e2e8f0', transitionDelay: '900ms' }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: '#0c0a4a' }}>
              Change Your {airline.airline.name} Flight with {BRAND.name}
            </h3>
            <div 
              className="w-16 h-1 mx-auto mt-3 rounded-full transition-all duration-500 hover:w-24"
              style={{
                background: `linear-gradient(to right, #131164, #b7901b)`
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-white shadow-md hover:shadow-xl transition-all duration-500 ease-out p-6 border hover:border-[#b7901b]/30 group hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  borderColor: '#e2e8f0',
                  transitionDelay: `${1000 + index * 100}ms`
                }}
              >
                {/* Step Number */}
                <div 
                  className="absolute -top-3 -left-3 w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(to right, #131164, #b7901b)`
                  }}
                >
                  {index + 1}
                </div>

                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-16 h-16 rounded-full transition-all duration-300 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12"
                    style={{
                      backgroundColor: '#f5edc8',
                    }}
                  >
                    <step.icon className="w-8 h-8 transition-colors duration-300 group-hover:text-[#b7901b]" style={{ color: '#131164' }} />
                  </div>
                  <h4 className="text-base font-semibold transition-colors duration-300 group-hover:text-[#b7901b]" style={{ color: '#0c0a4a' }}>
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm mt-2 leading-relaxed group-hover:text-[#0c0a4a] transition-colors duration-300" style={{ color: '#0c0a4a99' }}>
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 transition-all duration-300 group-hover:scale-125">
                    <ArrowRight className="w-6 h-6" style={{ color: '#b7901b4D' }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Unbeatable Deals CTA */}
          <div 
            className={`mt-10 p-6 sm:p-8 text-center text-white shadow-xl transition-all duration-700 ease-out hover:shadow-2xl ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              background: `linear-gradient(to right, #131164, #b7901b)`,
              transitionDelay: '1200ms'
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <h4 className="text-xl sm:text-2xl font-bold flex items-center gap-2" style={{ color: '#ffffff' }}>
                  <Phone className="w-6 h-6 animate-pulse" style={{ color: '#ffffff' }} />
                  For Unbeatable Deals, Call Us Today!
                </h4>
                <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Get exclusive discounts and personalized assistance from our travel experts at {BRAND.name}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2.5 transition-all duration-300 hover:scale-105">
                  <Phone className="w-4 h-4" style={{ color: '#ffffff' }} />
                  <span className="font-bold text-base" style={{ color: '#ffffff' }}>24/7 Support</span>
                </div>
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                  className="bg-white px-6 py-3 rounded-full font-bold hover:bg-[#faf5e6] transition-all duration-300 shadow-lg flex items-center gap-2 whitespace-nowrap hover:scale-105 hover:shadow-xl active:scale-95"
                  style={{ color: '#131164' }}
                >
                  <Phone size={18} />
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}