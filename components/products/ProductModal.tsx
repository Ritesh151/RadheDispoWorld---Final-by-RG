"use client";

import React from "react";
import Link from "next/link";
import { Product, getProductSlug } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ShieldCheck, Tag, Package, Box, Gauge, Zap, Send, ExternalLink } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (productName: string) => void;
}

export default function ProductModal({ product, onClose, onEnquire }: ProductModalProps) {
  if (!product) return null;

  const isMachine = product.category === "Machines";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F172A]/50 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#FAFAF9] rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden z-10 border border-[#E7E5E4] max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E7E5E4] bg-[#FFFFFF]">
            <div className="flex items-center gap-3">
              <span className="bg-[#EA580C]/10 text-[#EA580C] text-xs font-bold px-3 py-1 rounded-full border border-[#FDBA74]/40">
                {product.categoryLabel || product.category}
              </span>
              {product.rateOfPackets && (
                <span className="text-xs font-bold text-[#EA580C] bg-[#FFF7ED] px-2.5 py-1 rounded-lg border border-[#FDBA74]/40 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-[#EA580C]" />
                  <span>{product.rateOfPackets}</span>
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#F5F5F4] text-[#0F172A] hover:bg-[#E7E5E4] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="rounded-2xl overflow-hidden bg-[#F5F5F4] border border-[#E7E5E4] shadow-inner">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 sm:h-72 object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-black text-[#0F172A] font-heading mb-1">
                    {product.name}
                  </h2>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {product.description || (isMachine ? product.Features : "High precision manufactured food-grade product.")}
                  </p>
                </div>

                {isMachine ? (
                  <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#E7E5E4] space-y-2 text-xs">
                    {product.rateOfPackets && (
                      <div className="flex justify-between py-1 border-b border-[#E7E5E4]">
                        <span className="text-[#64748B]">Machine Price</span>
                        <span className="font-black text-[#EA580C]">{product.rateOfPackets}</span>
                      </div>
                    )}
                    {product.Speed && (
                      <div className="flex justify-between py-1 border-b border-[#E7E5E4]">
                        <span className="text-[#64748B]">Production Speed</span>
                        <span className="font-bold text-[#0F172A]">{product.Speed}</span>
                      </div>
                    )}
                    {product.Power && (
                      <div className="flex justify-between py-1 border-b border-[#E7E5E4]">
                        <span className="text-[#64748B]">Power Requirement</span>
                        <span className="font-bold text-[#0F172A]">{product.Power}</span>
                      </div>
                    )}
                    {product.Weight && (
                      <div className="flex justify-between py-1 border-b border-[#E7E5E4]">
                        <span className="text-[#64748B]">Chassis Weight</span>
                        <span className="font-bold text-[#0F172A]">{product.Weight}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-1">
                      <span className="text-[#64748B]">Warranty</span>
                      <span className="font-bold text-[#16A34A]">{product.Warranty || "1 Year Spare Part Warranty"}</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#E7E5E4] space-y-2 text-xs">
                    {product.rateOfPackets && (
                      <div className="flex justify-between py-1 border-b border-[#E7E5E4]">
                        <span className="text-[#64748B]">Packet Rate</span>
                        <span className="font-black text-[#EA580C]">{product.rateOfPackets}</span>
                      </div>
                    )}
                    {product.rate && (
                      <div className="flex justify-between py-1 border-b border-[#E7E5E4]">
                        <span className="text-[#64748B]">Unit Rate / Cup</span>
                        <span className="font-bold text-[#0F172A]">₹{product.rate}</span>
                      </div>
                    )}
                    {product.Bharati && (
                      <div className="flex justify-between py-1 border-b border-[#E7E5E4]">
                        <span className="text-[#64748B]">Bharati (Pcs / Pkt)</span>
                        <span className="font-bold text-[#0F172A]">{product.Bharati} Pcs</span>
                      </div>
                    )}
                    {product.Packet && (
                      <div className="flex justify-between py-1 border-b border-[#E7E5E4]">
                        <span className="text-[#64748B]">Packets per Master Box</span>
                        <span className="font-bold text-[#0F172A]">{product.Packet} Packets</span>
                      </div>
                    )}
                    {product.pscPerBox && (
                      <div className="flex justify-between py-1 border-b border-[#E7E5E4]">
                        <span className="text-[#64748B]">Total Pcs in Master Box</span>
                        <span className="font-bold text-[#0F172A]">{parseInt(product.pscPerBox).toLocaleString()} Pcs</span>
                      </div>
                    )}
                    {product.gsm && (
                      <div className="flex justify-between py-1 border-b border-[#E7E5E4]">
                        <span className="text-[#64748B]">Paper Grammage (GSM)</span>
                        <span className="font-bold text-[#0F172A]">{product.gsm}</span>
                      </div>
                    )}
                    {product.coating && (
                      <div className="flex justify-between py-1">
                        <span className="text-[#64748B]">Barrier Coating</span>
                        <span className="font-bold text-[#0F172A]">{product.coating}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Machine Detailed Text or Features */}
            {product.Text && (
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E7E5E4]">
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                  Machinery Specifications & Capabilities
                </h4>
                <div className="whitespace-pre-line text-xs text-[#0F172A] leading-relaxed font-medium bg-[#F5F5F4] p-3 rounded-xl border border-[#E7E5E4]">
                  {product.Text}
                </div>
              </div>
            )}

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-3">
                  Key Technical Features & Assurance
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E7E5E4] text-xs font-medium text-[#0F172A]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 border-t border-[#E7E5E4] bg-[#FFFFFF] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-[#64748B]">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
              <span>100% Virgin Food-Grade Paperboard</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <Link
                href={`/products/${getProductSlug(product)}`}
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-[#E7E5E4] text-xs font-bold text-[#0F172A] hover:bg-[#F5F5F4] transition-colors flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Full Page</span>
              </Link>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-[#E7E5E4] text-xs font-bold text-[#64748B] hover:bg-[#F5F5F4] transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onEnquire(`${product.name} (${product.rateOfPackets || product.category})`);
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white text-xs font-bold shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Request Quotation</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
