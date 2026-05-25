import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import bg from "../../assets/images/bg.webp";

const T = {
  ivory: "#FAFAF8",
  cream: "#F5F2EB",
  warm: "#EDE9E0",
  teal: "#0F4C5C",
  tealDeep: "#0A3545",
  dark: "#123845",
  gold: "#B8922A",
  goldLight: "#C9A23F",
  slate: "#4A5C65",
  muted: "#7A8E96",
  border: "rgba(15,76,92,0.10)",
  borderGold: "rgba(184,146,42,0.25)",
};
const serif = "'Cormorant Garamond', Georgia, serif";
const sans = "'Jost', sans-serif";

const Reveal = ({ children, delay = 0, y = 28, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Label = ({ children, center = false }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      justifyContent: center ? "center" : "flex-start",
      marginBottom: 12,
    }}
  >
    <div style={{ width: 20, height: 1, background: T.goldLight }} />
    <span
      style={{
        fontFamily: sans,
        fontSize: "0.68rem",
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color: T.goldLight,
        fontWeight: 500,
      }}
    >
      {children}
    </span>
    <div style={{ width: 20, height: 1, background: T.goldLight }} />
  </div>
);

const Divider = () => (
  <div
    style={{
      height: 1,
      background: `linear-gradient(to right, transparent, ${T.borderGold}, transparent)`,
    }}
  />
);

function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - progress, 3)) * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const op = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: "88vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <motion.div style={{ y: bgY, position: "absolute", inset: 0 }}>
        <img
          src={bg}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "scale(1.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(10,53,69,0.92) 0%, rgba(15,76,92,0.8) 100%)",
          }}
        />
      </motion.div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `repeating-linear-gradient(0deg,${T.goldLight},${T.goldLight} 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,${T.goldLight},${T.goldLight} 1px,transparent 1px,transparent 80px)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 60,
          right: 80,
          opacity: 0.1,
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          style={{ width: 180, height: 180 }}
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke={T.goldLight}
            strokeWidth="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="65"
            stroke={T.goldLight}
            strokeWidth="0.3"
            strokeDasharray="4 8"
          />
          <circle
            cx="100"
            cy="100"
            r="40"
            stroke={T.goldLight}
            strokeWidth="0.8"
          />
          <polygon
            points="100,65 118,82 100,99 82,82"
            stroke={T.goldLight}
            strokeWidth="0.8"
            fill="none"
          />
          <circle cx="100" cy="100" r="4" fill={T.goldLight} />
        </svg>
      </div>
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]),
          opacity: op,
          position: "relative",
          zIndex: 10,
          width: "100%",
          paddingBottom: "7rem",
          paddingLeft: "clamp(2rem,8vw,7rem)",
          paddingRight: "clamp(2rem,8vw,7rem)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 32,
            }}
          >
            <div style={{ width: 32, height: 1, background: T.goldLight }} />
            <span
              style={{
                fontFamily: sans,
                fontSize: "0.68rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: T.goldLight,
                fontWeight: 500,
              }}
            >
              Advantage Starts Here
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <h1
              style={{
                fontFamily: serif,
                fontWeight: 300,
                color: "#fff",
                fontSize: "clamp(3.5rem,7vw,6rem)",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Our
            </h1>
            <h1
              style={{
                fontFamily: serif,
                fontWeight: 600,
                fontStyle: "italic",
                color: T.goldLight,
                fontSize: "clamp(3.5rem,7vw,6rem)",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Services
            </h1>
          </div>
          <div
            style={{
              width: 120,
              height: 1,
              background: `linear-gradient(to right, ${T.goldLight}70, transparent)`,
              margin: "28px 0",
            }}
          />
          <p
            style={{
              fontFamily: sans,
              fontWeight: 300,
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.9,
              maxWidth: 520,
            }}
          >
            Structured leadership advisory and executive search solutions
            aligned to strategy, governance, and long-term performance.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span
          style={{
            fontFamily: sans,
            fontSize: "0.6rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: `${T.goldLight}50`,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: `linear-gradient(to bottom, ${T.goldLight}60, transparent)`,
          }}
        />
      </motion.div>
    </section>
  );
};

// ─── STATS BAR ────────────────────────────────────────────────────────────────
const StatsBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const stats = [
    { value: 300, suffix: "+", label: "Placements Made" },
    { value: 25, suffix: "+", label: "Years of Practice" },
    { value: 18, suffix: "", label: "Industries Served" },
    { value: 92, suffix: "%", label: "Retention Rate" },
  ];
  const c1 = useCounter(stats[0].value, 1800, inView);
  const c2 = useCounter(stats[1].value, 1800, inView);
  const c3 = useCounter(stats[2].value, 1800, inView);
  const c4 = useCounter(stats[3].value, 1800, inView);
  const vals = [c1, c2, c3, c4];

  return (
    <section
      ref={ref}
      style={{
        background: T.warm,
        borderBottom: `1px solid ${T.borderGold}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.02,
          backgroundImage: `radial-gradient(${T.teal} 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 clamp(2rem,8vw,7rem)",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 0,
        }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12 }}
            style={{
              textAlign: "center",
              padding: "52px 24px",
              borderRight: i < 3 ? `1px solid ${T.borderGold}` : "none",
              position: "relative",
            }}
          >
            <div
              style={{
                fontFamily: serif,
                fontSize: "3.5rem",
                fontWeight: 600,
                color: T.goldLight,
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              {vals[i]}
              <span style={{ fontSize: "2rem" }}>{s.suffix}</span>
            </div>
            <div
              style={{
                width: 32,
                height: 1,
                background: `${T.goldLight}50`,
                margin: "0 auto 10px",
              }}
            />
            <p
              style={{
                fontFamily: sans,
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: T.muted,
                fontWeight: 300,
              }}
            >
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ─── PRACTICE AREAS ──────────────────────────────────────────────────────────
const PracticeAreas = () => {
  const [active, setActive] = useState(0);
  const services = [
    {
      title: "Executive Search",
      tag: "Retained Search · Board Level",
      photo:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&q=80",
      content:
        "We deliver retained executive search for senior leadership and board-level roles across industries and growth stages. Each mandate begins with a deep understanding of organisational strategy, culture, governance context, and performance objectives.\n\nOur research-led approach evaluates not only experience and track record, but judgement, leadership style, cultural alignment, and long-term impact.",
    },
    {
      title: "Succession Planning",
      tag: "Pipeline · Continuity",
      photo:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
      content:
        "Leadership continuity is a strategic imperative. We partner with Boards and executive teams to design succession strategies that strengthen bench strength, reduce risk, and preserve institutional knowledge.\n\nOur approach identifies critical roles, evaluates internal readiness, and builds structured leadership pipelines aligned to long-term organisational priorities.",
    },
    {
      title: "Career Transition",
      tag: "Transition · Coaching",
      photo:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
      content:
        "Organisational evolution often requires difficult leadership decisions. We support organisations in managing transitions with integrity and professionalism.\n\nOur services provide structured guidance, leadership coaching, capability alignment, and strategic repositioning support — helping individuals move forward with clarity.",
    },
    {
      title: "Interim Management",
      tag: "Rapid Deployment · Specialised",
      photo:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&q=80",
      content:
        "When leadership gaps arise or specialised expertise is required, interim management provides rapid access to experienced executives.\n\nWe identify seasoned leaders who can step into complex environments, stabilise operations, drive transformation, or deliver specific outcomes within defined timeframes.",
    },
    {
      title: "Diversity",
      tag: "Inclusion · Governance",
      photo:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",
      content:
        "Diverse leadership strengthens governance, innovation, and performance. We integrate diversity and inclusion considerations into every search and advisory engagement.\n\nOur approach ensures leadership appointments reflect broader perspectives, varied experiences, and alignment with organisational values.",
    },
  ];

  return (
    <section style={{ background: T.ivory }}>
      <Divider />
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "5rem clamp(2rem,8vw,7rem) 2rem",
        }}
      >
        <Reveal>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 48,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <Label>What We Offer</Label>
              <h2
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  color: T.teal,
                  fontSize: "clamp(2rem,3.5vw,3rem)",
                  marginTop: 16,
                }}
              >
                Practice <span style={{ fontWeight: 600 }}>Areas</span>
              </h2>
              <div
                style={{
                  width: 60,
                  height: 1,
                  background: T.goldLight,
                  marginTop: 16,
                }}
              />
            </div>
            <p
              style={{
                fontFamily: sans,
                fontWeight: 300,
                fontSize: "0.88rem",
                color: T.muted,
                maxWidth: 320,
                lineHeight: 1.85,
              }}
            >
              Each engagement is tailored — we do not apply generic frameworks
              to complex leadership mandates.
            </p>
          </div>
        </Reveal>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "340px 1fr" }}>
        {/* Left: tabs */}
        <div
          style={{
            background: T.warm,
            borderRight: `1px solid ${T.borderGold}`,
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "22px 32px",
                borderLeft:
                  active === i
                    ? `3px solid ${T.goldLight}`
                    : "3px solid transparent",
                background: active === i ? "#fff" : "transparent",
                cursor: "pointer",
                transition: "all 0.25s",
                borderBottom: "none",
                borderTop: "none",
                borderRight: "none",
              }}
            >
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  letterSpacing: "0.03em",
                  color: active === i ? T.goldLight : T.teal,
                  marginBottom: 4,
                  transition: "color 0.25s",
                }}
              >
                {s.title}
              </p>
              <p
                style={{
                  fontFamily: sans,
                  fontSize: "0.68rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: T.muted,
                  fontWeight: 300,
                }}
              >
                {s.tag}
              </p>
            </button>
          ))}
        </div>

        {/* Right: full-bleed photo with text */}
        <div
          style={{ position: "relative", minHeight: 520, overflow: "hidden" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              style={{ position: "absolute", inset: 0 }}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={services[active].photo}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, rgba(6,21,26,0.88) 45%, rgba(6,21,26,0.5) 100%)",
                }}
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={`t-${active}`}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "3rem 3.5rem",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p
                style={{
                  fontFamily: sans,
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: T.goldLight,
                  marginBottom: 12,
                  fontWeight: 500,
                }}
              >
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(services.length).padStart(2, "0")}
              </p>
              <h3
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  color: "#fff",
                  fontSize: "2.6rem",
                  lineHeight: 1.12,
                  marginBottom: 8,
                }}
              >
                {services[active].title}
              </h3>
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: T.goldLight,
                  marginBottom: 20,
                }}
              />
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.9,
                  maxWidth: 520,
                  whiteSpace: "pre-line",
                }}
              >
                {services[active].content}
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
                {[
                  { dir: "prev", dis: active === 0 },
                  { dir: "next", dis: active === services.length - 1 },
                ].map((b) => (
                  <button
                    key={b.dir}
                    disabled={b.dis}
                    onClick={() =>
                      setActive((a) =>
                        b.dir === "prev"
                          ? Math.max(0, a - 1)
                          : Math.min(services.length - 1, a + 1),
                      )
                    }
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: `1px solid rgba(255,255,255,0.2)`,
                      background: "transparent",
                      cursor: b.dis ? "not-allowed" : "pointer",
                      opacity: b.dis ? 0.25 : 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      transition: "all 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      if (!b.dis) {
                        e.currentTarget.style.borderColor = T.goldLight;
                        e.currentTarget.style.background = `${T.goldLight}18`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.2)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      style={{ width: 14, height: 14 }}
                    >
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
  );
};

// ─── PROCESS ─────────────────────────────────────────────────────────────────
const Process = () => {
  const steps = [
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
  ];

  return (
    <section style={{ background: T.cream }}>
      <Divider />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 480,
        }}
      >
        {/* Image */}
        <div
          style={{ position: "relative", minHeight: 400, overflow: "hidden" }}
        >
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              inset: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(6,21,26,0.88) 0%, rgba(6,21,26,0.4) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              padding: "3rem",
            }}
          >
            <Reveal x={-30}>
              <p
                style={{
                  fontFamily: sans,
                  fontSize: "0.68rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: T.goldLight,
                  marginBottom: 16,
                  fontWeight: 500,
                }}
              >
                How We Work
              </p>
              <h2
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  color: "#fff",
                  fontSize: "clamp(2rem,3.5vw,3rem)",
                  lineHeight: 1.15,
                }}
              >
                Five Stages.
                <br />
                <span style={{ fontStyle: "italic", color: T.goldLight }}>
                  One Outcome.
                </span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "3.5rem clamp(2rem,4vw,4rem)",
          }}
        >
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "18px 0",
                  borderBottom: `1px solid ${T.borderGold}`,
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.paddingLeft = "8px")
                }
                onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
              >
                <span
                  style={{
                    fontFamily: serif,
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: `${T.goldLight}50`,
                    flexShrink: 0,
                    width: 36,
                    textAlign: "right",
                  }}
                >
                  {s.n}
                </span>
                <div
                  style={{
                    width: 1,
                    height: 32,
                    background: T.borderGold,
                    flexShrink: 0,
                    transition: "background 0.3s",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: sans,
                      fontWeight: 600,
                      fontSize: "0.88rem",
                      color: T.teal,
                      marginBottom: 4,
                    }}
                  >
                    {s.label}
                  </p>
                  <p
                    style={{
                      fontFamily: sans,
                      fontWeight: 300,
                      fontSize: "0.8rem",
                      color: T.muted,
                      lineHeight: 1.7,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── FUNCTIONAL COVERAGE ─────────────────────────────────────────────────────
const FunctionalCoverage = () => {
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
        "Growth leadership demands commercial acumen, customer insight, and execution discipline. We appoint Marketing and Sales leaders who translate strategy into measurable revenue impact.",
    },
    {
      title: "Human Resources",
      content:
        "Human capital strategy is central to organisational performance. We recruit HR leaders across talent strategy, organisational effectiveness, succession planning, and change management.",
    },
    {
      title: "Supply Chain",
      content:
        "Supply chain leadership is increasingly strategic, balancing efficiency, resilience, and risk management. We identify leaders capable of driving operational excellence.",
    },
    {
      title: "CSR & Sustainability",
      content:
        "We support organisations in appointing leaders who integrate economic performance with environmental stewardship and stakeholder accountability.",
    },
    {
      title: "Artificial Intelligence",
      content:
        "We identify leaders who can bridge technology and strategy, embed responsible innovation, and translate digital capability into commercial advantage.",
    },
  ];

  return (
    <section
      style={{ background: T.ivory, padding: "6rem clamp(2rem,8vw,7rem)" }}
    >
      <Divider />
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "end",
              marginBottom: 56,
            }}
          >
            <div>
              <Label>Expertise</Label>
              <h2
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  color: T.teal,
                  fontSize: "clamp(2rem,3.5vw,3rem)",
                  marginTop: 16,
                }}
              >
                Functional <span style={{ fontWeight: 600 }}>Coverage</span>
              </h2>
              <div
                style={{
                  width: 60,
                  height: 1,
                  background: T.goldLight,
                  marginTop: 16,
                }}
              />
            </div>
            <p
              style={{
                fontFamily: sans,
                fontWeight: 300,
                fontSize: "0.92rem",
                color: T.muted,
                lineHeight: 1.85,
              }}
            >
              Our practice spans all major executive functions — enabling us to
              serve complex, cross-functional leadership mandates with genuine
              sector depth.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            border: `1px solid ${T.border}`,
            background: "#fff",
          }}
        >
          {functions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              style={{
                padding: "2rem 2.2rem",
                borderRight: i % 2 === 0 ? `1px solid ${T.border}` : "none",
                borderBottom:
                  i < functions.length - 2 ? `1px solid ${T.border}` : "none",
                position: "relative",
                transition: "background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = T.cream)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 0,
                  height: 3,
                  background: T.goldLight,
                  transition: "width 0.4s",
                }}
                ref={(el) => {
                  if (el) {
                    const p = el.parentElement;
                    p.addEventListener(
                      "mouseenter",
                      () => (el.style.width = "100%"),
                    );
                    p.addEventListener(
                      "mouseleave",
                      () => (el.style.width = "0"),
                    );
                  }
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: 16,
                  right: 20,
                  fontFamily: serif,
                  fontSize: "3.5rem",
                  fontWeight: 700,
                  color: `${T.teal}04`,
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  color: T.teal,
                  marginBottom: 10,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 300,
                  fontSize: "0.82rem",
                  color: T.muted,
                  lineHeight: 1.85,
                  paddingRight: 24,
                }}
              >
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CLOSING STRIP ────────────────────────────────────────────────────────────
const ClosingStrip = () => (
  <section
    style={{ position: "relative", minHeight: "40vh", overflow: "hidden" }}
  >
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&q=80"
      alt=""
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to bottom, rgba(6,21,26,0.65) 0%, rgba(18,56,69,0.88) 100%)",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        background: `${T.goldLight}40`,
      }}
    />
    <div
      style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "40vh",
        padding: "5rem 2rem",
        textAlign: "center",
      }}
    >
      <Reveal>
        <p
          style={{
            fontFamily: sans,
            fontSize: "0.68rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: T.goldLight,
            marginBottom: 24,
            fontWeight: 500,
          }}
        >
          The PivotEdge Difference
        </p>
        <blockquote
          style={{
            fontFamily: serif,
            fontWeight: 300,
            color: "#fff",
            fontSize: "clamp(1.6rem,3vw,2.6rem)",
            lineHeight: 1.35,
            maxWidth: 720,
            margin: "0 auto 20px",
          }}
        >
          "Leadership appointments are among the most consequential decisions an
          organisation makes."
        </blockquote>
        <div
          style={{
            width: 64,
            height: 1,
            background: `${T.goldLight}60`,
            margin: "0 auto 12px",
          }}
        />
        <p
          style={{
            fontFamily: sans,
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: T.goldLight,
            fontWeight: 500,
          }}
        >
          — PivotEdge Partners
        </p>
      </Reveal>
    </div>
  </section>
);

export default function Services() {
  return (
    <div style={{ fontFamily: sans }}>
      <Hero />
      <StatsBar />
      <PracticeAreas />
      <Process />
      <FunctionalCoverage />
      <ClosingStrip />
    </div>
  );
}
