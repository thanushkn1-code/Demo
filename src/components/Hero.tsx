import React from 'react';
import { GymConfig, AccentTheme } from '../types';
import { GYM_IMAGES } from '../data/gymData';
import { MessageCircle, Phone, ArrowUpRight, Flame, ShieldCheck } from 'lucide-react';

interface HeroProps {
  gym: GymConfig;
  theme: AccentTheme;
}

export const Hero: React.FC<HeroProps> = ({ gym, theme }) => {
  const tickerItems = [
    'WEIGHT TRAINING',
    'CARDIO ARENA',
    'CROSSFIT TURF',
    'HEAVY FREE WEIGHTS',
    'OLYMPIC BENCHES',
    'POWER RACKS',
    'DIET PLANS',
    'STRENGTH & CONDITIONING',
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] opacity-20 blur-[120px] rounded-full"
          style={{ backgroundColor: theme.hex }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(#1e2433_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#090A0D] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Athletic Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location & Trust Kicker */}
            <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-neutral-400">
              <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: theme.hex }} />
              <span>
                {gym.area}, {gym.city}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-300">EST. {2026 - gym.yearsExperience}</span>
              <span aria-hidden="true">·</span>
              <span style={{ color: theme.hex }}>PREMIER ATHLETIC CLUB</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[0.95] mb-5 font-athletic uppercase max-w-2xl">
              WELCOME TO <br />
              <span
                className="relative inline-block"
                style={{
                  color: theme.hex,
                  textShadow: `0 0 35px ${theme.hex}55`,
                }}
              >
                {gym.name}
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-medium text-neutral-300 max-w-xl mb-3 tracking-wide">
              {gym.tagline}
            </p>

            <p className="text-sm sm:text-base text-neutral-400 max-w-xl mb-8 leading-relaxed">
              Step into {gym.city}&apos;s elite {gym.areaSqFt} training facility with heavy Olympic barbells, extensive dumbbell vault, dedicated cardio zone, and proven strength protocols.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              {/* Chat on WhatsApp */}
              <a
                href={`https://wa.me/${gym.rawPhone}?text=Hi,%20I%20want%20to%20know%20about%20gym%20membership`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-extrabold uppercase tracking-wider text-white rounded-sm shadow-xl transition-all duration-200 hover:brightness-110 active:scale-95 group"
                style={{
                  backgroundColor: theme.hex,
                  boxShadow: `0 10px 25px -5px ${theme.hex}40`,
                }}
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Call Now */}
              <a
                href={`tel:${gym.rawPhone}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-sm transition-all duration-200 active:scale-95 group"
              >
                <Phone className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                <span>Call Now: {gym.phone}</span>
              </a>
            </div>

            {/* Trust Proof Metrics Strip */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-800/80 w-full max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-black font-athletic text-white tabular-nums">
                  {gym.areaSqFt.split(' ')[0]}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mt-0.5">
                  Floor Space
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-athletic text-white tabular-nums">
                  {gym.yearsExperience}+ YRS
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mt-0.5">
                  Experience
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-athletic text-white tabular-nums">
                  {gym.activeMembers}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mt-0.5">
                  Active Members
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Actual Real Gym Photo Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -inset-1 rounded-sm opacity-50 blur-sm -z-10"
                style={{ backgroundColor: theme.hex }}
              />

              <div className="relative bg-[#11141B] border border-neutral-800 rounded-sm overflow-hidden p-4 sm:p-5 shadow-2xl">
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.hex }} />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                      INSIDE {gym.name}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 bg-neutral-900 border border-neutral-700 text-neutral-300 rounded-xs">
                    OPEN TODAY · 05:30 AM – 10:30 PM
                  </span>
                </div>

                {/* Real Gym Photo Display with sleek overlay */}
                <div className="relative aspect-4/3 rounded-xs overflow-hidden border border-neutral-800 group">
                  <img
                    src={GYM_IMAGES.img1}
                    alt={`${gym.name} Free Weights Arena`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Corner Badge */}
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-white rounded-xs backdrop-blur-md bg-black/60 border border-neutral-700"
                  >
                    WEIGHT TRAINING FLOOR
                  </div>

                  {/* Caption on image */}
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-xs text-white">
                    <div className="font-athletic text-base uppercase font-bold tracking-tight">
                      Heavy Dumbbell Vault & Benches
                    </div>
                    <Flame className="w-4 h-4 shrink-0" style={{ color: theme.hex }} />
                  </div>
                </div>

                {/* Sub-strip with second photo thumbnail and feature callouts */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="relative aspect-16/9 rounded-xs overflow-hidden border border-neutral-800 group">
                    <img
                      src={GYM_IMAGES.img2}
                      alt={`${gym.name} Strength Deck`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white uppercase tracking-wider">
                      Machine Deck
                    </span>
                  </div>

                  <div className="relative aspect-16/9 rounded-xs overflow-hidden border border-neutral-800 group">
                    <img
                      src={GYM_IMAGES.img3}
                      alt={`${gym.name} Power Cages`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white uppercase tracking-wider">
                      Power Racks
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker Strip directly below hero */}
      <div className="mt-14 sm:mt-20 border-y border-neutral-800 bg-[#0C0E14] py-3.5 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-sm sm:text-base font-extrabold uppercase tracking-wider font-athletic text-neutral-200">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 shrink-0">
              <span className="hover:text-white transition-colors cursor-default">{item}</span>
              <span className="text-xs" style={{ color: theme.hex }}>
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
