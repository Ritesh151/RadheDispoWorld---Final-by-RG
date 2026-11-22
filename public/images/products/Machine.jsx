import React from "react";

const Machine = () => {
  // Dynamically require all images from the Machines folder
  const machinesContext = require.context('./Machines', false, /\.(png|jpe?g|webp|svg)$/);
  // Sort images alphabetically for consistent order
  const machineImages = machinesContext
    .keys()
    .sort()
    .map((key) => ({
      src: machinesContext(key),
      name: key.replace(/^.*[\\/]/, '').replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ')
    }));

  // Duplicate images for seamless infinite scroll
  const allImages = [...machineImages, ...machineImages];

  return (
    <section className="machines-section" style={{ margin: "2.5rem 0" }}>
      <h2 style={{ textAlign: "center", fontWeight: 600, marginBottom: "1.5rem", fontSize: "2rem" }}>
        Our Machines
      </h2>
      <div className="machines-marquee-outer">
        <div className="machines-marquee-inner">
          {allImages.map((img, idx) => (
            <div
              key={img.src + idx}
              className="machine-card-marquee"
            >
              <div className="machine-img-wrap">
                <img
                  src={img.src}
                  alt={img.name}
                  loading="lazy"
                />
              </div>
              <div className="machine-name">
                {img.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .machines-section {
          background: #f8fafc;
          border-radius: 12px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.03);
          padding: 2rem 0 2.5rem 0;
          overflow: hidden;
        }
        .machines-marquee-outer {
          width: 100%;
          overflow: hidden;
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 0.5rem;
        }
        .machines-marquee-inner {
          display: flex;
          align-items: stretch;
          gap: 1.2rem;
          animation: machines-marquee-scroll 32s linear infinite;
          will-change: transform;
        }
        @keyframes machines-marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .machine-card-marquee {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
          padding: 1rem 1rem 0.7rem 1rem;
          min-width: 210px;
          max-width: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: box-shadow 0.2s, transform 0.2s;
          margin-bottom: 0.5rem;
        }
        .machine-card-marquee:hover {
          box-shadow: 0 4px 16px rgba(25,118,210,0.13);
          transform: translateY(-4px) scale(1.03);
        }
        .machine-img-wrap {
          width: 100%;
          max-width: 170px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f7f7f7;
          border-radius: 6px;
          margin-bottom: 0.7rem;
          overflow: hidden;
        }
        .machine-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 6px;
          display: block;
        }
        .machine-name {
          font-weight: 500;
          font-size: 1.05rem;
          text-align: center;
          color: #222;
          text-transform: capitalize;
          margin-top: 0.2rem;
          word-break: break-word;
        }
        @media (max-width: 900px) {
          .machines-marquee-inner {
            gap: 0.8rem;
          }
          .machine-card-marquee {
            min-width: 160px;
            max-width: 170px;
            padding: 0.7rem 0.7rem 0.5rem 0.7rem;
          }
          .machine-img-wrap {
            max-width: 120px;
            height: 90px;
          }
          .machine-name {
            font-size: 0.98rem;
          }
        }
        @media (max-width: 600px) {
          .machines-section h2 {
            font-size: 1.2rem;
          }
          .machines-marquee-inner {
            gap: 0.5rem;
          }
          .machine-card-marquee {
            min-width: 120px;
            max-width: 130px;
            padding: 0.5rem 0.5rem 0.3rem 0.5rem;
          }
          .machine-img-wrap {
            max-width: 80px;
            height: 60px;
          }
          .machine-name {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Machine;