import React from 'react'
import { Smartphone, Star, ArrowRight } from 'lucide-react';


const Appdonwload = () => {
    return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left side - App info */}
        <div className="flex items-center gap-4 flex-1">
          <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center">
            <Smartphone className="w-7 h-7 text-white" />
          </div>
          
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-gray-900">Download Our App</h3>
            <p className="text-gray-600">Get the best mobile experience</p>
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-gray-500 text-sm">4.8 • 2.3k reviews</span>
            </div>
          </div>
        </div>

        {/* Right side - Download buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button className="bg-gray-900 text-white rounded-lg px-5 py-3 hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
              </div>
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-sm font-medium">App Store</div>
              </div>
            </div>
          </button>

          <button className="bg-gray-900 text-white rounded-lg px-5 py-3 hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-gradient-to-br from-yellow-400 to-green-500 rounded-md flex items-center justify-center">
                <div className="w-4 h-4 text-white text-sm">▶</div>
              </div>
              <div className="text-left">
                <div className="text-xs opacity-80">Get it on</div>
                <div className="text-sm font-medium">Google Play</div>
              </div>
            </div>
          </button>

          <button className="group bg-blue-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 w-full sm:w-auto">
            <div className="flex items-center gap-2 justify-center">
              <span>Try Web App</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default Appdonwload