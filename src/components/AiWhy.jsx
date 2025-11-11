import React from "react";

const AiWhy = () => {
  return (
    <>
      <section className="bg-linear-to-r from-gray-900 to-black  py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-purple-600 text-sm font-semibold tracking-widest uppercase px-4 py-2 bg-purple-100 rounded-full">
                The Future of Production
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Why AI Photoshoots?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
            <div className=" group relative  rounded-3xl p-8 lg:p-10 overflow-hidden border   transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 opacity-50 ">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80"
                  alt="Global locations"
                  className="w-full h-fit object-cover"
                />
              </div>

              <div className="absolute inset-0  backdrop-blur-[1px]" />

              <div className="relative z-10 ">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-200 mb-4">
                  Go anywhere, without going anywhere.
                </h3>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Create stunning scenes from across the globe—no flights, no
                  logistics, just limitless virtual locations with real-world
                  authenticity.
                </p>

                <div className="flex flex-wrap gap-4 mt-3">
                  <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-blue-900">
                      ∞ Locations
                    </span>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-blue-900">
                      Zero Travel
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className=" group relative  rounded-3xl p-8 overflow-hidden border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 opacity-90">
                <img
                  className="absolute inset-0 object-bottom"
                  src='https://images.unsplash.com/photo-1639189702833-8de5ecf2ca8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
                />
              </div>

              <div className="absolute inset-0  backdrop-blur-[1px]" />

              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
                  Save big, shoot smarter.
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed mb-6">
                  Cut production costs by up to 70% while maintaining top-tier
                  cinematic quality—smart filmmaking powered by AI innovation.
                </p>
                <div className="bg-white/60 backdrop-blur-sm px-4 py-2 w-fit rounded-full">
                  <span className="text-sm font-semibold text-blue-900">
                    70% Cost Reduction
                  </span>
                </div>
              </div>
            </div>

            {/* Wide Card */}
            <div className="lg:col-span-3 group relative rounded-3xl p-8 lg:p-10 overflow-hidden border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl ">
              <div className="absolute right-0 bottom-0 w-full h-full ">
                <img
                  src="https://images.unsplash.com/photo-1618609378039-b572f64c5b42?w=800&q=80"
                  alt="Creative styles"
                  className="w-full h-full object-cover"
                />
              </div>

                <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-black z-0" />
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 max-w-2xl">
                  Any style, any time—no limits.
                </h3>
                <p className="text-lg text-gray-100 leading-relaxed max-w-xl">
                  From retro noir to futuristic sci-fi, bring any visual style
                  to life instantly—unleash your imagination without waiting on
                  sets or seasons.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-4 py-2 bg-white/60 backdrop-blur-sm text-purple-900 rounded-full text-sm font-medium border border-purple-200">
                    Minimalist
                  </span>
                  <span className="px-4 py-2 bg-white/60 backdrop-blur-sm text-purple-900 rounded-full text-sm font-medium border border-purple-200">
                    Cinematic
                  </span>
                  <span className="px-4 py-2 bg-white/60 backdrop-blur-sm text-purple-900 rounded-full text-sm font-medium border border-purple-200">
                    + More
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiWhy;
