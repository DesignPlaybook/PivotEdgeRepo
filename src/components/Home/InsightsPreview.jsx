import { Link } from "react-router-dom";

const insights = [
  {
    title: "The Future of Leadership in a Digital World",
    excerpt:
      "How organizations can prepare leaders for complexity, change, and digital transformation.",
  },
  {
    title: "Why Executive Search Is Evolving",
    excerpt:
      "Traditional hiring models are changing. Here’s what modern leadership search looks like.",
  },
  {
    title: "Building Inclusive Leadership Teams",
    excerpt:
      "Diversity-driven leadership is no longer optional — it’s a business imperative.",
  },
];

const InsightsSection = () => {
  return (
    <section className="py-16 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-teal">
            Insights & Perspectives
          </h2>
          <p className="mt-4 text-brand-slate">
            Our thinking on leadership, organizations, and the future of work.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl p-8
                border border-black/10
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
              "
            >
              <h3 className="text-lg font-semibold text-brand-charcoal mb-4">
                {item.title}
              </h3>

              <p className="text-brand-slate text-sm leading-relaxed mb-6">
                {item.excerpt}
              </p>

              <Link
                to="/insights"
                className="
                  inline-block font-medium text-brand-teal
                  border-b border-brand-teal
                  hover:text-brand-gold hover:border-brand-gold
                  transition-colors
                "
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InsightsSection;