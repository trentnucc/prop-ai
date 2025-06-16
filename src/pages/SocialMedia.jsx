import React from 'react';
import { SolutionLayout } from '../components/SolutionLayout';
import { Instagram, MessageSquare, Bot } from 'lucide-react';

// X (Twitter) icon component
function XIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

const features = [
  {
    icon: XIcon,
    title: "X Automation",
    description: "Advanced automation for X with AI-powered engagement, trend analysis, and viral content optimization."
  },
  {
    icon: Instagram,
    title: "Instagram Automation",
    description: "Intelligent DM automation, story engagement, and content scheduling for maximum reach."
  },
  {
    icon: MessageSquare,
    title: "Discord Integration",
    description: "AI-powered community management, moderation, and support automation for Discord servers."
  },
  {
    icon: Bot,
    title: "Smart Chatbots",
    description: "24/7 customer support chatbots with natural language understanding and seamless human handoff."
  }
];

export default function SocialMedia() {
  return (
    <SolutionLayout
      title="Social & Chat Automation"
      description="Dominate social platforms and automate customer interactions with AI-powered engagement across X, Instagram, and Discord"
      features={features}
      detailSection={{
        title: "Enterprise Social & Chat Features",
        description: "Our AI-powered platform delivers:",
        items: [
          "X post automation and engagement",
          "Instagram DM and content automation",
          "Discord server management and moderation",
          "24/7 intelligent chatbot support",
          "Cross-platform analytics dashboard",
          "Natural language understanding",
          "Automated workflow management",
          "Seamless human handoff protocols"
        ],
        icon: XIcon,
        image: ""
      }}
      demoProduct="social-media"
      demoButtonText="Transform Your Digital Presence"
    />
  );
}