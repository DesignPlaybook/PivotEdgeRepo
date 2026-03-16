import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Executive Search",
    description:
      "Retained search for Board, CEO, and senior functional leadership roles where leadership decisions shape enterprise performance.",
    icon: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200",
  },
  {
    title: "Boards & Governance",
    description:
      "Advisory support for Board composition, Director appointments, and governance succession planning.",
    icon: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200",
  },
  {
    title: "CEO & Enterprise Leadership",
    description:
      "Identification and evaluation of enterprise leaders capable of aligning strategy, governance, and operational execution.",
    icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
  },
  {
    title: "Artificial Intelligence Leadership",
    description:
      "Search for AI and digital leaders who can integrate intelligent technologies into enterprise strategy.",
    icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
  },
];

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
    transition: {
      duration: 0.9,
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
    <section id="services" className="py-5 bg-[#F8F7F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F4C5C]">
            What We Do
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            We partner with Boards and senior executives to secure leadership
            that aligns strategy, governance, and long-term enterprise performance.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              className="
              group relative
              rounded-2xl
              bg-white
              overflow-hidden
              shadow-lg
              hover:-translate-y-3
              transition-all duration-500
              "
            >

              {/* Gradient glow */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-br
                from-[#C9A23F]/10
                via-transparent
                to-[#0F4C5C]/10
                opacity-0
                group-hover:opacity-100
                transition duration-500
                "
              />

              {/* Image */}
              <motion.div
                variants={textAnim}
                className="h-44 overflow-hidden relative"
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
                    w-full h-44 object-cover
                    transition-transform duration-700
                    group-hover:scale-110 group-hover:rotate-[0.8deg]
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40" />
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="p-6 relative z-10">

                <motion.h3
                  variants={textAnim}
                  className="text-lg font-semibold text-[#0F4C5C] mb-3"
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  variants={textAnim}
                  className="text-sm text-gray-600 leading-relaxed"
                >
                  {service.description}
                </motion.p>

                {/* Gold Accent */}
                <motion.div
                  variants={textAnim}
                  className="mt-6 h-[2px] w-14 bg-[#C9A23F] group-hover:w-24 transition-all duration-500"
                />

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;