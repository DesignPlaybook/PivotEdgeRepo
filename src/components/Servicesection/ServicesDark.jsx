import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import bg from "../../assets/images/bg.webp";

/* ─── Design Tokens ─── */
const GOLD = "#C9A23F";
const TEAL = "#0F4C5C";
const DARK = "#123845";
const CREAM = "#F4F1EA";
const CREAM_ALT = "#EAE6DC";
const MUTED = "#5b6f77";

/* ─── Unsplash images ─── */
const IMGS = {
  execSearch:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
  succession:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
  career:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop",
  interim:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
  diversity:
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop",
  process:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
  functions:
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2070&auto=format&fit=crop",
  boardroom:
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
};

/* ─── Animated counter hook ─── */
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, suffix, label, delay, triggerCount }) {
  const count = useCounter(value, 1800, triggerCount);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={triggerCount ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <div className="text-5xl md:text-6xl font-light text-white leading-none">
        <span className="font-semibold" style={{ color: GOLD }}>
          {count}
        </span>
        <span className="text-4xl" style={{ color: GOLD }}>
          {suffix}
        </span>
      </div>
      <div className="mt-2 text-sm tracking-[0.2em] text-gray-400 uppercase font-light">
        {label}
      </div>
    </motion.div>
  );
}

/* ─── Helpers ─── */
const FadeUp = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
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
const GoldLabel = ({ children, center = false }) => (
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

/* ─── Geometric SVG accent ─── */
const GeometricAccent = ({ opacity = 0.2, color = GOLD }) => (
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

/* ─── Service icons ─── */
const serviceIcons = {
  "Executive Search": (c = GOLD) => (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <circle cx="22" cy="16" r="8" stroke={c} strokeWidth="1.5" />
      <path
        d="M6 40c0-8.837 7.163-16 16-16s16 7.163 16 16"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="36" cy="36" r="5" stroke={c} strokeWidth="1.5" />
      <line
        x1="40"
        y1="40"
        x2="43"
        y2="43"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Succession Planning": (c = GOLD) => (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <rect
        x="20"
        y="6"
        width="8"
        height="8"
        rx="2"
        stroke={c}
        strokeWidth="1.5"
      />
      <line x1="24" y1="14" x2="24" y2="22" stroke={c} strokeWidth="1.5" />
      <line x1="12" y1="22" x2="36" y2="22" stroke={c} strokeWidth="1.5" />
      <line x1="12" y1="22" x2="12" y2="30" stroke={c} strokeWidth="1.5" />
      <line x1="24" y1="22" x2="24" y2="30" stroke={c} strokeWidth="1.5" />
      <line x1="36" y1="22" x2="36" y2="30" stroke={c} strokeWidth="1.5" />
      <rect
        x="8"
        y="30"
        width="8"
        height="8"
        rx="2"
        stroke={c}
        strokeWidth="1.5"
      />
      <rect
        x="20"
        y="30"
        width="8"
        height="8"
        rx="2"
        stroke={c}
        strokeWidth="1.5"
      />
      <rect
        x="32"
        y="30"
        width="8"
        height="8"
        rx="2"
        stroke={c}
        strokeWidth="1.5"
      />
    </svg>
  ),
  "Career Transition": (c = GOLD) => (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <path
        d="M8 24 C8 14 22 8 30 18"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 30 C26 40 40 34 40 24"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <polyline
        points="26,14 30,18 26,22"
        stroke={c}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <polyline
        points="22,26 18,30 22,34"
        stroke={c}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Interim Management": (c = GOLD) => (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <circle cx="24" cy="24" r="16" stroke={c} strokeWidth="1.5" />
      <polyline
        points="24,12 24,24 32,28"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="24"
        y1="8"
        x2="24"
        y2="4"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1="24"
        x2="44"
        y2="24"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  Diversity: (c = GOLD) => (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      <circle cx="16" cy="18" r="6" stroke={c} strokeWidth="1.5" />
      <circle cx="32" cy="18" r="6" stroke={c} strokeWidth="1.5" />
      <circle cx="24" cy="30" r="6" stroke={c} strokeWidth="1.5" />
      <path
        d="M10 38 c0-5 12-8 14-2"
        stroke={c}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M38 38 c0-5-12-8-14-2"
        stroke={c}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  ),
};

/* ─── Function icons ─── */
const functionIcons = {
  "Boards & Governance": "M8 32h32M8 8h32M16 8v24M32 8v24",
  "Chief Executive Officer":
    "M24 8 L28 18 L40 18 L30 25 L34 36 L24 29 L14 36 L18 25 L8 18 L20 18 Z",
  "Chief Financial Officer": "M8 36 L16 22 L24 28 L32 14 L40 20 M8 36h32",
  "Marketing & Sales":
    "M8 36 C14 20 20 30 26 18 C32 6 38 26 40 20 M34 20 L40 20 L40 26",
  "Human Resources":
    "M16 16 a8 8 0 1 0 16 0 a8 8 0 1 0-16 0 M24 32 c-8 0-14 4-14 8h28c0-4-6-8-14-8",
  "Supply Chain": "M8 24 L20 8 L40 8 L40 40 L8 40 Z M20 8 L20 40 M8 24 L40 24",
  "Corporate Social Responsibility & Sustainability":
    "M24 40 C24 40 8 30 8 18 A16 16 0 0 1 40 18 C40 30 24 40 24 40 Z M24 18 v8 M20 22 h8",
  "Artificial Intelligence":
    "M16 24 a8 8 0 0 1 16 0 M12 32 a16 16 0 0 1 24-16 M8 40 a22 22 0 0 1 32-24 M24 24 l6-10 M24 24 l-8 6 M24 24 l10 4",
};

/* ─── Services data ─── */
const services = [
  {
    title: "Executive Search",
    img: IMGS.execSearch,
    tag: "Retained · Senior Leadership · Board Advisory",
    content:
      "We deliver retained executive search for senior leadership and board-level roles across industries and growth stages. Each mandate begins with a deep understanding of organisational strategy, culture, governance context, and performance objectives.\n\nOur research-led approach evaluates not only experience and track record, but judgement, leadership style, cultural alignment, and long-term impact.",
    stat: { value: "300+", label: "C-Suite Placements" },
  },
  {
    title: "Succession Planning",
    img: IMGS.succession,
    tag: "Pipeline · Bench Strength · Continuity",
    content:
      "Leadership continuity is a strategic imperative. We partner with Boards and executive teams to design succession strategies that strengthen bench strength, reduce risk, and preserve institutional knowledge.\n\nOur approach identifies critical roles, evaluates internal readiness, and builds structured leadership pipelines aligned to long-term organisational priorities.",
    stat: { value: "92%", label: "Retention Rate" },
  },
  {
    title: "Career Transition",
    img: IMGS.career,
    tag: "Outplacement · Coaching · Repositioning",
    content:
      "Organisational evolution often requires difficult leadership decisions. We support organisations in managing transitions with integrity and professionalism.\n\nOur services provide structured guidance, leadership coaching, capability alignment, and strategic repositioning support—helping individuals move forward with clarity.",
    stat: { value: "25+", label: "Years of Practice" },
  },
  {
    title: "Interim Management",
    img: IMGS.interim,
    tag: "Rapid Deployment · Transformation · Stability",
    content:
      "When leadership gaps arise or specialised expertise is required, interim management provides rapid access to experienced executives.\n\nWe identify seasoned leaders who can step into complex environments, stabilise operations, drive transformation, or deliver specific outcomes within defined timeframes.",
    stat: { value: "6", label: "Industry Verticals" },
  },
  {
    title: "Diversity",
    img: IMGS.diversity,
    tag: "Inclusion · Perspectives · Governance",
    content:
      "Diverse leadership strengthens governance, innovation, and performance. We integrate diversity and inclusion considerations into every search and advisory engagement.\n\nOur approach ensures leadership appointments reflect broader perspectives, varied experiences, and alignment with organisational values.",
    stat: { value: "30+", label: "Countries Reached" },
  },
];

const functions = [
  {
    title: "Boards & Governance",
    content:
      "We advise on board composition, governance effectiveness, and director appointments — strengthening oversight and leadership succession at the highest levels.",
    img: IMGS.boardroom,
  },
  {
    title: "Chief Executive Officer",
    content:
      "The CEO defines direction, culture, and performance expectations. We identify leaders capable of aligning strategy with execution and sustaining long-term growth.",
    img: IMGS.execSearch,
  },
  {
    title: "Chief Financial Officer",
    content:
      "The CFO has evolved into a strategic partner. We identify finance leaders who combine financial stewardship with enterprise-level thinking and governance credibility.",
    img: IMGS.process,
  },
  {
    title: "Marketing & Sales",
    content:
      "Growth leadership demands commercial acumen and execution discipline. We appoint leaders who translate strategy into measurable revenue impact.",
    img: IMGS.career,
  },
  {
    title: "Human Resources",
    content:
      "Human capital strategy is central to performance. We recruit HR leaders across talent strategy, organisational effectiveness, and change management.",
    img: IMGS.diversity,
  },
  {
    title: "Supply Chain",
    content:
      "Supply chain leadership balances efficiency, resilience, and global complexity. We identify leaders capable of driving operational excellence.",
    img: IMGS.functions,
  },
  {
    title: "Corporate Social Responsibility & Sustainability",
    content:
      "We appoint leaders who integrate economic performance with environmental stewardship and long-term stakeholder accountability.",
    img: IMGS.succession,
  },
  {
    title: "Artificial Intelligence",
    content:
      "AI leadership demands commercial judgement, governance awareness, and the ability to translate digital capability into measurable business impact.",
    img: IMGS.interim,
  },
];

const processSteps = [
  { n: "01", label: "Discovery", desc: "Deep organisational briefing" },
  { n: "02", label: "Research", desc: "Market mapping & candidate universe" },
  { n: "03", label: "Assessment", desc: "Rigorous evaluation & shortlisting" },
  { n: "04", label: "Presentation", desc: "Curated slate with full profiles" },
  { n: "05", label: "Placement", desc: "Offer management & onboarding" },
];

// ═══════════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════════
const Hero = () => (
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
        <div className="w-8 h-px" style={{ background: GOLD }} />
        <p
          className="tracking-[0.35em] text-xs font-medium uppercase"
          style={{ color: GOLD }}
        >
          Advantage Starts Here
        </p>
        <div className="w-8 h-px" style={{ background: GOLD }} />
      </div>
      <h1 className="text-white text-5xl md:text-7xl font-light leading-[1.1] tracking-wide mb-2">
        Our
      </h1>
      <h1
        className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-wide mb-8"
        style={{ color: GOLD }}
      >
        Services
      </h1>
      <div className="flex justify-center mb-10">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent" />
      </div>
      <p className="text-gray-300 text-lg leading-[1.9] font-light max-w-2xl mx-auto">
        Structured leadership advisory and executive search solutions aligned to
        strategy, governance, and long-term performance.
      </p>
    </motion.div>

    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#0F4C5C]" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
    >
      <span
        className="text-[10px] tracking-[0.3em] uppercase"
        style={{ color: `${GOLD}50` }}
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

// ═══════════════════════════════════════════════════════════════════
// STATS BAR (unchanged – client happy with this)
// ═══════════════════════════════════════════════════════════════════
const StatsBar = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  return (
    <section
      ref={statsRef}
      style={{ background: TEAL }}
      className="border-y border-[#C9A23F]/20 py-16 px-6"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        <StatCard
          value={300}
          suffix="+"
          label="Placements Made"
          delay={0}
          triggerCount={statsInView}
        />
        <StatCard
          value={25}
          suffix="+"
          label="Years of Practice"
          delay={0.15}
          triggerCount={statsInView}
        />
        <StatCard
          value={18}
          suffix=""
          label="Industries Served"
          delay={0.3}
          triggerCount={statsInView}
        />
        <StatCard
          value={92}
          suffix="%"
          label="Retention Rate"
          delay={0.45}
          triggerCount={statsInView}
        />
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// SERVICES — Full-bleed image cards stacked (Korn Ferry style)
// ═══════════════════════════════════════════════════════════════════
const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: index % 2 === 0 ? CREAM : DARK }}
    >
      <GoldDivider />
      <div
        className={`grid lg:grid-cols-2 min-h-[580px] ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}
      >
        {/* Image panel with parallax */}
        <div className="relative overflow-hidden min-h-[380px]">
          <motion.div
            style={{ y: imgY }}
            className="absolute inset-0 scale-110"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: isEven
                  ? "linear-gradient(to right, rgba(244,241,234,0) 0%, rgba(244,241,234,0.3) 80%, rgba(244,241,234,1) 100%)"
                  : "linear-gradient(to left, rgba(18,56,69,0) 0%, rgba(18,56,69,0.3) 80%, rgba(18,56,69,1) 100%)",
              }}
            />
          </motion.div>

          {/* Floating stat badge */}
          <FadeIn delay={0.3} x={isEven ? 30 : -30}>
            <div className="absolute bottom-8 left-8 right-8 lg:hidden">
              <div
                className="inline-flex flex-col items-start px-6 py-4 backdrop-blur-sm"
                style={{
                  background: "rgba(18,56,69,0.85)",
                  border: `1px solid ${GOLD}40`,
                }}
              >
                <span
                  className="text-3xl font-light"
                  style={{
                    color: GOLD,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {service.stat.value}
                </span>
                <span className="text-[0.65rem] tracking-[0.25em] uppercase text-white/60">
                  {service.stat.label}
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Index watermark */}
          <div className="absolute top-6 left-6 opacity-10">
            <span
              className="text-7xl font-light"
              style={{ color: GOLD, fontFamily: "'Cormorant Garamond', serif" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Content panel */}
        <div className="flex flex-col justify-center px-10 md:px-14 lg:px-16 py-16 relative">
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(#C9A23F 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10">
            <FadeIn x={isEven ? -30 : 30}>
              {/* Icon + label row */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition"
                  style={{
                    background: `${GOLD}15`,
                    border: `1px solid ${GOLD}40`,
                  }}
                >
                  {serviceIcons[service.title](GOLD)}
                </div>
                <div>
                  <GoldLabel>{service.tag.split("·")[0].trim()}</GoldLabel>
                </div>
              </div>

              <h2
                className="font-light leading-tight mb-3"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: isEven ? TEAL : "#fff",
                }}
              >
                {service.title}
              </h2>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tag.split("·").map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-[0.62rem] tracking-[0.2em] uppercase font-medium rounded-full"
                    style={{
                      border: `1px solid ${GOLD}50`,
                      color: GOLD,
                      background: `${GOLD}08`,
                    }}
                  >
                    {t.trim()}
                  </span>
                ))}
              </div>

              <div className="w-10 h-px mb-6" style={{ background: GOLD }} />

              <p
                className="text-sm leading-[1.95] font-light whitespace-pre-line max-w-md"
                style={{ color: isEven ? MUTED : "rgba(255,255,255,0.65)" }}
              >
                {service.content}
              </p>

              {/* Stat — desktop */}
              <div
                className="hidden lg:flex items-center gap-6 mt-10 pt-8"
                style={{
                  borderTop: `1px solid ${isEven ? "#e6dcc6" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                <div>
                  <div
                    className="text-3xl font-light mb-0.5"
                    style={{
                      color: GOLD,
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {service.stat.value}
                  </div>
                  <div
                    className="text-[0.65rem] tracking-[0.2em] uppercase font-light"
                    style={{ color: isEven ? MUTED : "rgba(255,255,255,0.4)" }}
                  >
                    {service.stat.label}
                  </div>
                </div>
                <div
                  className="w-px h-10"
                  style={{ background: `${GOLD}30` }}
                />
                <p
                  className="text-xs font-light italic"
                  style={{
                    color: isEven ? `${TEAL}80` : "rgba(255,255,255,0.35)",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.95rem",
                  }}
                >
                  "Precision over volume. Impact over speed."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => (
  <section>
    <GoldDivider />
    {/* Header strip */}
    <div style={{ background: CREAM }} className="pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <FadeUp>
          <GoldLabel>What We Offer</GoldLabel>
          <h2
            className="font-light mt-1"
            style={{ color: TEAL, fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Practice <span className="font-semibold">Areas</span>
          </h2>
          <div className="mt-3 w-14 h-px" style={{ background: GOLD }} />
        </FadeUp>
        <FadeUp delay={0.1}>
          <p
            className="text-sm leading-relaxed max-w-sm"
            style={{ color: MUTED }}
          >
            Each engagement is tailored — we do not apply generic frameworks to
            complex leadership mandates.
          </p>
        </FadeUp>
      </div>
    </div>

    {services.map((s, i) => (
      <ServiceCard key={s.title} service={s} index={i} />
    ))}
  </section>
);

// ═══════════════════════════════════════════════════════════════════
// PROCESS — Full-bleed image backdrop + floating step cards
// ═══════════════════════════════════════════════════════════════════
const ProcessSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <GoldDivider />

      {/* Full-bleed parallax bg */}
      <div className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <img
            src={IMGS.process}
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(15,76,92,0.7) 0%, rgba(18,56,69,0.92) 100%)",
            }}
          />
        </motion.div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px)",
          }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <GoldLabel center>How We Work</GoldLabel>
            <h2
              className="text-white text-4xl md:text-6xl font-light mt-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A five-stage process grounded in{" "}
              <em className="font-semibold italic" style={{ color: GOLD }}>
                precision
              </em>
            </h2>
            <div
              className="mt-5 w-14 h-px mx-auto"
              style={{ background: GOLD }}
            />
            <p className="mt-5 text-white/60 text-base leading-relaxed max-w-xl mx-auto font-light">
              Each engagement follows a disciplined methodology — never
              transactional, always advisory.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Step cards overlapping the image */}
      <div style={{ background: DARK }} className="relative pb-16">
        <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
          <div
            className="grid grid-cols-1 md:grid-cols-5 gap-0 overflow-hidden rounded-sm shadow-2xl"
            style={{ border: `1px solid ${GOLD}25` }}
          >
            {processSteps.map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.1}>
                <motion.div
                  whileHover={{ backgroundColor: `${GOLD}15` }}
                  className="group relative p-8 transition-colors duration-300 h-full flex flex-col"
                  style={{
                    borderRight:
                      i < processSteps.length - 1
                        ? `1px solid ${GOLD}20`
                        : "none",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-500"
                    style={{ background: GOLD }}
                  />
                  <span
                    className="text-4xl font-light leading-none mb-6 block"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: `${GOLD}25`,
                    }}
                  >
                    {step.n}
                  </span>
                  <h4 className="text-white font-semibold text-sm tracking-wide mb-2 group-hover:text-amber-400 transition-colors">
                    {step.label}
                  </h4>
                  <p className="text-gray-500 text-xs leading-[1.8] font-light flex-1">
                    {step.desc}
                  </p>
                  <div
                    className="mt-4 w-6 h-px group-hover:w-full transition-all duration-500"
                    style={{ background: `${GOLD}40` }}
                  />
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Connecting arrow strip */}
        <div className="max-w-6xl mx-auto px-6 mt-10 hidden md:flex justify-center">
          <p
            className="text-xs tracking-[0.25em] uppercase font-light"
            style={{ color: `${GOLD}50` }}
          >
            Discovery → Research → Assessment → Presentation → Placement
          </p>
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// FUNCTIONS — Mosaic image grid with hover reveal
// ═══════════════════════════════════════════════════════════════════
const FunctionCard = ({ item, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      className="group relative overflow-hidden cursor-default"
      style={{
        height: "100%",
        minHeight: "260px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Default overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(to top, rgba(18,56,69,0.96) 0%, rgba(15,76,92,0.75) 60%, rgba(15,76,92,0.4) 100%)",
          opacity: hovered ? 0 : 1,
        }}
      />

      {/* Hover overlay — deeper */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to top, rgba(10,24,30,0.98) 0%, rgba(15,76,92,0.95) 100%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Gold top line on hover */}
      <div
        className="absolute top-0 left-0 h-[3px] transition-all duration-500"
        style={{ background: GOLD, width: hovered ? "100%" : "0%" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-7">
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 flex-shrink-0 transition-all duration-300"
          style={{
            background: hovered ? `${GOLD}20` : "rgba(255,255,255,0.07)",
            border: `1px solid ${hovered ? GOLD + "60" : "rgba(255,255,255,0.1)"}`,
          }}
        >
          <svg viewBox="0 0 48 48" fill="none" width="20" height="20">
            <path
              d={functionIcons[item.title]}
              stroke={hovered ? GOLD : "rgba(255,255,255,0.7)"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-300"
            />
          </svg>
        </div>

        <h3
          className="text-white font-medium text-sm leading-snug mb-2 transition-colors duration-300"
          style={{ color: hovered ? GOLD : "white" }}
        >
          {item.title}
        </h3>

        {/* Description — slides in on hover */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{
            maxHeight: hovered ? "120px" : "0px",
            opacity: hovered ? 1 : 0,
          }}
        >
          <div className="w-6 h-px mb-3" style={{ background: GOLD }} />
          <p
            className="text-xs leading-[1.8] font-light"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {item.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FunctionsSection = () => (
  <section className="relative overflow-hidden" style={{ background: CREAM }}>
    <GoldDivider />
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-10 items-end mb-14">
        <FadeUp>
          <GoldLabel>Expertise</GoldLabel>
          <h2
            className="font-light mt-1"
            style={{ color: TEAL, fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Functional <span className="font-semibold">Coverage</span>
          </h2>
          <div className="mt-3 w-14 h-px" style={{ background: GOLD }} />
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            Our practice spans all major executive functions — enabling us to
            serve complex, cross-functional leadership mandates with genuine
            sector depth. Hover each area to explore.
          </p>
        </FadeUp>
      </div>

      {/* Mosaic grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[260px]">
        {/* Row 1 — first card spans 2 rows */}
        <div className="lg:row-span-2">
          <FunctionCard item={functions[0]} index={0} />
        </div>
        <FunctionCard item={functions[1]} index={1} />
        <FunctionCard item={functions[2]} index={2} />
        <FunctionCard item={functions[3]} index={3} />
        {/* Row 2 */}
        <FunctionCard item={functions[4]} index={4} />
        <FunctionCard item={functions[5]} index={5} />
        {/* Last card spans 2 cols */}
        <FunctionCard item={functions[6]} index={6} />
        <FunctionCard item={functions[7]} index={7} />
      </div>

      {/* Pull quote strip */}
      <FadeUp delay={0.3}>
        <div
          className="mt-12 py-8 px-10 flex flex-col md:flex-row items-center gap-6"
          style={{ border: `1px solid ${GOLD}25`, background: `${TEAL}08` }}
        >
          <div
            className="text-5xl font-light leading-none flex-shrink-0"
            style={{
              color: `${GOLD}30`,
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            "
          </div>
          <p
            className="italic text-lg font-light leading-relaxed flex-1"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: TEAL }}
          >
            Our practice spans every major executive function — ensuring we
            serve organisations holistically, not in narrow silos.
          </p>
          <div
            className="w-px h-10 flex-shrink-0 hidden md:block"
            style={{ background: `${GOLD}40` }}
          />
          <p
            className="text-[0.65rem] tracking-[0.25em] uppercase font-medium flex-shrink-0"
            style={{ color: GOLD }}
          >
            PivotEdge
            <br />
            Partners
          </p>
        </div>
      </FadeUp>
    </div>
  </section>
);

// ═══════════════════════════════════════════════════════════════════
// COMMITMENT CLOSER — Dark image strip
// ═══════════════════════════════════════════════════════════════════
const ClosingSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const inView = useInView(ref, { once: true });

  const commitments = [
    {
      n: "01",
      title: "Integrity First",
      body: "Every engagement conducted with confidentiality and professional accountability.",
    },
    {
      n: "02",
      title: "Strategic Alignment",
      body: "Not filling positions — strengthening organisations through precisely aligned leadership.",
    },
    {
      n: "03",
      title: "Long-Term Value",
      body: "When leadership is right, organisations move with confidence. That is where advantage begins.",
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden">
      <GoldDivider />

      {/* Full-bleed image */}
      <div className="relative h-[50vh] min-h-[380px] overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <img
            src={IMGS.boardroom}
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(18,56,69,0.55) 0%, rgba(18,56,69,0.95) 100%)",
            }}
          />
        </motion.div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <GoldLabel center>Our Commitment</GoldLabel>
            <h2
              className="text-white text-4xl md:text-6xl font-light mt-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Built on{" "}
              <em className="font-semibold italic" style={{ color: GOLD }}>
                integrity
              </em>
              <br />
              and accountability
            </h2>
          </motion.div>
        </div>
      </div>

      {/* 3-column commitment cards */}
      <div style={{ background: DARK }} className="px-6 py-16">
        <div
          className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0 overflow-hidden"
          style={{ border: `1px solid ${GOLD}15` }}
        >
          {commitments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="group relative p-10 hover:bg-white/5 transition-all duration-300"
              style={{ borderRight: i < 2 ? `1px solid ${GOLD}15` : "none" }}
            >
              <div
                className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-500"
                style={{ background: GOLD }}
              />
              <span
                className="absolute top-6 right-8 text-5xl font-bold leading-none select-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: `${GOLD}08`,
                }}
              >
                {item.n}
              </span>
              <h3 className="text-white font-medium text-base mb-3 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p
                className="text-sm leading-[1.8] font-light"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-14"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px" style={{ background: `${GOLD}40` }} />
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: GOLD }}
            />
            <div className="w-12 h-px" style={{ background: `${GOLD}40` }} />
          </div>
          <p
            className="font-medium tracking-[0.2em] uppercase text-sm"
            style={{ color: GOLD }}
          >
            That is where advantage begins.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════
const Services = () => (
  <div style={{ fontFamily: "'Jost', sans-serif" }}>
    <Hero />
    <StatsBar />
    <ServicesSection />
    <ProcessSection />
    <FunctionsSection />
    <ClosingSection />
  </div>
);

export default Services;
