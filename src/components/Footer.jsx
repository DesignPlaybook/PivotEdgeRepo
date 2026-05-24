import React from "react";
import logo from "../assets/images/logo1.png";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const GeometricAccent = () => (
  <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
    <circle cx="100" cy="100" r="90" stroke="#C9A23F" strokeWidth="0.5" />
    <circle
      cx="100"
      cy="100"
      r="70"
      stroke="#C9A23F"
      strokeWidth="0.3"
      strokeDasharray="4 6"
    />
    <circle cx="100" cy="100" r="50" stroke="#C9A23F" strokeWidth="0.6" />
    <line
      x1="100"
      y1="10"
      x2="100"
      y2="190"
      stroke="#C9A23F"
      strokeWidth="0.4"
      strokeDasharray="2 8"
    />
    <line
      x1="10"
      y1="100"
      x2="190"
      y2="100"
      stroke="#C9A23F"
      strokeWidth="0.4"
      strokeDasharray="2 8"
    />
    <polygon
      points="100,60 122,86 100,112 78,86"
      stroke="#C9A23F"
      strokeWidth="0.7"
      fill="none"
    />
    <circle cx="100" cy="100" r="4" fill="#C9A23F" />
  </svg>
);

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Domains", path: "/domains" },
  { name: "Insights", path: "/insights" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => (
  <footer
    className="bg-[#EAE6DC] text-[#5b6f77] relative overflow-hidden"
    style={{ fontFamily: "'Jost', sans-serif" }}
  >
    {/* Top gold divider */}
    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />

    {/* Dot-grid texture */}
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage: "radial-gradient(#0F4C5C 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    />

    {/* Geometric watermarks */}
    <div className="absolute bottom-0 right-0 w-72 h-72 opacity-[0.06] pointer-events-none translate-x-12 translate-y-12">
      <GeometricAccent />
    </div>
    <div className="absolute top-0 left-0 w-48 h-48 opacity-[0.05] pointer-events-none -translate-x-10 -translate-y-10">
      <GeometricAccent />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-8 pt-16 pb-10">
      {/* Upper 3-column grid */}
      <div className="grid lg:grid-cols-[1.6fr_1fr_1fr] gap-12 lg:gap-16 mb-14">
        {/* Col 1: Brand */}
        <div>
          <div className="mb-7">
            <img src={logo} alt="PivotEdge Partners" className="h-11 w-auto" />
          </div>
          <p className="text-[#5b6f77] text-sm leading-[1.9] font-light max-w-xs mb-8">
            We partner with boards and senior executives to identify
            transformational leaders who drive long-term enterprise performance
            across industries and global markets.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: FaLinkedin, href: "#" },
              { Icon: FaTwitter, href: "#" },
              { Icon: FaInstagram, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-9 h-9 rounded-lg border border-[#C9A23F]/30 bg-[#0F4C5C]/5 hover:bg-[#C9A23F]/15 hover:border-[#C9A23F]/60 flex items-center justify-center flex-shrink-0 transition-all duration-300 group cursor-pointer"
              >
                <Icon
                  size={14}
                  className="text-[#5b6f77] group-hover:text-[#C9A23F] transition-colors"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-[1px] bg-[#C9A23F]" />
            <span className="text-[#C9A23F] text-[0.65rem] tracking-[0.28em] uppercase font-medium">
              Navigation
            </span>
          </div>
          <ul className="space-y-3">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-[#5b6f77] text-sm font-light hover:text-[#C9A23F] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-[1px] bg-[#C9A23F] group-hover:w-4 transition-all duration-300 flex-shrink-0" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-[1px] bg-[#C9A23F]" />
            <span className="text-[#C9A23F] text-[0.65rem] tracking-[0.28em] uppercase font-medium">
              Contact
            </span>
          </div>
          <ul className="space-y-4 mb-8">
            {[
              { Icon: FaEnvelope, text: "info@pivotedgegroup.com" },
              { Icon: FaPhoneAlt, text: "+91 98765 43210" },
            ].map(({ Icon, text }, i) => (
              <li key={i} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg border border-[#C9A23F]/25 bg-[#C9A23F]/8 group-hover:border-[#C9A23F]/50 group-hover:bg-[#C9A23F]/15 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Icon size={11} className="text-[#C9A23F]" />
                </div>
                <span className="text-[#5b6f77] text-sm font-light">
                  {text}
                </span>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.2em] uppercase font-medium text-[#0F4C5C] border border-[#0F4C5C]/30 px-5 py-2.5 hover:bg-[#0F4C5C] hover:text-white hover:border-[#0F4C5C] transition-all duration-300"
          >
            Begin a Conversation
            <svg
              viewBox="0 0 16 16"
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="8" x2="13" y2="8" />
              <polyline points="9,4 13,8 9,12" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#0F4C5C]/15 to-transparent mb-7" />

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[0.72rem] text-[#5b6f77]/70 tracking-wide">
        <p>
          © {new Date().getFullYear()} PivotEdge Partners. All rights reserved.
        </p>
        <div className="flex items-center gap-1">
          {[
            { label: "Privacy Policy", path: "/policies" },
            { label: "Terms & Conditions", path: "/terms" },
            { label: "Disclaimer", path: "/disclaimer" },
          ].map(({ label, path }, i, arr) => (
            <React.Fragment key={label}>
              <Link
                to={path}
                className="hover:text-[#C9A23F] transition-colors duration-300 px-2"
              >
                {label}
              </Link>
              {i < arr.length - 1 && (
                <span className="text-[#0F4C5C]/20">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
