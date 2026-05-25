import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import bg from "../../assets/images/bg.webp";

// ─── Tokens ───────────────────────────────────────────────────────
const GOLD = "#C9A23F";
const TEAL = "#0F4C5C";
const DARK = "#123845";
const DEEP = "#06151a";
const CREAM = "#F4F1EA";
const CREAM_ALT = "#EAE6DC";
const MUTED = "#5b6f77";

// ─── Curated Unsplash imagery ─────────────────────────────────────
const IMGS = {
  hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
  advisory:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1400&auto=format&fit=crop",
  governance:
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1400&auto=format&fit=crop",
  networks:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop",
  mandateHero:
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2070&auto=format&fit=crop",
  boardroom:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop",
  ceo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2070&auto=format&fit=crop",
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
  outcomes:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
};

// ─── Helpers ──────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
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
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
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
const Rule = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A23F]/40 to-transparent" />
);

// ─── Icon renderer ────────────────────────────────────────────────
const ICONS = {
  advisory:
    "M24 8 C14 8 8 16 8 24 M24 8 C34 8 40 16 40 24 M8 24 C8 32 14 40 24 40 M40 24 C40 32 34 40 24 40 M24 8 v32 M8 24 h32",
  governance: "M8 32h32M8 8h32M16 8v24M32 8v24M12 20h24",
  network:
    "M24 24m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0 M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0 M36 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0 M12 36m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0 M36 36m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0 M15 15 l7 7 M33 15 l-7 7 M15 33 l7-7 M33 33 l-7-7",
  research: "M10 38 L20 24 L28 30 L36 16 M10 38 h28",
  partnership:
    "M16 24 a8 8 0 1 0 16 0 a8 8 0 1 0-16 0 M24 16 v-8 M24 40 v-8 M16 24 h-8 M32 24 h8",
  independence:
    "M24 10 L26 18 L34 18 L28 23 L30 31 L24 26 L18 31 L20 23 L14 18 L22 18 Z",
  star: "M24 8 L27 18 L38 18 L29 25 L32 36 L24 29 L16 36 L19 25 L10 18 L21 18 Z",
  ceo: "M24 8 C24 8 32 14 32 22 C32 30 24 34 24 34 C24 34 16 30 16 22 C16 14 24 8 24 8 Z M24 22 v10 M20 38 C20 38 16 40 16 44 h16 C32 40 28 38 28 38",
  chart: "M8 38 L16 24 L24 30 L32 14 L40 20 M36 14 L40 14 L40 20",
  board: "M10 14 h28 v6 h-28 Z M14 26 h8 v12 h-8 Z M26 26 h8 v8 h-8 Z",
  shield:
    "M24 8 L38 14 L38 26 C38 34 32 40 24 42 C16 40 10 34 10 26 L10 14 Z M18 24 l4 4 8-8",
  clock: "M24 24 m-14 0 a14 14 0 1 0 28 0 a14 14 0 1 0-28 0 M24 12 v12 l7 5",
  rocket:
    "M24 34 C20 30 14 24 14 18 C14 12 18 8 24 8 C30 8 34 12 34 18 C34 24 28 30 24 34 Z M20 38 C20 38 16 42 14 44 C16 44 18 42 20 40 M28 38 C28 38 32 42 34 44 C32 44 30 42 28 40",
  ai: "M16 24 a8 8 0 0 1 16 0 M12 32 a16 16 0 0 1 24-16 M8 40 a22 22 0 0 1 32-24 M24 24 l6-10 M24 24 l-8 6 M24 24 l10 4",
};
const Icon = ({ name, size = 24, color = TEAL }) => (
  <svg viewBox="0 0 48 48" fill="none" width={size} height={size}>
    <path
      d={ICONS[name]}
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────
const differentiators = [
  {
    key: "advisory",
    icon: "advisory",
    title: "Advisory Orientation",
    body: "Trusted advisors, not transactional recruiters. Our counsel extends beyond placement to leadership architecture.",
    img: IMGS.advisory,
  },
  {
    key: "governance",
    icon: "governance",
    title: "Governance-Aware Frameworks",
    body: "Leaders evaluated within the broader enterprise ecosystem — grounded in governance principles.",
    img: IMGS.governance,
  },
  {
    key: "network",
    icon: "network",
    title: "Senior Leadership Networks",
    body: "Deep, trust-based access to executives at the apex of their industries — relationships cultivated over decades.",
    img: IMGS.networks,
  },
  {
    key: "research",
    icon: "research",
    title: "Research-Driven Methodology",
    body: "Structured, evidence-led. Every search anchored in market intelligence and precise capability benchmarking.",
    img: IMGS.advisory,
  },
  {
    key: "partnership",
    icon: "partnership",
    title: "Long-Term Partnership",
    body: "We measure success not by placement speed, but by sustained leadership impact — years, not months.",
    img: IMGS.governance,
  },
  {
    key: "independence",
    icon: "independence",
    title: "Confidential Independence",
    body: "Every search executed with discretion. Our independence ensures objectivity for client and candidate alike.",
    img: IMGS.networks,
  },
];

const mandateGroups = [
  {
    category: "C-Suite",
    icon: "ceo",
    items: [
      "Chief Executive Officer",
      "Chief Financial Officer",
      "Functional Heads — Finance, HR, Sales, Operations, Technology, Sustainability",
    ],
  },
  {
    category: "Board Level",
    icon: "board",
    items: [
      "Independent & Non-Executive Directors",
      "Board Chairs & Committee Leadership",
      "Audit, Risk, Compensation & Nomination Committees",
    ],
  },
  {
    category: "Transformation",
    icon: "rocket",
    items: [
      "Business Unit Heads",
      "Transformation & Digital Leaders",
      "AI & Advanced Analytics Leaders",
    ],
  },
];

const outcomes = [
  {
    icon: "chart",
    label: "Strategic Alignment",
    desc: "Leadership precisely matched to growth objectives",
  },
  {
    icon: "shield",
    label: "Reduced Governance Risk",
    desc: "Succession and oversight vulnerabilities addressed",
  },
  {
    icon: "clock",
    label: "Faster Integration",
    desc: "Executives embedded and effective from day one",
  },
  {
    icon: "star",
    label: "Sustained Performance",
    desc: "Impact measured over years, not quarters",
  },
  {
    icon: "governance",
    label: "Governance Credibility",
    desc: "Board and stakeholder confidence strengthened",
  },
  {
    icon: "partnership",
    label: "CEO–Board Partnership",
    desc: "Healthier dynamics at the apex of leadership",
  },
];

const boardApproach = [
  {
    step: "01",
    icon: "governance",
    title: "Board Composition Review",
    body: "Assess current Board capabilities against strategy, growth trajectory, and governance requirements to identify meaningful gaps.",
  },
  {
    step: "02",
    icon: "network",
    title: "Director & Committee Search",
    body: "Identifying Independent Directors, NEDs, and Committee Chairs who strengthen oversight and contribute strategically.",
  },
  {
    step: "03",
    icon: "ceo",
    title: "Chairperson Selection",
    body: "Appointing Board Chairs who shape boardroom culture, manage CEO relationships, and ensure effective governance dynamics.",
  },
  {
    step: "04",
    icon: "clock",
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
    icon: "ai",
    label: "Technology × Strategy",
    desc: "Bridge AI capability with commercial and governance objectives.",
  },
  {
    icon: "shield",
    label: "Responsible Innovation",
    desc: "Embed ethical AI frameworks within leadership mandates.",
  },
  {
    icon: "chart",
    label: "Commercial Advantage",
    desc: "Translate digital capability into measurable business impact.",
  },
  {
    icon: "rocket",
    label: "Horizontal Capability",
    desc: "AI leadership across every industry and function — not a vertical silo.",
  },
];

// ═══════════════════════════════════════════════════════════════════
// HERO — editorial magazine, large serif, light bleed from bottom
// ═══════════════════════════════════════════════════════════════════
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ background: DEEP }}
    >
      {/* Parallax photo — left 60% */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img
          src={IMGS.hero}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(6,21,26,0.15) 0%, rgba(6,21,26,0.5) 50%, rgba(6,21,26,0.97) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(6,21,26,1) 0%, transparent 50%)",
          }}
        />
      </motion.div>

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px)",
        }}
      />

      {/* Content — bottom-anchored editorial layout */}
      <motion.div
        style={{ opacity: fadeOut }}
        className="relative z-10 w-full pb-20 px-6 md:px-14"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_480px] gap-12 items-end">
            {/* Left — large typographic hero */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-10 h-px" style={{ background: GOLD }} />
                <span
                  className="text-[0.7rem] tracking-[0.38em] uppercase font-medium"
                  style={{ color: GOLD }}
                >
                  Intelligence Series
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.3 }}
                className="text-white font-light leading-[1.0] mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(4rem, 9vw, 8.5rem)",
                }}
              >
                Our
                <br />
                <em
                  className="not-italic font-semibold"
                  style={{ color: GOLD }}
                >
                  Insights
                </em>
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  transformOrigin: "left",
                }}
                className="w-24 h-px mb-8"
                style={{
                  background: `linear-gradient(to right, ${GOLD}, transparent)`,
                }}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7 }}
                className="text-white/55 text-lg leading-[1.85] font-light max-w-lg"
              >
                Advisory-driven perspectives on executive search, governance,
                and the leadership decisions that shape enterprise performance.
              </motion.p>
            </div>

            {/* Right — editorial index card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              className="hidden lg:block"
            >
              <div
                className="p-8"
                style={{
                  border: `1px solid ${GOLD}25`,
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <p
                  className="text-[0.62rem] tracking-[0.3em] uppercase mb-5 font-medium"
                  style={{ color: GOLD }}
                >
                  In This Section
                </p>
                {[
                  { label: "Our Edge", anchor: "#differentiators" },
                  { label: "Where We're Engaged", anchor: "#mandates" },
                  { label: "Boards & Governance", anchor: "#boards" },
                  { label: "CEO Search", anchor: "#ceo" },
                  { label: "AI Leadership", anchor: "#ai" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.anchor}
                    className="group flex items-center justify-between py-3 transition-colors duration-200"
                    style={{
                      borderBottom: `1px solid rgba(255,255,255,0.06)`,
                      color: "rgba(255,255,255,0.5)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    <span className="text-xs tracking-wide">{item.label}</span>
                    <span className="text-xs opacity-40">→</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
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
// DIFFERENTIATORS — Horizontal image strip + editorial text grid
// Design: magazine feature layout — NOT cards, NOT accordion
// ═══════════════════════════════════════════════════════════════════
const DifferentiatorsSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const imgOrder = [IMGS.advisory, IMGS.governance, IMGS.networks];

  return (
    <section id="differentiators" style={{ background: CREAM }}>
      <Rule />
      {/* Full-bleed image strip — 3 triptych photos */}
      <div className="grid grid-cols-3 h-[38vh] min-h-[260px] overflow-hidden">
        {imgOrder.map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(244,241,234,0) 40%, rgba(244,241,234,1) 100%)",
              }}
            />
            {/* Vertical rule between panels */}
            {i < 2 && (
              <div
                className="absolute right-0 top-0 w-px h-full"
                style={{ background: `${GOLD}30` }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Section header — overlaps image strip */}
      <div className="max-w-7xl mx-auto px-6 -mt-2 relative z-10">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <GoldLabel>Our Edge</GoldLabel>
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
              Six principles that separate advisory excellence from conventional
              executive search.
            </p>
          </div>
        </FadeUp>

        {/* 3×2 editorial grid — text-heavy with icon accent, no cards */}
        <div
          className="grid md:grid-cols-3 gap-0 mb-20"
          style={{ border: `1px solid rgba(201,162,63,0.15)` }}
        >
          {differentiators.map((d, i) => (
            <FadeUp key={d.key} delay={i * 0.07}>
              <div
                className="group relative p-8 cursor-default transition-all duration-300"
                style={{
                  borderRight:
                    (i + 1) % 3 !== 0
                      ? `1px solid rgba(201,162,63,0.15)`
                      : "none",
                  borderBottom:
                    i < 3 ? `1px solid rgba(201,162,63,0.15)` : "none",
                  background: hoveredIdx === i ? `${TEAL}06` : "transparent",
                }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Top sweep on hover */}
                <div
                  className="absolute top-0 left-0 h-[2px] transition-all duration-500"
                  style={{
                    background: GOLD,
                    width: hoveredIdx === i ? "100%" : "0%",
                  }}
                />

                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: hoveredIdx === i ? `${GOLD}15` : `${TEAL}08`,
                      border: `1px solid ${hoveredIdx === i ? GOLD + "60" : TEAL + "20"}`,
                    }}
                  >
                    <Icon
                      name={d.icon}
                      size={18}
                      color={hoveredIdx === i ? GOLD : TEAL}
                    />
                  </div>
                  <span
                    className="text-[0.58rem] tracking-[0.25em] uppercase font-medium pt-2.5"
                    style={{ color: `${GOLD}80` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className="font-semibold text-sm mb-3 transition-colors duration-300"
                  style={{ color: hoveredIdx === i ? GOLD : TEAL }}
                >
                  {d.title}
                </h3>
                <p
                  className="text-xs leading-[1.85] font-light"
                  style={{ color: MUTED }}
                >
                  {d.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// MANDATES — Dark full-bleed backdrop + bold typographic layout
// Design: oversized category labels on dark, 3-col reveal
// ═══════════════════════════════════════════════════════════════════
const MandatesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const inView = useInView(ref, { once: true });

  return (
    <section id="mandates" ref={ref} className="relative overflow-hidden">
      <Rule />
      {/* Parallax backdrop */}
      <div className="absolute inset-0">
        <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
          <img
            src={IMGS.mandateHero}
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${DEEP} 0%, ${DARK} 100%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px),repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <FadeIn x={-30}>
            <GoldLabel>Typical Mandates</GoldLabel>
            <h2
              className="text-white font-light leading-tight mt-3"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              }}
            >
              Where We Are{" "}
              <em className="font-semibold italic" style={{ color: GOLD }}>
                Engaged
              </em>
            </h2>
            <div className="mt-5 w-12 h-px" style={{ background: GOLD }} />
          </FadeIn>
          <FadeIn x={30} delay={0.1}>
            <p
              className="text-sm leading-[1.9] font-light"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Our focus is functional heads and above — leaders whose decisions
              directly influence enterprise performance, culture, and strategic
              direction.
            </p>
            <div
              className="mt-6 pl-5 py-3"
              style={{ borderLeft: `3px solid ${GOLD}` }}
            >
              <p
                className="italic font-light leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "1.05rem",
                }}
              >
                "We operate at the intersection of strategy and leadership —
                where the right appointment reshapes what becomes possible."
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 3 mandate columns — each with oversized label + items */}
        <div
          className="grid md:grid-cols-3 gap-0 overflow-hidden"
          style={{ border: `1px solid ${GOLD}20` }}
        >
          {mandateGroups.map((g, i) => (
            <motion.div
              key={g.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative p-10 transition-all duration-300 hover:bg-white/4"
              style={{ borderRight: i < 2 ? `1px solid ${GOLD}20` : "none" }}
            >
              {/* Sweep on hover */}
              <div
                className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-500"
                style={{ background: GOLD }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: `${GOLD}12`,
                  border: `1px solid ${GOLD}35`,
                }}
              >
                <Icon name={g.icon} size={22} color={GOLD} />
              </div>

              {/* Category label */}
              <p
                className="text-[0.62rem] tracking-[0.3em] uppercase font-medium mb-2"
                style={{ color: GOLD }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3
                className="text-white font-medium text-xl mb-6 leading-snug group-hover:text-amber-300 transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {g.category}
              </h3>
              <div
                className="w-8 h-px mb-6"
                style={{ background: `${GOLD}50` }}
              />

              <div className="space-y-4">
                {g.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div
                      className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                      style={{ background: GOLD }}
                    />
                    <span
                      className="text-sm font-light leading-snug"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// OUTCOMES — Asymmetric split: photo left, numbered list right
// Design: two-tone, cream + teal halves meeting at centre
// ═══════════════════════════════════════════════════════════════════
const OutcomesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <Rule />
      <div className="grid lg:grid-cols-2 min-h-[700px]">
        {/* Left — photo with quote overlay */}
        <div className="relative overflow-hidden min-h-[400px]">
          <motion.div
            style={{ y: imgY }}
            className="absolute inset-0 scale-110"
          >
            <img
              src={IMGS.outcomes}
              alt=""
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(6,21,26,0.6) 0%, rgba(6,21,26,0.2) 60%, rgba(18,56,69,0.9) 100%)",
              }}
            />
          </motion.div>

          <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-14">
            <FadeIn x={-30}>
              <GoldLabel>Results We Deliver</GoldLabel>
              <h2
                className="text-white font-light leading-tight mt-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                }}
              >
                Outcomes That
                <br />
                <em className="font-semibold italic" style={{ color: GOLD }}>
                  Endure
                </em>
              </h2>
              <div className="mt-5 w-10 h-px" style={{ background: GOLD }} />
              <p
                className="mt-5 text-sm leading-[1.9] font-light max-w-sm"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Every engagement is measured not by the hire, but by the
                long-term impact on organisational performance and governance.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Right — outcomes list on teal */}
        <div
          className="flex flex-col justify-center px-10 md:px-14 py-16 relative"
          style={{ background: DARK }}
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#C9A23F 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative z-10 space-y-0">
            {outcomes.map((o, i) => (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.09 }}
                className="group flex items-center gap-5 py-5 cursor-default transition-all duration-300 hover:pl-2"
                style={{
                  borderBottom:
                    i < outcomes.length - 1
                      ? `1px solid rgba(255,255,255,0.06)`
                      : "none",
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    border: `1px solid ${GOLD}35`,
                    background: `${GOLD}10`,
                  }}
                >
                  <Icon name={o.icon} size={17} color={GOLD} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm mb-0.5 group-hover:text-amber-300 transition-colors">
                    {o.label}
                  </p>
                  <p
                    className="text-xs font-light"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {o.desc}
                  </p>
                </div>
                {/* Number */}
                <span
                  className="text-2xl font-light flex-shrink-0"
                  style={{
                    color: `${GOLD}20`,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// BOARDS — Feature editorial: large photo, 4-step grid overlapping
// Design: photo bleeds to edge, cards float over bottom half
// ═══════════════════════════════════════════════════════════════════
const BoardsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="boards"
      ref={ref}
      style={{ background: CREAM_ALT }}
      className="relative overflow-hidden"
    >
      <Rule />

      {/* Editorial image — full width, cropped tall */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <img
            src={IMGS.boardroom}
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(18,56,69,0.3) 0%, rgba(18,56,69,0.75) 60%, rgba(234,230,220,1) 100%)",
            }}
          />
        </motion.div>

        {/* Header over image */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-14">
          <div className="max-w-7xl mx-auto w-full">
            <FadeIn x={-30}>
              <GoldLabel>Boards & Governance</GoldLabel>
              <h2
                className="text-white font-light leading-tight mt-3"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                }}
              >
                Strengthening Board
                <br />
                <em className="font-semibold italic" style={{ color: GOLD }}>
                  Effectiveness
                </em>
              </h2>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* 4 approach cards — full width grid, overlapping image fade */}
      <div className="max-w-7xl mx-auto px-6 -mt-4 pb-20 relative z-10">
        <FadeUp delay={0.1}>
          <p
            className="text-sm leading-relaxed max-w-xl mb-10 font-light"
            style={{ color: MUTED }}
          >
            Boards today operate under regulatory scrutiny and strategic
            complexity. Strong governance is not administrative — it is
            strategic.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {boardApproach.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className="group relative bg-white border p-7 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ borderColor: "#e6dcc6" }}
            >
              {/* Gold sweep */}
              <div
                className="absolute top-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-500"
                style={{ background: GOLD }}
              />
              {/* Step */}
              <span
                className="block text-3xl font-light leading-none mb-5"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: `${GOLD}30`,
                }}
              >
                {item.step}
              </span>
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                style={{
                  background: `${TEAL}08`,
                  border: `1px solid ${TEAL}15`,
                }}
              >
                <Icon name={item.icon} size={18} color={TEAL} />
              </div>
              <h3
                className="font-semibold text-sm mb-3 leading-snug transition-colors group-hover:text-amber-600"
                style={{ color: TEAL }}
              >
                {item.title}
              </h3>
              <p
                className="text-xs leading-[1.8] font-light"
                style={{ color: MUTED }}
              >
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// CEO — Dramatic: full-bleed dark image, 5 steps as pinned callouts
// Design: horizontal numbered timeline on photo, expand on click
// ═══════════════════════════════════════════════════════════════════
const CEOSection = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="ceo"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: TEAL }}
    >
      <Rule />

      {/* Photo backdrop */}
      <div className="absolute inset-0">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <img
            src={IMGS.ceo}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${TEAL}E8 0%, ${DARK}F5 100%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#C9A23F 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <FadeIn x={-30}>
            <GoldLabel>Chief Executive Officer</GoldLabel>
            <h2
              className="text-white font-light leading-tight mt-3"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              }}
            >
              CEO Search That{" "}
              <em className="font-semibold italic" style={{ color: GOLD }}>
                Shapes
              </em>
              <br />
              Organisations
            </h2>
            <div className="mt-5 w-12 h-px" style={{ background: GOLD }} />
          </FadeIn>
          <FadeIn x={30} delay={0.1}>
            <p
              className="text-sm leading-[1.9] font-light"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              The Chief Executive Officer shapes direction, performance
              expectations, and culture. Our five-stage framework ensures every
              appointment is grounded in organisational strategy.
            </p>
          </FadeIn>
        </div>

        {/* Interactive step selector — horizontal tabs */}
        <div
          className="flex gap-0 mb-0 overflow-x-auto"
          style={{ borderBottom: `1px solid rgba(255,255,255,0.08)` }}
        >
          {ceoFramework.map((step, i) => (
            <button
              key={step.step}
              onClick={() => setActive(i)}
              className="group flex items-center gap-3 px-6 py-4 transition-all duration-300 flex-shrink-0 relative"
              style={{
                borderBottom:
                  active === i ? `2px solid ${GOLD}` : "2px solid transparent",
              }}
            >
              <span
                className="text-[0.6rem] font-semibold"
                style={{ color: active === i ? GOLD : "rgba(255,255,255,0.3)" }}
              >
                {step.step}
              </span>
              <span
                className="text-xs tracking-wide hidden md:block transition-colors"
                style={{
                  color: active === i ? "white" : "rgba(255,255,255,0.4)",
                }}
              >
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active step content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center py-14"
          >
            {/* Number + title */}
            <div>
              <span
                className="block font-light leading-none mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "6rem",
                  color: `${GOLD}20`,
                }}
              >
                {ceoFramework[active].step}
              </span>
              <h3
                className="text-white text-2xl md:text-3xl font-light leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {ceoFramework[active].title}
              </h3>
              <div className="mt-4 w-8 h-px" style={{ background: GOLD }} />
            </div>
            {/* Body + nav */}
            <div>
              <p
                className="text-base leading-[1.9] font-light mb-10"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.15rem",
                }}
              >
                {ceoFramework[active].body}
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setActive((a) => Math.max(0, a - 1))}
                  disabled={active === 0}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-20"
                  style={{ border: `1px solid ${GOLD}50` }}
                  onMouseEnter={(e) => {
                    if (!e.currentTarget.disabled)
                      e.currentTarget.style.background = `${GOLD}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <svg viewBox="0 0 16 16" width="12" fill="none">
                    <polyline
                      points="10,3 5,8 10,13"
                      stroke={GOLD}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className="flex gap-2">
                  {ceoFramework.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className="h-px transition-all duration-300"
                      style={{
                        width: active === i ? "24px" : "10px",
                        background: active === i ? GOLD : `${GOLD}30`,
                      }}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    setActive((a) => Math.min(ceoFramework.length - 1, a + 1))
                  }
                  disabled={active === ceoFramework.length - 1}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-20"
                  style={{ border: `1px solid ${GOLD}50` }}
                  onMouseEnter={(e) => {
                    if (!e.currentTarget.disabled)
                      e.currentTarget.style.background = `${GOLD}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <svg viewBox="0 0 16 16" width="12" fill="none">
                    <polyline
                      points="6,3 11,8 6,13"
                      stroke={GOLD}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CEO quote footer */}
        <div
          className="pt-10"
          style={{ borderTop: `1px solid rgba(255,255,255,0.08)` }}
        >
          <FadeUp delay={0.4}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <span
                className="text-7xl font-light opacity-20 flex-shrink-0"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: GOLD,
                }}
              >
                "
              </span>
              <p
                className="italic text-lg font-light leading-relaxed flex-1"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                A strong CEO and Board partnership remains one of the most
                powerful drivers of sustained enterprise performance. Our
                process evaluates candidates within that broader governance
                ecosystem — not in isolation.
              </p>
              <p
                className="text-[0.62rem] tracking-[0.2em] uppercase font-medium flex-shrink-0 text-right"
                style={{ color: GOLD }}
              >
                PivotEdge
                <br />
                Partners
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// AI — Futuristic: dark with animated concentric rings + bold type
// Design: unique atmosphere — NOT matching other sections
// ═══════════════════════════════════════════════════════════════════
const AISection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="ai"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: DEEP }}
    >
      <Rule />

      {/* Photo backdrop — faint */}
      <div className="absolute inset-0">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <img
            src={IMGS.ai}
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom right, ${DEEP} 30%, rgba(15,76,92,0.6) 100%)`,
          }}
        />
      </div>

      {/* Animated concentric rings — centred decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {[180, 340, 520, 720, 940].map((size, i) => (
          <motion.div
            key={i}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 30 + i * 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              border: `1px solid ${GOLD}`,
              opacity: 0.04 - i * 0.006,
              borderStyle: i % 2 === 0 ? "solid" : "dashed",
            }}
          />
        ))}
        {/* Static solid ring */}
        <div
          className="absolute rounded-full"
          style={{ width: 200, height: 200, border: `1px solid ${GOLD}25` }}
        />
        <div
          className="absolute w-3 h-3 rounded-full"
          style={{ background: GOLD, opacity: 0.4 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — large editorial text */}
          <FadeIn x={-30}>
            <GoldLabel>Artificial Intelligence</GoldLabel>
            <h2
              className="text-white font-light leading-tight mt-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              }}
            >
              Leadership for
              <br />
              <em className="font-semibold italic" style={{ color: GOLD }}>
                Intelligent Enterprise
              </em>
              <br />
              Transformation
            </h2>
            <div className="mt-6 w-12 h-px mb-8" style={{ background: GOLD }} />
            <p
              className="text-sm leading-[1.9] font-light mb-4"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              AI is reshaping industries, operating models, and competitive
              dynamics. The question is no longer <em>whether</em> to adopt AI —
              but how to embed it responsibly, strategically, and at scale.
            </p>
            <p
              className="text-sm leading-[1.9] font-light"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              AI leadership demands more than technical expertise. It requires
              commercial judgement, governance awareness, and the ability to
              translate digital capability into measurable business impact.
            </p>

            {/* Badge */}
            <div
              className="mt-8 inline-flex items-center gap-3 px-5 py-3"
              style={{ border: `1px solid ${GOLD}40`, background: `${GOLD}08` }}
            >
              <Icon name="ai" size={16} color={GOLD} />
              <span
                className="text-xs tracking-widest uppercase font-medium"
                style={{ color: GOLD }}
              >
                Horizontal Capability — Every Industry
              </span>
            </div>
          </FadeIn>

          {/* Right — 4 AI dimension cards */}
          <FadeIn x={30} delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {aiPoints.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="group p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    border: `1px solid rgba(255,255,255,0.08)`,
                    background: "rgba(255,255,255,0.03)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${GOLD}50`;
                    e.currentTarget.style.background = `${GOLD}08`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: `${GOLD}15`,
                      border: `1px solid ${GOLD}40`,
                    }}
                  >
                    <Icon name={p.icon} size={18} color={GOLD} />
                  </div>
                  <h4 className="text-white font-medium text-sm mb-2 group-hover:text-amber-300 transition-colors">
                    {p.label}
                  </h4>
                  <p
                    className="text-xs leading-relaxed font-light"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// CTA — Cream close, clean and minimal (contrast to dark AI above)
// ═══════════════════════════════════════════════════════════════════
const CTAStrip = () => {
  const inView = useInView(useRef(null), { once: true });
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{ background: CREAM }}
      className="relative overflow-hidden"
    >
      <Rule />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <FadeIn x={-30}>
            <GoldLabel>Begin a Conversation</GoldLabel>
            <h2
              className="font-light leading-tight mt-3"
              style={{ color: TEAL, fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Ready to discuss a{" "}
              <em
                className="font-semibold italic"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: GOLD,
                }}
              >
                mandate?
              </em>
            </h2>
            <div className="mt-4 w-14 h-px" style={{ background: GOLD }} />
            <p
              className="mt-5 text-sm leading-[1.9] font-light max-w-lg"
              style={{ color: MUTED }}
            >
              Every engagement begins with a confidential conversation. Speak
              with one of our advisors to explore how we can serve your
              leadership needs.
            </p>
          </FadeIn>

          <FadeIn x={30} delay={0.15}>
            <div className="flex flex-col gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-4 px-10 py-5 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 whitespace-nowrap"
                style={{ background: TEAL, color: "#fff" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = GOLD;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = TEAL;
                }}
              >
                Begin a Conversation
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <p
                className="text-[0.62rem] tracking-[0.2em] uppercase text-center font-light"
                style={{ color: `${MUTED}80` }}
              >
                Strictly confidential
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Bottom brand line */}
        <div
          className="mt-20 pt-8 flex items-center justify-between"
          style={{ borderTop: `1px solid ${GOLD}20` }}
        >
          <p
            className="text-[0.62rem] tracking-[0.25em] uppercase font-light"
            style={{ color: MUTED }}
          >
            PivotEdge Partners · Intelligence Series
          </p>
          <div className="flex gap-2">
            {[IMGS.advisory, IMGS.boardroom, IMGS.ceo].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="w-10 h-10 overflow-hidden"
                style={{ border: `1px solid ${GOLD}30` }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════
export default function InsightsPage() {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>
      <Hero />
      <DifferentiatorsSection />
      <MandatesSection />
      <OutcomesSection />
      <BoardsSection />
      <CEOSection />
      <AISection />
      <CTAStrip />
    </div>
  );
}
