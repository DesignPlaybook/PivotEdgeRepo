import { useEffect, useState } from "react";
import hero1 from "../assets/images/image3.jpg";
import hero2 from "../assets/images/image2.jpg";

const images = [hero1, hero2];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      
      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Leadership background"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="max-w-4xl px-6 md:px-12 text-center md:text-left">
          
          <h1 className="text-white font-light leading-tight
            text-3xl sm:text-4xl md:text-6xl">
            Leadership that shapes the future
          </h1>

          <p className="mt-4 md:mt-6 text-gray-200 max-w-xl
            text-base sm:text-lg">
            Trusted advisors to organizations seeking exceptional leadership
            across industries and markets.
          </p>

        </div>
      </div>

    </section>
  );
};

export default Hero;