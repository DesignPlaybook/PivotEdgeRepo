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
    <section className="py-10 bg-[#F4F1EA] relative overflow-hidden">

      {/* subtle gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <span className="text-lg md:text-xl tracking-[0.25em] uppercase text-[#C9A23F] font-medium break-words">
            Why Leadership Matters
          </span>

          <h2 className="text-3xl md:text-5xl font-light mt-2 mb-2 text-[#0F4C5C] leading-tight">
            Leadership Shapes Performance,
            <br />
            <span className="text-[#C9A23F] font-semibold">
              Culture & Direction
            </span>
          </h2>

          <p className="text-[#5b6f77] max-w-3xl mx-auto mb-14 leading-[1.9] text-[15.5px] font-light">
            Leadership is the single most influential factor in organisational performance. Strategy, culture, governance quality, and execution discipline are all shaped at the top. In complex and rapidly evolving markets, organisations require leaders who combine strategic judgement with operational clarity.
          </p>

        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >

          {/* Card 1 */}
          <motion.div
            variants={cardAnim}
            whileHover={{ y: -8 }}
            className="group p-[1px] rounded-2xl bg-gradient-to-br from-[#C9A23F]/40 via-white/40 to-transparent transition duration-500"
          >
            <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/40 shadow-sm hover:shadow-xl transition duration-500 overflow-hidden">

              <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C9A23F] via-[#0F4C5C] to-[#C9A23F]"></span>

              <h3 className="text-xl font-semibold mb-3 text-[#0F4C5C]">
                Strategic Direction
              </h3>

              <p className="text-[#5b6f77] text-[15px] leading-[1.8] font-light">
                Leadership defines the strategic direction of an organisation, ensuring clarity in decision-making and alignment across functions.
              </p>

            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardAnim}
            whileHover={{ y: -8 }}
            className="group p-[1px] rounded-2xl bg-gradient-to-br from-[#C9A23F]/40 via-white/40 to-transparent transition duration-500"
          >
            <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/40 shadow-sm hover:shadow-xl transition duration-500 overflow-hidden">

              <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C9A23F] via-[#0F4C5C] to-[#C9A23F]"></span>

              <h3 className="text-xl font-semibold mb-3 text-[#0F4C5C]">
                Governance & Culture
              </h3>

              <p className="text-[#5b6f77] text-[15px] leading-[1.8] font-light">
                Strong leadership strengthens governance frameworks and shapes organisational culture, influencing how teams operate and perform.
              </p>

            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardAnim}
            whileHover={{ y: -8 }}
            className="group p-[1px] rounded-2xl bg-gradient-to-br from-[#C9A23F]/40 via-white/40 to-transparent transition duration-500"
          >
            <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/40 shadow-sm hover:shadow-xl transition duration-500 overflow-hidden">

              <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C9A23F] via-[#0F4C5C] to-[#C9A23F]"></span>

              <h3 className="text-xl font-semibold mb-3 text-[#0F4C5C]">
                Enterprise Impact
              </h3>

              <p className="text-[#5b6f77] text-[15px] leading-[1.8] font-light">
                Appointments at functional head level and above carry enterprise-wide consequences, directly influencing performance and long-term value creation.
              </p>

            </div>
          </motion.div>

        </motion.div>

        {/* Closing Line */}
        <p className="mt-14 text-[#0F4C5C] font-medium">
          We approach these decisions with the rigour they demand.
        </p>

      </div>

    </section>
  );
}

export default Introhighlight;