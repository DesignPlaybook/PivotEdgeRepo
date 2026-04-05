import React from "react";
import { motion } from "framer-motion";
import PageHero from "../PageHero/PageHero";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
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
    <div className="min-h-screen bg-[#F4F1EA] relative overflow-hidden">
      {/* Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%)]"></div>

      <PageHero
        label="Governance Framework"
        title="Corporate"
        highlight="Policies"
        subtitle="Ethical governance, compliance standards, and professional integrity define our executive advisory approach."
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="space-y-10"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -6 }}
              className="group p-[1px] rounded-2xl bg-gradient-to-br from-[#C9A23F]/40 via-white/40 to-transparent transition duration-500"
            >
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-10 border border-white/40 shadow-sm hover:shadow-xl transition duration-500 overflow-hidden">
                {/* Top Accent Line */}
                <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C9A23F] via-[#0F4C5C] to-[#C9A23F]"></span>

                <h2 className="text-xl font-semibold text-[#0F4C5C] mb-4">
                  {section.title}
                </h2>

                <p className="text-[#5b6f77] leading-[1.8] text-[15px] font-light">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <p className="mt-20 text-[#0F4C5C]/60 text-sm">
          © {new Date().getFullYear()} PivotEdge Partners. Legal Framework.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
