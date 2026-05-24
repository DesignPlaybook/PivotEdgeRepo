import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import bg from "../../assets/images/bg.webp";

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

/* ─── Stat Card ─── */
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
        <span className="font-semibold text-[#C9A23F]">{count}</span>
        <span className="text-[#C9A23F] text-4xl">{suffix}</span>
      </div>
      <div className="mt-2 text-sm tracking-[0.2em] text-gray-400 uppercase font-light">
        {label}
      </div>
    </motion.div>
  );
}

/* ─── Decorative SVG: Abstract executive geometry ─── */
const GeometricAccent = () => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full opacity-80"
  >
    <circle cx="100" cy="100" r="90" stroke="#C9A23F" strokeWidth="0.5" />
    <circle
      cx="100"
      cy="100"
      r="70"
      stroke="#C9A23F"
      strokeWidth="0.3"
      strokeDasharray="4 6"
    />
    <circle cx="100" cy="100" r="50" stroke="#0F4C5C" strokeWidth="1" />
    <line
      x1="100"
      y1="10"
      x2="100"
      y2="190"
      stroke="#C9A23F"
      strokeWidth="0.4"
      strokeDasharray="2 8"
    />
    <line
      x1="10"
      y1="100"
      x2="190"
      y2="100"
      stroke="#C9A23F"
      strokeWidth="0.4"
      strokeDasharray="2 8"
    />
    <polygon
      points="100,60 122,86 100,112 78,86"
      stroke="#C9A23F"
      strokeWidth="0.8"
      fill="none"
    />
    <circle cx="100" cy="100" r="5" fill="#C9A23F" />
    <circle cx="100" cy="10" r="2.5" fill="#C9A23F" opacity="0.6" />
    <circle cx="100" cy="190" r="2.5" fill="#C9A23F" opacity="0.6" />
    <circle cx="10" cy="100" r="2.5" fill="#C9A23F" opacity="0.6" />
    <circle cx="190" cy="100" r="2.5" fill="#C9A23F" opacity="0.6" />
  </svg>
);

/* ─── Decorative SVG: Org hierarchy mark ─── */
const OrgMark = () => (
  <svg
    viewBox="0 0 120 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <rect
      x="48"
      y="4"
      width="24"
      height="16"
      rx="3"
      fill="#C9A23F"
      opacity="0.9"
    />
    <line x1="60" y1="20" x2="60" y2="36" stroke="#C9A23F" strokeWidth="1" />
    <line x1="24" y1="36" x2="96" y2="36" stroke="#C9A23F" strokeWidth="1" />
    <line x1="24" y1="36" x2="24" y2="52" stroke="#C9A23F" strokeWidth="1" />
    <line x1="60" y1="36" x2="60" y2="52" stroke="#C9A23F" strokeWidth="1" />
    <line x1="96" y1="36" x2="96" y2="52" stroke="#C9A23F" strokeWidth="1" />
    <rect
      x="12"
      y="52"
      width="24"
      height="14"
      rx="2"
      fill="#0F4C5C"
      stroke="#C9A23F"
      strokeWidth="0.6"
    />
    <rect
      x="48"
      y="52"
      width="24"
      height="14"
      rx="2"
      fill="#0F4C5C"
      stroke="#C9A23F"
      strokeWidth="0.6"
    />
    <rect
      x="84"
      y="52"
      width="24"
      height="14"
      rx="2"
      fill="#0F4C5C"
      stroke="#C9A23F"
      strokeWidth="0.6"
    />
  </svg>
);

/* ─── Decorative SVG: Pipeline/succession mark ─── */
const PipelineMark = () => (
  <svg
    viewBox="0 0 120 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <circle
          cx={20 + i * 27}
          cy="30"
          r="12"
          fill="#0F4C5C"
          stroke="#C9A23F"
          strokeWidth="0.8"
        />
        <circle
          cx={20 + i * 27}
          cy="30"
          r={5 - i * 0.8}
          fill="#C9A23F"
          opacity={1 - i * 0.2}
        />
        {i < 3 && (
          <line
            x1={32 + i * 27}
            y1="30"
            x2={35 + i * 27}
            y2="30"
            stroke="#C9A23F"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
        )}
      </g>
    ))}
    <text
      x="60"
      y="56"
      textAnchor="middle"
      fill="#C9A23F"
      fontSize="7"
      fontFamily="serif"
      letterSpacing="2"
    >
      PIPELINE
    </text>
  </svg>
);

/* ─── Decorative SVG: Globe/network mark ─── */
const NetworkMark = () => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <circle cx="60" cy="60" r="50" stroke="#C9A23F" strokeWidth="0.6" />
    <ellipse
      cx="60"
      cy="60"
      rx="30"
      ry="50"
      stroke="#C9A23F"
      strokeWidth="0.4"
    />
    <ellipse
      cx="60"
      cy="60"
      rx="50"
      ry="20"
      stroke="#C9A23F"
      strokeWidth="0.4"
    />
    <line x1="10" y1="60" x2="110" y2="60" stroke="#C9A23F" strokeWidth="0.3" />
    <line x1="60" y1="10" x2="60" y2="110" stroke="#C9A23F" strokeWidth="0.3" />
    <circle cx="60" cy="60" r="4" fill="#C9A23F" />
    <circle cx="35" cy="40" r="3" fill="#C9A23F" opacity="0.7" />
    <circle cx="85" cy="45" r="3" fill="#C9A23F" opacity="0.7" />
    <circle cx="45" cy="80" r="3" fill="#C9A23F" opacity="0.7" />
    <circle cx="80" cy="75" r="3" fill="#C9A23F" opacity="0.7" />
    <line
      x1="60"
      y1="60"
      x2="35"
      y2="40"
      stroke="#C9A23F"
      strokeWidth="0.4"
      opacity="0.5"
    />
    <line
      x1="60"
      y1="60"
      x2="85"
      y2="45"
      stroke="#C9A23F"
      strokeWidth="0.4"
      opacity="0.5"
    />
    <line
      x1="60"
      y1="60"
      x2="45"
      y2="80"
      stroke="#C9A23F"
      strokeWidth="0.4"
      opacity="0.5"
    />
    <line
      x1="60"
      y1="60"
      x2="80"
      y2="75"
      stroke="#C9A23F"
      strokeWidth="0.4"
      opacity="0.5"
    />
  </svg>
);

/* ─── Service icon SVGs ─── */
const serviceIcons = {
  "Executive Search": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="16" r="8" stroke="#C9A23F" strokeWidth="1.5" />
      <path
        d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16"
        stroke="#C9A23F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="36" cy="36" r="5" stroke="#C9A23F" strokeWidth="1.5" />
      <line
        x1="40"
        y1="40"
        x2="43"
        y2="43"
        stroke="#C9A23F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Succession Planning": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect
        x="20"
        y="6"
        width="8"
        height="8"
        rx="2"
        stroke="#C9A23F"
        strokeWidth="1.5"
      />
      <line
        x1="24"
        y1="14"
        x2="24"
        y2="22"
        stroke="#C9A23F"
        strokeWidth="1.5"
      />
      <line
        x1="12"
        y1="22"
        x2="36"
        y2="22"
        stroke="#C9A23F"
        strokeWidth="1.5"
      />
      <line
        x1="12"
        y1="22"
        x2="12"
        y2="30"
        stroke="#C9A23F"
        strokeWidth="1.5"
      />
      <line
        x1="24"
        y1="22"
        x2="24"
        y2="30"
        stroke="#C9A23F"
        strokeWidth="1.5"
      />
      <line
        x1="36"
        y1="22"
        x2="36"
        y2="30"
        stroke="#C9A23F"
        strokeWidth="1.5"
      />
      <rect
        x="8"
        y="30"
        width="8"
        height="8"
        rx="2"
        stroke="#C9A23F"
        strokeWidth="1.5"
      />
      <rect
        x="20"
        y="30"
        width="8"
        height="8"
        rx="2"
        stroke="#C9A23F"
        strokeWidth="1.5"
      />
      <rect
        x="32"
        y="30"
        width="8"
        height="8"
        rx="2"
        stroke="#C9A23F"
        strokeWidth="1.5"
      />
    </svg>
  ),
  "Career Transition": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path
        d="M8 24 C8 14 22 8 30 18"
        stroke="#C9A23F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 30 C26 40 40 34 40 24"
        stroke="#C9A23F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <polyline
        points="26,14 30,18 26,22"
        stroke="#C9A23F"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <polyline
        points="22,26 18,30 22,34"
        stroke="#C9A23F"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Interim Management": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="16" stroke="#C9A23F" strokeWidth="1.5" />
      <polyline
        points="24,12 24,24 32,28"
        stroke="#C9A23F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="24"
        y1="8"
        x2="24"
        y2="4"
        stroke="#C9A23F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1="24"
        x2="44"
        y2="24"
        stroke="#C9A23F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  Diversity: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="16" cy="18" r="6" stroke="#C9A23F" strokeWidth="1.5" />
      <circle cx="32" cy="18" r="6" stroke="#C9A23F" strokeWidth="1.5" />
      <circle cx="24" cy="30" r="6" stroke="#C9A23F" strokeWidth="1.5" />
      <path
        d="M10 38 c0-5 12-8 14-2"
        stroke="#C9A23F"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M38 38 c0-5-12-8-14-2"
        stroke="#C9A23F"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  ),
};

/* ─── Function Icons ─── */
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

const services = [
  {
    title: "Executive Search",
    content: `We deliver retained executive search for senior leadership and board-level roles across industries and growth stages. Each mandate begins with a deep understanding of organisational strategy, culture, governance context, and performance objectives.\n\nOur research-led approach evaluates not only experience and track record, but judgement, leadership style, cultural alignment, and long-term impact.`,
  },
  {
    title: "Succession Planning",
    content: `Leadership continuity is a strategic imperative. We partner with Boards and executive teams to design succession strategies that strengthen bench strength, reduce risk, and preserve institutional knowledge.\n\nOur approach identifies critical roles, evaluates internal readiness, and builds structured leadership pipelines aligned to long-term organisational priorities.`,
  },
  {
    title: "Career Transition",
    content: `Organisational evolution often requires difficult leadership decisions. We support organisations in managing transitions with integrity and professionalism.\n\nOur services provide structured guidance, leadership coaching, capability alignment, and strategic repositioning support—helping individuals move forward with clarity.`,
  },
  {
    title: "Interim Management",
    content: `When leadership gaps arise or specialised expertise is required, interim management provides rapid access to experienced executives.\n\nWe identify seasoned leaders who can step into complex environments, stabilise operations, drive transformation, or deliver specific outcomes within defined timeframes.`,
  },
  {
    title: "Diversity",
    content: `Diverse leadership strengthens governance, innovation, and performance. We integrate diversity and inclusion considerations into every search and advisory engagement.\n\nOur approach ensures leadership appointments reflect broader perspectives, varied experiences, and alignment with organisational values.`,
  },
];

const functions = [
  {
    title: "Boards & Governance",
    content: `We advise on board composition, governance effectiveness, and director appointments. Our work supports boards in strengthening oversight, strategic guidance, and leadership succession at the highest levels.`,
  },
  {
    title: "Chief Executive Officer",
    content: `The CEO defines direction, culture, and performance expectations. We support organisations in identifying and assessing leaders capable of aligning strategy with execution and sustaining long-term growth.`,
  },
  {
    title: "Chief Financial Officer",
    content: `The CFO has evolved into a strategic partner to the CEO and Board. We identify finance leaders who combine financial stewardship with enterprise-level thinking and governance credibility.`,
  },
  {
    title: "Marketing & Sales",
    content: `Growth leadership demands commercial acumen, customer insight, and execution discipline. We support organisations in appointing Marketing and Sales leaders who translate strategy into measurable revenue impact.`,
  },
  {
    title: "Human Resources",
    content: `Human capital strategy is central to organisational performance. We recruit and advise HR leaders across talent strategy, organisational effectiveness, succession planning, change management, and rewards.`,
  },
  {
    title: "Supply Chain",
    content: `Supply chain leadership is increasingly strategic, balancing efficiency, resilience, risk management, and global complexity. We identify leaders capable of driving operational excellence.`,
  },
  {
    title: "Corporate Social Responsibility & Sustainability",
    content: `Sustainability and responsible business practices are integral to strategy. We support organisations in appointing leaders who integrate economic performance with environmental stewardship and stakeholder accountability.`,
  },
  {
    title: "Artificial Intelligence",
    content: `AI and advanced analytics are reshaping business models across industries. We identify leaders who can bridge technology and strategy, embed responsible innovation, and translate digital capability into commercial advantage.\n\nAI leadership is treated as a horizontal capability—integrated across functions and industries.`,
  },
];

/* ─── Process step component ─── */
function ProcessStep({ number, label, desc, isLast }) {
  return (
    <div className="flex flex-col items-center text-center relative">
      <div className="w-14 h-14 rounded-full border border-[#C9A23F]/60 bg-[#123845] flex items-center justify-center mb-3 relative z-10">
        <span className="text-[#C9A23F] font-light text-lg">{number}</span>
      </div>
      {!isLast && (
        <div className="absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-[1px] bg-gradient-to-r from-[#C9A23F]/60 to-transparent hidden md:block" />
      )}
      <p className="text-white text-sm font-medium tracking-wide">{label}</p>
      <p className="text-gray-400 text-xs mt-1 max-w-[120px] leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

const Services = () => {
  /* stat counter trigger */
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  /* active service card */
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="flex flex-col font-sans">
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative min-h-[100vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src={bg}
          className="absolute w-full h-full object-cover scale-105"
          alt=""
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%),linear-gradient(to_bottom,#0F4C5C,#123845)] opacity-97" />

        {/* Decorative geometric: top right */}
        <div className="absolute top-12 right-12 w-48 h-48 opacity-20 hidden lg:block">
          <GeometricAccent />
        </div>
        {/* Decorative geometric: bottom left */}
        <div className="absolute bottom-24 left-12 w-32 h-32 opacity-15 hidden lg:block">
          <GeometricAccent />
        </div>

        {/* Fine grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl px-6"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#C9A23F]" />
            <p className="text-[#C9A23F] tracking-[0.35em] text-xs font-medium uppercase">
              Advantage Starts Here
            </p>
            <div className="w-8 h-[1px] bg-[#C9A23F]" />
          </div>

          <h1 className="text-white text-5xl md:text-7xl font-light leading-[1.1] tracking-wide mb-2">
            Our
          </h1>
          <h1 className="text-[#C9A23F] text-5xl md:text-7xl font-semibold leading-[1.1] tracking-wide mb-8">
            Services
          </h1>

          <div className="flex justify-center mb-10">
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent" />
          </div>

          <p className="text-gray-300 text-lg leading-[1.9] font-light max-w-2xl mx-auto">
            Structured leadership advisory and executive search solutions
            aligned to strategy, governance, and long-term performance.
          </p>

          {/* CTA chips */}
          {/* <div className="flex flex-wrap justify-center gap-3 mt-10">
            {[
              "Executive Search",
              "Succession Planning",
              "Interim Management",
              "Diversity",
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

        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#0F4C5C]" />

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-[#C9A23F]/40 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#C9A23F]/60 to-transparent" />
        </motion.div>
      </section>

      {/* ══════════════════════ STATS BAR ══════════════════════ */}
      <section
        ref={statsRef}
        className="bg-[#0F4C5C] border-y border-[#C9A23F]/20 py-16 px-6"
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

      {/* ══════════════════════ SERVICES — INTERACTIVE SPLIT ══════════════════════ */}
      <section className="bg-[#F4F1EA] py-24 relative overflow-hidden">
        {/* Gold shimmer top */}
        <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-70" />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5 pointer-events-none">
          <NetworkMark />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[#C9A23F] text-xs tracking-[0.35em] uppercase mb-2">
                What We Offer
              </p>
              <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light">
                Practice <span className="font-semibold">Areas</span>
              </h2>
              <div className="mt-4 w-16 h-[2px] bg-[#C9A23F]" />
            </div>
            <p className="text-[#5b6f77] text-sm leading-relaxed max-w-sm">
              Each engagement is tailored — we do not apply generic frameworks
              to complex leadership mandates.
            </p>
          </div>

          {/* ── Magazine split: large feature left, compact list right ── */}
          <div className="grid lg:grid-cols-[1fr_380px] gap-6 items-stretch">
            {/* LEFT — large feature card */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#0F4C5C] rounded-2xl overflow-hidden flex flex-col justify-between p-10 md:p-14 min-h-[480px]"
            >
              {/* Background geo watermark */}
              <div className="absolute bottom-0 right-0 w-72 h-72 opacity-[0.06] pointer-events-none translate-x-10 translate-y-10">
                <GeometricAccent />
              </div>
              {/* Gold top bar */}
              <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C9A23F] via-[#C9A23F]/60 to-transparent" />

              {/* Top row: counter + icon */}
              <div className="flex items-start justify-between mb-8">
                <span
                  className="text-[80px] font-light text-[#C9A23F]/15 leading-none select-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {String(activeService + 1).padStart(2, "0")}
                </span>
                <div className="w-16 h-16 rounded-xl border border-[#C9A23F]/25 bg-[#C9A23F]/10 flex items-center justify-center">
                  {/* Scale up the existing icon */}
                  <div className="scale-125">
                    {serviceIcons[services[activeService].title]}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-[#C9A23F] text-[0.68rem] tracking-[0.3em] uppercase mb-4">
                  {String(activeService + 1).padStart(2, "0")} /{" "}
                  {String(services.length).padStart(2, "0")}
                </p>
                <h3
                  className="text-3xl md:text-4xl font-light text-white mb-5"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {services[activeService].title}
                </h3>
                <div className="w-10 h-[2px] bg-[#C9A23F] mb-6" />
                <p className="text-gray-300 text-[15px] leading-[1.95] font-light whitespace-pre-line max-w-xl">
                  {services[activeService].content}
                </p>
              </div>

              {/* Bottom: prev/next */}
              <div className="flex items-center gap-3 mt-10">
                <button
                  onClick={() => setActiveService((i) => Math.max(0, i - 1))}
                  disabled={activeService === 0}
                  className="w-9 h-9 rounded-full border border-[#C9A23F]/30 flex items-center justify-center hover:border-[#C9A23F] hover:bg-[#C9A23F]/10 transition disabled:opacity-20 text-[#C9A23F]"
                >
                  <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
                    <polyline
                      points="12,4 6,10 12,16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setActiveService((i) =>
                      Math.min(services.length - 1, i + 1),
                    )
                  }
                  disabled={activeService === services.length - 1}
                  className="w-9 h-9 rounded-full border border-[#C9A23F]/30 flex items-center justify-center hover:border-[#C9A23F] hover:bg-[#C9A23F]/10 transition disabled:opacity-20 text-[#C9A23F]"
                >
                  <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
                    <polyline
                      points="8,4 14,10 8,16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                {/* Progress dots */}
                <div className="flex gap-1.5 ml-2">
                  {services.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveService(i)}
                      className={`h-1 rounded-full transition-all duration-300 cursor-pointer
                        ${activeService === i ? "w-6 bg-[#C9A23F]" : "w-1.5 bg-[#C9A23F]/30 hover:bg-[#C9A23F]/60"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT — compact stacked service list */}
            <div className="flex flex-col gap-3 justify-center">
              {services.map((s, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveService(i)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className={`group w-full text-left rounded-xl px-6 py-5 border flex items-center gap-4 transition-all duration-300 relative overflow-hidden
                    ${
                      activeService === i
                        ? "bg-[#C9A23F] border-[#C9A23F] shadow-lg"
                        : "bg-white/70 border-[#e6dcc6] hover:border-[#C9A23F]/50 hover:bg-white hover:shadow-md"
                    }`}
                >
                  {/* Active: gold left bar already via bg; inactive: animated bar */}
                  {activeService !== i && (
                    <span className="absolute left-0 top-0 h-0 w-[3px] bg-[#C9A23F] group-hover:h-full transition-all duration-300 rounded-r" />
                  )}

                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300
                    ${activeService === i ? "bg-[#0F4C5C]/20" : "bg-[#0F4C5C]/5 group-hover:bg-[#0F4C5C]/10"}`}
                  >
                    {/* Recolor icon for active state */}
                    <div
                      className={
                        activeService === i ? "opacity-100" : "opacity-80"
                      }
                    >
                      {serviceIcons[s.title]}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-semibold tracking-wide transition-colors leading-tight
                      ${activeService === i ? "text-[#0F4C5C]" : "text-[#0F4C5C] group-hover:text-[#C9A23F]"}`}
                    >
                      {s.title}
                    </p>
                  </div>

                  {/* Active check */}
                  {activeService === i ? (
                    <svg
                      className="w-4 h-4 text-[#0F4C5C] flex-shrink-0"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <polyline
                        points="3,8 6,11 13,4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 text-[#0F4C5C]/20 group-hover:text-[#C9A23F]/50 flex-shrink-0 transition-colors"
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
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ PROCESS STEPS ══════════════════════ */}
      <section className="bg-[#123845] py-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px),repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px)",
          }}
        />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C9A23F] text-xs tracking-[0.35em] uppercase mb-2">
              How We Work
            </p>
            <h2 className="text-white text-3xl font-light">
              Our <span className="text-[#C9A23F] font-semibold">Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative">
            {[
              {
                n: "01",
                label: "Discovery",
                desc: "Deep organisational briefing",
              },
              {
                n: "02",
                label: "Research",
                desc: "Market mapping & candidate universe",
              },
              {
                n: "03",
                label: "Assessment",
                desc: "Rigorous evaluation & shortlisting",
              },
              {
                n: "04",
                label: "Presentation",
                desc: "Curated slate with full profiles",
              },
              {
                n: "05",
                label: "Placement",
                desc: "Offer management & onboarding",
              },
            ].map((step, i, arr) => (
              <ProcessStep
                key={i}
                number={step.n}
                label={step.label}
                desc={step.desc}
                isLast={i === arr.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ FUNCTIONS ══════════════════════ */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />

        {/* Large decorative org chart watermark */}
        <div className="absolute -right-12 top-1/3 w-64 h-48 opacity-[0.04] pointer-events-none">
          <OrgMark />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="mb-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#C9A23F] text-xs tracking-[0.35em] uppercase mb-2">
                Expertise
              </p>
              <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light">
                Functional <span className="font-semibold">Coverage</span>
              </h2>
              <div className="mt-4 w-16 h-[2px] bg-[#C9A23F]" />
            </div>
            <p className="text-[#5b6f77] text-sm leading-relaxed">
              Our practice spans all major executive functions — enabling us to
              serve complex, cross-functional leadership mandates with genuine
              sector depth.
            </p>
          </div>

          {/* Grid of function cards */}
          <div className="grid md:grid-cols-2 gap-0 border border-[#0F4C5C]/10 rounded-2xl overflow-hidden">
            {functions.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: (i % 4) * 0.1 },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className={`group relative p-8 border-[#0F4C5C]/10
                  ${i % 2 === 0 ? "border-r" : ""}
                  ${i < functions.length - 2 ? "border-b" : ""}
                  hover:bg-[#F4F1EA]/50 transition-colors duration-300`}
              >
                {/* Gold hover left bar */}
                <span className="absolute left-0 top-0 h-0 w-[3px] bg-[#C9A23F] group-hover:h-full transition-all duration-300" />

                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0F4C5C]/5 group-hover:bg-[#0F4C5C]/10 transition flex items-center justify-center">
                    <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6">
                      <path
                        d={functionIcons[item.title]}
                        stroke="#0F4C5C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-[#0F4C5C] font-semibold text-base mb-2 group-hover:text-[#C9A23F] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#5b6f77] text-sm leading-[1.8] font-light">
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA STRIP ══════════════════════ */}
      {/* <section className="bg-[#0F4C5C] py-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C9A23F 0%, transparent 50%), radial-gradient(circle at 80% 50%, #C9A23F 0%, transparent 50%)",
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 mx-auto mb-6 opacity-50">
            <GeometricAccent />
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-light mb-4">
            Ready to discuss a{" "}
            <span className="text-[#C9A23F] font-semibold">mandate</span>?
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Every engagement begins with a confidential conversation. Speak with
            one of our advisors to explore how we can serve your leadership
            needs.
          </p>
          <button className="px-10 py-4 border border-[#C9A23F] text-[#C9A23F] text-sm tracking-widest uppercase hover:bg-[#C9A23F] hover:text-[#0F4C5C] transition-all duration-300 font-medium rounded-none">
            Begin a Conversation
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
