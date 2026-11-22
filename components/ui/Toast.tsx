"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, Sparkles } from "lucide-react";

interface ToastProps {
  message: string | null;
  onClose: () => void;
  onEnquire?: (name: string) => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[9999] max-w-md bg-[#FFFFFF] border border-[#E7E5E4] rounded-2xl shadow-xl p-4 flex items-center gap-3 text-xs text-[#0F172A]"
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#9D2575] flex items-center justify-center text-white shrink-0 shadow-xs">
          <Sparkles className="w-4 h-4" />
        </div>
        <p className="font-semibold flex-1 leading-snug">{message}</p>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F5F5F4] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
