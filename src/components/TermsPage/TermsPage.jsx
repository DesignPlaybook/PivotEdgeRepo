import React, { useState } from "react";
import { motion } from "framer-motion";

// ─── TOGGLE — comment out the useState default to switch permanent theme ───────
// true = dark | false = light
const DEFAULT_THEME = true; // ← change this to false for light, or remove toggle entirely

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing this website or engaging with PivotEdge Partners, you agree to comply with and be bound by these Terms and Conditions. Continued use of our services constitutes formal acceptance.",
  },
  {
    title: "2. Scope of Services",
    content:
      "PivotEdge Partners provides executive search, leadership advisory, and human capital consulting services. Engagement scope is governed by individual client agreements.",
  },
  {
    title: "3. Confidentiality",
    content:
      "All client, candidate, and proprietary information exchanged during engagements shall remain confidential and protected under applicable legal frameworks.",
  },
  {
    title: "4. Intellectual Property",
    content:
      "All methodologies, frameworks, branding materials, and advisory documents remain the exclusive intellectual property of PivotEdge Partners.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      "PivotEdge Partners shall not be liable for indirect, incidental, or consequential damages arising from reliance on advisory insights or executive placements.",
  },
  {
    title: "6. Third-Party Links",
    content:
      "This website may contain links to third-party resources. We are not responsible for the content, policies, or practices of such external entities.",
  },
  {
    title: "7. Governing Law",
    content:
      "These Terms and Conditions shall be governed in accordance with the applicable laws of the jurisdiction in which PivotEdge Partners operates.",
  },
];

// ─── Geometric SVG accent ─────────────────────────────────────────────────────
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

// ─── Theme Toggle Button ──────────────────────────────────────────────────────
const ThemeToggle = ({ dark, setDark }) => (
  <button
    onClick={() => setDark(!dark)}
    className="fixed bottom-6 right-6 z-[999] flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 shadow-lg"
    style={{
      background: dark ? "#C9A23F" : "#0F4C5C",
      borderColor: dark ? "#C9A23F" : "#0F4C5C",
      color: "#fff",
    }}
  >
    {dark ? "☀ Light Mode" : "☾ Dark Mode"}
  </button>
);

// ─── Dark Card ────────────────────────────────────────────────────────────────
const DarkCard = ({ section, index }) => (
  <motion.div
    variants={fadeIn}
    whileHover={{ y: -4 }}
    className="group relative overflow-hidden transition-all duration-500"
    style={{
      background: "linear-gradient(135deg, #0d3340 0%, #0a2a36 100%)",
      border: "1px solid rgba(201,162,63,0.15)",
    }}
  >
    {/* Gold top rule */}
    <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9A23F] group-hover:w-full transition-all duration-700" />
    {/* Corner accent */}
    <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-[#C9A23F]/20" />
    {/* Number watermark */}
    <span
      className="absolute bottom-4 right-6 text-6xl font-light text-white/[0.04] select-none"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {String(index + 1).padStart(2, "0")}
    </span>

    <div className="p-8 md:p-10">
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#C9A23F]/30 flex items-center justify-center mt-0.5">
          <span
            className="text-[#C9A23F] text-xs"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {index + 1}
          </span>
        </div>
        <div>
          <h2 className="text-lg font-medium text-white mb-3 tracking-wide">
            {section.title.replace(/^\d+\.\s/, "")}
          </h2>
          <p className="text-white/55 leading-[1.9] text-[14.5px] font-light">
            {section.content}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// ─── Light Card ───────────────────────────────────────────────────────────────
const LightCard = ({ section, index }) => (
  <motion.div
    variants={fadeIn}
    whileHover={{ y: -4 }}
    className="group relative overflow-hidden bg-white border border-[#e6dcc6] shadow-sm hover:shadow-lg transition-all duration-500"
  >
    <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9A23F] group-hover:w-full transition-all duration-700" />
    <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-[#C9A23F]/20" />
    <span
      className="absolute bottom-4 right-6 text-6xl font-light text-[#0F4C5C]/[0.04] select-none"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {String(index + 1).padStart(2, "0")}
    </span>

    <div className="p-8 md:p-10">
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#C9A23F]/40 flex items-center justify-center mt-0.5 bg-[#F4F1EA]">
          <span
            className="text-[#C9A23F] text-xs"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {index + 1}
          </span>
        </div>
        <div>
          <h2 className="text-lg font-medium text-[#0F4C5C] mb-3 tracking-wide">
            {section.title.replace(/^\d+\.\s/, "")}
          </h2>
          <p className="text-[#5b6f77] leading-[1.9] text-[14.5px] font-light">
            {section.content}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
const TermsPage = () => {
  const [dark, setDark] = useState(DEFAULT_THEME);

  const bg = dark ? "#07252E" : "#F4F1EA";
  const bgAlt = dark ? "#0a2d3a" : "#EAE6DC";
  const heading = dark ? "#ffffff" : "#0F4C5C";
  const sub = dark ? "rgba(255,255,255,0.5)" : "#5b6f77";
  const label = "#C9A23F";
  const border = dark ? "rgba(201,162,63,0.15)" : "#e6dcc6";
  const footerC = dark ? "rgba(255,255,255,0.25)" : "rgba(15,76,92,0.45)";

  return (
    <div
      className="min-h-screen relative overflow-hidden transition-colors duration-500"
      style={{ background: bg, fontFamily: "'Jost', sans-serif" }}
    >
      {/* Ambient glow */}
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
        {/* Geometric watermark */}
        <div className="absolute right-0 top-0 w-80 h-80 opacity-[0.06] pointer-events-none">
          <GeometricAccent color="#C9A23F" opacity={1} />
        </div>
        {/* Vertical ornamental line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(201,162,63,0.3), transparent)",
          }}
        />

        <div className="max-w-6xl mx-auto px-8 md:px-12 py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C9A23F]" />
              <span className="text-[#C9A23F] text-[0.65rem] tracking-[0.35em] uppercase font-medium">
                Legal Framework
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
              Terms &{" "}
              <em className="not-italic" style={{ color: "#C9A23F" }}>
                Conditions
              </em>
            </h1>

            <div className="w-14 h-[2px] bg-[#C9A23F] mb-6" />

            <p
              className="text-sm leading-[1.9] font-light max-w-xl"
              style={{ color: sub }}
            >
              These Terms and Conditions govern your use of the PivotEdge
              Partners platform and professional advisory services. Please
              review them carefully.
            </p>
          </motion.div>
        </div>

        {/* Bottom gold rule */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A23F]/40 to-transparent" />
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 gap-4"
        >
          {sections.map((section, i) =>
            dark ? (
              <DarkCard key={i} section={section} index={i} />
            ) : (
              <LightCard key={i} section={section} index={i} />
            ),
          )}
        </motion.div>

        {/* Footer */}
        <p className="mt-20 text-sm" style={{ color: footerC }}>
          © {new Date().getFullYear()} PivotEdge Partners. All rights reserved.
        </p>
      </div>

      {/* Theme toggle — remove this block once you pick a theme */}
      <ThemeToggle dark={dark} setDark={setDark} />
    </div>
  );
};

export default TermsPage;
