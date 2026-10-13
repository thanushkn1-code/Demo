import React, { useState } from 'react';
import { GymConfig, AccentTheme } from '../types';
import { GALLERY_ITEMS } from '../data/gymData';
import { Camera, Maximize2 } from 'lucide-react';

interface GalleryProps {
  gym: GymConfig;
  theme: AccentTheme;
}

export const Gallery: React.FC<GalleryProps> = ({ gym, theme }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', 'Strength', 'Floor', 'CrossFit', 'Cardio'];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0D0F14] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
              <span className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: theme.hex }} />
              <span>INSIDE {gym.name}</span>
              <span aria-hidden="true">·</span>
              <span>{gym.areaSqFt} ATHLETIC FLOOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-athletic text-white uppercase tracking-tight">
              GYM PHOTO GALLERY
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xs overflow-x-auto self-start md:self-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid using real user photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#12151D] border border-neutral-800 rounded-sm overflow-hidden shadow-lg transition-all duration-300 hover:border-neutral-600 hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 bg-[#0A0C11] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Top badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span
                    className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-xs bg-black/60 backdrop-blur-sm border border-neutral-700/80 text-white"
                  >
                    {item.badge}
                  </span>
                  <div className="p-1.5 rounded-xs bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Scrim Overlay & Text */}
                <div className="absolute bottom-3 inset-x-4">
                  <h3 className="text-lg font-black font-athletic uppercase text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (button-based, no inputs) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-sm overflow-hidden border border-neutral-700 bg-black">
            <img
              src={selectedImage}
              alt="Gym Facility Preview"
              className="max-h-[85vh] w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 px-3 py-1.5 bg-black/80 hover:bg-neutral-800 text-white text-xs font-bold uppercase rounded-xs border border-neutral-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
