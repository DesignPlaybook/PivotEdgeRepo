import React from "react";
import { motion } from "framer-motion";
import bg from '../../assets/images/bg.webp';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const services = [
  {
    title: "Executive Search",
    content: `We deliver retained executive search for senior leadership and board-level roles across industries and growth stages. Each mandate begins with a deep understanding of organisational strategy, culture, governance context, and performance objectives.

Our research-led and consultative approach evaluates not only experience and track record, but judgement, leadership style, cultural alignment, and long-term impact. We operate with independence, discretion, and rigour—focusing on sustained value rather than transactional placements.`
  },
  {
    title: "Succession Planning",
    content: `Leadership continuity is a strategic imperative. We partner with Boards and executive teams to design succession strategies that strengthen bench strength, reduce risk, and preserve institutional knowledge.

Our approach identifies critical roles, evaluates internal readiness, assesses vulnerabilities, and builds structured leadership pipelines aligned to long-term organisational priorities.`
  },
  {
    title: "Career Transition",
    content: `Organisational evolution often requires difficult leadership decisions. We support organisations in managing transitions with integrity and professionalism.

Our career transition services provide structured guidance, leadership coaching, capability alignment, and strategic repositioning support—helping individuals move forward with clarity while protecting organisational reputation.`
  },
  {
    title: "Interim Management",
    content: `When leadership gaps arise or specialised expertise is required, interim management provides rapid access to experienced executives.

We identify seasoned leaders who can step into complex environments, stabilise operations, drive transformation, or deliver specific outcomes within defined timeframes. Interim leadership offers flexibility without compromising on capability.`
  },
  {
    title: "Diversity",
    content: `Diverse leadership strengthens governance, innovation, and performance. We integrate diversity and inclusion considerations into every search and advisory engagement.

Our approach ensures leadership appointments reflect broader perspectives, varied experiences, and alignment with organisational values—supporting stronger decision-making and long-term sustainability.`
  }
];

const functions = [
  {
    title: "Boards & Governance",
    content: `We advise on board composition, governance effectiveness, and director appointments. Our work supports boards in strengthening oversight, strategic guidance, and leadership succession at the highest levels.`
  },
  {
    title: "Chief Executive Officer",
    content: `The CEO defines direction, culture, and performance expectations. We support organisations in identifying and assessing leaders capable of aligning strategy with execution, building strong management teams, and sustaining long-term growth.`
  },
  {
    title: "Chief Financial Officer",
    content: `The CFO has evolved into a strategic partner to the CEO and Board. We identify finance leaders who combine financial stewardship with enterprise-level thinking, transformation capability, and governance credibility.`
  },
  {
    title: "Marketing & Sales",
    content: `Growth leadership demands commercial acumen, customer insight, and execution discipline. We support organisations in appointing Marketing and Sales leaders who translate strategy into measurable revenue impact.`
  },
  {
    title: "Human Resources",
    content: `Human capital strategy is central to organisational performance. We recruit and advise HR leaders across talent strategy, organisational effectiveness, succession planning, change management, learning, and rewards.`
  },
  {
    title: "Supply Chain",
    content: `Supply chain leadership is increasingly strategic, balancing efficiency, resilience, risk management, and global complexity. We identify leaders capable of driving operational excellence while adapting to evolving market demands.`
  },
  {
    title: "Corporate Social Responsibility & Sustainability",
    content: `Sustainability and responsible business practices are now integral to strategy. We support organisations in appointing leaders who integrate economic performance with environmental stewardship and stakeholder accountability.`
  },
  {
    title: "Artificial Intelligence",
    content: `Artificial Intelligence and advanced analytics are reshaping business models across industries. We identify leaders who can bridge technology and strategy, embed responsible innovation, and translate digital capability into commercial advantage.

AI leadership is treated as a horizontal capability—integrated across functions and industries rather than confined to a single vertical.`
  }
];
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Services = () => {
  return (
    <div className="flex flex-col">

     {/* HERO */}
{/* HERO */}
<section className="relative min-h-[100vh] flex items-center justify-center text-center overflow-hidden">

  {/* Background Image */}
  <img
    src={bg}
    className="absolute w-full h-full object-cover scale-105"
  />

  {/* Dark + Gold Overlay */}
  <div className="absolute inset-0 
    bg-[radial-gradient(circle_at_top,#C9A23F33,transparent_60%),linear-gradient(to_bottom,#06151a,#0b1f26)]
    opacity-95">
  </div>

  {/* Subtle Texture */}
  <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay 
    bg-[url('https://www.transparenttextures.com/patterns/noise.png')]">
  </div>

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
      Our{" "}
      <span className="text-[#C9A23F] font-semibold">
        Services
      </span>
    </h1>

    {/* Divider */}
    <div className="mt-8 flex justify-center">
      <div className="w-28 h-[3px] bg-gradient-to-r from-[#C9A23F] to-transparent rounded-full"></div>
    </div>

    {/* Description */}
    <p className="mt-8 text-gray-300 text-[17px] leading-[1.9] font-light max-w-2xl mx-auto">
      Providing structured leadership advisory and executive search solutions aligned to strategy, governance, and long-term performance.
    </p>

  </motion.div>

  {/* Bottom Fade */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#F4F1EA]"></div>

</section>

{/* SERVICES */}
<div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60"></div>

<section className="py-10 bg-[#F4F1EA] relative overflow-hidden">

  {/* subtle gold glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F22,transparent_60%)]"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Scroll Container */}
    <div className="flex gap-8 overflow-x-auto pb-4 domains-scroll">

      {services.map((item, i) => (
        <motion.div
          key={i}
          variants={cardAnim}
          whileHover={{ y: -6 }}
          className="flex-shrink-0 w-[340px] md:w-[380px] lg:w-[420px]
          group p-[1px] rounded-2xl 
          bg-gradient-to-br from-[#C9A23F]/40 via-white/40 to-transparent 
          transition duration-500"
        >

          <div className="relative h-full bg-white/80 backdrop-blur-xl 
          rounded-2xl p-8 border border-white/40 
          shadow-sm hover:shadow-xl transition duration-500 overflow-hidden">

            {/* Top Gradient Line */}
            <span className="absolute top-0 left-0 w-full h-[3px] 
            bg-gradient-to-r from-[#C9A23F] via-[#0F4C5C] to-[#C9A23F]"></span>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 
            text-[#0F4C5C] group-hover:text-[#C9A23F] transition">
              {item.title}
            </h3>

            {/* Content */}
            <p className="text-[#5b6f77] text-[15px] leading-[1.8] font-light whitespace-pre-line">
              {item.content}
            </p>

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>

      {/* FUNCTIONS */}
                     <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60"></div>

   <section className="py-10 bg-white relative overflow-hidden">

  {/* subtle background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C9A23F14,transparent_60%)]"></div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#0F4C5C]">
        Functions
      </h2>
      <div className="mt-4 w-20 h-[3px] bg-[#C9A23F] mx-auto rounded-full"></div>
    </div>

    {/* List */}
    <div className="space-y-12">

      {functions.map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="group grid md:grid-cols-[220px_1fr] gap-6 md:gap-10 items-start"
        >

          {/* LEFT TITLE */}
          <div className="relative">
            <h3 className="text-lg md:text-xl font-semibold text-[#0F4C5C] 
            group-hover:text-[#C9A23F] transition">
              {item.title}
            </h3>

            {/* vertical accent */}
            <div className="hidden md:block absolute -left-4 top-1 h-6 w-[2px] bg-[#C9A23F]"></div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">

            <p className="text-[#5B6F77] leading-[1.9] text-[15px] whitespace-pre-line">
              {item.content}
            </p>

            {/* subtle bottom line */}
            <div className="mt-5 w-10 h-[2px] bg-[#C9A23F] 
            group-hover:w-20 transition-all"></div>

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>

    </div>
  );
};

export default Services;