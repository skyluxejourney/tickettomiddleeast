"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Phone, HelpCircle } from "lucide-react";
import type { AirlineData } from "../constants";

interface AirlineFAQProps {
  airline: AirlineData;
}

export default function AirlineFAQ({ airline }: AirlineFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get data from airline object
  const airlineName = airline.airline.name;
  const phoneNumber = airline.airline.phoneNumber || "+1-888-845-0220";
  
  // Get ONLY non-policy FAQs (general questions)
  const generalFaqs = airline.faqs.filter((faq) => {
    const question = faq.question.toLowerCase();
    return (
      !question.includes('policy') &&
      !question.includes('change') &&
      !question.includes('cancel') &&
      !question.includes('reschedule') &&
      !question.includes('refund') &&
      !question.includes('fee') &&
      !question.includes('same-day') &&
      !question.includes('modification') &&
      !question.includes('difference') &&
      !question.includes('fare type') &&
      !question.includes('class')
    );
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // If no general FAQs, don't render the section
  if (generalFaqs.length === 0) {
    return null;
  }

  return (
    <section className="py-4 sm:py-6 bg-white border-t" style={{ borderColor: '#e2e8f0' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Left Aligned */}
        <div 
          className={`mb-6 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5 transition-all duration-300 hover:rotate-12 hover:scale-110" style={{ color: '#131164' }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#131164' }}>
              FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#0c0a4a' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-sm mt-1" style={{ color: '#0c0a4a99' }}>
            Find answers to the most common questions about {airlineName} flights
          </p>
          <div 
            className="w-12 h-0.5 mt-2 transition-all duration-500 hover:w-20"
            style={{
              background: `linear-gradient(to right, #131164, #b7901b)`
            }}
          />
        </div>

        {/* FAQ List - Full Width */}
        <div className="space-y-2">
          {generalFaqs.map((faq, index) => (
            <div
              key={index}
              className={`
                border transition-all duration-500 ease-out overflow-hidden
                ${openIndex === index ? 'shadow-md' : 'hover:shadow-sm'}
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
              `}
              style={{
                backgroundColor: '#faf5e6',
                borderColor: openIndex === index ? '#b7901b' : '#e2e8f0',
                transitionDelay: `${200 + index * 60}ms`
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-5 py-3 flex items-center justify-between gap-4 text-left group"
              >
                <span className="text-sm sm:text-base font-semibold flex-1 transition-colors duration-300 group-hover:text-[#b7901b]" style={{ color: '#0c0a4a' }}>
                  {faq.question}
                </span>
                <span className={`
                  flex-shrink-0 w-7 h-7 flex items-center justify-center
                  transition-all duration-300
                  ${openIndex === index 
                    ? 'text-white' 
                    : ''
                  }
                  group-hover:scale-110
                `}
                style={{
                  backgroundColor: openIndex === index ? '#131164' : '#f5edc8',
                  color: openIndex === index ? 'white' : '#131164'
                }}>
                  {openIndex === index ? (
                    <ChevronUp size={16} className="transition-transform duration-300" />
                  ) : (
                    <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </span>
              </button>
              
              <div 
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="px-4 sm:px-5 pb-4">
                  <div className="pt-3 border-t" style={{ borderColor: '#e2e8f0' }}>
                    <p className="text-sm leading-relaxed transition-colors duration-300 hover:text-[#0c0a4a]" style={{ color: '#0c0a4aB3' }}>
                      {faq.answer}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs" style={{ color: '#131164' }}>
                      <Phone size={14} className="transition-all duration-300 hover:scale-110 hover:rotate-12" />
                      <span>Need help? Call us: </span>
                      <a 
                        href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                        className="font-semibold transition-all duration-300 hover:text-[#b7901b] hover:scale-105 inline-block"
                        style={{ color: '#131164' }}
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-6 text-left transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-sm" style={{ color: '#0c0a4a99' }}>
            Still have questions? Our travel experts are here to help you 24/7
          </p>
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 text-white font-semibold transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 group"
            style={{
              background: `linear-gradient(to right, #131164, #1e1a8a)`,
              boxShadow: `0 10px 15px -3px #13116433`
            }}
          >
            <Phone size={16} className="transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
            Call Us Now: {phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
}