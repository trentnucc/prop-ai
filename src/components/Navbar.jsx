import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const solutions = [
    { name: 'Email & LinkedIn Outreach', href: '/solutions/email-outreach' },
    { name: 'Customer Service AI', href: '/solutions/customer-service' },
    { name: 'Social Media Automation', href: '/solutions/social-media' },
    { name: 'Smart CRM', href: '/solutions/crm' },
    { name: 'Website Builder', href: '/solutions/website-builder' },
    { name: 'Video Editing & Courses', href: '/solutions/video-editing' },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900">
                Propensity<span className="text-sky-500">AI</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {solutionsOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <div className="py-1">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        to={solution.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to="/about"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              About
            </Link>
            
            <Link
              to="/demo"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <div className="space-y-1">
              <div className="text-gray-700 px-3 py-2 text-sm font-medium">Solutions</div>
              {solutions.map((solution) => (
                <Link
                  key={solution.name}
                  to={solution.href}
                  className="block text-gray-600 hover:text-gray-900 px-6 py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {solution.name}
                </Link>
              ))}
            </div>
            
            <Link
              to="/about"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            <Link
              to="/demo"
              className="block bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 rounded-md text-sm font-medium mx-3"
              onClick={() => setIsOpen(false)}
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}