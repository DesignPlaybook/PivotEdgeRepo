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
    <section className="py-5 bg-white relative overflow-hidden">

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
            Delivering Excellence in Leadership Advisory
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            We partner with organizations to identify exceptional leaders,
            build high-performing teams, and drive sustainable growth.
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
            whileHover={{ y: -10 }}
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

            {/* top accent line */}
            <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-gold via-brand-teal to-brand-gold"></span>

            <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
              Global Expertise
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Experience working with organizations across industries worldwide.
            </p>

          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardAnim}
            whileHover={{ y: -10 }}
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
              Strategic Insight
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Data-driven advisory that helps businesses make confident decisions.
            </p>

          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardAnim}
            whileHover={{ y: -10 }}
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
              Trusted Partnership
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Long-term collaboration with clients to build leadership excellence.
            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}

export default Introhighlight;