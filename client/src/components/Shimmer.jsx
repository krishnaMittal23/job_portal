import React from 'react';

// Simple Shimmer Component
const Shimmer = ({ className = '', width, height }) => {
  return (
    <div 
      className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded ${className}`}
      style={{
        width: width || '100%',
        height: height || '16px',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s ease-in-out infinite'
      }}
    >
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

// Usage Examples
export default function ShimmerUI() {
  return (
    <div className="p-6 space-y-6 bg-white">
      <h2 className="text-2xl font-bold"></h2>
      
      {/* Text Lines */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium"></h3>
        <Shimmer height="20px" />
        <Shimmer height="16px" width="80%" />
        <Shimmer height="16px" width="60%" />
      </div>

      {/* Card Example */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium"></h3>
        <div className="border border-gray-200 rounded-lg p-4 space-y-3">
          <div className="flex items-center space-x-3">
            <Shimmer className="w-12 h-12 rounded-full" />
            <div className="flex-1 space-y-2">
              <Shimmer height="16px" width="70%" />
              <Shimmer height="14px" width="50%" />
            </div>
          </div>
          <div className="space-y-2">
            <Shimmer height="14px" />
            <Shimmer height="14px" width="90%" />
          </div>
        </div>
      </div>

      {/* Button and Form Elements */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium"></h3>
        <div className="flex space-x-3">
          <Shimmer className="rounded-lg" width="80px" height="36px" />
          <Shimmer className="rounded-lg" width="100px" height="36px" />
        </div>
        <Shimmer className="rounded" height="40px" />
      </div>
    </div>
  );
}