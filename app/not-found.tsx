import React from "react";
import Link from "next/link";
import { Sparkles, Home, ArrowRight, Layers } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#E7E5E4] shadow-sm">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/10 text-[#EA580C] text-xs font-bold uppercase tracking-wider border border-[#FDBA74]/40">
          <Sparkles className="w-3.5 h-3.5" />
          <span>॥ Jay Shree Krishna ॥</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-[#9D2575] font-heading">
            404
          </h1>
          <h2 className="text-2xl font-black text-[#0F172A] font-heading">
            Page Not Found
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#9D2575] text-white text-xs font-bold shadow-xs hover:opacity-95 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FAFAF9] text-[#0F172A] text-xs font-bold border border-[#E7E5E4] hover:bg-[#F5F5F4] transition-colors flex items-center justify-center gap-2"
          >
            <Layers className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Explore Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
