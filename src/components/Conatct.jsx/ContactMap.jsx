import React from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./ContactMap.css";
import { useState } from "react";
import PageHero from "../PageHero/PageHero";

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
        <span class="absolute inline-flex h-12 w-12 rounded-full bg-[#C9A23F] opacity-30 animate-ping"></span>
        <span class="relative inline-flex rounded-full h-4 w-4 bg-[#C9A23F] shadow-lg"></span>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

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

  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#0F4C5C] overflow-hidden relative">
      {/* HERO */}
      <PageHero
        label="Get in Touch"
        title="Connect with"
        highlight="PivotEdge"
        subtitle="Strategic partnerships begin with meaningful conversations."
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header (kept same style, just colors fixed) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        ></motion.div>

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
                <h2 className="text-3xl text-[#C9A23F] font-light tracking-wide">
                  Contact Information
                </h2>

                <div className="space-y-6 text-[#5b6f77] text-lg">
                  <div>
                    <p className="text-[#0F4C5C] font-medium">Email:</p>
                    <p className="mt-1">info@pivotedgegroup.com</p>
                  </div>

                  <div>
                    <p className="text-[#0F4C5C] font-medium">Phone:</p>
                    <p className="mt-1">+91 1234567890</p>
                  </div>

                  <div>
                    <p className="text-[#0F4C5C] font-medium">Office:</p>
                    <p className="mt-1">Pune, Maharashtra, India</p>
                  </div>

                  <div>
                    <p className="text-[#0F4C5C] font-medium">
                      Business Hours:
                    </p>
                    <p className="mt-1">Mon – Fri : 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* MAP */}
              <div className="relative h-[420px] rounded-2xl overflow-hidden border border-[#e6dcc6] shadow-sm">
                <MapContainer
                  center={position}
                  zoom={12}
                  scrollWheelZoom={false}
                  className="h-full w-full [&_.leaflet-control-attribution]:hidden"
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={position} icon={goldIcon}>
                    <Tooltip permanent direction="top" offset={[0, -10]}>
                      Pune Office
                    </Tooltip>
                  </Marker>
                </MapContainer>
              </div>
            </motion.div>

            {/* GLOBAL REACH */}
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl text-[#C9A23F] font-light tracking-wide mb-10">
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
                    className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl border border-[#e6dcc6] text-center"
                  >
                    <p className="text-4xl font-light text-[#C9A23F]">
                      {item.number}
                    </p>
                    <p className="text-[#5b6f77] mt-3 text-sm tracking-wide">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <motion.div variants={fadeUp} className="relative">
            <div className="bg-white/80 backdrop-blur-xl border border-[#e6dcc6] rounded-3xl p-12 shadow-sm">
              <h2 className="text-3xl text-center text-[#0F4C5C] mb-10 font-light">
                Send us a Message
              </h2>

              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (validate()) {
                    setShowConsent(true);
                  }
                }}
              >
                {/* First Name */}
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                  />
                </div>

                {/* Job Title */}
                <div className="form-group">
                  <label>Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Your role"
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91..."
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Country */}
                <div className="form-group md:col-span-2">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Your country"
                  />
                </div>

                {/* Message */}
                <div className="form-group md:col-span-2">
                  <label>How can we help you?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your requirement..."
                    className="resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Button */}
                <button
                  type="button" // IMPORTANT: not submit
                  onClick={() => {
                    if (validate()) {
                      setShowConsent(true);
                    }
                  }}
                  className="md:col-span-2 mt-2 bg-gradient-to-r from-[#C9A23F] to-[#E5C76B] 
  text-[#0F4C5C] font-semibold py-4 rounded-xl tracking-wide
  hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                >
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {showConsent && (
        <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-xl">
            <h3 className="text-xl font-semibold text-[#0F4C5C] mb-4">
              Data & Confidentiality Notice
            </h3>

            <p className="text-[#5b6f77] text-sm leading-relaxed mb-6">
              By submitting this form, you agree that your information will be
              processed securely in accordance with our Privacy Policy and Terms
              & Conditions.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <input
                type="checkbox"
                checked={accepted}
                onChange={() => setAccepted(!accepted)}
                className="w-4 h-4 accent-[#C9A23F]"
              />
              <span className="text-sm text-[#5b6f77]">
                <span>
                  I agree to the{" "}
                  <a
                    href="/policies"
                    className="text-[#C9A23F] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </span>
              </span>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConsent(false)}
                className="px-4 py-2 text-sm text-[#5b6f77]"
              >
                Cancel
              </button>

              <button
                disabled={!accepted}
                onClick={() => {
                  if (accepted) {
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

                    fetch(url, {
                      method: "POST",
                      mode: "no-cors",
                    });

                    // ✅ Clear form
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

                    // ✅ Reset states
                    setAccepted(false);

                    // ✅ Show success popup
                    setShowSuccess(true);
                  }
                }}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition
            ${
              accepted
                ? "bg-[#C9A23F] text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
              >
                Accept & Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {showSuccess && (
        <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl text-center">
            <h3 className="text-2xl font-semibold text-[#0F4C5C] mb-3">
              Thank You!
            </h3>

            <p className="text-[#5b6f77] text-sm mb-6">
              We’ve received your inquiry. Our team will connect with you
              shortly.
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="bg-[#C9A23F] text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
