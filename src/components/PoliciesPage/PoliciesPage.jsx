import React from "react";
import { motion } from "framer-motion";
import PageHero from "../PageHero/PageHero";

const sectionVariants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const PoliciesPage = () => {
  return (
    <div className="min-h-screen bg-[#F4F1EA] relative overflow-hidden">
      {/* Subtle Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%)]"></div>

      <PageHero
        label="Governance Framework"
        title="Corporate"
        highlight="Policies"
        subtitle="Ethical governance, compliance standards, and professional integrity define our executive advisory approach."
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Policies */}
        <div className="space-y-10">
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
              whileHover={{ y: -6 }}
              className="group p-[1px] rounded-2xl bg-gradient-to-br from-[#C9A23F]/40 via-white/40 to-transparent transition duration-500"
            >
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-10 border border-white/40 shadow-sm hover:shadow-xl transition duration-500 overflow-hidden">
                {/* Top Accent Line */}
                <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C9A23F] via-[#0F4C5C] to-[#C9A23F]"></span>

                <h2 className="text-xl md:text-2xl font-semibold text-[#0F4C5C] mb-4">
                  {policy.title}
                </h2>

                <p className="text-[#5b6f77] leading-[1.8] text-[15px] font-light">
                  {policy.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-[#0F4C5C]/60 text-sm"
        >
          © {new Date().getFullYear()} PivotEdge Partners. Corporate Governance
          Framework.
        </motion.p>
      </div>
    </div>
  );
};

export default PoliciesPage;
