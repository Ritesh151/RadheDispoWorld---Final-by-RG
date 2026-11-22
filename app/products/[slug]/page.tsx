import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  PRODUCTS_DATA,
  getProductBySlug,
  getProductSlug,
  Product,
} from "@/lib/data";
import { generateProductSchema } from "@/lib/seo-schemas";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
  Sparkles,
  ArrowRight,
  Package,
  Box,
  Tag,
  Gauge,
  Zap,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Layers,
  Check,
  Building2,
  Truck,
  FileCheck,
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

// Required for Next.js output: "export" static generation
export function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: getProductSlug(product),
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested disposable product or machine could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const isMachine = product.category === "Machines";
  const title = isMachine
    ? `${product.name} | Paper Cup Machine Manufacturer Ahmedabad`
    : `${product.name} (${product.capacity || product.category}) Wholesale | Ahmedabad`;

  const description = isMachine
    ? `Buy high-speed ${product.name} from Radhe Dispoworld Ahmedabad. Speed: ${product.Speed || "High RPM"}, Power: ${product.Power || "Heavy duty"}, 1-Year Warranty. Factory pricing & PAN India delivery.`
    : `Order ${product.name} in bulk from Radhe Dispoworld Ahmedabad. ${product.Bharati ? `${product.Bharati} pcs/packet, ` : ""}${product.pscPerBox ? `${product.pscPerBox} pcs/carton. ` : ""}100% food-grade virgin paper, leak-proof certified. Best wholesale price: ${product.rateOfPackets || `₹${product.rate}/pc`}.`;

  const canonicalUrl = `https://radhedispoworld.com/products/${slug}`;
  const ogImageUrl = product.image.startsWith("http")
    ? product.image
    : `https://radhedispoworld.com${product.image}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const isMachine = product.category === "Machines";
  const productSchema = generateProductSchema(product);

  // Related products from the same category or general popular items
  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.isPopular)
  ).slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hello Purv Patel, I want to inquire about "${product.name}" (${product.categoryLabel || product.category}) from Radhe Dispoworld. Please share quotation and delivery timeline for bulk supply.`
  );

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#0F172A] pt-24 pb-20">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              {
                label: product.categoryLabel || product.category,
                href: `/products?category=${encodeURIComponent(product.category)}`,
              },
              { label: product.name },
            ]}
          />
        </div>

        {/* Main Product Hero Grid */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E7E5E4] shadow-xs overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12">
            {/* Left Column: Image Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-b from-[#F5F5F4] to-[#ECEAE8] border border-[#E7E5E4] flex items-center justify-center p-8 group overflow-hidden">
                {product.isPopular && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white text-[11px] font-extrabold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Bestseller</span>
                  </div>
                )}
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md text-[#0F172A] text-xs font-black px-3 py-1 rounded-full border border-[#E7E5E4]">
                  {product.categoryLabel || product.category}
                </div>

                <img
                  src={product.image}
                  alt={`${product.name} - Radhe Dispoworld Ahmedabad`}
                  className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  fetchPriority="high"
                />
              </div>

              {/* Manufacturing Plant Guarantee */}
              <div className="w-full mt-4 bg-[#FAFAF9] rounded-2xl p-4 border border-[#E7E5E4] flex items-center justify-between text-xs text-[#64748B]">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#EA580C]" />
                  <span>Direct Factory Supply</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#9D2575]" />
                  <span>PAN India Logistics</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#16A34A]" />
                  <span>GST Invoiced</span>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Product Info & Commercial Specs */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Category & Verified Badge */}
                <div className="flex items-center gap-2 text-xs font-bold text-[#EA580C] uppercase tracking-wider mb-2">
                  <span>{product.category}</span>
                  <span>•</span>
                  <span className="text-[#16A34A] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Genuine Specification
                  </span>
                </div>

                {/* Main H1 */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] font-heading tracking-tight mb-4">
                  {product.name}
                </h1>

                {/* Price Display */}
                <div className="flex flex-wrap items-center gap-3 mb-6 p-4 rounded-2xl bg-[#FFF7ED] border border-[#FDBA74]/40">
                  {product.rateOfPackets ? (
                    <div>
                      <span className="text-xs font-semibold text-[#64748B] block">
                        Wholesale Packet Rate:
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-[#EA580C]">
                        {product.rateOfPackets}
                      </span>
                    </div>
                  ) : null}

                  {product.rate && (
                    <div className="pl-4 border-l border-[#FDBA74]/60">
                      <span className="text-xs font-semibold text-[#64748B] block">
                        Unit Rate:
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-[#0F172A]">
                        ₹{product.rate}
                      </span>
                    </div>
                  )}

                  <div className="ml-auto text-right">
                    <span className="text-[11px] text-[#16A34A] font-bold bg-[#DCFCE7] px-2.5 py-1 rounded-full inline-block">
                      In Stock • Bulk Orders
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  {product.description ||
                    (isMachine
                      ? `${product.name} engineered by Radhe Dispoworld delivers high efficiency, automated paper cup production, and rigid build quality for packaging manufacturers.`
                      : `Premium ${product.name} manufactured using 100% food-grade virgin paper boards. Built with precision heat-sealing technology ensuring zero leakage, optimum thermal insulation, and safe beverage consumption.`)}
                </p>

                {/* Specifications Matrix Table */}
                <div className="mb-8">
                  <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#0F172A] mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#EA580C]" />
                    <span>Technical & Packaging Specifications</span>
                  </h2>

                  <div className="bg-[#FAFAF9] rounded-2xl border border-[#E7E5E4] overflow-hidden">
                    <dl className="divide-y divide-[#E7E5E4]">
                      {product.capacity && (
                        <div className="px-4 py-2.5 grid grid-cols-3 gap-4 text-xs">
                          <dt className="text-[#64748B] font-medium">Capacity / Volume</dt>
                          <dd className="col-span-2 text-[#0F172A] font-bold">{product.capacity}</dd>
                        </div>
                      )}

                      {product.Bharati && (
                        <div className="px-4 py-2.5 grid grid-cols-3 gap-4 text-xs">
                          <dt className="text-[#64748B] font-medium">Pieces per Packet (Bharati)</dt>
                          <dd className="col-span-2 text-[#0F172A] font-bold">{product.Bharati} Pcs</dd>
                        </div>
                      )}

                      {product.Packet && (
                        <div className="px-4 py-2.5 grid grid-cols-3 gap-4 text-xs">
                          <dt className="text-[#64748B] font-medium">Packets per Box</dt>
                          <dd className="col-span-2 text-[#0F172A] font-bold">{product.Packet} Packets</dd>
                        </div>
                      )}

                      {product.pscPerBox && (
                        <div className="px-4 py-2.5 grid grid-cols-3 gap-4 text-xs">
                          <dt className="text-[#64748B] font-medium">Total Quantity per Carton</dt>
                          <dd className="col-span-2 text-[#0F172A] font-black text-[#EA580C]">
                            {parseInt(product.pscPerBox).toLocaleString()} Pcs
                          </dd>
                        </div>
                      )}

                      {product.gsm && (
                        <div className="px-4 py-2.5 grid grid-cols-3 gap-4 text-xs">
                          <dt className="text-[#64748B] font-medium">Paper Board GSM</dt>
                          <dd className="col-span-2 text-[#0F172A] font-bold">{product.gsm}</dd>
                        </div>
                      )}

                      {product.coating && (
                        <div className="px-4 py-2.5 grid grid-cols-3 gap-4 text-xs">
                          <dt className="text-[#64748B] font-medium">Coating</dt>
                          <dd className="col-span-2 text-[#0F172A] font-bold">{product.coating}</dd>
                        </div>
                      )}

                      {product.rimType && (
                        <div className="px-4 py-2.5 grid grid-cols-3 gap-4 text-xs">
                          <dt className="text-[#64748B] font-medium">Rim Style</dt>
                          <dd className="col-span-2 text-[#0F172A] font-bold">{product.rimType}</dd>
                        </div>
                      )}

                      {/* Machine-specific specs */}
                      {product.Speed && (
                        <div className="px-4 py-2.5 grid grid-cols-3 gap-4 text-xs">
                          <dt className="text-[#64748B] font-medium">Operating Speed</dt>
                          <dd className="col-span-2 text-[#0F172A] font-bold">{product.Speed}</dd>
                        </div>
                      )}

                      {product.Power && (
                        <div className="px-4 py-2.5 grid grid-cols-3 gap-4 text-xs">
                          <dt className="text-[#64748B] font-medium">Power Requirement</dt>
                          <dd className="col-span-2 text-[#0F172A] font-bold">{product.Power}</dd>
                        </div>
                      )}

                      {product.Weight && (
                        <div className="px-4 py-2.5 grid grid-cols-3 gap-4 text-xs">
                          <dt className="text-[#64748B] font-medium">Machine Weight</dt>
                          <dd className="col-span-2 text-[#0F172A] font-bold">{product.Weight}</dd>
                        </div>
                      )}

                      {product.Warranty && (
                        <div className="px-4 py-2.5 grid grid-cols-3 gap-4 text-xs">
                          <dt className="text-[#64748B] font-medium">Standard Warranty</dt>
                          <dd className="col-span-2 text-[#16A34A] font-bold">{product.Warranty}</dd>
                        </div>
                      )}

                      <div className="px-4 py-2.5 grid grid-cols-3 gap-4 text-xs">
                        <dt className="text-[#64748B] font-medium">Manufacturer</dt>
                        <dd className="col-span-2 text-[#0F172A] font-bold">
                          Radhe Dispoworld (Ahmedabad, Gujarat)
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Direct Call */}
              <div className="pt-4 border-t border-[#E7E5E4] flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/918980005230?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#9D2575] text-white text-sm font-extrabold shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href="tel:+918980005230"
                  className="py-3.5 px-6 rounded-2xl bg-[#0F172A] text-white text-sm font-bold shadow-xs hover:bg-[#1E293B] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Phone className="w-4 h-4 text-[#FDBA74]" />
                  <span>Call +91 89800 05230</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition & Quality Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E7E5E4] shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF7ED] flex items-center justify-center text-[#EA580C] mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-[#0F172A] mb-2">
              Zero Leakage Guarantee
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Every batch undergoes strict hydrostatic testing and ultrasonic seam inspection to ensure 100% leak-proof performance with hot and cold beverages.
            </p>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E7E5E4] shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#FDF2F8] flex items-center justify-center text-[#9D2575] mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-[#0F172A] mb-2">
              Food-Grade Certified Paper
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Manufactured strictly using ITC and top-tier virgin food-contact paperboards, odorless polyethylene coating, and eco-friendly recyclable materials.
            </p>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E7E5E4] shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#F0FDF4] flex items-center justify-center text-[#16A34A] mb-4">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-[#0F172A] mb-2">
              Bulk Production & Dispatch
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Daily capacity exceeding 2,000,000+ cups from our Ahmedabad industrial plant, enabling same-day or scheduled dispatches across Gujarat and India.
            </p>
          </div>
        </div>

        {/* Related Products Carousel / Grid */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider">
                  Recommended Catalog
                </span>
                <h2 className="text-2xl font-black text-[#0F172A] font-heading">
                  Related Disposable Solutions
                </h2>
              </div>
              <Link
                href="/products"
                className="text-xs font-bold text-[#EA580C] hover:underline flex items-center gap-1"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => {
                const relSlug = getProductSlug(relProduct);
                return (
                  <Link
                    key={relProduct.id}
                    href={`/products/${relSlug}`}
                    className="bg-[#FFFFFF] rounded-3xl border border-[#E7E5E4] overflow-hidden p-4 shadow-xs hover:shadow-lg hover:border-[#EA580C]/40 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-square rounded-2xl bg-[#F5F5F4] p-4 flex items-center justify-center mb-3 overflow-hidden">
                        <img
                          src={relProduct.image}
                          alt={relProduct.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-[10px] font-bold text-[#EA580C] uppercase">
                        {relProduct.category}
                      </span>
                      <h3 className="text-sm font-bold text-[#0F172A] line-clamp-1 group-hover:text-[#EA580C] transition-colors">
                        {relProduct.name}
                      </h3>
                      {relProduct.rateOfPackets && (
                        <p className="text-xs font-black text-[#EA580C] mt-1">
                          {relProduct.rateOfPackets}
                        </p>
                      )}
                    </div>

                    <div className="mt-3 pt-3 border-t border-[#E7E5E4] flex items-center justify-between text-xs font-bold text-[#64748B] group-hover:text-[#0F172A]">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#EA580C]" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
