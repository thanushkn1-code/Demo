import React from 'react';
import { GymConfig, AccentTheme } from '../types';
import { GYM_IMAGES } from '../data/gymData';
import { Dumbbell, ShieldCheck, Flame, Zap } from 'lucide-react';

interface AboutProps {
  gym: GymConfig;
  theme: AccentTheme;
}

export const About: React.FC<AboutProps> = ({ gym, theme }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#090A0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
              <span className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: theme.hex }} />
              <span>ABOUT {gym.name}</span>
              <span aria-hidden="true">·</span>
              <span>{gym.yearsExperience} YEARS OF STRENGTH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-athletic text-white tracking-tight uppercase leading-tight mb-4">
              WE ARE PUSHING THE LIMIT OF YOUR CORE STRENGTH
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Founded to provide a serious, high-intensity training environment in {gym.city}, {gym.name} has empowered over {gym.activeMembers} members with heavy-duty free weights, power cages, dedicated cardio zones, and targeted hypertrophy equipment.
            </p>
          </div>

          <div className="hidden lg:block shrink-0">
            <div className="p-4 bg-neutral-900/80 border border-neutral-800 rounded-sm text-right">
              <div className="text-3xl font-black font-athletic text-white">{gym.areaSqFt}</div>
              <div className="text-xs uppercase font-bold text-neutral-400">Total Training Space</div>
            </div>
          </div>
        </div>

        {/* Feature Grid with alternating photo showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-10">
          {/* Left Block: 2 Bento Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
            {/* Card 1: Vibrant Accent Block */}
            <div
              className="p-7 sm:p-8 rounded-sm text-white flex flex-col justify-between flex-1 shadow-xl relative overflow-hidden transition-transform duration-200 hover:-translate-y-1"
              style={{ backgroundColor: theme.hex }}
            >
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-xs font-black uppercase tracking-widest bg-black/20 px-2.5 py-1 rounded-xs">
                  SCALE & EQUIPMENT
                </span>
                <Dumbbell className="w-7 h-7 text-white/90" />
              </div>
              <div className="relative z-10 mt-6">
                <div className="text-3xl sm:text-4xl font-black font-athletic uppercase tracking-tight leading-none mb-2">
                  {gym.areaSqFt}
                </div>
                <p className="text-sm font-medium text-white/90 leading-snug">
                  Spacious open-span layout with zero waiting for equipment, high ceilings, and zoned sound.
                </p>
              </div>
            </div>

            {/* Card 2: State-of-the-Art Gear */}
            <div className="p-7 sm:p-8 rounded-sm bg-[#12151D] border border-neutral-800 flex flex-col justify-between flex-1 transition-transform duration-200 hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  MACHINERY & IRON
                </span>
                <ShieldCheck className="w-6 h-6" style={{ color: theme.hex }} />
              </div>
              <div className="mt-6">
                <div className="text-2xl sm:text-3xl font-black font-athletic uppercase text-white tracking-tight mb-2">
                  STATE OF THE ART GEAR
                </div>
                <p className="text-sm text-neutral-400 leading-snug">
                  Olympic barbells, power racks, calibrated steel plates, and biomechanically aligned resistance machines.
                </p>
              </div>
            </div>
          </div>

          {/* Center/Right Block: Real Gym Photo Showcase */}
          <div className="lg:col-span-8 bg-[#12151D] border border-neutral-800 rounded-sm overflow-hidden flex flex-col justify-between group">
            <div className="relative h-72 sm:h-96 w-full overflow-hidden">
              <img
                src={GYM_IMAGES.img5}
                alt={`${gym.name} Gym Floor`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12151D] via-black/30 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-neutral-700 rounded-xs text-xs font-bold uppercase tracking-wider text-white">
                Main Training Arena
              </div>
            </div>

            <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#12151D]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-5 h-5" style={{ color: theme.hex }} />
                  <h3 className="text-xl font-black font-athletic uppercase text-white tracking-tight">
                    PROGRESSIVE OVERLOAD
                  </h3>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Engineered for real progression. Multiple squat cages, flat & incline benches, and comprehensive free weights.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5" style={{ color: theme.hex }} />
                  <h3 className="text-xl font-black font-athletic uppercase text-white tracking-tight">
                    HIGH-OCTANE ENVIRONMENT
                  </h3>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  A motivating, distraction-free environment with pure athletic focus, pristine cleanliness, and constant ventilation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
