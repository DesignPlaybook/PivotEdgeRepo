import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import bg from "../../assets/images/bg.webp";

// ─── Tokens ───────────────────────────────────────────────────────
const GOLD = "#C9A23F";
const TEAL = "#0F4C5C";
const DARK = "#123845";
const DEEPER = "#081c23";
const CREAM = "#F4F1EA";
const CREAM_ALT = "#EAE6DC";
const MUTED = "#5b6f77";

// ─── Helpers ──────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
const FadeIn = ({ children, delay = 0, x = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
const GoldLabel = ({ children, center = false, light = false }) => (
  <div
    className={`flex items-center gap-3 mb-3 ${center ? "justify-center" : ""}`}
  >
    <div className="w-6 h-px" style={{ background: GOLD }} />
    <span
      className="text-[0.68rem] tracking-[0.32em] uppercase font-medium"
      style={{ color: GOLD }}
    >
      {children}
    </span>
    <div className="w-6 h-px" style={{ background: GOLD }} />
  </div>
);
const GoldDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A23F]/50 to-transparent" />
);
const Geo = ({ opacity = 0.15, color = GOLD }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    className="w-full h-full"
    style={{ opacity }}
  >
    <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="0.5" />
    <circle
      cx="100"
      cy="100"
      r="70"
      stroke={color}
      strokeWidth="0.3"
      strokeDasharray="4 6"
    />
    <circle cx="100" cy="100" r="50" stroke={color} strokeWidth="0.8" />
    <line
      x1="100"
      y1="10"
      x2="100"
      y2="190"
      stroke={color}
      strokeWidth="0.4"
      strokeDasharray="2 8"
    />
    <line
      x1="10"
      y1="100"
      x2="190"
      y2="100"
      stroke={color}
      strokeWidth="0.4"
      strokeDasharray="2 8"
    />
    <polygon
      points="100,60 122,86 100,112 78,86"
      stroke={color}
      strokeWidth="0.8"
      fill="none"
    />
    <circle cx="100" cy="100" r="5" fill={color} />
  </svg>
);

// ─── Industry data with Unsplash images ───────────────────────────
const industries = [
  {
    key: "Industrial",
    title: "Industrial",
    tag: "Manufacturing · Engineering · Energy",
    desc: "Leaders capable of modernising operations, improving productivity, and navigating cyclical pressures with strategic discipline.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
    stat: "40+",
    statLabel: "Mandates",
  },
  {
    key: "RealEstate",
    title: "Real Estate & Infrastructure",
    tag: "Property · Development · Infrastructure",
    desc: "Disciplined executives who manage capital-intensive assets, long-cycle value creation, and complex stakeholder environments.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    stat: "35+",
    statLabel: "Placements",
  },
  {
    key: "Consumer",
    title: "Consumer",
    tag: "Retail · FMCG · Brand",
    desc: "Agile leaders who understand market dynamics, brand positioning, and the pace of digital disruption in consumer markets.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
    stat: "60+",
    statLabel: "Engagements",
  },
  {
    key: "Healthcare",
    title: "Healthcare & Life Sciences",
    tag: "Healthcare · Pharma · MedTech",
    desc: "Leadership capable of navigating innovation, regulation, and the complex stakeholder landscape of healthcare organisations.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
    stat: "50+",
    statLabel: "Leaders Placed",
  },
  {
    key: "Banking",
    title: "Banking & Financial Services",
    tag: "Banking · Insurance · Asset Management",
    desc: "Executives who combine financial stewardship with transformation capability, risk management, and governance credibility.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop",
    stat: "80+",
    statLabel: "Appointments",
  },
  {
    key: "Technology",
    title: "Technology, Media & Telecom",
    tag: "Technology · Media · Telecom",
    desc: "Leaders who scale platforms, drive competitive differentiation, and embed innovation across digital-first organisations.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    stat: "70+",
    statLabel: "Mandates",
  },
];

const approachSteps = [
  {
    n: "01",
    title: "Strategic Mandate Definition",
    desc: "Aligning with stakeholders to define leadership expectations and success parameters.",
  },
  {
    n: "02",
    title: "Market Mapping & Research",
    desc: "Comprehensive market intelligence and leadership talent mapping across the sector.",
  },
  {
    n: "03",
    title: "Assessment & Benchmarking",
    desc: "Structured evaluation of leadership capability, governance readiness, and cultural fit.",
  },
  {
    n: "04",
    title: "Confidential Execution",
    desc: "Discreet candidate engagement and evaluation across senior leadership networks.",
  },
  {
    n: "05",
    title: "Stakeholder Calibration",
    desc: "Continuous alignment with Boards and leadership teams throughout the process.",
  },
  {
    n: "06",
    title: "Transition Support",
    desc: "Advisory support through onboarding and executive integration milestones.",
  },
];

const diffs = [
  {
    title: "Advisory Orientation",
    body: "Strategic mandate, not transactional placement. Our counsel extends beyond the hire to the health of your leadership architecture.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    tag: "Philosophy",
  },
  {
    title: "Governance-Aware Evaluation",
    body: "Capability assessed within the broader governance ecosystem — not in isolation. We evaluate leaders in the full context of board, culture, and enterprise strategy.",
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
    tag: "Methodology",
  },
  {
    title: "Deep Leadership Networks",
    body: "Access to senior leaders cultivated across industries and geographies over decades — relationships built on trust, not databases.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    tag: "Access",
  },
  {
    title: "Research-Driven Process",
    body: "Structured, evidence-led. Every search anchored in market intelligence and precise capability benchmarking — not instinct alone.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    tag: "Rigour",
  },
  {
    title: "Long-Term Partnership",
    body: "We measure success not by placement speed, but by sustained leadership impact years after the appointment is made.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    tag: "Commitment",
  },
];

const outcomes = [
  { label: "Stronger alignment between leadership and strategy", num: "01" },
  { label: "Reduced succession and governance risk", num: "02" },
  { label: "Accelerated executive integration and onboarding", num: "03" },
  { label: "Sustained enterprise performance over time", num: "04" },
];

// ═══════════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════════
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacityOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img src={bg} alt="" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(8,28,35,0.92) 0%, rgba(15,76,92,0.75) 50%, rgba(18,56,69,0.92) 100%)",
          }}
        />
      </motion.div>

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px)",
        }}
      />

      {/* Geo corners */}
      <div className="absolute top-10 right-10 w-52 h-52 hidden lg:block">
        <Geo opacity={0.14} />
      </div>
      <div className="absolute bottom-20 left-10 w-36 h-36 hidden lg:block">
        <Geo opacity={0.09} />
      </div>

      <motion.div
        style={{ y: textY, opacity: opacityOut }}
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-10 h-px" style={{ background: GOLD }} />
          <span
            className="text-[0.72rem] tracking-[0.38em] uppercase font-medium"
            style={{ color: GOLD }}
          >
            Industries & Domains
          </span>
          <div className="w-10 h-px" style={{ background: GOLD }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35 }}
          className="text-white font-light leading-[1.05] tracking-wide mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
          }}
        >
          Our{" "}
          <em className="not-italic font-semibold" style={{ color: GOLD }}>
            Domains
          </em>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-24 h-px mx-auto mb-8"
          style={{
            background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="text-white/65 text-lg md:text-xl leading-[1.9] font-light max-w-2xl mx-auto"
        >
          We partner with organisations across sectors to appoint leadership
          capable of navigating complexity, accelerating transformation, and
          delivering sustained enterprise performance.
        </motion.p>

        {/* Sector pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {industries.map((ind, i) => (
            <motion.span
              key={ind.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.08 }}
              className="px-4 py-1.5 text-[0.65rem] tracking-[0.2em] uppercase font-light"
              style={{ border: `1px solid ${GOLD}35`, color: `${GOLD}90` }}
            >
              {ind.title}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: `${GOLD}45` }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-[#C9A23F]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// INDUSTRIES — Full-screen stacked panels (unique: NOT tabs, NOT carousel)
// Each industry = its own cinematic panel with overlapping text
// ═══════════════════════════════════════════════════════════════════
const IndustryPanel = ({ industry, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.0]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative h-[70vh] min-h-[480px] overflow-hidden">
      {/* Parallax image */}
      <motion.div
        style={{ scale: imgScale, y: imgY }}
        className="absolute inset-0"
      >
        <img
          src={industry.img}
          alt={industry.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              index % 2 === 0
                ? "linear-gradient(to right, rgba(8,28,35,0.95) 0%, rgba(8,28,35,0.7) 50%, rgba(8,28,35,0.15) 100%)"
                : "linear-gradient(to left,  rgba(8,28,35,0.95) 0%, rgba(8,28,35,0.7) 50%, rgba(8,28,35,0.15) 100%)",
          }}
        />
      </motion.div>

      {/* Content block */}
      <div
        className={`relative z-10 h-full flex items-center px-10 md:px-20 ${index % 2 === 0 ? "" : "justify-end"}`}
      >
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg"
        >
          {/* Index + tag */}
          <div className="flex items-center gap-4 mb-5">
            <span
              className="text-[0.62rem] tracking-[0.35em] uppercase font-medium"
              style={{ color: GOLD }}
            >
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(industries.length).padStart(2, "0")}
            </span>
            <div
              className="h-px flex-1 max-w-[40px]"
              style={{ background: `${GOLD}50` }}
            />
            <span
              className="text-[0.6rem] tracking-[0.2em] uppercase"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {industry.tag.split("·")[0].trim()}
            </span>
          </div>

          {/* Title — large serif */}
          <h2
            className="text-white font-light leading-none mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
            }}
          >
            {industry.title}
          </h2>

          {/* Gold rule */}
          <div className="w-10 h-px mb-5" style={{ background: GOLD }} />

          {/* Tag pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {industry.tag.split("·").map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-[0.58rem] tracking-[0.18em] uppercase font-medium"
                style={{
                  border: `1px solid ${GOLD}40`,
                  color: GOLD,
                  background: `${GOLD}08`,
                }}
              >
                {t.trim()}
              </span>
            ))}
          </div>

          <p className="text-white/65 text-[15px] leading-[1.9] font-light mb-7">
            {industry.desc}
          </p>

          {/* Stat */}
          <div
            className="flex items-center gap-5 pt-5"
            style={{ borderTop: `1px solid rgba(255,255,255,0.08)` }}
          >
            <div>
              <div
                className="text-2xl font-light"
                style={{
                  color: GOLD,
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {industry.stat}
              </div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40">
                {industry.statLabel}
              </div>
            </div>
            <div className="w-px h-8" style={{ background: `${GOLD}30` }} />
            <p
              className="text-xs text-white/30 font-light italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Within this sector
            </p>
          </div>
        </motion.div>
      </div>

      {/* Sector number watermark (far right/left) */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? "right-8" : "left-8"} hidden lg:block select-none pointer-events-none`}
      >
        <span
          className="text-[10rem] font-light leading-none"
          style={{
            color: "rgba(255,255,255,0.03)",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

const IndustriesSection = () => (
  <section>
    <GoldDivider />
    {/* Header */}
    <div
      style={{ background: DEEPER }}
      className="py-16 px-6 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#C9A23F 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <GoldLabel>Sectors</GoldLabel>
              <h2
                className="text-white font-light mt-1"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                }}
              >
                Industries We{" "}
                <span className="font-semibold" style={{ color: GOLD }}>
                  Serve
                </span>
              </h2>
              <div className="mt-3 w-14 h-px" style={{ background: GOLD }} />
            </div>
            <p
              className="text-sm leading-relaxed max-w-sm font-light"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Our experience spans six core sectors where leadership quality
              directly influences enterprise performance and long-term value
              creation.
            </p>
          </div>
        </FadeUp>
      </div>
    </div>

    {/* Stacked panels */}
    {industries.map((ind, i) => (
      <IndustryPanel key={ind.key} industry={ind} index={i} />
    ))}
  </section>
);

// ═══════════════════════════════════════════════════════════════════
// EXECUTIVE SEARCH — Bold typographic section with 6-step grid
// Design: large background text, overlapping elements, dark/gold
// ═══════════════════════════════════════════════════════════════════
const SearchSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgImgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{ background: CREAM }}
      className="relative overflow-hidden"
    >
      <GoldDivider />

      {/* ── Intro: half-image, half text ── */}
      <div className="grid lg:grid-cols-2 min-h-[560px]">
        {/* Image half */}
        <div className="relative overflow-hidden min-h-[360px]">
          <motion.div
            style={{ y: bgImgY }}
            className="absolute inset-0 scale-110"
          >
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(8,28,35,0.1) 0%, rgba(8,28,35,0.0) 60%, rgba(244,241,234,1) 100%)",
              }}
            />
          </motion.div>

          {/* Floating quote on image */}
          <FadeIn x={-30} delay={0.2}>
            <div className="absolute bottom-10 left-10 max-w-xs">
              <div
                className="px-6 py-5"
                style={{
                  background: "rgba(18,56,69,0.88)",
                  backdropFilter: "blur(8px)",
                  borderLeft: `3px solid ${GOLD}`,
                }}
              >
                <p
                  className="text-white italic text-base font-light leading-relaxed"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "We are not intermediaries. We are advisors entrusted with
                  decisions that influence the direction of the enterprise."
                </p>
                <p
                  className="text-[0.62rem] tracking-[0.2em] uppercase mt-3 font-medium"
                  style={{ color: GOLD }}
                >
                  — PivotEdge Partners
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Text half */}
        <div className="flex flex-col justify-center px-12 md:px-16 py-16 relative">
          <FadeIn x={30}>
            <GoldLabel>Executive Search</GoldLabel>
            <h2
              className="font-light leading-tight mt-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: TEAL,
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
              }}
            >
              Search That Strengthens
              <br />
              <em className="font-semibold italic" style={{ color: GOLD }}>
                Strategic Advantage
              </em>
            </h2>
            <div className="mt-5 w-10 h-px" style={{ background: GOLD }} />
            <p
              className="mt-5 text-sm leading-[1.9] font-light max-w-md"
              style={{ color: MUTED }}
            >
              Leadership appointments are among the most consequential decisions
              an organisation makes. PivotEdge Partners approaches executive
              search as a strategic advisory engagement — working closely with
              Boards to understand governance structure and future leadership
              needs.
            </p>
            <p
              className="mt-4 text-sm leading-[1.9] font-light max-w-md"
              style={{ color: MUTED }}
            >
              Our work is confidential, research-driven, and outcome-focused.
              Every mandate treated as a singular strategic responsibility.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ── 6-step process — alternating number/card layout ── */}
      <div style={{ background: DARKER }} className="relative overflow-hidden">
        {/* Oversize background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="text-[18vw] font-light leading-none"
            style={{
              color: "rgba(255,255,255,0.015)",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            PROCESS
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <FadeUp>
            <div className="text-center mb-16">
              <GoldLabel center>Our Approach</GoldLabel>
              <h3 className="text-white text-3xl md:text-4xl font-light mt-2">
                Six stages. One{" "}
                <span className="font-semibold" style={{ color: GOLD }}>
                  strategic
                </span>{" "}
                purpose.
              </h3>
            </div>
          </FadeUp>

          {/* Steps: 2-col on md, alternating layout with connecting line */}
          <div className="grid md:grid-cols-2 gap-0 relative">
            {/* Vertical centre spine on lg */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{
                background: `linear-gradient(to bottom, transparent, ${GOLD}40, transparent)`,
              }}
            />

            {approachSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <FadeUp key={step.n} delay={i * 0.08}>
                  <div
                    className={`group relative p-8 md:p-10 border-b transition-all duration-300 hover:bg-white/3
                    ${isLeft ? "md:pr-16 md:text-right md:border-r" : "md:pl-16 md:border-l-0"}
                    ${i >= approachSteps.length - 2 ? "border-b-0" : ""}`}
                    style={{ borderColor: `${GOLD}12` }}
                  >
                    {/* Step number — large, positional */}
                    <div
                      className={`flex items-start gap-5 ${isLeft ? "md:flex-row-reverse" : ""}`}
                    >
                      <div className="flex-shrink-0">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{
                            border: `1px solid ${GOLD}40`,
                            background: `${GOLD}08`,
                          }}
                        >
                          <span
                            className="text-sm font-medium"
                            style={{ color: GOLD }}
                          >
                            {step.n}
                          </span>
                        </div>
                      </div>
                      <div className={`pt-1 ${isLeft ? "md:text-right" : ""}`}>
                        <h4 className="text-white font-semibold text-sm tracking-wide mb-2 transition-colors group-hover:text-amber-400">
                          {step.title}
                        </h4>
                        <p
                          className="text-xs leading-[1.8] font-light"
                          style={{ color: "rgba(255,255,255,0.45)" }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Spine connector dot */}
                    <div
                      className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-colors duration-300 group-hover:scale-125"
                      style={{
                        background: GOLD,
                        boxShadow: `0 0 8px ${GOLD}60`,
                      }}
                    />
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Darker background for process
const DARKER = "#0a2730";

// ═══════════════════════════════════════════════════════════════════
// DIFFERENTIATORS — Vertical accordion with expanding image reveal
// Unique design: click to expand, image slides in
// ═══════════════════════════════════════════════════════════════════
const DifferentiatorsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{ background: CREAM_ALT }}
      className="relative overflow-hidden"
    >
      <GoldDivider />

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <GoldLabel>Why PivotEdge</GoldLabel>
              <h2
                className="font-light mt-1"
                style={{ color: TEAL, fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
              >
                What <span className="font-semibold">Differentiates</span> Us
              </h2>
              <div className="mt-3 w-14 h-px" style={{ background: GOLD }} />
            </div>
            <p
              className="text-sm leading-relaxed max-w-sm font-light"
              style={{ color: MUTED }}
            >
              Five principles that separate advisory excellence from
              conventional executive search.
            </p>
          </div>
        </FadeUp>

        {/* Accordion layout */}
        <div
          className="grid lg:grid-cols-[1fr_480px] gap-0 overflow-hidden rounded-sm"
          style={{
            border: `1px solid rgba(201,162,63,0.2)`,
            boxShadow: "0 20px 60px rgba(15,76,92,0.08)",
          }}
        >
          {/* Left: accordion items */}
          <div style={{ background: "#fff" }}>
            {diffs.map((d, i) => (
              <FadeUp key={d.title} delay={i * 0.06}>
                <div
                  onClick={() => setActive(i)}
                  className="group cursor-pointer border-b transition-all duration-300"
                  style={{
                    borderColor: `${GOLD}15`,
                    background: active === i ? `${TEAL}06` : "transparent",
                  }}
                >
                  {/* Header row */}
                  <div className="flex items-center gap-5 px-8 py-6">
                    {/* Number badge */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: active === i ? GOLD : `${GOLD}12`,
                        border: `1px solid ${active === i ? GOLD : `${GOLD}40`}`,
                      }}
                    >
                      <span
                        className="text-[0.6rem] font-semibold"
                        style={{ color: active === i ? "#fff" : GOLD }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-0.5">
                        <span
                          className="text-[0.58rem] tracking-[0.25em] uppercase font-medium"
                          style={{ color: `${GOLD}80` }}
                        >
                          {d.tag}
                        </span>
                      </div>
                      <h3
                        className="font-semibold text-sm transition-colors"
                        style={{ color: active === i ? TEAL : "#2a3a40" }}
                      >
                        {d.title}
                      </h3>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: active === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 flex-shrink-0 flex items-center justify-center"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        width="14"
                        height="14"
                        fill="none"
                      >
                        <line
                          x1="8"
                          y1="2"
                          x2="8"
                          y2="14"
                          stroke={active === i ? GOLD : MUTED}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <line
                          x1="2"
                          y1="8"
                          x2="14"
                          y2="8"
                          stroke={active === i ? GOLD : MUTED}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Expandable body */}
                  <AnimatePresence initial={false}>
                    {active === i && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-7 pl-[5.25rem]">
                          <div
                            className="w-6 h-px mb-4"
                            style={{ background: GOLD }}
                          />
                          <p
                            className="text-sm leading-[1.9] font-light"
                            style={{ color: MUTED }}
                          >
                            {d.body}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Right: image panel — crossfades between items */}
          <div
            className="relative hidden lg:block overflow-hidden"
            style={{ minHeight: "400px" }}
          >
            {diffs.map((d, i) => (
              <motion.div
                key={d.title}
                initial={false}
                animate={{ opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img
                  src={d.img}
                  alt={d.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,28,35,0.9) 0%, rgba(8,28,35,0.4) 60%, rgba(8,28,35,0.1) 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-8 h-px mb-4" style={{ background: GOLD }} />
                  <p
                    className="text-[0.62rem] tracking-[0.25em] uppercase font-medium mb-2"
                    style={{ color: GOLD }}
                  >
                    {d.tag}
                  </p>
                  <h3
                    className="text-white text-xl font-light leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {d.title}
                  </h3>
                  {/* Progress indicators */}
                  <div className="flex gap-2 mt-5">
                    {diffs.map((_, j) => (
                      <button
                        key={j}
                        onClick={() => setActive(j)}
                        className="h-px transition-all duration-300 cursor-pointer"
                        style={{
                          width: active === j ? "28px" : "12px",
                          background: active === j ? GOLD : `${GOLD}30`,
                        }}
                      />
                    ))}
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

// ═══════════════════════════════════════════════════════════════════
// OUTCOMES — Cinematic dark section with large type + image backdrop
// Unique design: full-width overlapping image/text composition
// ═══════════════════════════════════════════════════════════════════
const OutcomesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: DEEPER }}
    >
      <GoldDivider />

      {/* Full-bleed backdrop image */}
      <div className="absolute inset-0">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(8,28,35,0.98) 0%, rgba(8,28,35,0.8) 50%, rgba(8,28,35,0.98) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
          {/* Left — large editorial heading */}
          <FadeIn x={-30}>
            <GoldLabel>Outcomes</GoldLabel>
            <h2
              className="text-white font-light leading-tight mt-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)",
              }}
            >
              Leadership Decisions That
              <br />
              <em className="font-semibold italic" style={{ color: GOLD }}>
                Strengthen
              </em>
              <br />
              Enterprise Performance
            </h2>
            <div className="mt-6 w-12 h-px" style={{ background: GOLD }} />
            <p
              className="mt-6 text-sm leading-[1.9] font-light max-w-md"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Our engagements focus on long-term organisational impact. The
              outcome is not simply a placement — it is stronger alignment
              between strategy, governance, and performance.
            </p>

            {/* Pull quote */}
            <div
              className="mt-10 pl-6 py-2"
              style={{ borderLeft: `3px solid ${GOLD}` }}
            >
              <p
                className="text-white italic text-lg font-light leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "When leadership is right, organisations move with confidence."
              </p>
              <p
                className="text-[0.62rem] tracking-[0.2em] uppercase mt-3 font-medium"
                style={{ color: GOLD }}
              >
                — PivotEdge Partners
              </p>
            </div>
          </FadeIn>

          {/* Right — outcome items as numbered statements */}
          <div>
            {outcomes.map((o, i) => (
              <motion.div
                key={o.num}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex items-start gap-6 py-7 cursor-default"
                style={{
                  borderBottom:
                    i < outcomes.length - 1
                      ? `1px solid rgba(255,255,255,0.06)`
                      : "none",
                }}
              >
                {/* Number column */}
                <div className="flex-shrink-0 pt-1">
                  <span
                    className="text-4xl font-light leading-none"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: `${GOLD}25`,
                    }}
                  >
                    {o.num}
                  </span>
                </div>

                {/* Text + animated bar */}
                <div className="flex-1 min-w-0">
                  <div
                    className="w-0 h-px mb-4 group-hover:w-full transition-all duration-500"
                    style={{ background: GOLD }}
                  />
                  <p className="text-white text-base font-light leading-snug group-hover:text-amber-300 transition-colors duration-300">
                    {o.label}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div className="flex-shrink-0 pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                    <line
                      x1="3"
                      y1="8"
                      x2="13"
                      y2="8"
                      stroke={GOLD}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <polyline
                      points="9,4 13,8 9,12"
                      stroke={GOLD}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            ))}

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-10"
            >
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300"
                style={{ background: GOLD, color: "#fff" }}
              >
                Begin a Conversation
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// CLOSING STRIP — Functional expertise tags + brand statement
// Unique: pure typographic / editorial strip, no heavy UI
// ═══════════════════════════════════════════════════════════════════
const ClosingStrip = () => {
  const inView = useInView(useRef(null), { once: true });
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true });

  const functionalAreas = [
    "Boards & Governance",
    "Chief Executives",
    "CFOs",
    "Marketing & Sales",
    "Human Resources",
    "Supply Chain",
    "CSR & Sustainability",
    "Artificial Intelligence",
  ];

  return (
    <section
      ref={ref}
      style={{ background: CREAM }}
      className="relative overflow-hidden"
    >
      <GoldDivider />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <FadeUp>
            <GoldLabel>Functional Expertise</GoldLabel>
            <h2
              className="font-light mt-1 mb-8"
              style={{ color: TEAL, fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
            >
              Every major function. Every critical level.
            </h2>
            <div className="flex flex-wrap gap-3">
              {functionalAreas.map((f, i) => (
                <motion.span
                  key={f}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="group px-5 py-2.5 text-xs tracking-[0.18em] uppercase font-light cursor-default transition-all duration-300"
                  style={{ border: `1px solid ${TEAL}25`, color: TEAL }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = GOLD;
                    e.currentTarget.style.color = GOLD;
                    e.currentTarget.style.background = `${GOLD}08`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${TEAL}25`;
                    e.currentTarget.style.color = TEAL;
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {f}
                </motion.span>
              ))}
            </div>
          </FadeUp>

          {/* Right: brand closing mark */}
          <FadeIn x={30} delay={0.2}>
            <div className="hidden md:block text-right">
              <div className="w-24 h-24 ml-auto mb-6 opacity-10">
                <Geo />
              </div>
              <p
                className="text-xs tracking-[0.3em] uppercase font-medium mb-1"
                style={{ color: GOLD }}
              >
                PivotEdge Partners
              </p>
              <p className="text-xs font-light" style={{ color: MUTED }}>
                Where advantage begins.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════
export default function Domains() {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>
      <Hero />
      <IndustriesSection />
      <SearchSection />
      <DifferentiatorsSection />
      <OutcomesSection />
      <ClosingStrip />
    </div>
  );
}
