import React from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./ContactMap.css";
import { useState } from "react";

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
  const [showConsent, setShowConsent] = useState(false);
  const [accepted, setAccepted] = useState(false);

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
            <motion.div
              variants={fadeUp}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* CONTACT INFO */}
              <div className="space-y-8">
                <h2 className="text-3xl text-[#C6A437] font-light tracking-wide">
                  Contact Information
                </h2>

                <div className="space-y-6 text-white/75 text-lg">
                  <div>
                    <p className="text-white font-medium">Email:</p>
                    <p className="mt-1">Info@pivotedgegroup.com</p>
                  </div>

                  <div>
                    <p className="text-white font-medium">Phone:</p>
                    <p className="mt-1">+91 12356</p>
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
              </div>

              {/* SMALL ELONGATED MAP */}
              <div
                className="relative h-[420px] rounded-2xl overflow-hidden 
      border border-[#C6A437]/60 
      shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              >
                <MapContainer
                  center={position}
                  zoom={12}
                  scrollWheelZoom={false}
                  className="h-full w-full grayscale brightness-150 contrast-100 hue-rotate-[150deg] [&_.leaflet-control-attribution]:hidden"
                >
                  <TileLayer
                    attribution=""
                    url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
                  />
                  <Marker position={position} icon={goldIcon}>
                    <Tooltip
                      permanent
                      direction="top"
                      offset={[0, -10]}
                      opacity={1}
                      className="bg-white text-black px-4 py-2 rounded-full shadow-xl"
                    >
                      Pune Office
                    </Tooltip>
                  </Marker>
                </MapContainer>

                {/* GOLD GLOW EDGE */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none 
        border border-[#C6A437]/40"
                ></div>
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

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowConsent(true);
                }}
              >
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
      {showConsent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-[#0B2C36] to-[#071E26] 
                 border border-[#C6A437]/60 
                 rounded-3xl p-10 max-w-2xl w-full 
                 shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
          >
            <h3 className="text-2xl text-[#C6A437] mb-6 font-light">
              Data & Confidentiality Notice
            </h3>

            <div className="text-white/70 space-y-4 text-sm leading-relaxed">
              <p>By submitting this inquiry, you acknowledge and agree that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Your personal information will be processed in accordance with
                  our Privacy Policy.
                </li>
                <li>
                  Information shared may be retained for communication and
                  advisory purposes.
                </li>
                <li>
                  Submission does not constitute an employment guarantee or
                  formal engagement.
                </li>
                <li>
                  Executive and client data is handled under strict
                  confidentiality standards.
                </li>
              </ul>
            </div>

            <div className="mt-6 flex items-center space-x-3">
              <input
                type="checkbox"
                checked={accepted}
                onChange={() => setAccepted(!accepted)}
                className="w-4 h-4 accent-[#C6A437]"
              />
              <label className="text-white/80 text-sm">
                I agree to the Privacy Policy and Terms & Conditions.
              </label>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <button
                onClick={() => setShowConsent(false)}
                className="px-6 py-3 rounded-xl border border-white/20 text-white/70"
              >
                Cancel
              </button>

              <button
                disabled={!accepted}
                onClick={() => {
                  if (accepted) {
                    setShowConsent(false);
                    alert("Form submitted successfully.");
                  }
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all
            ${
              accepted
                ? "bg-gradient-to-r from-[#C6A437] to-[#E5C76B] text-black"
                : "bg-gray-500 text-white cursor-not-allowed"
            }`}
              >
                Accept & Submit
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactPage;
