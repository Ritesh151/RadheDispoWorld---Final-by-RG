"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("॥ Jay Shree Krishna ॥");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 14) + 8;
        if (next > 30 && next < 60) {
          setStatusText("100% Food-Grade Paper Cup Manufacturing");
        } else if (next >= 60 && next < 90) {
          setStatusText("Automated Cleanroom Production • Ahmedabad");
        } else if (next >= 90) {
          setStatusText("Welcome to Radhe Dispoworld");
        }
        return next > 100 ? 100 : next;
      });
    }, 140);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAFAF9] px-6 select-none overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#9D2575]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Frame Corners */}
      <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-[#EA580C]/40 rounded-tl-xl" />
      <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-[#9D2575]/40 rounded-tr-xl" />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-[#EA580C]/40 rounded-bl-xl" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-[#9D2575]/40 rounded-br-xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-md w-full relative z-10"
      >
        {/* Krishna Sacred Greeting Tag */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#FDBA74]/50 shadow-xs text-[#EA580C] text-xs font-bold tracking-wider uppercase mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
          <span>॥ Jay Shree Krishna ॥</span>
          <Sparkles className="w-3.5 h-3.5 text-[#9D2575]" />
        </motion.div>

        {/* Animated Official Brand Logo */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="relative mb-6"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#FFFFFF] p-3 shadow-xl border border-[#E7E5E4] flex items-center justify-center relative">
            <Image
              src="/logo.png"
              alt="Radhe Dispoworld Logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Company Title */}
        <motion.div
          role="heading"
          aria-level={2}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] mb-1 font-heading"
        >
          Radhe <span className="text-[#EA580C]">Dispo</span><span className="text-[#9D2575]">world</span>
        </motion.div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="text-xs font-bold tracking-widest text-[#64748B] uppercase">
            Paper Cup Manufacturing
          </span>
          <span className="w-1 h-1 rounded-full bg-[#EA580C]" />
          <span className="text-xs font-extrabold text-[#DC2626] uppercase">
            Since 2018
          </span>
        </motion.div>

        {/* Progress Bar & Dynamic Status */}
        <div className="w-full bg-[#E7E5E4] h-2 rounded-full overflow-hidden p-0.5 mb-3 shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#9D2575] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="w-full flex items-center justify-between text-xs text-[#64748B] font-semibold px-1">
          <span className="truncate max-w-[240px] text-left">{statusText}</span>
          <span className="font-extrabold text-[#0F172A]">{progress}%</span>
        </div>

        {/* Skip Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.6 }}
          onClick={onComplete}
          className="mt-8 text-xs font-bold text-[#0F172A] hover:text-[#EA580C] flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Skip to Website</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#EA580C]" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
