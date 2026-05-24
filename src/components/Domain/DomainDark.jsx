import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import bg from "../../assets/images/bg.webp";

// ─── Tokens ───────────────────────────────────────────────────────────────────
const C = {
  bg: "#F4F1EA",
  bgAlt: "#EAE6DC",
  teal: "#0F4C5C",
  dark: "#123845",
  gold: "#C9A23F",
  muted: "#5b6f77",
};

// ─── Shared helpers ───────────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
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
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

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

// ─── Geometric decoration ─────────────────────────────────────────────────────
const Geo = ({ opacity = 0.15, color = "#C9A23F" }) => (
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

// ─── Large industry illustrations (unique SVGs per sector) ────────────────────
const IndustryIllustrations = {
  Industrial: ({ color }) => (
    <svg viewBox="0 0 80 80" fill="none" width="64" height="64">
      <rect
        x="8"
        y="30"
        width="14"
        height="36"
        fill={color}
        opacity="0.15"
        stroke={color}
        strokeWidth="1.2"
      />
      <rect
        x="26"
        y="18"
        width="14"
        height="48"
        fill={color}
        opacity="0.2"
        stroke={color}
        strokeWidth="1.2"
      />
      <rect
        x="44"
        y="38"
        width="14"
        height="28"
        fill={color}
        opacity="0.15"
        stroke={color}
        strokeWidth="1.2"
      />
      <rect
        x="62"
        y="24"
        width="10"
        height="42"
        fill={color}
        opacity="0.1"
        stroke={color}
        strokeWidth="1.2"
      />
      <line x1="6" y1="66" x2="74" y2="66" stroke={color} strokeWidth="1.5" />
      <circle
        cx="15"
        cy="22"
        r="4"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
      />
      <line x1="15" y1="18" x2="15" y2="30" stroke={color} strokeWidth="1" />
      <path
        d="M26 18 Q33 10 40 18"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  ),
  RealEstate: ({ color }) => (
    <svg viewBox="0 0 80 80" fill="none" width="64" height="64">
      <path
        d="M10 70 L10 38 L40 16 L70 38 L70 70 Z"
        fill={color}
        opacity="0.1"
        stroke={color}
        strokeWidth="1.4"
      />
      <rect
        x="30"
        y="48"
        width="20"
        height="22"
        fill={color}
        opacity="0.2"
        stroke={color}
        strokeWidth="1.2"
      />
      <rect
        x="14"
        y="46"
        width="12"
        height="10"
        fill="none"
        stroke={color}
        strokeWidth="1"
      />
      <rect
        x="54"
        y="46"
        width="12"
        height="10"
        fill="none"
        stroke={color}
        strokeWidth="1"
      />
      <line x1="40" y1="16" x2="40" y2="8" stroke={color} strokeWidth="1.2" />
      <line x1="36" y1="8" x2="44" y2="8" stroke={color} strokeWidth="1.2" />
      <circle
        cx="40"
        cy="58"
        r="3"
        stroke={color}
        strokeWidth="1"
        fill="none"
      />
    </svg>
  ),
  Consumer: ({ color }) => (
    <svg viewBox="0 0 80 80" fill="none" width="64" height="64">
      <path
        d="M16 24 L12 12 L6 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 24 L22 50 L58 50 L66 24 Z"
        fill={color}
        opacity="0.12"
        stroke={color}
        strokeWidth="1.4"
      />
      <circle
        cx="28"
        cy="62"
        r="6"
        stroke={color}
        strokeWidth="1.4"
        fill="none"
      />
      <circle
        cx="52"
        cy="62"
        r="6"
        stroke={color}
        strokeWidth="1.4"
        fill="none"
      />
      <line
        x1="28"
        y1="36"
        x2="52"
        y2="36"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle cx="38" cy="30" r="3" fill={color} opacity="0.5" />
      <circle cx="50" cy="28" r="2" fill={color} opacity="0.4" />
    </svg>
  ),
  Healthcare: ({ color }) => (
    <svg viewBox="0 0 80 80" fill="none" width="64" height="64">
      <rect
        x="12"
        y="20"
        width="56"
        height="46"
        rx="4"
        fill={color}
        opacity="0.1"
        stroke={color}
        strokeWidth="1.4"
      />
      <line
        x1="40"
        y1="30"
        x2="40"
        y2="56"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="27"
        y1="43"
        x2="53"
        y2="43"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 20 L24 14 Q24 10 28 10 L52 10 Q56 10 56 14 L56 20"
        stroke={color}
        strokeWidth="1.4"
        fill="none"
      />
      <circle
        cx="60"
        cy="18"
        r="5"
        fill={color}
        opacity="0.3"
        stroke={color}
        strokeWidth="1"
      />
      <polyline
        points="57,18 59,20 63,16"
        stroke={color}
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
  Banking: ({ color }) => (
    <svg viewBox="0 0 80 80" fill="none" width="64" height="64">
      <path
        d="M8 30 L40 10 L72 30 Z"
        fill={color}
        opacity="0.15"
        stroke={color}
        strokeWidth="1.4"
      />
      <rect
        x="8"
        y="62"
        width="64"
        height="6"
        fill={color}
        opacity="0.2"
        stroke={color}
        strokeWidth="1.2"
      />
      <rect
        x="14"
        y="30"
        width="8"
        height="32"
        fill={color}
        opacity="0.1"
        stroke={color}
        strokeWidth="1"
      />
      <rect
        x="28"
        y="30"
        width="8"
        height="32"
        fill={color}
        opacity="0.1"
        stroke={color}
        strokeWidth="1"
      />
      <rect
        x="44"
        y="30"
        width="8"
        height="32"
        fill={color}
        opacity="0.1"
        stroke={color}
        strokeWidth="1"
      />
      <rect
        x="58"
        y="30"
        width="8"
        height="32"
        fill={color}
        opacity="0.1"
        stroke={color}
        strokeWidth="1"
      />
      <circle cx="40" cy="21" r="4" fill={color} opacity="0.4" />
    </svg>
  ),
  Technology: ({ color }) => (
    <svg viewBox="0 0 80 80" fill="none" width="64" height="64">
      <rect
        x="8"
        y="14"
        width="64"
        height="42"
        rx="3"
        fill={color}
        opacity="0.1"
        stroke={color}
        strokeWidth="1.4"
      />
      <rect
        x="14"
        y="60"
        width="52"
        height="6"
        rx="1"
        fill={color}
        opacity="0.2"
        stroke={color}
        strokeWidth="1"
      />
      <line x1="28" y1="66" x2="28" y2="70" stroke={color} strokeWidth="1.2" />
      <line x1="52" y1="66" x2="52" y2="70" stroke={color} strokeWidth="1.2" />
      <line x1="22" y1="70" x2="58" y2="70" stroke={color} strokeWidth="1.4" />
      <polyline
        points="18,42 26,30 34,36 44,22 54,28 62,18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="18" cy="42" r="2" fill={color} />
      <circle cx="44" cy="22" r="2" fill={color} />
      <circle cx="62" cy="18" r="2" fill={color} />
    </svg>
  ),
};

// ─── Industries data ──────────────────────────────────────────────────────────
const industries = [
  {
    key: "Industrial",
    title: "Industrial",
    tag: "Manufacturing · Engineering · Energy",
    desc: "Leaders capable of modernising operations, improving productivity, and navigating cyclical pressures with strategic discipline.",
  },
  {
    key: "RealEstate",
    title: "Real Estate & Infrastructure",
    tag: "Property · Development · Infrastructure",
    desc: "Disciplined executives who manage capital-intensive assets, long-cycle value creation, and complex stakeholder environments.",
  },
  {
    key: "Consumer",
    title: "Consumer",
    tag: "Retail · FMCG · Brand",
    desc: "Agile leaders who understand market dynamics, brand positioning, and the pace of digital disruption in consumer markets.",
  },
  {
    key: "Healthcare",
    title: "Healthcare & Life Sciences",
    tag: "Healthcare · Pharma · MedTech",
    desc: "Leadership capable of navigating innovation, regulation, and the complex stakeholder landscape of healthcare organisations.",
  },
  {
    key: "Banking",
    title: "Banking & Financial Services",
    tag: "Banking · Insurance · Asset Management",
    desc: "Executives who combine financial stewardship with transformation capability, risk management, and governance credibility.",
  },
  {
    key: "Technology",
    title: "Technology, Media & Telecom",
    tag: "Technology · Media · Telecom",
    desc: "Leaders who scale platforms, drive competitive differentiation, and embed innovation across digital-first organisations.",
  },
];

// ─── Exec search approach steps ───────────────────────────────────────────────
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
    icon: (c) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width="28"
        height="28"
        stroke={c}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="12,5 14.5,9.5 19.5,10.3 15.8,13.9 16.8,18.9 12,16.4 7.2,18.9 8.2,13.9 4.5,10.3 9.5,9.5" />
      </svg>
    ),
    title: "Advisory Orientation",
    desc: "Strategic mandate, not transactional placement.",
  },
  {
    icon: (c) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width="28"
        height="28"
        stroke={c}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <polyline points="9,12 11,14 15,10" />
      </svg>
    ),
    title: "Governance-Aware Evaluation",
    desc: "Capability assessed within the governance ecosystem.",
  },
  {
    icon: (c) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width="28"
        height="28"
        stroke={c}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <line x1="12" y1="7" x2="5" y2="17" />
        <line x1="12" y1="7" x2="19" y2="17" />
        <line x1="7" y1="19" x2="17" y2="19" />
      </svg>
    ),
    title: "Leadership Networks",
    desc: "Access to senior leaders across industries and geographies.",
  },
  {
    icon: (c) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width="28"
        height="28"
        stroke={c}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
    title: "Research-Driven Process",
    desc: "Market intelligence guides every search mandate.",
  },
  {
    icon: (c) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width="28"
        height="28"
        stroke={c}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Long-Term Partnership",
    desc: "Ongoing leadership strategy beyond individual mandates.",
  },
];

// ─── Outcomes ─────────────────────────────────────────────────────────────────
const outcomes = [
  "Stronger alignment between leadership and strategy",
  "Reduced succession and governance risk",
  "Accelerated executive integration and onboarding",
  "Sustained enterprise performance over time",
];

// ═════════════════════════════════════════════════════════════════════════════
export default function Domains() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>
      {/* ══ HERO ══ */}
      <section className="relative min-h-[100vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src={bg}
          className="absolute w-full h-full object-cover scale-105"
          alt=""
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%),linear-gradient(to_bottom,#0F4C5C,#123845)] opacity-97" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px)",
          }}
        />
        <div className="absolute top-12 right-12 w-48 h-48 hidden lg:block">
          <Geo opacity={0.18} />
        </div>
        <div className="absolute bottom-24 left-12 w-32 h-32 hidden lg:block">
          <Geo opacity={0.12} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#C9A23F]" />
            <p className="text-[#C9A23F] tracking-[0.35em] text-xs font-medium uppercase">
              Industries & Domains
            </p>
            <div className="w-8 h-[1px] bg-[#C9A23F]" />
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-light leading-[1.1] tracking-wide mb-2">
            Our
          </h1>
          <h1 className="text-[#C9A23F] text-5xl md:text-7xl font-semibold leading-[1.1] tracking-wide mb-8">
            Domains
          </h1>
          <div className="flex justify-center mb-10">
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent" />
          </div>
          <p className="text-gray-300 text-lg leading-[1.9] font-light max-w-2xl mx-auto">
            We partner with organisations across sectors to appoint leadership
            capable of navigating complexity, accelerating transformation, and
            delivering sustained enterprise performance.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-3 mt-10">
            {[
              "Industrial",
              "Real Estate",
              "Consumer",
              "Healthcare",
              "Banking",
              "Technology",
            ].map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 border border-[#C9A23F]/30 rounded-full text-xs text-[#C9A23F]/80 tracking-widest uppercase hover:border-[#C9A23F] hover:text-[#C9A23F] transition cursor-default"
              >
                {s}
              </span>
            ))}
          </div> */}
        </motion.div>

        {/* <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#F4F1EA]" /> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-[#C9A23F]/40 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#C9A23F]/60 to-transparent" />
        </motion.div>
      </section>

      {/* ══ INDUSTRIES — Interactive split: tab nav left, content right ══ */}
      <section className="bg-[#F4F1EA] relative overflow-hidden">
        <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.04] pointer-events-none">
          <Geo color={C.teal} opacity={1} />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeUp>
            <div className="text-center mb-16">
              <GoldLabel center>Sectors</GoldLabel>
              <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-2">
                Industries We <span className="font-semibold">Serve</span>
              </h2>
              <div className="mt-4 w-16 h-[2px] bg-[#C9A23F] mx-auto" />
              <p className="mt-4 text-[#5b6f77] text-sm max-w-lg mx-auto leading-relaxed">
                Our experience spans diverse industries where leadership quality
                directly influences enterprise performance and long-term value
                creation.
              </p>
            </div>
          </FadeUp>

          {/* Interactive selector */}
          <div className="grid lg:grid-cols-[280px_1fr] gap-0 rounded-2xl overflow-hidden border border-[#e6dcc6] shadow-lg">
            {/* Tab nav */}
            <div className="bg-[#0F4C5C]">
              {industries.map((ind, i) => (
                <button
                  key={ind.key}
                  onClick={() => setActiveIndustry(i)}
                  className={`w-full text-left px-7 py-5 border-b border-white/5 flex items-center gap-4 group transition-all duration-300
                    ${activeIndustry === i ? "bg-[#C9A23F]/15 border-l-4 border-l-[#C9A23F]" : "hover:bg-white/5 border-l-4 border-l-transparent"}`}
                >
                  <div
                    className={`transition-opacity flex-shrink-0 ${activeIndustry === i ? "opacity-100" : "opacity-30 group-hover:opacity-60"}`}
                  >
                    {React.createElement(IndustryIllustrations[ind.key], {
                      color: "#C9A23F",
                    })}
                  </div>
                  <div>
                    <p
                      className={`text-xs font-medium tracking-wide transition-colors leading-tight
                      ${activeIndustry === i ? "text-[#C9A23F]" : "text-gray-300 group-hover:text-white"}`}
                    >
                      {ind.title}
                    </p>
                  </div>
                  {activeIndustry === i && (
                    <svg
                      className="ml-auto flex-shrink-0 text-[#C9A23F]"
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <polyline
                        points="6,4 10,8 6,12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Content panel */}
            <div className="bg-white relative min-h-[420px] justify-center overflow-hidden flex flex-col justify-between p-10 md:p-14">
              <span className="absolute top-0 left-0 w-28 h-[3px] bg-gradient-to-r from-[#C9A23F] to-transparent" />
              <span className="absolute bottom-8 right-10 text-[110px] font-bold text-[#0F4C5C]/5 leading-none select-none pointer-events-none">
                {String(activeIndustry + 1).padStart(2, "0")}
              </span>

              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-[#C9A23F] text-xs tracking-[0.3em] uppercase mb-4">
                  {String(activeIndustry + 1).padStart(2, "0")} /{" "}
                  {String(industries.length).padStart(2, "0")}
                </p>

                {/* Large illustration */}
                <div className="mb-6">
                  {React.createElement(
                    IndustryIllustrations[industries[activeIndustry].key],
                    { color: C.teal },
                  )}
                </div>

                <h3 className="text-3xl md:text-4xl font-light text-[#0F4C5C] mb-3">
                  {industries[activeIndustry].title}
                </h3>
                <div className="w-8 h-[2px] bg-[#C9A23F] mb-4" />

                <p className="text-[#C9A23F] text-xs tracking-widest uppercase mb-3 font-medium">
                  {industries[activeIndustry].tag}
                </p>
                <p className="text-[#5b6f77] text-base leading-[2] font-light max-w-lg">
                  {industries[activeIndustry].desc}
                </p>
              </motion.div>

              {/* Arrow nav */}
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
                    className="w-9 h-9 rounded-full border border-[#0F4C5C]/20 flex items-center justify-center hover:border-[#C9A23F] hover:text-[#C9A23F] transition disabled:opacity-20 text-[#0F4C5C] cursor-pointer"
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
            </div>
          </div>
        </div>
      </section>

      {/* ══ EXECUTIVE SEARCH — dark teal with angled right edge ══ */}
      <section className="bg-[#123845] relative overflow-hidden py-24 px-6">
        <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px),repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px)",
          }}
        />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 opacity-[0.06] pointer-events-none">
          <Geo />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <FadeIn x={-30}>
              <GoldLabel>Executive Search</GoldLabel>
              <h2 className="text-white text-4xl md:text-5xl font-light mt-3 leading-tight">
                Search That Strengthens{" "}
                <span
                  className="text-[#C9A23F] italic font-semibold"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Strategic Advantage
                </span>
              </h2>
              <div className="mt-5 w-12 h-[2px] bg-[#C9A23F]" />
            </FadeIn>
            <FadeIn x={30} delay={0.1}>
              <p className="text-gray-400 text-sm leading-[1.9] font-light">
                Leadership appointments are among the most consequential
                decisions an organisation makes. PivotEdge Partners approaches
                executive search as a strategic advisory engagement — working
                closely with Boards to understand governance structure and
                future leadership needs.
              </p>
              <p className="text-gray-400 text-sm leading-[1.9] font-light mt-4">
                Our work is confidential, research-driven, and outcome-focused.
                We are not intermediaries. We are advisors entrusted with
                decisions that influence the direction of the enterprise.
              </p>
            </FadeIn>
          </div>

          {/* 6-step process — horizontal numbered cards */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-0 border border-[#C9A23F]/15 rounded-2xl overflow-hidden">
            {approachSteps.map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.07}>
                <div
                  className={`group relative p-6 hover:bg-white/5 transition-all duration-300 h-full
                  ${i < approachSteps.length - 1 ? "border-r border-[#C9A23F]/12" : ""}`}
                >
                  <span className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9A23F] group-hover:w-full transition-all duration-500" />
                  <span
                    className="block text-3xl font-light text-[#C9A23F]/20 mb-4 leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {step.n}
                  </span>
                  <h4 className="text-white text-xs font-semibold tracking-wide mb-3 leading-snug group-hover:text-[#C9A23F] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-[1.8] font-light">
                    {step.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DIFFERENTIATORS — cream bg, horizontal icon strip ══ */}
      <section className="bg-[#EAE6DC] relative overflow-hidden py-24 px-6">
        <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C9A23F0A,transparent_60%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeUp>
            <div className="text-center mb-16">
              <GoldLabel center>Why PivotEdge</GoldLabel>
              <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-2">
                What <span className="font-semibold">Differentiates</span> Us
              </h2>
              <div className="mt-4 w-16 h-[2px] bg-[#C9A23F] mx-auto" />
            </div>
          </FadeUp>

          {/* 5 diff cards — large icon, minimal text */}
          <div className="grid md:grid-cols-5 gap-5">
            {diffs.map((d, i) => (
              <FadeUp key={d.title} delay={i * 0.09}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="group bg-white/70 border border-[#e6dcc6] rounded-2xl p-8 text-center relative overflow-hidden hover:border-[#C9A23F]/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center"
                >
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C9A23F] group-hover:w-full transition-all duration-500" />
                  <div className="w-16 h-16 rounded-full border border-[#C9A23F]/20 bg-[#C9A23F]/5 group-hover:bg-[#C9A23F]/12 group-hover:border-[#C9A23F]/50 flex items-center justify-center mb-5 transition-all duration-300">
                    {d.icon(C.teal)}
                  </div>
                  <h3 className="text-[#0F4C5C] font-semibold text-sm mb-2 group-hover:text-[#C9A23F] transition-colors leading-snug">
                    {d.title}
                  </h3>
                  <p className="text-[#5b6f77] text-xs leading-relaxed font-light">
                    {d.desc}
                  </p>
                  {/* Number watermark */}
                  <span
                    className="absolute bottom-3 right-4 text-4xl font-bold text-[#0F4C5C]/5 leading-none select-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OUTCOMES — White bg, full-width animated checklist + editorial quote ══ */}
      <section className="bg-white relative overflow-hidden py-24 px-6">
        <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            {/* Left — heading + quote */}
            <FadeIn x={-30}>
              <GoldLabel>Outcomes</GoldLabel>
              <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-3 leading-tight">
                Leadership Decisions That{" "}
                <span
                  className="italic font-semibold text-[#C9A23F]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Strengthen
                </span>{" "}
                Enterprise Performance
              </h2>
              <div className="mt-6 w-12 h-[2px] bg-[#C9A23F] mb-8" />
              <p className="text-[#5b6f77] text-sm leading-[1.9] font-light mb-10">
                Our executive search engagements focus on long-term
                organisational impact. The outcome is not simply a placement,
                but stronger alignment between strategy, governance, and
                performance.
              </p>

              {/* Pull quote */}
              <div className="border-l-4 border-[#C9A23F] pl-6 py-2">
                <p
                  className="text-[#0F4C5C] italic text-lg font-light leading-relaxed"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "When leadership is right, organisations move with
                  confidence."
                </p>
                <p className="text-[#C9A23F] text-[0.68rem] tracking-[0.2em] uppercase mt-3 font-medium">
                  — PivotEdge Partners
                </p>
              </div>
            </FadeIn>

            {/* Right — animated outcome cards */}
            <div className="space-y-5">
              {outcomes.map((o, i) => (
                <FadeUp key={i} delay={i * 0.12}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-center gap-5 p-6 rounded-xl border border-[#e6dcc6] bg-[#F4F1EA]/50 hover:border-[#C9A23F]/50 hover:bg-white hover:shadow-md transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="absolute left-0 top-0 h-0 w-[3px] bg-[#C9A23F] group-hover:h-full transition-all duration-300 rounded-r" />
                    {/* Check badge */}
                    <div className="w-10 h-10 rounded-full border-2 border-[#C9A23F]/30 bg-[#C9A23F]/5 group-hover:border-[#C9A23F] group-hover:bg-[#C9A23F]/10 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <svg
                        viewBox="0 0 20 20"
                        width="16"
                        height="16"
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
                    <p className="text-[#0F4C5C] text-sm font-medium leading-snug group-hover:text-[#C9A23F] transition-colors">
                      {o}
                    </p>
                    <span
                      className="ml-auto text-2xl font-light text-[#0F4C5C]/8 flex-shrink-0"
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

      {/* ══ CTA STRIP ══ */}
      {/* <section className="bg-[#EAE6DC] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,#C9A23F0A,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.04] pointer-events-none">
          <Geo />
        </div>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <FadeUp>
            <div className="border border-[#0F4C5C]/12 rounded-2xl px-10 py-14 bg-white/50 backdrop-blur relative overflow-hidden">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent" />
              <div className="w-14 h-14 mx-auto mb-6 opacity-25">
                <Geo />
              </div>
              <GoldLabel center>Begin a Conversation</GoldLabel>
              <h2 className="text-[#0F4C5C] text-3xl md:text-4xl font-light mt-2 mb-4">
                Ready to discuss a{" "}
                <span
                  className="text-[#C9A23F] font-semibold italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  mandate
                </span>
                ?
              </h2>
              <p className="text-[#5b6f77] text-sm leading-relaxed mb-8 max-w-md mx-auto">
                Every engagement begins with a confidential conversation. Speak
                with one of our advisors to explore how we can serve your
                leadership needs.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 border border-[#0F4C5C] text-[#0F4C5C] text-sm tracking-widest uppercase hover:bg-[#0F4C5C] hover:text-white transition-all duration-300 font-medium"
              >
                Begin a Conversation
                <svg
                  viewBox="0 0 16 16"
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="8" x2="13" y2="8" />
                  <polyline points="9,4 13,8 9,12" />
                </svg>
              </a>
            </div>
          </FadeUp>
        </div>
      </section> */}
    </div>
  );
}
