import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation, animate } from "framer-motion";
import bg from "../../assets/images/bg.webp";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const C = {
  bg: "#F4F1EA",
  bgAlt: "#EAE6DC",
  teal: "#0F4C5C",
  tealDark: "#123845",
  gold: "#C9A23F",
  muted: "#5b6f77",
  border: "#e6dcc6",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
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

// ─── Animated Counter ─────────────────────────────────────────────────────────
function Counter({ to, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

// ─── Geometric SVG Decoration ─────────────────────────────────────────────────
const GeometricAccent = ({ opacity = 0.2, color = "#C9A23F" }) => (
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
    <circle cx="100" cy="10" r="2.5" fill={color} opacity="0.6" />
    <circle cx="190" cy="100" r="2.5" fill={color} opacity="0.6" />
    <circle cx="10" cy="100" r="2.5" fill={color} opacity="0.6" />
    <circle cx="100" cy="190" r="2.5" fill={color} opacity="0.6" />
  </svg>
);

// ─── Proper SVG Icon components (multi-element, guaranteed to render) ─────────
const S = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "none",
};

const ICONS = {
  // Philosophy pillars
  judgment: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
    </svg>
  ),
  adapt: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23,4 23,10 17,10" />
      <polyline points="1,20 1,14 7,14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
  impact: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  trust: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9,12 11,14 15,10" />
    </svg>
  ),
  compass: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" />
    </svg>
  ),

  // Who we are / How we work
  network: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
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
  structure: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="8" y="16" width="8" height="5" rx="1" />
      <line x1="6.5" y1="8" x2="6.5" y2="12" />
      <line x1="17.5" y1="8" x2="17.5" y2="12" />
      <line x1="6.5" y1="12" x2="17.5" y2="12" />
      <line x1="12" y1="12" x2="12" y2="16" />
    </svg>
  ),
  strategy: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
    </svg>
  ),
  clock: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  ),
  search: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  align: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="21" y1="10" x2="3" y2="10" />
      <line x1="21" y1="6" x2="3" y2="6" />
      <line x1="21" y1="14" x2="3" y2="14" />
      <line x1="21" y1="18" x2="3" y2="18" />
    </svg>
  ),
  depth: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" fill={c} stroke="none" />
    </svg>
  ),

  // Functions
  board: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  ),
  ceo: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
      <polyline points="16,11 19,14 23,10" />
    </svg>
  ),
  finance: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  marketing: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
    </svg>
  ),
  hr: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
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
  supply: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16,8 20,8 23,11 23,16 16,16 16,8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  csr: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  ai: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <circle cx="8" cy="8" r="1.5" fill={c} stroke="none" />
      <circle cx="16" cy="8" r="1.5" fill={c} stroke="none" />
      <circle cx="8" cy="16" r="1.5" fill={c} stroke="none" />
      <circle cx="16" cy="16" r="1.5" fill={c} stroke="none" />
      <line x1="8" y1="8" x2="16" y2="16" />
      <line x1="16" y1="8" x2="8" y2="16" />
    </svg>
  ),

  // Industries
  industrial: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="7" height="14" />
      <rect x="9" y="3" width="7" height="18" />
      <rect x="16" y="10" width="7" height="11" />
      <line x1="2" y1="21" x2="22" y2="21" />
    </svg>
  ),
  realestate: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  ),
  consumer: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  health: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  banking: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="11" width="20" height="10" rx="2" />
      <path d="M12 2L2 7h20L12 2z" />
      <line x1="6" y1="11" x2="6" y2="21" />
      <line x1="10" y1="11" x2="10" y2="21" />
      <line x1="14" y1="11" x2="14" y2="21" />
      <line x1="18" y1="11" x2="18" y2="21" />
    </svg>
  ),
  tech: (c) => (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke={c}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <polyline points="7,10 10,13 7,16" />
      <line x1="13" y1="16" x2="17" y2="16" />
    </svg>
  ),
};

// Render icon by key
const Icon = ({ name, size = 24, color = C.teal }) => {
  const fn = ICONS[name];
  if (!fn) return null;
  return (
    <div style={{ width: size, height: size, flexShrink: 0 }}>{fn(color)}</div>
  );
};

// ─── ═══ HERO ═══ ─────────────────────────────────────────────────────────────
const Hero = ({ scrollRef }) => (
  <section className="relative min-h-[100vh] flex items-center justify-center text-center overflow-hidden">
    <img
      src={bg}
      className="absolute w-full h-full object-cover scale-105"
      alt=""
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%),linear-gradient(to_bottom,#06151a,#123845)] opacity-97" />
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px)",
      }}
    />
    <div className="absolute top-12 right-12 w-48 h-48 hidden lg:block">
      <GeometricAccent opacity={0.18} />
    </div>
    <div className="absolute bottom-24 left-12 w-32 h-32 hidden lg:block">
      <GeometricAccent opacity={0.12} />
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
          Advantage Starts Here
        </p>
        <div className="w-8 h-[1px] bg-[#C9A23F]" />
      </div>
      <h1 className="text-white text-5xl md:text-7xl font-light leading-[1.1] tracking-wide mb-2">
        About
      </h1>
      <h1 className="text-[#C9A23F] text-5xl md:text-7xl font-semibold leading-[1.1] tracking-wide mb-8">
        PivotEdge Partners
      </h1>
      <div className="flex justify-center mb-10">
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent" />
      </div>
      <p className="text-gray-300 text-lg leading-[1.9] font-light max-w-2xl mx-auto">
        Leadership that shapes strategy, governance, and long-term enterprise
        performance.
      </p>
      {/* <div className="flex flex-wrap justify-center gap-3 mt-10">
        {["Our Philosophy", "Who We Are", "Industries", "Our Commitment"].map(
          (s) => (
            <button
              key={s}
              onClick={() =>
                scrollRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-1.5 border border-[#C9A23F]/30 rounded-full text-xs text-[#C9A23F]/80 tracking-widest uppercase hover:border-[#C9A23F] hover:text-[#C9A23F] transition cursor-pointer"
            >
              {s}
            </button>
          ),
        )}
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
);

// ─── ═══ PHILOSOPHY — Editorial full-bleed with large pull-quote ═══ ──────────
const Philosophy = ({ sectionRef }) => {
  const pillars = [
    {
      icon: "judgment",
      label: "Judgement",
      desc: "We evaluate how leaders decide, not just what they have achieved.",
    },
    {
      icon: "adapt",
      label: "Adaptability",
      desc: "The ability to navigate uncertainty with discipline and clarity.",
    },
    {
      icon: "impact",
      label: "Impact",
      desc: "Leadership defined by long-term enterprise and cultural outcomes.",
    },
    {
      icon: "trust",
      label: "Integrity",
      desc: "Every mandate conducted with confidentiality and accountability.",
    },
  ];

  return (
    <section ref={sectionRef} className="relative bg-[#F4F1EA] overflow-hidden">
      <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />

      {/* Large editorial quote block */}
      <div className="relative bg-[#EAE6DC] py-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.08]">
          <GeometricAccent color="#C9A23F" opacity={1} />
        </div>
        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-[0.06]">
          <GeometricAccent color="#C9A23F" opacity={1} />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#C9A23F 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <FadeIn>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <GoldLabel center>Our Leadership Philosophy</GoldLabel>
            <div className="mt-6 relative">
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[120px] text-[#C9A23F]/15 font-serif leading-none select-none">
                "
              </span>
              <h2
                className="text-[#0F4C5C] text-4xl md:text-6xl font-light leading-[1.15] relative z-10"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Leadership is not defined by <em>title.</em>
                <br />
                <span className="text-[#C9A23F] font-semibold">
                  It is defined by impact.
                </span>
              </h2>
            </div>
            <div className="mt-8 w-16 h-[2px] bg-[#C9A23F] mx-auto" />
            <p className="mt-6 text-[#5b6f77] text-base leading-[1.9] font-light max-w-2xl mx-auto">
              At PivotEdge Partners, leadership is evaluated not only by
              experience — but by judgement, adaptability, and long-term impact
              on organisational performance.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* 4 pillars */}
      <div className="py-16 px-6 bg-[#F4F1EA] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F14,transparent_60%)]" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 relative z-10">
          {pillars.map((p, i) => (
            <FadeUp key={p.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group text-center p-8 h-full rounded-2xl border border-[#e6dcc6] bg-white/70 hover:border-[#C9A23F]/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#C9A23F] opacity-0 group-hover:opacity-100 transition" />
                <div className="w-14 h-14 mx-auto rounded-full border border-[#C9A23F]/25 bg-[#C9A23F]/5 group-hover:bg-[#C9A23F]/10 group-hover:border-[#C9A23F]/60 flex items-center justify-center mb-5 transition">
                  <Icon name={p.icon} size={24} color={C.teal} />
                </div>
                <h3 className="text-[#0F4C5C] font-semibold text-base mb-2 group-hover:text-[#C9A23F] transition-colors">
                  {p.label}
                </h3>
                <p className="text-[#5b6f77] text-sm leading-relaxed font-light">
                  {p.desc}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Long-form philosophy — horizontal scroll of paragraphs (editorial) */}
      <div className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            {
              num: "01",
              text: "We believe the quality of leadership determines organisational outcomes. Boards shape oversight and direction, executives define vision and performance, and functional leaders translate strategy into execution.",
            },
            {
              num: "02",
              text: "Our role is to ensure leadership capability aligns precisely with strategic ambition — combining structured evaluation, market intelligence, and governance awareness.",
            },
            {
              num: "03",
              text: "We assess not only experience, but judgement, adaptability, cultural alignment, and long-term enterprise impact. The right question is not just what they have done — but how they think.",
            },
            {
              num: "04",
              text: "We view executive search as a strategic responsibility. When leadership is aligned to purpose and performance, organisations gain the clarity and confidence to move forward.",
            },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="flex gap-5 items-start p-6 rounded-xl border border-[#e6dcc6] bg-white/50 hover:bg-white/80 hover:shadow-md transition-all duration-300 group">
                <span
                  className="text-4xl font-light text-[#C9A23F]/20 leading-none flex-shrink-0 group-hover:text-[#C9A23F]/40 transition"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.num}
                </span>
                <p className="text-[#5b6f77] text-sm leading-[1.9] font-light">
                  {item.text}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── ═══ STATS — Scrolling ticker strip ═══ ───────────────────────────────────
const stats = [
  { value: 20, suffix: "+", label: "Years of Practice" },
  { value: 500, suffix: "+", label: "Leadership Mandates" },
  { value: 6, suffix: "", label: "Industry Verticals" },
  { value: 92, suffix: "%", label: "Retention Rate" },
  { value: 300, suffix: "+", label: "C-Suite Placements" },
  { value: 30, suffix: "+", label: "Countries Reached" },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="bg-[#F4F1EA] relative overflow-hidden">
      <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F14,transparent_60%)]" />

      {/* Heading strip */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <GoldLabel>By The Numbers</GoldLabel>
            <h2 className="text-[#0F4C5C] text-3xl md:text-4xl font-light mt-1">
              A track record of{" "}
              <span
                className="text-[#C9A23F] font-semibold italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                sustained excellence
              </span>
            </h2>
          </div>
          <p className="text-[#5b6f77] text-sm max-w-xs leading-relaxed">
            Measured not in placements, but in the leadership legacies built
            across industries and geographies.
          </p>
        </div>
      </div>

      {/* Stats grid — asymmetric */}
      <div className="relative z-10 border-t border-[#e6dcc6]">
        <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`py-10 px-6 text-center border-r border-[#e6dcc6] last:border-r-0 relative bg-white/50 hover:bg-white/80 transition-colors duration-300
                ${i % 2 === 0 ? "border-b border-[#e6dcc6] md:border-b-0" : ""}`}
            >
              <div className="text-3xl md:text-4xl font-light text-[#0F4C5C] mb-1">
                <span className="text-[#C9A23F] font-semibold">
                  <Counter to={s.value} suffix={s.suffix} />
                </span>
              </div>
              <p className="text-[#5b6f77] text-[0.72rem] tracking-[0.15em] uppercase font-light">
                {s.label}
              </p>
              {/* gold dot accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C9A23F]/40" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* <div className="h-8 bg-gradient-to-b from-[#0F4C5C] to-[#F4F1EA]" /> */}
    </section>
  );
};

// ─── ═══ WHO WE ARE / HOW WE WORK — Alternating icon timeline ═══ ─────────────
const whoPoints = [
  {
    icon: "network",
    label: "Trusted Advisors",
    text: "Entrusted with consequential decisions across Executive Search, Board appointments, CEO succession, and emerging leadership domains.",
  },
  {
    icon: "structure",
    label: "Research-Driven",
    text: "Structured and discreet — combining market intelligence, rigorous assessment, and governance awareness at every stage.",
  },
  {
    icon: "compass",
    label: "Culture & Strategy Fit",
    text: "We identify leaders who align with both strategic ambition and organisational culture — not experience alone.",
  },
  {
    icon: "trust",
    label: "Long-Term Partnership",
    text: "Executive search is not transactional. It is a partnership grounded in trust, judgement, and sustained accountability.",
  },
];

const howPoints = [
  {
    icon: "search",
    label: "Discovery First",
    text: "Every engagement begins with deep clarity — understanding strategy, operations, culture, and governance expectations.",
  },
  {
    icon: "network",
    label: "Market Mapping",
    text: "Comprehensive mapping of internal and external talent pools, evaluated against precisely defined capability criteria.",
  },
  {
    icon: "align",
    label: "Stakeholder Alignment",
    text: "Continuous alignment with all stakeholders throughout the process — with full transparency at every stage.",
  },
  {
    icon: "depth",
    label: "Depth Over Speed",
    text: "Our methodology prioritises precision over volume, and genuine fit over familiarity. Quality is non-negotiable.",
  },
];

const TimelineList = ({ points, color = C.teal }) => (
  <div className="space-y-6 relative">
    {/* Vertical spine */}
    <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C9A23F]/50 via-[#C9A23F]/20 to-transparent" />
    {points.map((p, i) => (
      <FadeUp key={i} delay={i * 0.1}>
        <div className="flex gap-5 items-start group pl-0">
          {/* Node */}
          <div className="relative z-10 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-white border border-[#C9A23F]/25 group-hover:border-[#C9A23F] group-hover:bg-[#C9A23F]/5 flex items-center justify-center transition-all duration-300">
              <Icon name={p.icon} size={18} color={color} />
            </div>
          </div>
          {/* Content */}
          <div className="pt-1.5 min-w-0">
            <p className="text-[#C9A23F] text-[0.65rem] tracking-[0.25em] uppercase font-medium mb-1">
              {p.label}
            </p>
            <p className="text-[#4b5c63] text-[14.5px] leading-[1.8] font-light">
              {p.text}
            </p>
          </div>
        </div>
      </FadeUp>
    ))}
  </div>
);

const WhoHowSection = () => (
  <section className="bg-[#F4F1EA] relative overflow-hidden">
    <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />

    {/* WHO WE ARE */}
    <div className="grid lg:grid-cols-[400px_1fr]">
      {/* Light label panel */}
      <div className="bg-[#EAE6DC] flex flex-col justify-center px-10 py-20 relative overflow-hidden min-h-[480px]">
        <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.1] pointer-events-none">
          <GeometricAccent color="#C9A23F" opacity={1} />
        </div>
        <FadeIn x={-30}>
          <GoldLabel>Who We Are</GoldLabel>
          <h2 className="text-[#0F4C5C] text-3xl md:text-4xl font-light mt-4 leading-snug">
            Advisors to the{" "}
            <span
              className="text-[#C9A23F] font-semibold italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              apex
            </span>{" "}
            of leadership
          </h2>
          <div className="mt-5 w-10 h-[2px] bg-[#C9A23F]" />
          <p className="mt-5 text-[#5b6f77] text-sm leading-relaxed font-light">
            PivotEdge Partners works with Boards, Chief Executives, and senior
            leadership teams — focused on functional heads and above, where
            leadership directly shapes enterprise performance.
          </p>
        </FadeIn>
      </div>

      {/* Timeline */}
      <div className="bg-[#F4F1EA] py-16 px-10 md:px-16">
        <TimelineList points={whoPoints} />
      </div>
    </div>

    {/* Divider */}
    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F]/30 to-transparent" />

    {/* HOW WE WORK */}
    <div className="grid lg:grid-cols-[1fr_400px]">
      {/* Timeline */}
      <div className="bg-[#EAE6DC] py-16 px-10 md:px-16">
        <TimelineList points={howPoints} />
      </div>

      {/* Light label panel */}
      <div className="bg-[#F4F1EA] border-l border-[#e6dcc6] flex flex-col justify-center px-10 py-20 relative overflow-hidden min-h-[480px]">
        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-[0.1] pointer-events-none">
          <GeometricAccent color="#C9A23F" opacity={1} />
        </div>
        <FadeIn x={30}>
          <GoldLabel>How We Work</GoldLabel>
          <h2 className="text-[#0F4C5C] text-3xl md:text-4xl font-light mt-4 leading-snug">
            Depth over{" "}
            <span
              className="text-[#C9A23F] font-semibold italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              speed.
            </span>
            <br />
            Precision over volume.
          </h2>
          <div className="mt-5 w-10 h-[2px] bg-[#C9A23F]" />
          <p className="mt-5 text-[#5b6f77] text-sm leading-relaxed font-light">
            Every engagement is treated as a strategic mandate — never a
            transactional exercise in filling a position.
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
);

// ─── ═══ INDUSTRIES & FUNCTIONS — Icon grid with visual categories ═══ ─────────
const industries = [
  { icon: "industrial", label: "Industrial" },
  { icon: "realestate", label: "Real Estate & Infrastructure" },
  { icon: "consumer", label: "Consumer" },
  { icon: "health", label: "Healthcare & Life Sciences" },
  { icon: "banking", label: "Banking & Financial Services" },
  { icon: "tech", label: "Technology, Media & Telecom" },
];

const functions = [
  { icon: "board", label: "Boards & Governance" },
  { icon: "ceo", label: "Chief Executive Officers" },
  { icon: "finance", label: "Chief Financial Officers" },
  { icon: "marketing", label: "Marketing & Sales" },
  { icon: "hr", label: "Human Resources" },
  { icon: "supply", label: "Supply Chain" },
  { icon: "csr", label: "CSR & Sustainability" },
  { icon: "ai", label: "Artificial Intelligence" },
];

const IndustriesSection = () => (
  <section className="py-24 bg-[#F4F1EA] relative overflow-hidden">
    <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C9A23F10,transparent_60%)]" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <FadeUp>
        <div className="text-center mb-16">
          <GoldLabel center>Where We Operate</GoldLabel>
          <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-2">
            Industries &{" "}
            <span className="font-semibold">Functional Expertise</span>
          </h2>
          <div className="mt-4 w-16 h-[2px] bg-[#C9A23F] mx-auto" />
        </div>
      </FadeUp>

      {/* Industries — large icon cards */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-8">
          <p className="text-[#0F4C5C] text-sm font-semibold tracking-[0.15em] uppercase">
            Industries
          </p>
          <div className="flex-1 h-[1px] bg-[#C9A23F]/30" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((item, i) => (
            <FadeUp key={item.label} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col items-center text-center h-full p-6 rounded-2xl border border-[#e6dcc6] bg-white/70 hover:border-[#C9A23F]/60 hover:shadow-xl transition-all duration-300 cursor-default relative overflow-hidden"
              >
                <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C9A23F] to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="w-14 h-14 rounded-xl bg-[#0F4C5C]/5 group-hover:bg-[#0F4C5C]/10 flex items-center justify-center mb-4 transition border border-transparent group-hover:border-[#0F4C5C]/10">
                  <Icon name={item.icon} size={26} color={C.teal} />
                </div>
                <p className="text-[#0F4C5C] text-xs font-medium leading-snug group-hover:text-[#C9A23F] transition-colors">
                  {item.label}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Functions — smaller pill-style cards */}
      <div>
        <div className="flex items-center gap-4 mb-8 mt-14">
          <p className="text-[#0F4C5C] text-sm font-semibold tracking-[0.15em] uppercase">
            Functional Expertise
          </p>
          <div className="flex-1 h-[1px] bg-[#C9A23F]/30" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {functions.map((item, i) => (
            <FadeUp key={item.label} delay={i * 0.06}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-4 p-5 rounded-xl border border-[#e6dcc6] bg-white/60 hover:border-[#C9A23F]/60 hover:bg-white hover:shadow-md transition-all duration-300 relative overflow-hidden cursor-default"
              >
                <span className="absolute left-0 top-0 h-0 w-[3px] bg-[#C9A23F] group-hover:h-full transition-all duration-300 rounded-r" />
                <div className="w-9 h-9 rounded-lg bg-[#0F4C5C]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0F4C5C]/10 transition">
                  <Icon name={item.icon} size={18} color={C.teal} />
                </div>
                <p className="text-[#0F4C5C] text-xs font-medium leading-snug group-hover:text-[#C9A23F] transition-colors">
                  {item.label}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── ═══ LEADERSHIP PERSPECTIVE — Large typographic centrepiece ═══ ───────────
const words = [
  "strategic judgement",
  "adaptability",
  "ethical grounding",
  "decisive action",
];

const PerspectiveSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(
      () => setWordIdx((i) => (i + 1) % words.length),
      2200,
    );
    return () => clearInterval(t);
  }, [inView]);

  return (
    <section ref={ref} className="py-28 bg-[#EAE6DC] relative overflow-hidden">
      <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />
      {/* Rings */}
      {[300, 480, 660].map((s, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A23F] pointer-events-none"
          style={{ width: s, height: s, opacity: 0.05 - i * 0.012 }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <GoldLabel center>Our Perspective on Leadership</GoldLabel>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-[#0F4C5C] font-light leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
          }}
        >
          Effective leadership demands
        </motion.h2>

        {/* Cycling word */}
        <div className="h-16 flex items-center justify-center my-2 overflow-hidden">
          <motion.span
            key={wordIdx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="text-[#C9A23F] font-semibold"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontStyle: "italic",
            }}
          >
            {words[wordIdx]}
          </motion.span>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-20 h-[2px] bg-[#C9A23F] mx-auto mb-10"
        />

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              title: "Beyond Competence",
              body: "Leadership effectiveness extends beyond functional expertise. It requires the ability to mobilise teams and navigate uncertainty with discipline and clarity.",
            },
            {
              title: "Future-Ready Leaders",
              body: "In a world of technological acceleration and shifting stakeholder expectations, organisations need leaders who combine strategic vision with execution rigour.",
            },
            {
              title: "How They Think",
              body: "We assess leaders not only for what they have achieved, but for how they decide, how they build teams, and how they sustain performance across cycles.",
            },
          ].map((c, i) => (
            <FadeUp key={i} delay={i * 0.12}>
              <div className="bg-white/60 border border-[#e6dcc6] h-full rounded-xl p-6 hover:shadow-md hover:border-[#C9A23F]/40 transition-all duration-300 group">
                <div className="w-8 h-[2px] bg-[#C9A23F] mb-4 group-hover:w-14 transition-all duration-300" />
                <h4 className="text-[#0F4C5C] font-semibold text-sm mb-2">
                  {c.title}
                </h4>
                <p className="text-[#5b6f77] text-sm leading-relaxed font-light">
                  {c.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── ═══ COMMITMENT — Dark teal closing, geometric centrepiece ═══ ────────────
const Commitment = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="bg-[#EAE6DC] relative overflow-hidden py-28 px-6"
    >
      <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C9A23F0A,transparent_60%)]" />
      {/* Large centred geometric */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.08] pointer-events-none">
        <GeometricAccent color="#C9A23F" opacity={1} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <GoldLabel center>Our Commitment</GoldLabel>
          <h2
            className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Built on{" "}
            <span className="text-[#C9A23F] italic font-semibold">
              integrity
            </span>{" "}
            and accountability
          </h2>
          <div className="mt-5 w-14 h-[2px] bg-[#C9A23F] mx-auto" />
        </motion.div>

        {/* 3 commitment pillars — horizontal */}
        <div className="grid md:grid-cols-3 gap-0 border border-[#e6dcc6] rounded-2xl overflow-hidden bg-white/60">
          {[
            {
              n: "01",
              title: "Integrity First",
              body: "We operate with confidentiality and professional discipline — clear communication and accountability at every stage.",
            },
            {
              n: "02",
              title: "Strategic Alignment",
              body: "Our objective is not to fill positions, but to strengthen organisations through precisely aligned leadership.",
            },
            {
              n: "03",
              title: "Long-Term Value",
              body: "When leadership is right, organisations move with confidence. That enduring impact is where advantage begins.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className={`group p-10 relative hover:bg-[#F4F1EA] transition-all duration-300
                ${i < 2 ? "border-r border-[#e6dcc6]" : ""}`}
            >
              <span
                className="absolute top-6 right-8 text-5xl font-bold text-[#C9A23F]/10 leading-none select-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {item.n}
              </span>
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9A23F] group-hover:w-full transition-all duration-500" />
              <h3 className="text-[#0F4C5C] font-medium text-base mb-3 group-hover:text-[#C9A23F] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#5b6f77] text-sm leading-[1.8] font-light">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#C9A23F]/40" />
            <div className="w-2 h-2 rounded-full bg-[#C9A23F]" />
            <div className="w-12 h-[1px] bg-[#C9A23F]/40" />
          </div>
          <p className="text-[#0F4C5C] font-medium tracking-[0.2em] uppercase text-sm">
            That is where advantage begins.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ─── ═══ EXPORT ═══ ───────────────────────────────────────────────────────────
export default function About() {
  const philosophyRef = useRef(null);
  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>
      <Hero scrollRef={philosophyRef} />
      <Philosophy sectionRef={philosophyRef} />
      <Stats />
      <WhoHowSection />
      <IndustriesSection />
      <PerspectiveSection />
      <Commitment />
    </div>
  );
}
