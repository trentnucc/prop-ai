import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader 
          title="About Propensity AI" 
          description="Democratizing Enterprise AI Technology" 
        />
        
        <div className="prose prose-lg max-w-none">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Propensity AI, we're on a mission to democratize artificial intelligence technology. We believe that the transformative power of AI shouldn't be limited to large enterprises with massive budgets. Our goal is to provide small and medium-sized businesses with the same powerful tools and capabilities that were previously only accessible to industry giants.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Founded in Miami, Florida, we've assembled a team of world-class AI researchers, engineers, and business strategists who share a common vision: making enterprise-grade AI accessible, affordable, and actionable for businesses of all sizes.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Technology</h2>
            <p className="text-gray-600 leading-relaxed">
              We've developed a comprehensive suite of AI-powered solutions that leverage the latest advancements in machine learning and natural language processing. Our technology stack includes integrations with industry-leading AI models such as OpenAI 01 and DeepSeek, complemented by our proprietary algorithms developed in-house.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our platform combines advanced natural language processing, machine learning, and predictive analytics to deliver intelligent automation across email, voice, and social media channels. With enterprise-grade security and compliance built-in, we ensure your data is protected to the highest standards while maintaining seamless integration with your existing systems.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Success Story</h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">City Wide Columbus</h3>
                  <p className="text-gray-600 mb-6">
                    A comprehensive implementation of our AI solutions helped City Wide Columbus transform their operations and customer service capabilities. Through automated communication systems and intelligent scheduling, they achieved remarkable improvements in efficiency and customer satisfaction.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                      <div className="space-y-2">
                        <p className="flex items-center text-gray-600">
                          <CheckCircle className="h-5 w-5 text-sky-500 mr-3 flex-shrink-0" />
                          42% reduction in response times
                        </p>
                        <p className="flex items-center text-gray-600">
                          <CheckCircle className="h-5 w-5 text-sky-500 mr-3 flex-shrink-0" />
                          95% customer satisfaction rate
                        </p>
                        <p className="flex items-center text-gray-600">
                          <CheckCircle className="h-5 w-5 text-sky-500 mr-3 flex-shrink-0" />
                          35% increase in revenue per customer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-12 text-center mt-20">
            <h2 className="text-3xl font-bold text-white mb-6">Join the AI Revolution</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the power of enterprise-grade AI tailored for your business. Schedule a demo to see how our solutions can transform your operations and drive growth.
            </p>
            <button className="bg-sky-500 hover:bg-sky-600 text-lg px-8 py-4 rounded-md text-white font-medium transition-colors">
              Schedule Your Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}