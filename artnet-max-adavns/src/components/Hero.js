import React from 'react';

const Hero = ({ setActiveSection }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-gray-900">
            Welcome to <span className="gradient-text">ARTNET</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Discover the artistic vision of <span className="font-semibold text-accent">Max Adavns</span>
          </p>

          {/* Description */}
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A curated collection of contemporary art, exploring the intersection of 
            traditional techniques and modern expression. Each piece tells a unique story 
            through color, form, and emotion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => setActiveSection('gallery')}
              className="px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              View Gallery
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-300 hover:border-accent transition-all transform hover:scale-105"
            >
              About the Artist
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="pt-16 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">50+</div>
              <div className="text-sm text-gray-600 mt-2">Artworks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">10+</div>
              <div className="text-sm text-gray-600 mt-2">Exhibitions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">5+</div>
              <div className="text-sm text-gray-600 mt-2">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
