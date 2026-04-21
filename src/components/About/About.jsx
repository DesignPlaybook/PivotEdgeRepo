import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const About = () => {
  const nextSectionRef = useRef(null);
  const scrollToNext = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col overflow-hidden text-[#2f3e46]">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <img
          src="https://cdn.pixabay.com/photo/2024/08/03/10/09/business-8941843_1280.jpg"
          className="absolute w-full h-full object-cover scale-105"
        />

        {/* Dark + Gold Overlay */}
        <div
          className="absolute inset-0 
    bg-[radial-gradient(circle_at_top,#C9A23F33,transparent_60%),linear-gradient(to_bottom,#06151a,#0b1f26)]
    opacity-95"
        ></div>

        {/* Subtle Noise / Texture */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay 
    bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"
        ></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-6"
        >
          {/* Top Label */}
          <p className="text-[#C9A23F] tracking-[0.35em] text-sm font-medium mb-6 uppercase">
            Advantage Starts Here
          </p>

          {/* Heading */}
          <h1 className="text-white text-5xl md:text-6xl font-light leading-[1.2] tracking-wide">
            About{" "}
            <span className="text-[#C9A23F] font-semibold">
              PivotEdge Partners
            </span>
          </h1>

          {/* Divider */}
          <div className="mt-8 flex justify-center">
            <div className="w-28 h-[3px] bg-gradient-to-r from-[#C9A23F] to-transparent rounded-full"></div>
          </div>

          {/* Description */}
          <p className="mt-8 text-gray-300 text-[17px] leading-[1.9] font-light max-w-2xl mx-auto">
            Leadership that shapes strategy, governance, and long-term
            enterprise performance.
          </p>

          {/* Optional CTA (can remove if not needed) */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={scrollToNext}
              className="px-6 py-3 border border-[#C9A23F]/60 text-[#C9A23F] rounded-full text-sm tracking-wide hover:bg-[#C9A23F] hover:text-[#0b1f26] transition duration-300 cursor-pointer"
            >
              Explore More
            </button>
          </div>
        </motion.div>

        {/* Bottom Fade (smooth transition to next section) */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#F4F1EA]"></div>
      </section>

      {/* PHILOSOPHY */}
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60"></div>

      <section
        ref={nextSectionRef}
        className="py-2 bg-[#F4F1EA] relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 relative z-10">
          {/* LEFT SIDE (STICKY) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:sticky md:top-28 h-fit"
          >
            <p className="text-[#C9A23F] uppercase tracking-[0.35em] text-xs mb-6">
              Our Leadership Philosophy
            </p>

            <h2 className="text-5xl md:text-6xl font-light text-[#0F4C5C] leading-tight">
              Leadership is not defined by title.
              <br />
              <span className="text-[#C9A23F] font-semibold">
                It is defined by impact.
              </span>
            </h2>

            <div className="mt-8 w-24 h-[3px] bg-gradient-to-r from-[#C9A23F] to-transparent rounded-full"></div>

            <p className="mt-8 text-[#5b6f77] text-[15.5px] leading-[1.8] font-light max-w-lg">
              At PivotEdge Partners, leadership is evaluated not only by
              experience, but by judgement, adaptability, and long-term impact
              on organisational performance.
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {[
              "At PivotEdge Partners, we believe the quality of leadership determines organisational outcomes. Boards shape oversight and direction, executives define vision and performance, and functional leaders translate strategy into execution. Emerging domains such as Artificial Intelligence continue to redefine how value is created.",

              "Our role is to ensure leadership capability aligns precisely with strategic ambition. We approach every mandate with structured evaluation, market intelligence, and governance awareness.",

              "We assess not only experience, but judgement, adaptability, cultural alignment, and long-term enterprise impact.",

              "We view executive search as a strategic responsibility. When leadership is aligned to purpose and performance, organisations gain clarity, stability, and the confidence to move forward.",
            ].map((text, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl p-[1px] bg-gradient-to-br from-[#C9A23F]/40 via-white/40 to-transparent hover:scale-[1.02] transition duration-500"
              >
                <div className="relative bg-white/80 backdrop-blur-xl rounded-xl p-6 md:p-7 border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)] transition duration-500">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#C9A23F22] to-transparent"></div>

                  <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#C9A23F] to-transparent opacity-80"></div>

                  <div className="mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#C9A23F] rounded-full"></div>
                    <div className="h-[1px] flex-1 bg-[#e6dcc6]"></div>
                  </div>

                  <p className="text-[15.5px] leading-[1.8] text-[#4b5c63] tracking-[0.2px] font-light">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* advantgaes */}
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60"></div>

      <section className="py-5 bg-[#F4F1EA] relative overflow-hidden">
        {/* same background glow as philosophy */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%)]"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* HEADING */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#C9A23F] uppercase tracking-[0.35em] text-xs mb-4">
              About PivotEdge Partners
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-[#0F4C5C] leading-tight">
              Advantage{" "}
              <span className="text-[#C9A23F] font-semibold">Starts Here</span>
            </h2>

            <div className="mt-6 w-20 h-[3px] bg-gradient-to-r from-[#C9A23F] to-transparent mx-auto rounded-full"></div>

            <p className="mt-4 text-[#5b6f77] text-[15.5px] leading-[1.8] font-light">
              Leadership decisions shape the trajectory of organisations. The
              right appointment strengthens governance, sharpens execution, and
              positions the enterprise for sustained growth. The wrong one
              creates friction, delay, and strategic drift.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {/* RIGHT */}
            <div className="group relative overflow-hidden rounded-xl p-[1px] bg-gradient-to-br from-[#C9A23F]/40 via-white/40 to-transparent">
              <div className="relative bg-[#FDFBF7]/90 backdrop-blur-xl rounded-xl p-8 border border-[#e6dcc6] shadow-sm hover:shadow-xl transition duration-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#C9A23F22] to-transparent"></div>

                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A23F] mb-4">
                  Right Leadership
                </p>

                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-4">
                  Strengthens & Accelerates
                </h3>

                <p className="text-[#5b6f77] text-[15px] leading-[1.8] font-light">
                  The right appointment strengthens governance, sharpens
                  execution, and positions the enterprise for sustained growth.
                </p>
              </div>
            </div>

            {/* CONTRAST */}
            <div className="group relative overflow-hidden rounded-xl p-[1px] bg-gradient-to-br from-[#d1d5db]/40 via-white/40 to-transparent">
              <div className="relative bg-[#F8F7F4]/90 backdrop-blur-xl rounded-xl p-8 border border-[#e5e7eb] shadow-sm hover:shadow-xl transition duration-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#d1d5db33] to-transparent"></div>

                <p className="text-xs uppercase tracking-[0.3em] text-[#6b7280] mb-4">
                  Leadership Misalignment
                </p>

                <h3 className="text-xl font-semibold text-[#0F4C5C] mb-4">
                  Creates Friction & Drift
                </h3>

                <p className="text-[#5b6f77] text-[15px] leading-[1.8] font-light">
                  Misaligned leadership creates friction, delays execution, and
                  leads to strategic drift across the organisation.
                </p>
              </div>
            </div>
          </div>

          {/* FIRM DESCRIPTION */}
          <div className="mt-14 max-w-4xl mx-auto text-center">
            <p className="text-[#5b6f77] text-[15.5px] leading-[1.9] font-light">
              PivotEdge Partners is a specialist executive search and leadership
              advisory firm working with Boards, Chief Executives, and senior
              leadership teams across industries. We focus on functional heads
              and above, where leadership impact directly influences enterprise
              performance and long-term value creation.
            </p>
          </div>
        </div>
      </section>
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60"></div>

      {/* WHO WE ARE / HOW WE WORK */}
      <section className="py-24 bg-[#F4F1EA] relative overflow-hidden">
        {/* same background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 relative z-10">
          {[
            {
              title: "Who We Are",
              points: [
                "We are advisors entrusted with consequential decisions across Executive Search, Board and Governance appointments, CEO succession, and emerging leadership domains such as Artificial Intelligence.",
                "Our approach is research driven, structured, and discreet — combining market intelligence, rigorous assessment, and governance awareness.",
                "We identify leaders who align with both strategic ambition and organisational culture.",
                "Executive search is not transactional — it is a long-term partnership grounded in trust, judgement, and accountability.",
              ],
            },
            {
              title: "How We Work",
              points: [
                "Every engagement begins with clarity — understanding strategy, operations, culture, and governance expectations.",
                "We conduct comprehensive market mapping and evaluate candidates against clearly defined criteria.",
                "We maintain continuous stakeholder alignment throughout the process.",
                "Our methodology emphasises depth over speed, precision over volume, and fit over familiarity.",
              ],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative rounded-2xl border border-[#e6dcc6] bg-white/70 backdrop-blur-xl p-8 md:p-10 shadow-sm hover:shadow-xl transition duration-500"
            >
              {/* Accent line */}
              <div className="w-14 h-[3px] bg-[#C9A23F] mb-6 rounded-full group-hover:w-24 transition-all duration-500"></div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-light text-[#0F4C5C] mb-6">
                {item.title}
              </h3>

              {/* Points */}
              <div className="space-y-5">
                {item.points.map((point, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    {/* dot */}
                    <div className="mt-2 w-2 h-2 bg-[#C9A23F] rounded-full flex-shrink-0"></div>

                    <p className="text-[15.5px] leading-[1.8] text-[#4b5c63] font-light">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60"></div>

      <section className="py-5 bg-[#F4F1EA] relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%)]"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          {/* Label */}
          <p className="text-[#C9A23F] uppercase tracking-[0.4em] text-sm font-medium mb-6">
            Our Perspective on Leadership
          </p>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-semibold text-[#0F4C5C] leading-tight mb-5">
            Leadership goes beyond{" "}
            <span className="text-[#C9A23F]">competence</span>
          </h2>

          {/* Accent Line */}
          <div className="mx-auto w-24 h-[3px] bg-gradient-to-r from-[#C9A23F] to-transparent rounded-full mb-5"></div>

          {/* Content */}
          <div className="space-y-8 text-[#4b5c63] text-[16.5px] leading-[2] font-light max-w-3xl mx-auto">
            <p>
              Leadership effectiveness extends beyond functional competence. It
              requires{" "}
              <span className="text-[#0F4C5C] font-medium">
                strategic judgement
              </span>
              , adaptability, ethical grounding, and the ability to mobilise
              teams in complex environments.
            </p>

            <p>
              In a world defined by technological acceleration, regulatory
              scrutiny, and shifting stakeholder expectations, organisations
              need leaders who can navigate uncertainty with discipline and
              clarity.
            </p>

            <p>
              We assess leaders not only for what they have achieved, but for{" "}
              <span className="text-[#0F4C5C] font-medium">
                how they think, how they decide, and how they build sustainable
                performance.
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60"></div>

      <section className="py-8 bg-[#F4F1EA] relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%)]"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* MAIN HEADING */}
          <div className="text-center mb-5">
            <p className="text-[#C9A23F] uppercase tracking-[0.4em] text-sm font-medium mb-5">
              Where We Operate
            </p>

            <h2 className="text-5xl font-semibold text-[#0F4C5C]">
              Industries & <span className="text-[#C9A23F]">Expertise</span>
            </h2>

            <div className="mt-5 w-24 h-[3px] bg-gradient-to-r from-[#C9A23F] to-transparent mx-auto rounded-full"></div>
          </div>

          {/* INDUSTRIES LABEL */}
          <div className="flex items-center gap-4 mb-10">
            <p className="text-[#0F4C5C] font-medium">Industries</p>
            <div className="flex-1 h-[1px] bg-[#e6dcc6]"></div>
          </div>

          {/* INDUSTRIES GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
            {[
              "Industrial",
              "Real Estate & Infrastructure",
              "Consumer",
              "Healthcare & Life Sciences",
              "Banking & Financial Services",
              "Technology, Media & Telecommunications",
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl p-[1px] 
          bg-gradient-to-br from-[#C9A23F]/70 via-white/60 to-transparent
          hover:-translate-y-1 transition duration-300"
              >
                <div className="relative bg-white/90 backdrop-blur-xl rounded-xl p-6 border border-[#e6dcc6] shadow-lg">
                  {/* GLOW ALWAYS ON */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A23F22] via-transparent to-transparent"></div>

                  {/* LEFT ACCENT */}
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#C9A23F] to-transparent"></div>

                  {/* TOP DETAIL */}
                  <div className="mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#C9A23F] rounded-full"></div>
                    <div className="h-[1px] flex-1 bg-[#e6dcc6]"></div>
                  </div>

                  {/* TEXT */}
                  <p className="text-[#0F4C5C] text-[15px] font-medium leading-[1.6]">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FUNCTIONS LABEL */}
          <div className="flex items-center gap-4 mb-3">
            <p className="text-[#0F4C5C] font-medium">Functional Expertise</p>
            <div className="flex-1 h-[1px] bg-[#e6dcc6]"></div>
          </div>

          {/* FUNCTIONS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Boards & Governance",
              "Chief Executive Officers",
              "Chief Financial Officers",
              "Marketing & Sales",
              "Human Resources",
              "Supply Chain",
              "CSR & Sustainability",
              "Artificial Intelligence",
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl p-[1px] 
          bg-gradient-to-br from-[#C9A23F]/70 via-white/60 to-transparent
          hover:-translate-y-1 transition duration-300"
              >
                <div className="relative bg-white/90 backdrop-blur-xl rounded-xl p-5 border border-[#e6dcc6] shadow-lg">
                  {/* GLOW ALWAYS ON */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A23F22] via-transparent to-transparent"></div>

                  {/* LEFT ACCENT */}
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#C9A23F] to-transparent"></div>

                  {/* TOP DETAIL */}
                  <div className="mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#C9A23F] rounded-full"></div>
                    <div className="h-[1px] flex-1 bg-[#e6dcc6]"></div>
                  </div>

                  {/* TEXT */}
                  <p className="text-[#0F4C5C] text-[14.5px] font-medium leading-[1.6]">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* STATS */}
      <section className="py-24 bg-[#0F4C5C] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: 20, label: "Years Experience" },
            { num: 500, label: "Leadership Mandates" },
            { num: 40, label: "Industries Served" },
            { num: 30, label: "Global Reach" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(201,162,63,0.4)] transition duration-500"
            >
              <h3 className="text-5xl font-semibold text-[#C9A23F]">
                <CountUp
                  end={item.num}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </h3>

              <p className="mt-3 text-sm text-gray-300 tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="py-0 bg-[#F4F1EA] relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C9A23F22,transparent_70%)]"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {/* Top Divider Line */}
          <div className="mb-14">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-70"></div>
          </div>

          {/* Label */}
          <p className="text-[#C9A23F] uppercase tracking-[0.4em] text-sm font-medium mb-2">
            Our Commitment
          </p>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-semibold text-[#0F4C5C] mb-2 leading-tight">
            Built on <span className="text-[#C9A23F]">integrity</span> and
            accountability
          </h2>

          {/* Accent Line */}
          <div className="mx-auto w-24 h-[3px] bg-gradient-to-r from-[#C9A23F] to-transparent rounded-full mb-10"></div>

          {/* Card */}
          <div
            className="relative overflow-hidden rounded-2xl p-[1px] mb-10
      bg-gradient-to-br from-[#C9A23F]/60 via-white/50 to-transparent"
          >
            <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-10 md:p-12 border border-white/40 shadow-lg">
              {/* Soft Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A23F11] to-transparent"></div>

              {/* Content */}
              <div className="space-y-6 text-[#4b5c63] text-[16px] leading-[2] font-light">
                <p>
                  We operate with integrity, confidentiality, and professional
                  discipline. We provide clear communication, structured
                  documentation, and accountability throughout the engagement.
                </p>

                <p>
                  Our objective is not merely to fill positions, but to
                  strengthen organisations through leadership alignment. When
                  leadership is right, organisations move with confidence.
                </p>
              </div>

              {/* Closing Statement */}
              <div className="mt-10 flex items-center justify-center gap-3">
                <div className="h-[1px] w-10 bg-[#C9A23F]/60"></div>

                <p className="text-[#C9A23F] font-medium tracking-wide">
                  That is where advantage begins.
                </p>

                <div className="h-[1px] w-10 bg-[#C9A23F]/60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
