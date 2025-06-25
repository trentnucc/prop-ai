import React, { useRef, useEffect } from 'react';
import { DemoButton, Link, Mail } from '../components/ui/index.jsx';
import { FeatureCard } from '../components/FeatureCard';
import { Database, Code, MessageSquare, Headphones, Phone, Video, ArrowRight, Sparkles, Zap, Star } from 'lucide-react';

function AnimatedTitle() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center">
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-xl animate-pulse"></div>
        <Sparkles className="relative w-12 h-12 text-yellow-400 animate-spin" style={{ animationDuration: '8s' }} />
      </div>
      
      <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none text-center">
        <div className="relative">
          <span className="block text-white mb-4 neon-text">Business AI</span>
          <span className="block gradient-text relative float-animation">
            Made Simple
            <div className="absolute -top-6 -right-6 w-8 h-8">
              <Star className="w-full h-full text-yellow-400 animate-pulse" />
            </div>
          </span>
        </div>
      </h1>
      
      <div className="mt-8 flex items-center justify-center space-x-4">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-2 h-2 bg-pink-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}

function FuturisticBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.hue = Math.random() * 360;
        this.brightness = Math.random() * 50 + 50;
        this.alpha = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.hue += 0.5;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${this.hue}, 100%, ${this.brightness}%)`;
        ctx.shadowBlur = 20;
        ctx.shadowColor = `hsl(${this.hue}, 100%, ${this.brightness}%)`;
        ctx.fill();
        ctx.restore();
      }
    }

    const particles = [];
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = 0.1 * (1 - distance / 100);
            ctx.beginPath();
            ctx.strokeStyle = `hsl(${(particle.hue + otherParticle.hue) / 2}, 100%, 70%)`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
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
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden grid-bg flex items-center justify-center">
      <FuturisticBackground />
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">
          <AnimatedTitle />
          
          <p className="mt-12 text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto text-center">
            Transform your business with <span className="gradient-text font-semibold">enterprise-grade AI automation</span> that actually works
          </p>
          
          <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <DemoButton className="text-lg px-12 py-6 group pulse-glow">
              Get Started
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </DemoButton>
            <button className="text-lg px-12 py-6 text-white font-medium glass-light rounded-2xl hover:bg-white/10 transition-all duration-300 group">
              <span className="flex items-center">
                Watch Demo
                <Zap className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
          </div>
          
          <div className="mt-16 flex items-center justify-center space-x-8 text-gray-400">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">10K+</div>
              <div className="text-sm">Businesses Automated</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">99.9%</div>
              <div className="text-sm">Uptime Guaranteed</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm">AI Support</div>
            </div>
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
    description: "Omnichannel intelligent support with context-aware responses and seamless escalation protocols.",
    icon: Headphones,
    link: "/solutions/customer-service"
  },
  {
    title: "Smart CRM",
    description: "Unified customer intelligence platform with predictive analytics and automated workflow orchestration.",
    icon: Database,
    link: "/solutions/crm"
  },
  {
    title: "Website Builder",
    description: "AI-powered websites deployed in 48 hours with integrated lead capture and continuous optimization.",
    icon: Code,
    link: "/solutions/website-builder"
  },
  {
    title: "Email Automation",
    description: "High-volume email campaigns with neural personalization and enterprise-grade deliverability.",
    icon: Mail,
    link: "/solutions/email-outreach"
  },
  {
    title: "Video Intelligence",
    description: "Transform recordings into engaging content with AI-powered editing and attention optimization.",
    icon: Video,
    link: "/solutions/video-editing"
  }
];

function FeaturesSection() {
  return (
    <div className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-light mb-8">
            <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-medium">AI-Powered Solutions</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8 text-center">
            The Future of
            <span className="block gradient-text">Business Automation</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center">
            Enterprise-grade automation tools designed to scale your business operations into the future
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
    <div className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"></div>
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-light mb-8">
            <Star className="w-5 h-5 text-yellow-400 mr-2 animate-pulse" />
            <span className="text-yellow-400 font-medium">Ready to Transform?</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8 text-center">
            Join the
            <span className="block gradient-text">AI Revolution</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16 text-center">
            Join thousands of businesses already using AI to automate operations, increase efficiency, and drive exponential growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <DemoButton className="text-lg px-12 py-6 bg-white text-black hover:bg-gray-100 group">
              Schedule Demo
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </DemoButton>
            <button className="text-lg px-12 py-6 text-white font-medium glass-light rounded-2xl hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">500%</div>
              <div className="text-gray-400">ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">48h</div>
              <div className="text-gray-400">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-400">AI Operations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">∞</div>
              <div className="text-gray-400">Scalability</div>
            </div>
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