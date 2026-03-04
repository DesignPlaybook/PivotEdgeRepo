import { motion } from "framer-motion";
import { FaGlobe, FaUserTie, FaChartLine, FaHandshake } from "react-icons/fa";

const points = [
  {
    icon: <FaGlobe />,
    title: "Global Perspective",
    desc: "Deep understanding of leadership across geographies and markets.",
  },
  {
    icon: <FaUserTie />,
    title: "Leadership Expertise",
    desc: "Decades of experience advising senior leaders and boards.",
  },
  {
    icon: <FaChartLine />,
    title: "Tailored Solutions",
    desc: "Every engagement is customized to your organization’s needs.",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Partnerships",
    desc: "Long-term relationships built on trust, insight, and results.",
  },
];

/* Animations */
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
      duration: 0.8,       // ⬅ slower & smoother
      ease: "easeOut",
    },
  },
};

const leftTextAnim = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="py-14 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={leftTextAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-teal">
              Why Organizations Choose Us
            </h2>
            <p className="mt-6 text-brand-slate max-w-xl leading-relaxed">
              We partner with organizations to solve complex leadership
              challenges through insight, experience, and a global network.
            </p>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {points.map((item, index) => (
              <motion.div
                key={index}
                variants={cardPop}
                className="
                  group bg-white p-8 rounded-2xl
                  border border-black/5
                  shadow-[0_12px_40px_rgba(0,0,0,0.14)]
                  transition-all duration-500
                  hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                "
              >
                {/* FLOATING CONTENT */}
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
                  {/* Icon */}
                  <div
                    className="
                      text-2xl mb-4 text-brand-charcoal
                      transition-colors duration-300
                      group-hover:text-brand-gold
                    "
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-brand-charcoal">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-brand-slate text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;