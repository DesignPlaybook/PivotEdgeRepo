import React from "react";
import { motion } from "framer-motion";
import PageHero from "../PageHero/PageHero";

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const DisclaimerPage = () => {
  return (
    <div className="bg-[#F4F1EA] relative overflow-hidden">
      {/* HERO */}
      <PageHero
        label="Legal Notice"
        title="Legal"
        highlight="Disclaimer"
        subtitle="Important information governing the use of our advisory services and platform."
      />

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        {/* Main Card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="group p-[1px] rounded-2xl bg-gradient-to-br from-[#C9A23F]/40 via-white/40 to-transparent transition duration-500"
        >
          <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-10 md:p-12 border border-white/40 shadow-sm hover:shadow-xl transition duration-500 overflow-hidden space-y-10">
            {/* Top Accent Line */}
            <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C9A23F] via-[#0F4C5C] to-[#C9A23F]"></span>

            {/* Sections */}
            {[
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
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="transition duration-300"
              >
                <h2 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                  {item.title}
                </h2>

                <p className="text-[#5b6f77] leading-[1.8] text-[15px] font-light">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <p className="mt-16 text-[#0F4C5C]/60 text-sm">
          © {new Date().getFullYear()} PivotEdge Partners. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default DisclaimerPage;
