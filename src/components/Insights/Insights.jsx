import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  bg: "#F4F1EA",
  teal: "#0F4C5C",
  gold: "#C9A23F",
  goldLight: "#E8C96A",
  muted: "#5b6f77",
  border: "#e6dcc6",
};

// ─── Reusable primitives ──────────────────────────────────────────────────────
const GoldDivider = () => (
  <div
    style={{
      height: 1,
      background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
      margin: "0 auto",
      width: "60%",
    }}
  />
);

const GoldLabel = ({ children }) => (
  <span
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      color: C.gold,
      fontSize: "0.72rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      fontWeight: 500,
    }}
  >
    {children}
  </span>
);

const SectionWrapper = ({ children, dark = false, centered = false, id }) => (
  <section
    id={id}
    style={{
      background: dark ? C.teal : C.bg,
      padding: "96px 0",
    }}
  >
    <div
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "0 40px",
        textAlign: centered ? "center" : "left",
      }}
    >
      {children}
    </div>
  </section>
);

const SectionHeading = ({ label, title, subtitle, dark = false }) => (
  <div style={{ marginBottom: 56 }}>
    <GoldLabel>{label}</GoldLabel>
    <h2
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: 300,
        color: dark ? "#fff" : C.teal,
        marginTop: 12,
        marginBottom: 16,
        lineHeight: 1.2,
      }}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        style={{
          color: dark ? "rgba(255,255,255,0.65)" : C.muted,
          fontSize: "1.05rem",
          fontWeight: 300,
          maxWidth: 600,
          lineHeight: 1.7,
        }}
      >
        {subtitle}
      </p>
    )}
  </div>
);

// Animate on scroll helper
const FadeUp = ({ children, delay = 0, style = {} }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// Glass card
const GlassCard = ({ children, style = {} }) => (
  <motion.div
    whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(15,76,92,0.12)" }}
    transition={{ duration: 0.3 }}
    style={{
      background: "rgba(255,255,255,0.82)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: `1px solid ${C.border}`,
      borderRadius: 16,
      padding: "36px 32px",
      boxShadow: "0 4px 24px rgba(15,76,92,0.06)",
      ...style,
    }}
  >
    {children}
  </motion.div>
);

// ─── 1. Hero ──────────────────────────────────────────────────────────────────
const PageHero = () => (
  <section
    style={{
      background: `linear-gradient(135deg, #081f26 0%, #0F4C5C 55%, #0a1a20 100%)`,
      position: "relative",
      overflow: "hidden",
      padding: "140px 40px 120px",
      textAlign: "center",
    }}
  >
    {/* Gold glow orb */}
    <div
      style={{
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 520,
        height: 520,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(201,162,63,0.14) 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />
    {/* Subtle grid texture */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `linear-gradient(rgba(201,162,63,0.04) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(201,162,63,0.04) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }}
    />

    <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <GoldLabel>PivotEdge Partners · Intelligence Series</GoldLabel>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(3rem, 7vw, 5.5rem)",
          fontWeight: 300,
          color: "#fff",
          lineHeight: 1.1,
          marginTop: 24,
          marginBottom: 24,
          letterSpacing: "-0.01em",
        }}
      >
        Leadership That{" "}
        <span style={{ color: C.gold, fontStyle: "italic" }}>Defines</span>
        <br />
        Direction
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          color: "rgba(255,255,255,0.58)",
          fontSize: "1.1rem",
          fontWeight: 300,
          lineHeight: 1.75,
          maxWidth: 560,
          margin: "0 auto",
        }}
      >
        Advisory‑driven executive search for boards, CEOs, and transformational
        leaders who shape enterprise performance and strategic direction.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          height: 1,
          background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
          maxWidth: 320,
          margin: "48px auto 0",
        }}
      />
    </div>
  </section>
);

// ─── 2. Differentiators ───────────────────────────────────────────────────────
const differentiators = [
  {
    title: "Advisory Orientation",
    body: "We approach every mandate as trusted advisors, not transactional recruiters. Our counsel extends beyond placement to leadership architecture.",
  },
  {
    title: "Governance‑Aware Frameworks",
    body: "Our evaluation methodology is grounded in governance principles, ensuring leaders are assessed within the broader enterprise ecosystem.",
  },
  {
    title: "Senior Leadership Networks",
    body: "Deep, trust‑based access to executives at the apex of their industries — relationships cultivated over decades of sustained advisory work.",
  },
  {
    title: "Research‑Driven Methodology",
    body: "Structured, rigorous, and evidence‑led. Every search is anchored in market intelligence and precise capability benchmarking.",
  },
  {
    title: "Long‑Term Partnership Mindset",
    body: "We measure success not by placement speed but by sustained leadership impact — years, not months.",
  },
  {
    title: "Confidential Independence",
    body: "Every search is executed with discretion. Our independence ensures objectivity and the trust of both client and candidate.",
  },
];

const DifferentiatorsSection = () => (
  <SectionWrapper id="differentiators">
    <FadeUp>
      <SectionHeading
        label="Our Edge"
        title="What Differentiates PivotEdge"
        subtitle="Six principles that define our approach and separate advisory excellence from conventional search."
      />
    </FadeUp>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: 24,
      }}
    >
      {differentiators.map((d, i) => (
        <FadeUp key={d.title} delay={i * 0.08}>
          <GlassCard>
            <div
              style={{
                width: 32,
                height: 2,
                background: C.gold,
                marginBottom: 20,
                borderRadius: 2,
              }}
            />
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.25rem",
                fontWeight: 500,
                color: C.teal,
                marginBottom: 12,
              }}
            >
              {d.title}
            </h3>
            <p
              style={{
                color: C.muted,
                fontSize: "0.95rem",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {d.body}
            </p>
          </GlassCard>
        </FadeUp>
      ))}
    </div>
  </SectionWrapper>
);

// ─── 3. Mandates ─────────────────────────────────────────────────────────────
const mandates = [
  "Chief Executive Officers",
  "Chief Financial Officers",
  "Functional Heads — Finance, HR, Sales & Marketing, Operations, Supply Chain, Technology, Sustainability",
  "Business Unit Heads",
  "Transformation & Digital Leaders",
  "Independent & Non‑Executive Directors",
  "Board Chairs & Committee Leadership",
  "Audit, Risk, Compensation & Nomination Committee Members",
];

const MandatesSection = () => (
  <SectionWrapper id="mandates">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "start",
      }}
    >
      <FadeUp>
        <SectionHeading
          label="Typical Mandates"
          title="Where We Are Engaged"
          subtitle="Our focus is on functional heads and above — leaders whose decisions directly influence enterprise performance, culture, and strategic direction."
        />
        <p
          style={{
            color: C.muted,
            fontSize: "0.92rem",
            fontStyle: "italic",
            borderLeft: `2px solid ${C.gold}`,
            paddingLeft: 16,
            lineHeight: 1.7,
          }}
        >
          "We operate at the intersection of strategy and leadership — where the
          right appointment reshapes what becomes possible."
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {mandates.map((m, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                padding: "18px 0",
                borderBottom:
                  i < mandates.length - 1 ? `1px solid ${C.border}` : "none",
              }}
            >
              <span
                style={{
                  minWidth: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: C.gold,
                  marginTop: 8,
                }}
              />
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: C.teal,
                  fontSize: "1.05rem",
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                {m}
              </span>
            </div>
          ))}
        </div>
      </FadeUp>
    </div>
  </SectionWrapper>
);

// ─── 4. Outcomes ─────────────────────────────────────────────────────────────
const outcomes = [
  "Stronger alignment between leadership and strategy",
  "Reduced succession and governance risk",
  "Accelerated executive integration",
  "Sustained performance impact",
  "Improved governance credibility",
  "Healthier Board and CEO partnership",
];

const OutcomesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section
      ref={ref}
      style={{
        background: "#EAE6DC",
        padding: "96px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,162,63,0.07) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <GoldLabel>Results We Deliver</GoldLabel>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: C.teal,
              marginTop: 12,
              marginBottom: 56,
            }}
          >
            Outcomes That{" "}
            <span style={{ color: C.gold, fontStyle: "italic" }}>Endure</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
            textAlign: "left",
          }}
        >
          {outcomes.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.75)",
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                padding: "28px 28px",
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                style={{
                  color: C.gold,
                  fontSize: "1.4rem",
                  fontFamily: "'Cormorant Garamond', serif",
                  lineHeight: 1,
                  marginTop: 2,
                  minWidth: 20,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  color: C.teal,
                  fontSize: "0.98rem",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                {o}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 5. Boards & Governance ───────────────────────────────────────────────────
const boardApproach = [
  {
    step: "01",
    title: "Board Composition Review",
    body: "We assess current Board capabilities against organisational strategy, growth trajectory, and governance requirements to identify meaningful capability gaps.",
  },
  {
    step: "02",
    title: "Director & Committee Leadership",
    body: "Identifying Independent Directors, Non‑Executive Directors, and Committee Chairs who strengthen oversight and contribute strategically to boardroom dialogue.",
  },
  {
    step: "03",
    title: "Chairperson Selection",
    body: "Supporting the appointment of Board Chairs who can shape boardroom culture, manage CEO relationships, and ensure effective governance dynamics.",
  },
  {
    step: "04",
    title: "Board Succession Planning",
    body: "Structured succession planning at Board level to ensure leadership continuity, stability, and long‑term governance resilience.",
  },
];

const BoardsSection = () => (
  <SectionWrapper id="boards">
    <FadeUp>
      <SectionHeading
        label="Boards & Governance"
        title={
          <>
            Strengthening Board{" "}
            <span style={{ color: C.gold, fontStyle: "italic" }}>
              Effectiveness
            </span>
          </>
        }
        subtitle="Boards today operate in an environment defined by regulatory scrutiny, investor expectations, and strategic complexity. Strong governance is not administrative — it is strategic."
      />
    </FadeUp>

    <GoldDivider />

    <div
      style={{
        marginTop: 56,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 24,
      }}
    >
      {boardApproach.map((item, i) => (
        <FadeUp key={item.step} delay={i * 0.1}>
          <GlassCard>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2.2rem",
                color: C.gold,
                opacity: 0.4,
                fontWeight: 300,
                marginBottom: 12,
                lineHeight: 1,
              }}
            >
              {item.step}
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.2rem",
                fontWeight: 500,
                color: C.teal,
                marginBottom: 12,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                color: C.muted,
                fontSize: "0.93rem",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {item.body}
            </p>
          </GlassCard>
        </FadeUp>
      ))}
    </div>
  </SectionWrapper>
);

// ─── 6. CEO Section ───────────────────────────────────────────────────────────
const ceoFramework = [
  {
    title: "Strategic Alignment",
    body: "Working with the Board to clarify growth objectives, transformation priorities, and measurable performance expectations before defining any search.",
  },
  {
    title: "Leadership Profile Definition",
    body: "Defining the capability, behavioural attributes, and governance orientation required for the organisation's next chapter of leadership.",
  },
  {
    title: "Market Mapping",
    body: "Evaluating both external and internal talent pools with rigour and objectivity, ensuring broad consideration without bias.",
  },
  {
    title: "Rigorous Assessment",
    body: "Candidates benchmarked against strategic acumen, stakeholder management, cultural alignment, and long‑term value orientation.",
  },
  {
    title: "Succession Advisory",
    body: "Supporting Boards to identify immediate successors as well as longer‑term internal development pathways for pipeline strength.",
  },
];

const CEOSection = () => (
  <SectionWrapper id="ceo" style={{ background: "#edeae2" }}>
    <div style={{ background: "#edeae2", borderRadius: 24, padding: "48px 0" }}>
      <FadeUp>
        <SectionHeading
          label="Chief Executive Officer"
          title={
            <>
              CEO Search That{" "}
              <span style={{ color: C.gold, fontStyle: "italic" }}>Shapes</span>{" "}
              Organisations
            </>
          }
          subtitle="The Chief Executive Officer shapes direction, performance expectations, and culture. The role demands clarity of vision, strategic judgement, and the ability to build exceptional executive teams."
        />
      </FadeUp>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {ceoFramework.map((item, i) => (
          <FadeUp key={item.title} delay={i * 0.09}>
            <GlassCard
              style={{
                borderTop: `3px solid ${i % 2 === 0 ? C.gold : "transparent"}`,
                borderImage:
                  i % 2 === 0
                    ? undefined
                    : `linear-gradient(90deg, ${C.gold}, ${C.teal}) 1`,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: C.teal,
                  marginBottom: 10,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: C.muted,
                  fontSize: "0.93rem",
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {item.body}
              </p>
            </GlassCard>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.4}>
        <div
          style={{
            marginTop: 48,
            padding: "32px 40px",
            background: "rgba(255,255,255,0.6)",
            border: `1px solid ${C.border}`,
            borderLeft: `4px solid ${C.gold}`,
            borderRadius: 12,
            backdropFilter: "blur(8px)",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.15rem",
              color: C.teal,
              lineHeight: 1.7,
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            "A strong CEO and Board partnership remains one of the most powerful
            drivers of sustained enterprise performance. Our process evaluates
            candidates within that broader governance ecosystem — not in
            isolation."
          </p>
          <p
            style={{
              color: C.gold,
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              marginTop: 16,
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            — PivotEdge Partners Perspective
          </p>
        </div>
      </FadeUp>
    </div>
  </SectionWrapper>
);

// ─── 7. AI Section ────────────────────────────────────────────────────────────
const AISection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section
      ref={ref}
      style={{
        background: "#F4F1EA",
        padding: "112px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      {[280, 480, 680].map((size, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: size,
            height: size,
            borderRadius: "50%",
            border: `1px solid rgba(201,162,63,${0.12 - i * 0.03})`,
            pointerEvents: "none",
          }}
        />
      ))}

      <div
        style={{
          maxWidth: 820,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <GoldLabel>Artificial Intelligence</GoldLabel>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 300,
            color: C.teal,
            lineHeight: 1.15,
            marginTop: 16,
            marginBottom: 28,
          }}
        >
          Leadership for{" "}
          <span style={{ color: C.gold, fontStyle: "italic" }}>
            Intelligent Enterprise
          </span>{" "}
          Transformation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            color: C.muted,
            fontSize: "1.05rem",
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: 20,
          }}
        >
          Artificial Intelligence is reshaping industries, operating models, and
          competitive dynamics. The question is no longer whether to adopt AI,
          but how to embed it responsibly, strategically, and at scale.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.42 }}
          style={{
            color: C.muted,
            fontSize: "1.05rem",
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: 56,
          }}
        >
          AI leadership demands more than technical expertise — it requires
          commercial judgement, governance awareness, change leadership, and the
          ability to translate digital capability into measurable business
          impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{
            height: 1,
            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
            marginBottom: 48,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            display: "inline-block",
            border: `1px solid rgba(201,162,63,0.5)`,
            borderRadius: 8,
            padding: "14px 36px",
            color: C.teal,
            background: "rgba(255,255,255,0.7)",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.85rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          PivotEdge treats AI as a horizontal leadership capability — across
          every industry and function
        </motion.div>
      </div>
    </section>
  );
};

export default function InsightsPage() {
  return (
    <>
      <div style={{ fontFamily: "'Jost', sans-serif" }}>
        <PageHero />
        <DifferentiatorsSection />
        <MandatesSection />
        <OutcomesSection />
        <BoardsSection />
        <CEOSection />
        <AISection />
      </div>
    </>
  );
}
