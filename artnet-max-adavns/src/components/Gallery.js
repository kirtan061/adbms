import React, { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArt, setSelectedArt] = useState(null);

  const categories = ['all', 'abstract', 'landscape', 'portrait', 'contemporary'];

  const artworks = [
    {
      id: 1,
      title: 'Ethereal Dreams',
      category: 'abstract',
      year: '2024',
      medium: 'Oil on Canvas',
      dimensions: '48" x 36"',
      description: 'An exploration of subconscious imagery through bold color and fluid forms.',
      color: 'bg-gradient-to-br from-purple-400 to-pink-500'
    },
    {
      id: 2,
      title: 'Mountain Solitude',
      category: 'landscape',
      year: '2023',
      medium: 'Acrylic on Canvas',
      dimensions: '60" x 40"',
      description: 'Capturing the serene majesty of alpine landscapes at dawn.',
      color: 'bg-gradient-to-br from-blue-400 to-green-500'
    },
    {
      id: 3,
      title: 'Urban Reflections',
      category: 'contemporary',
      year: '2024',
      medium: 'Mixed Media',
      dimensions: '36" x 36"',
      description: 'A commentary on modern city life through layered textures and metallic accents.',
      color: 'bg-gradient-to-br from-gray-600 to-yellow-500'
    },
    {
      id: 4,
      title: 'Silent Observer',
      category: 'portrait',
      year: '2023',
      medium: 'Oil on Canvas',
      dimensions: '30" x 24"',
      description: 'A contemplative study of human emotion and introspection.',
      color: 'bg-gradient-to-br from-amber-600 to-red-500'
    },
    {
      id: 5,
      title: 'Cosmic Dance',
      category: 'abstract',
      year: '2024',
      medium: 'Acrylic on Canvas',
      dimensions: '72" x 48"',
      description: 'Inspired by celestial movements and the rhythm of the universe.',
      color: 'bg-gradient-to-br from-indigo-600 to-purple-700'
    },
    {
      id: 6,
      title: 'Autumn Whispers',
      category: 'landscape',
      year: '2023',
      medium: 'Watercolor',
      dimensions: '24" x 18"',
      description: 'The gentle transition of seasons captured in delicate washes.',
      color: 'bg-gradient-to-br from-orange-400 to-red-600'
    },
    {
      id: 7,
      title: 'Digital Age',
      category: 'contemporary',
      year: '2024',
      medium: 'Digital Print on Canvas',
      dimensions: '40" x 30"',
      description: 'Exploring the intersection of technology and human experience.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-700'
    },
    {
      id: 8,
      title: 'Inner Light',
      category: 'portrait',
      year: '2024',
      medium: 'Oil on Canvas',
      dimensions: '32" x 24"',
      description: 'Illuminating the strength and resilience of the human spirit.',
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500'
    },
    {
      id: 9,
      title: 'Fragments of Time',
      category: 'abstract',
      year: '2023',
      medium: 'Mixed Media',
      dimensions: '48" x 48"',
      description: 'A meditation on memory and the passage of time.',
      color: 'bg-gradient-to-br from-teal-500 to-emerald-600'
    },
  ];

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Art Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a diverse collection of artworks spanning multiple styles and mediums
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              onClick={() => setSelectedArt(artwork)}
              className="art-card-hover bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
            >
              <div className={`h-64 ${artwork.color} flex items-center justify-center`}>
                <div className="text-white text-center p-6">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-sm opacity-75">{artwork.medium}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  {artwork.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{artwork.year}</p>
                <p className="text-sm text-gray-500">{artwork.dimensions}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No artworks found in this category.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedArt && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArt(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedArt(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 bg-white rounded-full p-2 shadow-lg z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className={`h-96 ${selectedArt.color} flex items-center justify-center`}>
                <div className="text-white text-center p-8">
                  <div className="text-8xl mb-6">🎨</div>
                  <p className="text-lg opacity-90">{selectedArt.medium}</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                  {selectedArt.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                  <span className="bg-gray-100 px-3 py-1 rounded">{selectedArt.year}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">{selectedArt.medium}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">{selectedArt.dimensions}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded capitalize">{selectedArt.category}</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedArt.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
