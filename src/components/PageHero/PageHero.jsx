import React from "react";

const PageHero = ({ label, title, highlight, subtitle }) => {
  return (
    <section className="relative h-[450px] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 
        bg-[radial-gradient(circle_at_top,#C9A23F33,transparent_60%),linear-gradient(to_bottom,#06151a,#123845)]
        opacity-95"
      />

      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay 
        bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <p className="text-[#C9A23F] uppercase tracking-[0.35em] text-xs mb-4">
          {label}
        </p>

        <h1 className="text-4xl md:text-5xl font-light text-white leading-tight">
          {title}{" "}
          <span className="text-[#C9A23F] font-semibold">{highlight}</span>
        </h1>

        <div className="mt-6 w-24 h-[3px] bg-gradient-to-r from-[#C9A23F] to-transparent rounded-full"></div>

        <p className="mt-6 text-gray-300 text-[15.5px] max-w-2xl leading-[1.8] font-light">
          {subtitle}
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#F4F1EA]" />
    </section>
  );
};

export default PageHero;
