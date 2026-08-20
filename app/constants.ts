// lib/constants.ts

// Company Information
export const COMPANY = {
  name: "Ticket to Middle East",
  domain: "tickettomiddleeast.com",
  email: "Reservations@tickettomiddleeast.com",
  phone: "+1-8666521753",
  phoneRaw: "18666521753",
  address: "Alexandria, VA 22310",
  year: new Date().getFullYear(),
};

// Social Media Links
export const SOCIAL = {
  facebook: "https://facebook.com/tickettomiddleeast",
  twitter: "https://twitter.com/tickettomiddleeast",
  instagram: "https://instagram.com/tickettomiddleeast",
  youtube: "https://youtube.com/tickettomiddleeast",
};

// Contact Information
export const CONTACT = {
  phone: COMPANY.phone,
  phoneRaw: COMPANY.phoneRaw,
  email: COMPANY.email,
  address: COMPANY.address,
  supportHours: "24/7 Customer Support",
};

// Brand Assets
export const BRAND = {
  name: COMPANY.name,
  tagline: "Travel & Adventures",
  logo: "/logo/ticketlogo.png",
  favicon: "/favicon.ico",
};

// Default Meta Information
export const META = {
  title: `${COMPANY.name} | Flights, Hotels & Holiday Packages to the Middle East`,
  description: `Book cheap flights, luxury hotels, and customized holiday packages to the Middle East. Best deals on Dubai, Doha, Abu Dhabi, Kuwait & more.`,
  keywords: [
    COMPANY.name,
    "travel agency",
    "holiday packages",
    "flights",
    "hotels",
    "Dubai package",
    "Doha package",
    "Abu Dhabi package",
    "Kuwait package",
    "Riyadh package",
    "Muscat package",
    "cheap flights",
    "luxury travel",
    "UAE travel",
    "Qatar travel",
  ],
};

export default {
  COMPANY,
  SOCIAL,
  CONTACT,
  BRAND,
  META,
};