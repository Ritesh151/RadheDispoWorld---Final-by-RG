"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  PhoneCall,
  Sparkles,
  ChevronRight,
  MessageSquare,
  Home,
  Layers,
  Building2,
  Image as ImageIcon,
  Send,
  ShieldCheck,
  Zap,
  ArrowRight
} from "lucide-react";

export type NavTab = "home" | "products" | "about" | "gallery" | "contact";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  interface NavItem {
    href: string;
    label: string;
    icon: React.ElementType;
    badge?: string;
  }

  const navItems: NavItem[] = [
    { href: "/", label: "Home", icon: Home },
    { href: "/products", label: "Products", icon: Layers },
    { href: "/about", label: "About Us", icon: Building2 },
    { href: "/gallery", label: "Gallery", icon: ImageIcon },
    { href: "/contact", label: "Contact", icon: Send },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      
      {/* 1. TOP UTILITY & STATUS BAR */}
      <div
        className={`bg-[#FAFAF9] text-[#0F172A] text-[11px] sm:text-xs transition-all duration-300 border-b border-[#E7E5E4] ${
          scrolled ? "py-1" : "py-1.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between font-medium">
          
          {/* Left: Devotional & Factory Live Status */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFFFFF] text-[#EA580C] font-bold text-[10px] uppercase tracking-wider border border-[#FDBA74]/50 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#EA580C]" />
              <span>॥ Jay Shree Krishna ॥</span>
            </span>

            <div className="hidden md:flex items-center gap-2 text-[#64748B] text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
              <span>Capacity: 500k+ Cups/Day</span>
              <span className="text-[#CBD5E1]">•</span>
              <span className="text-[#9D2575] font-bold">Since 2018</span>
            </div>
          </div>

          {/* Right: Direct Contact & Certifications */}
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-[#64748B]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9D2575]" />
              <span>100% Food-Grade Plant</span>
            </span>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918980005230"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-[#15803D] hover:text-emerald-700 font-semibold transition-colors"
              >
                <MessageSquare className="w-3 h-3 text-[#16A34A]" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+918980005230"
                className="flex items-center gap-1.5 font-bold text-[#0F172A] hover:text-[#EA580C] transition-colors group"
              >
                <span className="p-1 rounded-full bg-[#FFFFFF] border border-[#E7E5E4] group-hover:border-[#EA580C]/40 transition-colors">
                  <PhoneCall className="w-3 h-3 text-[#EA580C]" />
                </span>
                <span>+91 89800 05230</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 2. MAIN HEADER BAR */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FFFFFF]/95 backdrop-blur-xl shadow-sm border-b border-[#E2E8F0] py-2.5"
            : "bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E2E8F0]/80 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Official Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-left focus:outline-hidden group cursor-pointer select-none"
            aria-label="Radhe Dispoworld Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white p-1 border border-[#E2E8F0] shadow-xs flex items-center justify-center transition-all duration-300 group-hover:border-[#EA580C]/50 group-hover:shadow-md">
              <Image
                src="/logo.png"
                alt="Radhe Dispoworld Logo"
                width={48}
                height={48}
                className="object-contain w-full h-full transform group-hover:scale-105 transition-transform"
                priority
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0F172A] font-heading leading-none">
                  Radhe <span className="text-[#EA580C]">Dispo</span><span className="text-[#9D2575]">world</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded-md bg-[#DC2626]/10 text-[#DC2626] font-extrabold text-[9px] uppercase tracking-wider border border-[#DC2626]/20">
                  Since 2018
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[9px] font-bold text-[#64748B] tracking-wider uppercase">
                  Paper Cup Manufacturer
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#F5F5F4] p-1.5 rounded-2xl border border-[#E7E5E4] shadow-2xs">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 lg:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer focus:outline-hidden ${
                    isActive
                      ? "text-[#0F172A]"
                      : "text-[#64748B] hover:text-[#0F172A]"
                  }`}
                >
                  {/* Active Indicator Spring Background */}
                  {isActive && (
                    <motion.div
                      layoutId="navTabActiveBrandRoute"
                      className="absolute inset-0 bg-[#FFFFFF] rounded-xl shadow-xs border border-[#E2E8F0]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? "text-[#EA580C]" : "text-[#64748B]"}`} />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.2 rounded-full bg-gradient-to-r from-[#EA580C]/10 to-[#9D2575]/10 text-[#EA580C] text-[9px] font-black border border-[#FDBA74]/40">
                        {item.badge}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="relative group overflow-hidden bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#9D2575] text-white px-5 py-2.5 rounded-xl text-xs font-extrabold shadow-sm hover:shadow-md hover:opacity-95 transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-2"
            >
              <div className="absolute inset-0 w-1/3 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-400 transition-transform duration-700 ease-out" />
              <Sparkles className="w-3.5 h-3.5 text-white group-hover:rotate-12 transition-transform" />
              <span>Get Bulk Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button + Quick Quote */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white px-3 py-2 rounded-xl text-[11px] font-bold active:scale-95 transition-transform cursor-pointer shadow-xs"
            >
              <Sparkles className="w-3 h-3" />
              <span>Quote</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F5F5F4] active:scale-95 focus:outline-hidden transition-all cursor-pointer shadow-2xs"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#EA580C]" /> : <Menu className="w-5 h-5 text-[#0F172A]" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. MOBILE SLIDE-OVER DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0F172A]/40 backdrop-blur-xs md:hidden flex justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="w-full max-w-[320px] sm:max-w-sm h-full bg-[#FAFAF9] p-5 shadow-2xl flex flex-col justify-between border-l border-[#E2E8F0] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Top */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#E2E8F0] p-1 flex items-center justify-center shadow-2xs">
                      <Image
                        src="/logo.png"
                        alt="Radhe Dispoworld Logo"
                        width={44}
                        height={44}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="font-black text-base text-[#0F172A] font-heading block leading-none">
                        Radhe <span className="text-[#EA580C]">Dispo</span><span className="text-[#9D2575]">world</span>
                      </span>
                      <span className="text-[10px] font-extrabold text-[#DC2626] uppercase tracking-wider block mt-1">
                        SINCE 2018
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-[#E7E5E4] text-[#0F172A] hover:bg-[#D6D3D1] active:scale-95 transition-all cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Info Box */}
                <div className="mt-4 p-3 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C] shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] font-bold text-[#0F172A] leading-tight">Direct Factory Supply</p>
                      <p className="text-[10px] text-[#64748B]">Ahmedabad, Gujarat • Pan-India</p>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Navigation Items */}
                <nav className="mt-4 space-y-1.5">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#FFFFFF] text-[#0F172A] shadow-xs border border-[#EA580C]/40"
                            : "text-[#0F172A] hover:bg-[#FFFFFF] border border-transparent hover:border-[#E2E8F0]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              isActive
                                ? "bg-[#EA580C]/10 text-[#EA580C]"
                                : "bg-[#F5F5F4] text-[#64748B]"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold">{item.label}</span>
                              {item.badge && (
                                <span className="px-1.5 py-0.2 text-[9px] font-extrabold rounded-full bg-gradient-to-r from-[#EA580C]/10 to-[#9D2575]/10 text-[#EA580C] border border-[#FDBA74]/30">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isActive ? "text-[#EA580C] translate-x-0.5" : "text-[#94A3B8]"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-4 border-t border-[#E2E8F0] space-y-2.5">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#9D2575] text-white py-3 rounded-xl text-xs font-bold shadow-xs flex items-center justify-center gap-2 active:scale-98 transition-transform cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Request Bulk Quotation</span>
                </Link>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://wa.me/918980005230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366]/10 border border-[#25D366]/30 text-[#15803D] hover:bg-[#25D366]/20 py-2.5 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="tel:+918980005230"
                    className="bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F5F5F4] py-2.5 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>Call Sales</span>
                  </a>
                </div>

                <div className="pt-2 text-center">
                  <p className="text-[10px] text-[#64748B] font-medium flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#9D2575]" />
                    <span>100% Food-Grade Virgin Paperboard</span>
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
