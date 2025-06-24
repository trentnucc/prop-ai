import React, { useRef, useEffect } from 'react';
import { DemoButton, Link, Mail } from '../components/ui/index.jsx';
import { FeatureCard } from '../components/FeatureCard';
import { Database, Code, MessageSquare, Headphones, Phone, Video, ArrowRight, Sparkles } from 'lucide-react';

function AnimatedTitle() {
  return (
    <div className="relative">
      <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
        <span className="block text-gray-900 mb-2">Business AI</span>
        <span className="block gradient-text relative">
          Made Simple
          <div className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400">
            <Sparkles className="w-full h-full animate-pulse" />
          </div>
        </span>
      </h1>
    </div>
  );
}

function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseSize = Math.random() * 2 + 1;
        this.size = this.baseSize;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.color = `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})`;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseSize = Math.random() * 0.5 + 0.2;
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        this.angle += 0.005;
        this.x += Math.cos(this.angle) * 0.3 + this.speedX;
        this.y += Math.sin(this.angle) * 0.3 + this.speedY;
        this.size = this.baseSize + Math.sin(Date.now() * this.pulseSpeed) * this.pulseSize;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(59, 130, 246, 0.3)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      particles.forEach(particle => {
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
      
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <AnimatedBackground />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <AnimatedTitle />
          <p className="mt-8 text-xl sm:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Transform your business with enterprise-grade AI automation that actually works
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <DemoButton className="text-lg px-10 py-5 group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </DemoButton>
            <button className="text-lg px-10 py-5 text-gray-700 hover:text-gray-900 font-medium border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50/50 transition-all duration-200">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 pointer-events-none" />
    </div>
  );
}

const features = [
  {
    title: "AI Voice System",
    description: "Advanced voice AI that handles calls 24/7 with natural conversation and intelligent routing to human agents when needed.",
    icon: Phone,
    link: "/solutions/customer-service"
  },
  {
    title: "Customer Support",
    description: "Intelligent support across all channels with context-aware responses and seamless escalation protocols.",
    icon: Headphones,
    link: "/solutions/customer-service"
  },
  {
    title: "Smart CRM",
    description: "Unified customer data platform with AI-powered insights and automated workflow management.",
    icon: Database,
    link: "/solutions/crm"
  },
  {
    title: "Website Builder",
    description: "AI-powered websites built in 48 hours with integrated lead capture and continuous optimization.",
    icon: Code,
    link: "/solutions/website-builder"
  },
  {
    title: "Email Automation",
    description: "High-volume email campaigns with AI personalization and enterprise-grade deliverability.",
    icon: Mail,
    link: "/solutions/email-outreach"
  },
  {
    title: "Video Editing & Courses",
    description: "Transform recordings into engaging content with AI-powered editing and attention optimization.",
    icon: Video,
    link: "/solutions/video-editing"
  }
];

function FeaturesSection() {
  return (
    <div className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            AI-Powered Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade automation tools designed to scale your business operations
          </p>
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

function CTASection() {
  return (
    <div className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-600/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Join thousands of businesses already using AI to automate operations, increase efficiency, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <DemoButton className="text-lg px-10 py-5 bg-white text-gray-900 hover:bg-gray-100 group">
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </DemoButton>
            <button className="text-lg px-10 py-5 text-white font-medium border border-white/20 rounded-xl hover:border-white/40 hover:bg-white/10 transition-all duration-200">
              Learn More
            </button>
          </div>
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
      <CTASection />
    </>
  );
}