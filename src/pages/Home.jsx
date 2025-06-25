import React from 'react';
import { DemoButton, Mail } from '../components/ui/index.jsx';
import { FeatureCard } from '../components/FeatureCard';
import { Database, Code, MessageSquare, Headphones, Phone, Video } from 'lucide-react';

function FloatingShapes() {
  const shapes = [
    { id: 1, size: 60, left: 8, top: 15, delay: 0 },
    { id: 2, size: 40, left: 88, top: 12, delay: 2 },
    { id: 3, size: 80, left: 12, top: 75, delay: 4 },
    { id: 4, size: 35, left: 85, top: 70, delay: 1 },
    { id: 5, size: 50, left: 75, top: 30, delay: 3 },
    { id: 6, size: 25, left: 20, top: 45, delay: 5 },
    { id: 7, size: 45, left: 92, top: 40, delay: 6 },
    { id: 8, size: 30, left: 5, top: 55, delay: 7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="floating-shape"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center">
      <FloatingShapes />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-8">
          <div className="text-gray-900 mb-4">Business AI</div>
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Made Simple
          </div>
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Transform your business with our custom automations
        </p>
        
        <DemoButton className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center">
          Get Started →
        </DemoButton>
      </div>
    </div>
  );
}

const features = [
  {
    title: "AI Voice System",
    description: "Advanced voice AI system that handles calls 24/7, understands context, and seamlessly transfers to human agents when needed.",
    icon: Phone
  },
  {
    title: "Customer Support",
    description: "24/7 intelligent support across voice, chat, and email channels with natural conversation and smart routing.",
    icon: Headphones
  },
  {
    title: "Smart CRM",
    description: "Automated data collection and organization across all channels - calls, emails, and chat - into a unified customer database.",
    icon: Database
  },
  {
    title: "Website Builder",
    description: "AI that builds and optimizes your website in real-time. Continuous A/B testing and performance optimization.",
    icon: Code
  },
  {
    title: "Email Automation",
    description: "Send 150-5,000 emails daily with AI-driven personalization and custom domain setup included.",
    icon: Mail
  },
  {
    title: "Social Media AI",
    description: "Comprehensive social media automation for X and Instagram, including DM automation, trend analysis, and engagement optimization.",
    icon: MessageSquare
  }
];

function FeaturesSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            AI Powered Tools
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}