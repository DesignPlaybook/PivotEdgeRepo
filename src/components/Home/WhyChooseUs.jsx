import { FaGlobe, FaUserTie, FaChartLine, FaHandshake } from "react-icons/fa";

const points = [
  {
    icon: <FaGlobe />,
    title: "Global Perspective",
    desc: "Deep understanding of leadership across geographies and markets.",
  },
  {
    icon: <FaUserTie />,
    title: "Leadership Expertise",
    desc: "Decades of experience advising senior leaders and boards.",
  },
  {
    icon: <FaChartLine />,
    title: "Tailored Solutions",
    desc: "Every engagement is customized to your organization’s needs.",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Partnerships",
    desc: "Long-term relationships built on trust, insight, and results.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-teal">
              Why Organizations Choose Us
            </h2>
            <p className="mt-6 text-brand-slate max-w-xl leading-relaxed">
              We partner with organizations to solve complex leadership
              challenges through insight, experience, and a global network.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {points.map((item, index) => (
              <div
                key={index}
                className="
                  group bg-white p-8 rounded-2xl
                  border border-brand-gold
                  shadow-md
                  transition-all duration-300
                  hover:border-black/10 hover:shadow-sm hover:-translate-y-0
                "
              >
                {/* Icon */}
                <div
                  className="
                    text-2xl mb-4 text-black
                    transition-colors duration-300
                    group-hover:text-brand-gold
                  "
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-brand-charcoal">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-brand-slate text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;