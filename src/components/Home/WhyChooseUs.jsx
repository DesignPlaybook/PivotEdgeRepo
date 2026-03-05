import { motion } from "framer-motion";
import { FaGlobe, FaUserTie, FaChartLine, FaHandshake } from "react-icons/fa";

const points = [
  {
    icon: <FaGlobe />,
    title: "Global Perspective",
    desc: "Deep understanding of leadership across geographies and markets.",
    back: "Our global research and partnerships allow us to identify leadership trends across industries worldwide.",
  },
  {
    icon: <FaUserTie />,
    title: "Leadership Expertise",
    desc: "Decades of experience advising senior leaders and boards.",
    back: "We work closely with CEOs and leadership teams to build strong executive pipelines.",
  },
  {
    icon: <FaChartLine />,
    title: "Tailored Solutions",
    desc: "Every engagement is customized to your organization’s needs.",
    back: "Our approach ensures every strategy aligns with the company's culture and future vision.",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Partnerships",
    desc: "Long-term relationships built on trust, insight, and results.",
    back: "Our clients rely on us for long-term advisory partnerships that deliver measurable outcomes.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.22 },
  },
};

const cardPop = {
  hidden: { opacity: 0, y: 45, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const leftTextAnim = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={leftTextAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              <span className="text-[#0F4C5C]">
                Why Organizations
              </span>{" "}
              <span className="text-gray-800">
                Choose Us
              </span>
            </h2>

            {/* Accent line */}
            <div className="w-16 h-1 bg-[#C9A23F] rounded-full"></div>

            <p className="text-[#6B7280] max-w-xl leading-relaxed text-[15px] md:text-base">
              We partner with organizations to solve complex leadership
              challenges through deep insight, proven experience, and a global
              network of professionals who understand evolving markets.
            </p>

            {/* Highlight stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 max-w-md">

              <div>
                <h3 className="text-2xl font-semibold text-[#0F4C5C]">20+</h3>
                <p className="text-xs text-[#6B7280] mt-1">Years Experience</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#0F4C5C]">150+</h3>
                <p className="text-xs text-[#6B7280] mt-1">Global Clients</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#0F4C5C]">40+</h3>
                <p className="text-xs text-[#6B7280] mt-1">Industries Served</p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-10"
          >
            {points.map((item, index) => (
              <motion.div
                key={index}
                variants={cardPop}
                className="group perspective"
              >

                {/* CARD WRAPPER */}
                <div className="relative w-full h-56 transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180 hover:-translate-y-2">

                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 backface-hidden bg-[#F3F3F0] rounded-2xl p-8 border-4 border-[#EFE6CF] shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:border-[#0F4C5C] group-hover:shadow-[0_0_0_3px_rgba(15,76,92,0.15)]">

                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                      whileHover={{ y: 0 }}
                    >
                      <div className="text-2xl mb-4 text-[#5B6F77] group-hover:text-[#C9A23F] transition-colors duration-300">
                        {item.icon}
                      </div>

                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-[#6B7280] text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>

                    {/* Gold ambient glow */}
                    <span className="absolute -top-8 -right-8 w-28 h-28 bg-[#C9A23F]/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></span>

                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 rotate-y-180 backface-hidden bg-gradient-to-br from-teal-700 to-[#0F4C5C] text-white rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)] flex items-center">

                    <p className="text-sm leading-relaxed">
                      {item.back}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;