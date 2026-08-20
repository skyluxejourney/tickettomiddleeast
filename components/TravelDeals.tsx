"use client";

import { useState, useEffect } from "react";
import {
  Plane,
  MapPin,
  Calendar,
  Users,
  Star,
  Clock,
  Tag,
  Phone,
  Mail,
  X,
  ArrowRight,
  Hotel,
  Utensils,
  Wifi,
  Coffee,
  Dumbbell,
  PlaneTakeoff,
  PlaneLanding,
} from "lucide-react";
import { CONTACT, COMPANY } from "@/app/constants";

// Define the Deal type
interface Deal {
  id: number;
  title: string;
  destination: string;
  origin: string;
  price: string;
  originalPrice: string;
  image: string;
  departureDate: string;
  returnDate: string;
  duration: string;
  rating: number;
  reviews: number;
  tag: string;
  amenities: string[];
  airline: string;
  flightNumber: string;
}

export default function TravelDealsSection() {
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const deals: Deal[] = [
    {
      id: 1,
      title: "Paris Romantic Getaway",
      destination: "Paris, France",
      origin: "New York, USA",
      price: "$149",
      originalPrice: "$299",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&crop=center",
      departureDate: "May 15, 2026",
      returnDate: "May 18, 2026",
      duration: "3 Days / 2 Nights",
      rating: 4.8,
      reviews: 234,
      tag: "Save 50%",
      amenities: ["Hotel Included", "Breakfast", "City Tour", "Wine Tasting"],
      airline: "Air France",
      flightNumber: "AF 1234",
    },
    {
      id: 2,
      title: "Bali Tropical Escape",
      destination: "Bali, Indonesia",
      origin: "Los Angeles, USA",
      price: "$158",
      originalPrice: "$279",
      image: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&h=400&fit=crop&crop=center",
      departureDate: "June 20, 2026",
      returnDate: "June 25, 2026",
      duration: "5 Days / 4 Nights",
      rating: 4.9,
      reviews: 189,
      tag: "Save 43%",
      amenities: ["Villa Stay", "Spa Treatment", "Dinner Cruise", "Yoga Classes"],
      airline: "Singapore Airlines",
      flightNumber: "SQ 3456",
    },
    {
      id: 3,
      title: "Dubai Luxury Experience",
      destination: "Dubai, UAE",
      origin: "Chicago, USA",
      price: "$155",
      originalPrice: "$399",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop&crop=center",
      departureDate: "July 10, 2026",
      returnDate: "July 13, 2026",
      duration: "4 Days / 3 Nights",
      rating: 4.7,
      reviews: 312,
      tag: "Save 61%",
      amenities: ["5-Star Hotel", "Desert Safari", "Burj Khalifa", "Shopping Tour"],
      airline: "Emirates",
      flightNumber: "EK 5678",
    },
    {
      id: 4,
      title: "Tokyo Cultural Adventure",
      destination: "Tokyo, Japan",
      origin: "San Francisco, USA",
      price: "$157",
      originalPrice: "$389",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&crop=center",
      departureDate: "August 5, 2026",
      returnDate: "August 10, 2026",
      duration: "5 Days / 4 Nights",
      rating: 4.9,
      reviews: 267,
      tag: "Save 60%",
      amenities: ["Bullet Train Pass", "Temple Tours", "Sushi Class", "Robot Restaurant"],
      airline: "Japan Airlines",
      flightNumber: "JL 7890",
    },
    {
      id: 5,
      title: "Santorini Sunset Escape",
      destination: "Santorini, Greece",
      origin: "Boston, USA",
      price: "$152",
      originalPrice: "$329",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&fit=crop&crop=center",
      departureDate: "September 12, 2026",
      returnDate: "September 16, 2026",
      duration: "4 Days / 3 Nights",
      rating: 4.9,
      reviews: 198,
      tag: "Save 54%",
      amenities: ["Sea View Villa", "Sunset Cruise", "Wine Tasting", "Breakfast Included"],
      airline: "Aegean Airlines",
      flightNumber: "A3 5678",
    },
    {
      id: 6,
      title: "Rome Historical Tour",
      destination: "Rome, Italy",
      origin: "Miami, USA",
      price: "$145",
      originalPrice: "$279",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&crop=center",
      departureDate: "October 8, 2026",
      returnDate: "October 12, 2026",
      duration: "4 Days / 3 Nights",
      rating: 4.7,
      reviews: 156,
      tag: "Save 48%",
      amenities: ["City Tour", "Colosseum Visit", "Pasta Class", "Hotel Included"],
      airline: "ITA Airways",
      flightNumber: "AZ 9012",
    },
  ];

  const handleBookNow = (deal: Deal) => {
    setSelectedDeal(deal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDeal(null);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-20" style={{
      background: `linear-gradient(to bottom, #faf5e6, #ffffff)`
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-auto mx-auto">
          {/* Heading - Left Aligned */}
          <div 
            className={`mb-6 sm:mb-8 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div 
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 transition-all duration-300 hover:scale-105 hover:shadow-md" 
              style={{ backgroundColor: '#f5edc8' }}
            >
              <Tag size={16} style={{ color: '#131164' }} />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase" style={{ color: '#131164' }}>
                Limited Time Offers
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#0c0a4a' }}>
              Travel Deals Under{" "}
              <span 
                className="text-transparent bg-clip-text transition-all duration-300 hover:bg-gradient-to-r hover:from-[#b7901b] hover:to-[#131164]"
                style={{
                  background: `linear-gradient(to right, #131164, #b7901b)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                $158
              </span>
            </h2>
            <div 
              className="w-12 h-1 rounded-full mt-3 transition-all duration-500 hover:w-20"
              style={{
                background: `linear-gradient(to right, #131164, #b7901b)`
              }}
            />
          </div>

          {/* Content Description - Left Aligned */}
          <div 
            className={`mb-8 sm:mb-10 max-w-full transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#0c0a4aB3' }}>
              Discover amazing getaways without breaking the bank! Find travel
              deals under $158 to top destinations worldwide. Enjoy smooth
              booking, flexible options, and trusted service. Start your next
              adventure today with {COMPANY.name}!
            </p>
          </div>

          {/* Deals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {deals.map((deal, index) => (
              <div
                key={deal.id}
                className={`group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col border ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  borderColor: '#e2e8f0',
                  transitionDelay: `${300 + index * 80}ms`,
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t" style={{ background: `linear-gradient(to top, #0c0a4aB3, transparent)` }} />
                  
                  {/* Tag */}
                  <div className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1.5 transition-all duration-300 hover:scale-105" style={{
                    background: `linear-gradient(to right, #131164, #1e1a8a)`
                  }}>
                    {deal.tag}
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-3 right-3 backdrop-blur-sm px-3 py-1.5 transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#0c0a4aCC' }}>
                    <div className="text-white font-bold text-lg">{deal.price}</div>
                    <div className="text-white/60 text-xs line-through">
                      {deal.originalPrice}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 backdrop-blur-sm px-3 py-1 transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#0c0a4a99' }}>
                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-xs font-semibold">{deal.rating}</span>
                    <span className="text-white/60 text-xs">({deal.reviews})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-base font-bold mb-2 line-clamp-1 transition-colors duration-300 group-hover:text-[#b7901b]" style={{ color: '#0c0a4a' }}>
                    {deal.title}
                  </h3>

                  {/* Arrival to Destination UI */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <PlaneTakeoff size={14} style={{ color: '#13116499' }} />
                        <span className="text-xs font-medium truncate" style={{ color: '#0c0a4aB3' }}>
                          {deal.origin}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <PlaneLanding size={14} style={{ color: '#131164' }} />
                        <span className="text-xs font-semibold truncate" style={{ color: '#0c0a4a' }}>
                          {deal.destination}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs" style={{ color: '#0c0a4a66' }}>
                      <span className="w-8 h-px" style={{ backgroundColor: '#1311644D' }} />
                      <Plane size={12} className="flex-shrink-0" style={{ color: '#131164' }} />
                    </div>
                  </div>

                  {/* Duration & Airline */}
                  <div className="flex items-center gap-3 text-xs mb-3" style={{ color: '#0c0a4a99' }}>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{deal.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{deal.departureDate}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {deal.amenities.slice(0, 2).map((item, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-0.5 transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: '#faf5e6',
                          color: '#0c0a4a99'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                    {deal.amenities.length > 2 && (
                      <span className="text-xs font-medium transition-all duration-300 hover:text-[#b7901b]" style={{ color: '#131164' }}>
                        +{deal.amenities.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Book Now Button */}
                  <button
                    onClick={() => handleBookNow(deal)}
                    className="w-full text-white font-semibold py-2 transition-all duration-300 flex items-center justify-center gap-2 text-sm mt-auto shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 group/btn"
                    style={{
                      background: `linear-gradient(to right, #131164, #1e1a8a)`,
                      boxShadow: `0 10px 15px -3px #13116433`
                    }}
                  >
                    <span>Book Now</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && selectedDeal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Overlay - Neutral dark with blur */}
          <div
            className="absolute inset-0 backdrop-blur-sm animate-in fade-in duration-300"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={closeModal}
          />

          {/* Modal */}
          <div className="relative bg-white max-w-md w-full shadow-2xl animate-in slide-in-from-bottom-4 duration-300 border" style={{ borderColor: '#e2e8f0' }}>
            {/* Close Button - White */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 transition-all duration-300 hover:scale-110 hover:rotate-90 z-10"
              style={{ color: '#ffffff', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
            >
              <X size={24} />
            </button>

            {/* Header - Blue Gradient (restored) */}
            <div className="rounded-t-lg p-6 text-white" style={{ background: `linear-gradient(to right, #131164, #1e1a8a)` }}>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2">
                  <Plane size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Book Your Trip
                  </h3>
                  <p className="text-white/80 text-sm">
                    {selectedDeal.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Deal Summary */}
              <div className="p-4 mb-6 transition-all duration-300 hover:shadow-md" style={{ backgroundColor: '#faf5e6' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm" style={{ color: '#0c0a4a99' }}>Destination</span>
                  <span className="text-sm font-semibold" style={{ color: '#0c0a4a' }}>
                    {selectedDeal.destination}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm" style={{ color: '#0c0a4a99' }}>Price</span>
                  <span className="text-lg font-bold animate-pulse" style={{ color: '#131164' }}>
                    {selectedDeal.price}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: '#0c0a4a99' }}>Duration</span>
                  <span className="text-sm" style={{ color: '#0c0a4a' }}>
                    {selectedDeal.duration}
                  </span>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold" style={{ color: '#0c0a4a' }}>
                  Contact Our Travel Experts
                </h4>
                
                <div className="space-y-3">
                  {/* Phone */}
                  <div className="flex items-center gap-4 p-3 transition-all duration-300 hover:shadow-md hover:scale-[1.02]" style={{ backgroundColor: '#faf5e6' }}>
                    <div className="p-2 text-white transition-all duration-300 hover:scale-110" style={{
                      background: `linear-gradient(to right, #131164, #1e1a8a)`
                    }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: '#0c0a4a99' }}>Call Us Now</p>
                      <a
                        href={`tel:${CONTACT.phoneRaw}`}
                        className="text-sm font-semibold transition-colors duration-300 hover:text-[#b7901b]"
                        style={{ color: '#0c0a4a' }}
                      >
                        {CONTACT.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 p-3 transition-all duration-300 hover:shadow-md hover:scale-[1.02]" style={{ backgroundColor: '#faf5e6' }}>
                    <div className="p-2 text-white transition-all duration-300 hover:scale-110" style={{
                      background: `linear-gradient(to right, #131164, #1e1a8a)`
                    }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: '#0c0a4a99' }}>Email Us</p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-sm font-semibold transition-colors duration-300 hover:text-[#b7901b]"
                        style={{ color: '#0c0a4a' }}
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Special Request Note */}
                <div className="mt-4 p-3 border transition-all duration-300 hover:scale-[1.02]" style={{
                  backgroundColor: '#f5edc8',
                  borderColor: '#b7901b33'
                }}>
                  <p className="text-xs text-center" style={{ color: '#0c0a4aB3' }}>
                    📞 Call now for instant confirmation & best rates!
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="flex-1 text-white font-semibold py-3 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105 hover:shadow-xl active:scale-95"
                    style={{
                      background: `linear-gradient(to right, #131164, #1e1a8a)`,
                      boxShadow: `0 10px 15px -3px #13116433`,
                      color: '#ffffff'
                    }}
                  >
                    <Phone size={16} className="text-white animate-pulse" />
                    <span className="text-white">Call Now</span>
                  </a>
                  <button
                    onClick={closeModal}
                    className="flex-1 font-semibold py-3 transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: '#faf5e6',
                      color: '#0c0a4a'
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}