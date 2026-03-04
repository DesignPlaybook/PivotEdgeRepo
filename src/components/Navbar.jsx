import { useEffect, useState } from "react";
import logo from "../assets/images/logo1.png";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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
        transition-all duration-700 ease-out
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-black/5"
            : "bg-transparent"
        }
      `}
    >
      {/* Gold Accent Line */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-brand-gold
          transition-all duration-700
          ${scrolled ? "w-full opacity-100" : "w-0 opacity-0"}
        `}
      />

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Company logo"
            className={`transition-all duration-500
              ${
                scrolled
                  ? "h-12 scale-100 brightness-100"
                  : "h-16 scale-[1.05] brightness-150 drop-shadow-[0_8px_22px_rgba(0,0,0,0.4)]"
              }
            `}
          />
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex gap-14 text-[15.5px] font-medium tracking-wide
            ${scrolled ? "text-brand-charcoal" : "text-white"}
          `}
        >
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <li
                key={item.name}
                className={`relative transition-all duration-700
                  ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                `}
                style={{ transitionDelay: `${300 + index * 120}ms` }}
              >
                <Link
                  to={item.path}
                  className={`
                    relative inline-block
                    transition-all duration-300
                    hover:-translate-y-[1px]
                    after:absolute after:left-0 after:-bottom-1.5
                    after:h-[2px] after:transition-all after:duration-300
                    ${
                      scrolled
                        ? "after:bg-brand-teal"
                        : "after:bg-white"
                    }
                    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  `}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-3xl transition-colors duration-300
            ${scrolled ? "text-brand-charcoal" : "text-white"}
          `}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-out
          ${menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
          ${
            scrolled
              ? "bg-white"
              : "bg-black/90 backdrop-blur-xl"
          }
        `}
      >
        <ul className="flex flex-col gap-6 px-6 py-8 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block transition-all duration-300
                  hover:translate-x-1
                  ${
                    scrolled
                      ? "text-brand-charcoal"
                      : "text-white"
                  }
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