"use client";

import React, { useState } from "react";
import { PRODUCTS_DATA } from "@/lib/data";
import {
  LayoutGrid,
  Coffee,
  Flame,
  CircleDot,
  Sparkles,
  CupSoda,
  Milk,
  Zap,
  ShieldCheck,
  Award,
  Package,
  Layers,
  Megaphone,
  MoreHorizontal,
  ShoppingBag,
  Cpu,
  Filter,
  Check,
  ChevronDown,
  ChevronUp,
  RotateCcw
} from "lucide-react";

interface CategoryFilterSectionProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  productCount: number;
}

interface CategoryInfo {
  id: string;
  name: string;
  group: "all" | "hot" | "cold" | "packaging" | "custom" | "machines";
  icon: React.ElementType;
  tag: string;
  color: string;
}

export default function CategoryFilterSection({
  selectedCategory,
  onSelectCategory,
  productCount,
}: CategoryFilterSectionProps) {
  const [activeGroup, setActiveGroup] = useState<string>("all");
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  const categories: CategoryInfo[] = [
    { id: "All Categories", name: "All Categories", group: "all", icon: LayoutGrid, tag: "Full Catalog", color: "#0F172A" },
    { id: "40 ML", name: "40 ML", group: "hot", icon: Coffee, tag: "Espresso & Tea", color: "#EA580C" },
    { id: "50 ML", name: "50 ML", group: "hot", icon: Flame, tag: "Cutting Chai", color: "#EA580C" },
    { id: "50 IC WATI", name: "50 IC WATI", group: "hot", icon: CircleDot, tag: "Dessert Bowl", color: "#EA580C" },
    { id: "65 ML", name: "65 ML", group: "hot", icon: Sparkles, tag: "Traditional Chai", color: "#EA580C" },
    { id: "75 ML", name: "75 ML", group: "hot", icon: CupSoda, tag: "Daily Regular", color: "#EA580C" },
    { id: "100 ML", name: "100 ML", group: "hot", icon: Milk, tag: "Cafe Standard", color: "#EA580C" },
    { id: "180 ML", name: "180 ML", group: "cold", icon: Zap, tag: "Vending & Juice", color: "#0284C7" },
    { id: "200 ML", name: "200 ML", group: "cold", icon: ShieldCheck, tag: "Latte & Shakes", color: "#0284C7" },
    { id: "250 ML", name: "250 ML", group: "cold", icon: Award, tag: "Large Beverage", color: "#0284C7" },
    { id: "Box", name: "Box", group: "packaging", icon: Package, tag: "5-Ply Cartons", color: "#9D2575" },
    { id: "Cup Family", name: "Cup Family", group: "packaging", icon: Layers, tag: "Multi-Size Suite", color: "#9D2575" },
    { id: "Marketing", name: "Marketing", group: "custom", icon: Megaphone, tag: "Custom Logo Print", color: "#D97706" },
    { id: "Other", name: "Other", group: "custom", icon: MoreHorizontal, tag: "Specialty Items", color: "#D97706" },
    { id: "Product", name: "Product", group: "custom", icon: ShoppingBag, tag: "Designer Cups", color: "#D97706" },
    { id: "Machines", name: "Machines", group: "machines", icon: Cpu, tag: "Forming Machinery", color: "#16A34A" },
  ];

  const parentGroups = [
    { id: "all", label: "All Items", count: 53 },
    { id: "hot", label: "Hot Cups", count: 18 },
    { id: "cold", label: "Cold Drinks", count: 9 },
    { id: "packaging", label: "Boxes", count: 5 },
    { id: "custom", label: "Branding", count: 14 },
    { id: "machines", label: "Fleet", count: 7 },
  ];

  const visibleCategories = categories.filter((cat) => {
    if (activeGroup === "all") return true;
    return cat.group === activeGroup || cat.id === "All Categories";
  });

  const getCategoryCount = (categoryId: string): number => {
    if (categoryId === "All Categories") return PRODUCTS_DATA.length;
    return PRODUCTS_DATA.filter((p) => p.category === categoryId).length;
  };

  const activeCategoryCount = getCategoryCount(selectedCategory);

  return (
    <div className="bg-[#FFFFFF] rounded-3xl border border-[#E7E5E4] shadow-xs p-3.5 sm:p-5 space-y-3.5 transition-all">
      {/* 1. HEADER & MOBILE/TABLET COLLAPSE TOGGLE */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E7E5E4] gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#9D2575] text-white flex items-center justify-center shadow-xs shrink-0">
            <Filter className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xs sm:text-base font-black text-[#0F172A] font-heading flex items-center gap-1.5 truncate">
              <span>Category Filter Hub</span>
            </h2>
            <div className="flex items-center gap-1.5 text-[11px] text-[#64748B] truncate">
              <span className="truncate">
                {selectedCategory === "All Categories" ? "Showing all categories" : `Active: ${selectedCategory}`}
              </span>
            </div>
          </div>
        </div>

        {/* Right Active Badge & Mobile/Tablet Toggle Button */}
        <div className="flex items-center gap-2 shrink-0">
          {selectedCategory !== "All Categories" && (
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EA580C]/10 text-[#EA580C] text-[10px] font-black border border-[#FDBA74]/40">
              <span>{selectedCategory}</span>
              <span className="bg-[#EA580C] text-white rounded-full w-4 h-4 text-[9px] flex items-center justify-center">
                {activeCategoryCount}
              </span>
            </span>
          )}

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden px-3 py-1.5 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4] hover:bg-white text-[#0F172A] text-xs font-bold flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
            aria-label="Toggle category filters"
          >
            <span className="text-[11px]">{isMobileOpen ? "Hide" : "Filters"}</span>
            {isMobileOpen ? <ChevronUp className="w-3.5 h-3.5 text-[#EA580C]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#EA580C]" />}
          </button>
        </div>
      </div>

      {/* MOBILE QUICK HORIZONTAL SWIPE STRIP (When collapsed on small screens) */}
      {!isMobileOpen && (
        <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto pb-1 pt-0.5 no-scrollbar">
          {categories.slice(0, 9).map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap border shrink-0 transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#0F172A] text-white border-[#0F172A] shadow-xs"
                    : "bg-[#FAFAF9] text-[#64748B] border-[#E7E5E4] hover:text-[#0F172A] hover:bg-white"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      )}

      {/* FILTER BODY (ALWAYS VISIBLE ON DESKTOP LG, COLLAPSIBLE ON MOBILE/TABLET) */}
      <div className={`${isMobileOpen ? "block" : "hidden lg:block"} space-y-4 pt-1`}>
        {/* 2. PARENT GROUP QUICK SEGMENT PILLS (Scrollable on small devices) */}
        <div>
          <span className="text-[10px] uppercase font-extrabold text-[#94A3B8] tracking-wider block mb-2">
            Filter Group
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:flex-wrap no-scrollbar">
            {parentGroups.map((grp) => {
              const isActive = activeGroup === grp.id;
              return (
                <button
                  key={grp.id}
                  onClick={() => setActiveGroup(grp.id)}
                  className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 border shrink-0 active:scale-95 ${
                    isActive
                      ? "bg-[#0F172A] text-white border-[#0F172A] shadow-xs"
                      : "bg-[#FAFAF9] text-[#64748B] hover:text-[#0F172A] border-[#E7E5E4] hover:bg-white"
                  }`}
                >
                  <span>{grp.label}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded-full font-black ${
                      isActive ? "bg-white/20 text-white" : "bg-[#E7E5E4] text-[#0F172A]"
                    }`}
                  >
                    {grp.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. RESPONSIVE CATEGORY CARDS / LIST */}
        <div>
          <span className="text-[10px] uppercase font-extrabold text-[#94A3B8] tracking-wider block mb-2">
            Categories ({visibleCategories.length})
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 max-h-[50vh] sm:max-h-[520px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-stone-200">
            {visibleCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const Icon = cat.icon;
              const count = getCategoryCount(cat.id);

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    setIsMobileOpen(false); // Auto-close drawer on mobile selection
                  }}
                  className={`w-full p-2.5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between border relative overflow-hidden group active:scale-[0.98] ${
                    isSelected
                      ? "bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white border-[#0F172A] shadow-md ring-1 ring-[#EA580C]/40"
                      : "bg-[#FAFAF9] text-[#0F172A] border-[#E7E5E4] hover:bg-white hover:border-[#EA580C]/40 hover:shadow-xs"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${
                        isSelected
                          ? "bg-gradient-to-br from-[#EA580C] to-[#9D2575] text-white shadow-2xs"
                          : "bg-white text-[#EA580C] border border-[#E7E5E4]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="truncate">
                      <span
                        className={`block text-xs font-black tracking-tight truncate ${
                          isSelected ? "text-white" : "text-[#0F172A] group-hover:text-[#EA580C]"
                        }`}
                      >
                        {cat.name}
                      </span>
                      <span
                        className={`block text-[10px] font-medium truncate ${
                          isSelected ? "text-white/70" : "text-[#64748B]"
                        }`}
                      >
                        {cat.tag}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    <span
                      className={`text-[10px] font-black px-2 py-0.5 rounded-full transition-colors ${
                        isSelected
                          ? "bg-white/20 text-[#FDBA74]"
                          : "bg-white text-[#64748B] border border-[#E7E5E4]"
                      }`}
                    >
                      {count}
                    </span>

                    {isSelected && (
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#EA580C] text-white flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#EA580C] to-[#9D2575]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. FOOTER & QUICK RESET BUTTON */}
        <div className="pt-3 border-t border-[#E7E5E4] flex items-center justify-between text-xs">
          <div className="text-[11px] text-[#64748B] font-medium">
            Items in catalog: <strong className="text-[#0F172A] font-bold">{productCount}</strong>
          </div>

          {selectedCategory !== "All Categories" && (
            <button
              onClick={() => {
                onSelectCategory("All Categories");
                setIsMobileOpen(false);
              }}
              className="text-[11px] font-bold text-[#EA580C] hover:text-[#DC2626] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filter</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


