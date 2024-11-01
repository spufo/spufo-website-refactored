

function PhoneMockup() {
  return (
    <div className="flex items-center justify-center relative">
      {/* Stronger Background Glow with Shadow */}
      <div className="absolute w-96 h-96 bg-cyan-500 blur-3xl opacity-40 rounded-full shadow-[0_0_60px_rgba(0,169,255,0.8)]"></div>

      {/* Phone Mockup */}
      <div className="relative w-[18em] h-[32em] bg-gradient-to-b from-gray-800/70 to-gray-900 rounded-2xl p-2 drop-shadow-[0_15px_15px_rgba(0,0,0,0.9)] border border-gray-700">
        {/* Phone Screen */}
        <div className="relative w-full h-full bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
          
          {/* Status Bar */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-[70%] h-2 bg-gray-700 rounded-full"></div>
          
          {/* Header Section */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-full px-4 flex items-center justify-between h-8 bg-gray-800 rounded-t-md border-b border-gray-700">
            <span className="text-gray-400 text-xs">9:41</span>
            <div className="flex space-x-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            </div>
          </div>

          {/* Notifications / Elements */}
          <div className="absolute top-20 left-6 w-2/3 h-2 bg-cyan-500 rounded-md animate-pulse shadow-[0_0_10px_rgba(0,169,255,0.6)] mb-4"></div>
          <div className="absolute top-28 left-6 w-1/2 h-2 bg-gray-700 rounded-md mb-4"></div>
          <div className="absolute top-36 left-6 w-3/4 h-2 bg-gray-700 rounded-md mb-4"></div>
          <div className="absolute top-44 left-6 w-1/3 h-2 bg-gray-700 rounded-md mb-4"></div>
          
          {/* Floating Rectangles */}
          <div className="absolute top-52 left-6 w-12 h-4 bg-cyan-500 rounded-md animate-pulse shadow-[0_0_10px_rgba(0,169,255,0.6)] mb-4"></div>
          <div className="absolute top-60 left-16 w-16 h-4 bg-cyan-500 rounded-md animate-pulse shadow-[0_0_10px_rgba(0,169,255,0.6)] mb-4"></div>

          {/* Glowing Button at Bottom Right */}
          <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_15px_rgba(0,169,255,0.6)]"></div>
        </div>
      </div>
    </div>
  );
}

export default PhoneMockup;
