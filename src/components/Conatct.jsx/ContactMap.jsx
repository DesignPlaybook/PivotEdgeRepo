import React from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ContactPage = () => {
  const position = [18.5204, 73.8567];

  const goldIcon = new L.DivIcon({
    className: "",
    html: `
      <div class="relative flex items-center justify-center">
        <span class="absolute inline-flex h-12 w-12 rounded-full bg-[#C6A437] opacity-30 animate-ping"></span>
        <span class="relative inline-flex rounded-full h-4 w-4 bg-[#C6A437] shadow-lg"></span>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  return (
    <div className="min-h-screen bg-[#071E26] text-white overflow-hidden relative">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1B6F7A]/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C6A437]/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-28"
        >
          <h1 className="text-5xl font-light tracking-wide mb-6">
            Connect With <span className="text-[#C6A437]">PivotEdge</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Strategic HR partnerships across borders. Advantage begins here.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-20 items-start"
        >
          {/* LEFT SIDE */}
          <div className="space-y-20 relative">
            <motion.div variants={fadeUp} className="space-y-8">
              <h2 className="text-3xl text-[#C6A437] font-light tracking-wide">
                Contact Information
              </h2>

              <div className="space-y-6 text-white/75 text-lg">
                <div>
                  <p className="text-white font-medium">Email:</p>
                  <p className="mt-1">connect@pivotedgepartners.com</p>
                </div>

                <div>
                  <p className="text-white font-medium">Phone:</p>
                  <p className="mt-1">+91 98765 43210</p>
                </div>

                <div>
                  <p className="text-white font-medium">Office:</p>
                  <p className="mt-1">Pune, Maharashtra, India</p>
                </div>

                <div>
                  <p className="text-white font-medium">Business Hours:</p>
                  <p className="mt-1">Mon – Fri : 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </motion.div>

            {/* Global Reach */}
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl text-[#C6A437] font-light tracking-wide mb-10">
                Global Reach
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  { number: "18+", label: "Countries" },
                  { number: "120+", label: "Enterprise Clients" },
                  { number: "40K+", label: "Workforce Impacted" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/[0.04] backdrop-blur-xl p-10 rounded-3xl border border-white/10 text-center"
                  >
                    <p className="text-4xl font-light text-[#C6A437]">
                      {item.number}
                    </p>
                    <p className="text-white/60 mt-3 text-sm tracking-wide">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE – FORM PANEL */}
          <motion.div variants={fadeUp} className="relative">
            <div
              className="relative bg-gradient-to-br from-[#0B2C36] to-[#071E26] 
                    border border-[#C6A437]/60 rounded-3xl 
                    p-12 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            >
              <h2 className="text-3xl text-center text-white mb-10 font-light">
                Send us a Message
              </h2>

              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-[#C6A437]/60 
                     rounded-xl px-5 py-4 text-white 
                     placeholder-white/50 focus:outline-none 
                     focus:border-[#C6A437]"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border border-[#C6A437]/60 
                     rounded-xl px-5 py-4 text-white 
                     placeholder-white/50 focus:outline-none 
                     focus:border-[#C6A437]"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-transparent border border-[#C6A437]/60 
                     rounded-xl px-5 py-4 text-white 
                     placeholder-white/50 focus:outline-none 
                     focus:border-[#C6A437]"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full bg-transparent border border-[#C6A437]/60 
                     rounded-xl px-5 py-4 text-white 
                     placeholder-white/50 focus:outline-none 
                     focus:border-[#C6A437]"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#C6A437] to-[#E5C76B] 
                     text-black font-semibold tracking-wide 
                     py-4 rounded-xl 
                     hover:scale-[1.02] transition-all duration-300"
                >
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;

// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Mail, Phone, MapPin, Globe, Users, Trophy, Linkedin, Twitter } from 'lucide-react';
// import 'leaflet/dist/leaflet.css';

// // Fix for default leaflet marker icons in React
// import L from 'leaflet';
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';
// let DefaultIcon = L.icon({ iconUrl: markerIcon, shadowUrl: markerShadow, iconAnchor: [12, 41] });
// L.Marker.prototype.options.icon = DefaultIcon;

// const ContactPage = () => {
//   const position = [19.0178, 73.0423]; // Approx coordinates for Belapur CBD

//   return (
//     <div className="min-h-screen bg-[#003d3d] font-sans flex flex-col">
//       {/* Header / Nav Area */}
//       <header className="bg-white py-4 px-12 flex justify-between items-center border-b-4 border-[#c19a3b]">
//         <div className="flex items-center gap-2">
//           <div className="w-10 h-10 bg-[#003d3d] rounded-tl-full rounded-br-full border-r-4 border-[#c19a3b]"></div>
//           <div>
//             <h1 className="text-[#003d3d] font-bold text-2xl tracking-tight leading-none">PivotEdge</h1>
//             <p className="text-[#c19a3b] text-[10px] font-bold tracking-[0.2em]">PARTNERS</p>
//             <p className="text-[#003d3d] text-[8px] font-medium italic">ADVANTAGE STARTS HERE</p>
//           </div>
//         </div>
//       </header>

//       {/* Hero Banner */}
//       <section className="relative bg-[#003d3d] py-12 text-center overflow-hidden">
//         {/* Decorative Grid Lines */}
//         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
//            <svg width="100%" height="100%"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>
//         </div>

//         <h2 className="text-white text-4xl font-bold tracking-widest relative z-10 mb-6 uppercase">
//           Executive Dialogue Starts Here
//         </h2>
//         <button className="bg-[#c19a3b] text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-[#a38232] transition-colors relative z-10">
//           <span className="bg-white/20 p-1 rounded-full"><Mail size={16} /></span>
//           CHAT WITH AN ADVISOR
//         </button>
//       </section>

//       {/* Main Content Area */}
//       <main className="flex-grow bg-white grid grid-cols-1 lg:grid-cols-12 relative">

//         {/* Map Section (6 columns) */}
//         <div className="lg:col-span-7 h-[500px] lg:h-auto relative">
//           <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }} zoomControl={true}>
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             <Marker position={position}>
//               <Popup>PivotEdge Partners - Navi Mumbai</Popup>
//             </Marker>
//           </MapContainer>

//           {/* Info Overlay Box */}
//           <div className="absolute top-8 right-8 z-[1000] bg-[#003d3d] text-white p-6 rounded-md shadow-2xl max-w-xs border-l-4 border-[#c19a3b]">
//             <h3 className="font-bold mb-4 tracking-wider text-sm uppercase">Our Hub in Navi Mumbai, India</h3>
//             <div className="space-y-3 text-xs">
//               <div className="flex gap-3">
//                 <MapPin size={16} className="text-[#c19a3b] shrink-0" />
//                 <p>PIVOTEDGE PARTNERS<br/>REGIONAL OFFICE,<br/>SEC-15, BELAPUR CBD,<br/>NAVI MUMBAI</p>
//               </div>
//               <div className="flex gap-3">
//                 <Phone size={16} className="text-[#c19a3b]" />
//                 <p>+91 (Contact Number)</p>
//               </div>
//               <div className="flex gap-3">
//                 <Mail size={16} className="text-[#c19a3b]" />
//                 <p>info@pivotedge.com</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form and Stats Section (5 columns) */}
//         <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 h-full">

//           {/* Inquiry Form */}
//           <div className="p-10 border-r border-gray-100">
//             <h3 className="text-[#003d3d] font-bold text-xl mb-6 tracking-wider uppercase">Executive Inquiry</h3>
//             <form className="space-y-4">
//               <div>
//                 <label className="text-xs font-bold text-gray-500 uppercase">Name</label>
//                 <input type="text" className="w-full border-2 border-gray-200 p-2 rounded focus:border-[#c19a3b] outline-none" />
//               </div>
//               <div>
//                 <label className="text-xs font-bold text-gray-500 uppercase">Corporate Email</label>
//                 <input type="email" className="w-full border-2 border-gray-200 p-2 rounded focus:border-[#c19a3b] outline-none" />
//               </div>
//               <div>
//                 <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
//                 <textarea rows="4" className="w-full border-2 border-gray-200 p-2 rounded focus:border-[#c19a3b] outline-none resize-none"></textarea>
//               </div>
//               <button className="w-full bg-[#003d3d] text-white font-bold py-3 rounded-md hover:bg-[#002a2a] transition-all uppercase tracking-widest border-b-4 border-[#c19a3b]">
//                 Send
//               </button>
//             </form>
//           </div>

//           {/* Sidebar Stats */}
//           <div className="bg-[#003d3d] p-8 flex flex-col gap-4">
//             <h3 className="text-white font-bold text-sm tracking-widest mb-2">GLOBAL REACH</h3>

//             <div className="bg-[#c19a3b] p-4 rounded-md flex items-center gap-4 text-white">
//               <Globe size={32} />
//               <div>
//                 <p className="font-bold text-lg leading-tight">BUSINESS IN 24+</p>
//                 <p className="text-[10px] tracking-widest opacity-80 uppercase">Countries</p>
//               </div>
//             </div>

//             <div className="bg-[#c19a3b] p-4 rounded-md flex items-center gap-4 text-white">
//               <Users size={32} />
//               <div>
//                 <p className="font-bold text-lg leading-tight">GLOBAL CANDIDATE</p>
//                 <p className="text-[10px] tracking-widest opacity-80 uppercase">Pool</p>
//               </div>
//             </div>

//             <div className="bg-[#c19a3b] p-4 rounded-md flex items-center gap-4 text-white">
//               <Trophy size={32} />
//               <div>
//                 <p className="font-bold text-lg leading-tight">SUCCESSFUL</p>
//                 <p className="text-[10px] tracking-widest opacity-80 uppercase">Placements</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-[#003d3d] border-t border-white/10 py-4 px-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/70 uppercase tracking-widest">
//         <p>© 2024 PIVOTEDGE PARTNERS. ALL RIGHTS RESERVED.</p>
//         <div className="flex gap-6 mt-4 md:mt-0">
//           <Linkedin size={16} className="cursor-pointer hover:text-white" />
//           <Twitter size={16} className="cursor-pointer hover:text-white" />
//           <Mail size={16} className="cursor-pointer hover:text-white" />
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ContactPage;

// ___________________________________________________________________

// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import "./ContactMap.css";

// const position = [19.033, 73.0297];

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//   iconUrl:
//     "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   shadowUrl:
//     "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
// });

// export default function ContactMap() {
//   return (
//     <div className="page-wrapper">

//       {/* GOLD FRAME TOP */}
//       <div className="gold-bar"></div>

//       {/* HEADER */}
//       <header className="header">
//         <div className="logo">
//           <h1>PivotEdge <span>Partners</span></h1>
//           <p>ADVANTAGE STARTS HERE</p>
//         </div>
//       </header>

//       {/* HERO */}
//       <section className="hero">
//         <div className="hero-content">
//           <h2>EXECUTIVE DIALOGUE STARTS HERE</h2>
//           <button className="advisor-btn">
//             💬 CHAT WITH AN ADVISOR
//           </button>
//         </div>
//       </section>

//       {/* MAIN CONTENT */}
//       <section className="main-content">

//         {/* LEFT MAP */}
//         <div className="map-area">
//           <MapContainer center={position} zoom={11} className="map">
//             <TileLayer
//               attribution="&copy; OpenStreetMap contributors"
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker position={position} />
//           </MapContainer>

//           {/* FLOATING HUB CARD */}
//           <div className="hub-card">
//             <h3>OUR HUB IN NAVI MUMBAI, INDIA</h3>
//             <p>
//               PivotEdge Partners Regional Office<br />
//               SEC-15, Belapur CBD,<br />
//               Navi Mumbai
//             </p>
//           </div>
//         </div>

//         {/* FORM */}
//         <div className="form-card">
//           <h3>EXECUTIVE INQUIRY</h3>
//           <form>
//             <label>Name</label>
//             <input type="text" />

//             <label>Corporate Email</label>
//             <input type="email" />

//             <label>Message</label>
//             <textarea rows="4"></textarea>

//             <button type="submit">SEND</button>
//           </form>
//         </div>

//         {/* GLOBAL PANEL */}
//         <div className="global-panel">
//           <h3>GLOBAL REACH</h3>

//           <div className="stat-box">
//             <span>BUSINESS IN</span>
//             <strong>24+ COUNTRIES</strong>
//           </div>

//           <div className="stat-box">
//             <span>GLOBAL CANDIDATE POOL</span>
//           </div>

//           <div className="stat-box">
//             <span>SUCCESSFUL PLACEMENTS</span>
//           </div>
//         </div>

//       </section>

//       {/* FOOTER */}
//       <footer className="footer">
//         © 2024 PIVOTEDGE PARTNERS. ALL RIGHTS RESERVED.
//       </footer>

//       <div className="gold-bar"></div>
//     </div>
//   );
// }
