import React from 'react';

export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="p-3 sm:p-6 bg-gray-50 rounded-lg sm:rounded-xl">
      <Icon className="h-5 w-5 sm:h-8 sm:w-8 text-sky-500 mb-2 sm:mb-4" />
      <h3 className="text-sm sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
        {title}
      </h3>
      <p className="text-xs sm:text-base text-gray-600">
        {description}
      </p>
    </div>
  );
}