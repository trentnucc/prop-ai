import React from 'react';

export function PageHeader({ title, description }) {
  return (
    <div className="text-center mb-8 sm:mb-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h1>
      <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
        {description}
      </p>
    </div>
  );
}