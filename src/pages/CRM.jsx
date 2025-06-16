import React from 'react';
import { SolutionLayout } from '../components/SolutionLayout';
import { CaseStudySection } from '../components/CaseStudySection';
import { Database, Shield, Users, LineChart } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: "Unified Customer Data",
    description: "Centralized database collecting and organizing customer interactions across all channels."
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Advanced security with encryption and compliance with major privacy regulations."
  },
  {
    icon: Users,
    title: "Smart Engagement",
    description: "AI-powered engagement tracking and automated follow-up management."
  },
  {
    icon: LineChart,
    title: "Analytics Dashboard",
    description: "Comprehensive analytics for customer interactions, trends, and insights."
  }
];

const stats = [
  { value: "360", suffix: "°", label: "Customer View" },
  { value: "98.5", suffix: "%", label: "Data Accuracy" },
  { value: "42", suffix: "%", label: "Time Saved" },
  { value: "2.8", suffix: "x", label: "Efficiency Gain" }
];

const caseStudies = [
  {
    company: "City Wide Columbus",
    industry: "Facility Maintenance",
    challenge: "Managing customer relationships across multiple service lines with manual processes.",
    solution: "Deployed our AI-powered CRM with automated workflow management.",
    results: [
      "42% reduction in administrative time",
      "Customer satisfaction increased to 95%",
      "Service delivery speed improved by 28%",
      "Revenue per customer up 35%"
    ]
  }
];

export default function CRM() {
  return (
    <SolutionLayout
      title="Smart CRM Integration"
      description="Unified customer data platform with AI-powered insights"
      features={features}
      stats={stats}
      detailSection={{
        title: "Advanced CRM Features",
        description: "Our AI-powered platform delivers:",
        items: [
          "Automated data collection and organization",
          "Smart customer segmentation",
          "Predictive analytics",
          "Automated task management",
          "Custom workflow automation",
          "Integration with major platforms",
          "Real-time collaboration tools",
          "Mobile access and notifications"
        ],
        icon: Database,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      }}
      demoProduct="crm"
      demoButtonText="Experience Smart CRM"
      additionalContent={<CaseStudySection caseStudies={caseStudies} />}
    />
  );
}