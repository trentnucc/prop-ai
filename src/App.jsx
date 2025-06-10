import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Demo from './pages/Demo';
import EmailOutreach from './pages/EmailOutreach';
import CustomerServiceAI from './pages/CustomerServiceAI';
import SocialMedia from './pages/SocialMedia';
import CRM from './pages/CRM';
import WebsiteBuilder from './pages/WebsiteBuilder';
import VideoEditing from './pages/VideoEditing';
import VideoEditingDemo from './pages/VideoEditingDemo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/demo/video-editing" element={<VideoEditingDemo />} />
          <Route path="/solutions/email-outreach" element={<EmailOutreach />} />
          <Route path="/solutions/customer-service" element={<CustomerServiceAI />} />
          <Route path="/solutions/social-media" element={<SocialMedia />} />
          <Route path="/solutions/crm" element={<CRM />} />
          <Route path="/solutions/website-builder" element={<WebsiteBuilder />} />
          <Route path="/solutions/video-editing" element={<VideoEditing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;