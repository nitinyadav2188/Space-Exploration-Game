import { GameProvider, useGame } from './context/GameContext';
import { SolarSystemView } from './components/SolarSystemView';
import { PlanetView } from './components/PlanetView';

const GameContent = () => {
  const { gameState } = useGame();

  if (gameState.currentPlanet) {
    return <PlanetView />;
  }

  return <SolarSystemView />;
};

function App() {
  return (
    <GameProvider>
      <div className="min-h-screen">
        <GameContent />
      </div>
    </GameProvider>
  );
}

export default App;