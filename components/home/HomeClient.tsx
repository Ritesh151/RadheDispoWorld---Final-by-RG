"use client";

import React, { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import HomeView from "@/components/views/HomeView";
import ProductModal from "@/components/ProductModal";
import Toast from "@/components/Toast";
import { Product } from "@/lib/data";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HomeClient() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleEnquireProduct = (productName: string) => {
    setToastMessage(`Opening WhatsApp for "${productName}" inquiry...`);
    const whatsappUrl = `https://wa.me/918980005230?text=${encodeURIComponent(
      `Hello Purv Patel, I want to inquire about "${productName}" from Radhe Dispoworld. Please share details.`
    )}`;
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 300);
  };

  const handleNavigate = (tab: string) => {
    if (tab === "home") router.push("/");
    else router.push(`/${tab}`);
  };

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <HomeView
        onNavigate={handleNavigate}
        onViewProductDetails={(product) => setSelectedProduct(product)}
        onEnquireProduct={handleEnquireProduct}
      />

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={(name) => handleEnquireProduct(name)}
      />

      {/* Global Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </>
  );
}
