import React, { useEffect, useRef, useState } from "react";
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

// ─── Animated counter hook ────────────────────────────────────────────────────
function useCounter(target, duration = 1800, start = false) {
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

// ─── Shared Fade Animations ───────────────────────────────────────────────────
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

// ─── Service data ─────────────────────────────────────────────────────────────
const services = [
  {
    title: "Executive Search",
    photo:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&q=80&fit=crop",
    tag: "Retained Search · Board Level",
    content: `We deliver retained executive search for senior leadership and board-level roles across industries and growth stages. Each mandate begins with a deep understanding of organisational strategy, culture, governance context, and performance objectives.\n\nOur research-led approach evaluates not only experience and track record, but judgement, leadership style, cultural alignment, and long-term impact.`,
  },
  {
    title: "Succession Planning",
    photo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&fit=crop",
    tag: "Pipeline · Continuity",
    content: `Leadership continuity is a strategic imperative. We partner with Boards and executive teams to design succession strategies that strengthen bench strength, reduce risk, and preserve institutional knowledge.\n\nOur approach identifies critical roles, evaluates internal readiness, and builds structured leadership pipelines aligned to long-term organisational priorities.`,
  },
  {
    title: "Career Transition",
    photo:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80&fit=crop",
    tag: "Transition · Coaching",
    content: `Organisational evolution often requires difficult leadership decisions. We support organisations in managing transitions with integrity and professionalism.\n\nOur services provide structured guidance, leadership coaching, capability alignment, and strategic repositioning support — helping individuals move forward with clarity.`,
  },
  {
    title: "Interim Management",
    photo:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&q=80&fit=crop",
    tag: "Rapid Deployment · Specialised",
    content: `When leadership gaps arise or specialised expertise is required, interim management provides rapid access to experienced executives.\n\nWe identify seasoned leaders who can step into complex environments, stabilise operations, drive transformation, or deliver specific outcomes within defined timeframes.`,
  },
  {
    title: "Diversity",
    photo:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&fit=crop",
    tag: "Inclusion · Governance",
    content: `Diverse leadership strengthens governance, innovation, and performance. We integrate diversity and inclusion considerations into every search and advisory engagement.\n\nOur approach ensures leadership appointments reflect broader perspectives, varied experiences, and alignment with organisational values.`,
  },
];

const functions = [
  {
    title: "Boards & Governance",
    content:
      "We advise on board composition, governance effectiveness, and director appointments. Our work supports boards in strengthening oversight, strategic guidance, and leadership succession at the highest levels.",
  },
  {
    title: "Chief Executive Officer",
    content:
      "The CEO defines direction, culture, and performance expectations. We support organisations in identifying and assessing leaders capable of aligning strategy with execution and sustaining long-term growth.",
  },
  {
    title: "Chief Financial Officer",
    content:
      "The CFO has evolved into a strategic partner to the CEO and Board. We identify finance leaders who combine financial stewardship with enterprise-level thinking and governance credibility.",
  },
  {
    title: "Marketing & Sales",
    content:
      "Growth leadership demands commercial acumen, customer insight, and execution discipline. We support organisations in appointing Marketing and Sales leaders who translate strategy into measurable revenue impact.",
  },
  {
    title: "Human Resources",
    content:
      "Human capital strategy is central to organisational performance. We recruit and advise HR leaders across talent strategy, organisational effectiveness, succession planning, change management, and rewards.",
  },
  {
    title: "Supply Chain",
    content:
      "Supply chain leadership is increasingly strategic, balancing efficiency, resilience, risk management, and global complexity. We identify leaders capable of driving operational excellence.",
  },
  {
    title: "CSR & Sustainability",
    content:
      "Sustainability and responsible business practices are integral to strategy. We support organisations in appointing leaders who integrate economic performance with environmental stewardship and stakeholder accountability.",
  },
  {
    title: "Artificial Intelligence",
    content:
      "AI and advanced analytics are reshaping business models across industries. We identify leaders who can bridge technology and strategy, embed responsible innovation, and translate digital capability into commercial advantage.",
  },
];

const stats = [
  { value: 300, suffix: "+", label: "Placements Made" },
  { value: 25, suffix: "+", label: "Years of Practice" },
  { value: 18, suffix: "", label: "Industries Served" },
  { value: 92, suffix: "%", label: "Retention Rate" },
];

// ═════════════════════════════════════════════════════════════════════════════
const Services = () => {
  const [activeService, setActiveService] = useState(0);

  // Stats bar trigger
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  const c1 = useCounter(stats[0].value, 1800, statsInView);
  const c2 = useCounter(stats[1].value, 1800, statsInView);
  const c3 = useCounter(stats[2].value, 1800, statsInView);
  const c4 = useCounter(stats[3].value, 1800, statsInView);
  const counterValues = [c1, c2, c3, c4];

  // Hero parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(heroScroll, [0, 1], ["0%", "28%"]);
  const heroContentY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F4C5C]/70 via-[#123845]/80 to-[#123845]" />
        </motion.div>

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px)",
          }}
        />

        {/* Decorative circles */}
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

        {/* Hero content — bottom editorial layout */}
        <motion.div
          style={{ y: heroContentY, opacity: heroOpacity }}
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
                Advantage Starts Here
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
                  Services
                </h1>
              </div>
              <div className="max-w-lg">
                <div className="w-32 h-[1px] bg-gradient-to-r from-[#C9A23F]/70 to-transparent mb-6" />
                <p className="text-gray-300 text-lg leading-[1.9] font-light">
                  Structured leadership advisory and executive search solutions
                  aligned to strategy, governance, and long-term performance.
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

      {/* ══ ANIMATED STATS BAR ══ */}
      <section
        ref={statsRef}
        className="bg-[#EAE6DC] border-b border-[#e6dcc6] relative overflow-hidden"
      >
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F]/60 to-transparent" />
        {/* Background watermark text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span
            className="text-[18rem] font-bold text-[#0F4C5C]/[0.025] leading-none"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            25+
          </span>
        </div>

        <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.12,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className="text-5xl md:text-6xl font-semibold text-[#C9A23F]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {counterValues[i]}
                </span>
                <span className="text-[#C9A23F] text-3xl font-light">
                  {s.suffix}
                </span>
              </div>
              <div className="w-8 h-[1px] bg-[#C9A23F]/40 mb-2" />
              <p className="text-[#5b6f77] text-xs tracking-[0.2em] uppercase font-light">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ PRACTICE AREAS — full-bleed photo selector ══ */}
      <section className="bg-[#F4F1EA] relative overflow-hidden">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F]/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-10">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <GoldLabel>What We Offer</GoldLabel>
                <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-2">
                  Practice <span className="font-semibold">Areas</span>
                </h2>
                <div className="mt-4 w-16 h-[2px] bg-[#C9A23F]" />
              </div>
              <p className="text-[#5b6f77] text-sm leading-relaxed max-w-sm">
                Each engagement is tailored — we do not apply generic frameworks
                to complex leadership mandates.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Full-bleed service photo + sidebar */}
        <div className="grid lg:grid-cols-[380px_1fr]">
          {/* Left: service list */}
          <div className="bg-[#EAE6DC] border-r border-[#e6dcc6] py-8 flex flex-col">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className={`group w-full text-left px-8 py-5 border-l-[3px] transition-all duration-300 relative
                  ${
                    activeService === i
                      ? "border-l-[#C9A23F] bg-white"
                      : "border-l-transparent hover:border-l-[#C9A23F]/40 hover:bg-white/60"
                  }`}
              >
                <p
                  className={`text-sm font-semibold tracking-wide transition-colors ${activeService === i ? "text-[#C9A23F]" : "text-[#0F4C5C] group-hover:text-[#C9A23F]"}`}
                >
                  {s.title}
                </p>
                <p className="text-[#5b6f77] text-[10px] tracking-widest uppercase mt-0.5">
                  {s.tag}
                </p>
                {activeService === i && (
                  <motion.span
                    layoutId="service-underline"
                    className="absolute bottom-0 left-8 right-8 h-[1px] bg-[#C9A23F]/30"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right: full-bleed photo with text overlay */}
          <div className="relative min-h-[560px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={services[activeService].photo}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06151a]/85 via-[#06151a]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06151a]/70 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`txt-${activeService}`}
                className="absolute inset-0 flex flex-col justify-end p-10 md:p-14"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[#C9A23F] text-xs tracking-[0.3em] uppercase mb-3 font-medium">
                  {String(activeService + 1).padStart(2, "0")} /{" "}
                  {String(services.length).padStart(2, "0")}
                </p>
                <h3
                  className="text-white text-4xl md:text-5xl font-light mb-3 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {services[activeService].title}
                </h3>
                <div className="w-10 h-[2px] bg-[#C9A23F] mb-6" />
                <p className="text-gray-200 text-sm leading-[1.95] font-light whitespace-pre-line max-w-xl">
                  {services[activeService].content}
                </p>

                {/* Nav */}
                <div className="flex gap-3 mt-8">
                  {[
                    { dir: "prev", dis: activeService === 0 },
                    { dir: "next", dis: activeService === services.length - 1 },
                  ].map((b) => (
                    <button
                      key={b.dir}
                      onClick={() =>
                        setActiveService((a) =>
                          b.dir === "prev"
                            ? Math.max(0, a - 1)
                            : Math.min(services.length - 1, a + 1),
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
                  <div className="flex gap-1.5 ml-2 items-center">
                    {services.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveService(i)}
                        className={`h-1 rounded-full transition-all duration-300 cursor-pointer
                          ${activeService === i ? "w-6 bg-[#C9A23F]" : "w-1.5 bg-white/30 hover:bg-white/60"}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══ PROCESS — editorial strip with image ══ */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[60vh]">
          {/* Dark image panel */}
          <FadeIn x={-40} className="relative min-h-[400px]">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80&fit=crop"
              alt="Process"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06151a]/85 to-[#06151a]/40" />
            <div className="absolute inset-0 flex items-center p-12">
              <div>
                <p className="text-[#C9A23F] text-xs tracking-[0.3em] uppercase mb-4 font-medium">
                  How We Work
                </p>
                <h2
                  className="text-white text-4xl md:text-5xl font-light leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Five Stages.
                  <br />
                  <span className="text-[#C9A23F] italic">One Outcome.</span>
                </h2>
              </div>
            </div>
          </FadeIn>

          {/* Process steps */}
          <div className="bg-[#EAE6DC] flex flex-col justify-center py-16 px-10 md:px-14">
            {[
              {
                n: "01",
                label: "Discovery",
                desc: "Deep organisational briefing and mandate alignment.",
              },
              {
                n: "02",
                label: "Research",
                desc: "Market mapping and candidate universe construction.",
              },
              {
                n: "03",
                label: "Assessment",
                desc: "Rigorous evaluation and shortlisting against mandate.",
              },
              {
                n: "04",
                label: "Presentation",
                desc: "Curated slate with comprehensive executive profiles.",
              },
              {
                n: "05",
                label: "Placement",
                desc: "Offer management, onboarding advisory, and transition support.",
              },
            ].map((step, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="group flex items-center gap-5 py-4 border-b border-[#e6dcc6] last:border-b-0 hover:pl-2 transition-all duration-300">
                  <span
                    className="text-[#C9A23F]/30 text-2xl font-light flex-shrink-0 w-10 text-right"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {step.n}
                  </span>
                  <div className="w-[1px] h-8 bg-[#e6dcc6] group-hover:bg-[#C9A23F]/50 transition-colors" />
                  <div>
                    <p className="text-[#0F4C5C] text-sm font-semibold group-hover:text-[#C9A23F] transition-colors">
                      {step.label}
                    </p>
                    <p className="text-[#5b6f77] text-xs font-light mt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FUNCTIONAL COVERAGE — cream bg, editorial grid ══ */}
      <section className="bg-[#F4F1EA] py-24 relative overflow-hidden">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F]/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
              <div>
                <GoldLabel>Expertise</GoldLabel>
                <h2 className="text-[#0F4C5C] text-4xl md:text-5xl font-light mt-2">
                  Functional <span className="font-semibold">Coverage</span>
                </h2>
                <div className="mt-4 w-16 h-[2px] bg-[#C9A23F]" />
              </div>
              <p className="text-[#5b6f77] text-sm leading-relaxed">
                Our practice spans all major executive functions — enabling us
                to serve complex, cross-functional leadership mandates with
                genuine sector depth.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-0 border border-[#e6dcc6] rounded-2xl overflow-hidden bg-white/40">
            {functions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className={`group relative p-8 border-[#e6dcc6] hover:bg-white transition-colors duration-300
                  ${i % 2 === 0 ? "border-r" : ""}
                  ${i < functions.length - 2 ? "border-b" : ""}`}
              >
                <span className="absolute left-0 top-0 h-0 w-[3px] bg-[#C9A23F] group-hover:h-full transition-all duration-300 rounded-r" />
                {/* Step number watermark */}
                <span
                  className="absolute top-4 right-5 text-5xl font-bold text-[#0F4C5C]/[0.04] leading-none select-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[#0F4C5C] font-semibold text-base mb-2 group-hover:text-[#C9A23F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#5b6f77] text-sm leading-[1.8] font-light pr-8">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FULL-BLEED CLOSING PHOTO STRIP ══ */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&q=80&fit=crop"
          alt="Leadership team"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06151a]/60 via-[#123845]/70 to-[#123845]/90" />
        <div className="relative z-10 flex items-center justify-center min-h-[50vh] px-8 py-24 text-center">
          <FadeUp>
            <p className="text-[#C9A23F] text-xs tracking-[0.35em] uppercase mb-6 font-medium">
              The PivotEdge Difference
            </p>
            <blockquote
              className="text-white text-3xl md:text-5xl font-light leading-[1.3] max-w-3xl mx-auto"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "Leadership appointments are among the most consequential
              decisions an organisation makes."
            </blockquote>
            <div className="mt-6 w-16 h-[1px] bg-[#C9A23F]/60 mx-auto" />
            <p className="text-[#C9A23F] text-[0.68rem] tracking-[0.3em] uppercase mt-4 font-medium">
              — PivotEdge Partners
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default Services;
