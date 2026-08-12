"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Award,
  Shield,
} from "lucide-react";
import ContactModal from "./ContactModal";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, CONTACT, BRAND } from "@/app/constants";
import { airlinesDataMap } from "@/app/airlines/[slug]/data";
import type { AirlineData } from "@/app/airlines/[slug]/airlines-data";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 1. Quick Links (Updated)
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Contact Us", href: "#", isModal: true },
    { name: "Site Map", href: "/sitemap" },
  ];

  // 2. Legal Links (Added)
  const legalLinks = [
    { name: "Terms & Condition", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Price Match Promise", href: "/price-match-policy" },
    { name: "Fulfillment Policy", href: "/fulfillment-policy" },
    { name: "Fare Disclosure", href: "/fare-disclosure-policy" },
    { name: "Advertiser Disclosure", href: "/advertiser-disclosure-policy" },
    { name: "Cookies Policy", href: "/cookies" },
    { name: "Cancellation and Refund", href: "/cancellation-refund-policy" },
    { name: "Taxes and Fees", href: "/taxes-fees" },
  ];

  // Helper function to generate slug from airline name
  function getSlugFromName(name: string): string {
    if (!name || typeof name !== 'string') return "";
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  // Get top airlines from the airlinesDataMap - limit to 7 for display
  const allAirlines = Object.values(airlinesDataMap);
  const topAirlines = allAirlines
    .filter((airline: AirlineData) => airline.airline?.name)
    .slice(0, 7)
    .map((airline: AirlineData) => ({
      name: airline.airline.name,
      slug: getSlugFromName(airline.airline.name)
    }));

  const handleLinkClick = (e: React.MouseEvent, linkName: string, isModal?: boolean) => {
    if (isModal) {
      e.preventDefault();
      setSelectedLink(linkName);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedLink("");
  };

  return (
    <>
      <footer 
        className={`text-[#0c0a4a]/80 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{ backgroundColor: '#faf5e6' }}
      >
        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* 4 Columns: Brand, Quick Links, Top Airlines, Legal Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            
            {/* 1. Brand & About */}
            <div 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  <Image
                    src="/logo/ticketlogo.png"
                    alt={BRAND.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="font-bold tracking-wide font-heading italic transition-colors duration-300 hover:text-[#b7901b]" style={{ color: '#0c0a4a', fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)' }}>
                    {BRAND.name}
                  </h2>
                  <p className="text-[10px] font-medium tracking-wider uppercase" style={{ color: '#131164' }}>
                    {BRAND.tagline || "Travel Assistance"}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4 max-w-xs" style={{ color: '#0c0a4a99' }}>
                Your trusted partner for unforgettable travel experiences across the world. We help
                you discover the world with ease and comfort.
              </p>
              <div className="flex items-center gap-3 text-sm" style={{ color: '#0c0a4a99' }}>
                <div className="flex items-center gap-1 transition-all duration-300 hover:scale-105 hover:text-[#131164]">
                  <Award size={14} style={{ color: '#131164' }} />
                  <span>5 Years of Trust</span>
                </div>
                <div className="flex items-center gap-1 transition-all duration-300 hover:scale-105 hover:text-[#131164]">
                  <Shield size={14} style={{ color: '#131164' }} />
                  <span>Secure Booking</span>
                </div>
              </div>
            </div>

            {/* 2. Quick Links */}
            <div 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h3 className="font-semibold text-lg mb-4 relative" style={{ color: '#0c0a4a' }}>
                Quick Links
                <span 
                  className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full transition-all duration-500 group-hover:w-12"
                  style={{
                    background: `linear-gradient(to right, #131164, #b7901b)`
                  }}
                />
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link, index) => (
                  <li 
                    key={link.name}
                    className={`transition-all duration-500 ease-out ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${300 + index * 50}ms` }}
                  >
                    {link.isModal ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.name, true)}
                        className="text-sm transition-all duration-300 flex items-center gap-2 group cursor-pointer hover:translate-x-1"
                        style={{ color: '#0c0a4a99' }}
                      >
                        <span 
                          className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2 group-hover:bg-[#b7901b]"
                          style={{ 
                            backgroundColor: '#13116466',
                          }}
                        />
                        <span className="group-hover:text-[#131164] transition-colors duration-300">
                          {link.name}
                        </span>
                      </a>
                    ) : link.name === "Home" ? (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-sm transition-all duration-300 flex items-center gap-2 group cursor-pointer hover:translate-x-1"
                        style={{ color: '#0c0a4a99' }}
                      >
                        <span 
                          className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2 group-hover:bg-[#b7901b]"
                          style={{ 
                            backgroundColor: '#13116466',
                          }}
                        />
                        <span className="group-hover:text-[#131164] transition-colors duration-300">
                          {link.name}
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                        style={{ color: '#0c0a4a99' }}
                      >
                        <span 
                          className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2 group-hover:bg-[#b7901b]"
                          style={{ 
                            backgroundColor: '#13116466',
                          }}
                        />
                        <span className="group-hover:text-[#131164] transition-colors duration-300">
                          {link.name}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Top Airlines */}
            <div 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <h3 className="font-semibold text-lg mb-4 relative" style={{ color: '#0c0a4a' }}>
                Top Airlines
                <span 
                  className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full transition-all duration-500 group-hover:w-12"
                  style={{
                    background: `linear-gradient(to right, #131164, #b7901b)`
                  }}
                />
              </h3>
              <ul className="space-y-2.5">
                {topAirlines.map((airline, index) => (
                  <li 
                    key={airline.name}
                    className={`transition-all duration-500 ease-out ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${400 + index * 50}ms` }}
                  >
                    <Link
                      href={`/airlines/${airline.slug}`}
                      className="text-sm transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                      style={{ color: '#0c0a4a99' }}
                    >
                      <span 
                        className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2 group-hover:bg-[#b7901b]"
                        style={{ 
                          backgroundColor: '#13116466',
                        }}
                      />
                      <span className="group-hover:text-[#131164] transition-colors duration-300">
                        {airline.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Legal Links */}
            <div 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="font-semibold text-lg mb-4 relative" style={{ color: '#0c0a4a' }}>
                Legal Links
                <span 
                  className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full transition-all duration-500 group-hover:w-12"
                  style={{
                    background: `linear-gradient(to right, #131164, #b7901b)`
                  }}
                />
              </h3>
              <ul className="space-y-2.5">
                {legalLinks.map((link, index) => (
                  <li 
                    key={link.name}
                    className={`transition-all duration-500 ease-out ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${500 + index * 30}ms` }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                      style={{ color: '#0c0a4a99' }}
                    >
                      <span 
                        className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2 group-hover:bg-[#b7901b]"
                        style={{ 
                          backgroundColor: '#13116466',
                        }}
                      />
                      <span className="group-hover:text-[#131164] transition-colors duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div 
            className={`mt-12 pt-8 border-t transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              borderColor: '#1311641A',
              transitionDelay: '600ms'
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-base" style={{ color: '#0c0a4a' }}>
                  Subscribe to Our Newsletter
                </h4>
                <p className="text-sm" style={{ color: '#0c0a4a40' }}>
                  Get the best travel deals straight to your inbox
                </p>
              </div>
              <div className="flex w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 sm:w-64 px-4 py-2.5 bg-white/80 border rounded-l-full focus:outline-none transition-all duration-300 focus:border-[#b7901b] focus:ring-2 focus:ring-[#b7901b]/20 text-sm"
                  style={{
                    borderColor: '#13116433',
                    color: '#0c0a4a',
                  }}
                />
                <button 
                  className="px-5 py-2.5 text-white rounded-r-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm whitespace-nowrap shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 group"
                  style={{
                    background: `linear-gradient(to right, #131164, #1e1a8a)`,
                    boxShadow: `0 10px 15px -3px #13116433`
                  }}
                >
                  <Send size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className={`border-t transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            borderColor: '#1311641A', 
            backgroundColor: '#faf5e6CC',
            transitionDelay: '700ms'
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: '#0c0a4a40' }}>
              <p className="transition-colors duration-300 hover:text-[#131164]">
                &copy; {COMPANY.year || new Date().getFullYear()} {COMPANY.name || BRAND.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link 
                  href="/privacy-policy" 
                  className="transition-all duration-300 hover:text-[#131164] hover:scale-105"
                  style={{ color: '#0c0a4a40' }}
                >
                  Privacy Policy
                </Link>
                <span className="w-px h-3" style={{ backgroundColor: '#1311641A' }} />
                <Link 
                  href="/terms-of-service" 
                  className="transition-all duration-300 hover:text-[#131164] hover:scale-105"
                  style={{ color: '#0c0a4a40' }}
                >
                  Terms of Service
                </Link>
                <span className="w-px h-3" style={{ backgroundColor: '#1311641A' }} />
                <Link 
                  href="/cookies" 
                  className="transition-all duration-300 hover:text-[#131164] hover:scale-105"
                  style={{ color: '#0c0a4a40' }}
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showModal}
        onClose={closeModal}
        selectedItem={selectedLink}
      />
    </>
  );
}