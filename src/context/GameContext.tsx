import { createContext, useContext, useReducer, ReactNode } from 'react';
import { GameState, GameContextType, Planet } from '../types/game';
import { planetsData } from '../data/planets';

const initialState: GameState = {
  currentPlanet: null,
  completedPlanets: [],
  currentQuestionIndex: 0,
  score: 0,
  isQuizMode: false,
  showResults: false,
};

type GameAction =
  | { type: 'SELECT_PLANET'; planetId: string }
  | { type: 'START_QUIZ' }
  | { type: 'ANSWER_QUESTION'; correct: boolean }
  | { type: 'NEXT_QUESTION' }
  | { type: 'FINISH_QUIZ' }
  | { type: 'RETURN_TO_SOLAR_SYSTEM' }
  | { type: 'COMPLETE_PLANET'; planetId: string };

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'SELECT_PLANET':
      return {
        ...state,
        currentPlanet: action.planetId,
        isQuizMode: false,
        showResults: false,
        currentQuestionIndex: 0,
        score: 0,
      };
    case 'START_QUIZ':
      return {
        ...state,
        isQuizMode: true,
        currentQuestionIndex: 0,
        score: 0,
        showResults: false,
      };
    case 'ANSWER_QUESTION':
      return {
        ...state,
        score: action.correct ? state.score + 1 : state.score,
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case 'FINISH_QUIZ':
      const planet = planetsData.find(p => p.id === state.currentPlanet);
      const totalQuestions = planet?.quiz.length || 0;
      const passed = state.score >= Math.ceil(totalQuestions * 0.7); // 70% to pass
      
      return {
        ...state,
        showResults: true,
        completedPlanets: passed && state.currentPlanet && !state.completedPlanets.includes(state.currentPlanet)
          ? [...state.completedPlanets, state.currentPlanet]
          : state.completedPlanets,
      };
    case 'COMPLETE_PLANET':
      return {
        ...state,
        completedPlanets: [...state.completedPlanets, action.planetId],
      };
    case 'RETURN_TO_SOLAR_SYSTEM':
      return {
        ...state,
        currentPlanet: null,
        isQuizMode: false,
        showResults: false,
        currentQuestionIndex: 0,
        score: 0,
      };
    default:
      return state;
  }
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  const selectPlanet = (planetId: string) => {
    dispatch({ type: 'SELECT_PLANET', planetId });
  };

  const startQuiz = () => {
    dispatch({ type: 'START_QUIZ' });
  };

  const answerQuestion = (answerIndex: number) => {
    const planet = planetsData.find(p => p.id === gameState.currentPlanet);
    if (planet) {
      const currentQuestion = planet.quiz[gameState.currentQuestionIndex];
      const correct = answerIndex === currentQuestion.correctAnswer;
      dispatch({ type: 'ANSWER_QUESTION', correct });
    }
  };

  const nextQuestion = () => {
    const planet = planetsData.find(p => p.id === gameState.currentPlanet);
    if (planet && gameState.currentQuestionIndex < planet.quiz.length - 1) {
      dispatch({ type: 'NEXT_QUESTION' });
    } else {
      dispatch({ type: 'FINISH_QUIZ' });
    }
  };

  const finishQuiz = () => {
    dispatch({ type: 'FINISH_QUIZ' });
  };

  const returnToSolarSystem = () => {
    dispatch({ type: 'RETURN_TO_SOLAR_SYSTEM' });
  };

  const isPlanetUnlocked = (planetId: string): boolean => {
    const planetIndex = planetsData.findIndex(p => p.id === planetId);
    if (planetIndex === 0) return true; // Mercury is always unlocked
    
    const previousPlanet = planetsData[planetIndex - 1];
    return gameState.completedPlanets.includes(previousPlanet.id);
  };

  const contextValue: GameContextType = {
    gameState,
    planets: planetsData,
    selectPlanet,
    startQuiz,
    answerQuestion,
    nextQuestion,
    finishQuiz,
    returnToSolarSystem,
    isPlanetUnlocked,
  };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};