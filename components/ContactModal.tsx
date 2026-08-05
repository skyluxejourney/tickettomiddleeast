"use client";

import { Phone, Mail, Ticket, PhoneCall, X as XIcon } from "lucide-react";
import { COMPANY, CONTACT } from "@/app/constants";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: string;
}

export default function ContactModal({ isOpen, onClose, selectedItem = "" }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl max-w-md w-full shadow-2xl animate-in slide-in-from-bottom-4 duration-300 border" style={{ borderColor: '#e2e8f0' }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
        >
          <XIcon size={24} />
        </button>

        {/* Header */}
        <div 
          className="rounded-t-2xl p-6 text-white"
          style={{
            background: `linear-gradient(to right, #131164, #1e1a8a)`
          }}
        >
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl">
              <Ticket size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold !text-white">
                Contact Us
              </h3>
              <p className="text-white/80 text-sm">
                Book Your Ticket - Get in touch with us
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <p className="text-sm leading-relaxed" style={{ color: '#0c0a4aB3' }}>
              Our team is ready to assist you with any questions about{" "}
              <span className="font-semibold" style={{ color: '#131164' }}>{selectedItem}</span>.
              Call us now for immediate support!
            </p>
          </div>

          {/* Contact Options */}
          <div className="space-y-3">
            {/* Phone */}
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group border"
              style={{
                backgroundColor: '#faf5e6',
                borderColor: '#e2e8f0',
              }}
            >
              <div 
                className="p-3 rounded-xl text-white shadow-lg transition-shadow"
                style={{
                  background: `linear-gradient(to right, #131164, #1e1a8a)`,
                  boxShadow: `0 10px 15px -3px #13116433`
                }}
              >
                <Phone size={20} />
              </div>
              <div className="flex-1">
                <p className="text-xs" style={{ color: '#0c0a4a99' }}>Call Us Now</p>
                <p className="text-sm font-semibold transition-colors" style={{ color: '#0c0a4a' }}>
                  {CONTACT.phone}
                </p>
              </div>
              <PhoneCall size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#b7901b' }} />
            </a>

            {/* Email */}
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group border"
              style={{
                backgroundColor: '#faf5e6',
                borderColor: '#e2e8f0',
              }}
            >
              <div 
                className="p-3 rounded-xl text-white shadow-lg transition-shadow"
                style={{
                  background: `linear-gradient(to right, #131164, #1e1a8a)`,
                  boxShadow: `0 10px 15px -3px #13116433`
                }}
              >
                <Mail size={20} />
              </div>
              <div className="flex-1">
                <p className="text-xs" style={{ color: '#0c0a4a99' }}>Email Us</p>
                <p className="text-sm font-semibold transition-colors" style={{ color: '#0c0a4a' }}>
                  {COMPANY.email}
                </p>
              </div>
            </a>
          </div>

          {/* Special Note */}
          <div 
            className="mt-6 p-4 rounded-xl border"
            style={{
              backgroundColor: '#f5edc8',
              borderColor: '#b7901b33'
            }}
          >
            <p className="text-xs text-center" style={{ color: '#0c0a4aB3' }}>
              {CONTACT.supportHours} for all your travel needs
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full mt-4 font-semibold py-3 rounded-xl transition-colors border"
            style={{
              backgroundColor: '#faf5e6',
              color: '#0c0a4a',
              borderColor: '#e2e8f0'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}