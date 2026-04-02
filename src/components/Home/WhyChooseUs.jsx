import { motion } from "framer-motion";

const points = [
  {
    title: "Services",
    desc: "Executive Search, Succession Planning, Career Transition, Interim Management, Diversity",
    back: "We support organisations across the full leadership lifecycle with structured and strategic advisory."
  },
  {
    title: "Functions",
    desc: "Boards & Governance, CEO, CFO, Marketing & Sales, HR, Supply Chain, Sustainability, AI",
    back: "Our expertise spans critical leadership functions shaping enterprise performance and governance."
  },
  {
    title: "Industries",
    desc: "Industrial, Real Estate & Infrastructure, Consumer, Healthcare & Life Sciences, BFSI, TMT",
    back: "We partner across sectors where leadership capability directly impacts long-term value creation."
  },
  {
    title: "Our Philosophy",
    desc: "Leadership alignment drives sustainable performance.",
    back: "When leadership capability aligns with organisational ambition, performance becomes sustainable and governance becomes stronger."
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

const ClosingSection = () => {
  return (
    <section className="py-20 bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            <p className="text-[#C9A23F] uppercase tracking-[0.35em] text-sm">
              Closing Perspective
            </p>

            <h2 className="text-3xl md:text-5xl font-light text-[#0F4C5C] leading-tight">
              Executive Search is a
              <span className="text-[#C9A23F] font-semibold"> Strategic Responsibility</span>
            </h2>

            <div className="w-20 h-[2px] bg-[#C9A23F]"></div>

            <p className="text-[#5b6f77] leading-[1.9] text-[15.5px] font-light">
              We believe executive search is a strategic responsibility.
              When leadership capability aligns precisely with organisational ambition,
              performance becomes sustainable and governance becomes stronger.
              That is where the advantage begins.
            </p>

          </motion.div>

          {/* RIGHT CARDS (FLIP BACK) */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {points.map((item, index) => (
              <motion.div
                key={index}
                variants={cardPop}
                className="group perspective"
              >

                <div className="relative w-full h-48 transform-style preserve-3d transition-transform duration-700 group-hover:rotate-y-180">

                  {/* FRONT */}
                  <div className="absolute inset-0 backface-hidden bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-[#e6dcc6] shadow-md">

                    <h3 className="text-[#0F4C5C] text-lg font-medium mb-3">
                      {item.title}
                    </h3>

                    <p className="text-[#5b6f77] text-sm leading-[1.7] font-light">
                      {item.desc}
                    </p>

                    <div className="mt-5 h-[2px] w-14 bg-[#C9A23F] group-hover:w-24 transition-all duration-500" />

                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 rotate-y-180 backface-hidden bg-gradient-to-br from-[#0F4C5C] to-[#0a2f38] text-white rounded-2xl p-6 flex items-center shadow-lg">

                    <p className="text-sm leading-relaxed font-light">
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

export default ClosingSection;