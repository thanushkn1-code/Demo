import React from 'react';
import { GymConfig, AccentTheme } from '../types';
import { Clock, MapPin, Navigation, Phone, ExternalLink } from 'lucide-react';

interface LocationTimingsProps {
  gym: GymConfig;
  theme: AccentTheme;
}

export const LocationTimings: React.FC<LocationTimingsProps> = ({ gym, theme }) => {
  return (
    <section id="timings" className="py-20 sm:py-28 bg-[#090A0D] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
            <span className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: theme.hex }} />
            <span>FACILITY ACCESS & COORDINATES</span>
            <span aria-hidden="true">·</span>
            <span>FIND US IN {gym.city.toUpperCase()}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-athletic text-white uppercase tracking-tight">
            TIMINGS & LOCATION
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Hours & Address Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#12151D] border border-neutral-800 rounded-sm p-7 sm:p-8 shadow-xl">
            <div>
              {/* Live Status Header */}
              <div className="flex items-center justify-between pb-5 border-b border-neutral-800 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.hex }} />
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    OPEN TODAY
                  </span>
                </div>
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                  NO APPOINTMENT NEEDED
                </span>
              </div>

              {/* Operating Hours Block */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                  <Clock className="w-4 h-4" style={{ color: theme.hex }} />
                  <span>Gym Operational Hours</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3.5 bg-neutral-900/90 border border-neutral-800/80 rounded-xs">
                    <div>
                      <div className="text-sm font-black font-athletic uppercase text-white">
                        Monday – Saturday
                      </div>
                      <div className="text-[11px] text-neutral-400">Continuous floor operations</div>
                    </div>
                    <div className="text-sm font-black font-athletic text-white tabular-nums">
                      {gym.openingHours.weekdays}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3.5 bg-neutral-900/90 border border-neutral-800/80 rounded-xs">
                    <div>
                      <div className="text-sm font-black font-athletic uppercase text-white">
                        Sunday
                      </div>
                      <div className="text-[11px] text-neutral-400">Open morning to evening</div>
                    </div>
                    <div className="text-sm font-black font-athletic text-white tabular-nums">
                      {gym.openingHours.sunday}
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Block */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  <MapPin className="w-4 h-4" style={{ color: theme.hex }} />
                  <span>Physical Address</span>
                </div>
                <p className="text-sm text-neutral-200 font-medium leading-relaxed bg-neutral-900/70 p-4 border border-neutral-800/80 rounded-xs">
                  {gym.address}
                </p>
                <div className="mt-2 text-xs text-neutral-400 flex items-center gap-1.5">
                  <span>Valet parking available for members</span>
                  <span aria-hidden="true">·</span>
                  <span>Elevator access to 4th Floor</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
              <a
                href={gym.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white rounded-xs transition-opacity hover:opacity-90 shadow-md"
                style={{ backgroundColor: theme.hex }}
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${gym.rawPhone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-neutral-400" />
                <span>Call Front Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7 bg-[#12151D] border border-neutral-800 rounded-sm overflow-hidden flex flex-col shadow-xl min-h-[400px]">
            {/* Map Bar */}
            <div className="px-5 py-3.5 bg-neutral-900/90 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neutral-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-200">
                  Interactive Google Map
                </span>
              </div>
              <a
                href={gym.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-neutral-400 hover:text-white flex items-center gap-1 transition-colors uppercase tracking-wider"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Responsive Map iFrame */}
            <div className="relative flex-1 w-full min-h-[380px] bg-[#0c0e14]">
              <iframe
                title={`${gym.name} Location Map`}
                src={gym.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.85)',
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
