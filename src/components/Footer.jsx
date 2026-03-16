// Footer.jsx
import React from "react";
import logo from "../assets/images/logo1.png";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300  pb-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C9A23F]/10 blur-[180px] rounded-full"></div>

      {/* Top Gold Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-40 mb-14"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Logo + About */}
        <div>
          <img
            src={logo}
            alt="Company Logo"
            className="h-16 w-auto mb-5 brightness-125 contrast-125 transition duration-300 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(201,162,63,0.6)]"
          />

          <p className="text-gray-400 text-sm leading-relaxed">
            We partner with boards and senior executives to identify
            transformational leaders who drive long-term enterprise
            performance across industries and global markets.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-5 tracking-wide">Company</h4>

          <ul className="space-y-3 text-sm text-gray-400">

            {["About Us", "Leadership", "Careers", "Insights", "Contact"].map(
              (item, index) => (
                <li key={index} className="group cursor-pointer w-fit">
                  <span className="relative transition hover:text-white">
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#C9A23F] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </li>
              )
            )}

          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-5 tracking-wide">Services</h4>

          <ul className="space-y-3 text-sm text-gray-400">

            {[
              "Executive Search",
              "Board Advisory",
              "CEO & Leadership Advisory",
              "Succession Planning",
            ].map((item, index) => (
              <li key={index} className="group cursor-pointer w-fit">
                <span className="relative transition hover:text-white">
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#C9A23F] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            ))}

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-5 tracking-wide">Contact</h4>

          <ul className="space-y-4 text-sm text-gray-400">

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#C9A23F]" />
              info@company.com
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#C9A23F]" />
              +91 98765 43210
            </li>

            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#C9A23F]" />
              Mumbai, India
            </li>

          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            <a className="p-2 rounded-full bg-white/5 hover:bg-[#C9A23F] hover:text-black transition duration-300 cursor-pointer">
              <FaLinkedin />
            </a>

            <a className="p-2 rounded-full bg-white/5 hover:bg-[#C9A23F] hover:text-black transition duration-300 cursor-pointer">
              <FaTwitter />
            </a>

            <a className="p-2 rounded-full bg-white/5 hover:bg-[#C9A23F] hover:text-black transition duration-300 cursor-pointer">
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-14 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-gray-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} CompanyName. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-400">
          <span className="hover:text-white cursor-pointer transition">
            Privacy Policy
          </span>

          <span className="hover:text-white cursor-pointer transition">
            Terms & Conditions
          </span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;