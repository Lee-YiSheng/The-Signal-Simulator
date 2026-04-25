import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

function App() {
  // State for Scenario Selection
  const [scenarioIndex, setScenarioIndex] = useState(0);

  // State for our three psychological variables
  const [desirability, setDesirability] = useState(50);
  const [fear, setFear] = useState(50);
  const [overperception, setOverperception] = useState(50);

  const scenarios = [
    "A female friend asks for a one-on-one meal.",
    "A late-night text saying 'thinking of you'.",
    "A lingering hug after a group hangout."
  ];

  // Logic: Calculate Internal Thought based on Scenario AND Overperception
  const getInternalThought = () => {
    if (scenarioIndex === 0) { // Meal
      if (overperception > 70) return "She is definitely romantically interested. This is a date.";
      if (overperception < 30) return "She just wants to be friends. It's just a normal meal.";
      return "Maybe she likes me, but I am not entirely sure yet.";
    } else if (scenarioIndex === 1) { // Text
      if (overperception > 70) return "She's into me and wants to take things further.";
      if (overperception < 30) return "She's probably just bored and scrolling through her contacts.";
      return "She's thinking of me, but I don't know in what context.";
    } else { // Hug
      if (overperception > 70) return "That physical touch meant she wants to be more than friends.";
      if (overperception < 30) return "She's just a physically affectionate person with everyone.";
      return "That hug lasted a bit long, I wonder if it meant something.";
    }
  };

  // Logic: Calculate Real-World Action
  const getAction = () => {
    if (fear > 70) return "Act completely platonic and guarded to protect the friendship.";
    if (fear <= 70 && overperception > 60) return "Flirt openly and escalate the situation.";
    return "Test the waters subtly and look for more clues before committing.";
  };

  // Logic: Calculate Survey Response
  const getSurveyResponse = () => {
    if (desirability > 70) return "Attraction plays no role; I purely value her personality and our platonic friendship.";
    if (desirability < 30) return "I am physically attracted to her and actively using this friendship to pursue dating.";
    return "I am attracted to her, but I value the friendship first and foremost.";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header & Scenario Selection */}
        <header className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">The Signal Simulator</h1>
          <p className="text-gray-600 mb-6">What We Feel vs. What We Report</p>
          
          <div className="flex flex-col space-y-2">
            <label htmlFor="scenario" className="text-sm font-bold text-indigo-900 uppercase tracking-wider">
              Select a Scenario:
            </label>
            <select 
              id="scenario"
              value={scenarioIndex} 
              onChange={(e) => setScenarioIndex(Number(e.target.value))}
              className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-900 font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              {scenarios.map((scen, idx) => (
                <option key={idx} value={idx}>{scen}</option>
              ))}
            </select>
          </div>
        </header>

        {/* Interactive Sliders */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">Psychological Filters</h2>
          
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-medium text-gray-700">Evolutionary Overperception (EMT)</label>
              <span className="text-sm font-bold text-indigo-600">{overperception}%</span>
            </div>
            <input 
              type="range" min="0" max="100" value={overperception} 
              onChange={(e) => setOverperception(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <p className="text-xs text-gray-500 mt-1">Tendency to interpret friendly signals as romantic.</p>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-medium text-gray-700">Fear of Friendship Loss</label>
              <span className="text-sm font-bold text-amber-600">{fear}%</span>
            </div>
            <input 
              type="range" min="0" max="100" value={fear} 
              onChange={(e) => setFear(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <p className="text-xs text-gray-500 mt-1">Anxiety about ruining the existing platonic bond.</p>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-medium text-gray-700">Social Desirability Bias</label>
              <span className="text-sm font-bold text-emerald-600">{desirability}%</span>
            </div>
            <input 
              type="range" min="0" max="100" value={desirability} 
              onChange={(e) => setDesirability(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <p className="text-xs text-gray-500 mt-1">Pressure to appear as a "good, purely platonic" friend on a survey.</p>
          </div>
        </section>

        {/* Visual Flow / Outcomes */}
        <section className="flex flex-col space-y-6">
          
          {/* Section 1: The Internal Reality */}
          <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 bg-white shadow-sm space-y-4 pt-8">
            <span className="absolute -top-3 left-6 bg-gray-50 px-3 text-xs font-bold text-gray-500 uppercase tracking-wider rounded-full border border-gray-200">
              The Internal Reality
            </span>
            
            <div className="w-full bg-indigo-50 border border-indigo-200 p-4 rounded-lg text-center transition-all duration-300">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1">Raw Internal Thought</h3>
              <p className="text-md font-medium text-indigo-950">"{getInternalThought()}"</p>
            </div>

            <ArrowDown className="text-gray-400 mx-auto" size={20} />

            <div className="w-full bg-amber-50 border border-amber-200 p-4 rounded-lg text-center transition-all duration-300">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-1">Real-World Action Taken</h3>
              <p className="text-md font-medium text-amber-950">"{getAction()}"</p>
            </div>
          </div>

          <ArrowDown className="text-gray-400 mx-auto" size={28} strokeWidth={3} />

          {/* Section 2: The Surveyed Reality */}
          <div className="relative border-2 border-solid border-emerald-300 rounded-xl p-6 bg-emerald-50 shadow-sm pt-8">
            <span className="absolute -top-3 left-6 bg-emerald-100 px-3 text-xs font-bold text-emerald-700 uppercase tracking-wider rounded-full border border-emerald-300">
              The Surveyed Reality
            </span>

            <div className="w-full bg-white border border-emerald-200 p-5 rounded-lg text-center transition-all duration-300 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-2">Reported Survey Data</h3>
              <p className="text-lg font-medium text-emerald-950">"{getSurveyResponse()}"</p>
            </div>
          </div>

        </section>

        {/* Takeaway Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r shadow-sm mt-8">
          <h3 className="font-bold text-blue-900 mb-2">The Takeaway</h3>
          <p className="text-blue-800 text-sm leading-relaxed">
            Survey data on love is heavily filtered by social risk. What looks like a purely platonic friendship on paper often hides intense biological and psychological negotiation. Try adjusting the sliders. You might recognize yourself.
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;