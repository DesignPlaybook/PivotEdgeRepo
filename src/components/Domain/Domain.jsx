import React from "react";
import "./Domain.css";
import { motion } from "framer-motion";
import { 
  FaIndustry,
  FaBuilding,
  FaShoppingCart,
  FaHeartbeat,
  FaUniversity,
  FaBroadcastTower
} from "react-icons/fa";


const industries = [
  {
    title: "Industrial",
    desc: "Industrial organisations operate within cyclical markets, cost pressures, and evolving technological landscapes. We support manufacturers and industrial enterprises in appointing leaders capable of modernising operations and improving productivity."
  },
  {
    title: "Real Estate & Infrastructure",
    desc: "Capital-intensive and long-cycle in nature, this sector demands disciplined leadership with strong risk management and stakeholder alignment."
  },
  {
    title: "Consumer",
    desc: "Rapidly shifting customer behaviour and digital disruption require agile leadership with strong understanding of market dynamics and brand positioning."
  },
  {
    title: "Healthcare & Life Sciences",
    desc: "Innovation, regulation, and societal responsibility define this sector. We identify leaders capable of navigating complexity and transformation."
  },
  {
    title: "Banking & Financial Services",
    desc: "Managing capital, risk, compliance and technological change requires experienced leadership and strategic discipline."
  },
  {
    title: "Technology, Media & Telecommunications",
    desc: "Continuous innovation and digital disruption shape this domain. Leaders must scale platforms and drive competitive differentiation."
  }
];

export default function Domains() {
  return (
    <div className="domains-page">

      {/* HERO SECTION */}
      <section className="domains-hero">

  <div className="hero-container">

    <motion.div
      className="hero-left"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      <motion.span
        className="hero-tag"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        INDUSTRIES & DOMAINS
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Leadership Advisory
        <br />
        Across Critical Industries
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        We partner with organisations across sectors to appoint leadership
        capable of navigating complexity, accelerating transformation,
        and delivering sustained enterprise performance.
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button className="primary-btn">Explore Industries</button>
        <button className="secondary-btn">Our Approach</button>
      </motion.div>

    </motion.div>


    <motion.div
      className="hero-right"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >

      <motion.div
        className="hero-card"
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}
      >
        <h3>Trusted Leadership Advisory</h3>

        <p>
          Supporting boards and leadership teams in appointing executives
          who shape strategy, culture and long-term enterprise value.
        </p>
      </motion.div>

    </motion.div>

  </div>

</section>

      {/* INDUSTRIES */}
      <section className="industries-section">

  <div className="container">

    <div className="section-header">
      <span className="section-tag">SECTORS</span>
      <h2>Industries We Serve</h2>
      <p>
        Our experience spans diverse industries where leadership quality
        directly influences enterprise performance and long-term value creation.
      </p>
    </div>

    <div className="industry-grid">

  <div className="industry-card">
    <div className="industry-icon">
      <FaIndustry />
    </div>
    <h3>Industrial</h3>
    <p>
      Supporting manufacturers and industrial enterprises in appointing
      leaders capable of modernising operations and improving productivity.
    </p>
  </div>

  <div className="industry-card">
    <div className="industry-icon">
      <FaBuilding />
    </div>
    <h3>Real Estate & Infrastructure</h3>
    <p>
      Identifying executives who can manage capital-intensive assets
      and deliver long-term infrastructure value.
    </p>
  </div>

  <div className="industry-card">
    <div className="industry-icon">
      <FaShoppingCart />
    </div>
    <h3>Consumer</h3>
    <p>
      Leaders who understand market dynamics, brand positioning
      and consumer growth strategies.
    </p>
  </div>

  <div className="industry-card">
    <div className="industry-icon">
      <FaHeartbeat />
    </div>
    <h3>Healthcare & Life Sciences</h3>
    <p>
      Leadership capable of navigating innovation,
      regulation and scientific advancement.
    </p>
  </div>

  <div className="industry-card">
    <div className="industry-icon">
      <FaUniversity />
    </div>
    <h3>Banking & Financial Services</h3>
    <p>
      Executives who manage capital, compliance
      and digital transformation.
    </p>
  </div>

  <div className="industry-card">
    <div className="industry-icon">
      <FaBroadcastTower />
    </div>
    <h3>Technology, Media & Telecommunications</h3>
    <p>
      Leaders capable of scaling digital platforms
      and driving innovation.
    </p>
  </div>

</div>

  </div>

</section>


      {/* EXECUTIVE SEARCH */}
      <section className="executive-section">

  <div className="container executive-container">

    {/* LEFT CONTENT */}

    <div className="executive-left">

      <span className="section-tag">EXECUTIVE SEARCH</span>

      <h2>
        Executive Search That
        <br/>
        Strengthens Strategic Advantage
      </h2>

      <p>
        Leadership appointments are among the most consequential decisions
        an organisation makes. The right executive shapes strategy, culture,
        governance quality and long-term performance.
      </p>

      <p>
        PivotEdge Partners approaches executive search as a strategic advisory
        engagement. We work closely with Boards and senior stakeholders to
        understand organisational objectives, governance structure and future
        leadership needs.
      </p>

      <div className="gold-divider"></div>

      <p>
        Our work is confidential, research driven and outcome focused.
        We are not intermediaries. We are advisors entrusted with decisions
        that influence the direction of the enterprise.
      </p>

    </div>


    {/* RIGHT SIDE - APPROACH CARDS */}

    <div className="executive-right">

      <div className="approach-card">
        <h4>Strategic Mandate Definition</h4>
        <p>
          Aligning with stakeholders to define leadership expectations
          and success parameters.
        </p>
      </div>

      <div className="approach-card">
        <h4>Market Mapping & Research</h4>
        <p>
          Comprehensive market intelligence and leadership talent mapping.
        </p>
      </div>

      <div className="approach-card">
        <h4>Assessment & Benchmarking</h4>
        <p>
          Structured evaluation of leadership capability and governance readiness.
        </p>
      </div>

      <div className="approach-card">
        <h4>Confidential Execution</h4>
        <p>
          Discreet candidate engagement and evaluation across leadership networks.
        </p>
      </div>

      <div className="approach-card">
        <h4>Stakeholder Calibration</h4>
        <p>
          Continuous alignment with Boards and leadership teams.
        </p>
      </div>

      <div className="approach-card">
        <h4>Transition Support</h4>
        <p>
          Advisory support through onboarding and executive integration.
        </p>
      </div>

    </div>

  </div>

</section>

<section className="differentiator-section">

  <div className="container">

    <div className="section-header light">
      <span className="section-tag">WHY PIVOTEDGE</span>

      <h2>What Differentiates PivotEdge</h2>

      <p>
        Our approach combines strategic advisory, governance awareness,
        and deep leadership networks to deliver executive search outcomes
        that strengthen enterprise performance.
      </p>
    </div>


    <div className="differentiator-grid">

      <div className="diff-card">
        <div className="diff-icon">🎯</div>
        <h3>Advisory Orientation</h3>
        <p>
          We approach leadership search as a strategic advisory mandate
          rather than a transactional placement.
        </p>
      </div>

      <div className="diff-card">
        <div className="diff-icon">⚖️</div>
        <h3>Governance Aware Evaluation</h3>
        <p>
          Our frameworks assess leadership capability alongside governance
          readiness and Board alignment.
        </p>
      </div>

      <div className="diff-card">
        <div className="diff-icon">🌐</div>
        <h3>Leadership Networks</h3>
        <p>
          Access to senior leadership communities across industries
          and geographies.
        </p>
      </div>

      <div className="diff-card">
        <div className="diff-icon">📊</div>
        <h3>Research Driven Process</h3>
        <p>
          Structured market intelligence and data driven assessment
          guide every mandate.
        </p>
      </div>

      <div className="diff-card">
        <div className="diff-icon">🤝</div>
        <h3>Long-Term Partnership</h3>
        <p>
          We work as long-term partners supporting leadership strategy
          beyond individual mandates.
        </p>
      </div>

    </div>

  </div>

</section>

<section className="outcomes-section">

  <div className="container outcomes-container">

    <div className="outcomes-left">

      <span className="section-tag">OUTCOMES</span>

      <h2>
        Leadership Decisions That
        <br/>
        Strengthen Enterprise Performance
      </h2>

      <p>
        Our executive search engagements focus on long-term organisational
        impact. The outcome is not simply a leadership placement, but
        stronger alignment between strategy, governance and performance.
      </p>

    </div>


    <div className="outcomes-right">

      <div className="outcome-card">
        <span className="check">✓</span>
        <p>Stronger alignment between leadership and strategy</p>
      </div>

      <div className="outcome-card">
        <span className="check">✓</span>
        <p>Reduced succession and governance risk</p>
      </div>

      <div className="outcome-card">
        <span className="check">✓</span>
        <p>Accelerated executive integration</p>
      </div>

      <div className="outcome-card">
        <span className="check">✓</span>
        <p>Sustained enterprise performance</p>
      </div>

    </div>

  </div>

</section>

      

    </div>
  );
}