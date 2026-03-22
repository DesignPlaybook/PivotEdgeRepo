import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const PoliciesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2630] via-[#103943] to-[#0A2630] text-white relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4B15A]/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1B6F7A]/20 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.05em" }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h1 className="text-5xl font-light tracking-wide">
            Corporate <span className="text-[#D4B15A]">Policies</span>
          </h1>
          <p className="text-white/60 mt-4 text-lg max-w-2xl">
            Ethical governance, compliance standards, and professional integrity
            define our executive advisory approach.
          </p>
        </motion.div>

        {/* Policies Container */}
        <div className="space-y-16">
          {[
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
          ].map((policy, index) => (
            <motion.div
              key={index}
              variants={sectionVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-[0_30px_70px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Gold Side Accent Animation */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="absolute left-0 top-0 w-[3px] bg-[#D4B15A]"
              />

              <h2 className="text-2xl font-light text-white mb-6 pl-6">
                {policy.title}
              </h2>

              <p className="text-white/70 leading-relaxed text-lg pl-6">
                {policy.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-24 text-white/40 text-sm"
        >
          © {new Date().getFullYear()} PivotEdge Partners. Corporate Governance
          Framework.
        </motion.div>
      </div>
    </div>
  );
};

export default PoliciesPage;
