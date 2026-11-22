"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Sparkles,
  TrendingUp,
  Award,
  ShieldCheck,
  Factory,
  Leaf,
  Truck,
  Bot,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Compass,
  Milestone,
  Layers,
  Flame,
  Zap,
  Star,
  Users,
  Box
} from "lucide-react";

interface MilestoneData {
  year: string;
  badge: string;
  title: string;
  tagline: string;
  story: string;
  icon: string;
  themeColor: string;
  borderColor: string;
  bgColor: string;
  metrics: {
    label: string;
    value: string;
    desc: string;
  }[];
  highlights: string[];
  tags: string[];
}

const MILESTONES: MilestoneData[] = [
  {
    year: "2018",
    badge: "The Inception",
    title: "Genesis & First Production Plant",
    tagline: "Founded in Ahmedabad with a core mission of high-grade paper cup manufacturing.",
    story:
      "Radhe Dispoworld was established under the leadership of Purv Patel with a single state-of-the-art cup forming machine. Prioritizing 100% food-grade virgin paperboard and zero-leak bottom sealing, we set the foundation for premium beverage disposable supplies in Gujarat.",
    icon: "🚀",
    themeColor: "from-[#EA580C] to-[#C2410C]",
    borderColor: "border-[#EA580C]/30",
    bgColor: "bg-[#FFF7ED]",
    metrics: [
      { label: "Daily Production", value: "50,000+", desc: "Initial cup output capacity" },
      { label: "Core Formats", value: "40ml - 75ml", desc: "Tea & espresso cup sizes" },
      { label: "Leak Resistance", value: "99.8%", desc: "Ultrasonic bottom sealing" },
    ],
    highlights: [
      "Inaugural manufacturing facility established in Ahmedabad, Gujarat",
      "Adopted 100% ITC virgin food-grade PE coated paperboard",
      "Supplied initial 25+ local tea stalls, beverage vendors, and caterers",
    ],
    tags: ["Ahmedabad Plant", "Virgin Board", "Tea Cup Specialists", "Zero Leak"],
  },
  {
    year: "2019",
    badge: "Enterprise Scale",
    title: "100+ Commercial Clients Milestone",
    tagline: "Rapid adoption across corporate hubs, cafes, and restaurant networks.",
    story:
      "By maintaining consistent rim curl firmness and odorless food safety, Radhe Dispoworld quickly crossed the milestone of 100+ ongoing B2B commercial accounts. We introduced dedicated bulk carton packaging to prevent shipping deformities.",
    icon: "📈",
    themeColor: "from-[#9D2575] to-[#701A75]",
    borderColor: "border-[#9D2575]/30",
    bgColor: "bg-[#FDF2F8]",
    metrics: [
      { label: "B2B Accounts", value: "100+", desc: "Active commercial distributors" },
      { label: "Master Cartons", value: "1,500+", desc: "Dispatched monthly across Gujarat" },
      { label: "Product Lines", value: "5 Sizes", desc: "40ml to 150ml range expanded" },
    ],
    highlights: [
      "Secured supply partnerships with corporate canteens and multi-city tea franchises",
      "Standardized 5-ply heavy-duty master corrugated carton shipping",
      "Achieved sub-24hr dispatch turnaround for local distributors",
    ],
    tags: ["100+ B2B Clients", "5-Ply Cartons", "Corporate Supply", "Rapid Dispatch"],
  },
  {
    year: "2020",
    badge: "Facility Expansion",
    title: "High-Speed Machinery & Ripple Lines",
    tagline: "Doubled floor capacity to fulfill rising nationwide disposable demand.",
    story:
      "Amid growing demand for hygienic, touchless disposable packaging, we expanded our facility with advanced automatic paper cup forming machinery and introduced specialized Wati cups (Ice Cream / Dessert) and higher capacity 210ml-250ml beverage cups.",
    icon: "🏭",
    themeColor: "from-[#D97706] to-[#B45309]",
    borderColor: "border-[#D97706]/30",
    bgColor: "bg-[#FEF3C7]",
    metrics: [
      { label: "Capacity Boost", value: "+250%", desc: "Manufacturing output expansion" },
      { label: "Machine Units", value: "6 Lines", desc: "Automated forming setups" },
      { label: "Dessert Line", value: "50-100ml", desc: "Ice Cream Wati debut" },
    ],
    highlights: [
      "Installed high-speed cam-driven paper cup machines (85-100 pcs/min)",
      "Launched dedicated Ice Cream Wati (50ml, 75ml, 100ml) categories",
      "Instituted strict multi-stage quality checks for seam adhesion",
    ],
    tags: ["High-Speed Lines", "Ice Cream Wati", "Capacity +250%", "Quality Control"],
  },
  {
    year: "2021",
    badge: "Green Revolution",
    title: "Eco-Friendly & Sustainable Shift",
    tagline: "Pioneering recyclable paper solutions to eliminate single-use plastics.",
    story:
      "Radhe Dispoworld led the sustainable packaging transition by eliminating single-use plastic cups and introducing 100% bio-degradable, recyclable paper cups with odorless aqueous flexographic printing inks. Custom corporate logo branding became a core offering.",
    icon: "🌱",
    themeColor: "from-[#16A34A] to-[#15803D]",
    borderColor: "border-[#16A34A]/30",
    bgColor: "bg-[#F0FDF4]",
    metrics: [
      { label: "Plastic Reduction", value: "100%", desc: "Replaced with recyclable paper" },
      { label: "Custom Brandings", value: "200+", desc: "Bespoke flexo printed logos" },
      { label: "Aqueous Inks", value: "Food-Safe", desc: "Zero chemical odor emission" },
    ],
    highlights: [
      "Shifted production exclusively to certified biodegradable & recyclable paperboard",
      "Integrated flexographic multi-color inline logo printing for brand partners",
      "Helped 50+ major cafe brands migrate completely away from plastic cups",
    ],
    tags: ["100% Recyclable", "Aqueous Inks", "Custom Logo Print", "Plastic-Free"],
  },
  {
    year: "2022",
    badge: "National Reach",
    title: "Pan-India Logistics & Supply Grid",
    tagline: "Expanding supply chains across Maharashtra, Rajasthan, Delhi NCR & beyond.",
    story:
      "We established strategic transport logistics ties with leading pan-India freight operators. Radhe Dispoworld products reached distributors, wholesale markets, and hospitality chains across 18+ states with guaranteed transit safety and wholesale container pricing.",
    icon: "🚚",
    themeColor: "from-[#0284C7] to-[#0369A1]",
    borderColor: "border-[#0284C7]/30",
    bgColor: "bg-[#F0F9FF]",
    metrics: [
      { label: "States Supplied", value: "18+ States", desc: "Pan-India distribution grid" },
      { label: "Daily Dispatches", value: "50+ Cartons", desc: "Average interstate volume" },
      { label: "Zero Damage Rate", value: "99.9%", desc: "Reinforced palletized packaging" },
    ],
    highlights: [
      "Formed distribution corridors across Western, Northern, and Central India",
      "Introduced computerized stock management and automated dispatch invoicing",
      "Created specialized packaging for long-distance multi-day transit",
    ],
    tags: ["Pan-India Supply", "18+ States", "Zero Damage Packaging", "Wholesale Network"],
  },
  {
    year: "2023",
    badge: "Automation & Precision",
    title: "Robotic Touchless Packaging System",
    tagline: "Fully automated optical counting, sleeving, and sealing integration.",
    story:
      "To guarantee the highest medical-grade hygiene standards, Radhe Dispoworld deployed robotic automated sleeve packaging and optical cup counters. Human touch was completely eliminated during production, stacking, counting, and poly-bag packaging.",
    icon: "🤖",
    themeColor: "from-[#6366F1] to-[#4F46E5]",
    borderColor: "border-[#6366F1]/30",
    bgColor: "bg-[#EEF2FF]",
    metrics: [
      { label: "Touchless Ratio", value: "100%", desc: "Zero manual contact packaging" },
      { label: "Counting Accuracy", value: "99.99%", desc: "Optical sensor inspection" },
      { label: "Speed / Minute", value: "120 Pcs", desc: "Next-gen servo forming units" },
    ],
    highlights: [
      "Integrated automatic poly-sleeve bundling machines with heat-shrink sealers",
      "Added high-precision rim inspection cameras to eliminate irregular cups",
      "Expanded product catalogue to 53+ variants across cold, hot, and dessert packaging",
    ],
    tags: ["Touchless Hygiene", "Optical Inspection", "53+ Cup Variants", "Servo Tech"],
  },
  {
    year: "Present",
    badge: "Industry Benchmark",
    title: "India's Trusted Eco-Packaging Leader",
    tagline: "50+ Crores cups delivered, driving sustainable green hospitality nationwide.",
    story:
      "Today, Radhe Dispoworld stands as a premier manufacturing brand and machinery supplier trusted by thousands of businesses. Operating under the visionary leadership of Purv Patel, we combine cutting-edge machinery, unmatched wholesale rates, and environmental responsibility.",
    icon: "🏆",
    themeColor: "from-[#EA580C] via-[#DC2626] to-[#9D2575]",
    borderColor: "border-[#EA580C]",
    bgColor: "bg-gradient-to-br from-[#FFF7ED] via-[#FDF2F8] to-[#FFFFFF]",
    metrics: [
      { label: "Cups Delivered", value: "50+ Cr", desc: "Total nationwide deliveries" },
      { label: "Product Variants", value: "53+ Lines", desc: "40ml to 350ml + Machinery" },
      { label: "Client Satisfaction", value: "99.9%", desc: "Repeat wholesale business" },
    ],
    highlights: [
      "Recognized leading manufacturer of hot, cold, ripple, and ice cream paper cups",
      "Full machine catalog: Automatic Cup Makers, Flexo Printers, Die Cutters, Bowl Makers",
      "Digital wholesale simulator and instant AI sizing recommendations launched",
    ],
    tags: ["50+ Crore Cups", "Machinery Supplier", "Eco Certified", "Purv Patel Vision"],
  },
];

export default function CompanyJourney() {
  const [activeIndex, setActiveIndex] = useState<number>(MILESTONES.length - 1);
  const [viewMode, setViewMode] = useState<"interactive" | "roadmap">("interactive");
  const [isAutoAdvancing, setIsAutoAdvancing] = useState<boolean>(false);

  const activeMilestone = MILESTONES[activeIndex];

  // Optional auto-slide when enabled
  useEffect(() => {
    if (!isAutoAdvancing) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % MILESTONES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoAdvancing]);

  const handlePrev = () => {
    setIsAutoAdvancing(false);
    setActiveIndex((prev) => (prev === 0 ? MILESTONES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoAdvancing(false);
    setActiveIndex((prev) => (prev === MILESTONES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#FFFFFF] rounded-3xl border border-[#E7E5E4] shadow-md p-6 sm:p-10 lg:p-12 space-y-10">
      
      {/* 1. SECTION HEADER & VIEW SWITCHER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E7E5E4]">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EA580C]/10 border border-[#EA580C]/30 text-xs font-black text-[#EA580C] uppercase tracking-wider">
            <Milestone className="w-3.5 h-3.5" />
            <span>Chronicles of Growth • 2018 to Present</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] font-heading tracking-tight">
            Our Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-[#9D2575]">Milestones</span>
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Discover how Radhe Dispoworld evolved from an ambitious single-machine startup in Ahmedabad into one of India’s most trusted eco-friendly paper packaging powerhouses under the helm of <strong>Purv Patel</strong>.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-2 bg-[#FAFAF9] p-1.5 rounded-2xl border border-[#E7E5E4] self-start md:self-auto shrink-0">
          <button
            onClick={() => {
              setViewMode("interactive");
              setIsAutoAdvancing(false);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              viewMode === "interactive"
                ? "bg-[#0F172A] text-white shadow-xs"
                : "text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Explorer</span>
          </button>

          <button
            onClick={() => {
              setViewMode("roadmap");
              setIsAutoAdvancing(false);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              viewMode === "roadmap"
                ? "bg-[#0F172A] text-white shadow-xs"
                : "text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Full Roadmap</span>
          </button>
        </div>
      </div>

      {/* 2. CHRONOLOGICAL NAVIGATION TRACK (TIMELINE SCRUBBER) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xs font-black text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#EA580C]" />
            <span>Select a Milestone Year</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-[#FAFAF9] hover:bg-[#F5F5F4] border border-[#E7E5E4] text-[#0F172A] transition-colors cursor-pointer"
              title="Previous Year"
              aria-label="Previous Year"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-[#FAFAF9] hover:bg-[#F5F5F4] border border-[#E7E5E4] text-[#0F172A] transition-colors cursor-pointer"
              title="Next Year"
              aria-label="Next Year"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Stepper Ribbon */}
        <div className="relative">
          {/* Connector Line behind nodes on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-6 right-6 h-1 bg-gradient-to-r from-[#EA580C]/20 via-[#9D2575]/20 to-[#EA580C]/40 -translate-y-1/2 z-0 rounded-full" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 relative z-10">
            {MILESTONES.map((m, idx) => {
              const isSelected = activeIndex === idx;
              const isPresent = m.year === "Present";

              return (
                <button
                  key={m.year}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsAutoAdvancing(false);
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? "bg-[#0F172A] text-white border-[#0F172A] shadow-lg scale-[1.03] ring-2 ring-[#EA580C]/40"
                      : "bg-[#FAFAF9] hover:bg-[#FFFFFF] border-[#E7E5E4] text-[#0F172A] hover:border-[#CBD5E1]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-base font-black font-heading tracking-tight">
                      {m.year}
                    </span>
                    <span className="text-base group-hover:scale-125 transition-transform duration-300">
                      {m.icon}
                    </span>
                  </div>

                  <div className="text-[11px] font-bold line-clamp-1 opacity-90">
                    {m.badge}
                  </div>

                  {/* Active Indicator Line */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EA580C] to-[#9D2575]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT: INTERACTIVE SPOTLIGHT VS FULL ROADMAP */}
      {viewMode === "interactive" ? (
        /* INTERACTIVE SPOTLIGHT HERO CARD */
        <div className="rounded-3xl border border-[#E7E5E4] bg-[#FAFAF9] overflow-hidden shadow-sm transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Column: Story & Highlights (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between bg-white border-b lg:border-b-0 lg:border-r border-[#E7E5E4]">
              <div className="space-y-4">
                
                {/* Year Header & Badge */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="px-4 py-1.5 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white text-base font-black shadow-xs">
                    {activeMilestone.year}
                  </div>
                  <div className="px-3.5 py-1.5 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] text-xs font-extrabold text-[#0F172A]">
                    {activeMilestone.badge}
                  </div>
                  <span className="text-2xl">{activeMilestone.icon}</span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] font-heading">
                    {activeMilestone.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#EA580C] mt-1">
                    {activeMilestone.tagline}
                  </p>
                </div>

                {/* Detailed Narrative */}
                <p className="text-sm text-[#475569] leading-relaxed">
                  {activeMilestone.story}
                </p>

                {/* Key Highlights Bulleted */}
                <div className="pt-2 space-y-2.5">
                  <span className="text-xs font-black text-[#0F172A] uppercase tracking-wider block">
                    Milestone Highlights
                  </span>
                  <div className="space-y-2">
                    {activeMilestone.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#334155] font-medium leading-snug">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="pt-3 flex flex-wrap gap-2">
                  {activeMilestone.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4] text-[11px] font-bold text-[#64748B]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation Footer */}
              <div className="pt-6 border-t border-[#E7E5E4] flex items-center justify-between gap-4">
                <div className="text-xs text-[#64748B] font-medium">
                  Milestone <strong className="text-[#0F172A]">{activeIndex + 1}</strong> of{" "}
                  <strong>{MILESTONES.length}</strong>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="px-3.5 py-2 rounded-xl bg-[#FAFAF9] hover:bg-[#F5F5F4] border border-[#E7E5E4] text-xs font-bold text-[#0F172A] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={handleNext}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white text-xs font-bold transition-all shadow-xs hover:opacity-95 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Next Milestone</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Performance Metrics & Visual Matrix (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 space-y-6 flex flex-col justify-between bg-[#FAFAF9]">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-[#EA580C]" />
                    <span>Operational Impact</span>
                  </span>
                  <span className="text-xs font-bold text-[#64748B]">
                    Audited Records
                  </span>
                </div>

                {/* Metric Cards Grid */}
                <div className="space-y-3.5">
                  {activeMilestone.metrics.map((met, i) => (
                    <div
                      key={i}
                      className="bg-white p-4.5 rounded-2xl border border-[#E7E5E4] shadow-2xs hover:shadow-xs transition-shadow"
                    >
                      <div className="text-[11px] font-extrabold text-[#64748B] uppercase tracking-wider">
                        {met.label}
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-[#0F172A] font-heading mt-0.5 tracking-tight">
                        {met.value}
                      </div>
                      <div className="text-xs text-[#64748B] mt-1 font-medium">
                        {met.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Founder Assurance Tag */}
                <div className="p-4 rounded-2xl bg-[#0F172A] text-white space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#FDBA74]">
                    <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
                    <span>Founder Guaranteed Quality</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    &ldquo;Every machine addition and milestone was calibrated to uphold 100% leak-proof reliability for our partners.&rdquo;
                  </p>
                  <div className="text-[11px] font-bold text-white/80">
                    — Purv Patel, Managing Director
                  </div>
                </div>
              </div>

              {/* Live Badge */}
              <div className="pt-4 flex items-center justify-between text-xs text-[#64748B]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                  <span>Manufacturing Active</span>
                </span>
                <span>Ahmedabad, Gujarat</span>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* FULL ROADMAP GRID (ALL 7 MILESTONES DISPLAYED) */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MILESTONES.map((m, idx) => {
              const isPresent = m.year === "Present";
              return (
                <div
                  key={m.year}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between space-y-5 ${
                    isPresent
                      ? "bg-gradient-to-br from-[#FFF7ED] via-[#FDF2F8] to-[#FFFFFF] border-[#EA580C] shadow-md ring-1 ring-[#EA580C]/30"
                      : "bg-[#FFFFFF] border-[#E7E5E4] hover:shadow-md hover:border-[#CBD5E1]"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Year & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2">
                        <span
                          className={`text-xl font-black font-heading ${
                            isPresent ? "text-[#EA580C]" : "text-[#0F172A]"
                          }`}
                        >
                          {m.year}
                        </span>
                        <span className="text-xs font-bold text-[#64748B]">
                          • Milestone {idx + 1}
                        </span>
                      </div>
                      <span className="text-2xl">{m.icon}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-black text-[#EA580C] uppercase tracking-wider block mb-1">
                        {m.badge}
                      </span>
                      <h4 className="text-lg font-black text-[#0F172A] font-heading leading-snug">
                        {m.title}
                      </h4>
                    </div>

                    <p className="text-xs text-[#475569] leading-relaxed">
                      {m.story}
                    </p>

                    {/* Metric mini pills */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {m.metrics.slice(0, 2).map((met, i) => (
                        <div
                          key={i}
                          className="bg-[#FAFAF9] p-2.5 rounded-xl border border-[#E7E5E4]"
                        >
                          <div className="text-[9px] font-bold text-[#64748B] uppercase">
                            {met.label}
                          </div>
                          <div className="text-sm font-black text-[#0F172A] font-heading mt-0.5">
                            {met.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Tag Strip */}
                  <div className="pt-3 border-t border-[#E7E5E4] flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-[#0F172A]">
                      {m.tags[0]}
                    </span>
                    <button
                      onClick={() => {
                        setActiveIndex(idx);
                        setViewMode("interactive");
                      }}
                      className="text-[11px] font-bold text-[#EA580C] hover:text-[#9D2575] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Deep Dive</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. COMPANY STATS SUMMARY TICKER */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
        <div className="p-4.5 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] text-center">
          <div className="text-2xl sm:text-3xl font-black text-[#EA580C] font-heading">
            2018
          </div>
          <div className="text-xs font-bold text-[#0F172A] mt-1">
            Founded & Pioneered
          </div>
          <div className="text-[10px] text-[#64748B]">Ahmedabad, Gujarat</div>
        </div>

        <div className="p-4.5 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] text-center">
          <div className="text-2xl sm:text-3xl font-black text-[#9D2575] font-heading">
            50+ Cr
          </div>
          <div className="text-xs font-bold text-[#0F172A] mt-1">
            Cups Delivered
          </div>
          <div className="text-[10px] text-[#64748B]">Zero Leak Assurance</div>
        </div>

        <div className="p-4.5 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] text-center">
          <div className="text-2xl sm:text-3xl font-black text-[#16A34A] font-heading">
            100%
          </div>
          <div className="text-xs font-bold text-[#0F172A] mt-1">
            Bio-Degradable
          </div>
          <div className="text-[10px] text-[#64748B]">Eco Paperboard</div>
        </div>

        <div className="p-4.5 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] text-center">
          <div className="text-2xl sm:text-3xl font-black text-[#0F172A] font-heading">
            18+
          </div>
          <div className="text-xs font-bold text-[#0F172A] mt-1">
            Indian States
          </div>
          <div className="text-[10px] text-[#64748B]">Direct B2B Supply</div>
        </div>
      </div>

    </div>
  );
}
