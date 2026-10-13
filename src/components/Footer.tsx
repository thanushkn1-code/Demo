import React from 'react';
import { GymConfig, AccentTheme } from '../types';
import { Phone, Mail, Instagram, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  gym: GymConfig;
  theme: AccentTheme;
}

export const Footer: React.FC<FooterProps> = ({ gym, theme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080B] border-t border-neutral-900 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">
          {/* Col 1: Wordmark & Brand summary */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4 font-athletic">
              <span
                className="inline-block w-2.5 h-6 rounded-xs transform -skew-x-12"
                style={{ backgroundColor: theme.hex }}
              />
              <span>{gym.name}</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-sm">
              {gym.tagline} {gym.city}&apos;s premier strength, bodybuilding, CrossFit, and athletic performance center.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={gym.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white rounded-xs transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${gym.rawPhone}?text=Hi,%20I%20want%20to%20know%20about%20gym%20membership`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white rounded-xs transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${gym.rawPhone}`}
                className="p-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white rounded-xs transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${gym.email}`}
                className="p-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white rounded-xs transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Mirror (clean, no coaches/facilities) */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-200 mb-4">
              Quick Navigation
            </div>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home & Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Demo Gym
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Training Disciplines
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-white transition-colors">
                  Class Schedule
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-white transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gym Photo Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Direct Line */}
          <div className="lg:col-span-4">
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-200 mb-4">
              Operating Hours & Desk
            </div>
            <div className="text-xs text-neutral-300 space-y-2 mb-5">
              <div className="flex justify-between py-1 border-b border-neutral-800/80">
                <span className="text-neutral-400">Mon – Sat</span>
                <span className="font-bold text-white tabular-nums">{gym.openingHours.weekdays}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800/80">
                <span className="text-neutral-400">Sunday</span>
                <span className="font-bold text-white tabular-nums">{gym.openingHours.sunday}</span>
              </div>
            </div>

            <div className="text-xs text-neutral-400">
              <div className="font-semibold text-neutral-300 mb-1">Direct Help Desk:</div>
              <a
                href={`tel:${gym.rawPhone}`}
                className="text-sm font-bold text-white hover:underline tabular-nums"
              >
                {gym.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} {gym.name}, {gym.city}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
