import React from "react";
import { Sparkles } from "lucide-react";
import Hyperspeed from '../ui/Hyperspeed';

const Ai = () => {
  return (
    <>

      <div className="home-banner backdrop-blur-md relative bg-black min-h-screen">
        {/* <Hyperspeed
            effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        /> */}
        <img src="https://i.pinimg.com/736x/be/79/7a/be797a1548ac188d29681d85ed89801b.jpg" alt=""
          className="absolute inset-0 w-full h-full"
           />

        <div className="relative z-10 max-w-7xl  mx-auto px-6 py-14 ">
          
          {/* Main Headline */}
          <div className="text-center mb-8 space-y-1">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-2 mt-20 mb-6">
                <Sparkles className="w-6 h-6 text-white animate-pulse" />
                <span className=" text-sm font-semibold tracking-wider uppercase border border-black/20 bg-white px-4 py-2 rounded-3xl backdrop-blur-md">
                  Next-Gen Creative Studio
                </span>
              </div>
            </div>
            <div className="">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight ">
                <span className="bg-linear-to-r from-white  to-gray-100 bg-clip-text text-transparent">
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
                <p className="text-gray-100 text-lg leading-relaxed">
                  of creative leadership driving innovation in visual storytelling
                </p>
              </div>
            </div>
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-3">Fast Execution</h3>
                <p className="text-gray-100 text-lg leading-relaxed">
                  Cinematic-quality AI delivery at unprecedented speed
                </p>
              </div>
            </div>

            <div className="group relative bg-transparent backdrop-blur-md rounded-2xl p-8 border border-white transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-3">Save Lakhs</h3>
                <p className="text-gray-100 text-lg leading-relaxed">
                  Premium results without the traditional production costs
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <button className="group relative inline-flex items-center gap-3 text-black   border border-white  px-10 py-5 rounded-full text-lg font-semibold bg-white transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
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
