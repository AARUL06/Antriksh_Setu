import { useState } from "react";
import SpaceAIChatbot from "./ChatBot";

function Layout() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    setContactForm({
      name: "",
      email: "",
      company: "",
      role: "",
      message: "",
    });
  };

  return (
    <div className="font-montserrat min-h-screen bg-black relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-black/10 to-gray-900/20"></div>

      <main className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="relative text-center mb-20">
          {/* Background Image */}
          <img
            src="src/assets/images/3DModel.png"
            alt="Logo"
            className="absolute inset-0 mx-auto h-[600px] w-auto object-contain opacity-30 -z-10"
          />

          {/* Foreground Content */}
          <div className="relative z-10 mb-8">
            <h1 className="text-5xl md:text-6xl mt-12 font-bold text-white mb-6">
              Nexus
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connecting Earth to Low Earth Orbit Commerce
            </p>
          </div>
        </section>

        {/* Mission Overview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-gray-400/30 text-gray-300 px-4 py-2 rounded-full text-xs font-semibold mb-6 uppercase tracking-wide">
              Mission Overview
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Connecting the World Through Space
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our mission is to accelerate the commercialization of Low Earth Orbit (LEO) by creating an accessible digital platform that bridges the gap between businesses, researchers, and space agencies. We aim to showcase opportunities in space tourism, satellite deployment, microgravity research, and orbital manufacturing while providing tools for cost estimation, collaboration, and market insights. By simplifying access to LEO-related information and simulations, we empower innovators to participate in the next era of the space economy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 text-center hover:border-gray-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Global Coverage
              </h3>
              <p className="text-gray-300">
                Comprehensive worldwide internet access including remote and
                underserved regions
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 text-center hover:border-gray-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Advanced Technology
              </h3>
              <p className="text-gray-300">
                State-of-the-art LEO satellites with cutting-edge communication
                systems
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 text-center hover:border-gray-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Reliable Infrastructure
              </h3>
              <p className="text-gray-300">
                Redundant systems ensuring 99.9% uptime and consistent service
                quality
              </p>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-gray-400/30 text-gray-300 px-4 py-2 rounded-full text-xs font-semibold mb-6 uppercase tracking-wide">
              Key Metrics
            </span>

            <h2 className="text-4xl font-bold text-white mb-6">
              Project at a Glance
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-gray-400/30 rounded-xl p-6 text-center hover:scale-105 hover:bg-white/10 transition-all">
              <h3 className="text-4xl font-bold text-white mb-2">1,200</h3>
              <p className="text-gray-300">Satellites in Constellation</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-gray-400/30 rounded-xl p-6 text-center hover:scale-105 hover:bg-white/10 transition-all">
              <h3 className="text-4xl font-bold text-white mb-2">550km</h3>
              <p className="text-gray-300">Average Orbital Altitude</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-gray-400/30 rounded-xl p-6 text-center hover:scale-105 hover:bg-white/10 transition-all">
              <h3 className="text-4xl font-bold text-white mb-2">10Gbps</h3>
              <p className="text-gray-300">Peak Data Throughput</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-gray-400/30 rounded-xl p-6 text-center hover:scale-105 hover:bg-white/10 transition-all">
              <h3 className="text-4xl font-bold text-white mb-2">20ms</h3>
              <p className="text-gray-300">Average Latency</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-gray-400/30 text-gray-300 px-4 py-2 rounded-full text-xs font-semibold mb-6 uppercase tracking-wide">
              Get Involved
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Connect With Our Team
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Share your feedback, schedule meetings, or get in touch with our
              team.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                Contact Our Team
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    className="bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    className="bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Company/Institution"
                    value={contactForm.company}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        company: e.target.value,
                      })
                    }
                    className="bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Your Role"
                    value={contactForm.role}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, role: e.target.value })
                    }
                    className="bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  />
                </div>

                <textarea
                  placeholder="Tell us about your interest in our project..."
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  rows={4}
                  className="bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                />

                <button
                  onClick={handleContactSubmit}
                  className="w-full bg-white text-black hover:bg-gray-200 py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Explore the Future of Connectivity?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Dive deeper into our business plan, explore prototypes, and
              calculate deployment costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black hover:bg-gray-200 py-3 px-8 rounded-lg font-medium transition-all transform hover:scale-105">
                Explore Financial Plan
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-black py-3 px-8 rounded-lg font-medium transition-all">
                View Prototype Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <style >{`
        .stars,
        .stars2,
        .stars3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .stars {
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #eee,
              transparent
            ),
            radial-gradient(
              2px 2px at 40px 70px,
              rgba(255, 255, 255, 0.8),
              transparent
            ),
            radial-gradient(1px 1px at 90px 40px, #fff, transparent),
            radial-gradient(
              1px 1px at 130px 80px,
              rgba(255, 255, 255, 0.6),
              transparent
            ),
            radial-gradient(2px 2px at 160px 30px, #ddd, transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: twinkle 10s ease-in-out infinite;
        }

        .stars2 {
          background-image: radial-gradient(
              1px 1px at 40px 60px,
              #fff,
              transparent
            ),
            radial-gradient(
              1px 1px at 120px 10px,
              rgba(255, 255, 255, 0.7),
              transparent
            ),
            radial-gradient(2px 2px at 170px 50px, #eee, transparent);
          background-repeat: repeat;
          background-size: 300px 120px;
          animation: twinkle 8s ease-in-out infinite reverse;
        }

        .stars3 {
          background-image: radial-gradient(
              1px 1px at 60px 20px,
              rgba(255, 255, 255, 0.5),
              transparent
            ),
            radial-gradient(
              2px 2px at 140px 40px,
              rgba(255, 255, 255, 0.3),
              transparent
            ),
            radial-gradient(1px 1px at 190px 70px, #fff, transparent);
          background-repeat: repeat;
          background-size: 250px 140px;
          animation: twinkle 12s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>

      <SpaceAIChatbot/>
    </div>
  );
}

export default Layout;
