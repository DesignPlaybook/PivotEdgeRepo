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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 70, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const textAnim = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-[#F8F7F4] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-semibold text-[#0F4C5C] text-center mb-12"
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
              className="
              group relative
              rounded-3xl p-8
              bg-white/80 backdrop-blur-xl
              border-2 border-[#EFE6CF]
              shadow-[0_30px_70px_-20px_rgba(0,0,0,0.25)]
              transition-all duration-500 ease-out
              hover:-translate-y-4
              hover:border-[#0F4C5C]
              hover:shadow-[0_0_0_3px_rgba(15,76,92,0.15),0_45px_120px_-20px_rgba(0,0,0,0.35)]
              "
            >

              {/* Gradient background */}
              <div
                className="
                absolute inset-0 rounded-3xl
                bg-gradient-to-br
                from-[#C9A23F]/10
                via-transparent
                to-[#0F4C5C]/10
                "
              />

              {/* Hover glow */}
              <div
                className="
                absolute inset-0 rounded-3xl opacity-0
                group-hover:opacity-100
                transition duration-500
                bg-gradient-to-br
                from-[#C9A23F]/25
                via-transparent
                to-[#0F4C5C]/25
                "
              />

              {/* Image */}
              <motion.div
                variants={textAnim}
                className="relative z-10 overflow-hidden rounded-2xl mb-7"
              >

                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                  whileHover={{ y: 0 }}
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="
                    h-52 w-full object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-110 group-hover:rotate-[0.8deg]
                    "
                  />

                  {/* image overlay for richness */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40" />
                </motion.div>

              </motion.div>

              {/* Content */}
              <div className="relative z-10">

                <motion.h3
                  variants={textAnim}
                  className="text-xl font-semibold text-gray-800 mb-3"
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  variants={textAnim}
                  className="text-[#6B7280] leading-relaxed"
                >
                  {service.description}
                </motion.p>

                {/* Animated Accent Line */}
                <motion.div
                  variants={textAnim}
                  className="
                  mt-7
                  h-[2px]
                  w-16
                  bg-[#C9A23F]
                  transition-all duration-500
                  group-hover:w-32
                  "
                />

              </div>

              {/* Decorative glow orb */}
              <span
                className="
                absolute -top-8 -right-8
                h-28 w-28
                rounded-full
                bg-[#C9A23F]/20
                blur-3xl
                transition-all duration-700
                group-hover:bg-[#C9A23F]/40
                group-hover:scale-125
                "
              />

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;