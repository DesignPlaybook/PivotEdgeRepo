// ServicesSection.jsx
import React from "react";

const services = [
  {
    title: "Executive Search",
    description:
      "We help companies identify and recruit top leadership talent worldwide.",
    icon: "https://static.vecteezy.com/system/resources/previews/024/162/391/large_2x/businessman-using-a-magnifying-glass-to-search-for-business-risks-financial-risk-management-concept-business-investment-feasibility-assessment-fault-protection-protection-of-business-interests-free-photo.jpg",
  },
  {
    title: "Leadership Consulting",
    description:
      "Our experts guide organizations in leadership development and succession planning.",
    icon: "https://st2.depositphotos.com/3591429/7167/i/950/depositphotos_71678161-stock-photo-diversity-of-business-people-leadership.jpg",
  },
  {
    title: "Diversity & Inclusion",
    description:
      "Promoting inclusive practices that strengthen organizational culture.",
    icon: "https://diversitydashboard.co.uk/_resx/imageresource/ce105a38af647d62966c694de2ba513d282203e9-1431-1795-0-0-0",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start
                transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl"
            >
              {service.icon && (
                <div className="overflow-hidden rounded-full mb-4 w-20 h-20">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out transform hover:scale-110"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;