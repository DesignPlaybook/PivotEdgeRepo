// Footer.jsx
import React from "react";
import logo from '../assets/images/logo1.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-16 md:h-20 w-auto brightness-125 contrast-125 drop-shadow-lg" 
          />
        </div>

        {/* Quick Links */}
        <div className="flex gap-10">
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Insights</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>Executive Search</li>
              <li>Leadership Consulting</li>
              <li>Diversity & Inclusion</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Consent</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CompanyName. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;