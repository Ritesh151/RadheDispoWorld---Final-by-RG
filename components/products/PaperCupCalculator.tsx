"use client";

import React, { useState } from "react";
import { Calculator, Sparkles, Box, Weight, ShieldCheck, ArrowRight } from "lucide-react";

interface CalculatorProps {
  onQuoteRequest: (summary: string) => void;
}

export default function PaperCupCalculator({ onQuoteRequest }: CalculatorProps) {
  const [selectedSize, setSelectedSize] = useState("200ml");
  const [cupType, setCupType] = useState<"single" | "double" | "ripple">("single");
  const [quantity, setQuantity] = useState(25000);
  const [customPrint, setCustomPrint] = useState(true);

  const cupsPerCarton = selectedSize === "150ml" ? 2000 : 1000;
  const cartonsNeeded = Math.ceil(quantity / cupsPerCarton);
  const weightPer1k = cupType === "single" ? 4.5 : cupType === "double" ? 7.8 : 8.5;
  const approxWeightKg = Math.round((quantity / 1000) * weightPer1k);
  const recommendedGSM = cupType === "single" ? "210 - 230 GSM" : cupType === "double" ? "280 GSM + 250 GSM" : "280 GSM + Flute";

  const handleSendQuote = () => {
    const summary = `${selectedSize} ${cupType.toUpperCase()} Wall Paper Cups | Qty: ${quantity.toLocaleString()} Pcs | Print: ${customPrint ? "Custom Branded Logo" : "Plain / Generic"} | Approx Cartons: ${cartonsNeeded}`;
    onQuoteRequest(summary);
  };

  return (
    <div className="bg-[#FFFFFF] rounded-3xl border border-[#E7E5E4] p-6 sm:p-8 shadow-sm relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E7E5E4]">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA580C]/10 text-[#EA580C] text-xs font-bold uppercase tracking-wider mb-2 border border-[#FDBA74]/40">
              <Calculator className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Interactive Bulk Planning Tool</span>
            </span>
            <h3 className="text-2xl font-black text-[#0F172A] font-heading">
              Paper Cup Specification & Logistics Estimator
            </h3>
          </div>
          <p className="text-xs text-[#64748B] max-w-xs leading-relaxed">
            Customize size, wall structure, and volume to calculate packaging units and instant bulk specs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                1. Select Paper Cup Size:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {["150ml (5 oz)", "200ml (7 oz)", "250ml (8.5 oz)", "350ml (12 oz)"].map((size) => {
                  const val = size.split(" ")[0];
                  const isSelected = selectedSize === val;
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(val)}
                      className={`p-3 rounded-2xl text-xs font-bold transition-all border cursor-pointer text-center ${
                        isSelected
                          ? "bg-[#0F172A] text-white border-[#0F172A] shadow-xs"
                          : "bg-[#FAFAF9] text-[#0F172A] border-[#E7E5E4] hover:bg-[#F5F5F4]"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                2. Select Wall Construction:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: "single", label: "Single Wall", desc: "Standard Tea/Coffee" },
                  { id: "double", label: "Double Wall", desc: "Thermal Insulated" },
                  { id: "ripple", label: "Ripple Wall", desc: "Textured Grip" },
                ].map((type) => {
                  const isSelected = cupType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setCupType(type.id as any)}
                      className={`p-3 rounded-2xl text-xs transition-all border cursor-pointer text-left ${
                        isSelected
                          ? "bg-[#0F172A] text-white border-[#0F172A] shadow-xs"
                          : "bg-[#FAFAF9] text-[#0F172A] border-[#E7E5E4] hover:bg-[#F5F5F4]"
                      }`}
                    >
                      <span className="font-bold block mb-0.5">{type.label}</span>
                      <span className={`text-[10px] block ${isSelected ? "text-[#FDBA74]" : "text-[#64748B]"}`}>
                        {type.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                  3. Order Quantity (Pcs):
                </label>
                <span className="text-sm font-black text-[#EA580C] bg-[#EA580C]/10 px-3 py-0.5 rounded-full border border-[#FDBA74]/40">
                  {quantity.toLocaleString()} Pcs
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="200000"
                step="5000"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2 bg-[#E7E5E4] rounded-lg appearance-none cursor-pointer accent-[#EA580C]"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-semibold mt-1.5">
                <span>5,000 (Min)</span>
                <span>50,000</span>
                <span>1,00,000</span>
                <span>2,00,000+</span>
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] cursor-pointer hover:bg-[#F5F5F4] transition-colors">
                <input
                  type="checkbox"
                  checked={customPrint}
                  onChange={(e) => setCustomPrint(e.target.checked)}
                  className="w-4 h-4 rounded text-[#EA580C] accent-[#EA580C]"
                />
                <span className="text-xs font-bold text-[#0F172A]">
                  Include Custom Brand Logo Flexo Printing (Food Grade Inks)
                </span>
              </label>
            </div>
          </div>

          {/* Result Output Card */}
          <div className="lg:col-span-5 bg-[#FAFAF9] rounded-3xl p-6 border border-[#E7E5E4] space-y-5">
            <h4 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider pb-3 border-b border-[#E7E5E4] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#EA580C]" />
              <span>Calculated Production Specs</span>
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#E7E5E4]">
                <div className="flex items-center gap-2">
                  <Box className="w-4 h-4 text-[#EA580C]" />
                  <span className="text-[#64748B]">Carton Packaging:</span>
                </div>
                <span className="font-extrabold text-[#0F172A]">~{cartonsNeeded} Master Boxes</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#E7E5E4]">
                <div className="flex items-center gap-2">
                  <Weight className="w-4 h-4 text-[#9D2575]" />
                  <span className="text-[#64748B]">Estimated Weight:</span>
                </div>
                <span className="font-extrabold text-[#0F172A]">~{approxWeightKg} kg</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#E7E5E4]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                  <span className="text-[#64748B]">Standard Grammage:</span>
                </div>
                <span className="font-extrabold text-[#0F172A]">{recommendedGSM}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleSendQuote}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#9D2575] text-white rounded-2xl text-xs font-extrabold shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Request Quotation for These Specs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
