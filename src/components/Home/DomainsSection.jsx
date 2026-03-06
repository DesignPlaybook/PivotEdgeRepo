import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const domains = [
  {
    title: "Technology",
    description: "Innovative solutions & digital transformation.",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
  },
  {
    title: "Healthcare",
    description: "Building healthy futures and care excellence.",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
  },
  {
    title: "Consumer & Retail",
    description: "Retail insights & consumer trends.",
    image: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg",
  },
  {
    title: "Industrial & Manufacturing",
    description: "Optimized production & advanced engineering.",
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
  },
  {
    title: "Financial Services",
    description: "Smart financial strategies & advisory.",
    image: "https://tse3.mm.bing.net/th/id/OIP.LTSN-pEUE5mWBc3RLJ8VPQHaEo?pid=Api&P=0&h=180",
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
    <section className="py-8 md:py-12 bg-brand-offwhite">
      <div className="max-w-full mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-2xl md:text-4xl font-semibold text-brand-teal text-center mb-8 md:mb-10"
        >
          Industries We Serve
        </motion.h2>

        {/* Horizontal Scroll */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="
            domains-scroll
            flex gap-4 md:gap-6
            pt-4 md:pt-6 pb-10 md:pb-12
            overflow-x-auto overflow-y-visible
            scroll-smooth
          "
        >
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              className="
                group relative flex-shrink-0
                w-[85vw] sm:w-[300px] md:w-[320px] lg:w-[360px]
                h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px]
                rounded-2xl overflow-hidden
                bg-black
                shadow-[0_14px_45px_rgba(0,0,0,0.22)]
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.35)]
              "
            >

              {/* Floating wrapper */}
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

                {/* Image */}
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="
                    absolute inset-0 w-full h-full object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-110
                  "
                />

              </motion.div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Glass effect */}
              <div
                className="
                  absolute inset-0
                  bg-white/5 backdrop-blur-[2px]
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                "
              />

              {/* Shimmer light */}
              <div
                className="
                  absolute inset-0 overflow-hidden
                  before:absolute before:top-0 before:left-[-120%]
                  before:h-full before:w-[120%]
                  before:bg-gradient-to-r
                  before:from-transparent
                  before:via-white/40
                  before:to-transparent
                  before:skew-x-[-20deg]
                  group-hover:before:left-[120%]
                  before:transition-all before:duration-1000
                "
              />

              {/* Text */}
              <div className="absolute bottom-0 left-0 p-4 md:p-6 z-10">
                <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">
                  {domain.title}
                </h3>

                <p className="mt-1 text-xs md:text-sm text-white/85">
                  {domain.description}
                </p>
              </div>

              {/* Glow orb */}
              <span
                className="
                  absolute -top-6 -right-6
                  h-24 w-24
                  rounded-full
                  bg-brand-gold/30
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition duration-700
                "
              />

            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="mt-6 md:mt-10 text-center"
        >
          <Link
            to="/domains"
            className="
              inline-block text-brand-teal font-medium
              border-b border-brand-teal
              hover:text-brand-gold hover:border-brand-gold
              transition-colors
              text-sm md:text-base
            "
          >
            View all domains →
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default DomainsSection;