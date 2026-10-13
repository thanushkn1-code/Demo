/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { DEMO_GYM_CONFIG, ACCENT_THEMES } from './data/gymData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Timetable } from './components/Timetable';
import { MembershipPlans } from './components/MembershipPlans';
import { Gallery } from './components/Gallery';
import { LocationTimings } from './components/LocationTimings';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { ThemeCustomizer } from './components/ThemeCustomizer';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(ACCENT_THEMES[0]); // Default: Flame Orange

  const gym = DEMO_GYM_CONFIG;

  return (
    <div className="min-h-screen bg-[#090A0D] text-neutral-100 flex flex-col font-sans selection:bg-[#FF4D00] selection:text-white">
      {/* 1. Sticky Navbar */}
      <Navbar gym={gym} theme={currentTheme} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero with Demo Gym, tagline, WhatsApp & Call buttons */}
        <Hero gym={gym} theme={currentTheme} />

        {/* Section 2: About (Story and photo showcase, no facilities section) */}
        <About gym={gym} theme={currentTheme} />

        {/* Section 3: Services (6 programs with alternate real gym photos) */}
        <Services gym={gym} theme={currentTheme} />

        {/* Section 4: Class Time Table */}
        <Timetable gym={gym} theme={currentTheme} />

        {/* Section 5: Membership Plans (Monthly / Quarterly / Yearly with WhatsApp join button) */}
        <MembershipPlans gym={gym} theme={currentTheme} />

        {/* Section 6: Gallery (All 5 real gym photos with category filter and modal preview) */}
        <Gallery gym={gym} theme={currentTheme} />

        {/* Section 7: Timings and Location (Opening hours, address, embedded Google Map) */}
        <LocationTimings gym={gym} theme={currentTheme} />

        {/* Section 8: Contact (+91 9XXXXXXXXX, email, Instagram - NO FORMS) */}
        <ContactSection gym={gym} theme={currentTheme} />
      </main>

      {/* Footer */}
      <Footer gym={gym} theme={currentTheme} />

      {/* Floating WhatsApp button at bottom-right */}
      <FloatingWhatsApp gym={gym} />

      {/* Non-intrusive accent customizer */}
      <ThemeCustomizer
        currentTheme={currentTheme}
        onSelectTheme={setCurrentTheme}
      />
    </div>
  );
}
