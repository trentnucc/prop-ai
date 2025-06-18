import React from 'react';
import { SolutionLayout } from '../components/SolutionLayout';
import { CaseStudySection } from '../components/CaseStudySection';
import { CheckCircle, Target, Zap, Users, Shield } from 'lucide-react';
import { Mail } from '../components/ui/index.jsx';

const features = [
  {
    icon: Zap,
    title: "High-Volume Sending",
    description: "Send 150-5,000 personalized emails daily with our advanced infrastructure and smart delivery system."
  },
  {
    icon: Target,
    title: "Smart Personalization",
    description: "AI-powered personalization engine ensures each email feels individually crafted."
  },
  {
    icon: Users,
    title: "Custom Lead Lists",
    description: "Targeted lead lists curated for your specific industry, location, and business needs."
  },
  {
    icon: Shield,
    title: "Custom Domains Included",
    description: "Full domain setup and management included with SPF, DKIM, and DMARC configuration."
  }
];

const stats = [
  { value: "5K", suffix: "+", label: "Emails/Day" },
  { value: "96.5", suffix: "%", label: "Inbox Rate" },
  { value: "22", suffix: "%", label: "Open Rate" },
  { value: "5.5", suffix: "%", label: "Response Rate" }
];

const caseStudies = [
  {
    company: "City Wide Columbus",
    industry: "Facility Maintenance",
    challenge: "Struggling with manual email outreach and low response rates in their B2B sales process.",
    solution: "Implemented our AI-powered email automation with LinkedIn integration and custom-curated lead lists.",
    results: [
      "42% increase in qualified leads",
      "Response rate improved from 2% to 5.5%",
      "Sales cycle reduced by 35%",
      "ROI of 320% in first 6 months"
    ]
  }
];

export default function EmailOutreach() {
  return (
    <SolutionLayout
      title="Email & LinkedIn Outreach"
      description="Transform your outreach with AI-powered personalization across email and LinkedIn"
      features={features}
      stats={stats}
      detailSection={{
        title: "Enterprise Email Capabilities",
        description: "Our high-performance platform delivers:",
        items: [
          "Send 150-5,000 emails per day",
          "Custom domains with full setup included",
          "Multi-domain sending capability",
          "Automated warmup and reputation management",
          "Industry-specific lead lists provided",
          "Geographic and role-based targeting",
          "Custom sending schedules",
          "Advanced deliverability monitoring"
        ],
        icon: Mail,
        image: ""
      }}
      demoProduct="email-outreach"
      demoButtonText="Start Your Outreach Journey"
      additionalContent={
        <>
          <div className="mt-20 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">High-Volume Email Infrastructure</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Sending Capacity</h4>
                <ul className="space-y-3">
                  {[
                    "150-5,000 emails per day",
                    "Custom domains included",
                    "Automated IP warmup process",
                    "Real-time delivery monitoring",
                    "Smart throttling and pacing",
                    "Automated bounce handling"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Domain Setup Included</h4>
                <ul className="space-y-3">
                  {[
                    "Full domain configuration",
                    "SPF record setup",
                    "DKIM authentication",
                    "DMARC implementation",
                    "Reputation monitoring",
                    "Deliverability optimization"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <CaseStudySection caseStudies={caseStudies} />
        </>
      }
    />
  );
}