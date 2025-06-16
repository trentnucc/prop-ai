import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Code, Mail, MessageSquare, Instagram, Database } from 'lucide-react';
import { Link } from '../components/ui';

const productIcons = {
  'website-builder': Code,
  'email-outreach': Mail,
  'customer-service': MessageSquare,
  'social-media': Instagram,
  'crm': Database
};

function CalendlyWidget({ url, className = "min-h-[700px]" }) {
  const widgetRef = React.useRef(null);

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (widgetRef.current && window.Calendly) {
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: widgetRef.current,
          prefill: {},
          utm: {}
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <div className={className}>
      <div ref={widgetRef} style={{ minWidth: '320px', height: '700px' }} />
    </div>
  );
}

function ProductDemo({ calendlyUrl, title, description, features }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link to="/demo" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to products
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="mt-4 text-lg text-gray-600">{description}</p>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What you'll see in the demo:
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <CalendlyWidget url={calendlyUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductSelector({ products, onSelect }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Schedule a Demo</h2>
        <p className="mt-4 text-lg text-gray-600">
          Select a product to schedule a personalized demo with our team
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(products).map(([key, product]) => {
          const IconComponent = productIcons[key];
          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <div className="w-12 h-12 mb-4 text-sky-500 group-hover:text-sky-600 transition-colors">
                <IconComponent className="w-full h-full" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-gray-600 text-left mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-sky-500 group-hover:text-sky-600 text-sm font-medium">
                Schedule Demo →
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const CALENDLY_URL = 'https://calendly.com/trent-nuccetelli/outreach-demo';

const products = {
  'website-builder': {
    title: 'AI Website Builder',
    description: 'Complete website solution with AI-powered design, chatbots, and lead capture',
    features: [
      'Custom AI website design',
      'Smart chatbot integration',
      'Lead capture forms',
      'Analytics dashboard'
    ]
  },
  'email-outreach': {
    title: 'Email Outreach Excellence',
    description: 'AI-powered email automation system for personalized outreach at scale',
    features: [
      'Mass personalization',
      'Smart lead targeting',
      'Automated follow-ups',
      'Analytics dashboard'
    ]
  },
  'customer-service': {
    title: 'Customer Service AI',
    description: 'Advanced chatbots and voice systems with Discord integration',
    features: [
      'Discord server automation & support',
      'Website chat integration',
      'Voice system automation',
      '24/7 multi-channel support'
    ]
  },
  'social-media': {
    title: 'Social Media Mastery',
    description: 'Comprehensive automation for LinkedIn, X, and Instagram',
    features: [
      'LinkedIn connection & messaging automation',
      'X post & engagement automation',
      'Instagram DM & content automation',
      'Cross-platform analytics'
    ]
  },
  'crm': {
    title: 'Smart CRM',
    description: 'AI-enhanced customer relationship management',
    features: [
      'Unified customer data',
      'Smart analytics',
      'Automated workflows',
      'Integration capabilities'
    ]
  }
};

export default function Demo() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedProduct = searchParams.get('product');
  const productData = selectedProduct && products[selectedProduct];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {productData ? (
        <ProductDemo
          calendlyUrl={CALENDLY_URL}
          title={productData.title}
          description={productData.description}
          features={productData.features}
        />
      ) : (
        <ProductSelector
          products={products}
          onSelect={(productKey) => navigate(`/demo?product=${productKey}`)}
        />
      )}
    </div>
  );
}