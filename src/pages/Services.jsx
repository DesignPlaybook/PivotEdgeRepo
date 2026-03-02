import React from "react";
import executiveIcon from "../assets/images/image1.jpg";
import leadershipIcon from "../assets/images/image1.jpg";
import diversityIcon from "../assets/images/image1.jpg";
import bg from '../assets/images/bg.webp'

const servicesData = [
  {
    title: "Executive Search",
    description:
      "We help companies identify and recruit top leadership talent worldwide, ensuring the right fit for every role.",
    image: executiveIcon,
  },
  {
    title: "Leadership Consulting",
    description:
      "Our experts guide organizations in leadership development, succession planning, and strategic growth.",
    image: leadershipIcon,
  },
  {
    title: "Diversity & Inclusion",
    description:
      "Promoting inclusive practices that strengthen organizational culture and unlock business potential.",
    image: diversityIcon,
  },
];

const Services = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
     <section className="relative h-[50vh] w-full">
  {/* Background Image */}
  <img
    src={bg} // replace with your image
    alt="Services Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="text-center px-6">
      <h1 className="text-4xl md:text-6xl font-semibold text-white">
        Our Services
      </h1>
      <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg md:text-xl">
        Providing tailored leadership solutions to drive success across
        industries and geographies.
      </p>
    </div>
  </div>
</section>

      {/* Services Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-20">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                <button className="self-start px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition-transform duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries / Domains Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { title: "Manufacturing", icon: executiveIcon },
              { title: "Financial Services", icon: leadershipIcon },
              { title: "Pharma & Life Sciences", icon: diversityIcon },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-500 hover:scale-105"
              >
                <img
                  src={industry.icon}
                  alt={industry.title}
                  className="h-16 w-16 mb-4 object-cover rounded-full"
                />
                <h4 className="text-xl font-semibold text-gray-900">
                  {industry.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;