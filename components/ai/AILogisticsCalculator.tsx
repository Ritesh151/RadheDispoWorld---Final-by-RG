"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS_DATA, Product } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Package,
  Truck,
  Box,
  Layers,
  Scale,
  Clock,
  Sparkles,
  MapPin,
  Tag,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function AILogisticsCalculator() {
  // Only cup & box products with packing info
  const eligibleProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => p.category !== "Machines");
  }, []);

  const [selectedProductId, setSelectedProductId] = useState<number | string>(eligibleProducts[0]?.id || 1);
  const [totalCups, setTotalCups] = useState<number>(50000);
  const [destinationState, setDestinationState] = useState<string>("Gujarat (Local)");

  const selectedProduct = useMemo(() => {
    return eligibleProducts.find((p) => p.id === selectedProductId) || eligibleProducts[0];
  }, [selectedProductId, eligibleProducts]);

  const pscPerBox = parseInt(selectedProduct.pscPerBox || "9380") || 9380;
  const bharati = parseInt(selectedProduct.Bharati || "35") || 35;
  const packetsPerBox = parseInt(selectedProduct.Packet || "268") || 268;

  // Real-time calculations
  const totalMasterBoxes = Math.max(1, Math.ceil(totalCups / pscPerBox));
  const exactPiecesDelivered = totalMasterBoxes * pscPerBox;
  const totalPackets = totalMasterBoxes * packetsPerBox;

  // Approximate weight: ~3.2g to 6.5g per cup + carton tare weight
  const estCupWeightGrams = selectedProduct.category.includes("250")
    ? 5.8
    : selectedProduct.category.includes("200")
    ? 4.9
    : selectedProduct.category.includes("100")
    ? 3.8
    : 3.1;

  const totalNetWeightKg = ((exactPiecesDelivered * estCupWeightGrams) / 1000).toFixed(1);
  const totalGrossWeightKg = (parseFloat(totalNetWeightKg) + totalMasterBoxes * 1.4).toFixed(1);
  const estCBM = (totalMasterBoxes * 0.082).toFixed(2); // ~0.082 m3 per standard 5-ply master carton

  // Estimated Pricing
  const ratePerCup = parseFloat(selectedProduct.rate?.replace(/[^0-9.]/g, "") || "0.2225") || 0.2225;
  const totalEstimatedCost = Math.round(exactPiecesDelivered * ratePerCup);

  const states = [
    { name: "Gujarat (Local - Ahmedabad)", days: "Same Day / 24 Hours", transitRate: "Express Local" },
    { name: "Maharashtra (Mumbai, Pune)", days: "1 - 2 Business Days", transitRate: "Direct Western Corridor" },
    { name: "Rajasthan (Jaipur, Jodhpur)", days: "1 - 2 Business Days", transitRate: "Direct North Hub" },
    { name: "Delhi - NCR & Haryana", days: "2 - 3 Business Days", transitRate: "National Highway Hub" },
    { name: "Madhya Pradesh (Indore, Bhopal)", days: "2 Business Days", transitRate: "Central Logistics Corridor" },
    { name: "South India (Karnataka, TN, AP)", days: "3 - 4 Business Days", transitRate: "Palletized Express Freight" },
    { name: "East & North-East India", days: "4 - 5 Business Days", transitRate: "Pan-India Dedicated Logistics" },
  ];

  const selectedStateInfo = states.find((s) => s.name.startsWith(destinationState.split(" ")[0])) || states[0];

  const whatsappMessage = encodeURIComponent(
    `Hello Purv Patel, I used the AI Logistics Calculator for "${selectedProduct.name}". Requirement: ${totalMasterBoxes} Master Cartons (${exactPiecesDelivered.toLocaleString()} Pcs) to ${destinationState}. Estimated Total: ₹${totalEstimatedCost.toLocaleString()}. Please confirm freight & dispatch.`
  );

  return (
    <div className="bg-[#FFFFFF] border border-[#E7E5E4] rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -left-24 -top-24 w-80 h-80 bg-gradient-to-br from-[#0284C7]/15 via-[#EA580C]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E5E4] mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0284C7] to-[#EA580C] text-white flex items-center justify-center shadow-md shrink-0">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-[10px] font-black uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3" />
              <span>AI Wholesale Logistics Engine</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] font-heading">
              AI Master Carton & Transport Simulator
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-[#16A34A] bg-[#DCFCE7] px-3.5 py-1.5 rounded-2xl border border-[#BBF7D0]">
          <ShieldCheck className="w-4 h-4" />
          <span>Real-time Freight Matrix Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Input Configuration Form */}
        <div className="lg:col-span-6 space-y-6 bg-[#FAFAF9] p-6 rounded-3xl border border-[#E7E5E4]">
          
          {/* Product Select */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-[#0F172A] flex items-center justify-between">
              <span>Select Paper Cup Size / Product</span>
              <span className="text-[#EA580C] text-[11px] font-bold">{selectedProduct.rateOfPackets || "₹ 8.00 / Pkt"}</span>
            </label>
            <select
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(Number(e.target.value) || e.target.value)}
              className="w-full bg-white px-4 py-3 rounded-2xl border border-[#E7E5E4] text-xs font-bold text-[#0F172A] focus:outline-hidden focus:border-[#EA580C] cursor-pointer shadow-2xs"
            >
              {eligibleProducts.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.category}) — {p.rateOfPackets || `₹${p.rate}`}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity Slider */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
                Required Cup Quantity
              </label>
              <span className="text-sm font-black text-[#EA580C] bg-white px-3 py-1 rounded-xl border border-[#E7E5E4] shadow-2xs">
                {totalCups.toLocaleString()} Pcs
              </span>
            </div>

            <input
              type="range"
              min={5000}
              max={300000}
              step={5000}
              value={totalCups}
              onChange={(e) => setTotalCups(Number(e.target.value))}
              className="w-full h-2.5 bg-white rounded-lg appearance-none cursor-pointer accent-[#EA580C] border border-[#E7E5E4]"
            />

            <div className="flex items-center justify-between text-[10px] font-bold text-[#64748B]">
              <span>5,000 Pcs (Sample)</span>
              <span>50,000 Pcs (Standard)</span>
              <span>300,000+ Pcs (Truckload)</span>
            </div>
          </div>

          {/* Destination State */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-wider text-[#0F172A] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Dispatch Destination (From Ahmedabad)</span>
            </label>
            <select
              value={destinationState}
              onChange={(e) => setDestinationState(e.target.value)}
              className="w-full bg-white px-4 py-3 rounded-2xl border border-[#E7E5E4] text-xs font-bold text-[#0F172A] focus:outline-hidden focus:border-[#EA580C] cursor-pointer shadow-2xs"
            >
              {states.map((s, idx) => (
                <option key={idx} value={s.name}>
                  {s.name} • ETA: {s.days}
                </option>
              ))}
            </select>
          </div>

          {/* Quick Presets */}
          <div className="pt-2">
            <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-2">
              Quick Volume Presets:
            </span>
            <div className="flex flex-wrap gap-2">
              {[10000, 25000, 50000, 100000, 200000].map((qty) => (
                <button
                  key={qty}
                  onClick={() => setTotalCups(qty)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    totalCups === qty
                      ? "bg-[#EA580C] text-white shadow-xs"
                      : "bg-white text-[#0F172A] border border-[#E7E5E4] hover:border-[#EA580C]/50"
                  }`}
                >
                  {(qty / 1000).toFixed(0)}k Cups
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Simulation & 3D Pallet Matrix Output */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Main Master Carton Card */}
          <div className="bg-[#FFFFFF] text-[#0F172A] p-6 sm:p-7 rounded-3xl border border-[#E7E5E4] shadow-xs relative overflow-hidden space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-[#E7E5E4]">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#EA580C] block">
                  Packaging Specification
                </span>
                <h3 className="text-xl font-black font-heading text-[#0F172A]">
                  {totalMasterBoxes} Master Corrugated Boxes
                </h3>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[#EA580C]/10 border border-[#FDBA74]/40 flex items-center justify-center text-[#EA580C] text-2xl">
                📦
              </div>
            </div>

            {/* Matrix Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4]">
                <span className="text-[10px] text-[#64748B] font-semibold block">Total Pieces</span>
                <span className="text-base font-black text-[#0F172A]">{exactPiecesDelivered.toLocaleString()}</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4]">
                <span className="text-[10px] text-[#64748B] font-semibold block">Total Packets</span>
                <span className="text-base font-black text-[#0F172A]">{totalPackets.toLocaleString()}</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4]">
                <span className="text-[10px] text-[#64748B] font-semibold block">Gross Weight</span>
                <span className="text-base font-black text-[#EA580C]">{totalGrossWeightKg} kg</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4]">
                <span className="text-[10px] text-[#64748B] font-semibold block">Total Volume</span>
                <span className="text-base font-black text-[#EA580C]">{estCBM} CBM</span>
              </div>
            </div>

            {/* Estimated Invoice Amount */}
            <div className="pt-2 flex items-center justify-between border-t border-[#E7E5E4]">
              <div>
                <span className="text-[10px] text-[#64748B] font-semibold block">Estimated Wholesale Value</span>
                <span className="text-2xl font-black text-[#0F172A] font-heading">
                  ₹ {totalEstimatedCost.toLocaleString()}
                </span>
                <span className="text-[10px] text-[#64748B] block">*Excluding GST & Transit Freight</span>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-[#64748B] font-semibold block">Bharati / Packet</span>
                <span className="text-sm font-black text-[#EA580C]">
                  {bharati} Pcs / Pkt
                </span>
              </div>
            </div>
          </div>

          {/* Delivery & Dispatch Timeline Pill */}
          <div className="bg-[#FAFAF9] p-4 rounded-2xl border border-[#E7E5E4] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#0284C7]/10 text-[#0284C7] flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-[#0F172A] block">Ahmedabad Plant Dispatch ETA</span>
                <span className="text-[#64748B] text-[11px]">{selectedStateInfo.days} ({selectedStateInfo.transitRate})</span>
              </div>
            </div>

            <span className="text-[10px] font-black uppercase text-[#16A34A] bg-[#DCFCE7] px-2.5 py-1 rounded-md">
              Pallet Ready
            </span>
          </div>

          {/* 1-Click WhatsApp Logistics Dispatch Order */}
          <a
            href={`https://wa.me/918980005230?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white text-xs font-black shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Confirm Logistics & Order on WhatsApp</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

        </div>

      </div>

    </div>
  );
}
