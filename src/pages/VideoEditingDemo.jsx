import React, { useState } from 'react';
import { ArrowLeft, Video, Clock, Brain, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VideoUpload } from '../components/VideoUpload';
import { ContactForm } from '../components/ContactForm';

export default function VideoEditingDemo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleUpload = (file) => {
    setUploadedFile(file);
    setCurrentStep(2);
  };

  const handleContactSubmit = (formData) => {
    console.log('Contact form submitted:', formData);
    // Here you would typically send this data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/solutions/video-editing"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Video Editing
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Transform Your Training Videos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your Zoom recordings and we'll create engaging, optimized training courses using AI-powered editing
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              currentStep >= 1 ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              1
            </div>
            <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-sky-500' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              currentStep >= 2 ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              2
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {currentStep === 1 && (
            <div className="p-8">
              <div className="text-center mb-8">
                <Video className="h-16 w-16 text-sky-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Upload Your Video
                </h2>
                <p className="text-gray-600">
                  Drag and drop your Zoom recording or training video to get started
                </p>
              </div>
              
              <VideoUpload onUpload={handleUpload} />
              
              {/* Features Preview */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <Clock className="h-8 w-8 text-sky-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Auto-Editing</h3>
                  <p className="text-sm text-gray-600">Remove dead space and optimize pacing</p>
                </div>
                <div className="text-center p-4">
                  <Brain className="h-8 w-8 text-sky-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Attention Optimization</h3>
                  <p className="text-sm text-gray-600">Maximize viewer engagement</p>
                </div>
                <div className="text-center p-4">
                  <Zap className="h-8 w-8 text-sky-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">48-hour turnaround via email/SMS</p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Video Uploaded Successfully!
                </h2>
                <p className="text-gray-600">
                  Now let's get your contact information so we can send you the edited video
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ContactForm 
                    onSubmit={handleContactSubmit}
                    title="Contact Information"
                  />
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    What happens next?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">AI Analysis</h4>
                        <p className="text-sm text-gray-600">Our AI analyzes your video for optimal editing points</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Auto-Editing</h4>
                        <p className="text-sm text-gray-600">Remove dead space and optimize for attention span</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Delivery</h4>
                        <p className="text-sm text-gray-600">Receive your edited video via email and SMS within 48 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-sky-50 rounded-lg">
                    <h4 className="font-medium text-sky-900 mb-2">Pricing</h4>
                    <p className="text-2xl font-bold text-sky-900">$99 <span className="text-sm font-normal">per video</span></p>
                    <p className="text-sm text-sky-700">Professional editing with 48-hour delivery</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}