"use client";

import React, { useState, useMemo, useEffect } from "react";
import { PRODUCTS_DATA, Product } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import MachineMarquee from "@/components/products/MachineMarquee";
import CategoryFilterSection from "@/components/products/CategoryFilterSection";
import AICupAdvisor from "@/components/ai/AICupAdvisor";
import AILogisticsCalculator from "@/components/ai/AILogisticsCalculator";
import Toast from "@/components/Toast";
import {
  Search,
  Filter,
  HelpCircle,
  LayoutGrid,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  List,
  ArrowUpDown,
  MessageSquare,
  X,
  Bot,
  Truck,
  Layers,
  Cpu,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { productsCatalogSchema, generateBreadcrumbsSchema } from "@/lib/seo-schemas";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function ProductsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"catalog" | "advisor" | "logistics">("catalog");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "name">("featured");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Pagination state: 10 products per page
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const breadcrumbsSchema = generateBreadcrumbsSchema([
    { name: "Home", url: "/" },
    { name: "Products & Machinery", url: "/products" },
  ]);

  // Helper to extract numeric price for sorting
  const getPriceNumber = (prod: Product): number => {
    if (prod.rate) {
      const clean = prod.rate.replace(/[^0-9.]/g, "");
      const num = parseFloat(clean);
      if (!isNaN(num)) return num;
    }
    if (prod.rateOfPackets) {
      const clean = prod.rateOfPackets.replace(/[^0-9.]/g, "");
      const num = parseFloat(clean);
      if (!isNaN(num)) return num;
    }
    return 0;
  };

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS_DATA.filter((product) => {
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
        (product.rateOfPackets || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.rate || "").toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "price-asc") {
      result.sort((a, b) => getPriceNumber(a) - getPriceNumber(b));
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => getPriceNumber(b) - getPriceNumber(a));
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  // Reset to page 1 whenever category, search, or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handleEnquire = (productName: string) => {
    setToastMessage(`Opening WhatsApp for "${productName}" inquiry...`);
    const whatsappUrl = `https://wa.me/918980005230?text=${encodeURIComponent(
      `Hello Purv Patel, I want to inquire about "${productName}" from Radhe Dispoworld. Please share details.`
    )}`;
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 300);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10">
      {/* Schema.org Product Catalog & Breadcrumbs Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productsCatalogSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      {/* Visual Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: "Products & Machinery" }]} className="mb-2" />

      {/* 1. HERO & VALUE HIGHLIGHTS */}
      <div className="relative rounded-3xl bg-[#FFFFFF] border border-[#E7E5E4] p-6 sm:p-10 shadow-xs overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-[#EA580C]/10 via-[#9D2575]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/10 border border-[#FDBA74]/40 text-[#EA580C] text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Ahmedabad Factory Catalog • Since 2018</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#0F172A] font-heading leading-tight">
            Paper Cup Sizes, Packaging Cartons & Machines
          </h1>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Explore our complete manufacturing inventory of <strong>53+ products</strong> across <strong>16 specialized categories</strong>. Powered by AI size matching & real-time freight simulation.
          </p>

          {/* Quick Value Metrics */}
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-[#FAFAF9] rounded-2xl border border-[#E7E5E4]">
              <span className="text-xl font-black text-[#0F172A] block">53+</span>
              <span className="text-[10px] font-bold text-[#64748B] uppercase">Products in Stock</span>
            </div>
            <div className="p-3 bg-[#FAFAF9] rounded-2xl border border-[#E7E5E4]">
              <span className="text-xl font-black text-[#EA580C] block">16</span>
              <span className="text-[10px] font-bold text-[#64748B] uppercase">Size Categories</span>
            </div>
            <div className="p-3 bg-[#FAFAF9] rounded-2xl border border-[#E7E5E4]">
              <span className="text-xl font-black text-[#9D2575] block">99.9%</span>
              <span className="text-[10px] font-bold text-[#64748B] uppercase">Leak-Proof Pass</span>
            </div>
            <div className="p-3 bg-[#FAFAF9] rounded-2xl border border-[#E7E5E4]">
              <span className="text-xl font-black text-[#16A34A] block">500k+</span>
              <span className="text-[10px] font-bold text-[#64748B] uppercase">Daily Output</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. AI TOOLS & CATALOG VIEW MODE SWITCHER */}
      <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setActiveTab("catalog")}
          className={`px-5 py-3 rounded-2xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer shadow-xs whitespace-nowrap active:scale-95 ${
            activeTab === "catalog"
              ? "bg-[#0F172A] text-white border border-[#0F172A]"
              : "bg-[#FFFFFF] text-[#64748B] hover:text-[#0F172A] border border-[#E7E5E4]"
          }`}
        >
          <Layers className="w-4 h-4 text-[#EA580C]" />
          <span>Product Catalog & Category Filter (53)</span>
        </button>

        <button
          onClick={() => setActiveTab("advisor")}
          className={`px-5 py-3 rounded-2xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer shadow-xs whitespace-nowrap active:scale-95 ${
            activeTab === "advisor"
              ? "bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white"
              : "bg-[#FFFFFF] text-[#0F172A] border border-[#E7E5E4] hover:border-[#EA580C]/50"
          }`}
        >
          <Bot className="w-4 h-4 text-[#FDBA74]" />
          <span>🤖 AI Smart Cup Advisor</span>
          <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-white/20 uppercase font-extrabold">New</span>
        </button>

        <button
          onClick={() => setActiveTab("logistics")}
          className={`px-5 py-3 rounded-2xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer shadow-xs whitespace-nowrap active:scale-95 ${
            activeTab === "logistics"
              ? "bg-gradient-to-r from-[#0284C7] to-[#EA580C] text-white"
              : "bg-[#FFFFFF] text-[#0F172A] border border-[#E7E5E4] hover:border-[#0284C7]/50"
          }`}
        >
          <Truck className="w-4 h-4 text-[#38BDF8]" />
          <span>📦 AI Logistics & Carton Simulator</span>
          <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-white/20 uppercase font-extrabold">AI</span>
        </button>
      </div>

      {/* 3. TAB 1: AI SMART CUP ADVISOR */}
      {activeTab === "advisor" && (
        <AICupAdvisor
          onSelectProduct={(p) => {
            setSelectedProduct(p);
          }}
        />
      )}

      {/* 4. TAB 2: AI LOGISTICS & CARTON SIMULATOR */}
      {activeTab === "logistics" && (
        <AILogisticsCalculator />
      )}

      {/* 5. TAB 3: STANDARD CATALOG & CATEGORY FILTER (2-COLUMN SIDEBAR LAYOUT) */}
      {activeTab === "catalog" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Category Filter Hub (Sticky Sidebar on Desktop) */}
          <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-24 space-y-4">
            <CategoryFilterSection
              selectedCategory={selectedCategory}
              onSelectCategory={(catId) => setSelectedCategory(catId)}
              productCount={filteredProducts.length}
            />
          </div>

          {/* Right Side: Search, Sort Controls & Products Display UI/UX */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            {/* Search, Sort & Dual View Controls Toolbar */}
            <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-3xl border border-[#E7E5E4] shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Search Field */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by name, capacity, rate (e.g. 50 IC WATI, 200 ML)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#FAFAF9] pl-10 pr-10 py-2.5 rounded-2xl text-xs text-[#0F172A] border border-[#E7E5E4] focus:outline-hidden focus:border-[#EA580C] focus:bg-white transition-all font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#0F172A] p-1 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Sort & View Mode Buttons */}
              <div className="flex items-center gap-3 self-end md:self-auto">
                {/* Sort Dropdown */}
                <div className="flex items-center gap-1.5 bg-[#FAFAF9] border border-[#E7E5E4] px-3.5 py-2.5 rounded-2xl text-xs text-[#0F172A]">
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#EA580C]" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-transparent border-none text-xs font-bold text-[#0F172A] focus:outline-hidden cursor-pointer"
                  >
                    <option value="featured">Sort: Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center bg-[#FAFAF9] border border-[#E7E5E4] p-1 rounded-2xl">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      viewMode === "grid"
                        ? "bg-[#FFFFFF] text-[#EA580C] shadow-2xs border border-[#E7E5E4]"
                        : "text-[#64748B] hover:text-[#0F172A]"
                    }`}
                    title="Grid Cards View"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("table")}
                    className={`p-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      viewMode === "table"
                        ? "bg-[#FFFFFF] text-[#EA580C] shadow-2xs border border-[#E7E5E4]"
                        : "text-[#64748B] hover:text-[#0F172A]"
                    }`}
                    title="Wholesale Pricing Matrix View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters & Results Info Strip */}
            {(selectedCategory !== "All Categories" || searchQuery !== "") && (
              <div className="bg-[#FFF7ED]/80 border border-[#FDBA74]/40 px-4 py-2.5 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-[#9A3412]">Active Filters:</span>
                  {selectedCategory !== "All Categories" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#EA580C] font-extrabold border border-[#FDBA74]/60 shadow-2xs">
                      <span>Category: {selectedCategory}</span>
                      <button
                        onClick={() => setSelectedCategory("All Categories")}
                        className="hover:text-[#DC2626] p-0.5 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {searchQuery !== "" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#0F172A] font-extrabold border border-[#E7E5E4] shadow-2xs">
                      <span>Search: "{searchQuery}"</span>
                      <button
                        onClick={() => setSearchQuery("")}
                        className="hover:text-[#DC2626] p-0.5 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>

                <button
                  onClick={() => {
                    setSelectedCategory("All Categories");
                    setSearchQuery("");
                  }}
                  className="text-[11px] font-black text-[#EA580C] hover:underline cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Product Cards Grid or Wholesale Matrix */}
            {filteredProducts.length > 0 ? (
              <>
                {viewMode === "grid" ? (
                  /* Grid View (10 products per page) */
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {paginatedProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onViewDetails={(prod) => setSelectedProduct(prod)}
                        onEnquire={handleEnquire}
                      />
                    ))}
                  </div>
                ) : (
                  /* Wholesale Pricing Matrix Table View (10 products per page) */
                  <div className="bg-[#FFFFFF] rounded-3xl border border-[#E7E5E4] shadow-xs overflow-hidden">
                    <div className="p-4 sm:p-5 border-b border-[#E7E5E4] bg-[#FAFAF9] flex items-center justify-between">
                      <div>
                        <h3 className="text-xs sm:text-sm font-black text-[#0F172A] uppercase tracking-wider">
                          Wholesale Packaging & Pricing Matrix
                        </h3>
                        <p className="text-[11px] text-[#64748B]">
                          Page {currentPage} of {totalPages} — Showing {paginatedProducts.length} items of {filteredProducts.length} total
                        </p>
                      </div>

                      <div className="text-[11px] font-bold text-[#EA580C] bg-[#FFF7ED] px-3 py-1 rounded-xl border border-[#FDBA74]/40">
                        100% Virgin Food Grade
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs text-[#0F172A]">
                        <thead className="bg-[#F5F5F4] text-[#64748B] uppercase font-bold text-[10px] tracking-wider border-b border-[#E7E5E4]">
                          <tr>
                            <th className="py-3 px-4">Product / Size</th>
                            <th className="py-3 px-4">Category</th>
                            <th className="py-3 px-4">Bharati</th>
                            <th className="py-3 px-4">Packets / Box</th>
                            <th className="py-3 px-4">Pcs / Carton</th>
                            <th className="py-3 px-4">Rate / Unit</th>
                            <th className="py-3 px-4">Packet Rate</th>
                            <th className="py-3 px-4 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E7E5E4]">
                          {paginatedProducts.map((p) => {
                            const whatsappMsg = encodeURIComponent(
                              `Hello Purv Patel, I want to inquire about wholesale order for ${p.name} (${p.rateOfPackets || p.category}).`
                            );

                            return (
                              <tr
                                key={p.id}
                                className="hover:bg-[#FAFAF9] transition-colors group cursor-pointer"
                                onClick={() => setSelectedProduct(p)}
                              >
                                <td className="py-3 px-4 font-bold flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-xl bg-[#F5F5F4] p-1 border border-[#E7E5E4] shrink-0">
                                    <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                                  </div>
                                  <div>
                                    <span className="font-black text-[#0F172A] group-hover:text-[#EA580C] transition-colors block">
                                      {p.name}
                                    </span>
                                    <span className="text-[10px] text-[#64748B]">{p.capacity || p.Speed || "Direct Supply"}</span>
                                  </div>
                                </td>
                                <td className="py-3 px-4">
                                  <span className="px-2 py-0.5 rounded-md bg-[#FAFAF9] border border-[#E7E5E4] text-[10px] font-bold">
                                    {p.category}
                                  </span>
                                </td>
                                <td className="py-3 px-4 font-medium">
                                  {p.Bharati ? `${p.Bharati} Pcs` : "—"}
                                </td>
                                <td className="py-3 px-4 font-medium">
                                  {p.Packet ? `${p.Packet} Pkts` : "—"}
                                </td>
                                <td className="py-3 px-4 font-bold text-[#0F172A]">
                                  {p.pscPerBox ? `${parseInt(p.pscPerBox).toLocaleString()} Pcs` : "—"}
                                </td>
                                <td className="py-3 px-4 font-semibold text-[#64748B]">
                                  {p.rate ? `₹${p.rate}` : "—"}
                                </td>
                                <td className="py-3 px-4 font-black text-[#EA580C]">
                                  {p.rateOfPackets || "Inquire"}
                                </td>
                                <td className="py-3 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                                  <div className="flex items-center justify-end gap-1.5">
                                    <button
                                      onClick={() => setSelectedProduct(p)}
                                      className="px-2.5 py-1.5 rounded-lg border border-[#E7E5E4] text-[11px] font-bold hover:bg-[#F5F5F4] transition-colors"
                                    >
                                      Specs
                                    </button>
                                    <a
                                      href={`https://wa.me/918980005230?text=${whatsappMsg}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white text-[11px] font-bold shadow-2xs hover:opacity-95 flex items-center gap-1"
                                    >
                                      <MessageSquare className="w-3 h-3" />
                                      <span>Quote</span>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Modern 10 Items per Page Pagination Bar */}
                {totalPages > 1 && (
                  <div className="bg-[#FFFFFF] p-4 rounded-3xl border border-[#E7E5E4] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                    <div className="text-xs text-[#64748B] font-medium">
                      Showing <strong className="text-[#0F172A] font-bold">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</strong> – <strong className="text-[#0F172A] font-bold">{Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)}</strong> of <strong className="text-[#0F172A] font-bold">{filteredProducts.length}</strong> products
                    </div>

                    <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
                      {/* Previous Page Button */}
                      <button
                        onClick={() => {
                          setCurrentPage((prev) => Math.max(1, prev - 1));
                          window.scrollTo({ top: 250, behavior: 'smooth' });
                        }}
                        disabled={currentPage === 1}
                        className="px-3 py-2 rounded-xl text-xs font-bold border border-[#E7E5E4] bg-[#FAFAF9] text-[#0F172A] hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer transition-all shrink-0"
                      >
                        <ChevronLeft className="w-4 h-4 text-[#EA580C]" />
                        <span className="hidden sm:inline">Previous</span>
                      </button>

                      {/* Numeric Page Buttons */}
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                        const isActive = pageNum === currentPage;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => {
                              setCurrentPage(pageNum);
                              window.scrollTo({ top: 250, behavior: 'smooth' });
                            }}
                            className={`w-9 h-9 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 ${
                              isActive
                                ? "bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white shadow-xs scale-105"
                                : "bg-[#FAFAF9] text-[#64748B] border border-[#E7E5E4] hover:text-[#0F172A] hover:bg-white"
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}

                      {/* Next Page Button */}
                      <button
                        onClick={() => {
                          setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                          window.scrollTo({ top: 250, behavior: 'smooth' });
                        }}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 rounded-xl text-xs font-bold border border-[#E7E5E4] bg-[#FAFAF9] text-[#0F172A] hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer transition-all shrink-0"
                      >
                        <span className="hidden sm:inline">Next</span>
                        <ChevronRight className="w-4 h-4 text-[#EA580C]" />
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Empty State */
              <div className="bg-[#FFFFFF] rounded-3xl p-12 text-center border border-[#E7E5E4] space-y-4">
                <HelpCircle className="w-12 h-12 text-[#64748B] mx-auto opacity-50" />
                <h3 className="text-lg font-bold text-[#0F172A]">
                  No products found matching "{searchQuery || selectedCategory}"
                </h3>
                <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                  We manufacture custom paper cup sizes and special tooling on order. Request a bespoke quotation or reset your search filter.
                </p>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setSelectedCategory("All Categories");
                      setSearchQuery("");
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#0F172A] text-white text-xs font-bold hover:bg-[#1E293B] transition-colors cursor-pointer"
                  >
                    Reset Filters
                  </button>
                  <button
                    onClick={() => handleEnquire("Custom Paper Cup Specification")}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white text-xs font-bold shadow-xs hover:opacity-95 transition-all cursor-pointer"
                  >
                    Request Custom Size
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 6. MACHINERY FLEET SHOWCASE */}
      <MachineMarquee
        onSelectMachine={(machineName) => {
          const found = PRODUCTS_DATA.find((p) => p.name === machineName || p.name.includes(machineName));
          if (found) setSelectedProduct(found);
          else handleEnquire(machineName);
        }}
      />

      {/* 7. BOTTOM CUSTOM INQUIRY BANNER */}
      <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="absolute -left-16 -top-16 w-80 h-80 bg-gradient-to-r from-[#EA580C]/20 to-[#9D2575]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-2 text-center md:text-left max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FDBA74] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Custom Branding & Custom GSM Tooling</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
            Need a Specific Size, Custom Flexo Logo or Machine?
          </h3>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Our Ahmedabad factory offers touchless manufacturing, up to 6-color flexographic printing, and full turnkey machinery setups.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="https://wa.me/918980005230?text=Hello%20Purv%20Patel,%20I%20need%20a%20custom%20paper%20cup%20quotation."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white text-xs font-black shadow-lg hover:opacity-95 transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Purv Patel</span>
          </a>

          <button
            onClick={() => handleEnquire("Custom Paper Cup Inquiry")}
            className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-colors whitespace-nowrap cursor-pointer"
          >
            Send Inquiry Form
          </button>
        </div>
      </div>

      {/* Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={handleEnquire}
      />

      {/* Global Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
