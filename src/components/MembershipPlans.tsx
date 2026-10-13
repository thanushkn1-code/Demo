import React from 'react';
import { GymConfig, AccentTheme } from '../types';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { Check, MessageCircle, ShieldCheck, Zap } from 'lucide-react';

interface MembershipPlansProps {
  gym: GymConfig;
  theme: AccentTheme;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ gym, theme }) => {
  return (
    <section id="plans" className="py-20 sm:py-28 bg-[#0D0F14] relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
            <span className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: theme.hex }} />
            <span>TRANSPARENT PRICING</span>
            <span aria-hidden="true">·</span>
            <span>NO HIDDEN ADMISSION CHARGES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-athletic text-white uppercase tracking-tight mb-4">
            CHOOSE THE PLAN THAT SUITS YOU
          </h2>
          <p className="text-base text-neutral-300">
            Join {gym.shortName} today and unlock full access to world-class equipment, recovery suites, certified coaching, and custom dietary guidance.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-[#12151D] border rounded-sm p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                plan.popular
                  ? 'border-neutral-600 shadow-2xl scale-[1.02] lg:-translate-y-2'
                  : 'border-neutral-800/90 hover:border-neutral-700'
              }`}
            >
              {/* Savings Badge */}
              {plan.savingsBadge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-xs text-[11px] font-black uppercase tracking-wider text-white shadow-md"
                  style={{
                    backgroundColor: plan.popular ? theme.hex : '#272B38',
                  }}
                >
                  {plan.savingsBadge}
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="pb-6 border-b border-neutral-800 mb-6 text-center">
                  <h3 className="text-2xl font-black font-athletic text-white uppercase tracking-tight mb-1">
                    {plan.name}
                  </h3>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                    {plan.duration} Commitment
                  </span>

                  {/* Price */}
                  <div className="mt-5 flex items-baseline justify-center gap-2">
                    <span className="text-4xl sm:text-5xl font-black font-athletic text-white tabular-nums tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-sm font-semibold line-through text-neutral-500 tabular-nums">
                      {plan.originalPrice}
                    </span>
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mt-1">
                    {plan.periodText}
                  </div>
                </div>

                {/* Features list */}
                <div className="mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-4">
                    What&apos;s Included:
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: theme.hex }} />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Join via WhatsApp Button */}
              <div className="pt-4 border-t border-neutral-800">
                <a
                  href={`https://wa.me/${gym.rawPhone}?text=${encodeURIComponent(
                    plan.whatsAppMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2.5 py-3.5 px-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-sm transition-all duration-200 active:scale-95 shadow-md ${
                    plan.popular
                      ? 'text-white hover:brightness-110'
                      : 'text-neutral-100 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700'
                  }`}
                  style={plan.popular ? { backgroundColor: theme.hex } : {}}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Join via WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-neutral-500 mt-2 font-medium">
                  Instant activation · No paperwork required
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees & Reassurance Bar */}
        <div className="p-6 bg-[#090A0D] border border-neutral-800 rounded-sm grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <ShieldCheck className="w-6 h-6 shrink-0" style={{ color: theme.hex }} />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">
                Zero Admission Fee
              </div>
              <div className="text-[11px] text-neutral-400">
                No surprise maintenance or hidden registration costs
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Zap className="w-6 h-6 shrink-0" style={{ color: theme.hex }} />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">
                Free Fitness Assessment
              </div>
              <div className="text-[11px] text-neutral-400">
                Complimentary InBody body analysis with every membership
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <MessageCircle className="w-6 h-6 shrink-0" style={{ color: theme.hex }} />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">
                Instant WhatsApp Booking
              </div>
              <div className="text-[11px] text-neutral-400">
                Direct coordinator reply within 10 minutes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
