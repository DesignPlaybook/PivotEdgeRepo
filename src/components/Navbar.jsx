import { useEffect, useState } from "react";
import logo from "../assets/images/logo1.png";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Domains", path: "/domains" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50
        transition-all duration-[2000ms] ease-out
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Company logo"
            className={`transition-all duration-300
              ${
                scrolled
                  ? "h-12 brightness-100 contrast-110"
                  : "h-16 brightness-150 contrast-150 drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]"
              }
            `}
          />
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex gap-14 text-[15.5px] font-medium tracking-wide
            ${scrolled ? "text-gray-700" : "text-white"}
          `}
        >
          {navItems.map((item, index) => (
            <li
              key={item.name}
              className={`relative cursor-pointer transition-all duration-[1800ms]
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <Link
                to={item.path}
                className={`after:absolute after:left-0 after:-bottom-1.5
                  after:h-[2px] after:w-0 after:transition-all after:duration-300
                  ${scrolled ? "after:bg-gray-700" : "after:bg-white"}
                  hover:after:w-full
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-3xl transition-colors duration-300
            ${scrolled ? "text-gray-800" : "text-white"}
          `}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-[1200ms] ease-out
          ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          ${scrolled ? "bg-white" : "bg-black/90"}
        `}
      >
        <ul className="flex flex-col gap-6 px-6 py-8 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block transition-colors
                  ${scrolled ? "text-gray-800" : "text-white"}
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;