import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (does not block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center sm:pt-28">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-3 py-1 text-xs font-medium text-pink-600 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-pink-500" />
          New season • Minimalist luxury
        </span>
        <h1 className="font-display text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Effortless style for modern women
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-gray-600">
          Discover a curated collection of clean silhouettes, pastel palettes, and everyday essentials built for comfort and confidence.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-xl bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-600/20 transition hover:bg-pink-700"
          >
            Shop new arrivals
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-pink-700 ring-1 ring-pink-200 transition hover:bg-pink-50"
          >
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
