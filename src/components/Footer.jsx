// Footer.jsx
import React from "react";
import logo from "../assets/images/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

        {/* Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img
            src={logo}
            alt="Company Logo"
            className="h-14 md:h-20 w-auto brightness-125 contrast-125 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          />
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-auto grid grid-cols-3 gap-6 text-center md:text-left">

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white transition cursor-pointer">About</li>
              <li className="hover:text-white transition cursor-pointer">Careers</li>
              <li className="hover:text-white transition cursor-pointer">Insights</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white transition cursor-pointer">Executive Search</li>
              <li className="hover:text-white transition cursor-pointer">Leadership Consulting</li>
              <li className="hover:text-white transition cursor-pointer">Diversity & Inclusion</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-white transition cursor-pointer">Consent</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-white/10 pt-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CompanyName. All rights reserved.
          </p>

          <div className="flex gap-4 text-gray-400 text-sm">
            <span className="hover:text-white cursor-pointer transition">LinkedIn</span>
            <span className="hover:text-white cursor-pointer transition">Twitter</span>
            <span className="hover:text-white cursor-pointer transition">Instagram</span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;