import { useState, useEffect, useRef } from "react";

/* ─── Google Fonts ─── */
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);
  return null;
};

/* ─── CSS Variables & Global Styles ─── */
const GlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      :root {
        --color-teal: #0F4C5C;
        --color-gold: #C9A23F;
        --color-cream: #F4F1EA;
        --color-charcoal: #1A1A1A;
        --font-serif: 'Cormorant Garamond', Georgia, serif;
        --font-sans: 'Jost', sans-serif;
      }
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { font-family: var(--font-sans); background: var(--color-cream); color: var(--color-charcoal); -webkit-font-smoothing: antialiased; }
      .serif { font-family: var(--font-serif); }
      .fade-in { opacity: 0; transform: translateY(28px); transition: opacity 0.8s ease, transform 0.8s ease; }
      .fade-in.visible { opacity: 1; transform: translateY(0); }
      .gold-divider { width: 100%; height: 3px; background: linear-gradient(to right, transparent, #C9A23F, transparent); opacity: 0.6; }
      a { text-decoration: none; color: inherit; }
      button { cursor: pointer; border: none; background: none; font-family: var(--font-sans); }
      input, textarea { font-family: var(--font-sans); }
      * { -webkit-tap-highlight-color: transparent; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
};

/* ─── Intersection Observer Hook ─── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── Gold Divider ─── */
const GoldDivider = () => <div className="gold-divider" />;

/* ─── Reveal wrapper ─── */
const Reveal = ({ children, delay = 0, style = {} }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className="fade-in" style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
};

/* ═══════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════ */
const LOGO_URL = "https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/multimodal/data/logo.png"; // placeholder

const Navbar = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Services", "Insights", "Domains", "Contact"];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: "0 5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "80px",
    transition: "background 0.4s ease, box-shadow 0.4s ease",
    background: scrolled ? "rgba(244,241,234,0.97)" : "transparent",
    backdropFilter: scrolled ? "blur(8px)" : "none",
    boxShadow: scrolled ? "0 1px 0 rgba(15,76,92,0.1)" : "none",
  };

  const linkStyle = (page) => ({
    fontFamily: "var(--font-sans)",
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: scrolled ? "var(--color-teal)" : "#fff",
    paddingBottom: "3px",
    borderBottom: currentPage === page ? "2px solid var(--color-gold)" : "2px solid transparent",
    transition: "color 0.3s, border-color 0.3s",
    cursor: "pointer",
  });

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <div onClick={() => onNavigate("Home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Inline SVG Logo replica */}
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <polygon points="22,4 38,34 6,34" fill="var(--color-teal)" opacity="0.9"/>
          <polygon points="14,34 26,34 20,20" fill="var(--color-gold)"/>
        </svg>
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 600, color: scrolled ? "var(--color-teal)" : "#fff", lineHeight: 1.1 }}>
            PivotEdge
          </div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", color: scrolled ? "var(--color-teal)" : "#fff", opacity: 0.85 }}>
            PARTNERS
          </div>
        </div>
      </div>

      {/* Desktop Links */}
      <div style={{ display: "flex", gap: "36px", alignItems: "center" }} className="desktop-nav">
        {links.map((l) => (
          <span key={l} onClick={() => onNavigate(l)} style={linkStyle(l)}>{l}</span>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: "none", flexDirection: "column", gap: "5px", padding: "8px" }}
        className="mobile-menu-btn"
        aria-label="Menu"
      >
        {[0,1,2].map(i => (
          <div key={i} style={{ width: "22px", height: "1.5px", background: scrolled ? "var(--color-teal)" : "#fff" }} />
        ))}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: "80px", left: 0, right: 0,
          background: "var(--color-cream)", padding: "24px 5%",
          display: "flex", flexDirection: "column", gap: "20px",
          boxShadow: "0 8px 24px rgba(15,76,92,0.12)"
        }}>
          {links.map((l) => (
            <span key={l} onClick={() => { onNavigate(l); setMenuOpen(false); }}
              style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 500, color: "var(--color-teal)", cursor: "pointer" }}>
              {l}
            </span>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

/* ═══════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════ */
const Footer = ({ onNavigate }) => {
  const navLinks = ["Home", "About", "Services", "Insights", "Domains", "Contact"];
  const legalLinks = ["Terms", "Disclaimer", "Privacy"];

  return (
    <footer style={{ background: "var(--color-teal)", color: "rgba(244,241,234,0.85)", padding: "60px 5% 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <svg width="36" height="36" viewBox="0 0 44 44" fill="none">
                <polygon points="22,4 38,34 6,34" fill="rgba(244,241,234,0.9)"/>
                <polygon points="14,34 26,34 20,20" fill="var(--color-gold)"/>
              </svg>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 600, color: "#F4F1EA" }}>PivotEdge</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.2em", color: "var(--color-gold)" }}>PARTNERS</div>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "15px", color: "var(--color-gold)", marginBottom: "12px" }}>Advantage Starts Here</p>
            <p style={{ fontSize: "12px", lineHeight: 1.7, opacity: 0.7 }}>Specialist executive search and leadership advisory.</p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px", fontWeight: 600 }}>Navigation</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {navLinks.map(l => (
                <span key={l} onClick={() => onNavigate(l)} style={{ fontSize: "13px", cursor: "pointer", opacity: 0.8, transition: "opacity 0.2s" }}
                  onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.8}>{l}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px", fontWeight: 600 }}>Contact</p>
            <p style={{ fontSize: "14px", fontWeight: 500, marginBottom: "6px", color: "#F4F1EA" }}>Swapna Amin</p>
            <p style={{ fontSize: "12px", opacity: 0.7, marginBottom: "4px" }}>swapna.amin@pivotedgegroup.com</p>
            <p style={{ fontSize: "12px", opacity: 0.7, marginBottom: "20px" }}>+91 98207 79053</p>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "12px", fontWeight: 600 }}>Offices</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[["Mumbai","South Asia & India"],["Dubai","Middle East & GCC"],["Sydney","Asia-Pacific"]].map(([city, region]) => (
                <div key={city}>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "#F4F1EA" }}>{city}</span>
                  <span style={{ fontSize: "11px", opacity: 0.6, marginLeft: "8px" }}>{region}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px", fontWeight: 600 }}>Legal</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {legalLinks.map(l => (
                <span key={l} onClick={() => onNavigate(l)} style={{ fontSize: "13px", cursor: "pointer", opacity: 0.8, transition: "opacity 0.2s" }}
                  onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.8}>{l}</span>
              ))}
            </div>
          </div>
        </div>

        <GoldDivider />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "24px", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", opacity: 0.5 }}>© PivotEdge Partners · PivotEdgeGroup.com</p>
          <p style={{ fontSize: "11px", opacity: 0.4, letterSpacing: "0.1em" }}>ADVANTAGE STARTS HERE</p>
        </div>
      </div>
    </footer>
  );
};

/* ─── CTA Button ─── */
const GoldButton = ({ children, onClick, large = false }) => (
  <button onClick={onClick} style={{
    background: "var(--color-gold)", color: "#fff", border: "none",
    padding: large ? "16px 44px" : "12px 32px",
    fontFamily: "var(--font-sans)", fontSize: large ? "14px" : "12px",
    fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
    cursor: "pointer", transition: "background 0.3s, transform 0.2s",
  }}
    onMouseEnter={e => { e.target.style.background = "#b8912e"; e.target.style.transform = "translateY(-1px)"; }}
    onMouseLeave={e => { e.target.style.background = "var(--color-gold)"; e.target.style.transform = "translateY(0)"; }}
  >{children}</button>
);

const TealButton = ({ children, onClick }) => (
  <button onClick={onClick} style={{
    background: "transparent", color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.6)",
    padding: "13px 36px",
    fontFamily: "var(--font-sans)", fontSize: "12px",
    fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
    cursor: "pointer", transition: "all 0.3s",
  }}
    onMouseEnter={e => { e.target.style.background = "rgba(255,255,255,0.1)"; e.target.style.borderColor = "#fff"; }}
    onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(255,255,255,0.6)"; }}
  >{children}</button>
);

/* ─── Closing CTA Strip ─── */
const CTAStrip = ({ onNavigate, headline = "Strengthen your leadership team.", subline = "We welcome the opportunity to connect." }) => (
  <section style={{ background: "var(--color-teal)", padding: "80px 5%", textAlign: "center" }}>
    <Reveal>
      <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", fontWeight: 400, color: "#F4F1EA", marginBottom: "16px", fontStyle: "italic" }}>
        {headline}
      </h2>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", color: "rgba(244,241,234,0.7)", marginBottom: "36px", letterSpacing: "0.04em" }}>
        {subline}
      </p>
      <GoldButton onClick={() => onNavigate("Contact")} large>Start a Conversation</GoldButton>
    </Reveal>
  </section>
);

/* ═══════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════ */
const HomePage = ({ onNavigate }) => {
  const methodologySteps = [
    { num: "01", title: "Mandate", desc: "Strategic alignment on objectives, culture, and governance." },
    { num: "02", title: "Market Intelligence", desc: "Comprehensive talent mapping across sectors and geographies." },
    { num: "03", title: "Benchmark", desc: "Rigorous evaluation against clearly defined leadership criteria." },
    { num: "04", title: "Calibration", desc: "Ongoing stakeholder alignment throughout the process." },
    { num: "05", title: "Transition", desc: "Advisory support through onboarding and early integration." },
  ];

  const services = [
    {
      title: "Executive Search",
      desc: "Retained search for Board, CEO, and senior functional leadership roles.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="17" cy="17" r="9" stroke="var(--color-gold)" strokeWidth="1.5" fill="none"/>
          <line x1="23.5" y1="23.5" x2="34" y2="34" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="12" y1="17" x2="22" y2="17" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="17" y1="12" x2="17" y2="22" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Boards & Governance",
      desc: "Advisory support for Board composition and director appointments.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="6" width="12" height="12" rx="2" stroke="var(--color-gold)" strokeWidth="1.5" fill="none"/>
          <rect x="22" y="6" width="12" height="12" rx="2" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/>
          <rect x="6" y="22" width="12" height="12" rx="2" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/>
          <rect x="22" y="22" width="12" height="12" rx="2" stroke="var(--color-gold)" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
    {
      title: "Succession Planning",
      desc: "Leadership pipelines aligned to long-term organisational priorities.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="10" r="5" stroke="var(--color-gold)" strokeWidth="1.5" fill="none"/>
          <circle cx="10" cy="28" r="5" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/>
          <circle cx="30" cy="28" r="5" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/>
          <line x1="20" y1="15" x2="10" y2="23" stroke="var(--color-gold)" strokeWidth="1" opacity="0.6"/>
          <line x1="20" y1="15" x2="30" y2="23" stroke="var(--color-gold)" strokeWidth="1" opacity="0.6"/>
        </svg>
      ),
    },
    {
      title: "AI & Emerging Leadership",
      desc: "Search for AI leaders driving intelligent enterprise transformation.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="10" y="10" width="20" height="20" rx="4" stroke="var(--color-gold)" strokeWidth="1.5" fill="none"/>
          <circle cx="20" cy="20" r="4" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/>
          <line x1="20" y1="10" x2="20" y2="14" stroke="var(--color-gold)" strokeWidth="1.5"/>
          <line x1="20" y1="26" x2="20" y2="30" stroke="var(--color-gold)" strokeWidth="1.5"/>
          <line x1="10" y1="20" x2="14" y2="20" stroke="var(--color-gold)" strokeWidth="1.5"/>
          <line x1="26" y1="20" x2="30" y2="20" stroke="var(--color-gold)" strokeWidth="1.5"/>
        </svg>
      ),
    },
  ];

  const domains = [
    { title: "Industrial", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="18" width="6" height="10" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="13" y="12" width="6" height="16" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="22" y="6" width="6" height="22" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg> },
    { title: "Real Estate", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><polygon points="16,4 28,14 28,28 4,28 4,14" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="13" y="20" width="6" height="8" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg> },
    { title: "Consumer", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6 8h20l-3 12H9L6 8z" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="12" cy="26" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="22" cy="26" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg> },
    { title: "Healthcare", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/><line x1="16" y1="9" x2="16" y2="23" stroke="currentColor" strokeWidth="1.5"/><line x1="9" y1="16" x2="23" y2="16" stroke="currentColor" strokeWidth="1.5"/></svg> },
    { title: "Banking & Financial", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="14" width="24" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><polygon points="16,4 28,14 4,14" stroke="currentColor" strokeWidth="1.5" fill="none"/><line x1="10" y1="18" x2="10" y2="24" stroke="currentColor" strokeWidth="1.5"/><line x1="16" y1="18" x2="16" y2="24" stroke="currentColor" strokeWidth="1.5"/><line x1="22" y1="18" x2="22" y2="24" stroke="currentColor" strokeWidth="1.5"/></svg> },
    { title: "TMT", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/><ellipse cx="16" cy="16" rx="5" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none"/><line x1="6" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="1.5"/></svg> },
  ];

  const advantages = [
    { title: "Advisory First", desc: "Strategic advisors, not transactional intermediaries. We are invested in outcomes." },
    { title: "Research-Driven", desc: "Comprehensive market mapping and talent intelligence across sectors." },
    { title: "Senior Access", desc: "Deep access to executive and board-level talent pools globally." },
    { title: "Long-Term Trust", desc: "Accountability and trust across the full engagement lifecycle." },
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", height: "100vh", minHeight: "640px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80"
          alt="Leadership"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Replace: aerial city skyline at dusk, glass towers, commanding and cinematic */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15,76,92,0.88) 0%, rgba(15,76,92,0.65) 100%)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "0 5%", maxWidth: "900px" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
            <svg width="52" height="52" viewBox="0 0 44 44" fill="none">
              <polygon points="22,2 40,36 4,36" fill="rgba(244,241,234,0.95)"/>
              <polygon points="13,36 27,36 20,18" fill="var(--color-gold)"/>
            </svg>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 600, color: "#F4F1EA" }}>PivotEdge</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.25em", color: "var(--color-gold)" }}>PARTNERS</div>
            </div>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(40px,6vw,88px)", fontWeight: 300, color: "#F4F1EA", lineHeight: 1.05, marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Leadership That<br /><em>Defines Direction</em>
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(14px,1.5vw,17px)", color: "rgba(244,241,234,0.8)", lineHeight: 1.75, maxWidth: "640px", margin: "0 auto 16px", fontWeight: 300 }}>
            PivotEdge Partners is a specialist executive search and leadership advisory firm partnering with Boards and senior executives to secure leadership that shapes strategy, governance, and long-term performance.
          </p>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "18px", color: "var(--color-gold)", marginBottom: "44px", letterSpacing: "0.04em" }}>Advantage starts here.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <GoldButton onClick={() => onNavigate("Contact")} large>Start a Conversation</GoldButton>
            <TealButton onClick={() => onNavigate("Services")}>Our Services</TealButton>
          </div>
        </div>
        {/* scroll indicator */}
        <div style={{ position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", opacity: 0.6 }}>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, transparent, rgba(244,241,234,0.8))", animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      <GoldDivider />

      {/* Why Leadership Matters */}
      <section style={{ padding: "100px 5%", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <Reveal>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "20px" }}>Our Purpose</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,3.5vw,54px)", fontWeight: 400, color: "var(--color-teal)", lineHeight: 1.15, marginBottom: "28px" }}>
              Why Leadership<br /><em>Matters Most</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p style={{ fontSize: "16px", lineHeight: 1.85, color: "#3a3a3a", marginBottom: "20px", fontWeight: 300 }}>
              Leadership is the single most influential factor in organisational performance. Strategy, culture, governance quality, and execution discipline are all shaped at the top.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.85, color: "#3a3a3a", fontWeight: 300 }}>
              In complex and rapidly evolving markets, organisations require leaders who combine strategic judgement with operational clarity. Appointments at functional head level and above carry enterprise-wide consequences. We approach these decisions with the rigour they demand.
            </p>
          </Reveal>
        </div>
      </section>

      <GoldDivider />

      {/* Services Teaser */}
      <section style={{ padding: "100px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "12px", textAlign: "center" }}>What We Do</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3vw,46px)", fontWeight: 400, color: "var(--color-teal)", textAlign: "center", marginBottom: "60px" }}>
              Services Built Around<br /><em>Consequential Decisions</em>
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2px" }}>
            {services.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 80}>
                <div onClick={() => onNavigate("Services")}
                  style={{ background: "var(--color-cream)", padding: "44px 36px", cursor: "pointer", transition: "background 0.3s, transform 0.3s", borderBottom: "3px solid transparent" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--color-teal)"; e.currentTarget.style.borderBottomColor = "var(--color-gold)"; e.currentTarget.querySelector('.svc-icon').style.filter = "brightness(2)"; e.currentTarget.querySelector('.svc-title').style.color = "#F4F1EA"; e.currentTarget.querySelector('.svc-desc').style.color = "rgba(244,241,234,0.7)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "var(--color-cream)"; e.currentTarget.style.borderBottomColor = "transparent"; e.currentTarget.querySelector('.svc-icon').style.filter = "none"; e.currentTarget.querySelector('.svc-title').style.color = "var(--color-teal)"; e.currentTarget.querySelector('.svc-desc').style.color = "#555"; }}
                >
                  <div className="svc-icon" style={{ marginBottom: "24px", transition: "filter 0.3s" }}>{svc.icon}</div>
                  <h3 className="svc-title" style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 500, color: "var(--color-teal)", marginBottom: "12px", transition: "color 0.3s" }}>{svc.title}</h3>
                  <p className="svc-desc" style={{ fontSize: "13px", lineHeight: 1.7, color: "#555", transition: "color 0.3s" }}>{svc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Methodology */}
      <section style={{ padding: "100px 5%", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "12px", textAlign: "center" }}>How We Work</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3vw,46px)", fontWeight: 400, color: "var(--color-teal)", textAlign: "center", marginBottom: "64px" }}>
              A Process Built on<br /><em>Precision and Depth</em>
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0", position: "relative" }}>
            <div style={{ position: "absolute", top: "32px", left: "10%", right: "10%", height: "1px", background: "linear-gradient(to right, transparent, var(--color-gold), var(--color-gold), transparent)", opacity: 0.4 }} />
            {methodologySteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div style={{ textAlign: "center", padding: "0 16px" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", border: "1.5px solid var(--color-gold)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", background: "#fff", position: "relative", zIndex: 1 }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "var(--color-gold)", fontWeight: 500 }}>{step.num}</span>
                  </div>
                  <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "var(--color-teal)", fontWeight: 600, marginBottom: "10px" }}>{step.title}</h4>
                  <p style={{ fontSize: "12px", lineHeight: 1.7, color: "#666" }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`@media(max-width:768px){.method-grid{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      <GoldDivider />

      {/* Domains */}
      <section style={{ padding: "100px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "12px", textAlign: "center" }}>Where We Operate</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3vw,46px)", fontWeight: 400, color: "var(--color-teal)", textAlign: "center", marginBottom: "60px" }}>
              Sectors We<br /><em>Serve with Depth</em>
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2px" }}>
            {domains.map((d, i) => (
              <Reveal key={d.title} delay={i * 70}>
                <div onClick={() => onNavigate("Domains")}
                  style={{ padding: "40px 24px", textAlign: "center", background: "var(--color-cream)", cursor: "pointer", transition: "all 0.3s", borderBottom: "3px solid transparent" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--color-teal)"; e.currentTarget.style.borderBottomColor = "var(--color-gold)"; e.currentTarget.querySelector('.dom-icon').style.color = "var(--color-gold)"; e.currentTarget.querySelector('.dom-title').style.color = "#F4F1EA"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "var(--color-cream)"; e.currentTarget.style.borderBottomColor = "transparent"; e.currentTarget.querySelector('.dom-icon').style.color = "var(--color-teal)"; e.currentTarget.querySelector('.dom-title').style.color = "var(--color-teal)"; }}
                >
                  <div className="dom-icon" style={{ color: "var(--color-teal)", marginBottom: "16px", transition: "color 0.3s", display: "flex", justifyContent: "center" }}>{d.icon}</div>
                  <h4 className="dom-title" style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--color-teal)", fontWeight: 500, transition: "color 0.3s" }}>{d.title}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Competitive Advantage */}
      <section style={{ padding: "100px 5%", background: "var(--color-teal)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "12px", textAlign: "center" }}>What Sets Us Apart</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3vw,46px)", fontWeight: 400, color: "#F4F1EA", textAlign: "center", marginBottom: "60px" }}>
              Our Competitive<br /><em>Advantage</em>
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2px" }}>
            {advantages.map((adv, i) => (
              <Reveal key={adv.title} delay={i * 80}>
                <div style={{ padding: "44px 36px", background: "rgba(244,241,234,0.06)", borderTop: "1px solid rgba(201,162,63,0.3)", transition: "background 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(244,241,234,0.1)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(244,241,234,0.06)"}
                >
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 500, color: "var(--color-gold)", marginBottom: "16px" }}>{adv.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.8, color: "rgba(244,241,234,0.75)" }}>{adv.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Global Presence */}
      <section style={{ padding: "100px 5%", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "12px", textAlign: "center" }}>Global Presence</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3vw,46px)", fontWeight: 400, color: "var(--color-teal)", textAlign: "center", marginBottom: "60px" }}>
              Three Continents,<br /><em>One Standard</em>
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2px" }}>
            {[
              { city: "Mumbai", region: "South Asia & India", role: "Registered Office", img: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=600&q=80" },
              { city: "Dubai", region: "Middle East & GCC", role: "Regional Office", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" },
              { city: "Sydney", region: "Asia-Pacific", role: "Regional Office", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80" },
            ].map((office, i) => (
              <Reveal key={office.city} delay={i * 100}>
                <div style={{ position: "relative", overflow: "hidden", height: "320px" }}>
                  <img src={office.img} alt={office.city} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,76,92,0.9) 0%, rgba(15,76,92,0.2) 60%, transparent 100%)" }} />
                  <div style={{ position: "absolute", bottom: "28px", left: "28px" }}>
                    <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "var(--color-gold)", textTransform: "uppercase", marginBottom: "6px", fontWeight: 600 }}>{office.role}</p>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "28px", color: "#F4F1EA", fontWeight: 400, marginBottom: "4px" }}>{office.city}</h3>
                    <p style={{ fontSize: "12px", color: "rgba(244,241,234,0.7)" }}>{office.region}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />
      <CTAStrip onNavigate={onNavigate} />
    </div>
  );
};

/* ═══════════════════════════════════════════
   ABOUT PAGE
═══════════════════════════════════════════ */
const AboutPage = ({ onNavigate }) => (
  <div>
    {/* Hero */}
    <section style={{ position: "relative", height: "70vh", minHeight: "480px", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
      <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1800&q=80" alt="About hero"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      {/* Replace: boardroom with floor-to-ceiling windows, golden light */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,76,92,0.95) 0%, rgba(15,76,92,0.4) 60%, transparent 100%)" }} />
      <div style={{ position: "relative", padding: "0 5% 60px", maxWidth: "800px" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--color-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: "16px" }}>About Us</p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,72px)", fontWeight: 300, color: "#F4F1EA", lineHeight: 1.1 }}>
          Advisors Entrusted with<br /><em>Consequential Decisions</em>
        </h1>
      </div>
    </section>

    <GoldDivider />

    {/* Who We Are */}
    <section style={{ padding: "100px 5%", background: "var(--color-cream)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
        <Reveal>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "20px" }}>Who We Are</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3vw,46px)", fontWeight: 400, color: "var(--color-teal)", lineHeight: 1.2, marginBottom: "28px" }}>
            Research-Driven,<br />Structured &amp; <em>Discreet</em>
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#3a3a3a", marginBottom: "20px", fontWeight: 300 }}>
            We are advisors entrusted with consequential decisions. Our work spans Executive Search, Board and Governance appointments, CEO succession, and emerging leadership domains such as Artificial Intelligence.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#3a3a3a", marginBottom: "20px", fontWeight: 300 }}>
            Our approach is research driven, structured, and discreet. We combine market intelligence, rigorous assessment, and governance awareness to identify leaders who align with both strategic ambition and organisational culture.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#3a3a3a", fontWeight: 300 }}>
            We believe executive search is not a transactional activity. It is a long term partnership grounded in trust, judgement, and accountability.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div style={{ position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" alt="Team discussion"
              style={{ width: "100%", height: "480px", objectFit: "cover" }} />
            {/* Replace: executive discussion across a polished table, natural light */}
            <div style={{ position: "absolute", bottom: "-20px", left: "-20px", width: "160px", height: "160px", background: "var(--color-teal)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "14px", color: "var(--color-gold)", textAlign: "center", lineHeight: 1.5 }}>Advantage Starts Here</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <GoldDivider />

    {/* Leadership Philosophy */}
    <section style={{ padding: "100px 5%", background: "#fff" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "20px" }}>Our Philosophy</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3vw,46px)", fontWeight: 400, color: "var(--color-teal)", marginBottom: "36px" }}>
            <em>Leadership is not defined by title.<br />It is defined by impact.</em>
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.9, color: "#3a3a3a", marginBottom: "24px", fontWeight: 300 }}>
            At PivotEdge Partners, we believe the quality of leadership determines the quality of organisational outcomes. Boards shape oversight and direction. Chief Executives set vision and performance standards. Functional leaders translate strategy into execution.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.9, color: "#3a3a3a", fontWeight: 300 }}>
            Our role is to ensure that leadership capability aligns precisely with strategic ambition. We approach every mandate with structured evaluation, market intelligence, and governance awareness — considering not only experience, but judgement, adaptability, cultural alignment, and long-term enterprise impact.
          </p>
        </Reveal>
      </div>
    </section>

    <GoldDivider />

    {/* Competitive Advantage */}
    <section style={{ padding: "100px 5%", background: "var(--color-cream)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "12px", textAlign: "center" }}>Why Choose Us</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3vw,46px)", fontWeight: 400, color: "var(--color-teal)", textAlign: "center", marginBottom: "60px" }}>
            Our Competitive <em>Advantage</em>
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2px" }}>
          {[
            { title: "Advisory First", desc: "We approach every engagement as strategic advisors, not transactional intermediaries. Our orientation is toward outcomes, not placements.", icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M6 28 L18 8 L30 28" stroke="var(--color-gold)" strokeWidth="1.5" fill="none"/><path d="M10 22 L26 22" stroke="var(--color-teal)" strokeWidth="1.5"/></svg> },
            { title: "Research-Driven", desc: "Comprehensive market mapping and talent intelligence underpin every mandate. We identify leaders others cannot find.", icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="16" cy="16" r="10" stroke="var(--color-gold)" strokeWidth="1.5" fill="none"/><line x1="23" y1="23" x2="31" y2="31" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round"/><line x1="10" y1="16" x2="22" y2="16" stroke="var(--color-teal)" strokeWidth="1.5"/></svg> },
            { title: "Senior Access", desc: "Deep and direct relationships across executive and board-level talent pools, built over years of trusted advisory work.", icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="12" r="6" stroke="var(--color-gold)" strokeWidth="1.5" fill="none"/><path d="M6 30 Q6 22 18 22 Q30 22 30 30" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/></svg> },
            { title: "Long-Term Trust", desc: "Accountability and integrity across the full engagement lifecycle. Our relationships outlast the placement.", icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 4 L22 14 L34 14 L25 21 L28 32 L18 26 L8 32 L11 21 L2 14 L14 14 Z" stroke="var(--color-gold)" strokeWidth="1.5" fill="none"/></svg> },
          ].map((adv, i) => (
            <Reveal key={adv.title} delay={i * 80}>
              <div style={{ background: "#fff", padding: "44px 36px", borderBottom: "3px solid transparent", transition: "border-color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.borderBottomColor = "var(--color-gold)"}
                onMouseLeave={e => e.currentTarget.style.borderBottomColor = "transparent"}
              >
                <div style={{ marginBottom: "20px" }}>{adv.icon}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "var(--color-teal)", fontWeight: 500, marginBottom: "12px" }}>{adv.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555" }}>{adv.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <GoldDivider />

    {/* Leadership */}
    <section style={{ padding: "100px 5%", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "12px", textAlign: "center" }}>Leadership</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3vw,46px)", fontWeight: 400, color: "var(--color-teal)", textAlign: "center", marginBottom: "60px" }}>The People<br /><em>Behind the Firm</em></h2>
        </Reveal>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ background: "var(--color-cream)", padding: "48px" }}>
              <div style={{ display: "flex", gap: "32px", alignItems: "flex-start", flexWrap: "wrap" }}>
                <div style={{ width: "120px", height: "120px", background: "var(--color-teal)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "36px", color: "var(--color-gold)", fontWeight: 400 }}>SA</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "28px", color: "var(--color-teal)", fontWeight: 500, marginBottom: "4px" }}>Swapna Amin</h3>
                  <p style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "20px" }}>Principal & Advisor</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <a href="mailto:swapna.amin@pivotedgegroup.com" style={{ fontSize: "13px", color: "var(--color-teal)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/><polyline points="2,4 10,12 18,4" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/></svg>
                      swapna.amin@pivotedgegroup.com
                    </a>
                    <p style={{ fontSize: "13px", color: "var(--color-teal)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M3 4h4l2 5-2 2a12 12 0 006 6l2-2 5 2v4a1 1 0 01-1 1C9 22 2 14 2 5a1 1 0 011-1z" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/></svg>
                      +91 98207 79053
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <GoldDivider />
    <CTAStrip onNavigate={onNavigate} />
  </div>
);

/* ═══════════════════════════════════════════
   SERVICES PAGE
═══════════════════════════════════════════ */
const ServicesPage = ({ onNavigate }) => {
  const services = [
    {
      title: "Executive Search",
      desc: "We deliver retained executive search for senior leadership and board-level roles across industries and growth stages. Each mandate begins with a deep understanding of organisational strategy, culture, governance context, and performance objectives. Our research-led approach evaluates not only experience and track record, but judgement, leadership style, cultural alignment, and long-term impact.",
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="20" cy="20" r="12" stroke="var(--color-gold)" strokeWidth="1.5" fill="none"/><line x1="29" y1="29" x2="42" y2="42" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round"/><line x1="14" y1="20" x2="26" y2="20" stroke="var(--color-teal)" strokeWidth="1.5"/><line x1="20" y1="14" x2="20" y2="26" stroke="var(--color-teal)" strokeWidth="1.5"/></svg>,
    },
    {
      title: "Boards & Governance",
      desc: "We advise on board composition, governance effectiveness, and director appointments. Boards today operate in an environment defined by regulatory scrutiny, investor expectations, and strategic complexity. Our work supports boards in strengthening oversight, strategic guidance, and leadership succession at the highest levels.",
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="16" height="16" rx="2" stroke="var(--color-gold)" strokeWidth="1.5" fill="none"/><rect x="26" y="6" width="16" height="16" rx="2" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/><rect x="6" y="26" width="16" height="16" rx="2" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/><rect x="26" y="26" width="16" height="16" rx="2" stroke="var(--color-gold)" strokeWidth="1.5" fill="none"/></svg>,
    },
    {
      title: "Succession Planning",
      desc: "Leadership continuity is a strategic imperative. We partner with Boards and executive teams to design succession strategies that strengthen bench strength, reduce risk, and preserve institutional knowledge. Our approach identifies critical roles, evaluates internal readiness, and builds structured leadership pipelines aligned to long-term priorities.",
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="12" r="7" stroke="var(--color-gold)" strokeWidth="1.5" fill="none"/><circle cx="10" cy="36" r="7" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/><circle cx="38" cy="36" r="7" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/><line x1="24" y1="19" x2="10" y2="29" stroke="var(--color-gold)" strokeWidth="1" opacity="0.5"/><line x1="24" y1="19" x2="38" y2="29" stroke="var(--color-gold)" strokeWidth="1" opacity="0.5"/></svg>,
    },
    {
      title: "Interim Management",
      desc: "When leadership gaps arise or specialised expertise is required, interim management provides rapid access to experienced executives. We identify seasoned leaders who can step into complex environments, stabilise operations, drive transformation, or deliver specific outcomes within defined timeframes — without compromising on capability.",
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" stroke="var(--color-gold)" strokeWidth="1.5" fill="none"/><line x1="24" y1="8" x2="24" y2="24" stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round"/><line x1="24" y1="24" x2="34" y2="30" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round"/></svg>,
    },
    {
      title: "Career Transition",
      desc: "Organisational evolution often requires difficult leadership decisions. We support organisations in managing transitions with integrity and professionalism. Our services provide structured guidance, leadership coaching, capability alignment, and strategic repositioning support — helping individuals move forward with clarity while protecting organisational reputation.",
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M8 24 H32 M24 16 L36 24 L24 32" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="12" cy="24" r="4" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/></svg>,
    },
    {
      title: "Diversity",
      desc: "Diverse leadership strengthens governance, innovation, and performance. We integrate diversity and inclusion considerations into every search and advisory engagement. Our approach ensures leadership appointments reflect broader perspectives, varied experiences, and alignment with organisational values — supporting stronger decision-making and long-term sustainability.",
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="8" stroke="var(--color-gold)" strokeWidth="1.5" fill="none"/><circle cx="10" cy="14" r="5" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/><circle cx="38" cy="14" r="5" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/><circle cx="10" cy="34" r="5" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/><circle cx="38" cy="34" r="5" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/></svg>,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", height: "60vh", minHeight: "420px", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1800&q=80" alt="Services"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        {/* Replace: executive meeting, selective focus on hands, premium table */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,76,92,0.95) 0%, rgba(15,76,92,0.35) 70%, transparent 100%)" }} />
        <div style={{ position: "relative", padding: "0 5% 60px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--color-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: "12px" }}>Our Services</p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,5vw,64px)", fontWeight: 300, color: "#F4F1EA", lineHeight: 1.1 }}>
            Advisory That Moves<br /><em>the Enterprise Forward</em>
          </h1>
        </div>
      </section>

      <GoldDivider />

      {/* Services Grid */}
      <section style={{ padding: "100px 5%", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2px" }}>
            {services.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 60}>
                <div style={{ background: "#fff", padding: "52px 44px", borderBottom: "3px solid transparent", transition: "border-color 0.3s, background 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderBottomColor = "var(--color-gold)"; e.currentTarget.style.background = "#faf9f6"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderBottomColor = "transparent"; e.currentTarget.style.background = "#fff"; }}
                >
                  <div style={{ marginBottom: "24px" }}>{svc.icon}</div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "26px", color: "var(--color-teal)", fontWeight: 500, marginBottom: "16px" }}>{svc.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.85, color: "#555" }}>{svc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Methodology */}
      <section style={{ padding: "100px 5%", background: "var(--color-teal)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "12px", textAlign: "center" }}>Our Methodology</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3vw,46px)", fontWeight: 400, color: "#F4F1EA", textAlign: "center", marginBottom: "64px" }}>
              Five Stages of<br /><em>Rigorous Engagement</em>
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0", position: "relative" }}>
            <div style={{ position: "absolute", top: "36px", left: "10%", right: "10%", height: "1px", background: "linear-gradient(to right, transparent, rgba(201,162,63,0.5), rgba(201,162,63,0.5), transparent)" }} />
            {[
              { num: "01", title: "Mandate", desc: "Strategic alignment on objectives and governance." },
              { num: "02", title: "Market Intelligence", desc: "Comprehensive talent mapping globally." },
              { num: "03", title: "Benchmark", desc: "Rigorous candidate evaluation." },
              { num: "04", title: "Calibration", desc: "Stakeholder alignment throughout." },
              { num: "05", title: "Transition", desc: "Onboarding and integration advisory." },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div style={{ textAlign: "center", padding: "0 12px" }}>
                  <div style={{ width: "72px", height: "72px", borderRadius: "50%", border: "1.5px solid var(--color-gold)", background: "rgba(15,76,92,0.8)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px", position: "relative", zIndex: 1 }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--color-gold)" }}>{step.num}</span>
                  </div>
                  <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "17px", color: "#F4F1EA", fontWeight: 500, marginBottom: "10px" }}>{step.title}</h4>
                  <p style={{ fontSize: "12px", lineHeight: 1.7, color: "rgba(244,241,234,0.6)" }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />
      <CTAStrip onNavigate={onNavigate} headline="Ready to define your next leadership chapter?" />
    </div>
  );
};

/* ═══════════════════════════════════════════
   INSIGHTS PAGE
═══════════════════════════════════════════ */
const InsightsPage = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Leadership", "Governance", "Strategy", "Technology"];

  const insights = [
    { category: "Leadership", title: "The CEO and Board Partnership: Building Trust at the Top", excerpt: "The relationship between a Chief Executive and the Board Chairman is among the most consequential in any organisation. When it works, strategy moves with clarity and conviction.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", featured: true },
    { category: "Governance", title: "Board Composition in an Era of Disruption", excerpt: "As industries transform, the skills required around the boardroom table are shifting. Organisations that adapt their governance model will navigate complexity with greater resilience.", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80" },
    { category: "Technology", title: "The Rise of the Chief AI Officer", excerpt: "Artificial Intelligence is reshaping operating models across every sector. The emergence of dedicated AI leadership roles signals a new chapter in enterprise transformation.", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80" },
    { category: "Strategy", title: "Succession Planning as Strategic Advantage", excerpt: "Organisations that treat succession planning as a continuous discipline — not an emergency response — build deeper leadership resilience and reduce transition risk.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" },
    { category: "Leadership", title: "What Distinguishes Great CFOs in Today's Environment", excerpt: "The Chief Financial Officer has evolved from financial steward to strategic partner. The attributes that define exceptional CFO leadership have expanded considerably.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
    { category: "Governance", title: "Diversity in Leadership: Beyond Compliance", excerpt: "The evidence is clear that diverse leadership teams make better decisions over time. Moving from compliance to genuine inclusion requires deliberate strategy and consistent accountability.", img: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=600&q=80" },
  ];

  const filtered = activeCategory === "All" ? insights : insights.filter(a => a.category === activeCategory);
  const featured = insights.find(a => a.featured);
  const rest = filtered.filter(a => !a.featured);

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: "160px 5% 80px", background: "var(--color-teal)" }}>
        <div style={{ maxWidth: "800px" }}>
          <Reveal>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--color-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: "20px" }}>Insights</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,68px)", fontWeight: 300, color: "#F4F1EA", lineHeight: 1.1 }}>
              Perspectives on<br /><em>Leadership & Governance</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <GoldDivider />

      {/* Featured */}
      {featured && (
        <section style={{ padding: "80px 5% 0", background: "#fff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <Reveal>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", overflow: "hidden" }}>
                <div style={{ position: "relative", minHeight: "480px" }}>
                  <img src={featured.img} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "20px", left: "20px", background: "var(--color-gold)", padding: "6px 16px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "#fff" }}>FEATURED</span>
                  </div>
                </div>
                <div style={{ background: "var(--color-cream)", padding: "60px 52px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--color-gold)", fontWeight: 600, textTransform: "uppercase", marginBottom: "20px" }}>{featured.category}</p>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,2.5vw,36px)", color: "var(--color-teal)", fontWeight: 400, lineHeight: 1.2, marginBottom: "20px" }}>{featured.title}</h2>
                  <p style={{ fontSize: "14px", lineHeight: 1.85, color: "#555", marginBottom: "32px" }}>{featured.excerpt}</p>
                  <span style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 600, borderBottom: "1px solid var(--color-gold)", paddingBottom: "2px", cursor: "pointer", alignSelf: "flex-start" }}>Read Insight →</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section style={{ padding: "60px 5% 20px", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "32px", flexWrap: "wrap" }}>
          {categories.map(cat => (
            <span key={cat} onClick={() => setActiveCategory(cat)}
              style={{ fontFamily: "var(--font-sans)", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, cursor: "pointer", color: activeCategory === cat ? "var(--color-teal)" : "#999", borderBottom: activeCategory === cat ? "2px solid var(--color-gold)" : "2px solid transparent", paddingBottom: "4px", transition: "color 0.2s" }}>
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ padding: "40px 5% 100px", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2px" }}>
          {rest.map((article, i) => (
            <Reveal key={article.title} delay={i * 60}>
              <div style={{ background: "var(--color-cream)", overflow: "hidden", cursor: "pointer", transition: "transform 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ height: "220px", overflow: "hidden" }}>
                  <img src={article.img} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                </div>
                <div style={{ padding: "32px" }}>
                  <p style={{ fontSize: "10px", letterSpacing: "0.15em", color: "var(--color-gold)", fontWeight: 600, textTransform: "uppercase", marginBottom: "12px" }}>{article.category}</p>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--color-teal)", fontWeight: 500, marginBottom: "12px", lineHeight: 1.3 }}>{article.title}</h3>
                  <p style={{ fontSize: "13px", lineHeight: 1.75, color: "#666", marginBottom: "20px" }}>{article.excerpt}</p>
                  <span style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 600, borderBottom: "1px solid var(--color-gold)", paddingBottom: "2px" }}>Read More →</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <GoldDivider />
      <CTAStrip onNavigate={onNavigate} headline="Leadership insights, directly to your inbox." subline="Join Boards and executives who follow PivotEdge thinking." />
    </div>
  );
};

/* ═══════════════════════════════════════════
   DOMAINS PAGE
═══════════════════════════════════════════ */
const DomainsPage = ({ onNavigate }) => {
  const domains = [
    {
      title: "Industrial",
      desc: "Industrial organisations operate within cyclical markets, cost pressures, and evolving technological landscapes. We support manufacturers and industrial enterprises in appointing leaders capable of modernising operations, improving productivity, and sustaining long-term competitiveness.",
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="24" width="8" height="12" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="16" y="16" width="8" height="20" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="28" y="8" width="8" height="28" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>,
    },
    {
      title: "Real Estate & Infrastructure",
      desc: "Capital-intensive and long-cycle in nature, this sector demands disciplined leadership with strong risk management and stakeholder alignment. We work with developers, operators, and infrastructure enterprises to identify executives who can drive scale, efficiency, and asset value.",
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><polygon points="20,4 36,18 36,36 4,36 4,18" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="16" y="26" width="8" height="10" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>,
    },
    {
      title: "Consumer",
      desc: "Rapidly shifting customer behaviour and digital disruption require agile leadership. We support consumer-facing organisations in appointing executives who understand market dynamics, brand positioning, and growth strategy at scale.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M8 10h24l-4 16H12L8 10z" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="15" cy="34" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="27" cy="34" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>,
    },
    {
      title: "Healthcare & Life Sciences",
      desc: "Innovation, regulation, and societal responsibility define this sector. We identify leaders with scientific credibility, regulatory awareness, and strategic foresight to guide organisations through complexity and transformation.",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="4" width="32" height="32" rx="6" stroke="currentColor" strokeWidth="1.5" fill="none"/><line x1="20" y1="11" x2="20" y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="11" y1="20" x2="29" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
    },
    {
      title: "Banking & Financial Services",
      desc: "Managing capital, risk, compliance, and technological change demands experienced leadership. We support financial institutions in appointing executives who can navigate regulatory landscapes while delivering sustainable performance.",
      img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="18" width="32" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><polygon points="20,4 36,18 4,18" stroke="currentColor" strokeWidth="1.5" fill="none"/><line x1="12" y1="24" x2="12" y2="32" stroke="currentColor" strokeWidth="1.5"/><line x1="20" y1="24" x2="20" y2="32" stroke="currentColor" strokeWidth="1.5"/><line x1="28" y1="24" x2="28" y2="32" stroke="currentColor" strokeWidth="1.5"/></svg>,
    },
    {
      title: "Technology, Media & Telecommunications",
      desc: "Continuous innovation and digital disruption shape this domain. We partner with organisations to identify leaders who can harness emerging technologies, scale platforms, and drive competitive differentiation in rapidly evolving markets.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" fill="none"/><ellipse cx="20" cy="20" rx="7" ry="14" stroke="currentColor" strokeWidth="1.5" fill="none"/><line x1="6" y1="20" x2="34" y2="20" stroke="currentColor" strokeWidth="1.5"/></svg>,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", height: "60vh", minHeight: "420px", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=1800&q=80" alt="Domains"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        {/* Replace: dramatic aerial view of city at dusk, global commerce */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,76,92,0.95) 0%, rgba(15,76,92,0.35) 70%, transparent 100%)" }} />
        <div style={{ position: "relative", padding: "0 5% 60px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--color-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: "12px" }}>Industry Domains</p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,5vw,64px)", fontWeight: 300, color: "#F4F1EA", lineHeight: 1.1 }}>
            Deep Sector Knowledge,<br /><em>Genuine Market Intelligence</em>
          </h1>
        </div>
      </section>

      <GoldDivider />

      {/* Domains */}
      <section style={{ padding: "100px 5%", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "2px" }}>
          {domains.map((domain, i) => (
            <Reveal key={domain.title} delay={i * 70}>
              <div style={{ background: "#fff", overflow: "hidden", position: "relative" }}
                onMouseEnter={e => { e.currentTarget.querySelector('.dom-img').style.transform = "scale(1.05)"; e.currentTarget.querySelector('.dom-overlay').style.opacity = "1"; }}
                onMouseLeave={e => { e.currentTarget.querySelector('.dom-img').style.transform = "scale(1)"; e.currentTarget.querySelector('.dom-overlay').style.opacity = "0"; }}
              >
                <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                  <img className="dom-img" src={domain.img} alt={domain.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
                  <div className="dom-overlay" style={{ position: "absolute", inset: 0, background: "rgba(15,76,92,0.7)", opacity: 0, transition: "opacity 0.4s", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ color: "var(--color-gold)" }}>{domain.icon}</div>
                  </div>
                </div>
                <div style={{ padding: "36px 32px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "16px" }}>
                    <div style={{ color: "var(--color-teal)", flexShrink: 0 }}>{domain.icon}</div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "var(--color-teal)", fontWeight: 500, lineHeight: 1.2 }}>{domain.title}</h3>
                  </div>
                  <p style={{ fontSize: "13px", lineHeight: 1.85, color: "#666" }}>{domain.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <GoldDivider />

      {/* Brand Statement */}
      <section style={{ padding: "100px 5%", background: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,3vw,42px)", fontWeight: 400, color: "var(--color-teal)", lineHeight: 1.3, marginBottom: "28px" }}>
              <em>"We serve clients across sectors where leadership directly influences enterprise performance and long-term value creation."</em>
            </h2>
            <div style={{ width: "60px", height: "2px", background: "var(--color-gold)", margin: "0 auto" }} />
          </Reveal>
        </div>
      </section>

      <GoldDivider />
      <CTAStrip onNavigate={onNavigate} headline="Your sector. Our expertise." subline="We bring genuine sector depth to every leadership mandate." />
    </div>
  );
};

/* ═══════════════════════════════════════════
   CONTACT PAGE
═══════════════════════════════════════════ */
const ContactPage = () => {
  const [form, setForm] = useState({ name: "", company: "", role: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const inputStyle = {
    width: "100%", padding: "14px 0", background: "transparent",
    border: "none", borderBottom: "1px solid rgba(15,76,92,0.25)",
    fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--color-charcoal)",
    outline: "none", transition: "border-color 0.3s",
  };

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: "160px 5% 80px", background: "var(--color-teal)" }}>
        <div style={{ maxWidth: "700px" }}>
          <Reveal>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--color-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: "20px" }}>Contact</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,72px)", fontWeight: 300, color: "#F4F1EA", lineHeight: 1.1 }}>
              Let's Start a<br /><em>Conversation</em>
            </h1>
            <p style={{ fontSize: "15px", color: "rgba(244,241,234,0.7)", marginTop: "24px", fontWeight: 300, lineHeight: 1.7 }}>
              Strengthen your leadership team or plan for succession — we welcome the opportunity to connect.
            </p>
          </Reveal>
        </div>
      </section>

      <GoldDivider />

      {/* Contact Form + Details */}
      <section style={{ padding: "100px 5%", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          {/* Form */}
          <Reveal>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "36px" }}>Send a Message</p>
            {submitted ? (
              <div style={{ padding: "48px", background: "var(--color-teal)", textAlign: "center" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "28px", color: "#F4F1EA", fontWeight: 400, marginBottom: "12px" }}>Thank you.</h3>
                <p style={{ fontSize: "14px", color: "rgba(244,241,234,0.75)" }}>We will be in touch shortly.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                {[
                  { key: "name", label: "Full Name", type: "text" },
                  { key: "company", label: "Organisation", type: "text" },
                  { key: "role", label: "Your Role", type: "text" },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 600, display: "block", marginBottom: "8px" }}>{field.label}</label>
                    <input type={field.type} value={form[field.key]}
                      onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = "var(--color-teal)"}
                      onBlur={e => e.target.style.borderBottomColor = "rgba(15,76,92,0.25)"}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 600, display: "block", marginBottom: "8px" }}>Message</label>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={5} style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => e.target.style.borderBottomColor = "var(--color-teal)"}
                    onBlur={e => e.target.style.borderBottomColor = "rgba(15,76,92,0.25)"}
                  />
                </div>
                <div>
                  <GoldButton onClick={() => setSubmitted(true)}>Send Message</GoldButton>
                </div>
              </div>
            )}
          </Reveal>

          {/* Contact Details */}
          <Reveal delay={150}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "36px" }}>Direct Contact</p>
            <div style={{ marginBottom: "48px" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "26px", color: "var(--color-teal)", fontWeight: 500, marginBottom: "4px" }}>Swapna Amin</h3>
              <p style={{ fontSize: "12px", letterSpacing: "0.15em", color: "var(--color-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: "20px" }}>Principal & Advisor</p>
              <a href="mailto:swapna.amin@pivotedgegroup.com" style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "var(--color-teal)", marginBottom: "12px", textDecoration: "none" }}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/><polyline points="2,4 10,12 18,4" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/></svg>
                swapna.amin@pivotedgegroup.com
              </a>
              <p style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "var(--color-teal)" }}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M3 4h4l2 5-2 2a12 12 0 006 6l2-2 5 2v4a1 1 0 01-1 1C9 22 2 14 2 5a1 1 0 011-1z" stroke="var(--color-teal)" strokeWidth="1.5" fill="none"/></svg>
                +91 98207 79053
              </p>
            </div>

            <GoldDivider />

            <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { city: "Mumbai", region: "South Asia & India", role: "Registered Office" },
                { city: "Dubai", region: "Middle East & GCC", role: "Regional Office" },
                { city: "Sydney", region: "Asia-Pacific", role: "Regional Office" },
              ].map(office => (
                <div key={office.city} style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                  <div style={{ width: "3px", height: "48px", background: "var(--color-gold)", flexShrink: 0, marginTop: "4px" }} />
                  <div>
                    <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--color-teal)", fontWeight: 500, marginBottom: "2px" }}>{office.city}</h4>
                    <p style={{ fontSize: "12px", color: "#888", marginBottom: "2px" }}>{office.region}</p>
                    <p style={{ fontSize: "11px", color: "var(--color-gold)", fontWeight: 600, letterSpacing: "0.1em" }}>{office.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <GoldDivider />

      <section style={{ padding: "80px 5%", background: "#fff", textAlign: "center" }}>
        <Reveal>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,2.5vw,36px)", fontWeight: 400, color: "var(--color-teal)", fontStyle: "italic" }}>
            When leadership is right, organisations move with confidence.
          </h2>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "var(--color-gold)", marginTop: "16px", fontStyle: "italic" }}>That is where advantage begins.</p>
        </Reveal>
      </section>
    </div>
  );
};

/* ═══════════════════════════════════════════
   LEGAL PAGES
═══════════════════════════════════════════ */
const LegalPage = ({ title, children }) => (
  <div>
    <section style={{ padding: "160px 5% 80px", background: "var(--color-teal)" }}>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,4vw,60px)", fontWeight: 300, color: "#F4F1EA" }}>{title}</h1>
    </section>
    <GoldDivider />
    <section style={{ padding: "80px 5%", background: "var(--color-cream)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", fontSize: "15px", lineHeight: 1.9, color: "#3a3a3a", fontWeight: 300 }}>
        {children}
      </div>
    </section>
  </div>
);

const TermsPage = () => (
  <LegalPage title="Terms & Conditions">
    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--color-teal)", marginBottom: "16px", marginTop: "40px", fontWeight: 500 }}>1. Acceptance of Terms</h2>
    <p style={{ marginBottom: "20px" }}>By accessing and using the PivotEdge Partners website and services, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all visitors, users, and others who access or use the service.</p>
    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--color-teal)", marginBottom: "16px", marginTop: "40px", fontWeight: 500 }}>2. Use of Services</h2>
    <p style={{ marginBottom: "20px" }}>PivotEdge Partners provides executive search and leadership advisory services. All engagements are subject to a separate written mandate agreement. The information on this website is provided for general informational purposes only.</p>
    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--color-teal)", marginBottom: "16px", marginTop: "40px", fontWeight: 500 }}>3. Intellectual Property</h2>
    <p style={{ marginBottom: "20px" }}>The content, organisation, graphics, design, and other matters related to this site are protected by applicable copyright and other proprietary laws. Copying, redistribution, or publication of any part of this site is prohibited without express written consent.</p>
    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--color-teal)", marginBottom: "16px", marginTop: "40px", fontWeight: 500 }}>4. Confidentiality</h2>
    <p style={{ marginBottom: "20px" }}>Information shared with PivotEdge Partners in the context of advisory engagements will be treated with the highest level of professional confidentiality. We do not disclose client or candidate information to third parties without explicit consent.</p>
    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--color-teal)", marginBottom: "16px", marginTop: "40px", fontWeight: 500 }}>5. Governing Law</h2>
    <p style={{ marginBottom: "20px" }}>These terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.</p>
    {/* Insert additional legal content here */}
  </LegalPage>
);

const DisclaimerPage = () => (
  <LegalPage title="Disclaimer">
    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--color-teal)", marginBottom: "16px", marginTop: "40px", fontWeight: 500 }}>General Disclaimer</h2>
    <p style={{ marginBottom: "20px" }}>The information provided on this website is for general informational purposes only. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information contained on the website.</p>
    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--color-teal)", marginBottom: "16px", marginTop: "40px", fontWeight: 500 }}>Professional Advice</h2>
    <p style={{ marginBottom: "20px" }}>Nothing on this website constitutes professional legal, financial, or business advice. The content is provided for informational purposes. You should seek appropriate professional advice before taking any action based on information found on this site.</p>
    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--color-teal)", marginBottom: "16px", marginTop: "40px", fontWeight: 500 }}>Limitation of Liability</h2>
    <p style={{ marginBottom: "20px" }}>PivotEdge Partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your access to or use of this website or the information contained herein.</p>
    {/* Insert additional disclaimer content here */}
  </LegalPage>
);

const PrivacyPage = () => (
  <LegalPage title="Privacy Policy">
    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--color-teal)", marginBottom: "16px", marginTop: "40px", fontWeight: 500 }}>Information We Collect</h2>
    <p style={{ marginBottom: "20px" }}>We collect information you voluntarily provide when contacting us or engaging our services, including your name, contact details, professional background, and other relevant professional information. We may also collect technical information about your visit to this website.</p>
    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--color-teal)", marginBottom: "16px", marginTop: "40px", fontWeight: 500 }}>How We Use Information</h2>
    <p style={{ marginBottom: "20px" }}>Information you provide is used to fulfil engagement requirements, communicate with you about our services, and improve our advisory capabilities. We do not sell, trade, or rent personal information to third parties.</p>
    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--color-teal)", marginBottom: "16px", marginTop: "40px", fontWeight: 500 }}>Data Security</h2>
    <p style={{ marginBottom: "20px" }}>We implement appropriate security measures to protect your personal information. Access to personal information is restricted to authorised personnel who require access for professional purposes.</p>
    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--color-teal)", marginBottom: "16px", marginTop: "40px", fontWeight: 500 }}>Contact</h2>
    <p style={{ marginBottom: "20px" }}>For any privacy-related queries, please contact Swapna Amin at swapna.amin@pivotedgegroup.com.</p>
    {/* Insert additional privacy policy content here */}
  </LegalPage>
);

/* ═══════════════════════════════════════════
   LAYOUT WRAPPER
═══════════════════════════════════════════ */
const Layout = ({ children, currentPage, onNavigate }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Navbar currentPage={currentPage} onNavigate={onNavigate} />
    <main style={{ flex: 1, paddingTop: currentPage === "Home" ? "0" : "0" }}>
      {children}
    </main>
    <Footer onNavigate={onNavigate} />
  </div>
);

/* ═══════════════════════════════════════════
   APP ROUTER
═══════════════════════════════════════════ */
export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home": return <HomePage onNavigate={navigate} />;
      case "About": return <AboutPage onNavigate={navigate} />;
      case "Services": return <ServicesPage onNavigate={navigate} />;
      case "Insights": return <InsightsPage onNavigate={navigate} />;
      case "Domains": return <DomainsPage onNavigate={navigate} />;
      case "Contact": return <ContactPage />;
      case "Terms": return <TermsPage />;
      case "Disclaimer": return <DisclaimerPage />;
      case "Privacy": return <PrivacyPage />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <>
      <FontLoader />
      <GlobalStyles />
      <style>{`
        @keyframes scrollPulse { 0%,100%{opacity:0.4;transform:scaleY(0.7)} 50%{opacity:0.9;transform:scaleY(1)} }
        @media(max-width:768px){
          section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: repeat(5, 1fr)"] { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          div[style*="grid-template-columns: repeat(5, 1fr)"] > * { padding: 0 8px !important; }
        }
      `}</style>
      <Layout currentPage={currentPage} onNavigate={navigate}>
        {renderPage()}
      </Layout>
    </>
  );
}
