import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  Award,
  Factory,
  Quote
} from "lucide-react";

import CompanyJourney from "@/components/about/CompanyJourney";
import { generateBreadcrumbsSchema, SITE_URL } from "@/lib/seo-schemas";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us - Founded & Managed by Purv Patel",
  description:
    "Learn about Radhe Dispoworld, established in 2018 in Ahmedabad, Gujarat under the leadership of Purv Patel. Discover our mission, touchless paper cup manufacturing, and sustainability commitment.",
  keywords: [
    "About Radhe Dispoworld",
    "Purv Patel Paper Cups",
    "Purv Patel Ahmedabad",
    "Paper Cup Manufacturer Profile",
    "Radhe Dispoworld History & Milestones",
    "Eco Friendly Disposable Factory Gujarat",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Radhe Dispoworld - Founded by Purv Patel",
    description:
      "Since 2018, Radhe Dispoworld has pioneered high-speed paper cup forming, zero-leak quality, and sustainable food packaging in Ahmedabad.",
    url: `${SITE_URL}/about`,
    images: [{ url: "/purv-patel.jpg", width: 800, height: 800, alt: "Purv Patel - Founder" }],
  },
};

export default function AboutPage() {
  const breadcrumbsSchema = generateBreadcrumbsSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Radhe Dispoworld",
    url: `${SITE_URL}/about`,
    description:
      "Company profile and manufacturing milestones of Radhe Dispoworld, founded by Purv Patel in 2018 in Ahmedabad, Gujarat.",
    mainEntity: {
      "@type": "Person",
      name: "Purv Patel",
      jobTitle: "Founder & Managing Director",
      worksFor: {
        "@type": "Organization",
        name: "Radhe Dispoworld",
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      {/* Visual Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: "About Us" }]} />
      
      {/* 1. HERO SECTION WITH FOUNDER PURV PATEL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E7E5E4] shadow-2xs text-xs font-bold text-[#0F172A]">
            <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
            <span className="text-[#EA580C]">Radhe Dispoworld</span>
            <span className="text-[#E7E5E4]">|</span>
            <span className="text-[#DC2626] font-extrabold uppercase">Since 2018</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] font-heading leading-[1.12]">
            Founded & Managed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-[#9D2575]">Purv Patel</span>
          </h1>

          <p className="text-base sm:text-lg text-[#0F172A] font-semibold leading-relaxed">
            Since 2018, Radhe Dispoworld has been delivering high-quality, eco-friendly paper cups from Ahmedabad, Gujarat.
          </p>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Under the blessings of <strong>॥ Jay Shree Krishna ॥</strong>, Radhe Dispoworld has pioneered precision engineering, zero-leak assurance, and touchless hygiene in disposable paper cup manufacturing for beverage chains, corporate hubs, cafes, and event caterers across India.
          </p>

          {/* Quick Contact Chips */}
          <div className="pt-2 flex flex-wrap gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#FFFFFF] border border-[#E7E5E4] text-xs font-bold text-[#0F172A] shadow-2xs">
              <MapPin className="w-4 h-4 text-[#EA580C]" />
              <span>Ahmedabad, Gujarat – 382430</span>
            </div>

            <a
              href="mailto:radhedispoworld@gmail.com"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#FFFFFF] border border-[#E7E5E4] text-xs font-bold text-[#0F172A] hover:text-[#9D2575] hover:border-[#9D2575]/40 transition-colors shadow-2xs"
            >
              <Mail className="w-4 h-4 text-[#9D2575]" />
              <span>radhedispoworld@gmail.com</span>
            </a>

            <a
              href="tel:+918980005230"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#FFFFFF] border border-[#E7E5E4] text-xs font-bold text-[#0F172A] hover:text-[#EA580C] hover:border-[#EA580C]/40 transition-colors shadow-2xs"
            >
              <Phone className="w-4 h-4 text-[#EA580C]" />
              <span>+91 89800 05230</span>
            </a>
          </div>

          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white text-xs font-bold shadow-md hover:opacity-95 transition-all cursor-pointer"
            >
              <span>Connect with Purv Patel</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Founder / Owner Photo Card */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden border border-[#E7E5E4] shadow-2xl bg-[#FFFFFF] p-3.5 group">
            <div className="h-96 sm:h-[480px] rounded-2xl overflow-hidden relative bg-[#F5F5F4]">
              <img
                src="/purv-patel.jpg"
                alt="Purv Patel - Founder & Managing Director of Radhe Dispoworld"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA580C] text-white text-[10px] font-black uppercase tracking-wider w-max mb-2 shadow-xs">
                  <Award className="w-3 h-3" />
                  <span>Founder & Managing Director</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-wide">
                  Purv Patel
                </h3>
                <p className="text-xs text-white/90 mt-1 font-medium">
                  Leading Radhe Dispoworld with excellence, innovation & sustainable manufacturing since 2018.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE PILLARS (Manufacturing, Customization, Sustainability) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Pillar 1: Manufacturing */}
        <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E7E5E4] shadow-xs space-y-4 hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center text-3xl border border-[#FDBA74]/30">
            🏭
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#EA580C] uppercase tracking-wider block mb-1">
              Pillar 01
            </span>
            <h3 className="text-2xl font-black text-[#0F172A] font-heading">
              Manufacturing
            </h3>
          </div>
          <p className="text-sm text-[#64748B] leading-relaxed">
            Premium disposable paper cups in multiple sizes. Engineered with high-speed automated forming lines and 100% virgin food-grade paperboard.
          </p>
        </div>

        {/* Pillar 2: Customization */}
        <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E7E5E4] shadow-xs space-y-4 hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-[#9D2575]/10 text-[#9D2575] flex items-center justify-center text-3xl border border-[#9D2575]/20">
            🎨
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#9D2575] uppercase tracking-wider block mb-1">
              Pillar 02
            </span>
            <h3 className="text-2xl font-black text-[#0F172A] font-heading">
              Customization
            </h3>
          </div>
          <p className="text-sm text-[#64748B] leading-relaxed">
            Logo printing & design-based production using high-definition flexo printing with odorless, food-safe aqueous inks for standout brand visibility.
          </p>
        </div>

        {/* Pillar 3: Sustainability */}
        <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E7E5E4] shadow-xs space-y-4 hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center text-3xl border border-[#16A34A]/20">
            🌱
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#16A34A] uppercase tracking-wider block mb-1">
              Pillar 03
            </span>
            <h3 className="text-2xl font-black text-[#0F172A] font-heading">
              Sustainability
            </h3>
          </div>
          <p className="text-sm text-[#64748B] leading-relaxed">
            Eco-friendly materials & processes compliant with global recyclable standards, replacing single-use plastic cups with bio-degradable paper solutions.
          </p>
        </div>

      </div>

      {/* 3. OUR JOURNEY (Interactive & Milestone Explorer) */}
      <CompanyJourney />

      {/* 4. FOUNDER'S VISION STATEMENT */}
      <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-gradient-to-r from-[#EA580C]/20 to-[#9D2575]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-6">
          <Quote className="w-10 h-10 text-[#EA580C] opacity-80" />
          
          <blockquote className="text-lg sm:text-xl font-medium leading-relaxed italic text-white/90">
            &ldquo;Our vision at Radhe Dispoworld is simple: deliver zero-defect, eco-friendly paper packaging that protects our environment while ensuring maximum hygiene and thermal durability for every hot and cold beverage across India.&rdquo;
          </blockquote>

          <div className="pt-2 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#EA580C] shrink-0">
              <img
                src="/purv-patel.jpg"
                alt="Purv Patel"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="text-base font-black font-heading text-white">Purv Patel</div>
              <div className="text-xs text-[#FDBA74] font-semibold">Founder & Managing Director • Radhe Dispoworld</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
