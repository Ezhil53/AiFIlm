import React from "react";
import { Sparkles } from "lucide-react";

const Ai = () => {
  return (
    <>

      <div className=" home-banner backdrop-blur-md">

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 ">
          {/* Main Headline */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-8 h-8 text-white animate-pulse" />
                <span className=" text-sm font-semibold tracking-wider uppercase border border-black/20 bg-white/40 px-4 py-2 rounded-3xl backdrop-blur-md">
                  Next-Gen Creative Studio
                </span>
              </div>
            </div>
            <div className="">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ">
                <span className=" text-white ">
                  AI-Powered Films
                </span>
              </h1>

              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100">
                Human-crafted Storytelling
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-3">25+ years</h3>
                <p className="text-gray-900 text-lg leading-relaxed">
                  of creative leadership driving innovation in visual storytelling
                </p>
              </div>
            </div>
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-3">Fast Execution</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Cinematic-quality AI delivery at unprecedented speed
                </p>
              </div>
            </div>

            <div className="group relative bg-transparent backdrop-blur-md rounded-2xl p-8 border border-white transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-3">Save Lakhs</h3>
                <p className="text-gray-900 text-lg leading-relaxed">
                  Premium results without the traditional production costs
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button className="group relative inline-flex items-center gap-3 hover:text-black  bg-white/10 border border-white  px-10 py-5 rounded-full text-lg text-white font-semibold backdrop-blur-sm hover:bg-white transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
              <span>Start Your Project</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Ai;
