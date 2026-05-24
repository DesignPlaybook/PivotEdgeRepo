import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";

// ─── Unsplash images (editorial, boardroom/leadership photography) ────────────
const IMGS = {
  hero: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop",
  philosophy:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop",
  who: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop",
  how: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2070&auto=format&fit=crop",
  commitment:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
  industries:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
};

// ─── Tokens ───────────────────────────────────────────────────────────────────
const GOLD = "#C9A23F";
const TEAL = "#0F4C5C";
const DARK = "#123845";
const CREAM = "#F4F1EA";
const CREAM_ALT = "#EAE6DC";
const MUTED = "#5b6f77";

// ─── Animated Counter ─────────────────────────────────────────────────────────
function Counter({ to, suffix = "", duration = 2.2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return c.stop;
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

// ─── Scroll fade helpers ───────────────────────────────────────────────────────
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

// ─── Gold label ───────────────────────────────────────────────────────────────
const GoldLabel = ({ children, light = false }) => (
  <div className="flex items-center gap-3 mb-3">
    <div className="w-6 h-px" style={{ background: GOLD }} />
    <span
      className={`text-[0.68rem] tracking-[0.32em] uppercase font-medium`}
      style={{ color: GOLD }}
    >
      {children}
    </span>
    <div className="w-6 h-px" style={{ background: GOLD }} />
  </div>
);

// ─── Gold Divider ─────────────────────────────────────────────────────────────
const GoldDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A23F]/50 to-transparent" />
);

// ═══════════════════════════════════════════════════════════════════════════════
// HERO — Full-bleed parallax photo
// ═══════════════════════════════════════════════════════════════════════════════
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax bg */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img src={IMGS.hero} alt="" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(18,56,69,0.75) 0%, rgba(15,76,92,0.65) 40%, rgba(18,56,69,0.92) 100%)",
          }}
        />
      </motion.div>

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px)",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-10 h-px" style={{ background: GOLD }} />
          <span
            className="text-[0.72rem] tracking-[0.38em] uppercase font-medium"
            style={{ color: GOLD }}
          >
            Advantage Starts Here
          </span>
          <div className="w-10 h-px" style={{ background: GOLD }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35 }}
          className="text-white text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-wide mb-6"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          About{" "}
          <em className="not-italic font-semibold" style={{ color: GOLD }}>
            PivotEdge
          </em>
          <br />
          Partners
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
          Leadership advisory and executive search grounded in judgement,
          integrity, and long-term enterprise impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#philosophy"
            className="group px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300"
            style={{ background: GOLD, color: "#fff" }}
          >
            Our Philosophy
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#commitment"
            className="group px-8 py-4 border text-sm tracking-[0.2em] uppercase font-light transition-all duration-300 text-white/80 hover:text-white"
            style={{ borderColor: "rgba(201,162,63,0.4)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = GOLD;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,162,63,0.4)";
            }}
          >
            Our Commitment
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
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
          className="w-px h-10"
          style={{
            background: `linear-gradient(to bottom, ${GOLD}80, transparent)`,
          }}
        />
      </motion.div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// STATS BAR
// ═══════════════════════════════════════════════════════════════════════════════
const stats = [
  { value: 20, suffix: "+", label: "Years of Practice" },
  { value: 500, suffix: "+", label: "Leadership Mandates" },
  { value: 92, suffix: "%", label: "Retention Rate" },
  { value: 300, suffix: "+", label: "C-Suite Placements" },
  { value: 6, suffix: "", label: "Industry Verticals" },
  { value: 30, suffix: "+", label: "Countries Reached" },
];

const StatsBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      style={{ background: DARK }}
      className="relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#C9A23F 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-3 md:grid-cols-6 divide-x"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="text-center py-10 px-4 relative"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="text-3xl md:text-4xl font-light text-white mb-1.5"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                <span className="font-semibold" style={{ color: GOLD }}>
                  <Counter to={s.value} suffix={s.suffix} />
                </span>
              </div>
              <p
                className="text-[0.7rem] tracking-[0.15em] uppercase font-light"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// PHILOSOPHY — Full-bleed image with text overlay + pull quote
// ═══════════════════════════════════════════════════════════════════════════════
const Philosophy = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const pillars = [
    {
      num: "01",
      title: "Judgement",
      body: "We evaluate how leaders decide, not just what they have achieved.",
    },
    {
      num: "02",
      title: "Adaptability",
      body: "The ability to navigate uncertainty with discipline and clarity.",
    },
    {
      num: "03",
      title: "Impact",
      body: "Leadership defined by long-term enterprise and cultural outcomes.",
    },
    {
      num: "04",
      title: "Integrity",
      body: "Every mandate conducted with confidentiality and accountability.",
    },
  ];

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: CREAM }}
    >
      <GoldDivider />

      {/* Full-bleed image panel */}
      <div className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <img
            src={IMGS.philosophy}
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(15,76,92,0.92) 40%, rgba(15,76,92,0.6) 100%)",
            }}
          />
        </motion.div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <FadeIn x={-40}>
              <GoldLabel>Our Leadership Philosophy</GoldLabel>
              <h2
                className="text-white text-4xl md:text-6xl font-light leading-[1.12] mt-4 max-w-2xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Leadership is not defined by{" "}
                <em className="not-italic" style={{ color: GOLD }}>
                  title.
                </em>
                <br />
                It is defined by{" "}
                <em className="italic font-semibold" style={{ color: GOLD }}>
                  impact.
                </em>
              </h2>
              <div className="mt-6 w-14 h-px" style={{ background: GOLD }} />
              <p className="mt-5 text-white/60 text-base leading-[1.9] font-light max-w-xl">
                At PivotEdge Partners, leadership is evaluated not only by
                experience — but by judgement, adaptability, and long-term
                impact on organisational performance.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* 4 pillars below image */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <FadeUp key={p.num} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group relative bg-white border p-8 overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{ borderColor: "#e6dcc6" }}
              >
                <div
                  className="absolute top-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-500"
                  style={{ background: GOLD }}
                />
                <span
                  className="text-4xl font-light leading-none mb-5 block"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: `${GOLD}30`,
                  }}
                >
                  {p.num}
                </span>
                <h3
                  className="font-semibold text-base mb-2 transition-colors group-hover:text-amber-600"
                  style={{ color: TEAL }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed font-light"
                  style={{ color: MUTED }}
                >
                  {p.body}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Editorial paragraphs */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
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
            <FadeUp key={i} delay={i * 0.08}>
              <div
                className="flex gap-5 items-start p-6 border bg-white/50 hover:bg-white hover:shadow-md transition-all duration-300 group"
                style={{ borderColor: "#e6dcc6" }}
              >
                <span
                  className="text-4xl font-light flex-shrink-0 leading-none"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: `${GOLD}25`,
                  }}
                >
                  {item.num}
                </span>
                <p
                  className="text-sm leading-[1.9] font-light"
                  style={{ color: MUTED }}
                >
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

// ═══════════════════════════════════════════════════════════════════════════════
// WHO WE ARE — Editorial split: large image left, text right
// ═══════════════════════════════════════════════════════════════════════════════
const WhoWeAre = () => {
  const whoPoints = [
    {
      label: "Trusted Advisors",
      text: "Entrusted with consequential decisions across Executive Search, Board appointments, CEO succession, and emerging leadership domains.",
    },
    {
      label: "Research-Driven",
      text: "Structured and discreet — combining market intelligence, rigorous assessment, and governance awareness at every stage.",
    },
    {
      label: "Culture & Strategy Fit",
      text: "We identify leaders who align with both strategic ambition and organisational culture — not experience alone.",
    },
    {
      label: "Long-Term Partnership",
      text: "Executive search is not transactional. It is a partnership grounded in trust, judgement, and sustained accountability.",
    },
  ];

  return (
    <section style={{ background: DARK }} className="relative overflow-hidden">
      <GoldDivider />
      <div className="grid lg:grid-cols-2 min-h-[620px]">
        {/* Image side */}
        <div className="relative overflow-hidden min-h-[400px]">
          <img
            src={IMGS.who}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(18,56,69,0.2) 0%, rgba(18,56,69,0.7) 100%)",
            }}
          />
          {/* Overlay text */}
          <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-14">
            <FadeIn x={-30}>
              <p
                className="text-[0.68rem] tracking-[0.3em] uppercase font-medium mb-3"
                style={{ color: GOLD }}
              >
                Who We Are
              </p>
              <h2
                className="text-white text-4xl md:text-5xl font-light leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Advisors to the
                <br />
                <em className="font-semibold" style={{ color: GOLD }}>
                  apex
                </em>{" "}
                of leadership
              </h2>
              <div className="mt-5 w-10 h-px" style={{ background: GOLD }} />
            </FadeIn>
          </div>
        </div>

        {/* Text side */}
        <div className="flex flex-col justify-center px-10 md:px-14 py-16 relative">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(#C9A23F 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative z-10">
            <FadeIn x={30} delay={0.15}>
              <p className="text-white/60 text-sm leading-relaxed font-light mb-10">
                PivotEdge Partners works with Boards, Chief Executives, and
                senior leadership teams — focused on functional heads and above,
                where leadership directly shapes enterprise performance.
              </p>
            </FadeIn>
            <div className="space-y-0">
              {whoPoints.map((p, i) => (
                <FadeUp key={i} delay={i * 0.09}>
                  <div
                    className="group flex gap-5 items-start py-6 border-b transition-all duration-300 hover:pl-2"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: GOLD }}
                    />
                    <div>
                      <p
                        className="text-[0.65rem] tracking-[0.25em] uppercase font-medium mb-1"
                        style={{ color: GOLD }}
                      >
                        {p.label}
                      </p>
                      <p className="text-white/60 text-[14px] leading-[1.8] font-light">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// HOW WE WORK — Image right, text left
// ═══════════════════════════════════════════════════════════════════════════════
const HowWeWork = () => {
  const howPoints = [
    {
      num: "01",
      label: "Discovery First",
      text: "Every engagement begins with deep clarity — understanding strategy, operations, culture, and governance expectations.",
    },
    {
      num: "02",
      label: "Market Mapping",
      text: "Comprehensive mapping of internal and external talent pools, evaluated against precisely defined capability criteria.",
    },
    {
      num: "03",
      label: "Stakeholder Alignment",
      text: "Continuous alignment with all stakeholders throughout the process — with full transparency at every stage.",
    },
    {
      num: "04",
      label: "Depth Over Speed",
      text: "Our methodology prioritises precision over volume, and genuine fit over familiarity. Quality is non-negotiable.",
    },
  ];

  return (
    <section
      style={{ background: CREAM_ALT }}
      className="relative overflow-hidden"
    >
      <GoldDivider />
      <div className="grid lg:grid-cols-2 min-h-[620px]">
        {/* Text side */}
        <div className="flex flex-col justify-center px-10 md:px-14 py-16">
          <FadeIn x={-30}>
            <GoldLabel>How We Work</GoldLabel>
            <h2
              className="text-4xl md:text-5xl font-light mt-4 leading-snug"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: TEAL }}
            >
              Depth over{" "}
              <em className="italic font-semibold" style={{ color: GOLD }}>
                speed.
              </em>
              <br />
              Precision over volume.
            </h2>
            <div className="mt-5 w-10 h-px" style={{ background: GOLD }} />
            <p
              className="mt-5 text-sm leading-relaxed font-light max-w-md"
              style={{ color: MUTED }}
            >
              Every engagement is treated as a strategic mandate — never a
              transactional exercise in filling a position.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-0">
            {howPoints.map((p, i) => (
              <FadeUp key={i} delay={i * 0.09}>
                <div
                  className="group flex gap-5 items-start py-6 border-b hover:bg-white/50 hover:-mx-4 hover:px-4 transition-all duration-300"
                  style={{ borderColor: `${GOLD}20` }}
                >
                  <span
                    className="text-2xl font-light flex-shrink-0 mt-0.5"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: `${GOLD}50`,
                    }}
                  >
                    {p.num}
                  </span>
                  <div>
                    <p
                      className="text-[0.65rem] tracking-[0.25em] uppercase font-medium mb-1"
                      style={{ color: GOLD }}
                    >
                      {p.label}
                    </p>
                    <p
                      className="text-sm leading-[1.8] font-light"
                      style={{ color: MUTED }}
                    >
                      {p.text}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative overflow-hidden min-h-[400px] order-first lg:order-last">
          <img
            src={IMGS.how}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, rgba(18,56,69,0.1) 0%, rgba(18,56,69,0.6) 100%)",
            }}
          />
          {/* Floating quote */}
          <div className="relative z-10 h-full flex items-end p-10 md:p-14">
            <FadeIn x={30}>
              <div
                className="border-l-4 pl-6 py-3"
                style={{ borderColor: GOLD }}
              >
                <p
                  className="text-white text-lg font-light italic leading-relaxed"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "Every engagement is treated as a singular strategic
                  responsibility."
                </p>
                <p
                  className="text-[0.65rem] tracking-[0.2em] uppercase mt-3 font-medium"
                  style={{ color: GOLD }}
                >
                  — PivotEdge Partners
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// INDUSTRIES — Dark bg with image mosaic + tabs
// ═══════════════════════════════════════════════════════════════════════════════
const industryData = [
  {
    label: "Industrial",
    tag: "Manufacturing · Engineering · Energy",
    desc: "Leaders capable of modernising operations, improving productivity, and navigating cyclical pressures with strategic discipline.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Real Estate & Infrastructure",
    tag: "Property · Development · Infrastructure",
    desc: "Disciplined executives who manage capital-intensive assets, long-cycle value creation, and complex stakeholder environments.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Consumer",
    tag: "Retail · FMCG · Brand",
    desc: "Agile leaders who understand market dynamics, brand positioning, and the pace of digital disruption in consumer markets.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Healthcare & Life Sciences",
    tag: "Healthcare · Pharma · MedTech",
    desc: "Leadership capable of navigating innovation, regulation, and the complex stakeholder landscape of healthcare organisations.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Banking & Financial Services",
    tag: "Banking · Insurance · Asset Management",
    desc: "Executives who combine financial stewardship with transformation capability, risk management, and governance credibility.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Technology, Media & Telecom",
    tag: "Technology · Media · Telecom",
    desc: "Leaders who scale platforms, drive competitive differentiation, and embed innovation across digital-first organisations.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
  },
];

const Industries = () => {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: DARK }} className="relative overflow-hidden">
      <GoldDivider />
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <FadeUp>
          <div className="text-center mb-14">
            <GoldLabel>Where We Operate</GoldLabel>
            <h2
              className="text-white text-4xl md:text-5xl font-light mt-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Industries We{" "}
              <span className="font-semibold" style={{ color: GOLD }}>
                Serve
              </span>
            </h2>
            <div
              className="mt-4 w-14 h-px mx-auto"
              style={{ background: GOLD }}
            />
          </div>
        </FadeUp>

        {/* Interactive industry selector */}
        <div
          className="grid lg:grid-cols-[320px_1fr] gap-0 overflow-hidden rounded-sm"
          style={{ border: "1px solid rgba(201,162,63,0.15)" }}
        >
          {/* Tabs */}
          <div style={{ background: "#0a2d38" }}>
            {industryData.map((ind, i) => (
              <button
                key={ind.label}
                onClick={() => setActive(i)}
                className="w-full text-left px-7 py-5 flex items-center gap-3 transition-all duration-300 group"
                style={{
                  background:
                    active === i ? "rgba(201,162,63,0.1)" : "transparent",
                  borderLeft:
                    active === i
                      ? `3px solid ${GOLD}`
                      : "3px solid transparent",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors"
                  style={{
                    background: active === i ? GOLD : "rgba(255,255,255,0.2)",
                  }}
                />
                <p
                  className="text-xs font-medium tracking-wide transition-colors"
                  style={{
                    color: active === i ? GOLD : "rgba(255,255,255,0.55)",
                  }}
                >
                  {ind.label}
                </p>
                {active === i && (
                  <svg
                    className="ml-auto flex-shrink-0"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <polyline
                      points="4,2 8,6 4,10"
                      stroke={GOLD}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="relative min-h-[460px] overflow-hidden">
            {industryData.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={false}
                animate={{ opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
                style={{ pointerEvents: active === i ? "auto" : "none" }}
              >
                <img
                  src={ind.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,28,40,0.97) 30%, rgba(10,28,40,0.6) 70%, rgba(10,28,40,0.3) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14">
                  <p
                    className="text-[0.65rem] tracking-[0.3em] uppercase font-medium mb-3"
                    style={{ color: GOLD }}
                  >
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(industryData.length).padStart(2, "0")}
                  </p>
                  <h3
                    className="text-white text-3xl md:text-4xl font-light mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {ind.label}
                  </h3>
                  <p
                    className="text-xs tracking-widest uppercase mb-4 font-medium"
                    style={{ color: `${GOLD}90` }}
                  >
                    {ind.tag}
                  </p>
                  <div className="w-8 h-px mb-4" style={{ background: GOLD }} />
                  <p className="text-white/65 text-[14.5px] leading-[1.9] font-light max-w-lg">
                    {ind.desc}
                  </p>
                  {/* Arrow nav */}
                  <div className="flex gap-3 mt-8">
                    {["prev", "next"].map((dir) => (
                      <button
                        key={dir}
                        onClick={() =>
                          setActive((a) =>
                            dir === "prev"
                              ? Math.max(0, a - 1)
                              : Math.min(industryData.length - 1, a + 1),
                          )
                        }
                        disabled={
                          dir === "prev"
                            ? active === 0
                            : active === industryData.length - 1
                        }
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-20"
                        style={{ border: `1px solid ${GOLD}40` }}
                        onMouseEnter={(e) => {
                          if (!e.currentTarget.disabled)
                            e.currentTarget.style.borderColor = GOLD;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = `${GOLD}40`;
                        }}
                      >
                        <svg
                          viewBox="0 0 16 16"
                          width="14"
                          height="14"
                          fill="none"
                        >
                          <polyline
                            points={
                              dir === "prev"
                                ? "10,3 5,8 10,13"
                                : "6,3 11,8 6,13"
                            }
                            stroke={GOLD}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Functions strip */}
        <FadeUp delay={0.2}>
          <div className="mt-12">
            <div className="flex items-center gap-4 mb-6">
              <p
                className="text-xs font-semibold tracking-[0.15em] uppercase"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Functional Expertise
              </p>
              <div
                className="flex-1 h-px"
                style={{ background: `${GOLD}20` }}
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Boards & Governance",
                "Chief Executives",
                "CFOs",
                "Marketing & Sales",
                "Human Resources",
                "Supply Chain",
                "CSR & Sustainability",
                "Artificial Intelligence",
              ].map((f) => (
                <span
                  key={f}
                  className="px-4 py-2 text-xs tracking-wide font-light transition-all duration-300 cursor-default"
                  style={{
                    border: `1px solid rgba(255,255,255,0.1)`,
                    color: "rgba(255,255,255,0.55)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${GOLD}60`;
                    e.currentTarget.style.color = GOLD;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// LEADERSHIP PERSPECTIVE — Full-bleed teal with large type
// ═══════════════════════════════════════════════════════════════════════════════
const Perspective = () => {
  const words = [
    "strategic judgement",
    "adaptability",
    "ethical grounding",
    "decisive action",
  ];
  const [wordIdx, setWordIdx] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(
      () => setWordIdx((i) => (i + 1) % words.length),
      2200,
    );
    return () => clearInterval(t);
  }, [inView]);

  return (
    <section
      ref={ref}
      style={{ background: TEAL }}
      className="relative py-28 overflow-hidden"
    >
      {/* <GoldDivider /> */}
      {/* Concentric rings deco */}
      {[300, 500, 700].map((s, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: s,
            height: s,
            border: `1px solid ${GOLD}`,
            opacity: 0.06 - i * 0.015,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FadeUp>
          <GoldLabel>Our Perspective on Leadership</GoldLabel>
          <h2
            className="text-white text-4xl md:text-5xl lg:text-6xl font-light mt-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Effective leadership demands
          </h2>
        </FadeUp>

        <div className="h-16 md:h-20 flex items-center justify-center my-2 overflow-hidden">
          <motion.span
            key={wordIdx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold italic"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD }}
          >
            {words[wordIdx]}
          </motion.span>
        </div>

        <FadeUp delay={0.3}>
          <div
            className="w-16 h-px mx-auto mb-12"
            style={{ background: GOLD }}
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
              <FadeUp key={i} delay={i * 0.1}>
                <div
                  className="group p-6 transition-all duration-300 hover:bg-white/5"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="w-8 h-px mb-4 transition-all duration-300 group-hover:w-14"
                    style={{ background: GOLD }}
                  />
                  <h4 className="text-white font-medium text-sm mb-2">
                    {c.title}
                  </h4>
                  <p className="text-white/55 text-sm leading-relaxed font-light">
                    {c.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// COMMITMENT — Full-bleed dark image + text overlay
// ═══════════════════════════════════════════════════════════════════════════════
const Commitment = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="commitment"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: DARK }}
    >
      <GoldDivider />

      {/* Full-bleed photo + dark overlay */}
      <div className="relative">
        <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
          <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
            <img
              src={IMGS.commitment}
              alt=""
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(18,56,69,0.5) 0%, rgba(18,56,69,0.9) 100%)",
              }}
            />
          </motion.div>
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <GoldLabel>Our Commitment</GoldLabel>
              <h2
                className="text-white text-4xl md:text-6xl font-light mt-4 leading-tight"
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

        {/* 3 commitment pillars */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div
            className="grid md:grid-cols-3 gap-0 overflow-hidden"
            style={{ border: `1px solid rgba(201,162,63,0.15)` }}
          >
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
                className="group relative p-10 transition-all duration-300 hover:bg-white/5"
                style={{
                  borderRight:
                    i < 2 ? `1px solid rgba(201,162,63,0.15)` : "none",
                }}
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
                <h3 className="text-white font-medium text-base mb-3 transition-colors group-hover:text-amber-400">
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

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-center mt-16"
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
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════════════════
export default function About() {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>
      <Hero />
      <StatsBar />
      <Philosophy />
      <WhoWeAre />
      <HowWeWork />
      <Industries />
      <Perspective />
      <Commitment />
    </div>
  );
}
