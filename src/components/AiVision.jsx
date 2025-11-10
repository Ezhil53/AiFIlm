import React from "react";

const AiVision = () => {
  return (
    <>
      <section className="relative bg-linear-to-br from-black via-violet-900 to-gray-900 py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.05) 2px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Main Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-2">
                Reimagining Advertising
              </span>
              <span className="block text-white mb-4">& Filmmaking</span>
            </h2>

            <p className="text-2xl md:text-3xl text-purple-300 font-medium">
              Where Human Creativity Meets the Power of AI
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vision Card */}
            <div className="group relative">
              <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Content */}
                <div className="relative">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                    Our Vision
                  </h3>

                  <p className="text-xl text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    To blend 25+ years of storytelling expertise with
                    cutting-edge AI, delivering impactful ad films swiftly and
                    affordably.
                  </p>
                  <div className="mt-8 h-1 w-24 bg-linear-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-500" />
                </div>

                {/* Corner Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500" />
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative">
              <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                    Our Mission
                  </h3>

                  <p className="text-xl text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    To revolutionize brand communication through smart
                    storytelling, making innovative ad films accessible to every
                    business.
                  </p>

                  <div className="mt-8 h-1  w-24 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-500" />
                </div>

                <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-300 text-sm font-medium">
                Transforming Stories Since 1999
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiVision;
