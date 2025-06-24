import React from 'react';

export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="card-hover p-6 sm:p-8 glass rounded-2xl border border-gray-100/50 group">
      <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-7 w-7 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}