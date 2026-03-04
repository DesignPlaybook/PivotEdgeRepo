import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hero1 from "../../assets/images/image3.jpg";
import hero2 from "../../assets/images/image2.jpg";

const images = [hero1, hero2];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000); // slower = premium

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background Images */}
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt="Leadership background"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1 }}
          animate={
            index === current
              ? { opacity: 1, scale: 1.08 }
              : { opacity: 0, scale: 1 }
          }
          transition={{ duration: 2.2, ease: "easeOut" }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="max-w-4xl px-6 md:px-12 text-center md:text-left"
        >

          {/* Accent Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-[3px] bg-brand-gold mb-6 mx-auto md:mx-0"
          />

          <h1 className="text-white font-light leading-tight
            text-3xl sm:text-4xl md:text-6xl">
            Leadership that shapes the future
          </h1>

          <p className="mt-4 md:mt-6 text-gray-200 max-w-xl
            text-base sm:text-lg">
            Trusted advisors to organizations seeking exceptional leadership
            across industries and markets.
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;