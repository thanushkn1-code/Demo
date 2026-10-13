import React, { useState } from 'react';
import { AccentTheme } from '../types';
import { ACCENT_THEMES } from '../data/gymData';
import { Palette, X, Sparkles } from 'lucide-react';

interface ThemeCustomizerProps {
  currentTheme: AccentTheme;
  onSelectTheme: (theme: AccentTheme) => void;
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  currentTheme,
  onSelectTheme,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Trigger Button (Bottom Left) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-40 flex items-center gap-2 px-3.5 py-2.5 bg-[#12151D]/90 hover:bg-[#181C26] backdrop-blur-md border border-neutral-700/80 rounded-full text-white shadow-xl transition-all duration-200 active:scale-95 text-xs font-bold uppercase tracking-wider"
        aria-label="Customize accent color"
      >
        <span
          className="w-3 h-3 rounded-full shrink-0 shadow-sm"
          style={{ backgroundColor: currentTheme.hex }}
        />
        <span className="hidden sm:inline">Accent Color</span>
        <Palette className="w-3.5 h-3.5 text-neutral-400" />
      </button>

      {/* Popover */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="w-full max-w-sm bg-[#12151D] border border-neutral-700 rounded-sm p-6 shadow-2xl animate-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" style={{ color: currentTheme.hex }} />
                <h3 className="text-base font-black font-athletic uppercase text-white tracking-tight">
                  Choose Accent Color
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-xs hover:bg-neutral-800 transition-colors"
                aria-label="Close customizer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Accent Color Chooser */}
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                Palette Options
              </div>
              <div className="grid grid-cols-5 gap-2">
                {ACCENT_THEMES.map((th) => (
                  <button
                    key={th.id}
                    onClick={() => onSelectTheme(th)}
                    className={`flex flex-col items-center gap-1.5 p-2 rounded-xs border transition-all ${
                      currentTheme.id === th.id
                        ? 'border-white bg-neutral-800/80 shadow-md scale-105'
                        : 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700'
                    }`}
                  >
                    <span
                      className="w-5 h-5 rounded-full shadow-sm"
                      style={{ backgroundColor: th.hex }}
                    />
                    <span className="text-[10px] font-semibold text-neutral-300 leading-tight text-center">
                      {th.label.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 text-xs font-extrabold uppercase tracking-wider text-white rounded-xs transition-opacity hover:opacity-90 shadow-md"
              style={{ backgroundColor: currentTheme.hex }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};
