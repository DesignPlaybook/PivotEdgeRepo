import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#071E26] via-[#0B2C36] to-[#071E26] text-white relative overflow-hidden">
      {/* Soft ambient glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1B6F7A]/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C6A437]/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-28">
        {/* Animated Gold Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-[2px] bg-[#C6A437] mb-10"
        />

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-5xl font-light tracking-wide mb-12"
        >
          Legal <span className="text-[#C6A437]">Disclaimer</span>
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="bg-white/[0.04] backdrop-blur-xl border border-[#C6A437]/40 rounded-3xl p-14 shadow-[0_40px_80px_rgba(0,0,0,0.6)] space-y-10 text-white/75 leading-relaxed"
        >
          <section>
            <h2 className="text-xl text-white mb-4 font-medium">
              Professional Advisory Notice
            </h2>
            <p>
              PivotEdge Partners provides executive search and human capital
              advisory services. While we strive to ensure accuracy and
              strategic alignment in all engagements, we do not guarantee
              specific hiring outcomes, employment decisions, or organizational
              performance results arising from advisory recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-4 font-medium">
              No Employment Guarantee
            </h2>
            <p>
              Submission of resumes, executive profiles, or candidate
              information does not constitute an offer of employment. All hiring
              decisions remain solely at the discretion of client organizations.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-4 font-medium">
              Third-Party Information
            </h2>
            <p>
              Any information sourced from external parties, including candidate
              credentials, references, or background data, is presented in good
              faith. PivotEdge Partners assumes no liability for inaccuracies
              beyond our direct verification scope.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-4 font-medium">
              Limitation of Liability
            </h2>
            <p>
              Under no circumstances shall PivotEdge Partners be held liable for
              indirect, incidental, or consequential damages arising from the
              use of this website or our professional services.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-4 font-medium">
              Intellectual Property
            </h2>
            <p>
              All proprietary methodologies, frameworks, branding, and content
              remain the intellectual property of PivotEdge Partners and may not
              be reproduced without prior written consent.
            </p>
          </section>
        </motion.div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14 text-white/40 text-sm"
        >
          © {new Date().getFullYear()} PivotEdge Partners. All rights reserved.
        </motion.div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
