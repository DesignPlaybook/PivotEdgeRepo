import { useEffect, useState } from "react";
import logo from "../assets/images/logo1.png";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
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
      className={`sticky top-0 z-50 w-full
        transition-all duration-700 ease-out
        bg-white/90 backdrop-blur-lg shadow-sm border-b border-black/5
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
      `}
    >
      {/* Gold Accent Line — always visible */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-brand-gold opacity-100" />

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Company logo"
            className="h-12 scale-100 transition-all duration-500"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-14 text-[15.5px] font-medium tracking-wide text-brand-charcoal">
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
                    after:h-[2px] after:bg-brand-teal after:transition-all after:duration-300
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
          className="md:hidden text-3xl text-brand-charcoal transition-colors duration-300"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-out bg-white
          ${menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col gap-6 px-6 py-8 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block text-brand-charcoal transition-all duration-300 hover:translate-x-1"
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

// import { useEffect, useState } from "react";
// import logo from "../assets/images/logo1.png";
// import pivotIcon from "../assets/images/logo_icon.png";
// import { Link, useLocation } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi";
// import PivotEdgeLogo from "./PivotEdgeLogo/PivotEdgeLogo";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setMounted(true);
//     const handleScroll = () => setScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Domains", path: "/domains" },
//     { name: "Insights", path: "/insights" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50
//         transition-all duration-700 ease-out
//         ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
//       `}
//     >
//       {/*
//         ── GRADIENT VEIL ──────────────────────────────────────────────────────
//         At rest: a dark scrim fades top-to-bottom, giving the logo and white
//         links a natural dark surface without any visible "bar" shape.
//         On scroll: crossfades to a crisp white/95 surface with gold accent.
//         ────────────────────────────────────────────────────────────────────── */}

//       {/* At-rest gradient layer — fades out when scrolled */}
//       <div
//         className={`absolute inset-0 transition-opacity duration-700
//           ${scrolled ? "opacity-0" : "opacity-100"}
//         `}
//         style={{
//           background:
//             "linear-gradient(to bottom, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.28) 70%, rgba(255, 255, 255, 0.08) 100%)",
//         }}
//       />

//       {/* Scrolled solid layer — fades in when scrolled */}
//       <div
//         className={`absolute inset-0 transition-opacity duration-700
//           bg-white/95 backdrop-blur-lg shadow-sm
//           ${scrolled ? "opacity-100" : "opacity-0"}
//         `}
//       />

//       {/* Gold accent line — only when scrolled */}
//       <div
//         className={`absolute bottom-0 left-0 h-[2px] bg-brand-gold
//           transition-all duration-700
//           ${scrolled ? "w-full opacity-100" : "w-0 opacity-0"}
//         `}
//       />

//       {/* ── NAV CONTENT (sits above the background layers) ── */}
//       <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
//         {/* Logo — always visible, dark background blends into the veil */}
//         {/* <Link to="/" className="flex items-center">
//           <img
//             src={logo}
//             alt="PivotEdge Partners"
//             className={`transition-all duration-500
//               ${scrolled ? "h-12" : "h-16"}
//             `}
//           />
//         </Link> */}
//         <Link to="/" className="flex flex-col items-start leading-none">
//           {/* Top Row */}
//           <div className="flex items-center gap-3">
//             <img
//               src={pivotIcon}
//               alt="PivotEdge Partners"
//               className="h-12 w-auto"
//             />

//             <PivotEdgeLogo size="md" />
//           </div>

//           {/* Full-width tagline */}
//           <div
//             className="w-full text-center uppercase pl-[2px]"
//             style={{
//               fontFamily:
//                 "'Cormorant SC', 'Cormorant Garamond', Georgia, serif",
//               color: "#C9A23F",
//               fontSize: "7.5px",
//               letterSpacing: "0.38em",
//               lineHeight: 1,
//               marginTop: "4px",
//             }}
//           >
//             ADVANTAGE STARTS HERE
//           </div>
//         </Link>

//         {/* Desktop Menu */}
//         <ul
//           className={`hidden md:flex gap-14 text-[15.5px] font-medium tracking-wide transition-colors duration-500
//             ${scrolled ? "text-brand-charcoal" : "text-white"}
//           `}
//         >
//           {navItems.map((item, index) => {
//             const isActive = location.pathname === item.path;
//             return (
//               <li
//                 key={item.name}
//                 className={`relative transition-all duration-700
//                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
//                 `}
//                 style={{ transitionDelay: `${300 + index * 120}ms` }}
//               >
//                 <Link
//                   to={item.path}
//                   className={`
//                     relative inline-block
//                     transition-all duration-300
//                     hover:-translate-y-[1px]
//                     after:absolute after:left-0 after:-bottom-1.5
//                     after:h-[2px] after:transition-all after:duration-300
//                     ${scrolled ? "after:bg-brand-teal" : "after:bg-brand-gold"}
//                     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
//                   `}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className={`md:hidden text-3xl transition-colors duration-300
//             ${scrolled ? "text-brand-charcoal" : "text-white"}
//           `}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <HiX /> : <HiMenu />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       <div
//         className={`relative md:hidden overflow-hidden transition-all duration-700 ease-out
//           ${menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
//           ${scrolled ? "bg-white" : "bg-black/90 backdrop-blur-xl"}
//         `}
//       >
//         <ul className="flex flex-col gap-6 px-6 py-8 text-lg font-medium">
//           {navItems.map((item) => (
//             <li key={item.name}>
//               <Link
//                 to={item.path}
//                 onClick={() => setMenuOpen(false)}
//                 className={`block transition-all duration-300 hover:translate-x-1
//                   ${scrolled ? "text-brand-charcoal" : "text-white"}
//                 `}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
