"use client";

import { useState } from 'react';

interface Stage {
  id: number;
  name: string;
  position: string;
  isLocked: boolean;
  description: string;
}

export default function Learn() {
  const [stages, setStages] = useState<Stage[]>([
    {
      id: 1,
      name: "Al-Aqsa Basics",
      position: "top-1/4 left-1/4",
      isLocked: false,
      description: "Start your journey here! Learn the basics about Al-Aqsa Mosque"
    },
    {
      id: 2,
      name: "Historical Journey",
      position: "top-1/3 left-1/2",
      isLocked: true,
      description: "Discover the amazing history of Al-Aqsa through time"
    },
    {
      id: 3,
      name: "Sacred Architecture",
      position: "top-1/2 left-2/3",
      isLocked: true,
      description: "Explore the beautiful buildings and designs"
    },
    {
      id: 4,
      name: "Islamic Significance",
      position: "bottom-1/3 right-1/4",
      isLocked: true,
      description: "Learn why Al-Aqsa is special to Muslims"
    },
    // Add more stages as needed
  ]);

  const unlockStage = (stageId: number) => {
    setStages(stages.map(stage => 
      stage.id === stageId ? { ...stage, isLocked: false } : stage
    ));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-white p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-emerald-600 mb-8">
          Al-Aqsa Learning Adventure Map 🗺️
        </h1>

        {/* Game Map Container */}
        <div className="relative w-full h-[600px] bg-[url('/images/al-quds-map.jpg')] bg-cover bg-center rounded-xl shadow-xl border-4 border-golden">
          {/* Path overlay - You can customize this SVG path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <path
              d="M20,20 Q40,40 60,30 T90,50"
              fill="none"
              stroke="gold"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-dash"
            />
          </svg>

          {/* Stage Markers */}
          {stages.map((stage) => (
            <div
              key={stage.id}
              className={`absolute ${stage.position} transform -translate-x-1/2 -translate-y-1/2`}
            >
              <div className="relative group">
                <button
                  className={`w-16 h-16 rounded-full ${
                    stage.isLocked ? 'bg-gray-400' : 'bg-emerald-500'
                  } flex items-center justify-center shadow-lg transform transition hover:scale-110`}
                  onClick={() => !stage.isLocked && console.log(`Navigate to stage ${stage.id}`)}
                >
                  {stage.isLocked ? (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className="text-2xl">🎯</span>
                  )}
                </button>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                  <div className="bg-white px-4 py-2 rounded-lg shadow-lg text-center min-w-[200px]">
                    <h3 className="font-bold text-emerald-600">{stage.name}</h3>
                    <p className="text-sm text-gray-600">{stage.description}</p>
                    {stage.isLocked && (
                      <button
                        onClick={() => unlockStage(stage.id)}
                        className="mt-2 px-4 py-1 bg-yellow-400 rounded-full text-sm hover:bg-yellow-500"
                      >
                        🔑 Use Key to Unlock
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">Your Progress</h2>
          <div className="flex gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-emerald-500 rounded-full mr-2"></div>
              <span>Unlocked Stages</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-400 rounded-full mr-2"></div>
              <span>Locked Stages</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}