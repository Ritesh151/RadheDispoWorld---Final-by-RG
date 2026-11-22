"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PRODUCTS_DATA, CORE_STRENGTHS, GALLERY_ITEMS } from "@/lib/data";
import ProductCard from "../ProductCard";
import PaperCupCalculator from "../PaperCupCalculator";
import MachineMarquee from "../products/MachineMarquee";
import { NavTab } from "../Navbar";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Clock,
  Palette,
  CheckCircle2,
  ChevronRight,
  PhoneCall,
  MessageSquare,
  Award,
  Zap,
  Bot,
  Box,
  Truck,
  Leaf,
  Factory,
  HelpCircle,
  Star,
  Users,
  Flame,
  Layers,
  MapPin,
  ChevronDown,
  Quote
} from "lucide-react";

interface HomeViewProps {
  onNavigate: (tab: NavTab) => void;
  onViewProductDetails: (product: any) => void;
  onEnquireProduct: (productName: string) => void;
}

export default function HomeView({
  onNavigate,
  onViewProductDetails,
  onEnquireProduct,
}: HomeViewProps) {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>("tea");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Typewriter Headline Animation Phrases
  const headlinePhrases = [
    "Paper Cups Manufacturer & Forming Machines in Ahmedabad",
    "Sustainable Elegance & Precision in Every Sip",
    "India's Premier Paper Cups Manufacturing Powerhouse",
    "Zero-Leak Ultrasonic Bottom Knurled Cups",
    "Custom Logo Printed Paper Cups for Brands & Cafes",
    "High-Speed Automatic Paper Cup Machinery Supplier",
  ];

  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>("Paper Cups Manufacturer & Forming Machines in Ahmedabad");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentFullText = headlinePhrases[phraseIndex];
    const typingSpeed = isDeleting ? 35 : 70;
    const pauseDelay = isDeleting ? 0 : 2400;

    let timer: NodeJS.Timeout;

    if (!isDeleting && typedText === currentFullText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % headlinePhrases.length);
    } else {
      timer = setTimeout(() => {
        setTypedText((prev) =>
          isDeleting
            ? currentFullText.substring(0, prev.length - 1)
            : currentFullText.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  // Sequential Hero Video Playlist (1.mp4 -> 2.mp4 -> 1.mp4 ...)
  const heroVideos = [
    {
      src: "/videos/1.mp4",
      title: "High-Speed Open Cam Cup Forming Line",
      tag: "Video 1 of 2 • Machine Forming",
    },
    {
      src: "/videos/2.mp4",
      title: "Touchless Cleanroom Packaging & Dispatch",
      tag: "Video 2 of 2 • Cleanroom Packaging",
    },
  ];

  const [currentHeroVideoIndex, setCurrentHeroVideoIndex] = useState<number>(0);

  const handleHeroVideoEnded = () => {
    setCurrentHeroVideoIndex((prev) => (prev + 1) % heroVideos.length);
  };

  // Category Filtered Products for Home Tab
  const categoryProducts = {
    tea: PRODUCTS_DATA.filter((p) => ["40 ML", "50 ML", "65 ML", "75_ML", "75 ML"].includes(p.category)).slice(0, 4),
    coffee: PRODUCTS_DATA.filter((p) => ["100_ML", "100 ML", "110 ML", "150 ML", "200 ML"].includes(p.category)).slice(0, 4),
    cold: PRODUCTS_DATA.filter((p) => ["250 ML", "300 ML", "350 ML"].includes(p.category)).slice(0, 4),
    wati: PRODUCTS_DATA.filter((p) => p.name.toLowerCase().includes("wati") || p.category.includes("Wati")).slice(0, 4),
  };

  const currentCategoryList =
    categoryProducts[activeCategoryTab as keyof typeof categoryProducts] ||
    categoryProducts.tea;

  const galleryPreviews = GALLERY_ITEMS.slice(0, 4);

  const faqs = [
    {
      q: "What is the Minimum Order Quantity (MOQ) for wholesale paper cups?",
      a: "Our standard Minimum Order Quantity is just 1 Master Carton (typically 3,000 to 17,010 cups depending on size). For customized logo printed cups, MOQ starts at 25,000 to 50,000 pieces.",
    },
    {
      q: "Are Radhe Dispoworld cups 100% leak-proof for boiling hot beverages?",
      a: "Yes! Every single cup undergoes ultrasonic bottom knurling and high-temperature seam embossing. Manufactured from 100% ITC virgin paperboard, they resist sogginess and leaks for hot tea, boiling coffee, and cold iced drinks.",
    },
    {
      q: "How fast can you dispatch orders across India from Ahmedabad?",
      a: "Local Gujarat orders are dispatched within 24 hours. For interstate deliveries (Maharashtra, Rajasthan, Delhi NCR, Madhya Pradesh, South India), shipments arrive within 2 to 4 working days via direct transport logistics.",
    },
    {
      q: "Do you supply automatic paper cup making machines and raw materials?",
      a: "Yes. In addition to finished paper cups, Radhe Dispoworld supplies high-speed automatic paper cup forming machines, flexo printing units, die-cutting machinery, and printed/plain paper blanks with technical installation support.",
    },
    {
      q: "How can I request custom brand logo printing on cups?",
      a: "You can send us your brand artwork via WhatsApp or our contact page. We utilize food-safe, odorless aqueous flexographic inks offering high-definition multi-color precision for corporate and cafe branding.",
    },
  ];

  return (
    <div className="space-y-20 pb-16">

      {/* 1. HERO SECTION */}
      <section className="relative pt-4 pb-12 sm:pt-10 sm:pb-20 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#EA580C]/10 via-[#9D2575]/10 to-[#EA580C]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Hero Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6 text-center lg:text-left"
            >
              {/* Sacred Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E7E5E4] shadow-2xs text-xs font-bold text-[#0F172A]">
                <span className="text-[#EA580C]">॥ Jay Shree Krishna ॥</span>
                <span className="text-[#E7E5E4]">|</span>
                <span className="flex items-center gap-1 text-[#0F172A]">
                  <Sparkles className="w-3.5 h-3.5 text-[#9D2575]" />
                  <span>100% Premium Paper Cups</span>
                </span>
                <span className="text-[#E7E5E4]">|</span>
                <span className="text-[#DC2626] font-extrabold uppercase">Since 2018</span>
              </div>

              {/* Main Headline with Typewriter Animation */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] font-heading tracking-tight leading-[1.15] min-h-[3.8em] sm:min-h-[3.2em] lg:min-h-[2.8em] flex items-center">
                <span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#9D2575]">
                    {typedText}
                  </span>
                  <span className="inline-block w-[3px] h-[0.85em] ml-1.5 bg-[#EA580C] animate-pulse align-middle rounded-full" />
                </span>
              </h1>

              {/* Tagline / Subtitle */}
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Founded & Managed by <strong>Purv Patel</strong> in Ahmedabad, Radhe Dispoworld is India’s premier paper cup manufacturing powerhouse. We craft zero-leak single wall, double wall insulated, and custom logo printed cups for beverage chains, corporate hubs, caterers, and wholesalers nationwide.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => onNavigate("products")}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#9D2575] text-white rounded-2xl text-sm font-extrabold shadow-md hover:shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
                >
                  <span>Explore 53+ Products</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://wa.me/918980005230?text=Hello%20Purv%20Patel%2C%20I%20want%20to%20inquire%20about%20wholesale%20paper%20cups%20from%20Radhe%20Dispoworld."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 bg-[#FFFFFF] text-[#0F172A] rounded-2xl text-sm font-bold border border-[#E7E5E4] hover:bg-[#F5F5F4] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4 text-[#16A34A]" />
                  <span>WhatsApp Direct Quote</span>
                </a>
              </div>

              {/* Key Trust Counters */}
              <div className="pt-6 border-t border-[#E7E5E4] grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-[#0F172A] font-heading">
                    50+ Cr
                  </span>
                  <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                    Cups Delivered
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-[#EA580C] font-heading">
                    99.9%
                  </span>
                  <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                    Zero-Leak Rate
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-[#9D2575] font-heading">
                    18+
                  </span>
                  <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                    States Supplied
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Hero Right Visual: Sequential Nonstop Video Player (1.mp4 -> 2.mp4 -> 1.mp4) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative mx-auto max-w-xl lg:max-w-none">
                <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-3xl border border-[#E7E5E4] shadow-xl relative overflow-hidden space-y-3.5">
                  
                  {/* Top Live Status Bar */}
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
                      <span className="text-xs font-black text-[#0F172A] uppercase tracking-wider font-heading">
                        Live Factory Feed • Ahmedabad
                      </span>
                    </div>
                    
                    {/* Video Selector Dots */}
                    <div className="flex items-center gap-1.5 bg-[#FAFAF9] px-2 py-1 rounded-full border border-[#E7E5E4]">
                      {heroVideos.map((vid, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentHeroVideoIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                            currentHeroVideoIndex === idx
                              ? "bg-[#EA580C] w-5"
                              : "bg-[#CBD5E1] hover:bg-[#94A3B8]"
                          }`}
                          title={`Switch to ${vid.title}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Main Single Video Player with Sequential Playback */}
                  <div className="relative h-80 sm:h-[440px] lg:h-[460px] rounded-2xl overflow-hidden bg-[#0F172A] border border-[#E7E5E4] group shadow-inner">
                    <video
                      key={heroVideos[currentHeroVideoIndex].src}
                      src={heroVideos[currentHeroVideoIndex].src}
                      autoPlay
                      muted
                      playsInline
                      preload="metadata"
                      poster="/images/gallery/Outside.jpg"
                      onEnded={handleHeroVideoEnded}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay & Video Metadata */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent flex flex-col justify-end p-5 text-white pointer-events-none">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#EA580C] text-white">
                          {heroVideos[currentHeroVideoIndex].tag}
                        </span>
                        <span className="text-[10px] font-semibold text-[#FDBA74] bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-xs">
                          Auto-Next Active
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black font-heading text-white">
                        {heroVideos[currentHeroVideoIndex].title}
                      </h3>
                      <p className="text-xs text-white/80 mt-0.5">
                        {currentHeroVideoIndex === 0
                          ? "Continuous 98°C heat-resistant base knurling & precision cup forming."
                          : "Touchless automated cleanroom packaging & high-speed dispatch line."}
                      </p>
                    </div>

                    {/* Floating Quality Guarantee Badge */}
                    <div className="absolute top-4 right-4 bg-[#FFFFFF]/95 backdrop-blur-md p-2.5 rounded-2xl border border-[#E7E5E4] shadow-md flex items-center gap-2.5 pointer-events-none">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#EA580C] to-[#9D2575] text-white flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-[11px] font-black text-[#0F172A]">100% Leak Proof</span>
                        <span className="block text-[9px] font-semibold text-[#64748B]">Automated Inspection</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Wholesale Rate & Info Bar */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#E7E5E4] text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center font-bold text-xs shrink-0 border border-[#FDBA74]/30">
                        ⚡
                      </div>
                      <div>
                        <span className="block text-[11px] font-extrabold text-[#0F172A]">500k+ Daily Production</span>
                        <span className="block text-[10px] text-[#64748B]">Ahmedabad Direct Plant Supply</span>
                      </div>
                    </div>

                    <span className="text-[11px] font-extrabold text-[#EA580C] bg-[#FFF7ED] px-2.5 py-1 rounded-xl border border-[#FDBA74]/40">
                      ₹0.1360 / pc
                    </span>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. 🤖 AI INTERACTIVE POWER TOOLS SPOTLIGHT (100% Frontend-Only) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 lg:p-12 text-[#0F172A] shadow-xs relative overflow-hidden border border-[#E7E5E4]">

          <div className="absolute -right-20 -top-20 w-96 h-96 bg-gradient-to-r from-[#EA580C]/10 to-[#9D2575]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/10 border border-[#FDBA74]/40 text-xs font-black text-[#EA580C] uppercase tracking-wider">
                  <Bot className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Next-Gen Procurement Assistant</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#0F172A]">
                  Interactive AI Cup & Logistics Tools
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Run instant sizing diagnostics or calculate full freight carton volumes and transit days before placing your wholesale order.
                </p>
              </div>

              <button
                onClick={() => onNavigate("products")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold shadow-2xs transition-all cursor-pointer self-start md:self-auto"
              >
                <span>Launch Full Suite on Products Page</span>
                <ChevronRight className="w-4 h-4 text-[#FDBA74]" />
              </button>
            </div>

            {/* 2 AI Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Feature 1 Card: Smart Cup Advisor */}
              <div className="bg-[#FAFAF9] hover:bg-white p-6 sm:p-8 rounded-3xl border border-[#E7E5E4] hover:border-[#EA580C]/40 hover:shadow-xs transition-all flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#F97316] text-white flex items-center justify-center text-2xl shadow-md">
                    🤖
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-[#EA580C] uppercase tracking-wider">
                      Neural Sizing Wizard
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-heading text-[#0F172A] mt-1">
                      Smart Cup & Beverage Advisor
                    </h3>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Select your beverage type (Tea, Espresso, Iced Latte, Cold Drink, Dessert), serving volume, and temperature to receive an exact cup recommendation, GSM weight, and packing specs.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["4-Step Diagnostic", "Real-Time Compatibility Score", "Instant WhatsApp Quote"].map((t, i) => (
                      <span key={i} className="text-[10px] font-bold bg-white border border-[#E7E5E4] px-2.5 py-1 rounded-xl text-[#0F172A]">
                        ✓ {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-[#EA580C] group-hover:text-[#9D2575] transition-colors"
                >
                  <span>Start Cup Diagnostic</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Feature 2 Card: Logistics & Carton Simulator */}
              <div className="bg-[#FAFAF9] hover:bg-white p-6 sm:p-8 rounded-3xl border border-[#E7E5E4] hover:border-[#9D2575]/40 hover:shadow-xs transition-all flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9D2575] to-[#701A75] text-white flex items-center justify-center text-2xl shadow-md">
                    📦
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-[#9D2575] uppercase tracking-wider">
                      Wholesale Packaging Matrix
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-heading text-[#0F172A] mt-1">
                      AI Carton & Freight Simulator
                    </h3>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Calculate exact Master Boxes needed, individual packet breakdown, total volume (CBM), gross shipping weight (kg), and freight transit days across Indian states.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Live CBM & Weight Matrix", "State Freight Estimator", "Direct Carton Order"].map((t, i) => (
                      <span key={i} className="text-[10px] font-bold bg-white border border-[#E7E5E4] px-2.5 py-1 rounded-xl text-[#0F172A]">
                        ✓ {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-[#9D2575] group-hover:text-[#EA580C] transition-colors"
                >
                  <span>Launch Logistics Calculator</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. FOUNDER PURV PATEL & DIRECT FACTORY ASSURANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] p-8 sm:p-12 rounded-3xl border border-[#E7E5E4] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Founder Photo */}
            <div className="lg:col-span-4 relative">
              <div className="rounded-3xl overflow-hidden border border-[#E7E5E4] shadow-md bg-[#FAFAF9] p-3">
                <div className="h-80 sm:h-96 rounded-2xl overflow-hidden relative">
                  <img
                    src="/purv-patel.jpg"
                    alt="Purv Patel - Founder & Managing Director"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] font-black text-[#EA580C] uppercase tracking-wider">
                      Founder & Managing Director
                    </span>
                    <h3 className="text-xl font-black font-heading">Purv Patel</h3>
                    <p className="text-[11px] text-white/80">Radhe Dispoworld • Ahmedabad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Story & Vision */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest bg-[#EA580C]/10 px-3.5 py-1 rounded-full border border-[#FDBA74]/40">
                  Leadership & Integrity • Since 2018
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] font-heading leading-tight">
                  &ldquo;We don’t just manufacture cups. We protect your brand’s reputation in every beverage.&rdquo;
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Under the visionary guidance of <strong>Purv Patel</strong>, Radhe Dispoworld has eliminated compromises in disposable packaging. By investing in heavy-duty automatic cam machines, 100% ITC virgin food-grade board, and medical-grade touchless packaging, we deliver zero-leak cups at direct wholesale factory pricing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4]">
                  <div className="text-xs font-extrabold text-[#EA580C] uppercase">Direct Supply</div>
                  <div className="text-base font-black text-[#0F172A] mt-1">Zero Middlemen</div>
                  <div className="text-[11px] text-[#64748B]">Straight from factory floor</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4]">
                  <div className="text-xs font-extrabold text-[#9D2575] uppercase">Material Purity</div>
                  <div className="text-base font-black text-[#0F172A] mt-1">100% Virgin Board</div>
                  <div className="text-[11px] text-[#64748B]">Odorless & food-safe</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4]">
                  <div className="text-xs font-extrabold text-[#16A34A] uppercase">Prompt Support</div>
                  <div className="text-base font-black text-[#0F172A] mt-1">Personal Contact</div>
                  <div className="text-[11px] text-[#64748B]">Direct owner assistance</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate("about")}
                  className="px-6 py-3 rounded-2xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold transition-all shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore Company Journey & Milestones</span>
                  <ArrowRight className="w-4 h-4 text-[#FDBA74]" />
                </button>

                <a
                  href="tel:+918980005230"
                  className="px-5 py-3 rounded-2xl bg-[#FAFAF9] hover:bg-[#F5F5F4] text-[#0F172A] text-xs font-bold border border-[#E7E5E4] transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>+91 89800 05230</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MACHINERY & INDUSTRIAL TECHNOLOGY MARQUEE */}
      <section className="space-y-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest bg-[#EA580C]/10 px-3.5 py-1 rounded-full border border-[#FDBA74]/40">
              Industrial Grade Machinery
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] font-heading mt-3">
              Paper Cup Machinery & Equipment
            </h2>
          </div>

          <button
            onClick={() => onNavigate("products")}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] hover:text-[#EA580C] transition-colors cursor-pointer"
          >
            <span>View All 7 Machine Models</span>
            <ArrowRight className="w-4 h-4 text-[#EA580C]" />
          </button>
        </div>

        <MachineMarquee />
      </section>

      {/* 5. INTERACTIVE PRODUCT CATEGORY EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#9D2575] uppercase tracking-widest bg-[#9D2575]/10 px-3.5 py-1 rounded-full border border-[#9D2575]/20">
              Featured Wholesale Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] font-heading mt-3">
              Explore By Beverage Category
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 bg-[#FAFAF9] p-1.5 rounded-2xl border border-[#E7E5E4] overflow-x-auto scrollbar-none">
            {[
              { id: "tea", label: "Tea & Espresso (40-75ml)" },
              { id: "coffee", label: "Coffee & Hot (100-200ml)" },
              { id: "cold", label: "Cold Drinks (250-350ml)" },
              { id: "wati", label: "Ice Cream Wati" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategoryTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${activeCategoryTab === tab.id
                    ? "bg-[#0F172A] text-white shadow-2xs"
                    : "text-[#64748B] hover:text-[#0F172A]"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCategoryList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewProductDetails}
              onEnquire={onEnquireProduct}
            />
          ))}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate("products")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white text-xs font-extrabold shadow-md hover:opacity-95 transition-all cursor-pointer"
          >
            <span>Browse Complete 53+ Product Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 6. WHOLESALE CARTON & PRICE CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PaperCupCalculator
          onQuoteRequest={(summary) => {
            onEnquireProduct(summary);
          }}
        />
      </section>

      {/* 7. MANUFACTURING CAPABILITIES & CORE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest bg-[#EA580C]/10 px-3.5 py-1 rounded-full border border-[#FDBA74]/40">
            Why Radhe Dispoworld Stands Out
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] font-heading mt-3">
            Engineered for Precision & Hygiene
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-2">
            Every paper cup manufactured at Radhe Dispoworld conforms to strict Indian and International food safety benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_STRENGTHS.map((strength, idx) => (
            <motion.div
              key={strength.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E7E5E4] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F5F5F4] text-[#0F172A] flex items-center justify-center mb-5 group-hover:bg-gradient-to-r group-hover:from-[#EA580C] group-hover:to-[#9D2575] group-hover:text-white transition-all border border-[#E7E5E4]">
                  {idx === 0 && <Cpu className="w-6 h-6 text-[#EA580C] group-hover:text-white" />}
                  {idx === 1 && <Sparkles className="w-6 h-6 text-[#9D2575] group-hover:text-white" />}
                  {idx === 2 && <Clock className="w-6 h-6 text-[#EA580C] group-hover:text-white" />}
                  {idx === 3 && <Palette className="w-6 h-6 text-[#9D2575] group-hover:text-white" />}
                </div>

                <span className="text-[10px] font-bold text-[#EA580C] uppercase tracking-wider block mb-1">
                  {strength.subtitle}
                </span>

                <h3 className="text-lg font-black text-[#0F172A] font-heading mb-2">
                  {strength.title}
                </h3>

                <p className="text-xs text-[#64748B] leading-relaxed">
                  {strength.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E7E5E4] flex items-center gap-1 text-xs font-bold text-[#0F172A]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>Standard Guarantee</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. GALLERY WORKSPACE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest bg-[#EA580C]/10 px-3.5 py-1 rounded-full border border-[#FDBA74]/40">
              Visual Tour
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] font-heading mt-3">
              Gallery & Factory Preview
            </h2>
          </div>

          <button
            onClick={() => onNavigate("gallery")}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0F172A] hover:text-[#EA580C] transition-colors cursor-pointer"
          >
            <span>View All 33 High-Res Photos</span>
            <ArrowRight className="w-4 h-4 text-[#EA580C]" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryPreviews.map((gItem) => (
            <div
              key={gItem.id}
              onClick={() => onNavigate("gallery")}
              className="rounded-3xl overflow-hidden border border-[#E7E5E4] bg-[#FFFFFF] shadow-xs group hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="h-52 overflow-hidden relative bg-[#F5F5F4]">
                <img
                  src={gItem.image}
                  alt={gItem.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-xs text-[#0F172A] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#E7E5E4]">
                  {gItem.categoryLabel}
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-sm font-bold text-[#0F172A] font-heading group-hover:text-[#EA580C] transition-colors line-clamp-1">
                  {gItem.title}
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  {gItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest bg-[#EA580C]/10 px-3.5 py-1 rounded-full border border-[#FDBA74]/40">
            Wholesale Buyer Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Quick answers regarding pricing, minimum order quantities, custom branding, and shipping.
          </p>
        </div>

        <div className="space-y-3 pt-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] rounded-2xl border border-[#E7E5E4] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAFAF9] transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] font-heading">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#EA580C] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#F1F5F9] pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. HIGH-CONVERTING B2B WHOLESALE CONTACT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 text-[#0F172A] relative overflow-hidden border border-[#E7E5E4] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/10 border border-[#FDBA74]/40 text-xs font-bold text-[#EA580C]">
                <span>॥ Jay Shree Krishna ॥</span>
                <span>•</span>
                <span>Ahmedabad 382430</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0F172A]">
                Ready to Upgrade Your Paper Cup Supply Chain?
              </h2>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-2xl">
                Partner directly with Radhe Dispoworld for unbeatable direct wholesale factory rates, guaranteed zero-leak virgin board, and prompt pan-India dispatch. Contact founder <strong>Purv Patel</strong> today.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate("contact")}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#9D2575] text-white rounded-2xl text-sm font-extrabold shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Request Custom Bulk Quote</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <a
                  href="https://wa.me/918980005230?text=Hello%20Purv%20Patel%2C%20I%20want%20to%20place%20a%20wholesale%20order%20with%20Radhe%20Dispoworld."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 bg-[#25D366] text-[#0F172A] rounded-2xl text-sm font-black flex items-center justify-center gap-2 hover:bg-[#20BD5A] transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WhatsApp: +91 89800 05230</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] space-y-4">
              <div className="text-xs font-black text-[#0F172A] uppercase tracking-wider">
                Direct Factory Desk
              </div>

              <div className="space-y-2.5 text-xs text-[#0F172A] font-semibold">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>Ahmedabad, Gujarat – 382430</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>+91 89800 05230 (Purv Patel)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#9D2575] shrink-0" />
                  <span>radhedispoworld@gmail.com</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E7E5E4] text-[11px] text-[#64748B]">
                Operating Mon - Sat: 9:00 AM – 8:00 PM IST
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
