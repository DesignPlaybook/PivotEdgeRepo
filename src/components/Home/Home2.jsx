import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const T = {
  ivory: "#FAFAF8",
  cream: "#F5F2EB",
  warm: "#EDE9E0",
  teal: "#0F4C5C",
  tealDeep: "#0A3545",
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

const GoldRule = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div style={{ width: 28, height: 1, background: T.goldLight }} />
  </div>
);

const Label = ({ children, center = false, className = "" }) => (
  <div
    className={`flex items-center gap-2.5 ${center ? "justify-center" : ""} ${className}`}
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

// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: T.tealDeep,
        display: "flex",
        alignItems: "flex-end",
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
              "linear-gradient(135deg, rgba(10,53,69,0.92) 0%, rgba(15,76,92,0.78) 50%, rgba(10,53,69,0.88) 100%)",
          }}
        />
      </motion.div>

      {/* Fine vertical grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.035,
          backgroundImage: `repeating-linear-gradient(90deg, ${T.goldLight}, ${T.goldLight} 1px, transparent 1px, transparent 120px)`,
          pointerEvents: "none",
        }}
      />

      {/* Ornamental circle top-right */}
      <div
        style={{
          position: "absolute",
          top: 60,
          right: 80,
          opacity: 0.08,
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 240 240"
          fill="none"
          style={{ width: 200, height: 200 }}
        >
          <circle
            cx="120"
            cy="120"
            r="110"
            stroke={T.goldLight}
            strokeWidth="0.5"
          />
          <circle
            cx="120"
            cy="120"
            r="80"
            stroke={T.goldLight}
            strokeWidth="0.3"
            strokeDasharray="3 9"
          />
          <circle
            cx="120"
            cy="120"
            r="50"
            stroke={T.goldLight}
            strokeWidth="0.8"
          />
          <polygon
            points="120,80 145,100 120,120 95,100"
            stroke={T.goldLight}
            strokeWidth="0.8"
            fill="none"
          />
          <circle cx="120" cy="120" r="5" fill={T.goldLight} />
        </svg>
      </div>

      <motion.div
        style={{
          opacity,
          position: "relative",
          zIndex: 10,
          width: "100%",
          paddingBottom: "8rem",
          paddingLeft: "clamp(2rem,8vw,7rem)",
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
              marginBottom: 36,
            }}
          >
            <div style={{ width: 40, height: 1, background: T.goldLight }} />
            <span
              style={{
                fontFamily: sans,
                fontSize: "0.7rem",
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color: T.goldLight,
                fontWeight: 500,
              }}
            >
              Executive Search & Leadership Advisory
            </span>
          </div>

          <h1
            style={{
              fontFamily: serif,
              fontWeight: 300,
              color: "#fff",
              lineHeight: 1.06,
              marginBottom: 24,
              maxWidth: 720,
            }}
          >
            <span
              style={{ display: "block", fontSize: "clamp(3.5rem,7vw,6.5rem)" }}
            >
              Placing Leaders
            </span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(3.5rem,7vw,6.5rem)",
                fontWeight: 600,
                fontStyle: "italic",
                color: T.goldLight,
              }}
            >
              Who Define
            </span>
            <span
              style={{ display: "block", fontSize: "clamp(3.5rem,7vw,6.5rem)" }}
            >
              the Future.
            </span>
          </h1>

          <div
            style={{
              width: 80,
              height: 1,
              background: `linear-gradient(to right, ${T.goldLight}, transparent)`,
              marginBottom: 28,
            }}
          />

          <p
            style={{
              fontFamily: sans,
              fontWeight: 300,
              fontSize: "1.08rem",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 520,
              marginBottom: 48,
            }}
          >
            We partner with Boards and senior executives to identify, evaluate,
            and secure transformative leadership — precisely aligned with
            strategy, governance, and long-term enterprise performance.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link
              to="/services"
              style={{
                fontFamily: sans,
                fontSize: "0.75rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 500,
                background: T.goldLight,
                color: "#fff",
                padding: "16px 36px",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = T.gold)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = T.goldLight)
              }
            >
              Explore Services
            </Link>
            <Link
              to="/about"
              style={{
                fontFamily: sans,
                fontSize: "0.75rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 400,
                color: "rgba(255,255,255,0.75)",
                padding: "16px 36px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = T.goldLight;
                e.currentTarget.style.color = T.goldLight;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = "rgba(255,255,255,0.75)";
              }}
            >
              Our Philosophy
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: sans,
            fontSize: "0.6rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: `${T.goldLight}60`,
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{
            width: 1,
            height: 48,
            background: `linear-gradient(to bottom, ${T.goldLight}80, transparent)`,
          }}
        />
      </motion.div>
    </section>
  );
};

// ─── INTRO STATEMENT ─────────────────────────────────────────────────────────
const IntroStatement = () => (
  <section
    style={{ background: T.ivory, padding: "7rem clamp(2rem,8vw,7rem)" }}
  >
    <div style={{ maxWidth: 1180, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        <Reveal>
          <Label>Why Leadership Matters</Label>
          <h2
            style={{
              fontFamily: serif,
              fontWeight: 300,
              color: T.teal,
              lineHeight: 1.12,
              marginTop: 20,
              fontSize: "clamp(2.4rem,4vw,3.8rem)",
            }}
          >
            Leadership is the single most consequential{" "}
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 600,
                color: T.goldLight,
              }}
            >
              variable
            </em>{" "}
            in enterprise performance.
          </h2>
          <div
            style={{
              width: 60,
              height: 1,
              background: T.goldLight,
              margin: "28px 0",
            }}
          />
        </Reveal>
        <Reveal delay={0.15}>
          <p
            style={{
              fontFamily: sans,
              fontWeight: 300,
              fontSize: "1rem",
              lineHeight: 1.95,
              color: T.slate,
              marginTop: 56,
            }}
          >
            In complex and rapidly evolving markets, organisations require
            leaders who combine strategic judgement with operational clarity,
            cultural alignment, and governance awareness. PivotEdge Partners
            approaches every search with the rigour these decisions demand.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 40,
            }}
          >
            {[
              {
                title: "Strategic Direction",
                body: "Leadership defines direction, ensuring clarity in decision-making and alignment across all functions.",
              },
              {
                title: "Governance & Culture",
                body: "Strong leaders strengthen governance frameworks and shape how teams operate and perform.",
              },
              {
                title: "Enterprise Impact",
                body: "C-suite appointments carry enterprise-wide consequences for performance and long-term value.",
              },
              {
                title: "Sustainable Growth",
                body: "The right leader transforms organisational ambition into measurable, sustained outcomes.",
              },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  style={{
                    borderTop: `2px solid ${i === 0 ? T.goldLight : T.border}`,
                    paddingTop: 16,
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderTopColor = T.goldLight)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderTopColor =
                      i === 0 ? T.goldLight : T.border)
                  }
                >
                  <h4
                    style={{
                      fontFamily: sans,
                      fontWeight: 600,
                      fontSize: "0.82rem",
                      color: T.teal,
                      marginBottom: 8,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {c.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: sans,
                      fontWeight: 300,
                      fontSize: "0.82rem",
                      color: T.muted,
                      lineHeight: 1.75,
                    }}
                  >
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

// ─── SERVICES ─────────────────────────────────────────────────────────────────
const ServicesSection = () => {
  const services = [
    {
      n: "01",
      title: "Executive Search",
      body: "Retained search for Board, CEO, and senior functional leadership roles aligned with long-term strategy and enterprise performance.",
      href: "/services",
    },
    {
      n: "02",
      title: "Boards & Governance",
      body: "Advisory support for Board composition, Director appointments, and governance succession aligned with organisational priorities.",
      href: "/services",
    },
    {
      n: "03",
      title: "CEO & Enterprise Leadership",
      body: "Identification and evaluation of enterprise leaders capable of aligning strategy, governance, and execution at scale.",
      href: "/services",
    },
    {
      n: "04",
      title: "AI & Emerging Leadership",
      body: "Search for AI and digital leaders driving intelligent transformation and redefining enterprise value creation.",
      href: "/services",
    },
  ];

  return (
    <section
      style={{ background: T.teal, padding: "7rem clamp(2rem,8vw,7rem)" }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 64,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <Reveal>
            <Label>What We Do</Label>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 300,
                color: "#fff",
                fontSize: "clamp(2.2rem,4vw,3.4rem)",
                lineHeight: 1.12,
                marginTop: 16,
              }}
            >
              Leadership Advisory &{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 600,
                  color: T.goldLight,
                }}
              >
                Executive Search
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              style={{
                fontFamily: sans,
                fontWeight: 300,
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.5)",
                maxWidth: 340,
                lineHeight: 1.85,
                textAlign: "right",
              }}
            >
              We partner with Boards and senior executives to secure leadership
              that aligns strategy, governance, and long-term enterprise
              performance.
            </p>
          </Reveal>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Link
                to={s.href}
                style={{ textDecoration: "none", display: "block" }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    background: T.teal,
                    padding: "2.5rem 2rem",
                    borderTop: `2px solid transparent`,
                    transition: "border-color 0.3s, background 0.3s",
                    cursor: "pointer",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderTopColor = T.goldLight;
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderTopColor = "transparent";
                    e.currentTarget.style.background = T.teal;
                  }}
                >
                  <span
                    style={{
                      fontFamily: serif,
                      fontSize: "2.8rem",
                      fontWeight: 300,
                      color: `${T.goldLight}20`,
                      display: "block",
                      marginBottom: 24,
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </span>
                  <h3
                    style={{
                      fontFamily: sans,
                      fontWeight: 600,
                      fontSize: "0.92rem",
                      color: "#fff",
                      marginBottom: 12,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: sans,
                      fontWeight: 300,
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.8,
                    }}
                  >
                    {s.body}
                  </p>
                  <div
                    style={{
                      marginTop: 24,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 16,
                        height: 1,
                        background: `${T.goldLight}60`,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: sans,
                        fontSize: "0.65rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: `${T.goldLight}80`,
                      }}
                    >
                      Learn more
                    </span>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── HOW WE WORK ──────────────────────────────────────────────────────────────
const HowWeWork = () => {
  const steps = [
    {
      n: "I",
      title: "Strategic Mandate Definition",
      desc: "We begin with clarity — understanding business strategy, organisational context, governance priorities, and leadership expectations.",
    },
    {
      n: "II",
      title: "Market Mapping",
      desc: "We conduct comprehensive market mapping to identify relevant leadership talent across industries and competitive landscapes.",
    },
    {
      n: "III",
      title: "Rigorous Evaluation",
      desc: "We apply structured evaluation frameworks to assess judgement, adaptability, cultural alignment, and long-term leadership impact.",
    },
    {
      n: "IV",
      title: "Stakeholder Alignment",
      desc: "We maintain close alignment with Boards throughout the process to ensure precision and confidence in decision-making.",
    },
  ];

  return (
    <section
      style={{ background: T.cream, padding: "7rem clamp(2rem,8vw,7rem)" }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <Label center>How We Work</Label>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 300,
                color: T.teal,
                fontSize: "clamp(2.2rem,4vw,3.4rem)",
                lineHeight: 1.12,
                marginTop: 16,
              }}
            >
              A Structured &{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 600,
                  color: T.goldLight,
                }}
              >
                Disciplined
              </em>{" "}
              Approach
            </h2>
            <div
              style={{
                width: 1,
                height: 48,
                background: `linear-gradient(to bottom, ${T.goldLight}, transparent)`,
                margin: "24px auto 0",
              }}
            />
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "3rem",
          }}
        >
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                style={{ textAlign: "center", cursor: "default" }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    border: `1px solid ${T.borderGold}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    transition: "border-color 0.3s, background 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = T.goldLight;
                    e.currentTarget.style.background = `${T.goldLight}12`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = T.borderGold;
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span
                    style={{
                      fontFamily: serif,
                      fontSize: "1.2rem",
                      color: T.goldLight,
                    }}
                  >
                    {s.n}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: sans,
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    color: T.teal,
                    marginBottom: 12,
                    letterSpacing: "0.03em",
                  }}
                >
                  {s.title}
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
                  {s.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div style={{ textAlign: "center", marginTop: 64 }}>
            <div
              style={{
                display: "inline-block",
                border: `1px solid ${T.borderGold}`,
                padding: "28px 48px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -1,
                  left: 48,
                  right: 48,
                  height: 1,
                  background: `linear-gradient(to right, transparent, ${T.goldLight}, transparent)`,
                }}
              />
              <p
                style={{
                  fontFamily: serif,
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "1.15rem",
                  color: T.teal,
                  margin: 0,
                }}
              >
                "Every engagement is treated as a singular strategic
                responsibility."
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ─── DOMAINS ─────────────────────────────────────────────────────────────────
const DomainsSection = () => {
  const domains = [
    {
      title: "Industrial",
      img: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    },
    {
      title: "Real Estate & Infrastructure",
      img: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    },
    {
      title: "Consumer",
      img: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg",
    },
    {
      title: "Healthcare & Life Sciences",
      img: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    },
    {
      title: "Banking & Financial Services",
      img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800",
    },
    {
      title: "Technology, Media & Telecoms",
      img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    },
  ];

  return (
    <section
      style={{ background: T.tealDeep, padding: "7rem clamp(2rem,8vw,7rem)" }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 56,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <Label>Where We Operate</Label>
              <h2
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  color: "#fff",
                  fontSize: "clamp(2.2rem,4vw,3.4rem)",
                  marginTop: 16,
                }}
              >
                Industries We{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: T.goldLight,
                  }}
                >
                  Serve
                </em>
              </h2>
            </div>
            <Link
              to="/domains"
              style={{
                fontFamily: sans,
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: T.goldLight,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 500,
              }}
            >
              View All Domains <span>→</span>
            </Link>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 16,
          }}
        >
          {domains.map((d, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <motion.div
                whileHover="hover"
                style={{
                  position: "relative",
                  height: 260,
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <motion.img
                  variants={{ hover: { scale: 1.08 } }}
                  transition={{ duration: 0.6 }}
                  src={d.img}
                  alt={d.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(10,53,69,0.92) 30%, rgba(10,53,69,0.3) 100%)",
                  }}
                />
                <motion.div
                  variants={{ hover: { width: "100%" } }}
                  transition={{ duration: 0.4 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 2,
                    width: 0,
                    background: T.goldLight,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "20px 24px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: sans,
                      fontWeight: 500,
                      fontSize: "0.9rem",
                      color: "#fff",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {d.title}
                  </h3>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CLOSING CTA ─────────────────────────────────────────────────────────────
const ClosingSection = () => (
  <section
    style={{ background: T.ivory, padding: "7rem clamp(2rem,8vw,7rem)" }}
  >
    <div
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        alignItems: "center",
      }}
    >
      <Reveal>
        <Label>Closing Perspective</Label>
        <h2
          style={{
            fontFamily: serif,
            fontWeight: 300,
            color: T.teal,
            fontSize: "clamp(2rem,3.5vw,3rem)",
            lineHeight: 1.15,
            marginTop: 20,
          }}
        >
          Executive Search is a{" "}
          <em
            style={{ fontStyle: "italic", fontWeight: 600, color: T.goldLight }}
          >
            Strategic Responsibility.
          </em>
        </h2>
        <div
          style={{
            width: 60,
            height: 1,
            background: T.goldLight,
            margin: "28px 0",
          }}
        />
        <p
          style={{
            fontFamily: sans,
            fontWeight: 300,
            fontSize: "0.95rem",
            color: T.slate,
            lineHeight: 1.9,
            maxWidth: 440,
            marginBottom: 40,
          }}
        >
          When leadership capability aligns precisely with organisational
          ambition, performance becomes sustainable and governance becomes
          stronger. That is where the advantage begins.
        </p>
        <div style={{ display: "flex", gap: 48 }}>
          {[
            ["25+", "Years Experience"],
            ["300+", "Mandates Delivered"],
          ].map(([v, l]) => (
            <div key={l}>
              <p
                style={{
                  fontFamily: serif,
                  fontSize: "2.4rem",
                  fontWeight: 300,
                  color: T.goldLight,
                  lineHeight: 1,
                }}
              >
                {v}
              </p>
              <p
                style={{
                  fontFamily: sans,
                  fontSize: "0.68rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: T.muted,
                  marginTop: 6,
                }}
              >
                {l}
              </p>
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            marginTop: 40,
            fontFamily: sans,
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 500,
            color: T.teal,
            padding: "15px 32px",
            border: `1px solid ${T.teal}`,
            textDecoration: "none",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = T.teal;
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = T.teal;
          }}
        >
          Begin a Conversation <span>→</span>
        </Link>
      </Reveal>

      <Reveal delay={0.15}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
        >
          {[
            {
              title: "Services",
              desc: "Executive Search, Succession Planning, Career Transition, Interim Management, Diversity.",
            },
            {
              title: "Functions",
              desc: "Boards & Governance, CEO, CFO, Marketing & Sales, HR, Supply Chain, Sustainability, AI.",
            },
            {
              title: "Industries",
              desc: "Industrial, Real Estate, Consumer, Healthcare, Banking & Financial Services, Technology.",
            },
            {
              title: "Our Philosophy",
              desc: "Leadership alignment drives sustainable performance. Strategy + governance + culture.",
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{
                background: "#fff",
                border: `1px solid ${T.border}`,
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(to right, ${T.goldLight}, transparent)`,
                }}
              />
              <h4
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: T.teal,
                  marginBottom: 10,
                }}
              >
                {c.title}
              </h4>
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 300,
                  fontSize: "0.78rem",
                  color: T.muted,
                  lineHeight: 1.75,
                }}
              >
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

// ─── EXPORT ───────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ fontFamily: sans }}>
      <Hero />
      <Divider />
      <IntroStatement />
      <Divider />
      <ServicesSection />
      <Divider />
      <HowWeWork />
      <Divider />
      <DomainsSection />
      <Divider />
      <ClosingSection />
    </div>
  );
}
