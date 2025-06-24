import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare, CheckCircle } from 'lucide-react';

export function ContactForm({ onSubmit, title = "Get Your Video Edited" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    onSubmit && onSubmit(formData);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto p-8 glass rounded-2xl text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-3">
          Thank you for your submission!
        </h3>
        <p className="text-green-700 leading-relaxed">
          We'll contact you within 24 hours to discuss your video editing needs.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
        {title}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="input-modern w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="input-modern w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="input-modern w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="input-modern w-full px-4 py-4 rounded-xl focus:outline-none"
            placeholder="Enter your company name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Details
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="input-modern w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none resize-none"
              placeholder="Tell us about your video editing needs..."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-modern w-full text-white font-medium py-4 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Get Started'}
        </button>
      </form>
    </div>
  );
}