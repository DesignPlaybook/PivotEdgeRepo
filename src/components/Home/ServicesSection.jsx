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
    <section className="py-24 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-teal mb-14 text-center">
          Our Services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-brand-ivory rounded-2xl p-8
                border border-transparent
                shadow-sm transition-all duration-500
                hover:-translate-y-2 hover:shadow-xl hover:border-brand-gold"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-48 w-full object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-brand-charcoal mb-3">
                {service.title}
              </h3>

              <p className="text-brand-slate leading-relaxed">
                {service.description}
              </p>

              {/* Accent line */}
              <div className="mt-6 h-[2px] w-12 bg-brand-gold transition-all duration-500 group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;