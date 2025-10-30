import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Features />
      <ProductShowcase />
      <Testimonials />

      <footer className="mx-auto max-w-7xl px-6 pb-12">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-pink-100 pt-8 text-sm text-gray-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Serene Commerce. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Support</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default App;
