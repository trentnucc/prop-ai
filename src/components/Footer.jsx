import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                Propensity<span className="text-sky-500">AI</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Democratizing enterprise AI technology for businesses of all sizes.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/email-outreach" className="text-gray-300 hover:text-white">
                  Email Outreach
                </Link>
              </li>
              <li>
                <Link to="/solutions/customer-service" className="text-gray-300 hover:text-white">
                  Customer Service AI
                </Link>
              </li>
              <li>
                <Link to="/solutions/social-media" className="text-gray-300 hover:text-white">
                  Social Media
                </Link>
              </li>
              <li>
                <Link to="/solutions/crm" className="text-gray-300 hover:text-white">
                  Smart CRM
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-300 hover:text-white">
                  Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Propensity AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}