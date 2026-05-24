import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import bg from "../../assets/images/bg.webp";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const C = {
  cream: "#F4F1EA",
  creamAlt: "#EAE6DC",
  teal: "#0F4C5C",
  dark: "#123845",
  gold: "#C9A23F",
  muted: "#5b6f77",
};

// ─── Unsplash photo map per industry (curated, royalty-free) ─────────────────
const INDUSTRY_PHOTOS = {
  Industrial:
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1400&q=80&fit=crop",
  RealEstate:
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80&fit=crop",
  Consumer:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80&fit=crop",
  Healthcare:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80&fit=crop",
  Banking:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=80&fit=crop",
  Technology:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80&fit=crop",
};

// ─── Industries data ──────────────────────────────────────────────────────────
const industries = [
  {
    key: "Industrial",
    title: "Industrial",
    subtitle: "Manufacturing · Engineering · Energy",
    desc: "Leaders capable of modernising operations, improving productivity, and navigating cyclical pressures with strategic discipline.",
    stat: "38%",
    statLabel: "of mandates",
  },
  {
    key: "RealEstate",
    title: "Real Estate & Infrastructure",
    subtitle: "Property · Development · Infrastructure",
    desc: "Disciplined executives who manage capital-intensive assets, long-cycle value creation, and complex stakeholder environments.",
    stat: "12+",
    statLabel: "countries served",
  },
  {
    key: "Consumer",
    title: "Consumer",
    subtitle: "Retail · FMCG · Brand",
    desc: "Agile leaders who understand market dynamics, brand positioning, and the pace of digital disruption in consumer markets.",
    stat: "Global",
    statLabel: "talent access",
  },
  {
    key: "Healthcare",
    title: "Healthcare & Life Sciences",
    subtitle: "Healthcare · Pharma · MedTech",
    desc: "Leadership capable of navigating innovation, regulation, and the complex stakeholder landscape of healthcare organisations.",
    stat: "C-Suite",
    statLabel: "specialist focus",
  },
  {
    key: "Banking",
    title: "Banking & Financial Services",
    subtitle: "Banking · Insurance · Asset Management",
    desc: "Executives who combine financial stewardship with transformation capability, risk management, and governance credibility.",
    stat: "Board",
    statLabel: "level expertise",
  },
  {
    key: "Technology",
    title: "Technology, Media & Telecom",
    subtitle: "Technology · Media · Telecom",
    desc: "Leaders who scale platforms, drive competitive differentiation, and embed innovation across digital-first organisations.",
    stat: "AI",
    statLabel: "ready leaders",
  },
];

// ─── Approach steps ───────────────────────────────────────────────────────────
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

// ─── Differentiators ─────────────────────────────────────────────────────────
const diffs = [
  {
    title: "Advisory Orientation",
    desc: "Strategic mandate, not transactional placement.",
  },
  {
    title: "Governance-Aware Evaluation",
    desc: "Capability assessed within the governance ecosystem.",
  },
  {
    title: "Leadership Networks",
    desc: "Access to senior leaders across industries and geographies.",
  },
  {
    title: "Research-Driven Process",
    desc: "Market intelligence guides every search mandate.",
  },
  {
    title: "Long-Term Partnership",
    desc: "Ongoing leadership strategy beyond individual mandates.",
  },
];

const outcomes = [
  "Stronger alignment between leadership and strategy",
  "Reduced succession and governance risk",
  "Accelerated executive integration and onboarding",
  "Sustained enterprise performance over time",
];

// ─── Shared Animation Wrappers ────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const FadeIn = ({ children, delay = 0, x = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

// ─── Gold section label ───────────────────────────────────────────────────────
const GoldLabel = ({ children, center = false }) => (
  <div
    className={`flex items-center gap-3 mb-3 ${center ? "justify-center" : ""}`}
  >
    <div className="w-6 h-[1px] bg-[#C9A23F]" />
    <span className="text-[#C9A23F] text-[0.68rem] tracking-[0.3em] uppercase font-medium">
      {children}
    </span>
    <div className="w-6 h-[1px] bg-[#C9A23F]" />
  </div>
);

// ─── Parallax image wrapper ───────────────────────────────────────────────────
const ParallaxImage = ({ src, alt = "", speed = 0.15, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover scale-[1.25]"
      />
    </div>
  );
};

// ─── Animated counter ─────────────────────────────────────────────────────────
function AnimCounter({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || isNaN(target)) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {isNaN(target) ? target : count}
      {suffix}
    </span>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
export default function Domains() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  // Hero parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(heroScroll, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>
      {/* ══ PARALLAX HERO ══ */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-end overflow-hidden"
      >
        {/* Parallax background */}
        <motion.div className="absolute inset-0" style={{ y: heroBgY }}>
          <img
            src={bg}
            className="w-full h-full object-cover scale-110"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06151a]/60 via-[#123845]/70 to-[#123845]" />
        </motion.div>

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px)",
          }}
        />

        {/* Decorative rings */}
        <div className="absolute top-16 right-16 hidden lg:block pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            className="w-48 h-48 opacity-[0.12]"
          >
            <circle
              cx="100"
              cy="100"
              r="90"
              stroke="#C9A23F"
              strokeWidth="0.5"
            />
            <circle
              cx="100"
              cy="100"
              r="65"
              stroke="#C9A23F"
              strokeWidth="0.3"
              strokeDasharray="4 8"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
              stroke="#C9A23F"
              strokeWidth="0.8"
            />
            <polygon
              points="100,65 118,82 100,99 82,82"
              stroke="#C9A23F"
              strokeWidth="0.8"
              fill="none"
            />
            <circle cx="100" cy="100" r="4" fill="#C9A23F" />
          </svg>
        </div>

        {/* Hero content — bottom-aligned editorial style */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full pb-24 px-8 md:px-16 lg:px-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#C9A23F]" />
              <span className="text-[#C9A23F] text-xs tracking-[0.35em] uppercase font-medium">
                Industries & Domains
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
              <div>
                <h1 className="text-white text-6xl md:text-8xl font-light leading-[1.05] mb-3">
                  Our
                </h1>
                <h1
                  className="text-[#C9A23F] text-6xl md:text-8xl font-semibold leading-[1.05]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                  }}
                >
                  Doamins
                </h1>
              </div>
              <div className="max-w-lg">
                <div className="w-32 h-[1px] bg-gradient-to-r from-[#C9A23F]/70 to-transparent mb-6" />
                <p className="text-gray-300 text-lg leading-[1.9] font-light">
                  We partner with organisations across sectors to appoint
                  leadership capable of navigating complexity, accelerating
                  transformation, and delivering sustained enterprise
                  performance.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-[#C9A23F]/40 text-[10px] tracking-[0.35em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#C9A23F]/60 to-transparent" />
        </motion.div>
      </section>

      {/* ══ FULL-BLEED INDUSTRY SELECTOR ══ */}
      <section className="relative bg-[#123845]">
        <div className="grid lg:grid-cols-[300px_1fr] min-h-[700px]">
          {/* LEFT — vertical tab nav */}
          <div className="bg-[#0c2e38] border-r border-white/5 flex flex-col justify-center py-10">
            <div className="px-8 mb-8">
              <GoldLabel>Sectors</GoldLabel>
              <h2 className="text-white text-2xl font-light">
                Industries We{" "}
                <span className="font-semibold text-[#C9A23F]">Serve</span>
              </h2>
            </div>
            {industries.map((ind, i) => (
              <button
                key={ind.key}
                onClick={() => setActiveIndustry(i)}
                className={`group w-full text-left px-8 py-5 border-l-2 transition-all duration-300 relative
                  ${
                    activeIndustry === i
                      ? "border-l-[#C9A23F] bg-white/5"
                      : "border-l-transparent hover:border-l-[#C9A23F]/40 hover:bg-white/3"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className={`text-sm font-medium tracking-wide transition-colors ${activeIndustry === i ? "text-[#C9A23F]" : "text-white/60 group-hover:text-white/90"}`}
                    >
                      {ind.title}
                    </p>
                    <p className="text-white/30 text-[10px] tracking-widest mt-0.5">
                      {ind.subtitle.split("·")[0].trim()}
                    </p>
                  </div>
                  {activeIndustry === i && (
                    <motion.div
                      layoutId="arrow"
                      className="w-5 h-5 flex items-center justify-center"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        className="w-3.5 h-3.5 text-[#C9A23F]"
                      >
                        <polyline
                          points="5,3 11,8 5,13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT — full-bleed industry photo + overlay content */}
          <div className="relative overflow-hidden min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={INDUSTRY_PHOTOS[industries[activeIndustry].key]}
                  alt={industries[activeIndustry].title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay — heavy on left for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#06151a]/90 via-[#06151a]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06151a]/60 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Content over photo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeIndustry}`}
                className="absolute inset-0 flex flex-col justify-end p-10 md:p-14"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[#C9A23F] text-xs tracking-[0.3em] uppercase mb-3 font-medium">
                  {String(activeIndustry + 1).padStart(2, "0")} /{" "}
                  {String(industries.length).padStart(2, "0")}
                </p>
                <h3
                  className="text-white text-4xl md:text-5xl font-light mb-2 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {industries[activeIndustry].title}
                </h3>
                <div className="w-10 h-[2px] bg-[#C9A23F] mb-4" />
                <p className="text-[#C9A23F] text-xs tracking-widest uppercase mb-4 font-medium">
                  {industries[activeIndustry].subtitle}
                </p>
                <p className="text-gray-200 text-base leading-[1.9] font-light max-w-lg">
                  {industries[activeIndustry].desc}
                </p>

                {/* Stat badge */}
                <div className="mt-8 inline-flex items-center gap-4 border border-[#C9A23F]/30 rounded-sm px-6 py-3 bg-black/20 backdrop-blur-sm w-fit">
                  <span
                    className="text-[#C9A23F] text-2xl font-light"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {industries[activeIndustry].stat}
                  </span>
                  <span className="text-white/50 text-xs tracking-widest uppercase">
                    {industries[activeIndustry].statLabel}
                  </span>
                </div>

                {/* Prev/next nav */}
                <div className="flex gap-3 mt-8">
                  {[
                    { dir: "prev", dis: activeIndustry === 0 },
                    {
                      dir: "next",
                      dis: activeIndustry === industries.length - 1,
                    },
                  ].map((b) => (
                    <button
                      key={b.dir}
                      onClick={() =>
                        setActiveIndustry((a) =>
                          b.dir === "prev"
                            ? Math.max(0, a - 1)
                            : Math.min(industries.length - 1, a + 1),
                        )
                      }
                      disabled={b.dis}
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C9A23F] hover:bg-[#C9A23F]/10 transition disabled:opacity-20 text-white cursor-pointer"
                    >
                      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
                        <polyline
                          points={
                            b.dir === "prev"
                              ? "12,4 6,10 12,16"
                              : "8,4 14,10 8,16"
                          }
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══ EDITORIAL: EXECUTIVE SEARCH — image left, text right ══ */}
      <section className="bg-[#F4F1EA] relative overflow-hidden">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F]/60 to-transparent" />

        <div className="grid lg:grid-cols-2 min-h-[70vh]">
          {/* Image panel with parallax */}
          <FadeIn x={-40} className="relative min-h-[400px] lg:min-h-0">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&q=80&fit=crop"
              alt="Executive meeting"
              className="absolute inset-0 w-full h-full"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-10 left-10 border border-[#C9A23F]/40 bg-[#123845]/80 backdrop-blur-sm px-6 py-4 rounded-sm">
              <p className="text-[#C9A23F] text-xs tracking-[0.3em] uppercase mb-1">
                Our Approach
              </p>
              <p className="text-white text-sm font-light">
                Confidential. Research-driven.
              </p>
            </div>
          </FadeIn>

          {/* Text panel */}
          <FadeIn
            x={40}
            className="flex flex-col justify-center px-10 md:px-16 py-20 bg-[#F4F1EA]"
          >
            <GoldLabel>Executive Search</GoldLabel>
            <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-3 mb-5 leading-tight">
              Search That Strengthens{" "}
              <span
                className="text-[#C9A23F] italic font-semibold block"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Strategic Advantage
              </span>
            </h2>
            <div className="w-12 h-[2px] bg-[#C9A23F] mb-8" />
            <p className="text-[#5b6f77] text-sm leading-[1.9] font-light mb-5">
              Leadership appointments are among the most consequential decisions
              an organisation makes. PivotEdge Partners approaches executive
              search as a strategic advisory engagement — working closely with
              Boards to understand governance structure and future leadership
              needs.
            </p>
            <p className="text-[#5b6f77] text-sm leading-[1.9] font-light mb-10">
              Our work is confidential, research-driven, and outcome-focused. We
              are not intermediaries. We are advisors entrusted with decisions
              that influence the direction of the enterprise.
            </p>

            {/* Pull quote */}
            <div className="border-l-4 border-[#C9A23F] pl-6 py-2">
              <p
                className="text-[#0F4C5C] italic text-lg font-light leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "We are not intermediaries. We are advisors entrusted with
                decisions that influence the direction of the enterprise."
              </p>
              <p className="text-[#C9A23F] text-[0.68rem] tracking-[0.2em] uppercase mt-3 font-medium">
                — PivotEdge Partners
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ 6-STEP PROCESS — horizontal numbered timeline ══ */}
      <section className="bg-[#EAE6DC] relative overflow-hidden py-24 px-6">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F]/60 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <GoldLabel center>How We Work</GoldLabel>
              <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-2">
                Our <span className="font-semibold">Six-Stage</span> Process
              </h2>
              <div className="mt-4 w-16 h-[2px] bg-[#C9A23F] mx-auto" />
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-0 rounded-2xl overflow-hidden border border-[#e6dcc6] bg-white/50">
            {approachSteps.map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.08}>
                <div
                  className={`group relative p-7 hover:bg-white transition-all duration-300 h-full
                  ${i < approachSteps.length - 1 ? "border-r border-[#e6dcc6]" : ""}`}
                >
                  <span className="absolute top-0 left-0 w-0 h-[3px] bg-[#C9A23F] group-hover:w-full transition-all duration-500" />
                  <span
                    className="block text-4xl font-light text-[#C9A23F]/25 mb-5 leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {step.n}
                  </span>
                  <h4 className="text-[#0F4C5C] text-xs font-semibold tracking-wide mb-3 leading-snug group-hover:text-[#C9A23F] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[#5b6f77] text-xs leading-[1.8] font-light">
                    {step.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EDITORIAL: DIFFERENTIATORS — text left, image right ══ */}
      <section className="bg-[#F4F1EA] relative overflow-hidden">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F]/60 to-transparent" />

        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          {/* Text panel */}
          <FadeIn
            x={-40}
            className="flex flex-col justify-center px-10 md:px-16 py-20 order-2 lg:order-1"
          >
            <GoldLabel>Why PivotEdge</GoldLabel>
            <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-3 mb-8 leading-tight">
              What <span className="font-semibold">Differentiates</span> Us
            </h2>
            <div className="space-y-6">
              {diffs.map((d, i) => (
                <FadeUp key={d.title} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-start gap-5 p-5 rounded-xl border border-[#e6dcc6] bg-white/60 hover:border-[#C9A23F]/50 hover:bg-white hover:shadow-sm transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="absolute left-0 top-0 h-0 w-[3px] bg-[#C9A23F] group-hover:h-full transition-all duration-300" />
                    <div className="w-8 h-8 rounded-full bg-[#C9A23F]/10 border border-[#C9A23F]/25 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#C9A23F]/20 transition-colors">
                      <span className="text-[#C9A23F] text-[10px] font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[#0F4C5C] text-sm font-semibold mb-1 group-hover:text-[#C9A23F] transition-colors">
                        {d.title}
                      </h3>
                      <p className="text-[#5b6f77] text-xs leading-relaxed font-light">
                        {d.desc}
                      </p>
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </FadeIn>

          {/* Image panel */}
          <FadeIn x={40} className="relative min-h-[500px] order-1 lg:order-2">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80&fit=crop"
              alt="Leadership discussion"
              className="absolute inset-0 w-full h-full"
            />
            {/* Text on photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#123845]/80 via-transparent to-transparent flex items-end p-10">
              <div>
                <p className="text-[#C9A23F] text-xs tracking-[0.3em] uppercase mb-2 font-medium">
                  Our Difference
                </p>
                <p
                  className="text-white text-2xl font-light leading-relaxed max-w-xs"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Advisory excellence over transactional placement.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ OUTCOMES — full-bleed photo with content overlay ══ */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1800&q=80&fit=crop"
          alt="Enterprise performance"
          className="absolute inset-0 w-full h-full"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06151a]/90 via-[#06151a]/70 to-[#06151a]/40" />
        <div className="absolute top-0 w-full h-[1px] bg-[#C9A23F]/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — heading */}
            <FadeIn x={-30}>
              <GoldLabel>Outcomes</GoldLabel>
              <h2 className="text-white text-4xl md:text-6xl font-light mt-3 leading-tight">
                Leadership Decisions That{" "}
                <span
                  className="italic font-semibold text-[#C9A23F] block"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Strengthen
                </span>{" "}
                <span className="text-white">Enterprise Performance</span>
              </h2>
              <div className="mt-6 w-12 h-[2px] bg-[#C9A23F] mb-8" />
              <p className="text-gray-300 text-sm leading-[1.9] font-light">
                Our executive search engagements focus on long-term
                organisational impact. The outcome is not simply a placement,
                but stronger alignment between strategy, governance, and
                performance.
              </p>
            </FadeIn>

            {/* Right — outcome cards */}
            <div className="space-y-4">
              {outcomes.map((o, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-center gap-5 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#C9A23F]/40 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-full border border-[#C9A23F]/40 bg-[#C9A23F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A23F]/25 group-hover:border-[#C9A23F] transition-all duration-300">
                      <svg
                        viewBox="0 0 20 20"
                        width="14"
                        height="14"
                        fill="none"
                      >
                        <polyline
                          points="4,10 8,14 16,6"
                          stroke="#C9A23F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium leading-snug group-hover:text-[#C9A23F] transition-colors">
                      {o}
                    </p>
                    <span
                      className="ml-auto text-2xl font-light text-white/10 flex-shrink-0"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
