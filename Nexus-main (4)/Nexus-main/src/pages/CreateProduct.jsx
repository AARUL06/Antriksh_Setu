import { useState } from "react";
import { Send, ChevronRight, ChevronDown, Play, ShoppingCart, Star, Package, Zap, Shield, Upload, X } from "lucide-react";

function NexusWorkflow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userInput, setUserInput] = useState("");
  const [projectIdea, setProjectIdea] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [expandedModules, setExpandedModules] = useState({});
  const [selectedModule, setSelectedModule] = useState(null);
  const [sustainabilityScore, setSustainabilityScore] = useState(45);
  const [riskScore, setRiskScore] = useState("Severe");
  const [cost, setCost] = useState(8500000);
  const [logs, setLogs] = useState([]);
  
  const [projectParams, setProjectParams] = useState({
    reflectorArea: 500,
    lifetime: 25,
    deorbitMethod: "Passive Drag"
  });

  const moduleTree = {
    Essential: {
      Power: "Power-Standard-V3.json",
      "De-Orbit System": "De-Orbit_System.json",
      Communication: "Communication-Standard.json",
      "Thermal Control": "Thermal-Control.json"
    },
    Payload: {
      "Reflector Array": "Reflector_Array.json",
      "Optical System": "Optical_System.json"
    },
    Structure: {
      "Primary Frame": "Primary_Frame.json",
      "Deployment Mechanism": "Deployment_Mechanism.json"
    },
    Launch: {
      "Launch Vehicle": "Launch_Vehicle.json",
      "Integration Kit": "Integration_Kit.json"
    }
  };

  const handleIdeaSubmit = () => {
    if (!userInput.trim()) return;
    
    setProjectIdea(userInput);
    setTimeout(() => {
      setAiResponse(
        "Understood. Initiating Base Project assembly for a High-Aperture Active Reflector mission. 14 Essential Modules and 4 unique Project-Specific Modules integrated. Proceed to customization and scoring."
      );
    }, 1000);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const openProjectStudio = () => {
    setCurrentStep(2);
    addLog("Project Studio initialized. Loading module configuration...");
  };

  const toggleModule = (category) => {
    setExpandedModules(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const selectModule = (category, moduleName) => {
    setSelectedModule({ category, moduleName });
    addLog(`Opened ${moduleName} for editing`);
  };

  const addLog = (message) => {
    setLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), message }]);
  };

  const updateReflectorArea = (value) => {
    const newValue = parseInt(value);
    setProjectParams(prev => ({ ...prev, reflectorArea: newValue }));
    
    const scoreDiff = Math.floor((500 - newValue) / 20);
    const newScore = Math.min(100, 45 + scoreDiff);
    setSustainabilityScore(newScore);
    
    if (newScore > 70) setRiskScore("Moderate");
    else if (newScore > 50) setRiskScore("High");
    else setRiskScore("Severe");
    
    const costReduction = (500 - newValue) * 5000;
    setCost(8500000 - costReduction);
    
    addLog(`Reflector size changed to ${newValue}m². Sustainability Score ${newScore > sustainabilityScore ? '+' : ''}${newScore - sustainabilityScore}. Cost ${costReduction > 0 ? '-' : '+'}$${Math.abs(costReduction).toLocaleString()}`);
  };

  const updateDeorbitMethod = (method) => {
    setProjectParams(prev => ({ ...prev, deorbitMethod: method }));
    
    if (method === "Active Propulsion") {
      setSustainabilityScore(85);
      setRiskScore("Low");
      setCost(prev => prev + 250000);
      addLog("De-orbit method changed to Active Propulsion. Sustainability Score +28. Cost +$250,000. Project now Nexus Certified!");
    } else {
      const currentReflector = projectParams.reflectorArea;
      const baseScore = Math.min(100, 45 + Math.floor((500 - currentReflector) / 20));
      setSustainabilityScore(baseScore);
      setRiskScore(baseScore > 50 ? "High" : "Severe");
      setCost(prev => prev - 250000);
      addLog("De-orbit method changed to Passive Drag. Sustainability Score decreased. Cost -$250,000");
    }
  };

  const goToMarketplace = () => {
    setCurrentStep(3);
  };

  // Step 1: Gemini-Style Interface
  if (currentStep === 1) {
    return (
      <div className="min-h-screen mt-[70px] bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-black/10 to-gray-900/20"></div>
        
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-4xl w-full">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Nexus: AI Project Architect
              </h1>
              <p className="text-xl text-gray-300">
                Turn your space vision into a compliant, scored Project File.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8">
              {!aiResponse ? (
                <>
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-3 text-lg">
                      Describe your mission concept...
                    </label>
                    <textarea
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="Example: A satellite that illuminates the dark part of a place on earth during night, something that is not possible with current tech."
                      className="w-full bg-black/50 border border-gray-600/50 text-white placeholder-gray-500 p-4 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none"
                      rows={6}
                    />
                  </div>

                  {/* File Upload Section */}
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-3 text-sm">
                      Upload Supporting Documents (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-600/50 rounded-lg p-6 text-center hover:border-gray-500/50 transition-all">
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                        accept=".pdf,.doc,.docx,.txt,.json,.csv"
                      />
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <Upload className="w-12 h-12 text-gray-400 mb-2" />
                        <span className="text-gray-300 mb-1">
                          Click to upload or drag and drop
                        </span>
                        <span className="text-gray-500 text-xs">
                          PDF, DOC, TXT, JSON, CSV (Max 10MB each)
                        </span>
                      </label>
                    </div>

                    {/* Uploaded Files List */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-black/50 border border-gray-600/50 rounded-lg p-3"
                          >
                            <div className="flex items-center gap-3">
                              <Package className="w-5 h-5 text-gray-400" />
                              <div>
                                <p className="text-white text-sm">{file.name}</p>
                                <p className="text-gray-500 text-xs">
                                  {(file.size / 1024).toFixed(2)} KB
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => removeFile(index)}
                              className="text-gray-400 hover:text-red-400 transition-colors"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={handleIdeaSubmit}
                    disabled={!userInput.trim()}
                    className="w-full bg-white text-black hover:bg-gray-200 disabled:bg-gray-600 disabled:text-gray-400 py-4 px-6 rounded-lg font-medium transition-all transform hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Analyze Mission Concept
                  </button>
                </>
              ) : (
                <>
                  <div className="mb-6 p-4 bg-white/10 rounded-lg">
                    <p className="text-gray-400 text-sm mb-2">Your Input:</p>
                    <p className="text-white">{projectIdea}</p>
                    {uploadedFiles.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-600">
                        <p className="text-gray-400 text-xs mb-2">Attached Files:</p>
                        <div className="flex flex-wrap gap-2">
                          {uploadedFiles.map((file, index) => (
                            <span
                              key={index}
                              className="text-xs bg-black/50 border border-gray-600 px-2 py-1 rounded"
                            >
                              {file.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-8 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30">
                    <p className="text-gray-400 text-sm mb-2">AI Analysis:</p>
                    <p className="text-white leading-relaxed">{aiResponse}</p>
                  </div>
                  
                  <button
                    onClick={openProjectStudio}
                    className="w-full bg-white text-black hover:bg-gray-200 py-4 px-6 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Open Project Studio
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <style>{`
          .stars, .stars2, .stars3 {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }
          .stars {
            background-image: radial-gradient(2px 2px at 20px 30px, #eee, transparent),
              radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.8), transparent),
              radial-gradient(1px 1px at 90px 40px, #fff, transparent);
            background-repeat: repeat;
            background-size: 200px 100px;
            animation: twinkle 10s ease-in-out infinite;
          }
          .stars2 {
            background-image: radial-gradient(1px 1px at 40px 60px, #fff, transparent),
              radial-gradient(1px 1px at 120px 10px, rgba(255, 255, 255, 0.7), transparent);
            background-repeat: repeat;
            background-size: 300px 120px;
            animation: twinkle 8s ease-in-out infinite reverse;
          }
          .stars3 {
            background-image: radial-gradient(1px 1px at 60px 20px, rgba(255, 255, 255, 0.5), transparent),
              radial-gradient(2px 2px at 140px 40px, rgba(255, 255, 255, 0.3), transparent);
            background-repeat: repeat;
            background-size: 250px 140px;
            animation: twinkle 12s ease-in-out infinite;
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  // Step 2 & 3: VS Code-Style Interface
  if (currentStep === 2) {
    return (
      <div className="min-h-screen mt-[70px] bg-[#1e1e1e] text-gray-300 flex flex-col">
        {/* Top Bar */}
        <div className="bg-[#323233] border-b border-gray-700 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-white font-semibold">Nexus Project Studio</h1>
            <span className="text-gray-400 text-sm">High-Aperture Active Reflector Mission</span>
          </div>
          <button
            onClick={goToMarketplace}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm font-medium transition-all flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Go to Marketplace
          </button>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Activity Bar */}
          <div className="w-12 bg-[#333333] border-r border-gray-700 flex flex-col items-center py-4 gap-4">
            <div className="w-8 h-8 flex items-center justify-center text-white bg-[#007acc] rounded">
              <Package className="w-5 h-5" />
            </div>
          </div>

          {/* Sidebar - Module Tree */}
          <div className="w-64 bg-[#252526] border-r border-gray-700 overflow-y-auto">
            <div className="p-3 border-b border-gray-700">
              <h2 className="text-xs uppercase text-gray-400 font-semibold">Project Modules</h2>
            </div>
            
            <div className="p-2">
              {Object.entries(moduleTree).map(([category, modules]) => (
                <div key={category} className="mb-2">
                  <button
                    onClick={() => toggleModule(category)}
                    className="w-full flex items-center gap-2 text-left py-1.5 px-2 hover:bg-[#2a2d2e] rounded text-sm"
                  >
                    {expandedModules[category] ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                    <span className="text-white">{category}</span>
                  </button>
                  
                  {expandedModules[category] && (
                    <div className="ml-6 mt-1">
                      {Object.entries(modules).map(([name]) => (
                        <button
                          key={name}
                          onClick={() => selectModule(category, name)}
                          className={`w-full text-left py-1.5 px-2 rounded text-sm hover:bg-[#2a2d2e] ${
                            selectedModule?.moduleName === name ? 'bg-[#37373d]' : ''
                          }`}
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Editor Panel */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="bg-[#2d2d30] border-b border-gray-700 px-4 py-2">
              <div className="text-sm text-gray-300">
                {selectedModule ? `${selectedModule.category}/${selectedModule.moduleName}` : 'No module selected'}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-[#1e1e1e]">
              {selectedModule?.moduleName === "Reflector Array" && (
                <div className="space-y-6">
                  <div className="bg-[#252526] border border-gray-700 rounded p-4">
                    <h3 className="text-white font-semibold mb-4">Module Configuration</h3>
                    
                    <div className="space-y-4 font-mono text-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 w-48">"Max_Lifetime_Years":</span>
                        <input
                          type="number"
                          value={projectParams.lifetime}
                          onChange={(e) => setProjectParams(prev => ({ ...prev, lifetime: e.target.value }))}
                          className="bg-[#1e1e1e] border border-gray-600 text-white px-3 py-1 rounded w-24"
                        />
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 w-48">"Reflector_Area_m2":</span>
                        <input
                          type="number"
                          value={projectParams.reflectorArea}
                          onChange={(e) => updateReflectorArea(e.target.value)}
                          className="bg-[#1e1e1e] border border-gray-600 text-white px-3 py-1 rounded w-24"
                        />
                        <span className="text-gray-500 text-xs">Current: {projectParams.reflectorArea}m²</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedModule?.moduleName === "De-Orbit System" && (
                <div className="space-y-6">
                  <div className="bg-[#252526] border border-gray-700 rounded p-4">
                    <h3 className="text-white font-semibold mb-4">De-Orbit Configuration</h3>
                    
                    <div className="space-y-4 font-mono text-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 w-48">"Method":</span>
                        <select
                          value={projectParams.deorbitMethod}
                          onChange={(e) => updateDeorbitMethod(e.target.value)}
                          className="bg-[#1e1e1e] border border-gray-600 text-white px-3 py-1 rounded"
                        >
                          <option value="Passive Drag">Passive Drag</option>
                          <option value="Active Propulsion">Active Propulsion</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!selectedModule && (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Select a module from the tree to begin editing</p>
                </div>
              )}
            </div>

            {/* Scoring Panel */}
            <div className="h-64 bg-[#252526] border-t border-gray-700 overflow-y-auto">
              <div className="border-b border-gray-700 px-4 py-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Scoring Console</h3>
                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${sustainabilityScore >= 80 ? 'bg-green-500' : sustainabilityScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                    <span>Sustainability: {sustainabilityScore}/100</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Risk: {riskScore}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Cost: ${(cost / 1000000).toFixed(2)}M</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 space-y-4">
                {/* Original Prompt Display */}
                <div className="bg-[#1e1e1e] border border-gray-700 rounded p-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-gray-400 uppercase font-semibold">Original Mission Concept</p>
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Edit Prompt
                    </button>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{projectIdea}</p>
                  {uploadedFiles.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-gray-700">
                      <p className="text-xs text-gray-500 mb-1">Attached: {uploadedFiles.length} file(s)</p>
                    </div>
                  )}
                </div>

                {/* Console Logs */}
                <div className="font-mono text-xs space-y-2">
                  <p className="text-gray-500">--- Configuration Changes ---</p>
                  {logs.map((log, i) => (
                    <div key={i} className="text-gray-300">
                      <span className="text-gray-500">[{log.time}]</span> {log.message}
                    </div>
                  ))}
                  {logs.length === 0 && (
                    <p className="text-gray-500 italic">No changes made yet. Start editing modules above.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Score Widget */}
          <div className="w-80 bg-[#252526] border-l border-gray-700 p-4 overflow-y-auto">
            <h3 className="text-white font-semibold mb-4">Project Scorecard</h3>
            
            <div className="space-y-4">
              <div className="bg-[#1e1e1e] border border-gray-700 rounded p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Sustainability Score</span>
                  <span className="text-2xl font-bold text-white">{sustainabilityScore}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      sustainabilityScore >= 80 ? 'bg-green-500' : sustainabilityScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${sustainabilityScore}%` }}
                  ></div>
                </div>
                {sustainabilityScore >= 80 && (
                  <div className="mt-2 text-xs text-green-400 flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Nexus Certified
                  </div>
                )}
              </div>

              <div className="bg-[#1e1e1e] border border-gray-700 rounded p-4">
                <div className="text-sm text-gray-400 mb-2">Risk Assessment</div>
                <div className={`text-lg font-semibold ${
                  riskScore === "Low" ? 'text-green-400' : 
                  riskScore === "Moderate" ? 'text-yellow-400' : 
                  riskScore === "High" ? 'text-orange-400' : 'text-red-400'
                }`}>
                  {riskScore}
                </div>
              </div>

              <div className="bg-[#1e1e1e] border border-gray-700 rounded p-4">
                <div className="text-sm text-gray-400 mb-2">Estimated Cost</div>
                <div className="text-xl font-bold text-white">
                  ${(cost / 1000000).toFixed(2)}M USD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Amazon-Style Marketplace
  if (currentStep === 3) {
    return (
      <div className="min-h-screen mt-[70px] bg-gray-50">
        {/* Header */}
        <header className="bg-[#131921] text-white">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Nexus Marketplace</h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentStep(2)}
                className="text-sm hover:underline"
              >
                ← Back to Studio
              </button>
            </div>
          </div>
          
          <div className="bg-[#232f3e] border-t border-gray-700">
            <div className="container mx-auto px-4 py-3 flex items-center gap-6 text-sm">
              <button className="hover:underline">All Categories</button>
              <button className="hover:underline">Propulsion</button>
              <button className="hover:underline">Communication</button>
              <button className="hover:underline">Power Systems</button>
              <button className="hover:underline">Nexus Certified</button>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-6">
            {/* Filters Sidebar */}
            <aside className="w-64 flex-shrink-0">
              <div className="bg-white border border-gray-300 rounded p-4">
                <h3 className="font-bold mb-4 text-gray-900">Filters</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-2 text-gray-900">Module Type</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Propulsion</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span>De-Orbit Systems</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Communication</span>
                    </label>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-2 text-gray-900">Orbit Class</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>LEO</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span>GEO</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2 text-gray-900">Certification</h4>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="flex items-center gap-1">
                      <Shield className="w-4 h-4 text-green-600" />
                      Nexus Certified Only
                    </span>
                  </label>
                </div>
              </div>
            </aside>

            {/* Product Listings */}
            <main className="flex-1">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  De-Orbit Systems <span className="text-gray-600 text-base">(24 results)</span>
                </h2>
              </div>

              <div className="space-y-4">
                {/* Product 1 */}
                <div className="bg-white border border-gray-300 rounded hover:shadow-lg transition-shadow">
                  <div className="p-4 flex gap-4">
                    <div className="w-48 h-48 flex-shrink-0 bg-gray-100 rounded flex items-center justify-center border border-gray-200">
                      <Zap className="w-20 h-20 text-gray-400" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-600 hover:text-orange-600 mb-2">
                        ACTIVE DE-ORBIT THRUSTER MODULE - PMD-5000 Series
                        <span className="ml-2 inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          <Shield className="w-3 h-3" />
                          Nexus Certified
                        </span>
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex text-orange-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-blue-600">1,247 ratings</span>
                      </div>

                      <ul className="space-y-1.5 text-sm text-gray-700 mb-3">
                        <li className="flex items-start gap-2">
                          <span>🚀</span>
                          <span><strong>PMD Guaranteed:</strong> Meets 5-Year De-orbit Requirement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>⚖️</span>
                          <span><strong>Mass:</strong> 3.5 kg (Dry)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>⚡</span>
                          <span><strong>Thrust:</strong> 1 N (Max)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>🛡️</span>
                          <span><strong>Risk Rating:</strong> Ultra-Low Failure Probability (99.99%)</span>
                        </li>
                      </ul>

                      <div className="flex items-center gap-4">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">$45,000</span>
                          <span className="text-sm text-gray-600 ml-2">(Unit)</span>
                        </div>
                        <div className="text-sm text-green-700">
                          Volume Discount: $40,000 for 5+ units
                        </div>
                      </div>

                      <div className="mt-2 text-sm text-gray-600">
                        <span className="font-semibold">Ships in:</span> 12 Weeks
                      </div>

                      <div className="mt-3 flex items-center gap-2 text-sm">
                        <span className="text-gray-600">Sold by:</span>
                        <a href="#" className="text-blue-600 hover:underline font-medium">
                          AeroSafe Dynamics Inc.
                        </a>
                        <div className="flex text-orange-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="w-32 flex flex-col gap-2">
                      <button className="bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 py-2 px-4 rounded text-sm font-medium">
                        Add to Cart
                      </button>
                      <button className="bg-[#ffa724] hover:bg-[#fa8900] text-gray-900 py-2 px-4 rounded text-sm font-medium">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="bg-white border border-gray-300 rounded hover:shadow-lg transition-shadow">
                  <div className="p-4 flex gap-4">
                    <div className="w-48 h-48 flex-shrink-0 bg-gray-100 rounded flex items-center justify-center border border-gray-200">
                      <Package className="w-20 h-20 text-gray-400" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-600 hover:text-orange-600 mb-2">
                        PASSIVE DRAG AUGMENTATION SAIL - EcoOrbit DS-250
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex text-orange-400">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                          <Star className="w-4 h-4" />
                        </div>
                        <span className="text-sm text-blue-600">843 ratings</span>
                      </div>

                      <ul className="space-y-1.5 text-sm text-gray-700 mb-3">
                        <li className="flex items-start gap-2">
                          <span>📐</span>
                          <span><strong>Sail Area:</strong> 10 m² (Deployed)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>⚖️</span>
                          <span><strong>Mass:</strong> 0.8 kg (Compact Design)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>🔄</span>
                          <span><strong>De-orbit Time:</strong> LEO 550km in 18-24 months</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>💚</span>
                          <span><strong>Sustainability:</strong> Zero Propellant, Passive System</span>
                        </li>
                      </ul>

                      <div className="flex items-center gap-4">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">$8,500</span>
                          <span className="text-sm text-gray-600 ml-2">(Unit)</span>
                        </div>
                        <div className="text-sm text-green-700">
                          Volume Discount: $7,200 for 10+ units
                        </div>
                      </div>

                      <div className="mt-2 text-sm text-gray-600">
                        <span className="font-semibold">Ships in:</span> 6 Weeks
                      </div>

                      <div className="mt-3 flex items-center gap-2 text-sm">
                        <span className="text-gray-600">Sold by:</span>
                        <a href="#" className="text-blue-600 hover:underline font-medium">
                          GreenSpace Technologies
                        </a>
                        <div className="flex text-orange-400">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                          <Star className="w-3 h-3" />
                        </div>
                      </div>
                    </div>

                    <div className="w-32 flex flex-col gap-2">
                      <button className="bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 py-2 px-4 rounded text-sm font-medium">
                        Add to Cart
                      </button>
                      <button className="bg-[#ffa724] hover:bg-[#fa8900] text-gray-900 py-2 px-4 rounded text-sm font-medium">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product 3 */}
                <div className="bg-white border border-gray-300 rounded hover:shadow-lg transition-shadow">
                  <div className="p-4 flex gap-4">
                    <div className="w-48 h-48 flex-shrink-0 bg-gray-100 rounded flex items-center justify-center border border-gray-200">
                      <Zap className="w-20 h-20 text-gray-400" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-600 hover:text-orange-600 mb-2">
                        HYBRID DE-ORBIT SYSTEM - SmartExit HDS-3000
                        <span className="ml-2 inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          <Shield className="w-3 h-3" />
                          Nexus Certified
                        </span>
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex text-orange-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-blue-600">2,104 ratings</span>
                        <span className="bg-orange-600 text-white text-xs px-2 py-0.5 rounded">Best Seller</span>
                      </div>

                      <ul className="space-y-1.5 text-sm text-gray-700 mb-3">
                        <li className="flex items-start gap-2">
                          <span>🔀</span>
                          <span><strong>Dual Mode:</strong> Drag Sail + Cold Gas Thruster Backup</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>⚖️</span>
                          <span><strong>Mass:</strong> 2.1 kg (Complete System)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>⚡</span>
                          <span><strong>Thrust:</strong> 0.5 N (Emergency Mode)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>🎯</span>
                          <span><strong>Reliability:</strong> 99.95% Success Rate (3-Year Track Record)</span>
                        </li>
                      </ul>

                      <div className="flex items-center gap-4">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">$28,500</span>
                          <span className="text-sm text-gray-600 ml-2">(Unit)</span>
                        </div>
                        <div className="text-sm text-green-700">
                          Volume Discount: $25,000 for 8+ units
                        </div>
                      </div>

                      <div className="mt-2 text-sm text-gray-600">
                        <span className="font-semibold">Ships in:</span> 8 Weeks
                      </div>

                      <div className="mt-3 flex items-center gap-2 text-sm">
                        <span className="text-gray-600">Sold by:</span>
                        <a href="#" className="text-blue-600 hover:underline font-medium">
                          OrbitLogistics Systems
                        </a>
                        <div className="flex text-orange-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="w-32 flex flex-col gap-2">
                      <button className="bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 py-2 px-4 rounded text-sm font-medium">
                        Add to Cart
                      </button>
                      <button className="bg-[#ffa724] hover:bg-[#fa8900] text-gray-900 py-2 px-4 rounded text-sm font-medium">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="mt-6 flex items-center justify-center gap-2">
                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
                  Previous
                </button>
                <button className="px-3 py-1 bg-[#ffa724] text-white rounded font-medium">
                  1
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
                  2
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
                  3
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
                  Next
                </button>
              </div>
            </main>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#232f3e] text-white mt-12 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Nexus Marketplace. All rights reserved. | Terms of Service | Privacy Policy
            </p>
          </div>
        </footer>
      </div>
    );
  }

  return null;
}

export default NexusWorkflow;