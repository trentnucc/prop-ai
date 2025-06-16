import React from 'react';
import { SolutionLayout } from '../components/SolutionLayout';
import { CaseStudySection } from '../components/CaseStudySection';
import { Bot, MessageSquare, Users, Brain } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "Multi-Personality AI",
    description: "Customizable AI personalities from professional to casual, with tone matching for different industries and audiences."
  },
  {
    icon: MessageSquare,
    title: "Omni-Channel Support",
    description: "Unified support across Discord, website chat, voice, and email with customizable personalities per channel."
  },
  {
    icon: Brain,
    title: "Custom Training",
    description: "AI trained on your company data, sales scripts, and customer interactions for authentic brand voice."
  },
  {
    icon: Users,
    title: "Sales Optimization",
    description: "Proactive sales engagement with smart lead qualification and deal acceleration."
  }
];

const stats = [
  { value: "24/7", label: "Availability" },
  { value: "12", suffix: "s", label: "Avg Response" },
  { value: "92", suffix: "%", label: "Resolution Rate" },
  { value: "60", suffix: "%", label: "Cost Reduction" }
];

const caseStudies = [
  {
    company: "Property Pros",
    industry: "Real Estate Management",
    challenge: "Managing high call volumes for property inquiries and maintenance requests with limited staff.",
    solution: "Implemented our AI Voice System with custom personality training and lead qualification.",
    results: [
      "85% reduction in missed calls",
      "3.2x increase in qualified leads",
      "Response time reduced to under 30 seconds",
      "40% cost reduction in call handling"
    ]
  },
  {
    company: "City Wide Columbus",
    industry: "Facility Maintenance",
    challenge: "Needed to scale outreach and follow-up across multiple communication channels.",
    solution: "Deployed multi-channel AI with industry-specific training and tone matching.",
    results: [
      "42% increase in qualified leads",
      "Response rate improved from 2% to 5.5%",
      "Sales cycle reduced by 35%",
      "24/7 coverage across all channels"
    ]
  }
];

export default function CustomerServiceAI() {
  return (
    <SolutionLayout
      title="Customer Service AI"
      description="Transform your customer support with intelligent automation and personality-matched AI"
      features={features}
      stats={stats}
      detailSection={{
        title: "Advanced AI Capabilities",
        description: "Our customizable AI platform delivers:",
        items: [
          "Multiple AI personalities for different channels",
          "Custom training on your company data",
          "Industry-specific tone matching",
          "Discord community management",
          "Sales-focused conversation flows",
          "Multi-language support",
          "Emotional intelligence and sentiment analysis",
          "Continuous learning from interactions"
        ],
        icon: Brain,
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
      }}
      demoProduct="customer-service"
      demoButtonText="Transform Your Customer Service"
      additionalContent={<CaseStudySection caseStudies={caseStudies} />}
    />
  );
}