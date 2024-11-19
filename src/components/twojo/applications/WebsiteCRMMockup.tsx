

function WebsiteCRMMockup() {
  return (
    <div className="flex items-center justify-center relative">
      {/* Stronger Background Glow with Shadow */}
      <div className="absolute w-[34rem] h-[34rem] bg-cyan-500 blur-3xl opacity-40 rounded-full shadow-[0_0_60px_rgba(0,169,255,0.8)]"></div>

      {/* CRM Mockup */}
      <div className="relative w-[48em] h-[32em] bg-gradient-to-b from-gray-800/70 to-gray-900 rounded-lg p-4 drop-shadow-[0_15px_15px_rgba(0,0,0,0.9)] border border-gray-700">
        
        {/* Sidebar */}
        <div className="absolute top-0 left-0 w-[8%] h-full bg-gray-800 rounded-l-lg p-3 flex flex-col items-center border-r border-gray-700">
          <div className="w-10 h-10 bg-cyan-500 rounded-full mb-6"></div>
          <div className="space-y-4">
            <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
          </div>
        </div>
        
        {/* Header */}
        <div className="absolute top-0 left-[8%] w-[92%] h-12 bg-gray-800 rounded-tr-lg flex items-center justify-between px-4 border-b border-gray-700">
          <span className="text-gray-400 text-sm">Dashboard</span>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="absolute top-14 left-[8%] w-[92%] h-[90%] p-4 space-y-4">
          {/* Statistics Row */}
          <div className="flex space-x-4">
            <div className="w-1/3 h-16 bg-cyan-500/20 rounded-md p-2 shadow-[0_0_10px_rgba(0,169,255,0.6)] animate-pulse">
              <span className="block text-cyan-500 text-sm">New Leads</span>
              <span className="block text-gray-300 text-lg font-semibold">120</span>
            </div>
            <div className="w-1/3 h-16 bg-gray-700 rounded-md p-2">
              <span className="block text-gray-400 text-sm">Sales</span>
              <span className="block text-gray-200 text-lg font-semibold">$5,200</span>
            </div>
            <div className="w-1/3 h-16 bg-gray-700 rounded-md p-2">
              <span className="block text-gray-400 text-sm">Tasks</span>
              <span className="block text-gray-200 text-lg font-semibold">35</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-700 h-48 rounded-md p-4 overflow-hidden shadow-sm">
            <span className="block text-gray-400 text-sm mb-2">Recent Activity</span>
            <div className="space-y-2">
              <div className="w-full h-4 bg-cyan-500/30 rounded-md"></div>
              <div className="w-3/4 h-4 bg-gray-600 rounded-md"></div>
              <div className="w-2/3 h-4 bg-gray-600 rounded-md"></div>
              <div className="w-4/5 h-4 bg-gray-600 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteCRMMockup;
