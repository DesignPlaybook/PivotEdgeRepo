import React, { useRef, useState } from "react";
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

// ─── Parallax image ───────────────────────────────────────────────────────────
const ParallaxImage = ({ src, alt = "", className = "" }) => {
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

// ─── Gold label ───────────────────────────────────────────────────────────────
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

// ─── Data ─────────────────────────────────────────────────────────────────────
const differentiators = [
  {
    title: "Advisory Orientation",
    body: "Trusted advisors, not transactional recruiters. Our counsel extends beyond placement to leadership architecture.",
    photo:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1400&q=80&fit=crop",
  },
  {
    title: "Governance-Aware Frameworks",
    body: "Leaders evaluated within the broader enterprise ecosystem — grounded in governance principles.",
    photo:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1400&q=80&fit=crop",
  },
  {
    title: "Senior Leadership Networks",
    body: "Deep, trust-based access to executives at the apex of their industries — relationships cultivated over decades.",
    photo:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80&fit=crop",
  },
  {
    title: "Research-Driven Methodology",
    body: "Structured, evidence-led. Every search anchored in market intelligence and precise capability benchmarking.",
    photo:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1400&q=80&fit=crop",
  },
  {
    title: "Long-Term Partnership",
    body: "We measure success not by placement speed, but by sustained leadership impact — years, not months.",
    photo:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1400&q=80&fit=crop",
  },
  {
    title: "Confidential Independence",
    body: "Every search executed with discretion. Our independence ensures objectivity for client and candidate alike.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=80&fit=crop",
  },
];

const mandateGroups = [
  {
    category: "C-Suite",
    items: [
      "Chief Executive Officer",
      "Chief Financial Officer",
      "Functional Heads — Finance, HR, Sales, Operations, Technology, Sustainability",
    ],
  },
  {
    category: "Board Level",
    items: [
      "Independent & Non-Executive Directors",
      "Board Chairs & Committee Leadership",
      "Audit, Risk, Compensation & Nomination Committees",
    ],
  },
  {
    category: "Transformation",
    items: [
      "Business Unit Heads",
      "Transformation & Digital Leaders",
      "AI & Advanced Analytics Leaders",
    ],
  },
];

const outcomes = [
  {
    label: "Strategic Alignment",
    desc: "Leadership precisely matched to growth objectives",
  },
  {
    label: "Reduced Governance Risk",
    desc: "Succession and oversight vulnerabilities addressed",
  },
  {
    label: "Faster Integration",
    desc: "Executives embedded and effective from day one",
  },
  {
    label: "Sustained Performance",
    desc: "Impact measured over years, not quarters",
  },
  {
    label: "Governance Credibility",
    desc: "Board and stakeholder confidence strengthened",
  },
  {
    label: "CEO–Board Partnership",
    desc: "Healthier dynamics at the apex of leadership",
  },
];

const boardApproach = [
  {
    step: "01",
    title: "Board Composition Review",
    body: "Assess current Board capabilities against strategy, growth trajectory, and governance requirements to identify meaningful gaps.",
  },
  {
    step: "02",
    title: "Director & Committee Search",
    body: "Identifying Independent Directors, NEDs, and Committee Chairs who strengthen oversight and contribute strategically.",
  },
  {
    step: "03",
    title: "Chairperson Selection",
    body: "Appointing Board Chairs who shape boardroom culture, manage CEO relationships, and ensure effective governance dynamics.",
  },
  {
    step: "04",
    title: "Board Succession Planning",
    body: "Structured succession at Board level to ensure leadership continuity, stability, and long-term governance resilience.",
  },
];

const ceoFramework = [
  {
    step: "01",
    title: "Strategic Alignment",
    body: "Clarify growth objectives, transformation priorities, and measurable performance expectations before any search begins.",
  },
  {
    step: "02",
    title: "Leadership Profile",
    body: "Define the capability, behavioural attributes, and governance orientation required for the organisation's next chapter.",
  },
  {
    step: "03",
    title: "Market Mapping",
    body: "Evaluating external and internal talent pools with rigour and objectivity — ensuring broad consideration without bias.",
  },
  {
    step: "04",
    title: "Rigorous Assessment",
    body: "Candidates benchmarked against strategic acumen, stakeholder management, cultural alignment, and long-term value orientation.",
  },
  {
    step: "05",
    title: "Succession Advisory",
    body: "Supporting Boards to identify immediate successors and longer-term internal development pathways for pipeline strength.",
  },
];

const aiPoints = [
  {
    label: "Technology × Strategy",
    desc: "Bridge AI capability with commercial and governance objectives.",
  },
  {
    label: "Responsible Innovation",
    desc: "Embed ethical AI frameworks within leadership mandates.",
  },
  {
    label: "Commercial Advantage",
    desc: "Translate digital capability into measurable business impact.",
  },
  {
    label: "Horizontal Capability",
    desc: "AI leadership across every industry and function — not a vertical silo.",
  },
];

// ═════════════════════════════════════════════════════════════════════════════
export default function InsightsPage() {
  const [activeCeo, setActiveCeo] = useState(null);
  const [activeDiff, setActiveDiff] = useState(0);

  // Hero parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(heroScroll, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>
      {/* ══ PARALLAX HERO ══ */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-end overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroBgY }}>
          <img
            src={bg}
            className="w-full h-full object-cover scale-110"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06151a]/65 via-[#123845]/75 to-[#123845]" />
        </motion.div>

        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px)",
          }}
        />

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

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full pb-28 px-8 md:px-16 lg:px-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#C9A23F]" />
              <span className="text-[#C9A23F] text-xs tracking-[0.35em] uppercase font-medium">
                Intelligence Series
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
                  Insights
                </h1>
              </div>
              <div className="max-w-lg">
                <div className="w-32 h-[1px] bg-gradient-to-r from-[#C9A23F]/70 to-transparent mb-6" />
                <p className="text-gray-300 text-lg leading-[1.9] font-light">
                  Advisory-driven executive search for boards, CEOs, and
                  transformational leaders who shape enterprise performance and
                  strategic direction.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

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

      {/* ══ DIFFERENTIATORS — interactive photo selector ══ */}
      <section className="bg-[#F4F1EA] relative overflow-hidden">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F]/60 to-transparent" />

        <div className="grid lg:grid-cols-[340px_1fr]">
          {/* Left: tabs */}
          <div className="bg-[#EAE6DC] border-r border-[#e6dcc6] py-12 flex flex-col justify-center">
            <div className="px-8 mb-8">
              <GoldLabel>Our Edge</GoldLabel>
              <h2 className="text-[#0F4C5C] text-2xl font-light">
                What <span className="font-semibold">Differentiates</span> Us
              </h2>
            </div>
            {differentiators.map((d, i) => (
              <button
                key={i}
                onClick={() => setActiveDiff(i)}
                className={`group w-full text-left px-8 py-5 border-l-[3px] transition-all duration-300
                  ${
                    activeDiff === i
                      ? "border-l-[#C9A23F] bg-white"
                      : "border-l-transparent hover:border-l-[#C9A23F]/40 hover:bg-white/60"
                  }`}
              >
                <p
                  className={`text-sm font-semibold transition-colors ${activeDiff === i ? "text-[#C9A23F]" : "text-[#0F4C5C] group-hover:text-[#C9A23F]"}`}
                >
                  {d.title}
                </p>
                <p className="text-[#5b6f77] text-xs font-light mt-0.5 leading-snug">
                  {d.body}
                </p>
              </button>
            ))}
          </div>

          {/* Right: full-bleed photo with overlay */}
          <div className="relative min-h-[600px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDiff}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={differentiators[activeDiff].photo}
                  alt={differentiators[activeDiff].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06151a]/80 via-[#06151a]/30 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`d-${activeDiff}`}
                className="absolute inset-0 flex flex-col justify-end p-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[#C9A23F] text-xs tracking-[0.3em] uppercase mb-3 font-medium">
                  {String(activeDiff + 1).padStart(2, "0")} /{" "}
                  {String(differentiators.length).padStart(2, "0")}
                </p>
                <h3
                  className="text-white text-4xl md:text-5xl font-light mb-3 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {differentiators[activeDiff].title}
                </h3>
                <div className="w-10 h-[2px] bg-[#C9A23F] mb-5" />
                <p className="text-gray-200 text-base leading-[1.9] font-light max-w-md">
                  {differentiators[activeDiff].body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══ MANDATES — editorial: text left, cards right ══ */}
      <section className="bg-[#EAE6DC] py-24 relative overflow-hidden">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F]/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <FadeIn x={-30}>
              <GoldLabel>Typical Mandates</GoldLabel>
              <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-2 mb-4 leading-tight">
                Where We Are <span className="font-semibold">Engaged</span>
              </h2>
              <div className="w-12 h-[2px] bg-[#C9A23F] mb-6" />
              <p className="text-[#5b6f77] text-sm leading-relaxed mb-10">
                Our focus is functional heads and above — leaders whose
                decisions directly influence enterprise performance, culture,
                and strategic direction.
              </p>
              <div className="border-l-4 border-[#C9A23F] pl-6 py-2">
                <p
                  className="text-[#0F4C5C] italic font-light leading-relaxed"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.08rem",
                  }}
                >
                  "We operate at the intersection of strategy and leadership —
                  where the right appointment reshapes what becomes possible."
                </p>
              </div>
            </FadeIn>

            {/* Right */}
            <div className="space-y-5">
              {mandateGroups.map((g, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="group bg-white/70 border border-[#e6dcc6] rounded-xl p-6 flex gap-5 items-start hover:border-[#C9A23F]/50 hover:bg-white hover:shadow-sm transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="absolute left-0 top-0 h-0 w-[3px] bg-[#C9A23F] group-hover:h-full transition-all duration-300" />
                    <div className="w-10 h-10 rounded-lg bg-[#0F4C5C]/5 group-hover:bg-[#0F4C5C]/10 flex items-center justify-center flex-shrink-0 transition">
                      <span className="text-[#C9A23F] text-xs font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <p className="text-[#C9A23F] text-[0.68rem] tracking-[0.25em] uppercase font-medium mb-2">
                        {g.category}
                      </p>
                      <div className="space-y-1.5">
                        {g.items.map((item, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#C9A23F] mt-2 flex-shrink-0" />
                            <span
                              className="text-[#0F4C5C] leading-snug"
                              style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "1rem",
                              }}
                            >
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ OUTCOMES — full-bleed photo overlay ══ */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1800&q=80&fit=crop"
          alt="Outcomes"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06151a]/90 via-[#06151a]/70 to-[#06151a]/40" />
        <div className="absolute top-0 w-full h-[1px] bg-[#C9A23F]/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn x={-30}>
              <GoldLabel>Results We Deliver</GoldLabel>
              <h2 className="text-white text-4xl md:text-6xl font-light mt-3 leading-tight">
                Outcomes That{" "}
                <span
                  className="font-semibold italic text-[#C9A23F] block"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Endure
                </span>
              </h2>
              <div className="mt-6 w-12 h-[2px] bg-[#C9A23F]" />
            </FadeIn>

            <div className="grid grid-cols-2 gap-4">
              {outcomes.map((o, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="group border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl p-5 hover:border-[#C9A23F]/40 hover:bg-white/10 transition-all duration-300"
                  >
                    <h3 className="text-white font-semibold text-sm mb-1.5 group-hover:text-[#C9A23F] transition-colors">
                      {o.label}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">
                      {o.desc}
                    </p>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOARDS — editorial: image right ══ */}
      <section className="bg-[#F4F1EA] relative overflow-hidden">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F]/60 to-transparent" />

        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          {/* Text */}
          <FadeIn
            x={-30}
            className="flex flex-col justify-center px-10 md:px-16 py-20"
          >
            <GoldLabel>Boards & Governance</GoldLabel>
            <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-3 mb-5 leading-tight">
              Strengthening Board{" "}
              <span
                className="font-semibold italic text-[#C9A23F] block"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Effectiveness
              </span>
            </h2>
            <div className="w-12 h-[2px] bg-[#C9A23F] mb-8" />
            <p className="text-[#5b6f77] text-sm leading-relaxed mb-10">
              Boards today operate under regulatory scrutiny and strategic
              complexity. Strong governance is not administrative — it is
              strategic.
            </p>

            <div className="space-y-5">
              {boardApproach.map((item, i) => (
                <FadeUp key={item.step} delay={i * 0.08}>
                  <div className="group flex items-start gap-5 p-5 rounded-xl border border-[#e6dcc6] bg-white/60 hover:border-[#C9A23F]/50 hover:bg-white hover:shadow-sm transition-all duration-300 relative overflow-hidden">
                    <span className="absolute left-0 top-0 h-0 w-[3px] bg-[#C9A23F] group-hover:h-full transition-all duration-300" />
                    <span
                      className="text-[#C9A23F]/30 text-xl font-light flex-shrink-0 w-8"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-[#0F4C5C] font-semibold text-sm mb-1 group-hover:text-[#C9A23F] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#5b6f77] text-xs leading-[1.8] font-light">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn x={40} className="relative min-h-[500px]">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80&fit=crop"
              alt="Board meeting"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06151a]/70 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="border border-[#C9A23F]/30 bg-[#123845]/80 backdrop-blur-sm px-6 py-4 rounded-sm">
                <p className="text-[#C9A23F] text-xs tracking-[0.3em] uppercase mb-1">
                  Board Advisory
                </p>
                <p
                  className="text-white/80 text-sm font-light leading-relaxed"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Strong governance is not administrative — it is strategic.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ CEO SEARCH — interactive vertical timeline ══ */}
      <section className="bg-[#EAE6DC] py-24 relative overflow-hidden">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F]/60 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#0F4C5C 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <FadeIn x={-30}>
              <GoldLabel>Chief Executive Officer</GoldLabel>
              <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-2 mb-5 leading-tight">
                CEO Search That{" "}
                <span
                  className="font-semibold italic text-[#C9A23F]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Shapes
                </span>{" "}
                Organisations
              </h2>
              <div className="w-12 h-[2px] bg-[#C9A23F]" />
            </FadeIn>
            <FadeIn x={30} delay={0.1}>
              <p className="text-[#5b6f77] text-sm leading-relaxed">
                The Chief Executive Officer shapes direction, performance
                expectations, and culture. The role demands clarity of vision,
                strategic judgement, and the ability to build exceptional
                executive teams. Our five-stage framework ensures every CEO
                appointment is grounded in organisational strategy.
              </p>
            </FadeIn>
          </div>

          {/* Interactive accordion timeline */}
          <div className="max-w-3xl mx-auto space-y-3">
            {ceoFramework.map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.07}>
                <motion.div
                  className={`group rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300
                    ${
                      activeCeo === i
                        ? "border-[#0F4C5C] shadow-lg"
                        : "border-[#e6dcc6] hover:border-[#C9A23F]/50"
                    }`}
                  onClick={() => setActiveCeo(activeCeo === i ? null : i)}
                >
                  <div
                    className={`flex items-center gap-5 p-6 transition-colors duration-300 ${activeCeo === i ? "bg-[#0F4C5C]" : "bg-white/70 group-hover:bg-white"}`}
                  >
                    <span
                      className={`text-2xl font-light flex-shrink-0 w-10 transition-colors ${activeCeo === i ? "text-[#C9A23F]/60" : "text-[#C9A23F]/30"}`}
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.step}
                    </span>
                    <div
                      className={`w-[1px] h-8 flex-shrink-0 transition-colors ${activeCeo === i ? "bg-white/20" : "bg-[#e6dcc6]"}`}
                    />
                    <h3
                      className={`font-semibold text-sm flex-1 transition-colors ${activeCeo === i ? "text-white" : "text-[#0F4C5C] group-hover:text-[#C9A23F]"}`}
                    >
                      {item.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeCeo === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex-shrink-0 ${activeCeo === i ? "text-[#C9A23F]" : "text-[#0F4C5C]/30"}`}
                    >
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                        <line
                          x1="8"
                          y1="2"
                          x2="8"
                          y2="14"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <line
                          x1="2"
                          y1="8"
                          x2="14"
                          y2="8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {activeCeo === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="bg-[#0F4C5C] px-6 pb-6 pt-0">
                          <div className="border-t border-white/10 pt-5 pl-14">
                            <p className="text-gray-300 text-sm leading-[1.9] font-light">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          {/* Quote strip */}
          <FadeUp delay={0.4}>
            <div className="mt-16 flex flex-col md:flex-row items-center gap-6 border-t border-[#C9A23F]/25 pt-10">
              <div
                className="text-[#C9A23F] text-6xl font-light leading-none opacity-30 flex-shrink-0"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "
              </div>
              <p
                className="text-[#0F4C5C] italic text-lg font-light leading-relaxed flex-1"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                A strong CEO and Board partnership remains one of the most
                powerful drivers of sustained enterprise performance.
              </p>
              <p className="text-[#C9A23F] text-[0.68rem] tracking-[0.2em] uppercase font-medium flex-shrink-0">
                PivotEdge
                <br />
                Partners
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ AI — editorial: text left, image right ══ */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          {/* Text */}
          <div className="bg-[#F4F1EA] flex flex-col justify-center px-10 md:px-16 py-20">
            <FadeIn x={-30}>
              <GoldLabel>Artificial Intelligence</GoldLabel>
              <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-3 mb-5 leading-tight">
                Leadership for{" "}
                <span
                  className="font-semibold italic text-[#C9A23F] block"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Intelligent Enterprise
                </span>
                Transformation
              </h2>
              <div className="w-12 h-[2px] bg-[#C9A23F] mb-7" />
              <p className="text-[#5b6f77] text-sm leading-relaxed mb-10">
                AI is reshaping industries, operating models, and competitive
                dynamics. AI leadership demands more than technical expertise —
                it requires commercial judgement, governance awareness, and the
                ability to translate digital capability into measurable business
                impact.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {aiPoints.map((p, i) => (
                  <FadeUp key={i} delay={i * 0.08}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="group border border-[#e6dcc6] bg-white/60 rounded-xl p-5 hover:border-[#C9A23F]/50 hover:bg-white hover:shadow-sm transition-all duration-300"
                    >
                      <h4 className="text-[#0F4C5C] font-semibold text-sm mb-1.5 group-hover:text-[#C9A23F] transition-colors">
                        {p.label}
                      </h4>
                      <p className="text-[#5b6f77] text-xs leading-relaxed font-light">
                        {p.desc}
                      </p>
                    </motion.div>
                  </FadeUp>
                ))}
              </div>

              <div className="mt-8 inline-flex items-center gap-3 border border-[#C9A23F]/30 rounded-full px-5 py-2.5 bg-white/60">
                <div className="w-2 h-2 rounded-full bg-[#C9A23F]" />
                <span className="text-[#0F4C5C] text-xs tracking-widest uppercase font-medium">
                  Horizontal Capability — Every Industry
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <FadeIn x={40} className="relative min-h-[500px]">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80&fit=crop"
              alt="AI and technology leadership"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06151a]/80 via-[#06151a]/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="border border-[#C9A23F]/30 bg-[#06151a]/80 backdrop-blur-sm px-6 py-4 rounded-sm">
                <p className="text-[#C9A23F] text-xs tracking-[0.3em] uppercase mb-1">
                  AI Leadership
                </p>
                <p
                  className="text-white/80 text-sm font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  The question is no longer whether to adopt AI — but how to
                  embed it responsibly, strategically, and at scale.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ CTA — full-bleed photo closing ══ */}
      <section className="relative min-h-[55vh] overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1800&q=80&fit=crop"
          alt="Leadership"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06151a]/65 via-[#06151a]/72 to-[#06151a]/90" />
        <div className="absolute top-0 w-full h-[1px] bg-[#C9A23F]/30" />

        <div className="relative z-10 flex items-center justify-center min-h-[55vh] px-8 py-24">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto">
              <div className="border border-white/10 rounded-2xl px-10 py-14 bg-white/5 backdrop-blur-sm relative overflow-hidden">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent" />
                <p className="text-[#C9A23F] text-xs tracking-[0.35em] uppercase mb-6 font-medium">
                  Begin a Conversation
                </p>
                <h2 className="text-white text-3xl md:text-4xl font-light mb-4">
                  Ready to discuss a{" "}
                  <span
                    className="font-semibold italic text-[#C9A23F]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    mandate
                  </span>
                  ?
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                  Every engagement begins with a confidential conversation.
                  Speak with one of our advisors to explore how we can serve
                  your leadership needs.
                </p>
                <button className="px-10 py-4 border border-[#C9A23F] text-[#C9A23F] text-sm tracking-widest uppercase hover:bg-[#C9A23F] hover:text-[#0F4C5C] transition-all duration-300 font-medium">
                  Begin a Conversation
                </button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
