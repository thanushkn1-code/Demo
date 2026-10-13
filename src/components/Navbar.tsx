import React, { useState, useEffect } from 'react';
import { GymConfig, AccentTheme } from '../types';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  gym: GymConfig;
  theme: AccentTheme;
}

export const Navbar: React.FC<NavbarProps> = ({ gym, theme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Plans', href: '#plans' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location & Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090A0D]/95 backdrop-blur-md border-b border-neutral-800/80 shadow-xl shadow-black/40 py-3'
          : 'bg-transparent border-b border-white/5 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 font-athletic"
          >
            <span
              className="inline-block w-2.5 h-6 rounded-xs transform -skew-x-12 transition-transform duration-200 group-hover:scale-110"
              style={{ backgroundColor: theme.hex }}
            />
            <span>{gym.name}</span>
          </a>

          {/* Navigation Links (No coaches/facilities) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold uppercase tracking-wider text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 whitespace-nowrap shrink-0 group"
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
                  style={{ backgroundColor: theme.hex }}
                />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${gym.rawPhone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 rounded-sm transition-colors whitespace-nowrap shrink-0"
              title={`Call ${gym.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-neutral-400" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/${gym.rawPhone}?text=Hi,%20I%20want%20to%20know%20about%20gym%20membership`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white rounded-sm shadow-md transition-all duration-200 hover:brightness-110 whitespace-nowrap shrink-0 active:scale-95"
              style={{ backgroundColor: theme.hex }}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${gym.rawPhone}`}
              className="p-2 text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-sm"
              aria-label="Call gym now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-200 hover:text-white bg-neutral-900 border border-neutral-800 rounded-sm focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C0E12] border-b border-neutral-800 px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-bold uppercase tracking-wider text-neutral-200 hover:text-white hover:bg-neutral-800/60 rounded-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-neutral-800 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${gym.rawPhone}?text=Hi,%20I%20want%20to%20know%20about%20gym%20membership`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-extrabold uppercase tracking-wider text-white rounded-sm shadow-md"
              style={{ backgroundColor: theme.hex }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${gym.rawPhone}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold uppercase tracking-wider text-neutral-200 bg-neutral-900 border border-neutral-700 rounded-sm hover:bg-neutral-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-neutral-400" />
              <span>Call Now: {gym.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
