import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import FeaturesGrid from '../../components/FeaturesGrid';
import Playground from '../../components/Playground';
import ContentPipeline from '../../components/ContentPipeline';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/CTA';
import ComposerBar from '../../components/ComposerBar';
import Download from '../../Pages/Download';
import Pricing from '../../Pages/Pricing';

// (Optional) Create a Home component to group main content
const Home = () => (
  <>
    <Hero />
    <FeaturesGrid />
    <Playground />
    <ContentPipeline />
    <Testimonials />
    <CTA />
  </>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 pb-24">
        {/* Navbar shown on all pages */}
        <Navbar />

        {/* Route definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* You can add more <Route> here for other pages */}
        </Routes>

        {/* ComposerBar shown on all pages */}
        <ComposerBar />
      </div>
    </BrowserRouter>
  );
};

export default App;