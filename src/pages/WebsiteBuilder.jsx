import React from 'react';
import { SolutionLayout } from '../components/SolutionLayout';
import { Code, Users, LineChart, Clock, Brain } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "48-Hour Build Time",
    description: "Complete website deployment within 48 hours, including AI design, chatbots, and lead capture systems."
  },
  {
    icon: Users,
    title: "Lead Capture Suite",
    description: "Advanced forms, popups, and chatbots designed to convert visitors into qualified leads."
  },
  {
    icon: LineChart,
    title: "CRM Integration",
    description: "Seamless connection with our Smart CRM for automated lead tracking and nurturing."
  },
  {
    icon: Clock,
    title: "24/7 Updates",
    description: "Continuous optimization based on user behavior and conversion data."
  }
];

const stats = [
  { value: "48", suffix: "h", label: "Build Time" },
  { value: "3.2", suffix: "x", label: "Lead Conversion" },
  { value: "99.9", suffix: "%", label: "Uptime" },
  { value: "45", suffix: "%", label: "Conversion Lift" }
];

export default function WebsiteBuilder() {
  return (
    <SolutionLayout
      title="AI Website Builder"
      description="Enterprise-grade websites built in 48 hours with integrated lead capture and CRM"
      features={features}
      stats={stats}
      detailSection={{
        title: "Complete Website Solution",
        description: "Our 48-hour website solution includes:",
        items: [
          "Custom AI website design and development",
          "Intelligent chatbots with lead qualification",
          "Smart forms and conversion optimization",
          "CRM integration for lead management",
          "Analytics and conversion tracking",
          "Mobile-first responsive design",
          "Secure hosting and SSL"
        ],
        icon: Code,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
      }}
      demoProduct="website-builder"
      demoButtonText="Start Your 48-Hour Build"
    />
  );
}