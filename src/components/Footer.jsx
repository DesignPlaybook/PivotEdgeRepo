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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F4C5C] text-gray-200 pt-10 pb-8">
      {/* Top Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-40 mb-8"></div>

      <div className="max-w-7xl mx-auto px-5">
        {/* Grid Layout */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* Logo Section (Desktop Only) */}
          <div className="hidden lg:block max-w-xs">
            <div className="bg-white p-2 rounded-md inline-block mb-4">
              <img src={logo} alt="Company Logo" className="h-12 w-auto" />
            </div>

            <p className="text-sm leading-relaxed text-gray-300">
              We partner with boards and senior executives to identify
              transformational leaders who drive long-term enterprise
              performance across industries and global markets.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs sm:text-sm md:text-base">
              Company
            </h4>

            <ul className="space-y-1 sm:space-y-2 text-[11px] sm:text-xs md:text-sm">
              <li className="hover:text-[#d4af37] cursor-pointer">
                <Link to="/about">About Us</Link>
              </li>

              <li className="hover:text-[#d4af37] cursor-pointer">
                <Link to="/services">Services</Link>
              </li>

              <li className="hover:text-[#d4af37] cursor-pointer">
                <Link to="/domains">Domain</Link>
              </li>

              <li className="hover:text-[#d4af37] cursor-pointer">
                <Link to="/insights">Insights</Link>
              </li>

              <li className="hover:text-[#d4af37] cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs sm:text-sm md:text-base">
              Services
            </h4>

            <ul className="space-y-1 sm:space-y-2 text-[11px] sm:text-xs md:text-sm">
              <li className="hover:text-[#d4af37] cursor-pointer">
                Executive Search
              </li>
              <li className="hover:text-[#d4af37] cursor-pointer">
                Board Advisory
              </li>
              <li className="hover:text-[#d4af37] cursor-pointer">
                CEO & Leadership Advisory
              </li>
              <li className="hover:text-[#d4af37] cursor-pointer">
                Succession Planning
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs sm:text-sm md:text-base">
              Contact
            </h4>

            <ul className="space-y-2 text-[11px] sm:text-xs md:text-sm">
              <li className="flex items-start gap-2 break-words">
                <FaEnvelope className="text-[#d4af37] mt-[3px] min-w-[12px]" />
                <span>info@company.com</span>
              </li>

              <li className="flex items-start gap-2 break-words">
                <FaPhoneAlt className="text-[#d4af37] mt-[3px] min-w-[12px]" />
                <span>+91 98765 43210</span>
              </li>

              <li className="flex items-start gap-2 break-words">
                <FaMapMarkerAlt className="text-[#d4af37] mt-[3px] min-w-[12px]" />
                <span>Mumbai, India</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-2 mt-3">
              <a className="p-1.5 rounded-md bg-white/10 hover:bg-[#d4af37] hover:text-black transition cursor-pointer">
                <FaLinkedin size={12} />
              </a>

              <a className="p-1.5 rounded-md bg-white/10 hover:bg-[#d4af37] hover:text-black transition cursor-pointer">
                <FaTwitter size={12} />
              </a>

              <a className="p-1.5 rounded-md bg-white/10 hover:bg-[#d4af37] hover:text-black transition cursor-pointer">
                <FaInstagram size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] md:text-sm">
          <p className="text-gray-300 text-center md:text-left">
            © {new Date().getFullYear()} PivotEdge. All rights reserved.
          </p>

          <div className="flex gap-4">
            <span className="hover:text-[#d4af37] cursor-pointer">
              <Link to="/policies">Privacy Policy</Link>
            </span>

            <span className="hover:text-[#d4af37] cursor-pointer">
              <Link to="/terms">Terms & Conditions</Link>
            </span>
            <span className="hover:text-[#d4af37] cursor-pointer">
              <Link to="/disclaimer">Disclaimer</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
