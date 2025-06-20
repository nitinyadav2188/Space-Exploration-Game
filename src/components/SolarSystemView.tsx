import { useGame } from '../context/GameContext';
import { StarField } from './StarField';
import { Rocket, Lock, CheckCircle } from 'lucide-react';

export const SolarSystemView = () => {
  const { planets, selectPlanet, isPlanetUnlocked, gameState } = useGame();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <StarField />
      
      {/* Header */}
      <div className="relative z-10 text-center py-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Rocket className="text-yellow-400" size={32} />
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Space Explorer
          </h1>
        </div>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto px-4">
          Embark on an educational journey through our solar system. Complete quizzes about each planet to unlock your path to the next world.
        </p>
        <div className="mt-4 text-purple-300">
          Progress: {gameState.completedPlanets.length} / {planets.length} planets explored
        </div>
      </div>

      {/* Solar System */}
      <div className="relative z-10 h-screen max-w-7xl mx-auto p-8">
        {/* Sun */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 animate-spin" style={{ animationDuration: '20s' }} />
          </div>
          <p className="text-yellow-300 text-sm mt-2 text-center font-semibold">Sun</p>
        </div>

        {/* Planets */}
        {planets.map((planet, index) => {
          const isUnlocked = isPlanetUnlocked(planet.id);
          const isCompleted = gameState.completedPlanets.includes(planet.id);
          
          return (
            <div
              key={planet.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: `${planet.position.x}%`,
                top: `${planet.position.y}%`,
              }}
              onClick={() => isUnlocked && selectPlanet(planet.id)}
            >
              {/* Orbital path hint */}
              <div 
                className="absolute rounded-full border border-gray-600/30 pointer-events-none"
                style={{
                  width: `${planet.position.x * 8}px`,
                  height: `${planet.position.x * 8}px`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              
              {/* Planet */}
              <div
                className={`rounded-full transition-all duration-300 ${
                  isUnlocked
                    ? 'hover:scale-125 hover:shadow-2xl cursor-pointer'
                    : 'opacity-50 cursor-not-allowed'
                } ${isCompleted ? 'ring-4 ring-green-400' : ''}`}
                style={{
                  width: `${planet.size}px`,
                  height: `${planet.size}px`,
                  backgroundColor: planet.color,
                  boxShadow: isUnlocked ? `0 0 20px ${planet.color}40` : 'none',
                }}
              >
                {/* Planet surface texture */}
                <div 
                  className="w-full h-full rounded-full opacity-30 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 50%)`,
                  }}
                />
              </div>

              {/* Status indicators */}
              <div className="absolute -top-2 -right-2 pointer-events-none">
                {isCompleted && (
                  <CheckCircle className="text-green-400 bg-gray-900 rounded-full" size={16} />
                )}
                {!isUnlocked && (
                  <Lock className="text-gray-400 bg-gray-900 rounded-full p-1" size={16} />
                )}
              </div>

              {/* Planet info card - only shows on hover */}
              <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                <div className="bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 text-white text-sm min-w-48 border border-gray-600 shadow-2xl">
                  <h3 className="font-bold text-lg mb-2" style={{ color: planet.color }}>
                    {planet.name}
                  </h3>
                  <p className="text-gray-300 mb-2">{planet.description}</p>
                  <div className="text-xs text-gray-400 space-y-1">
                    <p>Distance: {planet.distanceFromSun}</p>
                    <p>Diameter: {planet.diameter}</p>
                    <p>Moons: {planet.moons}</p>
                  </div>
                  {isUnlocked && !isCompleted && (
                    <div className="mt-2 text-xs text-blue-400">
                      Click to explore and take the quiz!
                    </div>
                  )}
                  {isCompleted && (
                    <div className="mt-2 text-xs text-green-400">
                      ✓ Planet explored!
                    </div>
                  )}
                  {!isUnlocked && (
                    <div className="mt-2 text-xs text-gray-500">
                      Complete previous planet to unlock
                    </div>
                  )}
                </div>
              </div>

              {/* Planet name label - always visible */}
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 pointer-events-none">
                <p className="text-white text-sm text-center font-medium whitespace-nowrap">
                  {planet.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <div className="fixed bottom-8 left-8 right-8 text-center text-blue-200 z-10">
        <p className="text-sm">
          Hover over planets to learn more • Click unlocked planets to start your exploration
        </p>
      </div>
    </div>
  );
};