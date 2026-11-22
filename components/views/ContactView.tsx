"use client";

import React, { useState, useEffect } from "react";
import { FAQ_DATA } from "@/lib/data";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ShieldCheck
} from "lucide-react";

interface ContactViewProps {
  initialEnquiryNote?: string;
  onShowToast: (msg: string) => void;
}

export default function ContactView({ initialEnquiryNote, onShowToast }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "200ml Single Wall Paper Cup",
    quantity: "25000",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialEnquiryNote) {
      setFormData((prev) => ({
        ...prev,
        message: `Bulk Inquiry Details: ${initialEnquiryNote}`,
      }));
    }
  }, [initialEnquiryNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(
        `Thank you ${formData.name || "Customer"}! Your inquiry for ${formData.quantity} cups has been received. Our sales team will contact you shortly.`
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        productInterest: "200ml Single Wall Paper Cup",
        quantity: "25000",
        message: "",
      });
    }, 900);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest bg-[#EA580C]/10 px-4 py-1.5 rounded-full border border-[#FDBA74]/40">
          ॥ Jay Shree Krishna ॥ • Since 2018
        </span>

        <h1 className="text-3xl sm:text-5xl font-black text-[#0F172A] font-heading">
          Get in Touch for Bulk Inquiries
        </h1>

        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
          Have a question about paper cup sizes, custom flexo printing, or bulk logistics? Reach out to our manufacturing team in Ahmedabad today.
        </p>
      </div>

      {/* Main Grid: Form & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Information & Map (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border border-[#E7E5E4] shadow-xs space-y-6">
            <h3 className="text-xl font-black text-[#0F172A] font-heading">
              Factory Sales & Plant Desk
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center shrink-0 border border-[#FDBA74]/30">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#0F172A] block">Manufacturing Plant</span>
                  <span className="text-[#64748B] leading-relaxed">
                    Ahmedabad, Gujarat 382430, India
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center shrink-0 border border-[#FDBA74]/30">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#0F172A] block">Direct Helpline</span>
                  <a href="tel:+918980005230" className="text-[#0F172A] font-extrabold hover:text-[#EA580C] transition-colors">
                    +91 89800 05230
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0 border border-[#16A34A]/20">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#0F172A] block">WhatsApp Sales</span>
                  <a
                    href="https://wa.me/918980005230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#15803D] font-extrabold hover:underline"
                  >
                    +91 89800 05230 (Click to Chat)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#9D2575]/10 text-[#9D2575] flex items-center justify-center shrink-0 border border-[#9D2575]/20">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#0F172A] block">Email Support</span>
                  <a href="mailto:radhedispoworld@gmail.com" className="text-[#9D2575] font-extrabold hover:underline">
                    radhedispoworld@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F5F5F4] text-[#64748B] flex items-center justify-center shrink-0 border border-[#E7E5E4]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#0F172A] block">Operating Hours</span>
                  <span className="text-[#64748B]">Monday – Saturday: 9:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 border-t border-[#E7E5E4]">
              <span className="text-xs font-bold text-[#0F172A] block mb-2.5">Official Social Channels</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/p/Radhe-Dispoworld-Ahmedabad-100086548599466/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4] text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all text-xs font-bold flex items-center gap-1.5 shadow-2xs"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href="https://www.instagram.com/radhe_group_ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4] text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all text-xs font-bold flex items-center gap-1.5 shadow-2xs"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="bg-[#FFFFFF] p-4 rounded-3xl border border-[#E7E5E4] shadow-xs space-y-2">
            <div className="flex items-center justify-between px-2 pt-1">
              <span className="text-xs font-bold text-[#0F172A] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Live Factory Location</span>
              </span>
              <a
                href="https://www.google.com/maps?ll=22.990157,72.745048&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=5630473849334354653"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#EA580C] hover:underline font-bold"
              >
                Open in Maps ↗
              </a>
            </div>

            <div className="w-full h-56 rounded-2xl overflow-hidden border border-[#E7E5E4] bg-white">
              <iframe
                title="Radhe Dispoworld Factory Location Map"
                src="https://maps.google.com/maps?q=22.990157,72.745048&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border border-[#E7E5E4] shadow-xs space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider block">
              Quick Response Guaranteed
            </span>
            <h3 className="text-2xl font-black text-[#0F172A] font-heading">
              Request a Bulk Quotation
            </h3>
            <p className="text-xs text-[#64748B]">
              Fill in your requirement below. Our quotation desk will revert with pricing within 2 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#0F172A] mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#FAFAF9] px-4 py-3 rounded-xl border border-[#E7E5E4] text-[#0F172A] focus:outline-hidden focus:border-[#EA580C] transition-colors"
                />
              </div>

              <div>
                <label className="block font-bold text-[#0F172A] mb-1.5">Phone Number (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 89800 05230"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#FAFAF9] px-4 py-3 rounded-xl border border-[#E7E5E4] text-[#0F172A] focus:outline-hidden focus:border-[#EA580C] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#0F172A] mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#FAFAF9] px-4 py-3 rounded-xl border border-[#E7E5E4] text-[#0F172A] focus:outline-hidden focus:border-[#EA580C] transition-colors"
                />
              </div>

              <div>
                <label className="block font-bold text-[#0F172A] mb-1.5">Company / Brand Name</label>
                <input
                  type="text"
                  placeholder="e.g. Radhe Chai / Cafe"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#FAFAF9] px-4 py-3 rounded-xl border border-[#E7E5E4] text-[#0F172A] focus:outline-hidden focus:border-[#EA580C] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#0F172A] mb-1.5">Product Category</label>
                <select
                  value={formData.productInterest}
                  onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                  className="w-full bg-[#FAFAF9] px-4 py-3 rounded-xl border border-[#E7E5E4] text-[#0F172A] focus:outline-hidden focus:border-[#EA580C] transition-colors font-medium"
                >
                  <option value="150ml Single Wall Paper Cup">150ml Single Wall Cup</option>
                  <option value="200ml Single Wall Paper Cup">200ml Single Wall Cup</option>
                  <option value="250ml Double Wall Thermal Cup">250ml Double Wall Thermal Cup</option>
                  <option value="250ml Ripple Wall Cup">250ml Ripple Wall Craft Cup</option>
                  <option value="350ml Grand Double Wall Cup">350ml Grand Latte Cup</option>
                  <option value="Custom Print Branded Paper Cup">Custom Logo Branded Cup</option>
                  <option value="Ice Cream & Dessert Tub">Ice Cream / Dessert Tub</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#0F172A] mb-1.5">Estimated Order Quantity</label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full bg-[#FAFAF9] px-4 py-3 rounded-xl border border-[#E7E5E4] text-[#0F172A] focus:outline-hidden focus:border-[#EA580C] transition-colors font-medium"
                >
                  <option value="10000">10,000 Pcs (Standard MOQ)</option>
                  <option value="25000">25,000 Pcs</option>
                  <option value="50000">50,000 Pcs</option>
                  <option value="100000">1,00,000 Pcs</option>
                  <option value="250000">2,50,000+ Pcs (Wholesale)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-bold text-[#0F172A] mb-1.5">Additional Notes / Custom Artwork Specs</label>
              <textarea
                rows={4}
                placeholder="Mention specific GSM requirements, shipping location in India, or custom printing details..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#FAFAF9] p-4 rounded-xl border border-[#E7E5E4] text-[#0F172A] focus:outline-hidden focus:border-[#EA580C] transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#9D2575] text-white rounded-xl text-xs font-extrabold shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Sending Request..." : "Submit Quotation Request"}</span>
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="bg-[#FFFFFF] p-8 sm:p-12 rounded-3xl border border-[#E7E5E4] shadow-xs space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest bg-[#EA580C]/10 px-3.5 py-1 rounded-full border border-[#FDBA74]/40">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-black text-[#0F172A] font-heading">
            Paper Cup Manufacturing FAQ
          </h2>
        </div>

        <div className="space-y-3 max-w-4xl mx-auto">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-[#E7E5E4] rounded-2xl overflow-hidden transition-all bg-[#FAFAF9]"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-[#0F172A] hover:bg-[#F5F5F4] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#EA580C]">Q{index + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#EA580C] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#64748B] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#E7E5E4] bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
