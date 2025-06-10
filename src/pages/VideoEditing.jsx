import React, { useState } from 'react';
import { SolutionLayout } from '../components/SolutionLayout';
import { CaseStudySection } from '../components/CaseStudySection';
import { Video, Clock, Brain, Zap } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: "Auto-Editor Integration",
    description: "Advanced AI-powered video editing using auto-editor technology to automatically remove dead space and optimize pacing."
  },
  {
    icon: Brain,
    title: "Attention Optimization",
    description: "Smart content analysis to maintain viewer engagement through optimal pacing and strategic content placement."
  },
  {
    icon: Clock,
    title: "48-Hour Turnaround",
    description: "Professional video editing and course creation delivered within 48 hours of upload."
  },
  {
    icon: Zap,
    title: "Multi-Format Delivery",
    description: "Receive your edited content via email and SMS in multiple formats optimized for different platforms."
  }
];

const stats = [
  { value: "85", suffix: "%", label: "Engagement Boost" },
  { value: "48", suffix: "h", label: "Turnaround Time" },
  { value: "60", suffix: "%", label: "Time Saved" },
  { value: "3.2", suffix: "x", label: "Retention Rate" }
];

const caseStudies = [
  {
    company: "TechCorp Training",
    industry: "Corporate Education",
    challenge: "Long, unengaging Zoom training recordings with poor retention rates and high dropout.",
    solution: "Implemented our AI video editing service with attention optimization and multi-format delivery.",
    results: [
      "85% increase in course completion rates",
      "60% reduction in video length while maintaining content",
      "3.2x improvement in viewer retention",
      "92% positive feedback on content quality"
    ]
  }
];

export default function VideoEditing() {
  return (
    <SolutionLayout
      title="AI Video Editing & Course Creation"
      description="Transform your Zoom recordings into engaging training courses with AI-powered editing and attention optimization"
      features={features}
      stats={stats}
      detailSection={{
        title: "Professional Video Editing Suite",
        description: "Our AI-powered video editing service includes:",
        items: [
          "Automatic dead space and silence removal",
          "Attention span optimization algorithms",
          "Smart pacing and content flow analysis",
          "Multi-format output (MP4, streaming, mobile)",
          "Automated subtitle and caption generation",
          "Engagement analytics and insights",
          "Email and SMS delivery notifications",
          "Custom branding and intro/outro integration"
        ],
        icon: Video,
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80"
      }}
      demoProduct="video-editing"
      demoButtonText="Start Your Video Transformation"
      additionalContent={<CaseStudySection caseStudies={caseStudies} />}
    />
  );
}