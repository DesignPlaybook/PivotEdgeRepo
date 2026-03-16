import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const insights = [
  {
    title: "Navigating Leadership in the Age of AI",
    excerpt:
      "Artificial intelligence is reshaping enterprise strategy. Organizations must identify leaders who can integrate technology, governance, and human decision-making.",
  },
  {
    title: "The Importance of Board Succession Planning",
    excerpt:
      "Strong boards are built through thoughtful succession planning, diversity of perspectives, and leadership continuity aligned with long-term strategy.",
  },
  {
    title: "Building Future-Ready Leadership Teams",
    excerpt:
      "Organizations that invest in leadership development and succession pipelines are better positioned to adapt to global disruption and evolving markets.",
  },
];

/* Entry Animation */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const headingAnim = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const InsightsSection = () => {
  return (
    <section className="bg-brand-offwhite py-2 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={headingAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-teal pb-2.5">
            Insights & Perspectives
          </h2>

          <p className="mt-2 text-brand-slate">
            Our perspectives on leadership, governance, and the evolving role
            of executives in shaping sustainable enterprise performance.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {insights.map((item, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.35 }}
              className="
                group relative
                rounded-2xl p-8
                bg-brand-ivory
                border border-black/5
                shadow-[0_18px_55px_rgba(0,0,0,0.12)]
                transition-all duration-500
                hover:shadow-[0_28px_75px_rgba(0,0,0,0.18)]
                overflow-hidden
              "
            >

              {/* Gold accent line */}
              <span
                className="
                  absolute top-0 left-0 w-full h-[3px]
                  bg-gradient-to-r
                  from-brand-gold
                  via-brand-teal
                  to-brand-gold
                  opacity-80
                "
              />

              {/* Soft glow background */}
              <span
                className="
                  absolute -top-16 -right-16
                  w-40 h-40
                  bg-brand-gold/20
                  blur-3xl
                  rounded-full
                  opacity-0
                  group-hover:opacity-60
                  transition duration-500
                "
              />

              {/* Content */}
              <div className="relative z-10">

                <h3 className="text-lg font-semibold text-brand-charcoal mb-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-brand-slate text-sm leading-relaxed mb-6">
                  {item.excerpt}
                </p>

                <Link
                  to="/insights"
                  className="
                    inline-flex items-center gap-2
                    text-brand-teal font-medium
                    transition-all duration-300
                    group-hover:text-teal-950
                  "
                >
                  Read more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Divider before footer */}
        <div className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"></div>

      </div>
    </section>
  );
};

export default InsightsSection;