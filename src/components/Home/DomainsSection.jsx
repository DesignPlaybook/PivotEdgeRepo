import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaHospital,
  FaIndustry,
  FaShoppingBag,
  FaUniversity,
} from "react-icons/fa";

const domains = [
  { title: "Technology", icon: <FaLaptopCode /> },
  { title: "Financial Services", icon: <FaUniversity /> },
  { title: "Healthcare", icon: <FaHospital /> },
  { title: "Consumer & Retail", icon: <FaShoppingBag /> },
  { title: "Industrial & Manufacturing", icon: <FaIndustry /> },
];

const DomainsSection = () => {
  return (
    <section className="py-5 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-teal text-center">
          Industries We Serve
        </h2>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="
                group bg-white rounded-2xl p-6 text-center
                border border-brand-gold
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-lg hover:border-brand-gold
              "
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className="
                    h-14 w-14 flex items-center justify-center rounded-full
                    bg-brand-sand text-brand-graphite text-2xl
                    transition-colors duration-300
                    group-hover:bg-brand-gold group-hover:text-white
                  "
                >
                  {domain.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-brand-charcoal">
                {domain.title}
              </h3>

              {/* Accent line */}
              <div className="flex justify-center mt-4">
                <span
                  className="
                    h-[2px] w-6 bg-brand-gold
                    transition-all duration-300
                    group-hover:w-10
                  "
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/domains"
            className="
              inline-block text-brand-teal font-medium
              border-b border-brand-teal
              hover:text-brand-gold hover:border-brand-gold
              transition-colors
            "
          >
            View all domains →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default DomainsSection;