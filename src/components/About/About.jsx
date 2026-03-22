import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import aboutHero from "../../assets/images/about.jpg";

/* ANIMATIONS */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 }
  }
};

const cardAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 }
  }
};

/* CARDS */

const cards = [
{
img:"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
title:"Strategic Judgement",
text:"Leadership decisions shape organisational direction. We focus on leaders whose judgement aligns with long-term enterprise strategy."
},
{
img:"https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
title:"Rigorous Evaluation",
text:"Our approach combines market intelligence, structured assessment frameworks and stakeholder alignment."
},
{
img:"https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
title:"Long-Term Partnership",
text:"Executive search is not transactional. We build trusted relationships with Boards and leadership teams."
}
];

const About = () => {

return (

<div className="flex flex-col overflow-hidden text-[#374151]">

{/* HERO */}

<section className="relative min-h-[65vh] md:min-h-[70vh]">

<img
src={aboutHero}
className="absolute inset-0 w-full h-full object-cover"
alt=""
/>

<div className="absolute inset-0 bg-black/60 flex items-center justify-center px-6">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:.8}}
className="text-center max-w-3xl"
>

<h1 className="text-white text-4xl md:text-5xl font-light tracking-wide leading-tight">
About <span className="text-[#C9A23F] font-semibold">PivotEdge Partners</span>
</h1>

<p className="mt-5 text-gray-200 text-lg leading-relaxed">
Leadership that shapes strategy, governance and
long-term enterprise performance.
</p>

</motion.div>

</div>

</section>


{/* INTRO */}

<motion.section
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{once:true}}
className="py-24 bg-[#F8F7F4]"
>

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

<div className="relative group">

<img
src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
className="rounded-2xl shadow-lg w-full h-[380px] object-cover transition duration-500 group-hover:scale-[1.03]"
alt=""
/>

<div className="absolute bottom-6 left-6 bg-[#0F4C5C] text-white px-5 py-2 rounded-md text-sm shadow-md">
Trusted Leadership Advisors
</div>

</div>

<div>

<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0F4C5C] mb-6">
Our Leadership Philosophy
</h2>

<div className="w-20 h-[3px] bg-[#C9A23F] mb-6 rounded-full"></div>

<p className="text-[#6B7280] leading-relaxed text-[15px] mb-5">
Leadership is not defined by title. It is defined by impact.
At PivotEdge Partners we believe the quality of leadership
determines the quality of organisational outcomes.
</p>

<p className="text-[#6B7280] leading-relaxed text-[15px]">
Boards shape oversight and direction. Chief Executives
define vision and performance expectations while
functional leaders translate strategy into execution.
</p>

</div>

</div>

</motion.section>


{/* PERSPECTIVE */}

<motion.section
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{once:true}}
className="py-24 bg-white"
>

<div className="max-w-4xl mx-auto px-6 text-center">

<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0F4C5C] mb-6">
Our Perspective on Leadership
</h2>

<div className="w-24 h-[3px] bg-[#C9A23F] mx-auto mb-8 rounded-full"></div>

<p className="text-[#6B7280] text-[15px] leading-relaxed mb-5">
Leadership effectiveness extends beyond functional competence.
It requires strategic judgement, adaptability, ethical grounding,
and the ability to mobilise teams in complex environments.
</p>

<p className="text-[#6B7280] text-[15px] leading-relaxed">
In a world defined by technological acceleration,
regulatory scrutiny and shifting stakeholder expectations,
organisations need leaders who can navigate uncertainty
with discipline and clarity.
</p>

</div>

</motion.section>


{/* STATS */}

<section className="py-24 bg-[#0F4C5C] text-white">

<div className="max-w-7xl mx-auto px-6">

<motion.div
variants={container}
initial="hidden"
whileInView="show"
viewport={{once:true}}
className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
>

{[
{num:20,label:"Years Experience"},
{num:500,label:"Executive Placements"},
{num:40,label:"Industries Served"},
{num:30,label:"Global Partners"}
].map((stat,i)=>(

<motion.div
key={i}
variants={cardAnim}
whileHover={{scale:1.05}}
className="group"
>

<h3 className="text-5xl font-semibold text-[#C9A23F] mb-2">

<CountUp
end={stat.num}
duration={3}
enableScrollSpy
scrollSpyOnce
separator=","
/>+

</h3>

<p className="text-gray-200 text-sm uppercase tracking-[1px] group-hover:text-white transition">
{stat.label}
</p>

</motion.div>

))}

</motion.div>

</div>

</section>


{/* PROFESSIONAL DISCIPLINE */}

<motion.section
variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{once:true}}
className="py-24 bg-white"
>

<div className="max-w-4xl mx-auto px-6 text-center">

<h2 className="text-3xl md:text-4xl font-semibold text-[#0F4C5C] mb-6">
Professional Discipline
</h2>

<div className="w-20 h-[3px] bg-[#C9A23F] mx-auto mb-8"></div>

<p className="text-[#6B7280] text-[15px] leading-relaxed mb-5">
We operate with integrity, confidentiality and professional discipline.
Every engagement is managed with structured communication,
clear documentation and accountability throughout the process.
</p>

<p className="text-[#6B7280] text-[15px] leading-relaxed">
Our objective is not merely to fill leadership positions.
It is to strengthen organisations through leadership alignment.
When leadership is right, organisations move forward
with clarity, confidence and stability.
</p>

</div>

</motion.section>


{/* PRINCIPLES */}

<section className="py-24 bg-[#F3F3F0]">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0F4C5C] mb-14">
Our Approach
</h2>

<motion.div
variants={container}
initial="hidden"
whileInView="show"
viewport={{once:true}}
className="grid md:grid-cols-3 gap-10"
>

{cards.map((card,i)=>(

<motion.div
key={i}
variants={cardAnim}
whileHover={{y:-10, scale:1.03}}
transition={{duration:.35}}
className="
group relative
rounded-2xl p-8
bg-white
border border-black/5
shadow-[0_18px_55px_rgba(0,0,0,0.12)]
transition-all duration-500
hover:shadow-[0_28px_75px_rgba(0,0,0,0.18)]
overflow-hidden
text-center
"
>

<span
className="absolute top-0 left-0 w-full h-[3px]
bg-gradient-to-r from-[#C9A23F] via-[#0F4C5C] to-[#C9A23F]"
/>

<span
className="absolute -top-16 -right-16
w-40 h-40 bg-[#C9A23F]/20 blur-3xl rounded-full
opacity-0 group-hover:opacity-60 transition duration-500"
/>

<div className="relative z-10">

<img
src={card.img}
className="h-16 w-16 mx-auto mb-6 rounded-full object-cover border-4 border-[#F8F7F4]"
alt=""
/>

<h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
{card.title}
</h3>

<p className="text-[#6B7280] text-sm leading-relaxed">
{card.text}
</p>

</div>

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
viewport={{once:true}}
className="py-24 bg-[#F8F7F4]"
>

<div className="max-w-4xl mx-auto px-6 text-center bg-white shadow-xl rounded-2xl p-12">

<h2 className="text-3xl md:text-4xl font-semibold mb-5 text-[#0F4C5C]">
Strengthen Leadership Alignment
</h2>

<p className="text-[#6B7280] text-[15px] mb-8 max-w-xl mx-auto">
When leadership capability aligns with organisational ambition,
performance becomes sustainable and governance becomes stronger.
</p>

<button className="bg-[#0F4C5C] text-white px-8 py-3 rounded-md hover:bg-[#0c3c49] transition">
Contact Us
</button>

</div>

</motion.section>

</div>
);
};

export default About;