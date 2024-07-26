// Preloader.jsx
import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="text-center text-white">
        {/* Spinner */}
        <div className="w-16 h-16 border-t-4 border-neon-green border-solid rounded-full mx-auto animate-spin"></div>
        {/* Loading Text */}
        <p className="mt-4 text-lg font-semibold neon-glow">
          Loading Docs App...
        </p>
        {/* Optional Fun Text */}
        <p className="mt-2 text-sm text-gray-400">
          Please wait while we prepare the best docs experience for you!
        </p>
      </div>
    </div>
  );
}

export default Preloader;
