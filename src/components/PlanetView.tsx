import { useGame } from '../context/GameContext';
import { Quiz } from './Quiz';
import { ArrowLeft, BookOpen, Globe } from 'lucide-react';

export const PlanetView = () => {
  const { gameState, planets, returnToSolarSystem, startQuiz } = useGame();
  
  const currentPlanet = planets.find(p => p.id === gameState.currentPlanet);
  
  if (!currentPlanet) {
    return null;
  }

  if (gameState.isQuizMode) {
    return <Quiz />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
      </div>

      {/* Back button */}
      <button
        onClick={returnToSolarSystem}
        className="fixed top-8 left-8 z-20 flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-gray-700/80 transition-colors border border-gray-600"
      >
        <ArrowLeft size={20} />
        Back to Solar System
      </button>

      <div className="relative z-10 pt-24 pb-12 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Planet Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div
                className="rounded-full shadow-2xl animate-pulse"
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: currentPlanet.color,
                  boxShadow: `0 0 60px ${currentPlanet.color}60`,
                }}
              >
                <div 
                  className="w-full h-full rounded-full opacity-40"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)`,
                  }}
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {currentPlanet.name}
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              {currentPlanet.description}
            </p>
          </div>

          {/* Planet Information Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Basic Info */}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-600">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-blue-400" size={24} />
                <h2 className="text-2xl font-bold text-white">Planet Facts</h2>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span className="text-gray-400">Distance from Sun:</span>
                  <span className="font-semibold">{currentPlanet.distanceFromSun}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Diameter:</span>
                  <span className="font-semibold">{currentPlanet.diameter}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Day Length:</span>
                  <span className="font-semibold">{currentPlanet.dayLength}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Year Length:</span>
                  <span className="font-semibold">{currentPlanet.yearLength}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Number of Moons:</span>
                  <span className="font-semibold">{currentPlanet.moons}</span>
                </div>
              </div>
            </div>

            {/* Quiz Challenge */}
            <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-purple-400" size={24} />
                <h2 className="text-2xl font-bold text-white">Knowledge Challenge</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Test your knowledge about {currentPlanet.name} with our interactive quiz. Answer at least 70% correctly to unlock the next planet!
              </p>
              <div className="space-y-3 text-sm text-gray-400 mb-6">
                <div className="flex justify-between">
                  <span>Questions:</span>
                  <span className="font-semibold">{currentPlanet.quiz.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Passing Score:</span>
                  <span className="font-semibold">70%</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Limit:</span>
                  <span className="font-semibold">None</span>
                </div>
              </div>
              
              <button
                onClick={startQuiz}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Quiz Challenge
              </button>
            </div>
          </div>

          {/* Did You Know Section */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">Did You Know?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-300">
              {currentPlanet.id === 'mercury' && (
                <>
                  <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400 mb-2">800°F</div>
                    <div className="text-sm">Temperature difference between day and night sides</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400 mb-2">0°</div>
                    <div className="text-sm">Axial tilt - no seasons</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400 mb-2">Fastest</div>
                    <div className="text-sm">Orbital speed in solar system</div>
                  </div>
                </>
              )}
              {currentPlanet.id === 'venus' && (
                <>
                  <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400 mb-2">900°F</div>
                    <div className="text-sm">Surface temperature - hotter than Mercury</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400 mb-2">96%</div>
                    <div className="text-sm">Atmosphere is carbon dioxide</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400 mb-2">Brightest</div>
                    <div className="text-sm">Planet visible from Earth</div>
                  </div>
                </>
              )}
              {/* Add more fun facts for other planets */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};