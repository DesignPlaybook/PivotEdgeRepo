import React, { useState } from "react";
import { motion } from "framer-motion";

// ─── TOGGLE — true = dark | false = light ─────────────────────────────────────
const DEFAULT_THEME = true; // ← change to false for light permanently

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const disclaimerSections = [
  {
    title: "Professional Advisory Notice",
    text: "PivotEdge Partners provides executive search and human capital advisory services. While we strive to ensure accuracy and strategic alignment in all engagements, we do not guarantee specific hiring outcomes, employment decisions, or organizational performance results arising from advisory recommendations.",
  },
  {
    title: "No Employment Guarantee",
    text: "Submission of resumes, executive profiles, or candidate information does not constitute an offer of employment. All hiring decisions remain solely at the discretion of client organizations.",
  },
  {
    title: "Third-Party Information",
    text: "Any information sourced from external parties, including candidate credentials, references, or background data, is presented in good faith. PivotEdge Partners assumes no liability for inaccuracies beyond our direct verification scope.",
  },
  {
    title: "Limitation of Liability",
    text: "Under no circumstances shall PivotEdge Partners be held liable for indirect, incidental, or consequential damages arising from the use of this website or our professional services.",
  },
  {
    title: "Intellectual Property",
    text: "All proprietary methodologies, frameworks, branding, and content remain the intellectual property of PivotEdge Partners and may not be reproduced without prior written consent.",
  },
];

const GeometricAccent = ({ color = "#C9A23F", opacity = 0.12 }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    className="w-full h-full"
    style={{ opacity }}
  >
    <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="0.5" />
    <circle
      cx="100"
      cy="100"
      r="65"
      stroke={color}
      strokeWidth="0.3"
      strokeDasharray="4 8"
    />
    <circle cx="100" cy="100" r="40" stroke={color} strokeWidth="0.8" />
    <line
      x1="100"
      y1="10"
      x2="100"
      y2="190"
      stroke={color}
      strokeWidth="0.4"
      strokeDasharray="2 10"
    />
    <line
      x1="10"
      y1="100"
      x2="190"
      y2="100"
      stroke={color}
      strokeWidth="0.4"
      strokeDasharray="2 10"
    />
    <polygon
      points="100,58 126,88 100,118 74,88"
      stroke={color}
      strokeWidth="0.8"
      fill="none"
    />
    <circle cx="100" cy="100" r="5" fill={color} />
  </svg>
);

const ThemeToggle = ({ dark, setDark }) => (
  <button
    onClick={() => setDark(!dark)}
    className="fixed bottom-6 right-6 z-[999] flex items-center gap-2 px-4 py-2.5 rounded-full text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 shadow-lg"
    style={{ background: dark ? "#C9A23F" : "#0F4C5C", color: "#fff" }}
  >
    {dark ? "☀ Light Mode" : "☾ Dark Mode"}
  </button>
);

// ─── Dark layout — single contained card with stacked sections ────────────────
const DarkContent = ({ sections }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{ show: { transition: { staggerChildren: 0.1 } } }}
    className="relative overflow-hidden"
    style={{
      background: "linear-gradient(160deg, #0d3340 0%, #0a2836 100%)",
      border: "1px solid rgba(201,162,63,0.12)",
    }}
  >
    {/* Top full gold rule */}
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C9A23F] via-[#e8c96a] to-[#C9A23F]" />
    {/* Corner geometry */}
    <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.06] pointer-events-none">
      <GeometricAccent color="#C9A23F" opacity={1} />
    </div>

    <div className="p-8 md:p-12 space-y-10">
      {sections.map((item, i) => (
        <motion.div
          key={i}
          variants={fadeIn}
          className="group flex items-start gap-6 pb-10 last:pb-0"
          style={{
            borderBottom:
              i < sections.length - 1
                ? "1px solid rgba(201,162,63,0.08)"
                : "none",
          }}
        >
          {/* Index line */}
          <div className="flex flex-col items-center flex-shrink-0 pt-1">
            <span className="text-[#C9A23F]/50 text-[0.65rem] tracking-[0.2em] uppercase font-medium">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="w-px flex-1 mt-2 min-h-[40px] bg-gradient-to-b from-[#C9A23F]/20 to-transparent" />
          </div>

          <div>
            <h2 className="text-base font-medium text-white mb-3 tracking-wide">
              {item.title}
            </h2>
            <p className="text-white/50 leading-[1.95] text-[14.5px] font-light">
              {item.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// ─── Light layout — single contained card with stacked sections ───────────────
const LightContent = ({ sections }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{ show: { transition: { staggerChildren: 0.1 } } }}
    className="relative overflow-hidden bg-white border border-[#e6dcc6] shadow-sm"
  >
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C9A23F] via-[#e8c96a] to-[#C9A23F]" />
    <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] pointer-events-none">
      <GeometricAccent color="#C9A23F" opacity={1} />
    </div>

    <div className="p-8 md:p-12 space-y-10">
      {sections.map((item, i) => (
        <motion.div
          key={i}
          variants={fadeIn}
          className="group flex items-start gap-6 pb-10 last:pb-0"
          style={{
            borderBottom:
              i < sections.length - 1
                ? "1px solid rgba(201,162,63,0.12)"
                : "none",
          }}
        >
          <div className="flex flex-col items-center flex-shrink-0 pt-1">
            <span className="text-[#C9A23F]/60 text-[0.65rem] tracking-[0.2em] uppercase font-medium">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="w-px flex-1 mt-2 min-h-[40px] bg-gradient-to-b from-[#C9A23F]/20 to-transparent" />
          </div>

          <div>
            <h2 className="text-base font-medium text-[#0F4C5C] mb-3 tracking-wide">
              {item.title}
            </h2>
            <p className="text-[#5b6f77] leading-[1.95] text-[14.5px] font-light">
              {item.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
const DisclaimerPage = () => {
  const [dark, setDark] = useState(DEFAULT_THEME);

  const bg = dark ? "#07252E" : "#F4F1EA";
  const bgAlt = dark ? "#0a2d3a" : "#EAE6DC";
  const heading = dark ? "#ffffff" : "#0F4C5C";
  const sub = dark ? "rgba(255,255,255,0.5)" : "#5b6f77";
  const border = dark ? "rgba(201,162,63,0.15)" : "#e6dcc6";
  const footerC = dark ? "rgba(255,255,255,0.25)" : "rgba(15,76,92,0.45)";

  return (
    <div
      className="min-h-screen relative overflow-hidden transition-colors duration-500"
      style={{ background: bg, fontFamily: "'Jost', sans-serif" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: dark
            ? "radial-gradient(ellipse at top, rgba(201,162,63,0.06) 0%, transparent 60%)"
            : "radial-gradient(ellipse at top, rgba(201,162,63,0.10) 0%, transparent 60%)",
        }}
      />

      {/* ── HERO ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: bgAlt, borderBottom: `1px solid ${border}` }}
      >
        <div className="absolute right-0 top-0 w-80 h-80 opacity-[0.06] pointer-events-none">
          <GeometricAccent color="#C9A23F" opacity={1} />
        </div>
        <div
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(201,162,63,0.3), transparent)",
          }}
        />

        <div className="max-w-5xl mx-auto px-8 md:px-12 py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C9A23F]" />
              <span className="text-[#C9A23F] text-[0.65rem] tracking-[0.35em] uppercase font-medium">
                Legal Notice
              </span>
            </div>

            <h1
              className="font-light leading-[1.1] mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.6rem, 5vw, 4rem)",
                color: heading,
              }}
            >
              Legal{" "}
              <em className="not-italic" style={{ color: "#C9A23F" }}>
                Disclaimer
              </em>
            </h1>

            <div className="w-14 h-[2px] bg-[#C9A23F] mb-6" />

            <p
              className="text-sm leading-[1.9] font-light max-w-xl"
              style={{ color: sub }}
            >
              Important information governing the use of our advisory services
              and digital platform. Please read this notice carefully before
              engaging with our services.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A23F]/40 to-transparent" />
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 relative z-10">
        {dark ? (
          <DarkContent sections={disclaimerSections} />
        ) : (
          <LightContent sections={disclaimerSections} />
        )}

        <p className="mt-16 text-sm" style={{ color: footerC }}>
          © {new Date().getFullYear()} PivotEdge Partners. All rights reserved.
        </p>
      </div>

      {/* Theme toggle — remove once you pick a theme */}
      <ThemeToggle dark={dark} setDark={setDark} />
    </div>
  );
};

export default DisclaimerPage;
