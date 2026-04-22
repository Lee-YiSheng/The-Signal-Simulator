import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

function App() {
  // State for our three psychological variables
  const [desirability, setDesirability] = useState(50);
  const [fear, setFear] = useState(50);
  const [overperception, setOverperception] = useState(50);

  // Logic: Calculate Internal Thought
  const getInternalThought = () => {
    if (overperception > 70) return "She is definitely romantically interested. This is a date.";
    if (overperception < 30) return "She just wants to be friends. It's just a normal meal.";
    return "Maybe she likes me, but I am not entirely sure yet.";
  };

  // Logic: Calculate Real-World Action
  const getAction = () => {
    if (fear > 70) return "Act completely platonic and guarded to protect the friendship.";
    if (fear <= 70 && overperception > 60) return "Flirt openly and make a direct romantic move.";
    return "Test the waters subtly during the meal and look for more clues.";
  };

  // Logic: Calculate Survey Response
  const getSurveyResponse = () => {
    if (desirability > 70) return "Attraction plays no role; I purely value her personality and our platonic friendship.";
    if (desirability < 30) return "I am physically attracted to her and actively using this friendship to pursue dating.";
    return "I am attracted to her, but I value the friendship first and foremost.";
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header & Scenario Context */}
        <header className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">The Signal Simulator</h1>
          <p className="text-gray-600 mb-4">The Friendship-to-Romance Data Filter</p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r">
            <p className="font-medium text-indigo-900">
              <span className="font-bold">Scenario:</span> A female friend initiates a one-on-one meal after weeks of subtle signaling.
            </p>
          </div>
        </header>

        {/* Interactive Sliders */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">Psychological Variables</h2>
          
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
        <section className="flex flex-col items-center space-y-4">
          
          {/* Node 1: Internal Thought */}
          <div className="w-full bg-indigo-50 border border-indigo-200 p-5 rounded-xl shadow-sm text-center transition-all duration-300">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-2">1. Raw Internal Thought</h3>
            <p className="text-lg font-medium text-indigo-950">"{getInternalThought()}"</p>
          </div>

          <ArrowDown className="text-gray-400" size={24} />

          {/* Node 2: Real-World Action */}
          <div className="w-full bg-amber-50 border border-amber-200 p-5 rounded-xl shadow-sm text-center transition-all duration-300">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-2">2. Real-World Action Taken</h3>
            <p className="text-lg font-medium text-amber-950">"{getAction()}"</p>
          </div>

          <ArrowDown className="text-gray-400" size={24} />

          {/* Node 3: Survey Response */}
          <div className="w-full bg-emerald-50 border border-emerald-200 p-5 rounded-xl shadow-sm text-center transition-all duration-300">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-2">3. Response on a Social Science Survey</h3>
            <p className="text-lg font-medium text-emerald-950">"{getSurveyResponse()}"</p>
          </div>

        </section>

      </div>
    </div>
  );
}

export default App;