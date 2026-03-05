import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hero1 from "../../assets/images/hero.jpeg";
import hero2 from "../../assets/images/hero1.jpg";

const images = [hero1, hero2];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden min-h-[80vh] md:min-h-screen">

      {/* Background Images */}
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt="Leadership background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1 }}
          animate={
            index === current
              ? { opacity: 1, scale: 1.08 }
              : { opacity: 0, scale: 1 }
          }
          transition={{ duration: 2.2, ease: "easeOut" }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Soft Gold Glow */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start">
        <div className="w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-brand-gold/20 blur-[120px] md:blur-[140px] rounded-full md:ml-[-120px]" />
      </div>

      {/* Moving Gradient Light */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "linear-gradient(120deg, transparent 30%, rgba(201,162,63,0.2) 50%, transparent 70%)",
            "linear-gradient(300deg, transparent 30%, rgba(15,76,92,0.25) 50%, transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center md:justify-start min-h-[80vh] md:min-h-screen">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="max-w-4xl px-6 md:px-12 text-center md:text-left"
        >

          {/* Accent Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 110 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-[3px] bg-brand-gold mb-8 mx-auto md:mx-0"
          />

          {/* Heading */}
          <h1
            className="
            text-white font-light
            leading-[1.2]
            text-3xl sm:text-4xl md:text-7xl
            tracking-[-0.02em]
            "
          >
            Leadership that shapes the{" "}

            <span
              className="
              font-semibold
              bg-gradient-to-r
              from-brand-gold
              via-yellow-200
              to-brand-gold
              bg-clip-text
              text-transparent
              "
            >
              future
            </span>
          </h1>

          {/* Paragraph */}
          <p
            className="
            mt-6
            text-gray-200
            max-w-[560px]
            text-base md:text-lg
            leading-relaxed
            tracking-wide
            mx-auto md:mx-0
            "
          >
            Trusted advisors to organizations seeking exceptional leadership
            across industries and global markets.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <button
              className="
              bg-brand-gold text-black
              px-7 py-3 md:px-8 md:py-4
              rounded-lg
              font-medium tracking-wide
              shadow-lg shadow-brand-gold/30
              hover:scale-[1.05]
              hover:shadow-xl
              transition-all duration-300
              "
            >
              Explore Services
            </button>

            <button
              className="
              border border-white/70
              text-white
              px-7 py-3 md:px-8 md:py-4
              rounded-lg
              backdrop-blur-md
              bg-white/10
              hover:bg-white hover:text-black
              transition-all duration-300
              "
            >
              Our Expertise
            </button>

          </div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[20px] h-[32px] md:w-[22px] md:h-[35px] border border-white rounded-full flex justify-center">
          <div className="w-[3px] h-[6px] bg-white mt-2 rounded-full" />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;