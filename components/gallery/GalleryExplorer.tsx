"use client";

import React, { useState, useMemo } from "react";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/data";
import ImageLightbox from "@/components/ui/ImageLightbox";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  Filter,
  Search,
  Grid3X3,
  LayoutGrid,
  Film,
  Sparkles,
  MessageCircle,
  Factory,
  Cpu,
  Coffee,
  Package,
  ArrowRight,
  ArrowLeft,
  Eye,
  CheckCircle2
} from "lucide-react";

export default function GalleryExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [layoutMode, setLayoutMode] = useState<"masonry" | "grid" | "showcase">("masonry");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showcaseIndex, setShowcaseIndex] = useState<number>(0);

  // Category Definitions
  const categories = [
    { id: "all", label: "All Photos", icon: Sparkles },
    { id: "products", label: "Paper Cups", icon: Coffee },
    { id: "machinery", label: "Machinery & Tech", icon: Cpu },
    { id: "factory", label: "Factory Cleanroom", icon: Factory },
    { id: "packaging", label: "Packaging & Logistics", icon: Package },
  ];

  // Filtered Items
  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: GALLERY_ITEMS.length };
    GALLERY_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
    }
  };

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
    }
  };

  const currentShowcaseItem = filteredItems[showcaseIndex] || filteredItems[0];

  return (
    <div className="space-y-10">
      
      {/* 1. HERO HEADER SECTION */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E7E5E4] shadow-2xs text-xs font-bold text-[#0F172A]">
          <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
          <span className="text-[#EA580C]">Visual Tour</span>
          <span className="text-[#E7E5E4]">|</span>
          <span className="text-[#DC2626] font-extrabold uppercase">33 High-Definition Photos</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] font-heading tracking-tight">
          Manufacturing Excellence In{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-[#9D2575]">
            Focus
          </span>
        </h1>

        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
          Explore our automated manufacturing floor in Ahmedabad, high-speed cam-driven cup forming machinery, food-grade cleanrooms, finished cup ranges, and heavy-duty dispatch packaging.
        </p>
      </div>

      {/* 2. FILTER, SEARCH & LAYOUT TOOLBAR */}
      <div className="bg-[#FFFFFF] p-4 sm:p-6 rounded-3xl border border-[#E7E5E4] shadow-sm space-y-5">
        
        {/* Top Controls: Search Bar & Layout Switcher */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <input
              type="text"
              placeholder="Search photos by machine, cup size, factory bay..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowcaseIndex(0);
              }}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] text-xs font-semibold text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#EA580C] focus:bg-white transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-bold text-[#64748B] hover:text-[#0F172A] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Layout Mode Switcher */}
          <div className="flex items-center gap-1.5 bg-[#FAFAF9] p-1.5 rounded-2xl border border-[#E7E5E4] self-stretch md:self-auto justify-center">
            <button
              onClick={() => setLayoutMode("masonry")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                layoutMode === "masonry"
                  ? "bg-[#0F172A] text-white shadow-2xs"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
              title="Masonry Editorial View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Masonry</span>
            </button>

            <button
              onClick={() => setLayoutMode("grid")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                layoutMode === "grid"
                  ? "bg-[#0F172A] text-white shadow-2xs"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
              title="Standard Grid View"
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Grid</span>
            </button>

            <button
              onClick={() => setLayoutMode("showcase")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                layoutMode === "showcase"
                  ? "bg-[#0F172A] text-white shadow-2xs"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
              title="Showcase Filmstrip View"
            >
              <Film className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Showcase</span>
            </button>
          </div>
        </div>

        {/* Category Pills Ribbon */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const Icon = cat.icon;
            const count = categoryCounts[cat.id] || 0;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setShowcaseIndex(0);
                }}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white shadow-xs"
                    : "bg-[#FAFAF9] text-[#64748B] hover:text-[#0F172A] border border-[#E7E5E4] hover:bg-[#FFFFFF]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#EA580C]"}`} />
                <span>{cat.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#E7E5E4]/80 text-[#64748B]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. SHOWCASE SPOTLIGHT MODE (IF SELECTED) */}
      {layoutMode === "showcase" && currentShowcaseItem && (
        <div className="bg-[#FFFFFF] p-6 sm:p-10 rounded-3xl border border-[#E7E5E4] shadow-md space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Featured Image */}
            <div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-[#0F172A] border border-[#E7E5E4] h-[360px] sm:h-[480px] group shadow-inner">
              <img
                src={currentShowcaseItem.image}
                alt={currentShowcaseItem.title}
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
              />
              <button
                onClick={() => setLightboxIndex(showcaseIndex)}
                className="absolute top-4 right-4 p-3 rounded-2xl bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer shadow-lg"
                title="Open Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Featured Details Panel */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EA580C]/10 border border-[#EA580C]/30 text-xs font-black text-[#EA580C] uppercase tracking-wider">
                  {currentShowcaseItem.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] font-heading leading-snug">
                  {currentShowcaseItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {currentShowcaseItem.description}
                </p>
              </div>

              {/* Quick Specs */}
              <div className="p-4 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] space-y-2">
                <div className="text-[11px] font-black text-[#0F172A] uppercase tracking-wider">
                  Quality Specs
                </div>
                <div className="space-y-1.5 text-xs text-[#475569]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>100% Food-Grade Virgin Paperboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>Touchless Automated Cleanroom Facility</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <a
                  href={`https://wa.me/918980005230?text=${encodeURIComponent(
                    `Hello Purv Patel, I saw this item in your gallery: "${currentShowcaseItem.title}" and would like to know more.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-[#0F172A] text-xs font-black transition-all shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire with Purv Patel</span>
                </a>

                <button
                  onClick={() => setLightboxIndex(showcaseIndex)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Expand Fullscreen Preview</span>
                </button>
              </div>
            </div>

          </div>

          {/* Filmstrip Selector */}
          <div className="pt-4 border-t border-[#E7E5E4] space-y-3">
            <div className="flex items-center justify-between text-xs text-[#64748B] font-bold">
              <span>Photo Carousel • Select to inspect</span>
              <span>
                {showcaseIndex + 1} of {filteredItems.length}
              </span>
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {filteredItems.map((item, idx) => {
                const isSelected = idx === showcaseIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setShowcaseIndex(idx)}
                    className={`relative w-24 h-20 rounded-2xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      isSelected
                        ? "border-[#EA580C] scale-105 shadow-md ring-2 ring-[#EA580C]/30"
                        : "border-[#E7E5E4] opacity-60 hover:opacity-100 hover:border-[#0F172A]"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 4. MASONRY / EDITORIAL GRID (DEFAULT) */}
      {layoutMode === "masonry" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isTall = item.aspect === "tall";
            const whatsappMsg = encodeURIComponent(
              `Hello Purv Patel, I am inquiring about: "${item.title}" from your Radhe Dispoworld gallery.`
            );

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index % 6) * 0.05 }}
                className="group relative rounded-3xl overflow-hidden border border-[#E7E5E4] bg-[#FFFFFF] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Hover Overlay */}
                <div
                  className={`overflow-hidden relative bg-[#F5F5F4] cursor-pointer ${
                    isTall ? "h-80 sm:h-96" : "h-64 sm:h-72"
                  }`}
                  onClick={() => setLightboxIndex(index)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 select-none"
                    loading="lazy"
                  />

                  {/* Floating Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-[#0F172A] border border-white/40 shadow-xs">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-[#FDBA74] uppercase tracking-wider">
                          Tap to Expand
                        </span>
                        <h4 className="text-sm font-black font-heading line-clamp-1">
                          {item.title}
                        </h4>
                      </div>
                      <div className="w-9 h-9 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-xs">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content & Action Bar */}
                <div className="p-4 sm:p-5 bg-white space-y-3 border-t border-[#E7E5E4]">
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-[#0F172A] font-heading line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#64748B] line-clamp-2 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#F1F5F9]">
                    <button
                      onClick={() => setLightboxIndex(index)}
                      className="text-xs font-bold text-[#0F172A] hover:text-[#EA580C] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </button>

                    <a
                      href={`https://wa.me/918980005230?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#15803D] hover:text-[#0F172A] text-[11px] font-black transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Quote</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* 5. SYMMETRICAL CLEAN GRID (IF SELECTED) */}
      {layoutMode === "grid" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: (index % 8) * 0.03 }}
              className="group rounded-3xl overflow-hidden border border-[#E7E5E4] bg-[#FFFFFF] shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div
                className="h-48 sm:h-56 relative overflow-hidden bg-[#F5F5F4] cursor-pointer"
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-[9px] font-black uppercase text-[#0F172A]">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-white border-t border-[#E7E5E4] space-y-1">
                <h4 className="text-xs font-bold text-[#0F172A] font-heading line-clamp-1">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setLightboxIndex(index)}
                    className="text-[11px] font-bold text-[#EA580C] hover:underline cursor-pointer"
                  >
                    View
                  </button>
                  <a
                    href={`https://wa.me/918980005230?text=${encodeURIComponent(
                      `Hello Purv Patel, please send quotation for: "${item.title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-black text-[#25D366] hover:underline cursor-pointer"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E7E5E4] p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#FAFAF9] flex items-center justify-center mx-auto text-2xl border border-[#E7E5E4]">
            📷
          </div>
          <h3 className="text-xl font-bold text-[#0F172A] font-heading">
            No Photos Found Matching Your Filter
          </h3>
          <p className="text-xs text-[#64748B] max-w-md mx-auto">
            Try resetting your search query or selecting &quot;All Photos&quot; to browse all 33 high-resolution factory assets.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-6 py-2.5 rounded-2xl bg-[#0F172A] text-white text-xs font-bold shadow-xs hover:bg-[#1E293B] cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* 6. UPGRADED LIGHTBOX MODAL */}
      {activeItem && lightboxIndex !== null && (
        <ImageLightbox
          item={activeItem}
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onSelectIndex={(newIdx) => setLightboxIndex(newIdx)}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />
      )}

    </div>
  );
}
