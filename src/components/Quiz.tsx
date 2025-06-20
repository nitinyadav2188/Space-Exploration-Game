import { useState } from 'react';
import { useGame } from '../context/GameContext';
import { CheckCircle, XCircle, ArrowRight, Trophy, RotateCcw } from 'lucide-react';

export const Quiz = () => {
  const { gameState, planets, answerQuestion, nextQuestion, returnToSolarSystem } = useGame();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const currentPlanet = planets.find(p => p.id === gameState.currentPlanet);
  
  if (!currentPlanet) {
    return null;
  }

  const currentQuestion = currentPlanet.quiz[gameState.currentQuestionIndex];
  const totalQuestions = currentPlanet.quiz.length;
  const progress = ((gameState.currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (hasAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setHasAnswered(true);
    answerQuestion(answerIndex);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setHasAnswered(false);
    nextQuestion();
  };

  const handleRetry = () => {
    returnToSolarSystem();
  };

  // Results screen
  if (gameState.showResults) {
    const percentage = Math.round((gameState.score / totalQuestions) * 100);
    const passed = percentage >= 70;

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-8">
        <div className="max-w-2xl w-full">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 text-center">
            <div className="mb-6">
              {passed ? (
                <Trophy className="text-yellow-400 mx-auto mb-4" size={64} />
              ) : (
                <RotateCcw className="text-orange-400 mx-auto mb-4" size={64} />
              )}
            </div>

            <h2 className="text-4xl font-bold text-white mb-4">
              {passed ? 'Congratulations!' : 'Keep Learning!'}
            </h2>

            <div className="mb-6">
              <div className="text-6xl font-bold mb-2" style={{ color: currentPlanet.color }}>
                {percentage}%
              </div>
              <p className="text-gray-300">
                You scored {gameState.score} out of {totalQuestions} questions correctly
              </p>
            </div>

            {passed ? (
              <div className="bg-green-900/30 border border-green-600 rounded-lg p-4 mb-6">
                <p className="text-green-300 font-semibold">
                  🎉 Planet {currentPlanet.name} completed! The next planet is now unlocked.
                </p>
              </div>
            ) : (
              <div className="bg-orange-900/30 border border-orange-600 rounded-lg p-4 mb-6">
                <p className="text-orange-300">
                  You need at least 70% to unlock the next planet. Don't worry, you can try again!
                </p>
              </div>
            )}

            <div className="flex gap-4 justify-center">
              <button
                onClick={returnToSolarSystem}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {passed ? 'Continue Journey' : 'Return to Solar System'}
              </button>
              
              {!passed && (
                <button
                  onClick={() => {
                    setSelectedAnswer(null);
                    setShowExplanation(false);
                    setHasAnswered(false);
                    // Reset quiz state but stay on the same planet
                    window.location.reload(); // Simple way to restart the quiz
                  }}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Try Again
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-full shadow-lg"
              style={{
                backgroundColor: currentPlanet.color,
                boxShadow: `0 0 20px ${currentPlanet.color}60`,
              }}
            />
            <h1 className="text-3xl font-bold text-white">
              {currentPlanet.name} Quiz Challenge
            </h1>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <p className="text-gray-300">
            Question {gameState.currentQuestionIndex + 1} of {totalQuestions}
          </p>
        </div>

        {/* Question Card */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 mb-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            {currentQuestion.question}
          </h2>

          {/* Answer Options */}
          <div className="grid gap-4 mb-6">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ";
              
              if (!hasAnswered) {
                buttonClass += "bg-gray-700 border-gray-600 text-white hover:bg-gray-600 hover:border-gray-500 cursor-pointer";
              } else if (index === currentQuestion.correctAnswer) {
                buttonClass += "bg-green-900/50 border-green-500 text-green-300";
              } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                buttonClass += "bg-red-900/50 border-red-500 text-red-300";
              } else {
                buttonClass += "bg-gray-700/50 border-gray-600 text-gray-400";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={buttonClass}
                  disabled={hasAnswered}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {hasAnswered && index === currentQuestion.correctAnswer && (
                      <CheckCircle className="text-green-400" size={24} />
                    )}
                    {hasAnswered && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                      <XCircle className="text-red-400" size={24} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="bg-blue-900/30 border border-blue-600 rounded-lg p-4 mb-6">
              <h3 className="font-bold text-blue-300 mb-2">Explanation:</h3>
              <p className="text-blue-200">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {hasAnswered && (
            <div className="text-center">
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
              >
                {gameState.currentQuestionIndex === totalQuestions - 1 ? 'Complete Quiz' : 'Next Question'}
                <ArrowRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Score Display */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gray-800/60 backdrop-blur-sm rounded-lg px-6 py-3 border border-gray-600">
            <span className="text-gray-300">Current Score:</span>
            <span className="text-2xl font-bold text-white">
              {gameState.score} / {gameState.currentQuestionIndex + (hasAnswered ? 1 : 0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};