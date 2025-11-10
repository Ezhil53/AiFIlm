import React from "react";

const AiShoot = () => {
  return (
    <>
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block mb-6">
                <span className="text-purple-600 text-sm font-semibold tracking-widest uppercase px-4 py-2 bg-purple-100 rounded-full">
                  Hybrid Approach
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Shoot + AI
                <span className="block text-purple-600">(Hybrid Mode)</span>
              </h2>

              <h3 className="text-lg md:text-xl font-semibold text-gray-200 mb-6">
                Real Shoots When Needed. Enhanced with AI.
              </h3>

              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                Want your factory, your founder, or a real celebrity in the
                film? We shoot it. For everything else — from visuals to magic —
                we let AI handle it. <br/>
                <span className="my-3">That's our hybrid workflow -{" "}
                <strong>
                  Efficient, Flexible, and built around your story.
                </strong>
                </span> 
              </p>

              <button className="group inline-flex items-center gap-3 bg-linear-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:transform hover:scale-105 shadow-lg shadow-purple-500/30">
                <span>Let's Create Your Film</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>

            {/* Right Image */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80"
                  alt="Hybrid filming with camera and AI"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  Real Shoots
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  AI Enhancement
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  Best of Both
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiShoot;
