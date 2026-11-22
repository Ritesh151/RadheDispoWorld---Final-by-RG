"use client";

import React, { useState } from "react";
import { PRODUCTS_DATA, Product } from "@/lib/data";
import ProductCard from "../ProductCard";
import {
  Search,
  Filter,
  HelpCircle,
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
  Cpu
} from "lucide-react";

interface ProductsViewProps {
  onViewProductDetails: (product: Product) => void;
  onEnquireProduct: (productName: string) => void;
}

export default function ProductsView({ onViewProductDetails, onEnquireProduct }: ProductsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categoryMetaList = [
    { id: "All Categories", name: "All Categories", icon: LayoutGrid, tag: "Full Range" },
    { id: "40 ML", name: "40 ML", icon: Coffee, tag: "Espresso" },
    { id: "50 ML", name: "50 ML", icon: Flame, tag: "Cutting Chai" },
    { id: "50 IC WATI", name: "50 IC WATI", icon: CircleDot, tag: "Dessert" },
    { id: "65 ML", name: "65 ML", icon: Sparkles, tag: "Traditional" },
    { id: "75 ML", name: "75 ML", icon: CupSoda, tag: "Hospitality" },
    { id: "100 ML", name: "100 ML", icon: Milk, tag: "Regular" },
    { id: "180 ML", name: "180 ML", icon: Zap, tag: "Vending" },
    { id: "200 ML", name: "200 ML", icon: ShieldCheck, tag: "Cafe Standard" },
    { id: "250 ML", name: "250 ML", icon: Award, tag: "Double & Ripple" },
    { id: "Box", name: "Box", icon: Package, tag: "Packaging" },
    { id: "Cup Family", name: "Cup Family", icon: Layers, tag: "Complete Suite" },
    { id: "Marketing", name: "Marketing", icon: Megaphone, tag: "Custom Print" },
    { id: "Other", name: "Other", icon: MoreHorizontal, tag: "Lids & Extras" },
    { id: "Product", name: "Product", icon: ShoppingBag, tag: "Finished" },
    { id: "Machines", name: "Machines", icon: Cpu, tag: "Machinery" },
  ];

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Categories" ||
      product.category === selectedCategory ||
      (product.categoryLabel && product.categoryLabel.toLowerCase() === selectedCategory.toLowerCase());

    const matchesSearch =
      (product.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.description || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.capacity || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.category || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.Features || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.Text || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.rateOfPackets || "").toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest bg-[#EA580C]/10 px-4 py-1.5 rounded-full border border-[#FDBA74]/40">
          Radhe Dispoworld Catalog • Since 2018
        </span>

        <h1 className="text-3xl sm:text-5xl font-black text-[#0F172A] font-heading">
          Premium Paper Cups, Packaging & Machinery
        </h1>

        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
          From 40ml to 250ml insulated cups, master boxes, promotional marketing print cups, and automatic forming machinery.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E7E5E4] shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-[#E7E5E4]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center">
              <Filter className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-black text-[#0F172A] uppercase tracking-wider">
                Select Product Category
              </h3>
              <p className="text-[11px] text-[#64748B]">
                16 Categories Available
              </p>
            </div>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by size (e.g. 50 IC WATI, 200 ML)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAFAF9] pl-10 pr-4 py-2.5 rounded-2xl text-xs text-[#0F172A] border border-[#E7E5E4] focus:outline-hidden focus:border-[#EA580C] transition-colors"
            />
          </div>
        </div>

        {/* 16 Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {categoryMetaList.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const Icon = cat.icon;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border relative overflow-hidden group active:scale-95 ${
                  isSelected
                    ? "bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white border-[#0F172A] shadow-md"
                    : "bg-[#FAFAF9] text-[#0F172A] border-[#E7E5E4] hover:bg-white hover:border-[#EA580C]/40 hover:shadow-2xs"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-white/15 text-[#FDBA74]"
                        : "bg-white text-[#EA580C] border border-[#E7E5E4] group-hover:border-[#EA580C]/30"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-ping" />
                  )}
                </div>

                <div>
                  <span
                    className={`block text-xs font-black tracking-tight line-clamp-1 ${
                      isSelected ? "text-white" : "text-[#0F172A] group-hover:text-[#EA580C]"
                    }`}
                  >
                    {cat.name}
                  </span>
                  <span
                    className={`block text-[9px] font-semibold mt-0.5 truncate ${
                      isSelected ? "text-white/70" : "text-[#64748B]"
                    }`}
                  >
                    {cat.tag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between text-xs text-[#64748B] pt-2 border-t border-[#E7E5E4]">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Filtered by:</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#EA580C]/10 text-[#EA580C] font-extrabold text-[11px] border border-[#FDBA74]/40">
              {selectedCategory}
            </span>
          </div>

          <div className="font-semibold">
            Showing <strong className="text-[#0F172A]">{filteredProducts.length}</strong> Products
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewProductDetails}
              onEnquire={onEnquireProduct}
            />
          ))}
        </div>
      ) : (
        <div className="bg-[#FFFFFF] rounded-3xl p-12 text-center border border-[#E7E5E4] space-y-4">
          <HelpCircle className="w-12 h-12 text-[#64748B] mx-auto opacity-50" />
          <h3 className="text-lg font-bold text-[#0F172A]">No products matched "{selectedCategory}"</h3>
          <p className="text-xs text-[#64748B]">
            Try selecting "All Categories" or searching with other keywords.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All Categories");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-full bg-[#0F172A] text-white text-xs font-bold hover:bg-[#1E293B] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
