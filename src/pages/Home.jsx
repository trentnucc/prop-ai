import React, { useRef, useEffect } from 'react';
import { DemoButton, Link, Mail } from '../components/ui';
import { FeatureCard } from '../components/FeatureCard';
import { Database, Code, MessageSquare, Headphones, Phone, Video } from 'lucide-react';

function AnimatedTitle() {
  return (
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
      <span className="text-gray-900">Business AI</span>
      <br />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-gray-700">
        Made Simple
      </span>
    </h1>
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
        this.baseSize = Math.random() * 3 + 2;
        this.size = this.baseSize;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.color = `rgba(56, 189, 248, ${Math.random() * 0.5 + 0.3})`;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseSize = Math.random() * 1 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        this.angle += 0.01;
        this.x += Math.cos(this.angle) * 0.5 + this.speedX;
        this.y += Math.sin(this.angle) * 0.5 + this.speedY;
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
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const particles = [];
    for (let i = 0; i < 200; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
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

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
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
    <div className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        <AnimatedBackground />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <AnimatedTitle />
          <p className="mt-6 text-lg sm:text-xl text-gray-600 px-4 sm:px-0">
            Transform your business with our custom automations
          </p>
          <div className="mt-8">
            <DemoButton className="text-lg px-8 py-4">Get Started</DemoButton>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60 pointer-events-none" />
    </div>
  );
}

const features = [
  {
    title: "AI Voice System",
    description: "Advanced voice AI system that handles calls 24/7, understands context, and seamlessly transfers to human agents when needed.",
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
    title: "Video Editing & Courses",
    description: "Transform Zoom recordings into engaging training courses with AI-powered editing and attention optimization.",
    icon: Video,
    link: "/solutions/video-editing"
  }
];

function FeaturesSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            AI Powered Tools
          </h2>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    <div className="relative py-24 bg-slate-800">
      <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Join the AI revolution and stay ahead of the competition. Let's discuss how our solutions can drive your success.
          </p>
          <div className="mt-10">
            <DemoButton className="text-lg px-8 py-4" />
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