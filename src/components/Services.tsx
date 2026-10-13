import React, { useState } from 'react';
import { GymConfig, AccentTheme } from '../types';
import { SERVICES_DATA } from '../data/gymData';
import { Dumbbell, HeartPulse, Flame, Target, Activity, Zap, MessageCircle, Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  gym: GymConfig;
  theme: AccentTheme;
}

export const Services: React.FC<ServicesProps> = ({ gym, theme }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'strength' | 'cardio' | 'lifestyle'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Target':
        return <Target className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      default:
        return <Dumbbell className="w-5 h-5" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'strength') return s.slug === 'weight-training' || s.slug === 'crossfit';
    if (activeFilter === 'cardio') return s.slug === 'cardio' || s.slug === 'zumba-yoga';
    if (activeFilter === 'lifestyle') return s.slug === 'personal-training' || s.slug === 'diet-plans';
    return true;
  });

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0D0F14] relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
              <span className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: theme.hex }} />
              <span>CORE DISCIPLINES</span>
              <span aria-hidden="true">·</span>
              <span>COMPREHENSIVE TRAINING SUITE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-athletic text-white uppercase tracking-tight leading-tight">
              WORLD-CLASS FITNESS PROGRAMS
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xs self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Programs
            </button>
            <button
              onClick={() => setActiveFilter('strength')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'strength'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Strength & CrossFit
            </button>
            <button
              onClick={() => setActiveFilter('cardio')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'cardio'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Cardio & Dance
            </button>
            <button
              onClick={() => setActiveFilter('lifestyle')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'lifestyle'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Coaching & Diet
            </button>
          </div>
        </div>

        {/* Services Cards Grid featuring real pictures */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#12151D] border border-neutral-800/90 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-neutral-700 hover:shadow-xl hover:-translate-y-1 group"
            >
              {/* Card Image Header with real gym photo */}
              <div className="relative h-44 w-full overflow-hidden border-b border-neutral-800">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151D] via-black/40 to-transparent" />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <div
                    className="p-2 rounded-xs bg-black/70 backdrop-blur-xs border border-neutral-700"
                    style={{ color: theme.hex }}
                  >
                    {getIcon(service.icon)}
                  </div>
                </div>

                <div className="absolute top-3 right-3 text-right">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-black/70 backdrop-blur-xs border border-neutral-700 text-neutral-300 rounded-xs">
                    0{index + 1} · {service.intensity}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-black font-athletic text-white uppercase tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Equipment */}
                  <div className="mb-4 p-2.5 bg-neutral-900/80 rounded-xs border border-neutral-800/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-0.5">
                      Equipment:
                    </span>
                    <span className="text-xs text-neutral-300 font-medium">
                      {service.equipment}
                    </span>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-1.5 mb-5">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 shrink-0" style={{ color: theme.hex }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct WhatsApp Action */}
                <div className="pt-4 border-t border-neutral-800/70 mt-2">
                  <a
                    href={`https://wa.me/${gym.rawPhone}?text=Hi,%20I%20am%20interested%20in%20learning%20more%20about%20${encodeURIComponent(
                      service.title
                    )}%20at%20${encodeURIComponent(gym.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-xs transition-colors group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5 text-neutral-400 group-hover/btn:text-white" />
                      <span>Enquire on WhatsApp</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
