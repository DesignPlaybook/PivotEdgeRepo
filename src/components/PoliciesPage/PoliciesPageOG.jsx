import React from "react";
import { motion } from "framer-motion";
import bg from "../../assets/images/bg.webp";

// ─── Geometric decoration ─────────────────────────────────────────────────────
const GeometricAccent = ({ opacity = 0.2, color = "#C9A23F" }) => (
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
      r="70"
      stroke={color}
      strokeWidth="0.3"
      strokeDasharray="4 6"
    />
    <circle cx="100" cy="100" r="50" stroke={color} strokeWidth="0.8" />
    <line
      x1="100"
      y1="10"
      x2="100"
      y2="190"
      stroke={color}
      strokeWidth="0.4"
      strokeDasharray="2 8"
    />
    <line
      x1="10"
      y1="100"
      x2="190"
      y2="100"
      stroke={color}
      strokeWidth="0.4"
      strokeDasharray="2 8"
    />
    <polygon
      points="100,60 122,86 100,112 78,86"
      stroke={color}
      strokeWidth="0.8"
      fill="none"
    />
    <circle cx="100" cy="100" r="5" fill={color} />
    <circle cx="100" cy="10" r="2.5" fill={color} opacity="0.6" />
    <circle cx="190" cy="100" r="2.5" fill={color} opacity="0.6" />
    <circle cx="10" cy="100" r="2.5" fill={color} opacity="0.6" />
    <circle cx="100" cy="190" r="2.5" fill={color} opacity="0.6" />
  </svg>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const PoliciesPage = () => {
  const policies = [
    {
      title: "Data Protection & Confidentiality",
      text: "All executive search engagements are conducted under strict confidentiality agreements. Candidate information, organizational data, and proprietary insights are protected under applicable data protection regulations.",
    },
    {
      title: "Equal Opportunity Commitment",
      text: "PivotEdge Partners upholds non-discrimination principles across gender, ethnicity, religion, age, disability, and background. Executive selection is based solely on merit and strategic alignment.",
    },
    {
      title: "Conflict of Interest Policy",
      text: "We maintain transparent engagement boundaries to avoid conflicts of interest. Dual representation within competing organizations is governed by ethical screening frameworks.",
    },
    {
      title: "Compliance & Regulatory Standards",
      text: "Our advisory practices align with international HR compliance frameworks and local employment regulations applicable within each operational jurisdiction.",
    },
    {
      title: "Professional Conduct",
      text: "All consultants adhere to structured executive search methodologies, maintaining integrity, discretion, and accountability throughout the hiring lifecycle.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#F4F1EA] relative overflow-hidden"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {/* ══ HERO ══ */}
      <section className="relative min-h-[100vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src={bg}
          className="absolute w-full h-full object-cover scale-105"
          alt=""
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%),linear-gradient(to_bottom,#06151a,#123845)] opacity-97" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 60px)",
          }}
        />
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
              Governance Framework
            </p>
            <div className="w-8 h-[1px] bg-[#C9A23F]" />
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-light leading-[1.1] tracking-wide mb-2">
            Corporate
          </h1>
          <h1 className="text-[#C9A23F] text-5xl md:text-7xl font-semibold leading-[1.1] tracking-wide mb-8">
            Policies
          </h1>
          <div className="flex justify-center mb-10">
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent" />
          </div>
          <p className="text-gray-300 text-lg leading-[1.9] font-light max-w-2xl mx-auto">
            Ethical governance, compliance standards, and professional integrity
            define our executive advisory approach.
          </p>
        </motion.div>

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

      {/* ══ CONTENT ══ */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="space-y-6">
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              variants={sectionVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative bg-white border border-[#e6dcc6] rounded-2xl p-10 overflow-hidden hover:border-[#C9A23F]/40 hover:shadow-xl transition-all duration-300"
            >
              <span className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#C9A23F] to-[#0F4C5C] group-hover:w-full transition-all duration-500" />
              <span
                className="absolute top-6 right-8 text-5xl font-bold text-[#0F4C5C]/[0.04] leading-none select-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-lg md:text-xl font-semibold text-[#0F4C5C] mb-4 group-hover:text-[#C9A23F] transition-colors duration-300">
                {policy.title}
              </h2>
              <p className="text-[#5b6f77] leading-[1.9] text-[15px] font-light">
                {policy.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-[#0F4C5C]/50 text-sm"
        >
          © {new Date().getFullYear()} PivotEdge Partners. Corporate Governance
          Framework.
        </motion.p>
      </div>
    </div>
  );
};

export default PoliciesPage;
