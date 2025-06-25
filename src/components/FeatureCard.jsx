import React from 'react';

export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="text-left">
      <div className="w-12 h-12 mb-6 text-blue-500">
        <Icon className="w-full h-full" />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}