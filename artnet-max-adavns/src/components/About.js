import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            About Max Adavns
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Artist, Visionary, Creator
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Artist Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-accent to-yellow-600 rounded-lg shadow-2xl flex items-center justify-center">
              <div className="text-white text-center p-8">
                <div className="text-9xl mb-4">👨‍🎨</div>
                <p className="text-2xl font-serif font-semibold">Max Adavns</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-gray-900">
              The Artist's Journey
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Max Adavns is a contemporary artist whose work bridges the gap between 
              traditional artistic techniques and modern conceptual expression. With over 
              five years of dedicated practice, Max has developed a distinctive style that 
              resonates with collectors and art enthusiasts worldwide.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Born with an innate passion for visual storytelling, Max's artistic journey 
              began with classical training in oil painting and gradually evolved to 
              incorporate mixed media, digital techniques, and experimental approaches. 
              Each piece is a carefully crafted exploration of color, form, and emotion.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Max's work has been featured in numerous exhibitions and private collections, 
              earning recognition for its unique ability to evoke deep emotional responses 
              while maintaining technical excellence.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6 text-center">
            Artistic Philosophy
          </h3>
          <blockquote className="text-xl text-gray-700 italic text-center max-w-4xl mx-auto leading-relaxed">
            "Art is not just about what you see, but what you feel. Every brushstroke, 
            every color choice, every composition is a conversation between the artist 
            and the viewer. My goal is to create works that speak to the soul, that 
            challenge perceptions, and that inspire contemplation long after the first glance."
          </blockquote>
          <p className="text-center text-accent font-semibold mt-6">— Max Adavns</p>
        </div>

        {/* Achievements */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-3">🏆</div>
            <h4 className="font-semibold text-gray-900 mb-2">Awards</h4>
            <p className="text-gray-600 text-sm">Multiple art competition recognitions</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-3">🎨</div>
            <h4 className="font-semibold text-gray-900 mb-2">Exhibitions</h4>
            <p className="text-gray-600 text-sm">10+ solo and group exhibitions</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-3">🖼️</div>
            <h4 className="font-semibold text-gray-900 mb-2">Collections</h4>
            <p className="text-gray-600 text-sm">Works in private collections globally</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-3">📚</div>
            <h4 className="font-semibold text-gray-900 mb-2">Publications</h4>
            <p className="text-gray-600 text-sm">Featured in art magazines and journals</p>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Master of Fine Arts</h4>
                <p className="text-gray-600">Contemporary Art Institute, 2021</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Bachelor of Fine Arts</h4>
                <p className="text-gray-600">School of Visual Arts, 2019</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Classical Training</h4>
                <p className="text-gray-600">Academy of Traditional Arts, 2017</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Independent Artist</h4>
                <p className="text-gray-600">2021 - Present</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Gallery Collaborations</h4>
                <p className="text-gray-600">Various galleries, 2020 - Present</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Art Instructor</h4>
                <p className="text-gray-600">Community Art Center, 2019 - 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
