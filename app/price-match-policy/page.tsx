"use client";

import { 
  Shield, 
  FileText, 
  Globe, 
  CheckCircle,
  Phone,
  Clock,
  DollarSign,
  Search,
  XCircle,
  AlertCircle,
  Info,
  CreditCard,
  UserCheck,
  RefreshCw,
  Award,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function PriceMatchPage() {
  const sections = [
    {
      icon: FileText,
      title: "Price Match Summary",
      content: (
        <div className="overflow-x-auto mt-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[480px] sm:min-w-full">
            <table className="w-full border-collapse text-xs sm:text-sm" style={{ borderColor: '#f5edc8' }}>
              <thead>
                <tr style={{ backgroundColor: '#f5edc8' }}>
                  <th className="border px-4 py-3 text-left font-semibold" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Claim Component</th>
                  <th className="border px-4 py-3 text-left font-semibold" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Tickettomiddleeast.com Rule</th>
                </tr>
              </thead>
              <tbody>
                <tr className="transition-colors" style={{ borderColor: '#f5edc8' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Claim Window</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Within 24 hours of booking and before the first departure</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#f5edc8' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Compared Price</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Same itinerary, passenger mix, cabin, fare conditions, and mandatory charges</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#f5edc8' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Proof Required</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Booking reference, comparison URL where available, screenshots/evidence, timestamp, and currency</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#f5edc8' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Mandatory Charges</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Base fare, applicable airline charges, known taxes, and known mandatory agency charges</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#f5edc8' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Excluded Prices</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Optional ancillary services, member-only fares, coupon-only savings, opaque fares, loyalty redemptions, and non-public fares</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#f5edc8' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Remedies</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Verified difference refund, agency credit, or eligible cancellation/reversal where operationally feasible</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#f5edc8' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Online vs. Assisted</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Must be compared on a like-for-like service basis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      icon: Shield,
      title: "Verification Requirement",
      content: [
        "Any approved Price Match claim will be resolved only after Noam Flyers Inc. independently verifies that the lower fare was publicly available, bookable, and materially identical to the confirmed Tickettomiddleeast.com itinerary.",
        "Dynamic price differences, stale cached fares, membership-only promotions, unavailable fares, and prices that exclude mandatory charges will not qualify."
      ]
    },
    {
      icon: CheckCircle,
      title: "Our Commitment",
      content: [
        "Tickettomiddleeast.com aims to make airfare pricing as transparent and understandable as possible.",
        "Our Price Match Promise is designed to give customers a clear process for bringing a potentially lower publicly available fare to our attention while recognizing the highly dynamic nature of airline pricing and inventory.",
        "We encourage customers to provide complete and accurate documentation so that claims can be reviewed efficiently and consistently.",
        "",
        "Tickettomiddleeast.com",
        "Operated by Noam Flyers Inc."
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6">
            <NextLink href="/" className="transition-colors" style={{ color: '#131164' }}>
              Home
            </NextLink>
            <span className="text-[#0c0a4a]/30">›</span>
            <span className="text-[#0c0a4a]/60">Price Match Promise</span>
          </nav>

          {/* Full width container */}
          <div className="w-full">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#0c0a4a' }}>
                Price Match Promise
              </h1>
              <div 
                className="w-12 h-1 mt-3 rounded-full"
                style={{
                  background: `linear-gradient(to right, #131164, #b7901b)`
                }}
              />
            </div>

            {/* Sections */}
            {sections.map((section, index) => {
              const Icon = section.icon;
              
              return (
                <div key={index} className="mt-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#f5edc8' }}
                    >
                      <Icon size={16} style={{ color: '#131164' }} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold" style={{ color: '#0c0a4a' }}>
                      {section.title}
                    </h2>
                  </div>
                  
                  {/* Mobile left (ml-0), Desktop aligned under icon (sm:ml-11) */}
                  <div className="text-sm sm:text-base leading-relaxed ml-0 sm:ml-11 text-justify">
                    {Array.isArray(section.content) ? (
                      <div className="space-y-3">
                        {section.content.map((paragraph, pIndex) => {
                          // 1. Empty spacer
                          if (paragraph === "") {
                            return <div key={pIndex} className="h-2" />;
                          }

                          // 2. Render bullet point
                          if (paragraph.startsWith("•")) {
                            return (
                              <div key={pIndex} className="flex items-start gap-2 text-justify">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{ backgroundColor: '#131164' }}
                                />
                                <span className="leading-relaxed" style={{ color: '#0c0a4a99' }}>
                                  {paragraph.substring(2)}
                                </span>
                              </div>
                            );
                          }

                          // 3. Normal paragraph
                          return (
                            <p key={pIndex} className="leading-relaxed" style={{ color: '#0c0a4a99' }}>
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
                      // If content is a React element (like the table), wrap it for scrolling
                      <div className="w-full overflow-x-auto overflow-y-hidden -mx-4 px-4 sm:mx-0 sm:px-0">
                        <div className="min-w-[480px] sm:min-w-full">
                          {section.content}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Call to Action */}
            <div 
              className="mt-10 p-6 rounded-lg text-white"
              style={{
                background: `linear-gradient(to right, #131164, #1e1a8a)`
              }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 !text-white">
                Need Help With Your Travel Plans?
              </h3>
              <p className="text-sm mb-4 text-white/80">
                Our travel experts are here to assist you with flight bookings, changes, and more.
              </p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105"
                style={{
                  backgroundColor: '#faf5e6',
                  color: '#131164'
                }}
              >
                <Phone size={16} />
                Call Us Now: {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}