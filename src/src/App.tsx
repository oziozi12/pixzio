import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import FeaturesGrid from '../../components/FeaturesGrid';
import Playground from '../../components/Playground';
import ContentPipeline from '../../components/ContentPipeline';
import Testimonials from '../../components/Testimonials';
import ComposerBar from '../../components/ComposerBar';
import Download from '../../Pages/Download';
import { Routes, Route } from "react-router-dom";
import CTA from '../../components/CTA';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900 pb-24">
      <Navbar />
      <main>
        <Hero />
        
        {/* Features Overview */}
        <FeaturesGrid />
        
        {/* Interactive Play/Preview */}
        <Playground />
        
        {/* Image to Content Pipeline */}
        <ContentPipeline />

        {/* Customer Reviews */}
        <Testimonials /> 

        {/* CTA */}
        <CTA />

      </main>

      {/* Floating Composer Bar */}
      <ComposerBar />
    </div>
  );
};

export default App;