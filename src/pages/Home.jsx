import React, { useRef, useEffect } from 'react';
import { DemoButton, Link, Mail } from '../components/ui/index.jsx';
import { FeatureCard } from '../components/FeatureCard';
import { Database, Code, MessageSquare, Headphones, Phone, Video, ArrowRight } from 'lucide-react';

function FloatingParticles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})`;
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
      
      container.appendChild(particle);
      
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 12000);
    };

    const interval = setInterval(createParticle, 300);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
}

function HeroSection() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
      <FloatingParticles />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none text-center">
              <div className="text-gray-900 mb-4">Business AI</div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Made Simple
              </div>
            </h1>
          </div>
          
          <p className="mt-8 text-xl text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto text-center">
            Transform your business with enterprise-grade AI automation that actually works
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <DemoButton className="btn-primary">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </DemoButton>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "AI Voice System",
    description: "Advanced neural voice AI that handles calls 24/7 with human-like conversation and intelligent routing.",
    icon: Phone,
    link: "/solutions/customer-service"
  },
  {
    title: "Customer Support",
    description: "24/7 intelligent support across voice, chat, and email channels with natural conversation and smart routing.",
    icon: Headphones,
    link: "/solutions/customer-service"
  },
  {
    title: "Smart CRM",
    description: "Automated data collection and organization across all channels - calls, emails, and chat - into a unified customer database.",
    icon: Database,
    link: "/solutions/crm"
  },
  {
    title: "Website Builder",
    description: "AI that builds and optimizes your website in real-time. Continuous A/B testing and performance optimization.",
    icon: Code,
    link: "/solutions/website-builder"
  },
  {
    title: "Email Automation",
    description: "Send 150-5,000 emails daily with AI-driven personalization and custom domain setup included.",
    icon: Mail,
    link: "/solutions/email-outreach"
  },
  {
    title: "Social Media AI",
    description: "Comprehensive social media automation for X and Instagram, including DM automation, trend analysis, and engagement optimization.",
    icon: MessageSquare,
    link: "/solutions/social-media"
  }
];

function FeaturesSection() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            AI Powered Tools
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link} className="group hover:no-underline">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </Link>
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