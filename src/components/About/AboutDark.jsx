import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import aboutHero from "../../assets/images/about.jpg";

/* ANIMATION VARIANTS */

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* CARD ANIMATION */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const cards = [
  {
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    title: "Mission",
    text: "Deliver world-class leadership advisory services that empower organizations.",
  },
  {
    img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    title: "Vision",
    text: "Become the most trusted partner for executive talent and leadership strategy.",
  },
  {
    img: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    title: "Values",
    text: "Integrity, collaboration and innovation guide every engagement.",
  },
];

const About = () => {
  return (
    // <div className="flex flex-col overflow-hidden"> OLD
    <div className="flex flex-col overflow-hidden bg-gradient-to-br from-[#071E26] via-[#0B2C36] to-[#071E26] text-white">
      {/* HERO */}
      <section className="relative min-h-[78vh] w-full">
        <img
          src={aboutHero}
          className="absolute inset-0 w-full h-full object-cover"
          alt="teamwork"
        />

        <div className="absolute inset-0 bg-black/70 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl"
          >
            <div className="h-[3px] w-32 bg-gradient-to-r from-[#C6A437] via-[#1B6F7A] to-[#C6A437] mx-auto mb-8 rounded-full"></div>

            <h1 className="text-white text-4xl md:text-6xl font-light leading-tight tracking-wide">
              About Our{" "}
              <span className="text-[#C6A437] font-semibold">Firm</span>
            </h1>

            <p className="mt-6 text-gray-200 text-lg leading-relaxed tracking-wide">
              Partnering with organizations to build exceptional leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      {/* <section className="py-24 bg-[#F8F8F5]">  OLD */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
              className="rounded-2xl shadow-xl w-full h-[380px] object-cover transition duration-500 group-hover:scale-[1.04]"
              alt="leadership"
            />

            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#C6A437] to-[#E5C76B] text-black text-white px-6 py-3 rounded-xl shadow-lg text-sm tracking-wider">
              Trusted by Global Companies
            </div>
          </div>

          <div>
            {/* <h2 className="text-4xl font-semibold mb-6 text-white tracking-tight"> OLD */}
            <h2 className="text-4xl font-light mb-6 text-white tracking-wide">
              Leadership That Shapes the Future
            </h2>

            <div className="w-24 h-[3px] bg-brand-gold mb-8 rounded-full"></div>

            <p className="text-white/70 mb-6 leading-relaxed text-lg">
              We partner with organizations to identify, attract and develop the
              leaders who drive transformation and sustainable growth.
            </p>

            <p className="text-white/70 leading-relaxed text-lg">
              Our team blends global expertise with deep industry insight to
              help companies build leadership teams capable of navigating
              complex challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <motion.section
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="py-24 bg-white/[0.03] backdrop-blur-xl border-y border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src={aboutHero}
            className="rounded-2xl shadow-xl h-[380px] object-cover w-full"
            alt="our story"
          />

          <div>
            <h2 className="text-4xl font-semibold mb-6 text-white tracking-tight">
              Our Story
            </h2>

            <div className="w-24 h-[3px] bg-[#C6A437] mb-8 rounded-full"></div>

            <p className="text-white/70 mb-6 leading-relaxed text-lg">
              Our firm was founded with a vision to help organizations identify
              and develop exceptional leadership talent.
            </p>

            <p className="text-white/70 leading-relaxed text-lg">
              Today we partner with companies globally to deliver executive
              search and leadership consulting.
            </p>
          </div>
        </div>
      </motion.section>

      {/* STATS */}
      <motion.section
        variants={fadeRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="py-24 bg-[#0B2C36]"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: 20, label: "Years Experience" },
            { num: 500, label: "Placements" },
            { num: 40, label: "Industries Served" },
            { num: 30, label: "Global Partners" },
          ].map((stat, i) => (
            <div key={i} className="group">
              <h3 className="text-4xl md:text-5xl font-semibold text-[#C6A437] mb-3">
                <CountUp end={stat.num} duration={3} enableScrollSpy />+
              </h3>

              <p className="text-gray-200 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* PRINCIPLES */}
      <section className="py-24 bg-[#0A2630]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-white mb-16 text-center tracking-tight">
            Our Principles
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-12"
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                variants={cardAnim}
                whileHover={{ y: -12 }}
                className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-10 flex flex-col items-center text-center hover:shadow-2xl transition duration-300 group"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[4px] rounded-full bg-gradient-to-r from-[#C6A437] via-[#1B6F7A] to-[#C6A437]" />

                <img
                  src={card.img}
                  className="h-16 w-16 mb-6 rounded-full object-cover border border-gray-200 p-1 transition group-hover:scale-110"
                  alt={card.title}
                />

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {card.title}
                </h3>

                <p className="text-white/70 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="py-28"
      >
        <div
          className="max-w-5xl mx-auto px-6 text-center bg-gradient-to-br from-[#0B2C36] to-[#071E26]
border border-[#C6A437]/40
shadow-[0_40px_80px_rgba(0,0,0,0.6)]
rounded-3xl p-16"
        >
          <h2 className="text-4xl font-semibold mb-6 text-white">
            Let’s Build Exceptional Leadership
          </h2>

          <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
            Connect with our consultants and discover how we can help your
            organization build transformational leadership teams.
          </p>

          <button className="bg-gradient-to-r from-[#C6A437] to-[#E5C76B] text-black text-white px-10 py-4 rounded-lg text-lg hover:scale-105 hover:shadow-lg transition">
            Contact Our Team
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
