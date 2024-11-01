import React from 'react';

function PlatformerGameMockup() {
  return (
    <div className="flex items-center justify-center relative">
      {/* Background Glow */}
      <div className="absolute w-[40rem] h-[40rem] bg-cyan-500 blur-3xl opacity-40 rounded-full shadow-[0_0_60px_rgba(0,100,255,0.8)]"></div>

      {/* Game Mockup */}
      <div className="relative w-[30em] h-[20em] bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg p-4 border border-gray-700 shadow-[0_15px_15px_rgba(0,0,0,0.9)]">
        
        {/* Score Display */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full bg-gray-700 rounded-md p-2 flex items-center justify-between shadow-sm">
          <span className="text-cyan-400 text-lg font-semibold">Score: 100</span>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
        </div>

        {/* Game Area */}
        <div className="relative w-full h-full flex items-end justify-center mt-12 border border-gray-600 overflow-hidden rounded-lg">
          {/* Platforms */}
          <div className="absolute bottom-16 left-10 w-32 h-4 bg-gray-600 rounded-md shadow-md"></div>
          <div className="absolute bottom-24 left-20 w-40 h-4 bg-gray-600 rounded-md shadow-md"></div>
          <div className="absolute bottom-32 left-5 w-24 h-4 bg-gray-600 rounded-md shadow-md"></div>

          {/* Character */}
          <div className="absolute bottom-16 left-10 w-8 h-8 bg-yellow-400 rounded-md shadow-[0_0_10px_rgba(255,255,0,0.6)] animate-jump"></div>

          {/* Coins */}
          <div className="absolute bottom-20 left-15 w-4 h-4 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(255,255,0,0.6)] animate-pulse"></div>
          <div className="absolute bottom-28 left-25 w-4 h-4 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(255,255,0,0.6)] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default PlatformerGameMockup;

// Add this animation to your CSS (in a styles.css file, for example):
// @keyframes jump {
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-20px); }
//   100% { transform: translateY(0); }
// }
