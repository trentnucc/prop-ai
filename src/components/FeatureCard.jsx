import React from 'react';

export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg hover:shadow-sm transition-shadow duration-200">
      <div className="w-12 h-12 mb-4 text-blue-500">
        <Icon className="w-full h-full" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}