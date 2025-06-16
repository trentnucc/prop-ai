import React from 'react';
import { CheckCircle } from 'lucide-react';

export function CaseStudySection({ caseStudies }) {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Success Stories
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">{study.company}</h3>
              <p className="text-sky-600">{study.industry}</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Challenge</h4>
                <p className="text-gray-600">{study.challenge}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900">Solution</h4>
                <p className="text-gray-600">{study.solution}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900">Results</h4>
                <ul className="mt-2 space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                      <span className="text-gray-600">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}