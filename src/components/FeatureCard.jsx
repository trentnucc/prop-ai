import React from 'react';

export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="card-futuristic p-8 rounded-2xl group relative overflow-hidden">
      <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-blue-500/30">
          <Icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-4 group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
}