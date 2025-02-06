"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Define proper types
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  image?: string;
  funFact?: string;
}

interface ScoreType {
  correct: number;
  total: number;
}

export default function AlAqsaBasics() {
  // State with proper typing
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<ScoreType>({ correct: 0, total: 0 });
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showCelebration, setShowCelebration] = useState<boolean>(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "What does 'Al-Aqsa' mean in Arabic?",
      options: ["The Farthest", "The Highest", "The Blessed", "The Holy"],
      correctAnswer: "The Farthest",
      explanation: "Al-Aqsa means 'the farthest' in Arabic. It was named this because it was the farthest mosque from Makkah that Muslims would travel to for worship.",
      image: "/al-aqsa-night.jpg",
      funFact: "Did you know? Al-Aqsa Mosque is the third-holiest site in Islam! 🌟"
    },
    {
      id: 2,
      question: "In which city is Al-Aqsa Mosque located?",
      options: ["Jerusalem", "Makkah", "Madinah", "Damascus"],
      correctAnswer: "Jerusalem",
      explanation: "Al-Aqsa Mosque is located in Jerusalem (Al-Quds), a city that is sacred to Muslims, Christians, and Jews.",
      image: "/jerusalem-view.jpg",
      funFact: "Jerusalem is one of the oldest cities in the world! 🏰"
    },
    // Add more questions here
  ];

  // Safe handling of answer selection
  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer || !questions[currentQuestionIndex]) return;
    
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestionIndex].correctAnswer;
    setIsCorrect(correct);
    setScore(prev => ({
      correct: correct ? prev.correct + 1 : prev.correct,
      total: prev.total + 1
    }));
    setShowExplanation(true);
  };

  // Safe handling of next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowExplanation(false);
    } else {
      setShowCelebration(true);
    }
  };

  // Current question with safety check
  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion && !showCelebration) {
    return <div>Error loading question</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <motion.div 
          className="bg-white rounded-full p-2 mb-6 shadow-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          <div className="flex items-center justify-between px-4">
            <span className="text-emerald-600 font-bold">
              Level 1: Al-Aqsa Basics
            </span>
            <span className="text-emerald-600">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full mt-2">
            <motion.div
              className="h-full bg-emerald-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ 
                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` 
              }}
            />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showCelebration ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              {/* Question Image with error handling */}
              {currentQuestion.image && (
                <div className="relative rounded-xl overflow-hidden mb-6 h-64">
                  <Image
                    src={currentQuestion.image}
                    alt="Question illustration"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Question */}
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {currentQuestion.question}
              </h2>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={option}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-xl text-left transition-colors ${
                      selectedAnswer === option
                        ? isCorrect
                          ? 'bg-green-100 border-2 border-green-500'
                          : 'bg-red-100 border-2 border-red-500'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-200'
                    }`}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={!!selectedAnswer}
                  >
                    <span className="font-medium">
                      {String.fromCharCode(65 + index)}. 
                    </span>
                    {option}
                  </motion.button>
                ))}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-blue-50 rounded-xl p-4 mb-4"
                  >
                    <p className="text-blue-800">
                      {currentQuestion.explanation}
                    </p>
                    {currentQuestion.funFact && (
                      <p className="text-blue-600 mt-2 font-medium">
                        {currentQuestion.funFact}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next Button */}
              {showExplanation && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full bg-emerald-500 text-white py-3 rounded-xl 
                           font-bold hover:bg-emerald-600 transition-colors"
                  onClick={handleNextQuestion}
                >
                  Next Question →
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="celebration"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-emerald-600 mb-4">
                🎉 Congratulations! 🎉
              </h2>
              <p className="text-xl mb-4">
                You've completed the Al-Aqsa Basics level!
              </p>
              <p className="text-2xl font-bold mb-6">
                Your score: {score.correct}/{score.total}
              </p>
              <Link href="/learn">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-emerald-500 text-white py-3 px-6 rounded-xl 
                           font-bold hover:bg-emerald-600 transition-colors"
                >
                  Return to Map 🗺️
                </motion.button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}