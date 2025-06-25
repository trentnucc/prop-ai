import React from 'react';
import { DemoButton, Mail } from '../components/ui/index.jsx';
import { FeatureCard } from '../components/FeatureCard';
import { Database, Code, MessageSquare, Headphones, Phone, Video } from 'lucide-react';

function FloatingShapes() {
  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 6,
  }));

  return (
    <div className="floating-shapes">
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
    <div className="relative min-h-screen bg-white overflow-hidden">
      <FloatingShapes />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-tight mb-8">
            <div className="text-gray-900 mb-2">Business AI</div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Made Simple
            </div>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
            Transform your business with our custom automations
          </p>
          
          <DemoButton className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors">
            Get Started
          </DemoButton>
        </div>
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
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Powered Tools
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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