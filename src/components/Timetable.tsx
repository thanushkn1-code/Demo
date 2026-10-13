import React, { useState } from 'react';
import { GymConfig, AccentTheme } from '../types';
import { SCHEDULE_DAYS } from '../data/gymData';
import { Calendar, Clock, ArrowRight, MessageCircle } from 'lucide-react';

interface TimetableProps {
  gym: GymConfig;
  theme: AccentTheme;
}

export const Timetable: React.FC<TimetableProps> = ({ gym, theme }) => {
  const days = Object.keys(SCHEDULE_DAYS);
  const [selectedDay, setSelectedDay] = useState<string>('Monday');

  const currentSlots = SCHEDULE_DAYS[selectedDay] || [];

  return (
    <section id="schedule" className="py-20 bg-[#090A0D] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
              <span className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: theme.hex }} />
              <span>WEEKLY ROSTER</span>
              <span aria-hidden="true">·</span>
              <span>GROUP & SPECIALTY SESSIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-athletic text-white uppercase tracking-tight">
              CLASS TIME TABLE
            </h2>
          </div>

          <a
            href={`https://wa.me/${gym.rawPhone}?text=Hi,%20I%20want%20to%20reserve%20a%20spot%20in%20a%20group%20class%20at%20${encodeURIComponent(gym.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white px-3.5 py-2 bg-neutral-900 border border-neutral-800 rounded-xs transition-colors self-start sm:self-auto"
          >
            <MessageCircle className="w-3.5 h-3.5" style={{ color: theme.hex }} />
            <span>Reserve Class Slot on WhatsApp</span>
          </a>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xs transition-all whitespace-nowrap shrink-0 border ${
                selectedDay === day
                  ? 'text-white border-transparent shadow-lg'
                  : 'text-neutral-400 bg-neutral-900/80 border-neutral-800 hover:text-white hover:bg-neutral-800'
              }`}
              style={
                selectedDay === day
                  ? { backgroundColor: theme.hex, borderColor: theme.hex }
                  : {}
              }
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Table (clean, no coach column) */}
        <div className="bg-[#12151D] border border-neutral-800/90 rounded-sm overflow-hidden shadow-xl">
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-neutral-900/90 border-b border-neutral-800 text-xs font-bold uppercase tracking-wider text-neutral-400">
            <div className="col-span-4 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Time Slot</span>
            </div>
            <div className="col-span-5 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Session & Focus</span>
            </div>
            <div className="col-span-3 text-right">
              <span>Intensity Level</span>
            </div>
          </div>

          <div className="divide-y divide-neutral-800/80">
            {currentSlots.map((slot, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-6 py-4 items-center hover:bg-neutral-800/30 transition-colors"
              >
                <div className="md:col-span-4">
                  <span className="text-xs sm:text-sm font-mono font-bold text-white tabular-nums">
                    {slot.time}
                  </span>
                </div>

                <div className="md:col-span-5">
                  <div className="text-base font-black font-athletic uppercase text-white tracking-tight">
                    {slot.className}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                    Category: {slot.category}
                  </span>
                </div>

                <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-xs">
                    {slot.level}
                  </span>
                  <a
                    href={`https://wa.me/${gym.rawPhone}?text=Hi,%20I%20want%20to%20attend%20${encodeURIComponent(
                      slot.className
                    )}%20on%20${selectedDay}%20at%20${encodeURIComponent(slot.time)}%20at%20${encodeURIComponent(gym.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xs transition-colors"
                    title="Enquire on WhatsApp"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
