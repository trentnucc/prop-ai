import React, { useState, useCallback } from 'react';
import { Upload, CheckCircle, AlertCircle, Video } from 'lucide-react';

export function VideoUpload({ onUpload, isUploading }) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('idle'); // idle, uploading, success, error
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);

  const handleChange = useCallback((e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  }, []);

  const handleFiles = (files) => {
    const file = files[0];
    
    // Validate file type
    const validTypes = ['video/mp4', 'video/avi', 'video/mov', 'video/wmv', 'video/webm'];
    if (!validTypes.includes(file.type)) {
      setUploadStatus('error');
      return;
    }

    // Validate file size (max 2GB)
    if (file.size > 2 * 1024 * 1024 * 1024) {
      setUploadStatus('error');
      return;
    }

    setUploadStatus('uploading');
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadStatus('success');
          onUpload && onUpload(file);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const getStatusIcon = () => {
    switch (uploadStatus) {
      case 'success':
        return <CheckCircle className="h-12 w-12 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-12 w-12 text-red-500" />;
      case 'uploading':
        return <Video className="h-12 w-12 text-sky-500 animate-pulse" />;
      default:
        return <Upload className="h-12 w-12 text-gray-400" />;
    }
  };

  const getStatusText = () => {
    switch (uploadStatus) {
      case 'success':
        return 'Upload successful! We\'ll process your video and send it back within 48 hours.';
      case 'error':
        return 'Upload failed. Please ensure your file is a valid video format under 2GB.';
      case 'uploading':
        return `Uploading... ${uploadProgress}%`;
      default:
        return 'Drag and drop your video file here, or click to select';
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div
        className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
          dragActive
            ? 'border-sky-500 bg-sky-50'
            : uploadStatus === 'error'
            ? 'border-red-300 bg-red-50'
            : uploadStatus === 'success'
            ? 'border-green-300 bg-green-50'
            : 'border-gray-300 bg-gray-50 hover:border-gray-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="video/*"
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={uploadStatus === 'uploading' || uploadStatus === 'success'}
        />
        
        <div className="space-y-4">
          {getStatusIcon()}
          
          <div>
            <p className="text-lg font-medium text-gray-900">
              {getStatusText()}
            </p>
            
            {uploadStatus === 'idle' && (
              <p className="text-sm text-gray-500 mt-2">
                Supported formats: MP4, AVI, MOV, WMV, WebM (Max 2GB)
              </p>
            )}
            
            {uploadStatus === 'uploading' && (
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-sky-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {uploadStatus === 'success' && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            What happens next?
          </h3>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Our AI will analyze your video for optimal editing points</li>
            <li>• Dead space and silence will be automatically removed</li>
            <li>• Content will be optimized for maximum attention retention</li>
            <li>• You'll receive the edited video via email and SMS within 48 hours</li>
          </ul>
        </div>
      )}
    </div>
  );
}