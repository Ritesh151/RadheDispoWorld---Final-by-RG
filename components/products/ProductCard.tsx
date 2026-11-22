"use client";

import React from "react";
import Link from "next/link";
import { Product, getProductSlug } from "@/lib/data";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Package, Box, Tag, Gauge, Zap, MessageSquare, ShieldCheck, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onEnquire: (productName: string) => void;
}

export default function ProductCard({ product, onViewDetails, onEnquire }: ProductCardProps) {
  const isMachine = product.category === "Machines";
  const slug = getProductSlug(product);

  const whatsappMessage = encodeURIComponent(
    `Hello Purv Patel, I want to inquire about "${product.name}" (${product.categoryLabel || product.category}) from Radhe Dispoworld. Please share details.`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-[#FFFFFF] rounded-3xl border border-[#E7E5E4] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#EA580C]/40 transition-all duration-300 flex flex-col justify-between group relative"
    >
      {/* Top Badges */}
      <div className="absolute top-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between pointer-events-none">
        {product.isPopular ? (
          <div className="bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-white" />
            <span>Bestseller</span>
          </div>
        ) : (
          <div className="bg-[#FFFFFF]/90 backdrop-blur-md text-[#64748B] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#E7E5E4] shadow-2xs">
            Since 2018
          </div>
        )}

        <div className="bg-[#FFFFFF]/95 backdrop-blur-md text-[#0F172A] text-[10px] font-black px-2.5 py-1 rounded-full border border-[#E7E5E4] shadow-2xs">
          {product.categoryLabel || product.category}
        </div>
      </div>

      <div>
        {/* Product Image Stage */}
        <div
          onClick={() => onViewDetails(product)}
          className="relative h-56 sm:h-60 overflow-hidden bg-gradient-to-b from-[#F5F5F4] to-[#ECEAE8] cursor-pointer flex items-center justify-center p-3"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500 drop-shadow-sm"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>View Detailed Specs</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FDBA74]" />
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          
          {/* Price / Rate Pill */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            {product.rateOfPackets ? (
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#EA580C] bg-[#FFF7ED] px-3 py-1 rounded-xl border border-[#FDBA74]/40">
                <Tag className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>{product.rateOfPackets}</span>
              </div>
            ) : product.capacity ? (
              <div className="text-xs font-bold text-[#64748B] bg-[#FAFAF9] px-2.5 py-1 rounded-lg border border-[#E7E5E4]">
                Cap: <strong className="text-[#0F172A]">{product.capacity}</strong>
              </div>
            ) : null}

            {product.rate && !product.rateOfPackets?.includes(product.rate) && (
              <span className="text-[11px] text-[#64748B] font-medium bg-[#FAFAF9] px-2 py-0.5 rounded-md border border-[#E7E5E4]">
                Unit: <strong className="text-[#0F172A]">₹{product.rate}</strong>
              </span>
            )}
          </div>

          <h3 className="mb-1.5">
            <Link
              href={`/products/${slug}`}
              className="text-base font-black text-[#0F172A] font-heading hover:text-[#EA580C] transition-colors cursor-pointer line-clamp-1 block"
            >
              {product.name}
            </Link>
          </h3>

          <p className="text-xs text-[#64748B] leading-relaxed mb-4 line-clamp-2">
            {product.description || (isMachine ? product.Features : "100% Virgin Food-Grade Paper • Zero Leak Guarantee.")}
          </p>

          {/* Quick Specs Matrix */}
          {isMachine ? (
            <div className="space-y-1.5 mb-5 bg-[#FAFAF9] p-3 rounded-2xl border border-[#E7E5E4] text-xs text-[#0F172A]">
              {product.Speed && (
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B] flex items-center gap-1"><Gauge className="w-3.5 h-3.5 text-[#EA580C]" /> Speed:</span>
                  <span className="font-bold">{product.Speed}</span>
                </div>
              )}
              {product.Power && (
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B] flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-[#9D2575]" /> Power:</span>
                  <span className="font-bold">{product.Power}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-[#64748B] flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" /> Warranty:</span>
                <span className="font-bold text-[#16A34A]">{product.Warranty || "1 Year Parts"}</span>
              </div>
            </div>
          ) : (
            <div className="space-y-1.5 mb-5 bg-[#FAFAF9] p-3 rounded-2xl border border-[#E7E5E4] text-xs text-[#0F172A]">
              {product.Bharati && (
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B] flex items-center gap-1"><Package className="w-3.5 h-3.5 text-[#EA580C]" /> Bharati:</span>
                  <span className="font-bold">{product.Bharati} Pcs / Pkt</span>
                </div>
              )}
              {product.Packet && (
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B] flex items-center gap-1"><Box className="w-3.5 h-3.5 text-[#9D2575]" /> Packets / Box:</span>
                  <span className="font-bold">{product.Packet} Packets</span>
                </div>
              )}
              {product.pscPerBox && (
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B]">Total Pcs in Box:</span>
                  <span className="font-black text-[#0F172A]">{parseInt(product.pscPerBox).toLocaleString()} Pcs</span>
                </div>
              )}
              {!product.Bharati && product.gsm && (
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B]">Paper Weight:</span>
                  <span className="font-bold">{product.gsm}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="px-5 pb-5 pt-0 grid grid-cols-2 gap-2">
        <button
          onClick={() => onViewDetails(product)}
          className="py-2.5 px-3 rounded-xl border border-[#E7E5E4] text-xs font-bold text-[#0F172A] hover:bg-[#F5F5F4] hover:border-[#CBD5E1] transition-all cursor-pointer text-center"
        >
          View Specs
        </button>

        <a
          href={`https://wa.me/918980005230?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white text-xs font-bold shadow-xs hover:opacity-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 text-center"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Enquire</span>
        </a>
      </div>
    </motion.div>
  );
}
