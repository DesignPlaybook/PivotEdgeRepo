import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const cardAnim = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

function Introhighlight() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* subtle background effect */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_20%,#000_0%,transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >

          <span className="text-sm tracking-widest uppercase text-brand-gold font-medium">
            Our Approach
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6 text-brand-teal">
            Advising Organizations on Leadership That Drives Performance
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-14 leading-relaxed">
            We partner with boards, CEOs, and senior executives to identify
            transformational leaders, strengthen governance, and build
            leadership teams capable of delivering long-term enterprise value.
          </p>

        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >

          {/* Card 1 */}
          <motion.div
            variants={cardAnim}
            whileHover={{ y: -10, scale: 1.02 }}
            className="
            group
            p-8
            border border-black/5
            rounded-2xl
            bg-white
            shadow-sm
            hover:shadow-xl
            transition duration-500
            relative
            overflow-hidden
            "
          >

            <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-gold via-brand-teal to-brand-gold"></span>

            <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
              Leadership Expertise
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Deep experience advising boards and executive teams on leadership
              appointments, succession planning, and governance priorities.
            </p>

          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardAnim}
            whileHover={{ y: -10, scale: 1.02 }}
            className="
            group
            p-8
            border border-black/5
            rounded-2xl
            bg-white
            shadow-sm
            hover:shadow-xl
            transition duration-500
            relative
            overflow-hidden
            "
          >

            <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-gold via-brand-teal to-brand-gold"></span>

            <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
              Strategic Perspective
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Insight-driven advisory designed to align leadership decisions
              with long-term business strategy and enterprise goals.
            </p>

          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardAnim}
            whileHover={{ y: -10, scale: 1.02 }}
            className="
            group
            p-8
            border border-black/5
            rounded-2xl
            bg-white
            shadow-sm
            hover:shadow-xl
            transition duration-500
            relative
            overflow-hidden
            "
          >

            <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-gold via-brand-teal to-brand-gold"></span>

            <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
              Long-Term Partnership
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              We build trusted relationships with organizations to support
              leadership transitions, growth initiatives, and strategic change.
            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}

export default Introhighlight;