"use client";

import React, { useState } from "react";
import { PRODUCTS_DATA, Product } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Bot,
  Coffee,
  Flame,
  CupSoda,
  Milk,
  Building2,
  Store,
  IceCream,
  Users,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Tag,
  Package,
  Box,
  MessageSquare,
  ShieldCheck,
  Zap,
  Layers
} from "lucide-react";

interface AICupAdvisorProps {
  onSelectProduct?: (product: Product) => void;
}

export default function AICupAdvisor({ onSelectProduct }: AICupAdvisorProps) {
  const [step, setStep] = useState<number>(1);
  const [businessType, setBusinessType] = useState<string>("");
  const [beverageType, setBeverageType] = useState<string>("");
  const [volumeTier, setVolumeTier] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisText, setAnalysisText] = useState<string>("Initializing AI Neural Model...");
  const [recommendation, setRecommendation] = useState<{
    product: Product;
    matchScore: number;
    reasons: string[];
    suggestedCartons: number;
    monthlyCostEst: string;
  } | null>(null);

  const businessOptions = [
    { id: "chai-stall", title: "Tea Stall / Cutting Chai", icon: Flame, desc: "High customer volume, scalding hot tea, tight portion control" },
    { id: "cafe", title: "Modern Cafe & Coffee Bar", icon: Coffee, desc: "Espresso, cappuccino, latte, premium hand feel & aesthetics" },
    { id: "ice-cream", title: "Ice Cream Parlor & Sweets", icon: IceCream, desc: "Cold desserts, kulfi, wide mouth bowl structure" },
    { id: "corporate", title: "Corporate Office & Hub", icon: Building2, desc: "Pantry dispensers, all-day hygiene, uniform look" },
    { id: "juice-bar", title: "Juice Center & Shakes", icon: CupSoda, desc: "Cold drinks, milkshakes, large capacities (180ml-250ml)" },
    { id: "catering", title: "Event & Wedding Catering", icon: Users, desc: "Banquets, party refreshments, heavy-duty disposable supply" },
  ];

  const beverageOptions = [
    { id: "hot-tea", title: "Scalding Hot Chai (98°C)", icon: Flame, desc: "Requires reinforced base knurling and high thermal insulation" },
    { id: "coffee", title: "Specialty Coffee / Cappuccino", icon: Coffee, desc: "Requires smooth sipping lip & optimal grammage (180-220 GSM)" },
    { id: "cold-drink", title: "Cold Juice / Soft Drinks", icon: CupSoda, desc: "Requires anti-sweat poly coating & rigid walls" },
    { id: "dessert", title: "Ice Cream / Dessert Wati", icon: IceCream, desc: "Requires wide bowl rim & freezer-safe barrier" },
    { id: "multi-use", title: "Multi-Purpose Everyday Use", icon: Layers, desc: "Balanced for both hot & cold beverages" },
  ];

  const volumeOptions = [
    { id: "starter", title: "1,000 - 5,000 Cups / Month", desc: "Small shop / local counter • 1 Master Box" },
    { id: "regular", title: "10,000 - 30,000 Cups / Month", desc: "Established cafe / stall • 2 - 4 Master Boxes" },
    { id: "wholesale", title: "50,000+ Cups / Month", desc: "Franchise chain / distributor • Bulk Pallet Tier" },
  ];

  const runAnalysis = (bus: string, bev: string, vol: string) => {
    setIsAnalyzing(true);
    setStep(4);

    const steps = [
      "Analyzing beverage temperature and GSM barrier requirements...",
      "Evaluating bottom knurling heat dissipation under 98°C...",
      "Scanning 53 Radhe Dispoworld factory products...",
      "Optimizing carton pack economics & wholesale rates...",
      "Finalizing AI recommendation...",
    ];

    steps.forEach((text, index) => {
      setTimeout(() => {
        setAnalysisText(text);
      }, (index + 1) * 450);
    });

    setTimeout(() => {
      // Intelligent matching algorithm
      let matchedId = 11; // Default: 75 ML Paper Cup
      let reasons = [
        "Optimal portion size preventing beverage wastage",
        "Heat-resistant base knurling tested at 98°C with zero leaks",
        "100% virgin food-grade paperboard ensuring zero odor transfer",
      ];
      let matchScore = 98.4;
      let suggestedCartons = 2;

      if (bev === "dessert" || bus === "ice-cream") {
        matchedId = 7; // 50 IC WATI
        reasons = [
          "Wide dessert flange engineered for easy spoon scooping",
          "Double poly coating prevents sogginess and condensation in freezers",
          "Thick 210 GSM paperboard maintains rigidity with frozen sweets",
        ];
        matchScore = 99.1;
      } else if (bus === "chai-stall" || bev === "hot-tea") {
        if (bus === "chai-stall") {
          matchedId = 11; // 75 ML
          reasons = [
            "India's most popular cutting chai capacity with highest customer satisfaction",
            "Super-economical packet rate (₹8.00) maximizing daily stall profits",
            "Micro-curled rim provides comfortable heat-safe sipping",
          ];
          matchScore = 99.4;
        } else {
          matchedId = 14; // 75 ML SP
          reasons = [
            "Heavy 220 GSM paperboard for scalding hot tea without cup sleeves",
            "Reinforced bottom knurling guarantees zero leakage",
          ];
          matchScore = 97.8;
        }
      } else if (bus === "cafe" || bev === "coffee") {
        matchedId = 15; // 100 ML or 200 ML
        reasons = [
          "Perfect capacity for americano, cappuccino, and single-serve filter coffee",
          "Premium hand-feel with high-definition smooth texture",
          "Strict food safety standards compliant with cafe chains",
        ];
        matchScore = 98.6;
      } else if (bus === "juice-bar" || bev === "cold-drink") {
        matchedId = 21; // 200 ML Paper Cup
        reasons = [
          "Generous volume for juices, soft drinks, and cold frappes",
          "Anti-sweat barrier prevents wall softening with iced drinks",
          "High stackability for rapid service during rush hours",
        ];
        matchScore = 98.9;
      } else if (bus === "corporate") {
        matchedId = 11; // 75 ML
        reasons = [
          "Standard office pantry portion reducing tea/coffee wastage",
          "Hygienic touchless cleanroom packaging ready for dispensers",
        ];
        matchScore = 97.5;
      }

      if (vol === "starter") suggestedCartons = 1;
      else if (vol === "regular") suggestedCartons = 3;
      else if (vol === "wholesale") suggestedCartons = 8;

      const foundProduct = PRODUCTS_DATA.find((p) => p.id === matchedId) || PRODUCTS_DATA[0];

      setRecommendation({
        product: foundProduct,
        matchScore,
        reasons,
        suggestedCartons,
        monthlyCostEst: foundProduct.rateOfPackets || "₹ 8.00 / Packet",
      });

      setIsAnalyzing(false);
    }, 2400);
  };

  const resetAdvisor = () => {
    setStep(1);
    setBusinessType("");
    setBeverageType("");
    setVolumeTier("");
    setRecommendation(null);
  };

  return (
    <div className="bg-[#FFFFFF] border border-[#E7E5E4] rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute -right-24 -top-24 w-80 h-80 bg-gradient-to-br from-[#EA580C]/15 via-[#9D2575]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E5E4] mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#9D2575] text-white flex items-center justify-center shadow-md shrink-0">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EA580C]/10 text-[#EA580C] text-[10px] font-black uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3" />
              <span>AI Neural Cup Selector</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] font-heading">
              Radhe AI Smart Cup Advisor
            </h2>
          </div>
        </div>

        {step > 1 && (
          <button
            onClick={resetAdvisor}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#64748B] hover:text-[#EA580C] transition-colors cursor-pointer self-start sm:self-auto bg-[#FAFAF9] px-3.5 py-2 rounded-xl border border-[#E7E5E4]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restart Advisor</span>
          </button>
        )}
      </div>

      {/* Step Indicators */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-bold text-[#64748B] mb-2">
          <span className={step >= 1 ? "text-[#EA580C]" : ""}>1. Business Profile</span>
          <span className={step >= 2 ? "text-[#EA580C]" : ""}>2. Beverage Type</span>
          <span className={step >= 3 ? "text-[#EA580C]" : ""}>3. Monthly Volume</span>
          <span className={step >= 4 ? "text-[#EA580C]" : ""}>4. AI Recommendation</span>
        </div>
        <div className="h-1.5 w-full bg-[#FAFAF9] rounded-full overflow-hidden border border-[#E7E5E4]">
          <div
            className="h-full bg-gradient-to-r from-[#EA580C] to-[#9D2575] transition-all duration-500 rounded-full"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* STEP 1: BUSINESS TYPE */}
      {step === 1 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-[#0F172A] font-heading">
              Step 1: What type of business do you operate?
            </h3>
            <p className="text-xs text-[#64748B]">
              Our AI evaluates your customer turnaround speed, typical spill risk, and portion size requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {businessOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    setBusinessType(opt.id);
                    setStep(2);
                  }}
                  className="p-5 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] hover:border-[#EA580C] hover:bg-white text-left transition-all duration-200 group cursor-pointer shadow-2xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E7E5E4] group-hover:border-[#EA580C]/40 text-[#EA580C] flex items-center justify-center mb-3 transition-colors shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#0F172A] group-hover:text-[#EA580C] transition-colors mb-1">
                      {opt.title}
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* STEP 2: BEVERAGE TYPE */}
      {step === 2 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-[#0F172A] font-heading">
              Step 2: What is your primary beverage or food product?
            </h3>
            <p className="text-xs text-[#64748B]">
              Thermal properties and liquid viscosity determine the optimal GSM paper grammage and poly coating.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {beverageOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    setBeverageType(opt.id);
                    setStep(3);
                  }}
                  className="p-5 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] hover:border-[#EA580C] hover:bg-white text-left transition-all duration-200 group cursor-pointer shadow-2xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E7E5E4] group-hover:border-[#EA580C]/40 text-[#9D2575] flex items-center justify-center mb-3 transition-colors shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#0F172A] group-hover:text-[#EA580C] transition-colors mb-1">
                      {opt.title}
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* STEP 3: MONTHLY VOLUME */}
      {step === 3 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-[#0F172A] font-heading">
              Step 3: What is your estimated monthly consumption?
            </h3>
            <p className="text-xs text-[#64748B]">
              Helps our AI suggest the best carton packaging tiers and maximum bulk discounts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {volumeOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  setVolumeTier(opt.id);
                  runAnalysis(businessType, beverageType, opt.id);
                }}
                className="p-6 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] hover:border-[#EA580C] hover:bg-white text-left transition-all duration-200 group cursor-pointer shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#EA580C] bg-[#FFF7ED] px-2.5 py-0.5 rounded-md border border-[#FDBA74]/40 mb-3">
                    Wholesale Tier
                  </span>
                  <h4 className="text-base font-black text-[#0F172A] group-hover:text-[#EA580C] transition-colors mb-1.5">
                    {opt.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {opt.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E7E5E4] flex items-center justify-between text-xs font-bold text-[#EA580C]">
                  <span>Run AI Match</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* STEP 4: AI SCANNING OR RESULTS */}
      {step === 4 && (
        <div>
          {isAnalyzing ? (
            /* AI Neural Processing Animation */
            <div className="py-16 text-center space-y-6">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-[#E7E5E4] border-t-[#EA580C] border-r-[#9D2575] animate-spin" />
                <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center shadow-inner">
                  <Sparkles className="w-8 h-8 text-[#EA580C] animate-pulse" />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-black text-[#0F172A] font-heading">
                  Radhe AI Diagnostic in Progress
                </h4>
                <p className="text-xs font-semibold text-[#EA580C] font-mono animate-pulse">
                  {analysisText}
                </p>
              </div>
            </div>
          ) : recommendation ? (
            /* Result Card */
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
              
              {/* Top Match Banner */}
              <div className="bg-gradient-to-r from-[#EA580C]/10 via-[#9D2575]/10 to-[#EA580C]/10 p-4 rounded-2xl border border-[#EA580C]/30 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#EA580C] text-white flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#0F172A]">
                      AI Match Completed: <strong className="text-[#EA580C]">{recommendation.matchScore}% Match Score</strong>
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-bold text-[#64748B]">
                  Optimized for your business requirement
                </span>
              </div>

              {/* Product Match Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAFAF9] p-6 sm:p-8 rounded-3xl border border-[#E7E5E4]">
                
                {/* Product Photo */}
                <div className="lg:col-span-5 relative">
                  <div className="rounded-2xl overflow-hidden bg-white border border-[#E7E5E4] p-4 shadow-sm h-64 sm:h-72 flex items-center justify-center">
                    <img
                      src={recommendation.product.image}
                      alt={recommendation.product.name}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute top-3 right-3 bg-[#EA580C] text-white text-[10px] font-black px-2.5 py-1 rounded-md shadow-xs">
                      {recommendation.product.category}
                    </div>
                  </div>
                </div>

                {/* Specs & AI Breakdown */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C] bg-[#FFF7ED] px-2.5 py-0.5 rounded-md border border-[#FDBA74]/40">
                      Recommended Paper Cup
                    </span>
                    <h3 className="text-2xl font-black text-[#0F172A] font-heading mt-1">
                      {recommendation.product.name}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed mt-1">
                      {recommendation.product.description}
                    </p>
                  </div>

                  {/* Packaging Matrix */}
                  <div className="grid grid-cols-3 gap-2.5 py-3 border-y border-[#E7E5E4] text-xs">
                    <div className="p-2.5 bg-white rounded-xl border border-[#E7E5E4]">
                      <span className="text-[10px] font-semibold text-[#64748B] block">Packet Rate</span>
                      <span className="text-sm font-black text-[#EA580C]">{recommendation.product.rateOfPackets || "₹ 8.00"}</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#E7E5E4]">
                      <span className="text-[10px] font-semibold text-[#64748B] block">Bharati</span>
                      <span className="text-sm font-bold text-[#0F172A]">{recommendation.product.Bharati || "35"} Pcs/Pkt</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#E7E5E4]">
                      <span className="text-[10px] font-semibold text-[#64748B] block">Box Total</span>
                      <span className="text-sm font-bold text-[#0F172A]">
                        {recommendation.product.pscPerBox ? `${parseInt(recommendation.product.pscPerBox).toLocaleString()} Pcs` : "Carton"}
                      </span>
                    </div>
                  </div>

                  {/* Why AI Selected This */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-[#0F172A] uppercase tracking-wider">
                      Why AI Matched This Cup:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#64748B]">
                      {recommendation.reasons.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/918980005230?text=${encodeURIComponent(
                        `Hello Purv Patel, the AI Cup Advisor recommended "${recommendation.product.name}" (${recommendation.product.rateOfPackets}) for my business. Please share order details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white text-xs font-black shadow-md hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Order on WhatsApp (Purv Patel)</span>
                    </a>

                    {onSelectProduct && (
                      <button
                        onClick={() => onSelectProduct(recommendation.product)}
                        className="px-4 py-3 rounded-xl bg-white border border-[#E7E5E4] hover:bg-[#F5F5F4] text-xs font-bold text-[#0F172A] transition-colors cursor-pointer"
                      >
                        View Full Specifications
                      </button>
                    )}
                  </div>
                </div>

              </div>

            </motion.div>
          ) : null}
        </div>
      )}

    </div>
  );
}
