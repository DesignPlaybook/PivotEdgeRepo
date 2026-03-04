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

/* Entry animation */
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
    <section className="py-8 bg-brand-offwhite">
      <div className="max-w-full mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-semibold text-brand-teal text-center mb-10"
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
            flex gap-6
            pt-6 pb-12
            overflow-x-auto overflow-y-visible
          "
        >
          {domains.map((domain, index) => (
           <motion.div
  key={index}
  variants={cardAnim}
  className="
    relative flex-shrink-0
    w-[360px] h-[260px] md:w-[320px] md:h-[280px]
    rounded-2xl overflow-hidden
    bg-black
    shadow-[0_14px_45px_rgba(0,0,0,0.22)]
  "
>
  {/* FLOATING WRAPPER (same as Services page) */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.3,
    }}
    whileHover={{ y: 0 }}   // pause floating on hover
    className="h-full w-full"
  >
    {/* Image */}
    <img
      src={domain.image}
      alt={domain.title}
      className="
        absolute inset-0 w-full h-full object-cover
        transition-transform duration-700 ease-out
        hover:scale-105
      "
    />

    {/* Gradient */}
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

    {/* Text */}
    <div className="absolute bottom-0 left-0 p-5">
      <h3 className="text-lg font-semibold text-white">
        {domain.title}
      </h3>
      <p className="mt-1 text-sm text-white/85">
        {domain.description}
      </p>
    </div>
  </motion.div>
</motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="mt-10 text-center"
        >
          <Link
            to="/domains"
            className="
              inline-block text-brand-teal font-medium
              border-b border-brand-teal
              hover:text-brand-gold hover:border-brand-gold
              transition-colors
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