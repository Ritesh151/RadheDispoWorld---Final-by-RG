"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Sparkles, Heart, RefreshCw, MessageSquare, ExternalLink } from "lucide-react";

interface FooterProps {
  onReplaySplash?: () => void;
}

export default function Footer({ onReplaySplash }: FooterProps) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#F5F5F4] text-[#0F172A] relative overflow-hidden border-t border-[#E7E5E4] mt-auto">
      {/* Top Brand Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#9D2575]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand Info & Socials (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 shadow-xs border border-[#E7E5E4] flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Radhe Dispoworld Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-black text-[#0F172A] font-heading tracking-tight block">
                    Radhe <span className="text-[#EA580C]">Dispo</span><span className="text-[#9D2575]">world</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] font-bold text-[#EA580C] uppercase tracking-wider block">
                    ॥ Jay Shree Krishna ॥
                  </span>
                  <span className="text-[#CBD5E1]">•</span>
                  <span className="text-[10px] font-extrabold text-[#DC2626] uppercase">
                    Since 2018
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-sm">
              Radhe Dispoworld is Ahmedabad's premier paper cup manufacturing institution, founded & managed by <strong>Purv Patel</strong>. Delivering 100% food-grade virgin paper cups with zero-leak guarantee across India since 2018.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://wa.me/918980005230"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#E7E5E4] text-[#16A34A] hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center shadow-2xs"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/p/Radhe-Dispoworld-Ahmedabad-100086548599466/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#E7E5E4] text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all flex items-center justify-center shadow-2xs"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/radhe_group_ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#E7E5E4] text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all flex items-center justify-center shadow-2xs"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="mailto:radhedispoworld@gmail.com"
                className="w-9 h-9 rounded-xl bg-white border border-[#E7E5E4] text-[#EA580C] hover:bg-[#EA580C] hover:text-white transition-all flex items-center justify-center shadow-2xs"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider mb-4 font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#64748B] hover:text-[#EA580C] transition-colors capitalize flex items-center gap-1.5 cursor-pointer font-medium"
                  >
                    <span className="text-[#EA580C]">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Details (3 Cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider mb-4 font-heading">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#64748B]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span>Ahmedabad, Gujarat – 382430, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a href="tel:+918980005230" className="hover:text-[#EA580C] font-semibold text-[#0F172A] transition-colors">
                  +91 89800 05230
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#16A34A] shrink-0" />
                <a href="https://wa.me/918980005230" target="_blank" rel="noopener noreferrer" className="hover:text-[#16A34A] font-semibold text-[#0F172A] transition-colors">
                  +91 89800 05230 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#9D2575] shrink-0" />
                <a href="mailto:radhedispoworld@gmail.com" className="hover:text-[#9D2575] font-semibold text-[#0F172A] transition-colors">
                  radhedispoworld@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Mini Google Map Embed (3 Cols) */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider font-heading">
                Factory Location
              </h3>
              <a
                href="https://www.google.com/maps?ll=22.990157,72.745048&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=5630473849334354653"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#EA580C] hover:underline flex items-center gap-1 font-bold"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="w-full h-36 rounded-2xl overflow-hidden border border-[#E7E5E4] shadow-xs relative bg-white">
              <iframe
                title="Radhe Dispoworld Factory Location Map"
                src="https://maps.google.com/maps?q=22.990157,72.745048&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-[10px] text-[#64748B] mt-1.5 font-medium">
              📍 Ahmedabad, Gujarat – 382430 • Welcome for Plant Visits
            </p>
          </div>

        </div>

        {/* Popular Manufacturing Categories for SEO & Direct Navigation */}
        <div className="pt-8 pb-4 border-t border-[#E7E5E4]">
          <span className="text-[11px] font-black uppercase tracking-wider text-[#0F172A] block mb-3 font-heading">
            Popular Disposable Packaging & Machinery Categories:
          </span>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <Link
              href="/products?category=40+ML"
              className="px-3 py-1 bg-white rounded-lg border border-[#E7E5E4] text-[#64748B] hover:text-[#EA580C] hover:border-[#FDBA74] transition-colors"
            >
              40ml Tea Cups (Bharati 35)
            </Link>
            <Link
              href="/products?category=50+ML"
              className="px-3 py-1 bg-white rounded-lg border border-[#E7E5E4] text-[#64748B] hover:text-[#EA580C] hover:border-[#FDBA74] transition-colors"
            >
              50ml Paper Cups (Bharati 50)
            </Link>
            <Link
              href="/products?category=50+IC+WATI"
              className="px-3 py-1 bg-white rounded-lg border border-[#E7E5E4] text-[#64748B] hover:text-[#EA580C] hover:border-[#FDBA74] transition-colors"
            >
              50 IC Wati Ice Cream Cups
            </Link>
            <Link
              href="/products?category=65+ML"
              className="px-3 py-1 bg-white rounded-lg border border-[#E7E5E4] text-[#64748B] hover:text-[#EA580C] hover:border-[#FDBA74] transition-colors"
            >
              65ml Cutting Chai Cups
            </Link>
            <Link
              href="/products?category=75+ML"
              className="px-3 py-1 bg-white rounded-lg border border-[#E7E5E4] text-[#64748B] hover:text-[#EA580C] hover:border-[#FDBA74] transition-colors"
            >
              75ml Disposable Paper Cups
            </Link>
            <Link
              href="/products?category=100+ML"
              className="px-3 py-1 bg-white rounded-lg border border-[#E7E5E4] text-[#64748B] hover:text-[#EA580C] hover:border-[#FDBA74] transition-colors"
            >
              100ml Ice Cream Wati
            </Link>
            <Link
              href="/products?category=180+ML"
              className="px-3 py-1 bg-white rounded-lg border border-[#E7E5E4] text-[#64748B] hover:text-[#EA580C] hover:border-[#FDBA74] transition-colors"
            >
              180ml Coffee Cups
            </Link>
            <Link
              href="/products?category=200+ML"
              className="px-3 py-1 bg-white rounded-lg border border-[#E7E5E4] text-[#64748B] hover:text-[#EA580C] hover:border-[#FDBA74] transition-colors"
            >
              200ml Tea & Coffee Cups
            </Link>
            <Link
              href="/products?category=250+ML"
              className="px-3 py-1 bg-white rounded-lg border border-[#E7E5E4] text-[#64748B] hover:text-[#EA580C] hover:border-[#FDBA74] transition-colors"
            >
              250ml Cold Drink Ripple Cups
            </Link>
            <Link
              href="/products?category=Machines"
              className="px-3 py-1 bg-[#FFF7ED] rounded-lg border border-[#FDBA74]/50 text-[#EA580C] font-bold hover:bg-[#EA580C] hover:text-white transition-colors"
            >
              Automatic Paper Cup Forming Machines
            </Link>
          </div>
        </div>

        {/* Bottom Copyright & Developer Credit */}
        <div className="pt-6 border-t border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Radhe Dispoworld. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#EA580C] font-bold">॥ Jay Shree Krishna ॥</span>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <div className="flex items-center gap-1.5 text-[#0F172A] font-semibold bg-white px-3.5 py-1.5 rounded-xl border border-[#E7E5E4] shadow-2xs">
              <span>Design & Develop by</span>
              <a
                href="https://wa.me/918980614160?text=Hello%20Ritesh%20Gajjar%2C%20I%20saw%20your%20website%20design%20%26%20development%20work%20on%20Radhe%20Dispoworld."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EA580C] hover:text-[#9D2575] font-black underline decoration-dotted transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Ritesh Gajjar</span>
              </a>
            </div>

            {onReplaySplash && (
              <>
                <span className="text-[#CBD5E1]">|</span>
                <button
                  onClick={onReplaySplash}
                  className="inline-flex items-center gap-1.5 text-xs text-[#0F172A] hover:text-[#EA580C] font-semibold transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3 text-[#EA580C]" />
                  <span>Replay Intro</span>
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}
