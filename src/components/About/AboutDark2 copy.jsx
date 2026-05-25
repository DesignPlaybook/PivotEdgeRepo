import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";

const T = {
  ivory: "#FAFAF8",
  cream: "#F5F2EB",
  warm: "#EDE9E0",
  teal: "#0F4C5C",
  tealDeep: "#0A3545",
  dark: "#123845",
  gold: "#B8922A",
  goldLight: "#C9A23F",
  charcoal: "#2C3A42",
  slate: "#4A5C65",
  muted: "#7A8E96",
  border: "rgba(15,76,92,0.10)",
  borderGold: "rgba(184,146,42,0.25)",
};
const serif = "'Cormorant Garamond', Georgia, serif";
const sans = "'Jost', sans-serif";

// ─── Primitives ───────────────────────────────────────────────────────────────
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

// ─── Animated Counter ─────────────────────────────────────────────────────────
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return c.stop;
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const op = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "88vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        background: T.tealDeep,
      }}
    >
      <motion.div style={{ y: imgY, position: "absolute", inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop"
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
              "linear-gradient(to bottom, rgba(10,53,69,0.7) 0%, rgba(10,53,69,0.85) 60%, rgba(10,53,69,0.96) 100%)",
          }}
        />
      </motion.div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.035,
          backgroundImage: `repeating-linear-gradient(0deg,${T.goldLight},${T.goldLight} 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,${T.goldLight},${T.goldLight} 1px,transparent 1px,transparent 80px)`,
          pointerEvents: "none",
        }}
      />

      <motion.div
        style={{
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
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
            <div style={{ width: 32, height: 1, background: T.goldLight }} />
          </div>
          <h1
            style={{
              fontFamily: serif,
              fontWeight: 300,
              color: "#fff",
              lineHeight: 1.06,
              maxWidth: 740,
              fontSize: "clamp(3rem,6vw,5.5rem)",
              marginBottom: 20,
            }}
          >
            About <br />
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 600,
                color: T.goldLight,
              }}
            >
              PivotEdge Partners
            </em>
          </h1>
          <div
            style={{
              width: 80,
              height: 1,
              background: `linear-gradient(to right, ${T.goldLight}, transparent)`,
              marginBottom: 24,
            }}
          />
          <p
            style={{
              fontFamily: sans,
              fontWeight: 300,
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.9,
              maxWidth: 540,
            }}
          >
            Leadership advisory and executive search grounded in judgement,
            integrity, and long-term enterprise impact.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

// ─── STATS BAR ────────────────────────────────────────────────────────────────
const StatsBar = () => {
  const stats = [
    { value: 20, suffix: "+", label: "Years of Practice" },
    { value: 500, suffix: "+", label: "Leadership Mandates" },
    { value: 92, suffix: "%", label: "Retention Rate" },
    { value: 300, suffix: "+", label: "C-Suite Placements" },
    { value: 6, suffix: "", label: "Industry Verticals" },
    { value: 30, suffix: "+", label: "Countries Reached" },
  ];
  return (
    <section
      style={{ background: T.teal, position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage: `radial-gradient(${T.goldLight} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)" }}>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            style={{
              textAlign: "center",
              padding: "40px 16px",
              borderRight: i < 5 ? `1px solid rgba(255,255,255,0.06)` : "none",
            }}
          >
            <div
              style={{
                fontFamily: serif,
                fontSize: "2.4rem",
                fontWeight: 600,
                color: T.goldLight,
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p
              style={{
                fontFamily: sans,
                fontSize: "0.68rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
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

// ─── PHILOSOPHY ──────────────────────────────────────────────────────────────
const Philosophy = () => {
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
    <section id="philosophy" style={{ background: T.ivory }}>
      {/* Full-bleed image panel */}
      <div
        style={{
          position: "relative",
          height: "55vh",
          minHeight: 400,
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(15,76,92,0.92) 40%, rgba(15,76,92,0.55) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "0 clamp(2rem,8vw,7rem)",
              width: "100%",
            }}
          >
            <Reveal x={-40}>
              <Label>Our Leadership Philosophy</Label>
              <h2
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  color: "#fff",
                  fontSize: "clamp(2.2rem,4vw,3.5rem)",
                  lineHeight: 1.12,
                  marginTop: 16,
                  maxWidth: 600,
                }}
              >
                Leadership is not defined by{" "}
                <em style={{ fontStyle: "normal", color: T.goldLight }}>
                  title.
                </em>
                <br />
                It is defined by{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: T.goldLight,
                  }}
                >
                  impact.
                </em>
              </h2>
              <div
                style={{
                  width: 56,
                  height: 1,
                  background: T.goldLight,
                  margin: "20px 0 16px",
                }}
              />
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.9,
                  maxWidth: 500,
                }}
              >
                At PivotEdge Partners, leadership is evaluated not only by
                experience — but by judgement, adaptability, and long-term
                impact on organisational performance.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "5rem clamp(2rem,8vw,7rem)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 16,
          }}
        >
          {pillars.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                style={{
                  background: "#fff",
                  border: `1px solid ${T.border}`,
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
                onMouseEnter={(e) =>
                  (e.querySelector(".top-line").style.width = "100%")
                }
                onMouseLeave={(e) =>
                  (e.querySelector(".top-line").style.width = "0")
                }
              >
                <div
                  className="top-line"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 2,
                    width: 0,
                    background: T.goldLight,
                    transition: "width 0.5s",
                  }}
                />
                <span
                  style={{
                    fontFamily: serif,
                    fontSize: "3rem",
                    fontWeight: 300,
                    color: `${T.goldLight}20`,
                    display: "block",
                    lineHeight: 1,
                    marginBottom: 20,
                  }}
                >
                  {p.num}
                </span>
                <h3
                  style={{
                    fontFamily: sans,
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    color: T.teal,
                    marginBottom: 8,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: sans,
                    fontWeight: 300,
                    fontSize: "0.82rem",
                    color: T.muted,
                    lineHeight: 1.8,
                  }}
                >
                  {p.body}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── WHO WE ARE ──────────────────────────────────────────────────────────────
const WhoWeAre = () => {
  const points = [
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
    <section
      style={{ background: T.dark, position: "relative", overflow: "hidden" }}
    >
      <Divider />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 600,
        }}
      >
        {/* Image */}
        <div
          style={{ position: "relative", overflow: "hidden", minHeight: 400 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop"
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
                "linear-gradient(to right, rgba(18,56,69,0.2) 0%, rgba(18,56,69,0.7) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "3rem",
            }}
          >
            <Reveal x={-30}>
              <Label>Who We Are</Label>
              <h2
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  color: "#fff",
                  fontSize: "clamp(2rem,3.5vw,3rem)",
                  lineHeight: 1.15,
                  marginTop: 12,
                }}
              >
                Advisors to the{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: T.goldLight,
                  }}
                >
                  apex
                </em>{" "}
                of leadership
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4rem clamp(2rem,5vw,4rem)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.025,
              backgroundImage: `radial-gradient(${T.goldLight} 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <Reveal delay={0.1}>
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 300,
                  fontSize: "0.92rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.9,
                  marginBottom: 36,
                }}
              >
                PivotEdge Partners works with Boards, Chief Executives, and
                senior leadership teams — focused on functional heads and above,
                where leadership directly shapes enterprise performance.
              </p>
            </Reveal>
            <div>
              {points.map((p, i) => (
                <Reveal key={i} delay={i * 0.09}>
                  <div
                    style={{
                      display: "flex",
                      gap: 20,
                      alignItems: "flex-start",
                      padding: "20px 0",
                      borderBottom: `1px solid rgba(255,255,255,0.06)`,
                      transition: "padding-left 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.paddingLeft = "8px")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.paddingLeft = "0")
                    }
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: T.goldLight,
                        flexShrink: 0,
                        marginTop: 4,
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontFamily: sans,
                          fontSize: "0.65rem",
                          letterSpacing: "0.25em",
                          textTransform: "uppercase",
                          color: T.goldLight,
                          fontWeight: 500,
                          marginBottom: 4,
                        }}
                      >
                        {p.label}
                      </p>
                      <p
                        style={{
                          fontFamily: sans,
                          fontWeight: 300,
                          fontSize: "0.85rem",
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.8,
                        }}
                      >
                        {p.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── HOW WE WORK ──────────────────────────────────────────────────────────────
const HowWeWork = () => {
  const points = [
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
    <section style={{ background: T.warm }}>
      <Divider />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 560,
        }}
      >
        {/* Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4rem clamp(2rem,5vw,5rem)",
          }}
        >
          <Reveal x={-30}>
            <Label>How We Work</Label>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 300,
                color: T.teal,
                fontSize: "clamp(2rem,3.5vw,3rem)",
                lineHeight: 1.12,
                marginTop: 16,
                marginBottom: 8,
              }}
            >
              Depth over{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 600,
                  color: T.goldLight,
                }}
              >
                speed.
              </em>
              <br />
              Precision over volume.
            </h2>
            <div
              style={{
                width: 56,
                height: 1,
                background: T.goldLight,
                margin: "20px 0",
              }}
            />
            <p
              style={{
                fontFamily: sans,
                fontWeight: 300,
                fontSize: "0.92rem",
                color: T.slate,
                lineHeight: 1.9,
                maxWidth: 400,
                marginBottom: 36,
              }}
            >
              Every engagement is treated as a strategic mandate — never a
              transactional exercise in filling a position.
            </p>
          </Reveal>
          {points.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  padding: "20px 0",
                  borderBottom: `1px solid ${T.borderGold}`,
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = "12px";
                  e.currentTarget.style.background = "rgba(255,255,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = "0";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span
                  style={{
                    fontFamily: serif,
                    fontSize: "1.6rem",
                    fontWeight: 300,
                    color: `${T.goldLight}50`,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  {p.num}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: sans,
                      fontSize: "0.65rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: T.goldLight,
                      fontWeight: 500,
                      marginBottom: 4,
                    }}
                  >
                    {p.label}
                  </p>
                  <p
                    style={{
                      fontFamily: sans,
                      fontWeight: 300,
                      fontSize: "0.84rem",
                      color: T.slate,
                      lineHeight: 1.8,
                    }}
                  >
                    {p.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Image */}
        <div
          style={{ position: "relative", overflow: "hidden", minHeight: 400 }}
        >
          <img
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2070&auto=format&fit=crop"
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
                "linear-gradient(to left, rgba(18,56,69,0.1) 0%, rgba(18,56,69,0.55) 100%)",
            }}
          />
          <div
            style={{ position: "absolute", bottom: 40, left: 40, right: 40 }}
          >
            <Reveal x={30}>
              <div
                style={{
                  borderLeft: `3px solid ${T.goldLight}`,
                  paddingLeft: 24,
                }}
              >
                <p
                  style={{
                    fontFamily: serif,
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "1.1rem",
                    color: "#fff",
                    lineHeight: 1.7,
                    marginBottom: 12,
                  }}
                >
                  "Every engagement is treated as a singular strategic
                  responsibility."
                </p>
                <p
                  style={{
                    fontFamily: sans,
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: T.goldLight,
                    fontWeight: 500,
                  }}
                >
                  — PivotEdge Partners
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── INDUSTRIES ──────────────────────────────────────────────────────────────
const Industries = () => {
  const [active, setActive] = useState(0);
  const industries = [
    {
      label: "Industrial",
      tag: "Manufacturing · Engineering · Energy",
      desc: "Leaders capable of modernising operations, improving productivity, and navigating cyclical pressures with strategic discipline.",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80",
    },
    {
      label: "Real Estate & Infrastructure",
      tag: "Property · Development · Infrastructure",
      desc: "Disciplined executives who manage capital-intensive assets, long-cycle value creation, and complex stakeholder environments.",
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    },
    {
      label: "Consumer",
      tag: "Retail · FMCG · Brand",
      desc: "Agile leaders who understand market dynamics, brand positioning, and the pace of digital disruption in consumer markets.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    },
    {
      label: "Healthcare & Life Sciences",
      tag: "Healthcare · Pharma · MedTech",
      desc: "Leadership capable of navigating innovation, regulation, and the complex stakeholder landscape of healthcare organisations.",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    },
    {
      label: "Banking & Financial Services",
      tag: "Banking · Insurance · Asset Management",
      desc: "Executives who combine financial stewardship with transformation capability, risk management, and governance credibility.",
      img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    },
    {
      label: "Technology, Media & Telecom",
      tag: "Technology · Media · Telecom",
      desc: "Leaders who scale platforms, drive competitive differentiation, and embed innovation across digital-first organisations.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    },
  ];

  return (
    <section style={{ background: T.dark }}>
      <Divider />
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "5rem clamp(2rem,8vw,7rem)",
        }}
      >
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Label center>Where We Operate</Label>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 300,
                color: "#fff",
                fontSize: "clamp(2rem,3.5vw,3.2rem)",
                marginTop: 16,
              }}
            >
              Industries We{" "}
              <span style={{ fontWeight: 600, color: T.goldLight }}>Serve</span>
            </h2>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            border: `1px solid rgba(201,162,63,0.15)`,
          }}
        >
          {/* Tabs */}
          <div style={{ background: "#0a2d38" }}>
            {industries.map((ind, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "20px 28px",
                  background:
                    active === i ? "rgba(201,162,63,0.1)" : "transparent",
                  borderLeft:
                    active === i
                      ? `3px solid ${T.goldLight}`
                      : "3px solid transparent",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  cursor: "pointer",
                  transition: "all 0.25s",
                }}
              >
                <p
                  style={{
                    fontFamily: sans,
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    color:
                      active === i ? T.goldLight : "rgba(255,255,255,0.55)",
                  }}
                >
                  {ind.label}
                </p>
              </button>
            ))}
          </div>

          {/* Content */}
          <div
            style={{ position: "relative", minHeight: 420, overflow: "hidden" }}
          >
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: active === i ? "auto" : "none",
                }}
              >
                <img
                  src={ind.img}
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
                      "linear-gradient(to top, rgba(10,28,40,0.96) 35%, rgba(10,28,40,0.55) 70%, rgba(10,28,40,0.25) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 40,
                    left: 48,
                    right: 48,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: serif,
                      fontWeight: 300,
                      color: "#fff",
                      fontSize: "2.2rem",
                      marginBottom: 8,
                    }}
                  >
                    {ind.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: sans,
                      fontSize: "0.68rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: `${T.goldLight}90`,
                      marginBottom: 16,
                      fontWeight: 500,
                    }}
                  >
                    {ind.tag}
                  </p>
                  <div
                    style={{
                      width: 32,
                      height: 1,
                      background: T.goldLight,
                      marginBottom: 16,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: sans,
                      fontWeight: 300,
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.85,
                      maxWidth: 480,
                    }}
                  >
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── COMMITMENT ──────────────────────────────────────────────────────────────
const Commitment = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="commitment" ref={ref} style={{ background: T.dark }}>
      <Divider />
      {/* Full-bleed photo */}
      <div
        style={{
          position: "relative",
          height: "45vh",
          minHeight: 340,
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(18,56,69,0.5) 0%, rgba(18,56,69,0.9) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Label center>Our Commitment</Label>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 300,
                color: "#fff",
                fontSize: "clamp(2.2rem,4vw,3.5rem)",
                lineHeight: 1.12,
                marginTop: 16,
              }}
            >
              Built on{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 600,
                  color: T.goldLight,
                }}
              >
                integrity
              </em>
              <br />
              and accountability
            </h2>
          </motion.div>
        </div>
      </div>

      {/* 3 pillars */}
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "4rem clamp(2rem,8vw,7rem)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            border: `1px solid rgba(201,162,63,0.15)`,
          }}
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
              transition={{ delay: 0.2 + i * 0.15 }}
              style={{
                padding: "2.5rem",
                borderRight: i < 2 ? "1px solid rgba(201,162,63,0.15)" : "none",
                position: "relative",
                transition: "background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.04)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: T.goldLight,
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              />
              <span
                style={{
                  position: "absolute",
                  top: 20,
                  right: 24,
                  fontFamily: serif,
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: `${T.goldLight}06`,
                }}
              >
                {item.n}
              </span>
              <h3
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#fff",
                  marginBottom: 12,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 300,
                  fontSize: "0.84rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.85,
                }}
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
          style={{ textAlign: "center", marginTop: 56 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginBottom: 16,
            }}
          >
            <div
              style={{ width: 48, height: 1, background: `${T.goldLight}40` }}
            />
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: T.goldLight,
              }}
            />
            <div
              style={{ width: 48, height: 1, background: `${T.goldLight}40` }}
            />
          </div>
          <p
            style={{
              fontFamily: sans,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontSize: "0.78rem",
              color: T.goldLight,
            }}
          >
            That is where advantage begins.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default function About() {
  return (
    <div style={{ fontFamily: sans }}>
      <Hero />
      <StatsBar />
      <Philosophy />
      <WhoWeAre />
      <HowWeWork />
      <Industries />
      <Commitment />
    </div>
  );
}
