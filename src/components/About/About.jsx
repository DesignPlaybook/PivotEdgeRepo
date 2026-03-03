import React from "react";
import aboutHero from "../../assets/images/teamwork.avif";

// Add icons for each card
import missionIcon from "../../assets/images/mission.jpg";
import visionIcon from "../../assets/images/version.jpg";
import valuesIcon from "../../assets/images/value.jpg";

const aboutData = [
  {
    title: "Our Mission",
    description:
      "To provide exceptional leadership advisory services, helping organizations thrive and succeed in a rapidly changing world.",
    icon: missionIcon,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Our Vision",
    description:
      "To be the most trusted partner for leadership solutions, shaping the future of businesses globally.",
    icon: visionIcon,
    color: "from-blue-500 to-teal-400",
  },
  {
    title: "Our Values",
    description:
      "Integrity, Excellence, Collaboration, and Innovation guide every decision we make.",
    icon: valuesIcon,
    color: "from-yellow-400 to-orange-500",
  },
];

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero / Banner */}
      <section className="relative h-[60vh] w-full">
        <img
          src={aboutHero}
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-wide">
              About Us
            </h1>
            <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg md:text-xl">
              We are committed to delivering exceptional leadership solutions
              for organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-16 text-center tracking-wide">
            Who We Are
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {aboutData.map((item, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-md p-10 flex flex-col items-center text-center overflow-hidden
                  transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl`}
              >
                {/* Top gradient stripe */}
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-gradient-to-r ${item.color}`}
                />

                {/* Icon */}
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-16 w-16 mb-6 rounded-full object-cover z-10 relative border border-gray-200 p-1 bg-white"
                />

                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{item.description}</p>

                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-transparent opacity-0 hover:opacity-10 transition-opacity rounded-2xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;