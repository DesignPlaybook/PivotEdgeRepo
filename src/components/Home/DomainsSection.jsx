import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const domains = [
  {
    title: "Industrial",
    description:
      "Leadership across industrial, manufacturing, and engineering organisations driving large-scale operations and transformation.",
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
  },
  {
    title: "Real Estate & Infrastructure",
    description:
      "Executive talent for real estate platforms and infrastructure businesses shaping long-term development and capital deployment.",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
  },
  {
    title: "Consumer",
    description:
      "Leaders enabling brand growth, customer engagement, and commercial excellence across consumer-driven businesses.",
    image: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Leadership for healthcare systems, pharmaceuticals, and life sciences organisations navigating complexity and innovation.",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
  },
  {
    title: "Banking & Financial Services",
    description:
      "Strategic leadership across banking, financial institutions, and investment platforms operating in regulated environments.",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.LTSN-pEUE5mWBc3RLJ8VPQHaEo?pid=Api&P=0&h=180",
  },
  {
    title: "Technology, Media & Telecommunications",
    description:
      "Leadership for technology-led organisations, digital platforms, and media ecosystems driving innovation and scale.",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const DomainsSection = () => {
  return (
    <section className="py-20 md:py-4 bg-[#F4F1EA] relative overflow-hidden max-w-full">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%)]"></div>

      <div className="max-w-full mx-auto px-4 md:px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[#C9A23F] uppercase tracking-[0.35em] text-xl mb-2">
            Where We Operate
          </p>

          <h2 className="text-3xl md:text-5xl font-light text-[#0F4C5C]">
            Industries We Serve
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-[#C9A23F] to-transparent mx-auto mt-6 rounded-full"></div>

          <p className="mt-6 max-w-2xl mx-auto text-[#5b6f77] text-[15.5px] leading-[1.9] font-light">
            We partner with organisations across key sectors where leadership
            capability directly influences enterprise performance and long-term value creation.
          </p>
        </motion.div>

        {/* Horizontal Scroll */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="
            domains-scroll
            flex gap-4 md:gap-6
            pt-4 pb-10
            overflow-x-auto
            overflow-y-hidden
            scroll-smooth
            px-[2px]
          "
        >
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              className="
                group relative flex-shrink-0
                w-[280px] sm:w-[300px] md:w-[320px] lg:w-[360px]
                h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px]
                rounded-2xl overflow-hidden
                bg-black
                shadow-[0_14px_45px_rgba(0,0,0,0.22)]
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.35)]
              "
            >

              {/* Floating animation */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                whileHover={{ y: 0 }}
                className="h-full w-full"
              >
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 p-5 md:p-6 z-10">
                <h3 className="text-lg md:text-xl font-medium text-white tracking-wide">
                  {domain.title}
                </h3>

                <p className="mt-2 text-[13.5px] md:text-sm text-white/90 leading-[1.6] font-light">
                  {domain.description}
                </p>
              </div>

              {/* Glow */}
              <span className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-[#C9A23F]/30 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

            </motion.div>
          ))}
        </motion.div>

        {/* Functional Expertise */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto text-[#5b6f77] text-[15.5px] leading-[1.9] font-light mt-6"
        >
          Our functional expertise spans Boards and Governance, Chief Executive Officers,
          Chief Financial Officers, Marketing and Sales, Human Resources, Supply Chain,
          Sustainability, and Artificial Intelligence.
        </motion.p>

      </div>
    </section>
  );
};

export default DomainsSection;