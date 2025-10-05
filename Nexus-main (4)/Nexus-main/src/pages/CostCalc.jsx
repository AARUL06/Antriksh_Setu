import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ChatBot from "../components/Layout/ChatBot";

function CostCalc() {
  const [formData, setFormData] = useState({
    payloadMass: '',
    payloadCost: '',
    busSubsystems: '',
    engineering: '',
    testingIntegration: '',
    groundSegment: '',
    launchCostPerKg: '',
    contingencyRate: '',
    insuranceRate: '',
    missionTimeline: '',
    annualOpsCost: ''
  });

  const [results, setResults] = useState(null);
  const [riskData, setRiskData] = useState({
    spatialDensity: '',
    relativeVelocity: '',
    crossSectionalArea: '',
    missionDuration: ''
  });
  const [riskResults, setRiskResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRiskInputChange = (e) => {
    const { name, value } = e.target;
    setRiskData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateCosts = () => {
    const {
      payloadMass,
      payloadCost,
      busSubsystems,
      engineering,
      testingIntegration,
      groundSegment,
      launchCostPerKg,
      contingencyRate,
      insuranceRate,
      missionTimeline,
      annualOpsCost
    } = formData;

    // Convert strings to numbers
    const X = parseFloat(payloadMass) || 0;
    const P = parseFloat(payloadCost) || 0;
    const B = parseFloat(busSubsystems) || 0;
    const E = parseFloat(engineering) || 0;
    const T = parseFloat(testingIntegration) || 0;
    const G = parseFloat(groundSegment) || 0;
    const L = parseFloat(launchCostPerKg) || 0;
    const m = parseFloat(contingencyRate) || 0;
    const i = parseFloat(insuranceRate) || 0;
    const Y = parseFloat(missionTimeline) || 0;
    const Z = parseFloat(annualOpsCost) || 0;

    // Step 1: Sum of main costs
    const launchCost = L * X;
    const mainCostsSum = P + B + E + T + G + launchCost;

    // Step 2: Apply contingency margin
    const marginCost = (m / 100) * mainCostsSum;
    const subtotal = mainCostsSum + marginCost;

    // Step 3: Apply insurance
    const insuranceCost = (i / 100) * subtotal;

    // Step 4: Operation & maintenance cost
    const operationMaintenanceCost = Y * Z;

    // Total mission cost
    const totalMissionCost = subtotal + insuranceCost + operationMaintenanceCost;

    setResults({
      payloadMass: X,
      mainCosts: {
        payload: P,
        busSubsystems: B,
        engineering: E,
        testingIntegration: T,
        groundSegment: G,
        launch: launchCost,
        total: mainCostsSum
      },
      marginCost,
      subtotal,
      insuranceCost,
      operationMaintenanceCost,
      totalMissionCost
    });
  };

  const calculateRisk = () => {
    const { spatialDensity, relativeVelocity, crossSectionalArea, missionDuration } = riskData;
    
    const SPD = parseFloat(spatialDensity) || 0;
    const VREL = parseFloat(relativeVelocity) || 0;
    const AC = parseFloat(crossSectionalArea) || 0;
    const T = parseFloat(missionDuration) || 0;
    
    // Calculate collision probability: PC = SPD × VREL × AC × T
    const collisionProbability = SPD * VREL * AC * T;
    const collisionProbabilityPercentage = collisionProbability * 100;
    
    setRiskResults({
      probability: collisionProbability,
      probabilityPercentage: collisionProbabilityPercentage,
      isValidRange: collisionProbabilityPercentage < 19,
      parameters: { SPD, VREL, AC, T }
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <>
    <Header/>
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
            Mission Planning
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Space Mission Cost Calculator
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Calculate comprehensive mission costs including payload, systems, operations, and contingencies
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Mission Parameters</h2>
            
            <div className="space-y-6">
              {/* Payload Section */}
              <div className="border-b border-gray-700/30 pb-4">
                <h3 className="text-lg font-medium text-white mb-4">Payload & Launch</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Payload Mass (kg)</label>
                    <input
                      type="number"
                      name="payloadMass"
                      value={formData.payloadMass}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                      placeholder="1000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Launch Cost per kg ($)</label>
                    <input
                      type="number"
                      name="launchCostPerKg"
                      value={formData.launchCostPerKg}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                      placeholder="5000"
                    />
                  </div>
                </div>
              </div>

              {/* System Costs */}
              <div className="border-b border-gray-700/30 pb-4">
                <h3 className="text-lg font-medium text-white mb-4">System Components ($)</h3>
                <div className="space-y-4">
                  <input
                    type="number"
                    name="payloadCost"
                    value={formData.payloadCost}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    placeholder="Payload Cost"
                  />
                  <input
                    type="number"
                    name="busSubsystems"
                    value={formData.busSubsystems}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    placeholder="Bus & Subsystems Cost"
                  />
                  <input
                    type="number"
                    name="engineering"
                    value={formData.engineering}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    placeholder="Engineering Cost"
                  />
                  <input
                    type="number"
                    name="testingIntegration"
                    value={formData.testingIntegration}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    placeholder="Testing & Integration Cost"
                  />
                  <input
                    type="number"
                    name="groundSegment"
                    value={formData.groundSegment}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    placeholder="Ground Segment & Setup Cost"
                  />
                </div>
              </div>

              {/* Risk & Operations */}
              <div className="border-b border-gray-700/30 pb-4">
                <h3 className="text-lg font-medium text-white mb-4">Risk & Operations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Contingency Rate (%)</label>
                    <input
                      type="number"
                      name="contingencyRate"
                      value={formData.contingencyRate}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                      placeholder="20"
                      step="0.1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Insurance Rate (%)</label>
                    <input
                      type="number"
                      name="insuranceRate"
                      value={formData.insuranceRate}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                      placeholder="10"
                      step="0.1"
                    />
                  </div>
                </div>
              </div>

              {/* Mission Timeline */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Mission Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Mission Duration (years)</label>
                    <input
                      type="number"
                      name="missionTimeline"
                      value={formData.missionTimeline}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                      placeholder="5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Annual Operations Cost ($)</label>
                    <input
                      type="number"
                      name="annualOpsCost"
                      value={formData.annualOpsCost}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                      placeholder="500000"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={calculateCosts}
                className="w-full bg-white text-black hover:bg-gray-200 py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-105"
              >
                Calculate Mission Cost
              </button>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Cost Breakdown</h2>
            
            {results ? (
              <div className="space-y-6">
                {/* Main Costs */}
                <div className="border-b border-gray-700/30 pb-4">
                  <h3 className="text-lg font-medium text-white mb-4">1. Main Cost Components</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Payload:</span>
                      <span className="text-white">{formatCurrency(results.mainCosts.payload)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Bus & Subsystems:</span>
                      <span className="text-white">{formatCurrency(results.mainCosts.busSubsystems)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Engineering:</span>
                      <span className="text-white">{formatCurrency(results.mainCosts.engineering)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Testing & Integration:</span>
                      <span className="text-white">{formatCurrency(results.mainCosts.testingIntegration)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Ground Segment:</span>
                      <span className="text-white">{formatCurrency(results.mainCosts.groundSegment)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Launch ({results.payloadMass} kg):</span>
                      <span className="text-white">{formatCurrency(results.mainCosts.launch)}</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t border-gray-600 pt-2">
                      <span className="text-white">Main Costs Sum:</span>
                      <span className="text-white">{formatCurrency(results.mainCosts.total)}</span>
                    </div>
                  </div>
                </div>

                {/* Contingency & Subtotal */}
                <div className="border-b border-gray-700/30 pb-4">
                  <h3 className="text-lg font-medium text-white mb-4">2. Contingency Margin</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Margin Cost:</span>
                      <span className="text-white">{formatCurrency(results.marginCost)}</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t border-gray-600 pt-2">
                      <span className="text-white">Subtotal:</span>
                      <span className="text-white">{formatCurrency(results.subtotal)}</span>
                    </div>
                  </div>
                </div>

                {/* Insurance */}
                <div className="border-b border-gray-700/30 pb-4">
                  <h3 className="text-lg font-medium text-white mb-4">3. Insurance Cost</h3>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Insurance:</span>
                    <span className="text-white">{formatCurrency(results.insuranceCost)}</span>
                  </div>
                </div>

                {/* Operations */}
                <div className="border-b border-gray-700/30 pb-4">
                  <h3 className="text-lg font-medium text-white mb-4">4. Operations & Maintenance</h3>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total O&M Cost:</span>
                    <span className="text-white">{formatCurrency(results.operationMaintenanceCost)}</span>
                  </div>
                </div>

                {/* Total Mission Cost */}
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-white mb-2">Total Mission Cost</h3>
                  <div className="text-3xl font-bold text-white">
                    {formatCurrency(results.totalMissionCost)}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-400 py-12">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p>Enter mission parameters to calculate costs</p>
              </div>
            )}
          </div>
        </div>

        {/* Risk Calculator Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-gray-400/30 text-gray-300 px-4 py-2 rounded-full text-xs font-semibold mb-6 uppercase tracking-wide">
              Risk Assessment
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Collision Risk Calculator
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Calculate collision probability using the basic mathematical approximation: P<sub>C</sub> = S<sub>PD</sub> · V<sub>REL</sub> · A<sub>C</sub> · T
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Risk Calculator Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Risk Parameters</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Spatial Density (S<sub>PD</sub>) - debris objects per km³
                  </label>
                  <input
                    type="number"
                    name="spatialDensity"
                    value={riskData.spatialDensity}
                    onChange={handleRiskInputChange}
                    step="0.000001"
                    className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    placeholder="0.000001"
                  />
                  <p className="text-xs text-gray-400 mt-1">Depends on altitude and orbital inclination</p>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Relative Velocity (V<sub>REL</sub>) - km/s
                  </label>
                  <input
                    type="number"
                    name="relativeVelocity"
                    value={riskData.relativeVelocity}
                    onChange={handleRiskInputChange}
                    step="0.1"
                    className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    placeholder="10"
                  />
                  <p className="text-xs text-gray-400 mt-1">Typically 6-14 km/s in LEO</p>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Cross-sectional Area (A<sub>C</sub>) - km²
                  </label>
                  <input
                    type="number"
                    name="crossSectionalArea"
                    value={riskData.crossSectionalArea}
                    onChange={handleRiskInputChange}
                    step="0.000001"
                    className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    placeholder="0.000001"
                  />
                  <p className="text-xs text-gray-400 mt-1">Satellite's projected cross-sectional area</p>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Mission Duration (T) - seconds
                  </label>
                  <input
                    type="number"
                    name="missionDuration"
                    value={riskData.missionDuration}
                    onChange={handleRiskInputChange}
                    className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    placeholder="31536000"
                  />
                  <p className="text-xs text-gray-400 mt-1">Total mission exposure time (1 year = 31,536,000 seconds)</p>
                </div>

                <button 
                  onClick={calculateRisk}
                  className="w-full bg-white text-black hover:bg-gray-200 py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-105">
                  Calculate Collision Risk
                </button>
              </div>
            </div>

            {/* Risk Results & Information */}
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Risk Analysis</h3>
              
              <div className="space-y-6">
                {/* Risk Result Display */}
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-white mb-2">Collision Probability (P<sub>C</sub>)</h4>
                  {riskResults ? (
                    <div>
                      <div className="text-2xl font-bold text-white mb-2">
                        {(riskResults.probabilityPercentage).toExponential(4)}%
                      </div>
                      <div className="text-sm text-gray-300">
                        ({riskResults.probability.toExponential(6)} probability)
                      </div>
                      {!riskResults.isValidRange && (
                        <div className="mt-2 text-xs text-yellow-300 bg-yellow-500/20 p-2 rounded">
                          ⚠️ Warning: Probability exceeds 19% - approximation may be inaccurate
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-gray-400">
                      Enter parameters to calculate
                    </div>
                  )}
                </div>

                {/* Formula Explanation */}
                <div className="border-t border-red-700/30 pt-6">
                  <h4 className="text-lg font-medium text-white mb-4">Formula Used</h4>
                  <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-gray-300">
                    P<sub>C</sub> = S<sub>PD</sub> × V<sub>REL</sub> × A<sub>C</sub> × T
                  </div>
                </div>

                {/* Limitations */}
                <div className="border-t border-gray-700/30 pt-6">
                  <h4 className="text-lg font-medium text-white mb-4">Limitations</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Valid only for collision probabilities less than 19%
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Not suitable for close encounters with tracked objects
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Doesn't account for satellite maneuverability
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Ignores debris size distribution variations
                    </li>
                  </ul>
                </div>

                {/* Advanced Notice */}
                <div className="bg-white/10 border border-gray-600/30 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">Advanced Calculations Required</h5>
                  <p className="text-xs text-gray-300">
                    For high-risk close encounters with known objects, complex statistical methods using error covariance matrices are required to account for positional uncertainties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default CostCalc;