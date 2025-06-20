export interface Planet {
  id: string;
  name: string;
  description: string;
  distanceFromSun: string;
  diameter: string;
  dayLength: string;
  yearLength: string;
  moons: number;
  color: string;
  size: number;
  position: { x: number; y: number };
  quiz: QuizQuestion[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface GameState {
  currentPlanet: string | null;
  completedPlanets: string[];
  currentQuestionIndex: number;
  score: number;
  isQuizMode: boolean;
  showResults: boolean;
}

export interface GameContextType {
  gameState: GameState;
  planets: Planet[];
  selectPlanet: (planetId: string) => void;
  startQuiz: () => void;
  answerQuestion: (answerIndex: number) => void;
  nextQuestion: () => void;
  finishQuiz: () => void;
  returnToSolarSystem: () => void;
  isPlanetUnlocked: (planetId: string) => boolean;
}