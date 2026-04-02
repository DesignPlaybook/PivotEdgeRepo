import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Strategic Mandate Definition",
    desc: "We begin with clarity — understanding business strategy, organisational context, governance priorities, and leadership expectations."
  },
  {
    title: "Market Mapping",
    desc: "We conduct comprehensive market mapping to identify relevant leadership talent across industries and competitive landscapes."
  },
  {
    title: "Rigorous Evaluation",
    desc: "We apply structured evaluation frameworks to assess judgement, adaptability, cultural alignment, and long-term leadership impact."
  },
  {
    title: "Stakeholder Alignment",
    desc: "We maintain close alignment with Boards and stakeholders throughout the process to ensure precision and confidence in decision-making."
  }
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 }
  }
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const HowWeWork = () => {
  return (
    <section className="py-4 bg-[#F4F1EA] relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%)]"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10 overflow-x-hidden">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-10"
    >
      <p className="text-[#C9A23F] uppercase tracking-[0.35em] text-xl mb-2">
        How We Work
      </p>

      <h2 className="text-4xl md:text-5xl font-light text-[#0F4C5C] leading-tight">
        A structured and disciplined approach
      </h2>

      <div className="mt-3 w-24 h-[3px] bg-gradient-to-r from-[#C9A23F] to-transparent mx-auto rounded-full"></div>

      <p className="mt-2 max-w-2xl mx-auto text-[#5b6f77] text-[15.5px] leading-[1.9] font-light">
        Our process is research driven, structured, and discreet. Every engagement is designed to align leadership capability with long-term enterprise value.
      </p>
    </motion.div>

    {/* Cards */}
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden"
    >

      {steps.map((step, i) => (
        <motion.div
          key={i}
          variants={cardAnim}
          className="group relative overflow-hidden rounded-xl p-[1px] 
          bg-gradient-to-br from-[#C9A23F]/70 via-white/60 to-transparent
          max-w-full"
        >
          <div className="relative bg-white/90 backdrop-blur-xl rounded-xl p-6 border border-[#e6dcc6] shadow-md">

            {/* Glow always visible */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A23F22] via-transparent to-transparent"></div>

            {/* Left Accent */}
            <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#C9A23F] to-transparent"></div>

            {/* Top Detail */}
            <div className="mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#C9A23F] rounded-full"></div>
              <div className="h-[1px] flex-1 bg-[#e6dcc6]"></div>
            </div>

            {/* Title */}
            <h3 className="text-[#0F4C5C] text-[15.5px] font-medium mb-3 leading-[1.5]">
              {step.title}
            </h3>

            {/* Text */}
            <p className="text-[#5b6f77] text-[14.5px] leading-[1.7] font-light">
              {step.desc}
            </p>

          </div>
        </motion.div>
      ))}

    </motion.div>

  </div>
</section>
  );
};

export default HowWeWork;