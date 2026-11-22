"use client";

import React, { useEffect } from "react";
import { GalleryItem } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MessageCircle,
  Sparkles,
  Info,
  Layers
} from "lucide-react";

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ImageLightbox({
  item,
  items,
  currentIndex,
  onClose,
  onSelectIndex,
  onPrev,
  onNext,
}: LightboxProps) {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Purv Patel (Radhe Dispoworld), I am viewing your Photo Gallery and interested in: "${item.title}" (${item.categoryLabel}). Please share details and wholesale quotation.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-[#0F172A]/95 backdrop-blur-xl">
        
        {/* Top Control Bar */}
        <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15">
            <Sparkles className="w-4 h-4 text-[#EA580C]" />
            <span className="text-xs font-black uppercase tracking-wider text-white">
              Radhe Dispoworld Gallery
            </span>
            <span className="text-white/40">•</span>
            <span className="text-xs text-[#FDBA74] font-bold">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 sm:p-3 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-all border border-white/15 cursor-pointer shadow-lg hover:scale-105"
            aria-label="Close image viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prev / Next Arrows */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-2xl bg-white/10 hover:bg-white/25 text-white transition-all backdrop-blur-md border border-white/15 cursor-pointer shadow-xl hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-2xl bg-white/10 hover:bg-white/25 text-white transition-all backdrop-blur-md border border-white/15 cursor-pointer shadow-xl hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Content Modal Container */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#0F172A] border border-white/15 shadow-2xl"
        >
          {/* Main Photo Display */}
          <div className="relative w-full h-[48vh] sm:h-[58vh] bg-black/60 flex items-center justify-center overflow-hidden p-2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain rounded-2xl select-none"
            />
          </div>

          {/* Details & Action Bar */}
          <div className="w-full p-4 sm:p-6 bg-[#1E293B] text-white border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-[#EA580C] uppercase tracking-wider bg-[#EA580C]/20 px-2.5 py-0.5 rounded-full border border-[#EA580C]/40">
                  {item.categoryLabel}
                </span>
                <span className="text-xs text-white/50 font-semibold">
                  Radhe Dispoworld Ahmedabad
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black font-heading text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* Inquire Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full sm:w-auto">
              <a
                href={`https://wa.me/918980005230?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-[#0F172A] text-xs font-black transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Inquire on WhatsApp</span>
              </a>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-white/10 text-white text-xs font-bold border border-white/10">
                <Layers className="w-3.5 h-3.5 text-[#FDBA74]" />
                <span>Photo {currentIndex + 1} of {items.length}</span>
              </div>
            </div>
          </div>

          {/* Bottom Thumbnail Strip */}
          <div className="w-full bg-[#0F172A] px-4 py-2.5 border-t border-white/10 overflow-x-auto flex items-center gap-2 scrollbar-none">
            {items.map((thumb, idx) => {
              const isThumbSelected = idx === currentIndex;
              return (
                <button
                  key={thumb.id}
                  onClick={() => onSelectIndex(idx)}
                  className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    isThumbSelected
                      ? "border-[#EA580C] scale-105 shadow-md ring-2 ring-[#EA580C]/40"
                      : "border-transparent opacity-50 hover:opacity-100 hover:border-white/40"
                  }`}
                >
                  <img
                    src={thumb.image}
                    alt={thumb.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </motion.div>

      </div>
    </AnimatePresence>
  );
}
