import React from 'react';

function PlatformerGameMockup() {
  return (
    <div className="flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute w-[34rem] h-[34rem] bg-cyan-500 blur-3xl opacity-40 rounded-full shadow-[0_0_80px_rgba(0,150,255,0.5)]"></div>

      {/* Game Window */}
      <div className="relative w-[40em] h-[25em] bg-gray-800 rounded-lg p-5 border border-gray-700 drop-shadow-[0_15px_15px_rgba(0,0,0,0.9)]">
        
        {/* Score Display */}
        <div className="absolute top-3 left-3 bg-gray-700 rounded-md p-2 px-4 shadow-lg">
          <span className="text-cyan-400 text-lg font-bold">Score: 100</span>
        </div>

        {/* Window Buttons */}
        <div className="absolute top-3 right-3 flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Game Area */}
        <div className="relative w-full h-[95%] mt-6 flex items-end justify-center bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-600 rounded-lg overflow-hidden shadow-inner">
          
          {/* Platforms */}
          <div className="absolute bottom-10 left-10 w-32 h-4 bg-gray-700 rounded-md shadow-md"></div>
          <div className="absolute bottom-24 left-40 w-32 h-4 bg-gray-700 rounded-md shadow-md"></div>
          <div className="absolute bottom-36 left-20 w-28 h-4 bg-gray-700 rounded-md shadow-md"></div>
          <div className="absolute bottom-36 right-20 w-28 h-4 bg-gray-700 rounded-md shadow-md"></div>
          <div className="absolute top-36 right-50 w-28 h-4 bg-gray-700 rounded-md shadow-md"></div>

          {/* Character */}
          <div className="absolute bottom-14 left-12 w-8 h-8 bg-yellow-400 rounded-md shadow-[0_0_15px_rgba(255,255,0,0.8)] animate-jump"></div>

          {/* Coins */}
          <div className="absolute bottom-44 left-32 w-5 h-5 bg-yellow-500 rounded-full shadow-[0_0_15px_rgba(255,255,0,0.8)] animate-pulse"></div>
          <div className="absolute bottom-48 right-32 w-5 h-5 bg-yellow-500 rounded-full shadow-[0_0_15px_rgba(255,255,0,0.8)] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default PlatformerGameMockup;

// CSS animations
// Add these animations to your CSS (styles.css or inline styles):
// @keyframes jump {
//   0%, 100% { transform: translateY(0); }
//   50% { transform: translateY(-15px); }
// }

// @keyframes pulse {
//   0%, 100% { transform: scale(1); opacity: 1; }
//   50% { transform: scale(1.2); opacity: 0.8; }
// }
