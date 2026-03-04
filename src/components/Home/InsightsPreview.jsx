import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const insights = [
  {
    title: "The Future of Leadership in a Digital World",
    excerpt:
      "How organizations can prepare leaders for complexity, change, and digital transformation.",
  },
  {
    title: "Why Executive Search Is Evolving",
    excerpt:
      "Traditional hiring models are changing. Here’s what modern leadership search looks like.",
  },
  {
    title: "Building Inclusive Leadership Teams",
    excerpt:
      "Diversity-driven leadership is no longer optional — it’s a business imperative.",
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
  hidden: { opacity: 0, y: 45, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const headingAnim = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const InsightsSection = () => {
  return (
    <section className="py-10 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={headingAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-teal">
            Insights & Perspectives
          </h2>
          <p className="mt-4 text-brand-slate">
            Our thinking on leadership, organizations, and the future of work.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {insights.map((item, index) => (
            <motion.div
              key={index}
              variants={cardPop}
              className="
                group bg-white rounded-2xl p-8
                border border-black/5
                shadow-[0_12px_40px_rgba(0,0,0,0.14)]
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              "
            >
              {/* Floating wrapper */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.25,
                }}
                whileHover={{ y: 0 }}
              >
                <h3 className="text-lg font-semibold text-brand-charcoal mb-4">
                  {item.title}
                </h3>

                <p className="text-brand-slate text-sm leading-relaxed mb-6">
                  {item.excerpt}
                </p>

                <Link
                  to="/insights"
                  className="
                    inline-block font-medium text-brand-teal
                    border-b border-brand-teal
                    hover:text-brand-gold hover:border-brand-gold
                    transition-colors
                  "
                >
                  Read more →
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default InsightsSection;