import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import bg from "../../assets/images/bg.webp";
import { Link } from "react-router-dom";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const C = {
  bg: "#F4F1EA",
  bgAlt: "#EAE6DC",
  teal: "#0F4C5C",
  tealDark: "#123845",
  gold: "#C9A23F",
  muted: "#5b6f77",
  border: "#e6dcc6",
};

// ─── Geometric decoration (shared with other pages) ───────────────────────────
const GeometricAccent = ({ opacity = 0.2, color = "#C9A23F" }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    className="w-full h-full"
    style={{ opacity }}
  >
    <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="0.5" />
    <circle
      cx="100"
      cy="100"
      r="70"
      stroke={color}
      strokeWidth="0.3"
      strokeDasharray="4 6"
    />
    <circle cx="100" cy="100" r="50" stroke={color} strokeWidth="0.8" />
    <line
      x1="100"
      y1="10"
      x2="100"
      y2="190"
      stroke={color}
      strokeWidth="0.4"
      strokeDasharray="2 8"
    />
    <line
      x1="10"
      y1="100"
      x2="190"
      y2="100"
      stroke={color}
      strokeWidth="0.4"
      strokeDasharray="2 8"
    />
    <polygon
      points="100,60 122,86 100,112 78,86"
      stroke={color}
      strokeWidth="0.8"
      fill="none"
    />
    <circle cx="100" cy="100" r="5" fill={color} />
    <circle cx="100" cy="10" r="2.5" fill={color} opacity="0.6" />
    <circle cx="190" cy="100" r="2.5" fill={color} opacity="0.6" />
    <circle cx="10" cy="100" r="2.5" fill={color} opacity="0.6" />
    <circle cx="100" cy="190" r="2.5" fill={color} opacity="0.6" />
  </svg>
);

// ─── Small contact-specific SVG icons ─────────────────────────────────────────
const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="#C9A23F"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);
const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="#C9A23F"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 11.5 19.79 19.79 0 0 1 1.07 3 2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
);

// ─── Floating field component ─────────────────────────────────────────────────
const Field = ({ label, error, children, span2 = false }) => (
  <div className={`flex flex-col gap-1.5 ${span2 ? "md:col-span-2" : ""}`}>
    <label className="text-[#0F4C5C] text-[0.8rem] tracking-[0.18em] uppercase font-medium">
      {label}
    </label>
    {children}
    {error && <p className="text-red-400 text-[0.72rem] mt-0.5">{error}</p>}
  </div>
);

const inputCls = `
  w-full bg-transparent border-b border-[#C9A23F]/30 py-3 px-0
  text-[#0F4C5C] text-sm font-light placeholder-[#5b6f77]/50
  focus:outline-none focus:border-[#C9A23F] transition-colors duration-300
  appearance-none
`;

// ─── Main Contact Page ────────────────────────────────────────────────────────
const ContactPage = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);
  const inView = useInView(formRef, { once: true, margin: "-60px" });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email required";
    if (!formData.phone.match(/^[0-9+\-\s]{7,15}$/))
      newErrors.phone = "Valid phone required";
    if (!formData.message.trim()) newErrors.message = "Message required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) setShowConsent(true);
  };

  const handleConfirm = () => {
    if (!accepted) return;
    setShowConsent(false);

    const url =
      `https://docs.google.com/forms/d/e/1FAIpQLSeXJvdv1X5wQV5OB_I4pdIhrBr424TlriUjPucIAFWJEmP5aA/formResponse?` +
      `entry.1691488305=${encodeURIComponent(formData.firstName)}` +
      `&entry.469759994=${encodeURIComponent(formData.lastName)}` +
      `&entry.1790880522=${encodeURIComponent(formData.company)}` +
      `&entry.1970432674=${encodeURIComponent(formData.jobTitle)}` +
      `&entry.918071452=${encodeURIComponent(formData.email)}` +
      `&entry.584228645=${encodeURIComponent(formData.phone)}` +
      `&entry.902959798=${encodeURIComponent(formData.country)}` +
      `&entry.1728949981=${encodeURIComponent(formData.message)}`;

    fetch(url, { method: "POST", mode: "no-cors" });

    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      jobTitle: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    });
    setAccepted(false);
    setShowSuccess(true);
  };

  const mapPosition = [18.5204, 73.8567];

  const goldIcon = new L.DivIcon({
    className: "",
    html: `<div style="position:relative;display:flex;align-items:center;justify-content:center;width:40px;height:40px">
      <span style="position:absolute;width:40px;height:40px;border-radius:50%;background:#C9A23F;opacity:0.25;animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite"></span>
      <span style="position:relative;width:14px;height:14px;border-radius:50%;background:#C9A23F;box-shadow:0 0 12px rgba(201,162,63,0.6)"></span>
    </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  const contactDetails = [
    { Icon: MailIcon, label: "Email", value: "info@pivotedgegroup.com" },
    { Icon: PhoneIcon, label: "Phone", value: "+91 1234567890" },
  ];

  return (
    <div
      className="min-h-screen bg-[#F4F1EA] text-[#0F4C5C] overflow-hidden"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }
        .leaflet-tooltip-gold {
          background: white !important;
          border: 1px solid rgba(201,162,63,0.4) !important;
          border-radius: 6px !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important;
          padding: 5px 10px !important;
          color: #0F4C5C !important;
        }
        .leaflet-tooltip-gold::before {
          border-top-color: rgba(201,162,63,0.4) !important;
        }
        .leaflet-control-zoom { display: none !important; }
      `}</style>
      {/* ══════════ BODY — Split screen ══════════ */}
      <section id="contact-body" className="relative">
        <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A23F] to-transparent opacity-60" />

        <div className="grid lg:grid-cols-[480px_1fr] min-h-screen">
          {/* ── LEFT PANEL — Dark editorial ── */}
          <div className="bg-[#123845] relative overflow-hidden flex flex-col justify-between px-12 py-20">
            {/* Background textures */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px),repeating-linear-gradient(0deg,#C9A23F,#C9A23F 1px,transparent 1px,transparent 80px)",
              }}
            />

            {/* Large geometric watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-[0.06] pointer-events-none">
              <GeometricAccent color="#C9A23F" opacity={1} />
            </div>

            {/* Small corner accent */}
            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-[0.08] pointer-events-none">
              <GeometricAccent color="#C9A23F" opacity={1} />
            </div>

            {/* Top — label + heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-[1px] bg-[#C9A23F]" />
                <span className="text-[#C9A23F] text-[0.68rem] tracking-[0.3em] uppercase font-medium">
                  Begin a Conversation
                </span>
                <div className="w-6 h-[1px] bg-[#C9A23F]" />
              </div>

              <h2
                className="text-white font-light leading-[1.1] mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
                }}
              >
                Every great partnership begins with a{" "}
                <span className="text-[#C9A23F] italic font-semibold">
                  single conversation.
                </span>
              </h2>

              <div className="w-14 h-[2px] bg-[#C9A23F] mb-8" />

              <p className="text-gray-400 text-sm leading-[1.9] font-light max-w-sm">
                Whether you are a Board seeking your next Chief Executive, or an
                executive ready for their next mandate — we are here to listen,
                advise, and act.
              </p>
            </motion.div>

            {/* Middle — contact details + map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="relative z-10 my-10 flex flex-col gap-8"
            >
              {/* Email + Phone — horizontal row */}
              <div className="flex flex-col gap-5">
                {contactDetails.map(({ Icon, label, value }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.6 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg border border-[#C9A23F]/20 bg-[#C9A23F]/5 group-hover:border-[#C9A23F]/50 group-hover:bg-[#C9A23F]/10 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-[#C9A23F] text-[0.65rem] tracking-[0.2em] uppercase font-medium mb-0.5">
                        {label}
                      </p>
                      <p className="text-gray-200 text-sm font-light">
                        {value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map — styled dark theme */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.7 }}
                className="relative rounded-xl overflow-hidden"
                style={{ height: 220 }}
              >
                {/* Gold border frame */}
                <div className="absolute inset-0 rounded-xl border border-[#C9A23F]/25 z-10 pointer-events-none" />
                {/* Top label overlay */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-[#123845]/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#C9A23F]/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A23F] animate-pulse" />
                  <span className="text-[#C9A23F] text-[0.62rem] tracking-[0.2em] uppercase font-medium">
                    Pune, India
                  </span>
                </div>

                <MapContainer
                  center={mapPosition}
                  zoom={13}
                  scrollWheelZoom={false}
                  zoomControl={false}
                  attributionControl={false}
                  className="h-full w-full"
                  style={{
                    filter:
                      "saturate(0.3) brightness(0.6) contrast(1.1) sepia(0.2)",
                  }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={mapPosition} icon={goldIcon}>
                    <Tooltip
                      permanent
                      direction="top"
                      offset={[0, -14]}
                      className="leaflet-tooltip-gold"
                    >
                      <span
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "11px",
                          color: "#0F4C5C",
                          fontWeight: 500,
                          letterSpacing: "0.05em",
                        }}
                      >
                        PivotEdge Partners
                      </span>
                    </Tooltip>
                  </Marker>
                </MapContainer>
              </motion.div>
            </motion.div>

            {/* Bottom — quote strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="relative z-10 border-t border-[#C9A23F]/15 pt-8"
            >
              <div className="flex items-start gap-3">
                <span
                  className="text-[#C9A23F]/30 text-5xl font-light leading-none mt-[-8px] flex-shrink-0"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "
                </span>
                <p
                  className="text-gray-400 text-sm italic leading-relaxed font-light"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1rem",
                  }}
                >
                  We operate with integrity, confidentiality, and professional
                  discipline — always.
                </p>
              </div>
              <p className="text-[#C9A23F] text-[0.65rem] tracking-[0.2em] uppercase mt-4 font-medium">
                — PivotEdge Partners
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT PANEL — Floating form on cream ── */}
          <div className="bg-[#F4F1EA] relative overflow-hidden flex items-center justify-center px-8 py-20 lg:px-16">
            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#C9A23F0A,transparent_70%)]" />

            <div ref={formRef} className="w-full max-w-6xl relative z-10">
              {/* Form header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-[1px] bg-[#C9A23F]" />
                  <span className="text-[#C9A23F] text-[0.68rem] tracking-[0.3em] uppercase font-medium">
                    Inquiry Form
                  </span>
                  <div className="w-6 h-[1px] bg-[#C9A23F]" />
                </div>
                <h3
                  className="text-[#0F4C5C] font-light"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2.4rem",
                  }}
                >
                  Tell us about your{" "}
                  <span className="text-[#C9A23F] italic font-semibold">
                    requirement
                  </span>
                </h3>
                <div className="mt-4 w-10 h-[2px] bg-[#C9A23F]" />
              </motion.div>

              {/* Form — underline-only fields, no heavy boxes */}
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <Field label="First Name" error={errors.firstName}>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Your first name"
                    className={inputCls}
                  />
                </Field>

                <Field label="Last Name" error={errors.lastName}>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Your last name"
                    className={inputCls}
                  />
                </Field>

                <Field label="Company">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your organisation"
                    className={inputCls}
                  />
                </Field>

                <Field label="Job Title">
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Your role"
                    className={inputCls}
                  />
                </Field>

                <Field label="Email Address" error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={inputCls}
                  />
                </Field>

                <Field label="Phone Number" error={errors.phone}>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 …"
                    className={inputCls}
                  />
                </Field>

                <Field label="Country">
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Your country"
                    className={inputCls}
                  />
                </Field>

                {/* Spacer for grid alignment */}
                <div className="hidden md:block" />

                <Field
                  label="How can we help you?"
                  error={errors.message}
                  span2
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your mandate or requirement…"
                    className={`${inputCls} resize-none`}
                  />
                </Field>

                {/* Submit button */}
                <div className="md:col-span-2 mt-4">
                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    whileHover={{ gap: "14px" }}
                    className="group flex items-center gap-3 text-[#0F4C5C] font-medium text-sm tracking-[0.15em] uppercase cursor-pointer border-none bg-transparent p-0"
                  >
                    {/* Gold pill button */}
                    <span className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A23F] text-white text-sm tracking-widest uppercase font-medium hover:bg-[#b8912f] transition-colors duration-300 rounded-none">
                      Submit Inquiry
                      <ArrowIcon />
                    </span>
                  </motion.button>
                  <p className="text-[#5b6f77] text-xs mt-4 font-light tracking-wide">
                    Your information is handled with strict confidentiality.
                  </p>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CONSENT POPUP ══════════ */}
      {/* ══════════ CONSENT POPUP ══════════ */}
      {showConsent && (
        <div
          className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center px-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowConsent(false);
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-[#0F4C5C] px-8 py-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <GeometricAccent color="#C9A23F" opacity={1} />
              </div>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-5 h-[1px] bg-[#C9A23F]" />
                <span className="text-[#C9A23F] text-[0.65rem] tracking-[0.25em] uppercase font-medium">
                  Confidentiality Notice
                </span>
              </div>

              <h3
                className="text-white text-2xl font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Data & Privacy Consent
              </h3>
            </div>

            {/* Body */}
            <div className="px-8 py-8">
              <p className="text-[#5b6f77] text-sm leading-[1.9] font-light mb-5">
                By submitting this enquiry, you acknowledge that PivotEdge
                Partners will collect and process the personal information
                provided. Your data is handled with the highest standards of
                confidentiality and discretion, in full compliance with
                applicable data protection laws.
              </p>

              <p className="text-[#5b6f77] text-sm leading-[1.9] font-light mb-7">
                Your information will be used solely to respond to your enquiry
                and provide relevant leadership advisory services. We do not
                share, sell, or distribute your information to third parties
                without your consent, except where required by law. Please
                review our{" "}
                <Link
                  to="/policies"
                  className="text-[#0F4C5C] font-medium underline underline-offset-2"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  to="/terms"
                  className="text-[#0F4C5C] font-medium underline underline-offset-2"
                >
                  Terms & Conditions
                </Link>
                .
              </p>

              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group mb-8">
                <div className="relative mt-0.5 flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={() => setAccepted(!accepted)}
                    className="sr-only"
                  />

                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200
              ${
                accepted
                  ? "bg-[#C9A23F] border-[#C9A23F]"
                  : "border-[#C9A23F]/40 group-hover:border-[#C9A23F]"
              }`}
                  >
                    {accepted && (
                      <svg
                        viewBox="0 0 12 12"
                        width="10"
                        height="10"
                        fill="none"
                      >
                        <polyline
                          points="1,6 4,9 11,2"
                          stroke="white"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                <span className="text-sm text-[#5b6f77] leading-relaxed">
                  I confirm that I have read and understand PivotEdge Partners'
                  Privacy Policy and Terms & Conditions, and I consent to the
                  collection and processing of my information.
                </span>
              </label>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowConsent(false)}
                  className="px-5 py-2.5 text-sm text-[#5b6f77] hover:text-[#0F4C5C] transition-colors bg-transparent border-none cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  onClick={handleConfirm}
                  disabled={!accepted}
                  className={`px-7 py-3 text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300
            ${
              accepted
                ? "bg-[#C9A23F] text-white hover:bg-[#b8912f]"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
                >
                  Accept & Submit
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* ══════════ SUCCESS POPUP ══════════ */}
      {showSuccess && (
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden text-center"
          >
            {/* Gold top bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#C9A23F] via-[#e8c96a] to-[#C9A23F]" />
            <div className="px-10 py-12">
              {/* Checkmark */}
              <div className="w-16 h-16 rounded-full border-2 border-[#C9A23F]/30 flex items-center justify-center mx-auto mb-6">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="#C9A23F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20,6 9,17 4,12" />
                </svg>
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-6 h-[1px] bg-[#C9A23F]" />
                <span className="text-[#C9A23F] text-[0.65rem] tracking-[0.25em] uppercase font-medium">
                  Inquiry Received
                </span>
                <div className="w-6 h-[1px] bg-[#C9A23F]" />
              </div>
              <h3
                className="text-[#0F4C5C] text-2xl font-light mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Thank you for reaching out
              </h3>
              <p className="text-[#5b6f77] text-sm leading-[1.8] font-light mb-8">
                We have received your inquiry. One of our advisors will connect
                with you shortly in confidence.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="px-8 py-3 bg-[#0F4C5C] text-white text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#0a3848] transition-colors duration-300 cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;

// import React from "react";
// import { motion } from "framer-motion";
// import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import "./ContactMap.css";
// import { useState } from "react";
// import PageHero from "../PageHero/PageHero";

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.25 },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const ContactPage = () => {
//   const position = [18.5204, 73.8567];
//   const [showConsent, setShowConsent] = useState(false);
//   const [accepted, setAccepted] = useState(false);

//   const goldIcon = new L.DivIcon({
//     className: "",
//     html: `
//       <div class="relative flex items-center justify-center">
//         <span class="absolute inline-flex h-12 w-12 rounded-full bg-[#C9A23F] opacity-30 animate-ping"></span>
//         <span class="relative inline-flex rounded-full h-4 w-4 bg-[#C9A23F] shadow-lg"></span>
//       </div>
//     `,
//     iconSize: [40, 40],
//     iconAnchor: [20, 20],
//   });

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     company: "",
//     jobTitle: "",
//     email: "",
//     phone: "",
//     country: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validate = () => {
//     let newErrors = {};

//     if (!formData.firstName.trim())
//       newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
//       newErrors.email = "Valid email required";
//     if (!formData.phone.match(/^[0-9+\-\s]{7,15}$/))
//       newErrors.phone = "Valid phone required";
//     if (!formData.message.trim()) newErrors.message = "Message required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const [showSuccess, setShowSuccess] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#F4F1EA] text-[#0F4C5C] overflow-hidden relative">
//       {/* HERO */}
//       <PageHero
//         label="Get in Touch"
//         title="Connect with"
//         highlight="PivotEdge"
//         subtitle="Strategic partnerships begin with meaningful conversations."
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
//         {/* Header (kept same style, just colors fixed) */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="text-center mb-20"
//         ></motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid lg:grid-cols-2 gap-20 items-start"
//         >
//           {/* LEFT SIDE */}
//           <div className="space-y-20 relative">
//             <motion.div
//               variants={fadeUp}
//               className="grid lg:grid-cols-2 gap-12 items-start"
//             >
//               {/* CONTACT INFO */}
//               <div className="space-y-8">
//                 <h2 className="text-3xl text-[#C9A23F] font-light tracking-wide">
//                   Contact Information
//                 </h2>

//                 <div className="space-y-6 text-[#5b6f77] text-lg">
//                   <div>
//                     <p className="text-[#0F4C5C] font-medium">Email:</p>
//                     <p className="mt-1">info@pivotedgegroup.com</p>
//                   </div>

//                   <div>
//                     <p className="text-[#0F4C5C] font-medium">Phone:</p>
//                     <p className="mt-1">+91 1234567890</p>
//                   </div>

//                   <div>
//                     <p className="text-[#0F4C5C] font-medium">Office:</p>
//                     <p className="mt-1">Pune, Maharashtra, India</p>
//                   </div>

//                   <div>
//                     <p className="text-[#0F4C5C] font-medium">
//                       Business Hours:
//                     </p>
//                     <p className="mt-1">Mon – Fri : 9:00 AM – 6:00 PM</p>
//                   </div>
//                 </div>
//               </div>

//               {/* MAP */}
//               <div className="relative h-[420px] rounded-2xl overflow-hidden border border-[#e6dcc6] shadow-sm">
//                 <MapContainer
//                   center={position}
//                   zoom={12}
//                   scrollWheelZoom={false}
//                   className="h-full w-full [&_.leaflet-control-attribution]:hidden"
//                 >
//                   <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                   <Marker position={position} icon={goldIcon}>
//                     <Tooltip permanent direction="top" offset={[0, -10]}>
//                       Pune Office
//                     </Tooltip>
//                   </Marker>
//                 </MapContainer>
//               </div>
//             </motion.div>

//             {/* GLOBAL REACH */}
//             <motion.div variants={fadeUp}>
//               <h2 className="text-3xl text-[#C9A23F] font-light tracking-wide mb-10">
//                 Global Reach
//               </h2>

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//                 {[
//                   { number: "18+", label: "Countries" },
//                   { number: "120+", label: "Enterprise Clients" },
//                   { number: "40K+", label: "Workforce Impacted" },
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl border border-[#e6dcc6] text-center"
//                   >
//                     <p className="text-4xl font-light text-[#C9A23F]">
//                       {item.number}
//                     </p>
//                     <p className="text-[#5b6f77] mt-3 text-sm tracking-wide">
//                       {item.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT SIDE – FORM */}
//           <motion.div variants={fadeUp} className="relative">
//             <div className="bg-white/80 backdrop-blur-xl border border-[#e6dcc6] rounded-3xl p-12 shadow-sm">
//               <h2 className="text-3xl text-center text-[#0F4C5C] mb-10 font-light">
//                 Send us a Message
//               </h2>

//               <form
//                 className="grid grid-cols-1 md:grid-cols-2 gap-6"
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   if (validate()) {
//                     setShowConsent(true);
//                   }
//                 }}
//               >
//                 {/* First Name */}
//                 <div className="form-group">
//                   <label>First Name</label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder="Enter first name"
//                   />
//                   {errors.firstName && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.firstName}
//                     </p>
//                   )}
//                 </div>

//                 {/* Last Name */}
//                 <div className="form-group">
//                   <label>Last Name</label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder="Enter last name"
//                   />
//                   {errors.lastName && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.lastName}
//                     </p>
//                   )}
//                 </div>

//                 {/* Company */}
//                 <div className="form-group">
//                   <label>Company</label>
//                   <input
//                     type="text"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     placeholder="Your company"
//                   />
//                 </div>

//                 {/* Job Title */}
//                 <div className="form-group">
//                   <label>Job Title</label>
//                   <input
//                     type="text"
//                     name="jobTitle"
//                     value={formData.jobTitle}
//                     onChange={handleChange}
//                     placeholder="Your role"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="form-group">
//                   <label>Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="you@example.com"
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//                   )}
//                 </div>

//                 {/* Phone */}
//                 <div className="form-group">
//                   <label>Phone Number</label>
//                   <input
//                     type="text"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="+91..."
//                   />
//                   {errors.phone && (
//                     <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//                   )}
//                 </div>

//                 {/* Country */}
//                 <div className="form-group md:col-span-2">
//                   <label>Country</label>
//                   <input
//                     type="text"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     placeholder="Your country"
//                   />
//                 </div>

//                 {/* Message */}
//                 <div className="form-group md:col-span-2">
//                   <label>How can we help you?</label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="5"
//                     placeholder="Tell us about your requirement..."
//                     className="resize-none"
//                   />
//                   {errors.message && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.message}
//                     </p>
//                   )}
//                 </div>

//                 {/* Button */}
//                 <button
//                   type="button" // IMPORTANT: not submit
//                   onClick={() => {
//                     if (validate()) {
//                       setShowConsent(true);
//                     }
//                   }}
//                   className="md:col-span-2 mt-2 bg-gradient-to-r from-[#C9A23F] to-[#E5C76B]
//   text-[#0F4C5C] font-semibold py-4 rounded-xl tracking-wide
//   hover:scale-[1.02] transition-all duration-300 cursor-pointer"
//                 >
//                   SUBMIT INQUIRY
//                 </button>
//               </form>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//       {showConsent && (
//         <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center px-6">
//           <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-xl">
//             <h3 className="text-xl font-semibold text-[#0F4C5C] mb-4">
//               Data & Confidentiality Notice
//             </h3>

//             <p className="text-[#5b6f77] text-sm leading-relaxed mb-6">
//               By submitting this form, you agree that your information will be
//               processed securely in accordance with our Privacy Policy and Terms
//               & Conditions.
//             </p>

//             <div className="flex items-center gap-3 mb-6">
//               <input
//                 type="checkbox"
//                 checked={accepted}
//                 onChange={() => setAccepted(!accepted)}
//                 className="w-4 h-4 accent-[#C9A23F]"
//               />
//               <span className="text-sm text-[#5b6f77]">
//                 <span>
//                   I agree to the{" "}
//                   <a
//                     href="/policies"
//                     className="text-[#C9A23F] underline"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Privacy Policy
//                   </a>
//                 </span>
//               </span>
//             </div>

//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowConsent(false)}
//                 className="px-4 py-2 text-sm text-[#5b6f77]"
//               >
//                 Cancel
//               </button>

//               <button
//                 disabled={!accepted}
//                 onClick={() => {
//                   if (accepted) {
//                     setShowConsent(false);

//                     const url =
//                       `https://docs.google.com/forms/d/e/1FAIpQLSeXJvdv1X5wQV5OB_I4pdIhrBr424TlriUjPucIAFWJEmP5aA/formResponse?` +
//                       `entry.1691488305=${encodeURIComponent(formData.firstName)}` +
//                       `&entry.469759994=${encodeURIComponent(formData.lastName)}` +
//                       `&entry.1790880522=${encodeURIComponent(formData.company)}` +
//                       `&entry.1970432674=${encodeURIComponent(formData.jobTitle)}` +
//                       `&entry.918071452=${encodeURIComponent(formData.email)}` +
//                       `&entry.584228645=${encodeURIComponent(formData.phone)}` +
//                       `&entry.902959798=${encodeURIComponent(formData.country)}` +
//                       `&entry.1728949981=${encodeURIComponent(formData.message)}`;

//                     fetch(url, {
//                       method: "POST",
//                       mode: "no-cors",
//                     });

//                     // ✅ Clear form
//                     setFormData({
//                       firstName: "",
//                       lastName: "",
//                       company: "",
//                       jobTitle: "",
//                       email: "",
//                       phone: "",
//                       country: "",
//                       message: "",
//                     });

//                     // ✅ Reset states
//                     setAccepted(false);

//                     // ✅ Show success popup
//                     setShowSuccess(true);
//                   }
//                 }}
//                 className={`px-5 py-2 rounded-lg text-sm font-medium transition
//             ${
//               accepted
//                 ? "bg-[#C9A23F] text-white"
//                 : "bg-gray-300 text-gray-500 cursor-not-allowed"
//             }`}
//               >
//                 Accept & Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {showSuccess && (
//         <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center px-6">
//           <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl text-center">
//             <h3 className="text-2xl font-semibold text-[#0F4C5C] mb-3">
//               Thank You!
//             </h3>

//             <p className="text-[#5b6f77] text-sm mb-6">
//               We’ve received your inquiry. Our team will connect with you
//               shortly.
//             </p>

//             <button
//               onClick={() => setShowSuccess(false)}
//               className="bg-[#C9A23F] text-white px-6 py-2 rounded-lg"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactPage;
