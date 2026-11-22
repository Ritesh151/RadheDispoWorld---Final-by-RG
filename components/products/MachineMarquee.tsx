"use client";

import React from "react";
import { Cpu, ArrowRight, Gauge, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

interface MachineItem {
  id: number;
  name: string;
  speed: string;
  price: string;
  image: string;
}

const MACHINES: MachineItem[] = [
  { id: 47, name: "RG-450 Paper Cup Machine", speed: "60-80 cups/min", price: "₹ 4,50,000/-", image: "/images/products/Machines/Machine_1.jpg" },
  { id: 48, name: "RG-500 Paper Cup Machine", speed: "65-85 cups/min", price: "₹ 4,50,000/-", image: "/images/products/Machines/Machine_2.jpg" },
  { id: 49, name: "RG-600 Machine Normal", speed: "70-90 cups/min", price: "₹ 4,75,000/-", image: "/images/products/Machines/Machine_3.jpg" },
  { id: 50, name: "RG-700 Machine Normal Speed", speed: "75-95 cups/min", price: "₹ 5,00,000/-", image: "/images/products/Machines/Machine_4.jpg" },
  { id: 51, name: "RG-1000 Open Cam Machine", speed: "90-110 cups/min", price: "₹ 7,00,000/-", image: "/images/products/Machines/Machine_5.jpg" },
  { id: 52, name: "RG-1300 High Speed Machine", speed: "100-130 cups/min", price: "₹ 11,00,000/-", image: "/images/products/Machines/6.jpg" },
  { id: 53, name: "RG-1400 High Speed Machine", speed: "100-130 cups/min", price: "₹ 12,00,000/-", image: "/images/products/Machines/7.jpg" },
];

export default function MachineMarquee({ onSelectMachine }: { onSelectMachine?: (machineName: string) => void }) {
  // Duplicate for infinite seamless scroll
  const marqueeItems = [...MACHINES, ...MACHINES];

  return (
    <div className="bg-[#FFFFFF] border border-[#E7E5E4] rounded-3xl p-6 sm:p-8 shadow-xs overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-[#E7E5E4]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA580C]/10 text-[#EA580C] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Industrial Machinery Fleet</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] font-heading">
            Paper Cup Making Machines & Forming Lines
          </h2>
        </div>

        <div className="flex items-center gap-3 text-xs font-semibold text-[#64748B]">
          <span className="flex items-center gap-1 text-[#16A34A]"><ShieldCheck className="w-4 h-4" /> 1-Year Warranty</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-[#EA580C]"><Zap className="w-4 h-4" /> Open Cam & High Speed</span>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden mask-fade-edges">
        <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] py-2">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => onSelectMachine && onSelectMachine(item.name)}
              className="shrink-0 w-64 sm:w-72 bg-[#FAFAF9] rounded-2xl border border-[#E7E5E4] p-4 shadow-2xs hover:shadow-lg hover:border-[#EA580C]/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-44 rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#E7E5E4] mb-3 flex items-center justify-center p-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 bg-[#EA580C] text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow-xs">
                  {item.price}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1 text-[11px] text-[#64748B] font-semibold mb-1">
                  <Gauge className="w-3 h-3 text-[#EA580C]" />
                  <span>{item.speed}</span>
                </div>
                <h4 className="text-sm font-black text-[#0F172A] line-clamp-1 group-hover:text-[#EA580C] transition-colors">
                  {item.name}
                </h4>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#E7E5E4] flex items-center justify-between text-xs font-bold text-[#EA580C]">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </div>
  );
}
