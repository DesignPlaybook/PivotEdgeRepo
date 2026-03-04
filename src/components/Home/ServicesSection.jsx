// ServicesSection.jsx
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Executive Search",
    description:
      "We help companies identify and recruit top leadership talent worldwide.",
    icon: "https://static.vecteezy.com/system/resources/previews/024/162/391/large_2x/businessman-using-a-magnifying-glass-to-search-for-business-risks-financial-risk-management-concept-business-investment-feasibility-assessment-fault-protection-protection-of-business-interests-free-photo.jpg",
  },
  {
    title: "Leadership Consulting",
    description:
      "Our experts guide organizations in leadership development and succession planning.",
    icon: "https://st2.depositphotos.com/3591429/7167/i/950/depositphotos_71678161-stock-photo-diversity-of-business-people-leadership.jpg",
  },
  {
    title: "Diversity & Inclusion",
    description:
      "Promoting inclusive practices that strengthen organizational culture.",
    icon: "https://diversitydashboard.co.uk/_resx/imageresource/ce105a38af647d62966c694de2ba513d282203e9-1431-1795-0-0-0",
  },
];

/* Animation variants */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textAnim = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  return (
    <section className="py-28 bg-brand-offwhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-semibold text-brand-teal mb-16 text-center"
        >
          Our Services
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-3 gap-14"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              className="group relative rounded-3xl p-8
                bg-white/80 backdrop-blur-lg
                border border-white/50
                shadow-[0_25px_60px_-25px_rgba(0,0,0,0.2)]
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-[0_45px_90px_-30px_rgba(0,0,0,0.35)]"
            >
              {/* Default glow */}
              <div className="absolute inset-0 rounded-3xl
                bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-teal/10" />

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0
                group-hover:opacity-100 transition duration-500
                bg-gradient-to-br from-brand-gold/25 via-transparent to-brand-teal/25" />

              {/* Image */}
{/* Image */}
<motion.div
  variants={textAnim}
  className="relative z-10 overflow-hidden rounded-2xl mb-7"
>
  {/* Floating wrapper */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      y: 0, // pause floating on hover
    }}
  >
    <img
      src={service.icon}
      alt={service.title}
      className="h-48 w-full object-cover
        transition-transform duration-700 ease-out
        group-hover:scale-110 group-hover:rotate-[0.5deg]"
    />
  </motion.div>
</motion.div>
              {/* Content */}
              <div className="relative z-10">
                <motion.h3
                  variants={textAnim}
                  className="text-xl font-semibold text-brand-charcoal mb-3"
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  variants={textAnim}
                  className="text-brand-slate leading-relaxed"
                >
                  {service.description}
                </motion.p>

                {/* Accent line */}
                <motion.div
                  variants={textAnim}
                  className="mt-7 h-[2px] w-14 bg-brand-gold transition-all duration-500 group-hover:w-28"
                />
              </div>

              {/* Decorative orb */}
              <span className="absolute -top-6 -right-6 h-24 w-24 rounded-full
                bg-brand-gold/20 blur-2xl
                transition-all duration-700
                group-hover:bg-brand-gold/40 group-hover:scale-110" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;