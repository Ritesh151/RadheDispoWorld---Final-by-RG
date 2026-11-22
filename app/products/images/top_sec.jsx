import React, { useEffect, useRef, useState } from "react";
import i1 from "./Others/Cup_Family.jpg";
import i2 from "./Others/Box.jpg";
import i3 from "./Others/Cup_Family_2.jpg";
import i4 from "./Others/Product_2.jpg";
import i5 from "./Others/Product_3.jpg";
import "./top_sec.css";

// 5 background images (replace with your own or use Unsplash/placeholder)
const backgrounds = [
  {i1},
  {i2},
  {i3},
  {i4},
  {i5}
];

const heroTitles = [
  "Discover Premium Paper Cups",
  "Eco-Friendly & Durable",
  "Perfect for Every Occasion",
  "Quality You Can Trust",
  "Explore Our Machines"
];

const heroSubtitles = [
  "Browse our wide range of paper cups and packaging solutions.",
  "Sustainable products for a greener tomorrow.",
  "From parties to businesses, we have you covered.",
  "Crafted with care, delivered with excellence.",
  "Upgrade your production with our advanced machines."
];

function ProductsHero() {
  const [bgIndex, setBgIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % backgrounds.length);
        setFade(true);
      }, 600); // match fade duration
    }, 4000);

    return () => clearTimeout(timeoutRef.current);
  }, [bgIndex]);

  return (
    <section className="products-hero-section">
      <div
        className={`hero-bg${fade ? " fade-in" : " fade-out"}`}
        style={{
          backgroundImage: `url(${backgrounds[bgIndex]})`
        }}
      ></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{heroTitles[bgIndex]}</h1>
        <p>{heroSubtitles[bgIndex]}</p>
        <a href="#products" className="hero-btn">
          View Products
        </a>
      </div>
      <div className="hero-dots">
        {backgrounds.map((_, idx) => (
          <span
            key={idx}
            className={`dot${bgIndex === idx ? " active" : ""}`}
            onClick={() => {
              setBgIndex(idx);
              setFade(true);
            }}
          ></span>
        ))}
      </div>
      <style>{`
        .products-hero-section {
          position: relative;
          width: 100%;
          min-height: 380px;
          height: 48vw;
          max-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 0 0 24px 24px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          z-index: 1;
          transition: opacity 0.6s cubic-bezier(.4,0,.2,1);
          opacity: 1;
        }
        .fade-in {
          opacity: 1;
        }
        .fade-out {
          opacity: 0;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(42,157,143,0.55) 0%, rgba(38,70,83,0.45) 100%);
          z-index: 2;
        }
        .hero-content {
          position: relative;
          z-index: 3;
          color: #fff;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .hero-content h1 {
          font-size: 2.6rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 16px rgba(0,0,0,0.18);
        }
        .hero-content p {
          font-size: 1.25rem;
          font-weight: 400;
          margin-bottom: 2rem;
          text-shadow: 0 1px 8px rgba(0,0,0,0.13);
        }
        .hero-btn {
          display: inline-block;
          background: #2a9d8f;
          color: #fff;
          padding: 0.85em 2.2em;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 2px 12px rgba(42,157,143,0.13);
          transition: background 0.2s, box-shadow 0.2s;
        }
        .hero-btn:hover {
          background: #21867a;
          box-shadow: 0 4px 18px rgba(42,157,143,0.18);
        }
        .hero-dots {
          position: absolute;
          left: 50%;
          bottom: 28px;
          transform: translateX(-50%);
          z-index: 4;
          display: flex;
          gap: 0.7em;
        }
        .dot {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: rgba(255,255,255,0.55);
          border: 2px solid #fff;
          cursor: pointer;
          transition: background 0.2s, border 0.2s;
        }
        .dot.active {
          background: #2a9d8f;
          border-color: #2a9d8f;
        }
        @media (max-width: 700px) {
          .products-hero-section {
            min-height: 220px;
            height: 44vw;
            max-height: 320px;
            border-radius: 0 0 14px 14px;
          }
          .hero-content h1 {
            font-size: 1.45rem;
          }
          .hero-content p {
            font-size: 1rem;
          }
          .hero-btn {
            font-size: 1rem;
            padding: 0.7em 1.5em;
          }
          .hero-dots {
            bottom: 16px;
          }
        }
      `}</style>
    </section>
  );
}

export default ProductsHero;
