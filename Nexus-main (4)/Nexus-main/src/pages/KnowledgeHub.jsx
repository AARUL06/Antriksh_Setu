import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ChatBot from "../components/Layout/ChatBot";

function KnowledgeHub() {
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [showFullContent, setShowFullContent] = useState({});

  // Knowledge topics data - easily expandable
  const knowledgeTopics = [
    {
      id: 1,
      title: "Space Exploration Basics",
      shortDescription:
        "Space exploration is the study and discovery of outer space using telescopes, satellites, rockets, and spacecraft. It helps us understand planets, stars, and galaxies, and also leads to new technologies. Missions like Apollo, Mars rovers, and space telescopes show how humans explore beyond Earth to expand knowledge.",
      fullContent: {
        overview:
          "Space exploration investigates the universe beyond Earth using crewed and uncrewed spacecraft to expand scientific knowledge and benefit humanity through technological advancements, new resources, and solutions to global challenges. Key components include launch vehicles, spacecraft (like orbiters, landers, and rovers), and ground infrastructure, while its basis lies in human curiosity, scientific inquiry, and the practical application of space technology for communication, weather, and exploration of other celestial bodies.",
        keyComponents: {
          title: "Key Components",
          items: [
            "Launch Vehicles: Rockets are essential to carry spacecraft and astronauts into orbit and beyond.",
            "Spacecraft: These are robots or human-carrying vehicles, which can be:",
            "• Fly-bys: Probes that pass celestial bodies, collecting data without entering orbit.",
            "• Orbiters: Spacecraft that circle a planet or moon to map and study it.",
            "• Landers: Probes designed to touch down on the surface of a planet or moon.",
            "• Rovers: Mobile vehicles that travel on the surface of another world to gather data.",
            "Ground Support: Includes mission control centers, telescopes, and communication networks to manage and receive data from spacecraft.",
          ],
        },
        basis: {
          title: "Basis of Space Exploration",
          items: [
            "Human Curiosity: A fundamental drive to explore the unknown, discover new worlds, and push the boundaries of human knowledge.",
            "Scientific Inquiry: To study Earth, the Sun, other planets, and the universe to answer fundamental scientific questions.",
            "Technological Innovation: Space exploration spurs advancements in technology, such as new materials, computer technology, and communication systems, that benefit life on Earth.",
            "Practical Applications: Using satellites for everyday purposes like weather forecasting, environmental monitoring, and global communication.",
          ],
        },
        benefits: {
          title: "Benefits of Space Exploration",
          items: [
            "Scientific Discoveries: A deeper understanding of the universe, our solar system, and Earth itself.",
            "Technological Spin-offs: Inventions like freeze-dried food, Teflon, and improved medical devices have originated from space programs.",
            "Economic Opportunities: Creating new industries, resources, and global partnerships.",
            "Inspiring Future Generations: Motivating young people to pursue careers in STEM (Science, Technology, Engineering, and Mathematics) fields.",
          ],
        },
        future:
          "Today, humanity has the potential to seek answers to the most fundamental questions posed about the existence of life beyond Earth. Telescopes have found planets around other stars. Robotic probes have identified potential resources on the Moon, and evidence of water -- a key ingredient for life -- has been found on Mars and the moons of Jupiter. Direct human experience in space has fundamentally altered our perspective of humanity and our place in the universe.",
      },
    },
    {
      id: 2,
      title: "Satellites",
      shortDescription:
        "Satellites are man-made objects placed in orbit around Earth or other celestial bodies. They are used for communication, navigation, weather monitoring, Earth observation, and scientific research. Satellites can be small (CubeSats) or large, and their design depends on their mission, orbit, and payload requirements.",
      fullContent: {
        overview:
          "Space exploration investigates the universe beyond Earth using crewed and uncrewed spacecraft to expand scientific knowledge and benefit humanity through technological advancements, new resources, and solutions to global challenges. Key components include launch vehicles, spacecraft (like orbiters, landers, and rovers), and ground infrastructure, while its basis lies in human curiosity, scientific inquiry, and the practical application of space technology for communication, weather, and exploration of other celestial bodies.",
      },
    },
    {
      id: 3,
      title: "Rockets",
      shortDescription:
        "Rockets operate on Newton's third law of motion, expelling high-velocity exhaust gases to generate thrust that propels the vehicle forward. Modern rockets utilize various propulsion systems including solid propellant motors for reliability and simplicity, liquid propellant engines for controllability and higher performance, and advanced cryogenic systems using supercooled fuels like liquid oxygen and hydrogen for maximum efficiency. Reusable rocket technology has revolutionized space access, with vertical takeoff and landing capabilities reducing launch costs and turnaround times. Multi-stage rocket configurations optimize performance by shedding mass as fuel is consumed, with typical arrangements including solid boosters, liquid core stages, and cryogenic upper stages for different mission profiles. Advanced propulsion concepts such as scramjet engines and air-breathing systems are being developed for future space planes and single-stage-to-orbit vehicles. Rockets remain essential for launching satellites, crewed missions, and interplanetary probes, and ongoing innovation continues to expand their ",
      fullContent: {
        overview:
          "Rockets operate on Newton's third law of motion, expelling high-velocity exhaust gases to generate thrust that propels the vehicle forward. Modern rockets utilize various propulsion systems including solid propellant motors for reliability and simplicity, liquid propellant engines for controllability and higher performance, and advanced cryogenic systems using supercooled fuels like liquid oxygen and hydrogen for maximum efficiency. Reusable rocket technology has revolutionized space access, with vertical takeoff and landing capabilities reducing launch costs and turnaround times. Multi-stage rocket configurations optimize performance by shedding mass as fuel is consumed, with typical arrangements including solid boosters, liquid core stages, and cryogenic upper stages for different mission profiles. Advanced propulsion concepts such as scramjet engines and air-breathing systems are being developed for future space planes and single-stage-to-orbit vehicles. Rockets remain essential for launching satellites, crewed missions, and interplanetary probes, and ongoing innovation continues to expand their capabilities and reliability.",
      },
    },
    {
      id: 4,
      title: "Launch vehicles",
      shortDescription:
        "Launch vehicles are rockets specifically designed to carry satellites or spacecraft from Earth into space. They vary in size and capacity, from small rockets for CubeSats to heavy-lift rockets for large satellites. Launch vehicles can be expendable or reusable and are chosen based on payload weight, orbit, and mission requirements.",
      fullContent: {
        overview:
          "Launch vehicles represent specialized rocket systems engineered to deliver specific payload masses to designated orbital destinations. Current operational systems span from small satellite launchers capable of deploying hundreds of kilograms to low Earth orbit, to heavy-lift vehicles designed for deep space exploration missions. India’s launch vehicle portfolio includes the Polar Satellite Launch Vehicle (PSLV) for sun-synchronous and polar orbits, the Geosynchronous Satellite Launch Vehicle (GSLV) for geostationary missions, and the Launch Vehicle Mark III (LVM3) for large payloads. Future developments focus on partially reusable systems with advanced engines, modular designs for rapid turnaround, and vertical takeoff and landing recovery capabilities. Launch vehicles are selected based on mission requirements, payload mass, target orbit, and cost considerations, and they play a critical role in enabling access to space for scientific, commercial, and defense applications.",
      },
    },
    {
      id: 5,
      title: "Space Transportation",
      shortDescription:
        "Space transportation involves moving people, satellites, or cargo between Earth and space using rockets, shuttles, or other spacecraft. It enables satellite deployment, space exploration, and future space tourism. Efficient space transportation reduces costs, improves access to space, and supports scientific, commercial, and defense missions.",
      fullContent: {
        overview:
          "Launch vehicles represent specialized rocket systems engineered to deliver specific payload masses to designated orbital destinations. Current operational systems span from small satellite launchers capable of deploying hundreds of kilograms to low Earth orbit, to heavy-lift vehicles designed for deep space exploration missions. India’s launch vehicle portfolio includes the Polar Satellite Launch Vehicle (PSLV) for sun-synchronous and polar orbits, the Geosynchronous Satellite Launch Vehicle (GSLV) for geostationary missions, and the Launch Vehicle Mark III (LVM3) for large payloads. Future developments focus on partially reusable systems with advanced engines, modular designs for rapid turnaround, and vertical takeoff and landing recovery capabilities. Launch vehicles are selected based on mission requirements, payload mass, target orbit, and cost considerations, and they play a critical role in enabling access to space for scientific, commercial, and defense applications.",
      },
    },
    {
      id: 6,
      title: "Earth observation",
      shortDescription:
        "Earth observation involves monitoring Earth using satellites to collect data on weather, environment, natural resources, and disasters. Payloads are the instruments or equipment carried by satellites to perform these tasks, such as cameras, sensors, or radars. The type of payload depends on the satellite’s mission and data requirements.",
      fullContent: {
        overview:
          " Earth observation satellites carry sophisticated payload suites including optical imaging sensors, synthetic aperture radar (SAR) systems, multispectral and hyperspectral cameras, and environmental monitoring instruments. High-resolution optical payloads capture imagery with sub-meter ground resolution for urban planning, agriculture monitoring, and disaster assessment, while SAR systems penetrate clouds and operate day-night for consistent data collection. Multispectral sensors detect electromagnetic radiation across multiple wavelengths, enabling vegetation health assessment, water quality monitoring, and mineral exploration through spectral analysis. Thermal infrared payloads measure surface temperatures for climate research, urban heat island studies, and volcanic activity monitoring, while atmospheric sensors track greenhouse gases, ozone levels, and pollution distribution. Advanced payload technologies include LiDAR systems for precise topographic mapping, gravimetric sensors for Earth's gravitational field measurement, and magnetic field detectors for geomagnetic research. Artificial intelligence integration enables onboard data processing, reducing downlink requirements and enabling real-time decision making for time-sensitive applications like disaster response and maritime surveillance.",
      },
    },
    {
      id: 7,
      title: "Orbital Mechanics and Congestion",
      shortDescription:
        " Orbital mechanics is the study of how objects move in space under gravity, helping plan satellite paths and maneuvers. Orbital congestion occurs when many satellites share similar orbits, increasing the risk of collisions and space debris. Proper planning and coordination are essential to keep space safe and functional.",
      fullContent: {
        overview:
          " Orbital mechanics governs satellite motion through Kepler's laws and gravitational dynamics, determining orbital periods, altitudes, and inclinations required for specific mission profiles. Transfer orbits like Hohmann transfers and bi-elliptic transfers optimize fuel consumption for satellite deployment, while station-keeping maneuvers maintain precise orbital positions against perturbative forces including atmospheric drag, solar radiation pressure, and gravitational anomalies. Space traffic management addresses growing orbital congestion with tens of thousands of tracked objects currently orbiting Earth. Conjunction analysis predicts potential collisions using radar tracking and orbital propagation models, while space situational awareness systems monitor debris populations and active satellites. Critical orbital regions like geostationary orbit face severe congestion with limited slots available for telecommunications satellites. Active debris removal missions and collision avoidance maneuvers require international coordination to maintain sustainable space access. Future orbital management will implement traffic control zones, automated collision avoidance systems, and standardized orbital slots to maintain safe and functional space operations.",
      },
    },
    {
      id: 8,
      title: "Space Sustainability",
      shortDescription:
        "Space sustainability focuses on keeping space safe and usable for the long term. It involves reducing space debris, managing satellite lifecycles, and following international guidelines. Sustainable practices ensure that future missions can operate without collision risks or environmental harm, supporting ongoing exploration and communication.",
      fullContent: {
        overview:
          "Space sustainability encompasses comprehensive frameworks for long-term space environment protection through debris mitigation guidelines, end-of-life disposal protocols, and sustainable mission design principles. The Inter-Agency Space Debris Coordination Committee (IADC) and UN Office for Outer Space Affairs establish international standards for responsible space operations, including 25-year orbital lifetime limits and post-mission disposal requirements. Design for demise approaches ensure satellite components burn up during atmospheric reentry, while passivation procedures prevent orbital breakups by venting stored energy sources and securing deployable structures. Green propulsion systems using non-toxic propellants reduce environmental impact, and modular satellite design enables component reuse and upgrade capabilities. Sustainable practices include orbit selection optimization to minimize debris risk exposure, international debris monitoring networks sharing collision warnings, and commercial liability frameworks incentivizing responsible operations. Future sustainability measures will incorporate on-orbit servicing capabilities for satellite life extension, space-based manufacturing reducing launch requirements, and circular economy principles enabling orbital resource recycling and component recovery.",
      },
    },
    {
      id: 9,
      title: "Space Debris",
      shortDescription:
        "Space debris consists of defunct satellites, rocket parts, and fragments orbiting Earth. It poses collision risks to active satellites and spacecraft. Managing debris through tracking, removal, and sustainable satellite design is essential to keep space safe and prevent damage to valuable space assets.",
      fullContent: {
        overview:
          "Debris refers to fragments of broken material, which can be anything from scattered rubble and litter to organic waste, geological rock fragments, medical waste, and even human-made space junk. The specific meaning depends on the context, but a key aspect across all types is that it's the dispersed remnants of something larger that has been destroyed or discarded.",
      },
    },
    {
      id: 10,
      title: "Space Debris",
      shortDescription:
        " International space laws and policies are rules governing activities in outer space. They cover issues like satellite operations, frequency usage, liability, and space debris management. Agreements like the Outer Space Treaty ensure peaceful use of space, cooperation between countries, and protection of Earth and space environments.",
      fullContent: {
        overview:
          "International space law is founded on five major treaties: the Outer Space Treaty (1967), which establishes space as the province of all mankind and prohibits national appropriation of celestial bodies; the Rescue Agreement (1968) requiring assistance to astronauts in distress; the Liability Convention (1972) establishing compensation frameworks for space-caused damage; the Registration Convention (1976) mandating spacecraft registration; and the Moon Agreement (1984) governing lunar and celestial body activities. The International Telecommunication Union (ITU) manages orbital slots and radio frequency coordination, while the Committee on the Peaceful Uses of Outer Space (COPUOS) develops space law principles. Recent developments include the Artemis Accords establishing bilateral agreements for lunar exploration, Space Traffic Management regulations for collision avoidance, and Commercial Space Launch Acts governing private space activities. Emerging challenges include space mining rights, militarization concerns, and liability frameworks for mega-constellations and space debris mitigation. International cooperation and compliance with these laws are essential for the peaceful, sustainable, and equitable use of outer space.",
      },
    },
    // Add more topics here later
  ];

  const toggleTopic = (topicId) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId);
    // Reset full content view when switching topics
    if (expandedTopic !== topicId) {
      setShowFullContent({ ...showFullContent, [topicId]: false });
    }
  };

  

  return (
    <>
      <Header />
      <div className="font-montserrat mt-[50px] min-h-screen bg-black relative overflow-hidden">
        {/* Animated Stars Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-black/10 to-gray-900/20"></div>

        <main className="relative z-10 container mx-auto px-4 py-16">
          {/* Header */}
          <section className="text-center mb-12">
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-gray-400/30 text-gray-300 px-4 py-2 rounded-full text-xs font-semibold mb-6 uppercase tracking-wide">
              Knowledge Center
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Space Knowledge Hub
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore comprehensive information about space exploration,
              missions, and technologies
            </p>
          </section>

          {/* Knowledge Topics */}
          <div className="max-w-4xl mx-auto space-y-6">
            {knowledgeTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                {/* Topic Header */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-white">
                    {topic.title}
                  </h2>
                  <button
                    onClick={() => toggleTopic(topic.id)}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
                        expandedTopic === topic.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Short Description */}
                <p className="text-gray-300 leading-relaxed mb-4">
                  {topic.shortDescription}
                </p>

                {/* Read More Button */}
                {expandedTopic !== topic.id && (
                  <button
                    onClick={() => toggleTopic(topic.id)}
                    className="text-white hover:text-gray-300 text-sm font-medium flex items-center gap-2 transition-colors"
                  >
                    Read more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                )}

                {/* Expanded Content */}
                {expandedTopic === topic.id && (
                  <div className="mt-6 space-y-6 border-t border-gray-700/30 pt-6">
                    {!showFullContent[topic.id] ? (
                      // Brief expanded view
                      <div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {topic.fullContent.overview}
                        </p>
                        
                      </div>
                    ) : (
                      // Full content view
                      <div className="space-y-6">
                        <p className="text-gray-300 leading-relaxed">
                          {topic.fullContent.overview}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>

        <style>{`
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
      </div>
      <Footer />
      <ChatBot />
    </>
  );
}

export default KnowledgeHub;
