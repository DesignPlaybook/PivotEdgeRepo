// ============================================================
// FULL REVAMPED HOME PAGE — CEO Hiring Website
// Theme: Full light/cream — no dark section backgrounds
// ============================================================

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "./Hero";

// ─────────────────────────────────────────────
// SHARED CONSTANTS
// ─────────────────────────────────────────────
const GOLD = "#C9A23F";
const TEAL = "#0F4C5C";
const CREAM = "#F4F1EA";
const SLATE = "#5b6f77";

// ─────────────────────────────────────────────
// DIVIDER
// ─────────────────────────────────────────────
const GoldDivider = () => (
  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-50" />
);

export const Introhighlight = () => {
  const cards = [
    {
      icon: "◈",
      title: "Strategic Direction",
      body: "Leadership defines the strategic direction of an organisation, ensuring clarity in decision-making and alignment across functions.",
    },
    {
      icon: "◇",
      title: "Governance & Culture",
      body: "Strong leadership strengthens governance frameworks and shapes organisational culture, influencing how teams operate and perform.",
    },
    {
      icon: "◉",
      title: "Enterprise Impact",
      body: "Appointments at functional head level and above carry enterprise-wide consequences, directly influencing performance and long-term value.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F4F1EA] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#C9A23F0D,transparent_70%)]" />

      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A23F]/20 to-transparent hidden lg:block" />
      <div className="absolute right-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A23F]/20 to-transparent hidden lg:block" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C9A23F] uppercase tracking-[0.4em] text-xs font-light mb-4">
            Why Leadership Matters
          </p>

          <div className="w-12 h-px bg-[#C9A23F]/40 mx-auto mb-6" />

          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-light text-[#0F4C5C] leading-[1.15] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Leadership Shapes Performance,
            <br />
            <em className="not-italic text-[#C9A23F]">Culture & Direction</em>
          </h2>

          <p className="text-[#5b6f77] max-w-2xl mx-auto mb-16 leading-[1.9] text-[15px] font-light">
            Leadership is the single most influential factor in organisational
            performance. In complex and rapidly evolving markets, organisations
            require leaders who combine strategic judgement with operational
            clarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative bg-white border border-[#e6dcc6] rounded-sm p-8 text-left overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9A23F] group-hover:w-full transition-all duration-700" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#C9A23F]/20" />

              <div
                className="text-3xl text-[#C9A23F]/40 mb-6 font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {card.icon}
              </div>

              <h3 className="text-lg font-medium text-[#0F4C5C] mb-3 tracking-wide">
                {card.title}
              </h3>

              <p className="text-[#5b6f77] text-[14.5px] leading-[1.85] font-light">
                {card.body}
              </p>

              <div className="mt-6 h-px w-10 bg-[#C9A23F] group-hover:w-20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 text-[#0F4C5C] font-medium tracking-wide text-sm uppercase"
          style={{ letterSpacing: "0.15em" }}
        >
          We approach these decisions with the rigour they demand.
        </motion.p>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// SERVICES SECTION — light cream theme
// ─────────────────────────────────────────────
const services = [
  {
    title: "Executive Search",
    description:
      "Retained search for Board, CEO, and senior functional leadership roles aligned with long-term strategy and enterprise performance.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200",
    number: "01",
  },
  {
    title: "Boards & Governance",
    description:
      "Advisory support for Board composition, Director appointments, and governance succession aligned with organisational priorities.",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200",
    number: "02",
  },
  {
    title: "CEO & Enterprise Leadership",
    description:
      "Identification and evaluation of enterprise leaders capable of aligning strategy, governance, and execution at scale.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    number: "03",
  },
  {
    title: "AI & Emerging Leadership",
    description:
      "Search for AI and digital leaders driving intelligent transformation and redefining enterprise value creation.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    number: "04",
  },
];

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[#EAE6DC] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#C9A23F08,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C9A23F] uppercase tracking-[0.4em] text-xs font-light mb-4">
              What We Do
            </p>
            <h2
              className="text-3xl md:text-5xl font-light text-[#0F4C5C] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Leadership Advisory &<br />
              <em className="not-italic text-[#C9A23F]">Executive Search</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#5b6f77] max-w-sm text-[14.5px] leading-[1.9] font-light md:text-right"
          >
            We partner with Boards and senior executives to secure leadership
            that aligns strategy, governance, and long-term enterprise
            performance.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              viewport={{ once: true }}
              onHoverStart={() => setActiveIndex(i)}
              onHoverEnd={() => setActiveIndex(null)}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
              style={{ minHeight: "360px" }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C5C] via-[#0F4C5C]/70 to-[#0F4C5C]/20" />
              </div>

              <div
                className="absolute top-5 right-5 text-6xl font-light text-white/5 select-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {svc.number}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="w-6 h-px bg-[#C9A23F] mb-4 group-hover:w-12 transition-all duration-500" />
                <h3 className="text-white text-lg font-medium mb-3 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-white/70 text-[13.5px] leading-[1.75] font-light opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {svc.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A23F] group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// HOW WE WORK — light cream theme
// ─────────────────────────────────────────────
const steps = [
  {
    number: "I",
    title: "Strategic Mandate Definition",
    desc: "We begin with clarity — understanding business strategy, organisational context, governance priorities, and leadership expectations.",
  },
  {
    number: "II",
    title: "Market Mapping",
    desc: "We conduct comprehensive market mapping to identify relevant leadership talent across industries and competitive landscapes.",
  },
  {
    number: "III",
    title: "Rigorous Evaluation",
    desc: "We apply structured evaluation frameworks to assess judgement, adaptability, cultural alignment, and long-term leadership impact.",
  },
  {
    number: "IV",
    title: "Stakeholder Alignment",
    desc: "We maintain close alignment with Boards and stakeholders throughout the process to ensure precision and confidence in decision-making.",
  },
];

export const HowWeWork = () => {
  return (
    <section
      id="how-we-work"
      className="py-24 md:py-32 bg-[#F4F1EA] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#C9A23F0D,transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#C9A23F] uppercase tracking-[0.4em] text-xs font-light mb-4">
            How We Work
          </p>

          <div className="w-12 h-px bg-[#C9A23F]/40 mx-auto mb-6" />

          <h2
            className="text-3xl md:text-5xl font-light text-[#0F4C5C] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            A Structured & Disciplined
            <br />
            <em className="not-italic text-[#C9A23F]">Approach</em>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-[#5b6f77] text-[15px] leading-[1.9] font-light">
            Our process is research-driven, structured, and discreet. Every
            engagement is designed to align leadership capability with long-term
            enterprise value.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-[52px] h-[52px] rounded-full border border-[#C9A23F]/40 flex items-center justify-center mb-6 bg-[#F4F1EA] z-10 group-hover:border-[#C9A23F] transition-all duration-500">
                  <span
                    className="text-[#C9A23F] text-base font-light"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {step.number}
                  </span>
                  <div className="absolute inset-0 rounded-full border border-[#C9A23F]/20 scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                <h3 className="text-[#0F4C5C] text-[15px] font-medium mb-3 leading-[1.5]">
                  {step.title}
                </h3>

                <p className="text-[#5b6f77] text-[13.5px] leading-[1.75] font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block border border-[#C9A23F]/30 px-10 py-6 relative">
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent" />
            <div className="absolute -bottom-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent" />
            <p
              className="text-[#0F4C5C] text-lg md:text-xl font-light italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "Every engagement is treated as a singular strategic
              responsibility."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// DOMAINS SECTION — light cream theme
// ─────────────────────────────────────────────
const domains = [
  {
    title: "Industrial",
    description:
      "Leadership across industrial, manufacturing, and engineering organisations driving large-scale operations and transformation.",
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
  },
  {
    title: "Real Estate & Infrastructure",
    description:
      "Executive talent for real estate platforms and infrastructure businesses shaping long-term development and capital deployment.",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
  },
  {
    title: "Consumer",
    description:
      "Leaders enabling brand growth, customer engagement, and commercial excellence across consumer-driven businesses.",
    image: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Leadership for healthcare systems, pharmaceuticals, and life sciences organisations navigating complexity and innovation.",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
  },
  {
    title: "Banking & Financial Services",
    description:
      "Strategic leadership across banking, financial institutions, and investment platforms operating in regulated environments.",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1200",
  },
  {
    title: "Technology, Media & Telecoms",
    description:
      "Leadership for technology-led organisations, digital platforms, and media ecosystems driving innovation and scale.",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
  },
];

export const DomainsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#EAE6DC] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#C9A23F08,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A23F] uppercase tracking-[0.4em] text-xs font-light mb-4">
            Where We Operate
          </p>

          <div className="w-12 h-px bg-[#C9A23F]/40 mx-auto mb-6" />

          <h2
            className="text-3xl md:text-5xl font-light text-[#0F4C5C] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Industries We <em className="not-italic text-[#C9A23F]">Serve</em>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-[#5b6f77] text-[15px] leading-[1.9] font-light">
            We partner with organisations across key sectors where leadership
            capability directly influences enterprise performance and long-term
            value creation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {domains.map((domain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-sm"
              style={{ height: "260px" }}
            >
              <img
                src={domain.image}
                alt={domain.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 transition-all duration-500" />

              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9A23F] group-hover:w-full transition-all duration-700" />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-white text-base font-medium tracking-wide mb-2">
                  {domain.title}
                </h3>
                <p className="text-white/60 text-xs leading-[1.7] font-light opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {domain.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-[#5b6f77] text-sm leading-[1.9] font-light max-w-3xl mx-auto">
            Our functional expertise spans{" "}
            <span className="text-[#C9A23F]">
              Boards & Governance, Chief Executive Officers, Chief Financial
              Officers, Marketing & Sales, Human Resources, Supply Chain,
              Sustainability,
            </span>{" "}
            and Artificial Intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// CLOSING / WHY CHOOSE US — light cream theme
// ─────────────────────────────────────────────
const points = [
  {
    title: "Services",
    desc: "Executive Search, Succession Planning, Career Transition, Interim Management, Diversity",
    back: "We support organisations across the full leadership lifecycle with structured and strategic advisory.",
  },
  {
    title: "Functions",
    desc: "Boards & Governance, CEO, CFO, Marketing & Sales, HR, Supply Chain, Sustainability, AI",
    back: "Our expertise spans critical leadership functions shaping enterprise performance and governance.",
  },
  {
    title: "Industries",
    desc: "Industrial, Real Estate & Infrastructure, Consumer, Healthcare & Life Sciences, BFSI, TMT",
    back: "We partner across sectors where leadership capability directly impacts long-term value creation.",
  },
  {
    title: "Our Philosophy",
    desc: "Leadership alignment drives sustainable performance.",
    back: "When leadership capability aligns with organisational ambition, performance becomes sustainable.",
  },
];

export const ClosingSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F4F1EA] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#C9A23F08,transparent_70%)]" />

      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden
      >
        <span
          className="text-[200px] font-light text-[#C9A23F]/[0.03] whitespace-nowrap"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          LEADERSHIP
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-7"
          >
            <p className="text-[#C9A23F] uppercase tracking-[0.4em] text-xs font-light">
              Closing Perspective
            </p>

            <div className="w-12 h-px bg-[#C9A23F]/40" />

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0F4C5C] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Executive Search is a
              <br />
              <em className="not-italic text-[#C9A23F]">
                Strategic Responsibility
              </em>
            </h2>

            <p className="text-[#5b6f77] leading-[1.9] text-[15px] font-light max-w-md">
              We believe executive search is a strategic responsibility. When
              leadership capability aligns precisely with organisational
              ambition, performance becomes sustainable and governance becomes
              stronger. That is where the advantage begins.
            </p>

            <div className="flex gap-10 pt-4">
              {[
                ["25+", "Years Experience"],
                ["300+", "Mandates Delivered"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p
                    className="text-3xl font-light text-[#C9A23F]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {v}
                  </p>
                  <p className="text-[#5b6f77] text-xs uppercase tracking-widest mt-1">
                    {l}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="group mt-4 inline-flex items-center gap-3 border border-[#0F4C5C]/30 text-[#0F4C5C] text-sm tracking-[0.2em] uppercase px-7 py-4 hover:bg-[#0F4C5C] hover:text-white transition-all duration-400"
            >
              Engage With Us
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

          {/* RIGHT FLIP CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="group"
                style={{ perspective: "1000px", height: "200px" }}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ transformStyle: "preserve-3d" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "rotateY(180deg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "rotateY(0deg)";
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 bg-white border border-[#e6dcc6] p-6 overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C9A23F] to-transparent" />
                    <h3 className="text-[#0F4C5C] text-base font-medium mb-3 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-[#5b6f77] text-[13px] leading-[1.7] font-light">
                      {item.desc}
                    </p>
                    <div
                      className="absolute bottom-5 right-5 text-[#C9A23F]/30 text-xl"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      ◈
                    </div>
                  </div>

                  {/* Back — keep teal on flip cards, it's accent not full-section background */}
                  <div
                    className="absolute inset-0 bg-[#0F4C5C] p-6 flex items-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C9A23F]" />
                    <p className="text-white/85 text-[13.5px] leading-[1.8] font-light">
                      {item.back}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// HOME — Assembles everything
// ─────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ fontFamily: "'Lato', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Lato:wght@300;400;500&display=swap');
      `}</style>

      <Hero />
      <GoldDivider />
      <Introhighlight />
      <GoldDivider />
      <ServicesSection />
      <GoldDivider />
      <HowWeWork />
      <GoldDivider />
      <DomainsSection />
      <GoldDivider />
      <ClosingSection />
    </div>
  );
}
