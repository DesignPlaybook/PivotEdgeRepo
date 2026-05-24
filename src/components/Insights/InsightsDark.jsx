import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import bg from "../../assets/images/bg.webp";

// ─── Tokens ───────────────────────────────────────────────────────────────────
const C = {
  bg: "#F4F1EA",
  bgAlt: "#EAE6DC",
  dark: "#06151a",
  darkMid: "#123845",
  teal: "#0F4C5C",
  gold: "#C9A23F",
  muted: "#5b6f77",
  border: "#e6dcc6",
};

// ─── Fade-up scroll helper ─────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0, style = {} }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// ─── Shared label ─────────────────────────────────────────────────────────────
const GoldLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-3">
    <div className="w-6 h-[1px] bg-[#C9A23F]" />
    <span className="text-[#C9A23F] text-[0.68rem] tracking-[0.3em] uppercase font-medium">
      {children}
    </span>
    <div className="w-6 h-[1px] bg-[#C9A23F]" />
  </div>
);

// ─── Geometric decoration (reuse from Services) ───────────────────────────────
const GeometricAccent = ({ opacity = 0.2 }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    style={{ opacity }}
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
    <circle cx="190" cy="100" r="2.5" fill="#C9A23F" opacity="0.6" />
  </svg>
);

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const Icon = ({ path, size = 28, color = C.teal, strokeWidth = 1.4 }) => (
  <svg viewBox="0 0 48 48" fill="none" width={size} height={size}>
    <path
      d={path}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
  ai: "M16 16 a8 8 0 0 1 16 0 M12 28 a16 16 0 0 1 24-16 M8 38 a22 22 0 0 1 32-24 M24 24 l6-10 M24 24 l-8 6 M24 24 l10 4",
};

// ─── ══════════ HERO (matches Services) ══════════ ────────────────────────────
const PageHero = () => (
  <section className="relative min-h-[100vh] flex items-center justify-center text-center overflow-hidden">
    <img
      src={bg}
      className="absolute w-full h-full object-cover scale-105"
      alt=""
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%),linear-gradient(to_bottom,#06151a,#123845)] opacity-97" />

    {/* Grid texture */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px)",
      }}
    />

    {/* Decorative corners */}
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
          Intelligence Series
        </p>
        <div className="w-8 h-[1px] bg-[#C9A23F]" />
      </div>

      <h1 className="text-white text-5xl md:text-7xl font-light leading-[1.1] tracking-wide mb-2">
        Our
      </h1>
      <h1 className="text-[#C9A23F] text-5xl md:text-7xl font-semibold leading-[1.1] tracking-wide mb-8">
        Insights
      </h1>

      <div className="flex justify-center mb-10">
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent" />
      </div>

      <p className="text-gray-300 text-lg leading-[1.9] font-light max-w-2xl mx-auto">
        Advisory-driven executive search for boards, CEOs, and transformational
        leaders who shape enterprise performance and strategic direction.
      </p>

      {/* Anchor chips */}
      {/* <div className="flex flex-wrap justify-center gap-3 mt-10">
        {["Our Edge", "Mandates", "Boards", "CEO Search", "AI Leadership"].map(
          (s) => (
            <span
              key={s}
              className="px-4 py-1.5 border border-[#C9A23F]/30 rounded-full text-xs text-[#C9A23F]/80 tracking-widest uppercase hover:border-[#C9A23F] hover:text-[#C9A23F] transition cursor-default"
            >
              {s}
            </span>
          ),
        )}
      </div> */}
    </motion.div>

    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#06151a]" />
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

// ─── ══════════ DIFFERENTIATORS ══════════ ────────────────────────────────────
const differentiators = [
  {
    key: "advisory",
    icon: "advisory",
    title: "Advisory Orientation",
    body: "Trusted advisors, not transactional recruiters. Our counsel extends beyond placement to leadership architecture.",
  },
  {
    key: "governance",
    icon: "governance",
    title: "Governance-Aware Frameworks",
    body: "Leaders evaluated within the broader enterprise ecosystem — grounded in governance principles.",
  },
  {
    key: "network",
    icon: "network",
    title: "Senior Leadership Networks",
    body: "Deep, trust-based access to executives at the apex of their industries — relationships cultivated over decades.",
  },
  {
    key: "research",
    icon: "research",
    title: "Research-Driven Methodology",
    body: "Structured, evidence-led. Every search anchored in market intelligence and precise capability benchmarking.",
  },
  {
    key: "partnership",
    icon: "partnership",
    title: "Long-Term Partnership",
    body: "We measure success not by placement speed, but by sustained leadership impact — years, not months.",
  },
  {
    key: "independence",
    icon: "independence",
    title: "Confidential Independence",
    body: "Every search executed with discretion. Our independence ensures objectivity for client and candidate alike.",
  },
];

const DifferentiatorsSection = () => (
  <section
    className="py-24 bg-[#F4F1EA] relative overflow-hidden"
    id="differentiators"
  >
    <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />
    <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.04] pointer-events-none">
      <GeometricAccent opacity={1} />
    </div>

    <div className="max-w-7xl mx-auto px-6">
      <FadeUp>
        <div className="text-center mb-16">
          <GoldLabel>Our Edge</GoldLabel>
          <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-2">
            What <span className="font-semibold">Differentiates</span> Us
          </h2>
          <div className="mt-4 w-16 h-[2px] bg-[#C9A23F] mx-auto" />
          <p className="mt-4 text-[#5b6f77] text-sm max-w-xl mx-auto leading-relaxed">
            Six principles that separate advisory excellence from conventional
            executive search.
          </p>
        </div>
      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {differentiators.map((d, i) => (
          <FadeUp key={d.key} delay={i * 0.07}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group bg-white/80 backdrop-blur border border-[#e6dcc6] rounded-2xl p-8 relative overflow-hidden h-full flex flex-col"
            >
              <span className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#C9A23F] to-transparent group-hover:w-full transition-all duration-500" />

              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full border border-[#C9A23F]/30 bg-[#C9A23F]/5 flex items-center justify-center mb-6 group-hover:border-[#C9A23F] group-hover:bg-[#C9A23F]/10 transition">
                <Icon path={ICONS[d.icon]} size={24} color={C.teal} />
              </div>

              {/* Number watermark */}
              <span className="absolute top-4 right-6 text-5xl font-bold text-[#0F4C5C]/5 select-none pointer-events-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="text-[#0F4C5C] font-semibold text-[1.05rem] mb-3 group-hover:text-[#C9A23F] transition-colors">
                {d.title}
              </h3>
              <p className="text-[#5b6f77] text-sm leading-[1.8] font-light flex-1">
                {d.body}
              </p>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// ─── ══════════ MANDATES ══════════ ───────────────────────────────────────────
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

const MandatesSection = () => (
  <section
    className="py-24 bg-[#EAE6DC] relative overflow-hidden"
    id="mandates"
  >
    <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />

    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-center mb-16">
        <FadeUp>
          <GoldLabel>Typical Mandates</GoldLabel>
          <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-2 mb-4">
            Where We Are <span className="font-semibold">Engaged</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#C9A23F] mb-6" />
          <p className="text-[#5b6f77] text-sm leading-relaxed max-w-sm">
            Our focus is functional heads and above — leaders whose decisions
            directly influence enterprise performance, culture, and strategic
            direction.
          </p>

          {/* Pull quote */}
          <div className="mt-10 border-l-4 border-[#C9A23F] pl-5">
            <p
              className="text-[#0F4C5C] italic font-light text-sm leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.05rem",
              }}
            >
              "We operate at the intersection of strategy and leadership — where
              the right appointment reshapes what becomes possible."
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="grid gap-5">
            {mandateGroups.map((g, i) => (
              <motion.div
                key={g.category}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="group bg-white/70 backdrop-blur border border-[#e6dcc6] rounded-xl p-6 flex gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0F4C5C]/5 group-hover:bg-[#0F4C5C]/10 flex items-center justify-center flex-shrink-0 transition border border-[#0F4C5C]/10">
                  <Icon path={ICONS[g.icon]} size={22} color={C.teal} />
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
                          className="text-[#0F4C5C] text-sm leading-snug"
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
            ))}
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

// ─── ══════════ OUTCOMES ══════════ ───────────────────────────────────────────
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

const OutcomesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="py-24 bg-[#123845] relative overflow-hidden">
      <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px),repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <GoldLabel>Results We Deliver</GoldLabel>
          <h2 className="text-white text-4xl md:text-5xl font-light mt-2">
            Outcomes That{" "}
            <span
              className="text-[#C9A23F] font-semibold italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Endure
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border border-[#C9A23F]/15 rounded-xl p-6 flex gap-5 items-start hover:border-[#C9A23F]/40 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-[#C9A23F]/30 group-hover:border-[#C9A23F] flex items-center justify-center flex-shrink-0 transition">
                <Icon path={ICONS[o.icon]} size={22} color="#C9A23F" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm mb-1">
                  {o.label}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  {o.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── ══════════ BOARDS ══════════ ─────────────────────────────────────────────
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

const BoardsSection = () => (
  <section className="py-24 bg-[#F4F1EA] relative overflow-hidden" id="boards">
    <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />

    <div className="max-w-7xl mx-auto px-6">
      <FadeUp>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <GoldLabel>Boards & Governance</GoldLabel>
            <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-2">
              Strengthening Board{" "}
              <span
                className="font-semibold italic"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: C.gold,
                }}
              >
                Effectiveness
              </span>
            </h2>
            <div className="mt-4 w-12 h-[2px] bg-[#C9A23F]" />
          </div>
          <p className="text-[#5b6f77] text-sm leading-relaxed max-w-sm">
            Boards today operate under regulatory scrutiny and strategic
            complexity. Strong governance is not administrative — it is
            strategic.
          </p>
        </div>
      </FadeUp>

      {/* 2×2 visual grid with connecting lines */}
      <div className="grid md:grid-cols-2 gap-5">
        {boardApproach.map((item, i) => (
          <FadeUp key={item.step} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group bg-white/80 backdrop-blur border border-[#e6dcc6] rounded-2xl p-8 flex gap-6 relative overflow-hidden"
            >
              <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C9A23F] via-[#0F4C5C] to-[#C9A23F] opacity-0 group-hover:opacity-100 transition" />

              {/* Step number + icon stack */}
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <span
                  className="text-[#C9A23F]/30 text-2xl font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.step}
                </span>
                <div className="w-12 h-12 rounded-xl border border-[#C9A23F]/20 bg-[#0F4C5C]/5 group-hover:bg-[#0F4C5C]/10 flex items-center justify-center transition">
                  <Icon path={ICONS[item.icon]} size={22} color={C.teal} />
                </div>
              </div>

              <div>
                <h3 className="text-[#0F4C5C] font-semibold text-base mb-2 group-hover:text-[#C9A23F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#5b6f77] text-sm leading-[1.8] font-light">
                  {item.body}
                </p>
              </div>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// ─── ══════════ CEO ══════════ ────────────────────────────────────────────────
const ceoFramework = [
  {
    step: "01",
    icon: "advisory",
    title: "Strategic Alignment",
    body: "Clarify growth objectives, transformation priorities, and measurable performance expectations before any search begins.",
  },
  {
    step: "02",
    icon: "research",
    title: "Leadership Profile",
    body: "Define the capability, behavioural attributes, and governance orientation required for the organisation's next chapter.",
  },
  {
    step: "03",
    icon: "network",
    title: "Market Mapping",
    body: "Evaluating external and internal talent pools with rigour and objectivity — ensuring broad consideration without bias.",
  },
  {
    step: "04",
    icon: "star",
    title: "Rigorous Assessment",
    body: "Candidates benchmarked against strategic acumen, stakeholder management, cultural alignment, and long-term value orientation.",
  },
  {
    step: "05",
    icon: "clock",
    title: "Succession Advisory",
    body: "Supporting Boards to identify immediate successors and longer-term internal development pathways for pipeline strength.",
  },
];

const CEOSection = () => {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#0F4C5C] relative overflow-hidden" id="ceo">
      <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#C9A23F 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header — 2-col */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <FadeUp>
            <GoldLabel>Chief Executive Officer</GoldLabel>
            <h2 className="text-white text-4xl md:text-5xl font-light mt-2 leading-tight">
              CEO Search That{" "}
              <span
                className="font-semibold italic"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: C.gold,
                }}
              >
                Shapes
              </span>{" "}
              Organisations
            </h2>
            <div className="mt-5 w-12 h-[2px] bg-[#C9A23F]" />
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-gray-300 text-sm leading-relaxed">
              The Chief Executive Officer shapes direction, performance
              expectations, and culture. The role demands clarity of vision,
              strategic judgement, and the ability to build exceptional
              executive teams. Our five-stage framework ensures every CEO
              appointment is grounded in organisational strategy.
            </p>
          </FadeUp>
        </div>

        {/* Vertical timeline — alternating left/right */}
        <div className="relative">
          {/* Central spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C9A23F]/60 via-[#C9A23F]/20 to-transparent hidden md:block -translate-x-1/2" />

          <div className="space-y-8">
            {ceoFramework.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative grid md:grid-cols-2 gap-0 ${isLeft ? "" : "md:[&>*:first-child]:order-2"}`}
                >
                  {/* Card side */}
                  <div
                    className={`${isLeft ? "md:pr-12" : "md:pl-12 md:order-2"}`}
                  >
                    <motion.div
                      onClick={() => setActive(active === i ? null : i)}
                      whileHover={{ scale: 1.01 }}
                      className={`cursor-pointer rounded-2xl p-7 border transition-all duration-300 group
                        ${
                          active === i
                            ? "bg-[#C9A23F] border-[#C9A23F]"
                            : "bg-white/8 border-white/10 hover:border-[#C9A23F]/50 hover:bg-white/12"
                        }`}
                    >
                      <div className="flex items-start gap-5">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors
                          ${active === i ? "bg-[#0F4C5C]/25" : "bg-white/10 group-hover:bg-white/15"}`}
                        >
                          <Icon
                            path={ICONS[item.icon]}
                            size={22}
                            color={active === i ? "#0F4C5C" : "#C9A23F"}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span
                              className={`text-xs tracking-[0.25em] uppercase font-medium ${active === i ? "text-[#0F4C5C]/70" : "text-[#C9A23F]/60"}`}
                            >
                              Step {item.step}
                            </span>
                            <svg
                              className={`w-4 h-4 transition-transform duration-300 ${active === i ? "rotate-45 text-[#0F4C5C]" : "text-[#C9A23F]/40"}`}
                              viewBox="0 0 16 16"
                              fill="none"
                            >
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
                          </div>
                          <h3
                            className={`font-semibold text-base mb-0 transition-colors ${active === i ? "text-[#0F4C5C]" : "text-white"}`}
                          >
                            {item.title}
                          </h3>
                          <motion.div
                            initial={false}
                            animate={{
                              height: active === i ? "auto" : 0,
                              opacity: active === i ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p
                              className={`text-sm leading-relaxed mt-3 font-light ${active === i ? "text-[#0F4C5C]/80" : "text-gray-300"}`}
                            >
                              {item.body}
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spine node + empty side */}
                  <div
                    className={`hidden md:flex items-start ${isLeft ? "justify-start" : "justify-end md:order-1"}`}
                  >
                    {/* Centre dot on spine */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-7 flex flex-col items-center">
                      <div
                        className={`w-4 h-4 rounded-full border-2 transition-colors duration-300 ${active === i ? "bg-[#C9A23F] border-[#C9A23F]" : "bg-[#0F4C5C] border-[#C9A23F]/50"}`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quote strip */}
        <FadeUp delay={0.5}>
          <div className="mt-16 flex flex-col md:flex-row items-center gap-6 border-t border-[#C9A23F]/20 pt-10">
            <div
              className="text-[#C9A23F] text-6xl font-light leading-none opacity-30 flex-shrink-0"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "
            </div>
            <p
              className="text-gray-200 italic text-lg font-light leading-relaxed flex-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A strong CEO and Board partnership remains one of the most
              powerful drivers of sustained enterprise performance. Our process
              evaluates candidates within that broader governance ecosystem —
              not in isolation.
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
  );
};

// ─── ══════════ AI SECTION ══════════ ─────────────────────────────────────────
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

const AISection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section
      ref={ref}
      className="py-24 bg-[#F4F1EA] relative overflow-hidden"
      id="ai"
    >
      <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />

      {/* Decorative rings */}
      {[320, 520, 720].map((size, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A23F] pointer-events-none"
          style={{ width: size, height: size, opacity: 0.06 - i * 0.015 }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <GoldLabel>Artificial Intelligence</GoldLabel>
            <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-2 leading-tight">
              Leadership for{" "}
              <span
                className="font-semibold italic"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: C.gold,
                }}
              >
                Intelligent Enterprise
              </span>{" "}
              Transformation
            </h2>
            <div className="mt-5 w-12 h-[2px] bg-[#C9A23F] mb-6" />
            <p className="text-[#5b6f77] text-sm leading-relaxed mb-4">
              AI is reshaping industries, operating models, and competitive
              dynamics. The question is no longer <em>whether</em> to adopt AI —
              but how to embed it responsibly, strategically, and at scale.
            </p>
            <p className="text-[#5b6f77] text-sm leading-relaxed">
              AI leadership demands more than technical expertise. It requires
              commercial judgement, governance awareness, and the ability to
              translate digital capability into measurable business impact.
            </p>

            {/* Horizontal divider badge */}
            <div className="mt-8 inline-flex items-center gap-3 border border-[#C9A23F]/40 rounded-full px-5 py-2.5 bg-white/60 backdrop-blur">
              <Icon path={ICONS.ai} size={18} color={C.teal} />
              <span className="text-[#0F4C5C] text-xs tracking-widest uppercase font-medium">
                Horizontal Capability — Every Industry
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {aiPoints.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group bg-white/80 backdrop-blur border border-[#e6dcc6] rounded-xl p-6 hover:border-[#C9A23F]/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0F4C5C]/5 group-hover:bg-[#0F4C5C]/10 flex items-center justify-center mb-4 transition">
                    <Icon path={ICONS[p.icon]} size={20} color={C.teal} />
                  </div>
                  <h4 className="text-[#0F4C5C] font-semibold text-sm mb-1.5 group-hover:text-[#C9A23F] transition-colors">
                    {p.label}
                  </h4>
                  <p className="text-[#5b6f77] text-xs leading-relaxed font-light">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

// ─── ══════════ CTA STRIP ══════════ ──────────────────────────────────────────
const CTAStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      className="bg-[#0F4C5C] py-20 px-6 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #C9A23F 0%, transparent 50%), radial-gradient(circle at 80% 50%, #C9A23F 0%, transparent 50%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <div className="w-16 h-16 mx-auto mb-6 opacity-40">
          <GeometricAccent opacity={1} />
        </div>
        <h2 className="text-white text-3xl md:text-4xl font-light mb-4">
          Ready to discuss a{" "}
          <span className="text-[#C9A23F] font-semibold">mandate</span>?
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
          Every engagement begins with a confidential conversation. Speak with
          one of our advisors to explore how we can serve your leadership needs.
        </p>
        <button className="px-10 py-4 border border-[#C9A23F] text-[#C9A23F] text-sm tracking-widest uppercase hover:bg-[#C9A23F] hover:text-[#0F4C5C] transition-all duration-300 font-medium">
          Begin a Conversation
        </button>
      </motion.div>
    </section>
  );
};

// ─── ══════════ EXPORT ══════════ ─────────────────────────────────────────────
export default function InsightsPage() {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>
      <PageHero />
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
