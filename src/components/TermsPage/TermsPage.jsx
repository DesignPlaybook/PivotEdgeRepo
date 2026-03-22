import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TermsPage = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B222A] via-[#112F39] to-[#0B222A] text-white relative overflow-hidden">
      {/* Subtle Ambient Accent */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#D4B15A]/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h1 className="text-5xl font-light tracking-wide">
            Terms & <span className="text-[#D4B15A]">Conditions</span>
          </h1>

          <div className="h-[2px] w-24 bg-[#D4B15A] mt-6"></div>

          <p className="text-white/60 mt-6 text-lg max-w-3xl">
            These Terms outline the legal framework governing executive advisory
            engagements and website usage.
          </p>
        </motion.div>

        {/* Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-14"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/[0.02] border border-white/10 rounded-2xl p-10 backdrop-blur-lg shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative overflow-hidden"
            >
              {/* Gold Divider Sweep Animation */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 h-[2px] bg-[#D4B15A]/60"
              />

              <h2 className="text-xl text-white mb-4 font-medium">
                {section.title}
              </h2>

              <p className="text-white/70 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Legal Line */}
        <div className="mt-24 text-white/40 text-sm">
          © {new Date().getFullYear()} PivotEdge Partners. Legal Framework.
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
