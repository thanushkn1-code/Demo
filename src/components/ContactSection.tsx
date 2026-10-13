import React from 'react';
import { GymConfig, AccentTheme } from '../types';
import { Phone, Mail, Instagram, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  gym: GymConfig;
  theme: AccentTheme;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ gym, theme }) => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0D0F14] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
            <span className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: theme.hex }} />
            <span>GET IN TOUCH DIRECTLY</span>
            <span aria-hidden="true">·</span>
            <span>NO FORMS, NO WAITING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-athletic text-white uppercase tracking-tight mb-4">
            CONNECT WITH {gym.name}
          </h2>
          <p className="text-base text-neutral-300">
            Reach out directly via phone, WhatsApp, email, or social media. Our front desk coordinators respond immediately.
          </p>
        </div>

        {/* 4 Interactive Direct Contact Channels (NO forms, NO input fields) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* 1. Tap-to-Call Phone */}
          <a
            href={`tel:${gym.rawPhone}`}
            className="bg-[#12151D] border border-neutral-800 hover:border-neutral-600 rounded-sm p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div
                  className="p-3 rounded-xs bg-neutral-900 border border-neutral-800"
                  style={{ color: theme.hex }}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
                Direct Phone Line
              </div>
              <div className="text-lg sm:text-xl font-black font-athletic text-white uppercase tracking-tight">
                {gym.phone}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors">
              Tap to Call Now →
            </div>
          </a>

          {/* 2. Chat on WhatsApp */}
          <a
            href={`https://wa.me/${gym.rawPhone}?text=Hi,%20I%20want%20to%20know%20about%20gym%20membership%20at%20Demo%20Gym`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#12151D] border border-neutral-800 hover:border-neutral-600 rounded-sm p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xs bg-neutral-900 border border-neutral-800 text-emerald-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
                WhatsApp Coordinator
              </div>
              <div className="text-lg sm:text-xl font-black font-athletic text-white uppercase tracking-tight">
                {gym.phone}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs font-bold uppercase tracking-wider text-emerald-400 group-hover:brightness-125 transition-colors">
              Instant WhatsApp Chat →
            </div>
          </a>

          {/* 3. Tap-to-Email */}
          <a
            href={`mailto:${gym.email}`}
            className="bg-[#12151D] border border-neutral-800 hover:border-neutral-600 rounded-sm p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div
                  className="p-3 rounded-xs bg-neutral-900 border border-neutral-800"
                  style={{ color: theme.hex }}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
                Official Email
              </div>
              <div className="text-base sm:text-lg font-bold text-white tracking-tight break-all">
                {gym.email}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors">
              Tap to Send Email →
            </div>
          </a>

          {/* 4. Instagram Official */}
          <a
            href={gym.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#12151D] border border-neutral-800 hover:border-neutral-600 rounded-sm p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xs bg-neutral-900 border border-neutral-800 text-pink-400">
                  <Instagram className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
                Instagram Community
              </div>
              <div className="text-lg sm:text-xl font-black font-athletic text-white uppercase tracking-tight">
                {gym.instagramHandle}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs font-bold uppercase tracking-wider text-pink-400 group-hover:brightness-125 transition-colors">
              Follow on Instagram →
            </div>
          </a>
        </div>

        {/* Address Banner Card */}
        <div className="p-6 sm:p-8 bg-[#12151D] border border-neutral-800 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div
              className="p-3 rounded-xs bg-neutral-900 border border-neutral-800 shrink-0 mt-1"
              style={{ color: theme.hex }}
            >
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
                Facility Location
              </div>
              <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                {gym.address}
              </p>
            </div>
          </div>

          <a
            href={gym.mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white rounded-xs transition-opacity hover:opacity-90 whitespace-nowrap shrink-0 shadow-md"
            style={{ backgroundColor: theme.hex }}
          >
            <span>Navigate in Maps</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
