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
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

/* CARD ANIMATION */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const cards = [
  {
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    title: "Mission",
    text: "Deliver world-class leadership advisory services that empower organizations."
  },
  {
    img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    title: "Vision",
    text: "Become the most trusted partner for executive talent and leadership strategy."
  },
  {
    img: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    title: "Values",
    text: "Integrity, collaboration and innovation guide every engagement."
  }
];

const About = () => {
  return (
    <div className="flex flex-col overflow-hidden">

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
            transition={{ duration: .8 }}
            className="text-center max-w-3xl"
          >

            <div className="h-[3px] w-32 bg-gradient-to-r from-brand-gold via-brand-teal to-brand-gold mx-auto mb-8 rounded-full"></div>

            <h1 className="text-white text-4xl md:text-6xl font-light leading-tight tracking-wide">
              About Our <span className="text-brand-gold font-semibold">Firm</span>
            </h1>

            <p className="mt-6 text-gray-200 text-lg leading-relaxed tracking-wide">
              Partnering with organizations to build exceptional leadership.
            </p>

          </motion.div>

        </div>
      </section>


      {/* INTRO */}
      <section className="py-24 bg-[#F8F8F5]">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="relative group">

            <img
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
              className="rounded-2xl shadow-xl w-full h-[380px] object-cover transition duration-500 group-hover:scale-[1.04]"
              alt="leadership"
            />

            <div className="absolute -bottom-6 -right-6 bg-brand-teal text-white px-6 py-3 rounded-xl shadow-lg text-sm tracking-wider">
              Trusted by Global Companies
            </div>

          </div>

          <div>

            <h2 className="text-4xl font-semibold mb-6 text-gray-900 tracking-tight">
              Leadership That Shapes the Future
            </h2>

            <div className="w-24 h-[3px] bg-brand-gold mb-8 rounded-full"></div>

            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              We partner with organizations to identify, attract and develop the
              leaders who drive transformation and sustainable growth.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Our team blends global expertise with deep industry insight to help
              companies build leadership teams capable of navigating complex
              challenges and opportunities.
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
        className="py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <img
            src={aboutHero}
            className="rounded-2xl shadow-xl h-[380px] object-cover w-full"
            alt="our story"
          />

          <div>

            <h2 className="text-4xl font-semibold mb-6 text-gray-900 tracking-tight">
              Our Story
            </h2>

            <div className="w-24 h-[3px] bg-brand-gold mb-8 rounded-full"></div>

            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Our firm was founded with a vision to help organizations identify
              and develop exceptional leadership talent.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
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
        className="py-24 bg-brand-teal text-white"
      >

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

          {[
            { num: 20, label: "Years Experience" },
            { num: 500, label: "Placements" },
            { num: 40, label: "Industries Served" },
            { num: 30, label: "Global Partners" }
          ].map((stat, i) => (

            <div key={i} className="group">

              <h3 className="text-4xl md:text-5xl font-semibold text-brand-gold mb-3">
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
      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-semibold text-gray-900 mb-16 text-center tracking-tight">
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
                className="relative bg-white rounded-2xl shadow-md p-10 flex flex-col items-center text-center hover:shadow-2xl transition duration-300 group"
              >

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[4px] rounded-full bg-gradient-to-r from-brand-gold via-brand-teal to-brand-gold"/>

                <img
                  src={card.img}
                  className="h-16 w-16 mb-6 rounded-full object-cover border border-gray-200 p-1 transition group-hover:scale-110"
                  alt={card.title}
                />

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {card.text}
                </p>

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
        className="py-28 bg-[#F3F3F0]"
      >

        <div className="max-w-5xl mx-auto px-6 text-center bg-white shadow-2xl rounded-3xl p-16">

          <h2 className="text-4xl font-semibold mb-6 text-gray-900">
            Let’s Build Exceptional Leadership
          </h2>

          <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
            Connect with our consultants and discover how we can help
            your organization build transformational leadership teams.
          </p>

          <button className="bg-brand-teal text-white px-10 py-4 rounded-lg text-lg hover:scale-105 hover:shadow-lg transition">
            Contact Our Team
          </button>

        </div>

      </motion.section>

    </div>
  );
};

export default About;