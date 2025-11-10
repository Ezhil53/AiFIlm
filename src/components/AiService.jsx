import React from 'react';
import { Film, Tv } from 'lucide-react';
import { FaYoutube, FaInstagram } from "react-icons/fa";
export default function AiService() {
  const services = [
    {
      icon: Film,
      number: "01",
      title: "Cinema / Theatre Ads",
      description: "Big screen. Bigger impact. Take your brand to the theatres with cinematic flair and unmatched recall.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400"
    },
    {
      icon: Tv,
      number: "02",
      title: "TV & OTT Ads",
      description: "Mass reach, made smarter. Create memorable TV/OTT commercials without traditional production delays.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400"
    },
    {
      icon: FaYoutube,
      number: "03",
      title: "Youtube Ads",
      description: "Educate, engage, convert. From promos to product explainers, your YouTube presence starts here.",
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-500 to-orange-500",
      iconBg: "bg-red-500/10",
      iconColor: "text-red-400"
    },
    {
      icon: FaInstagram,
      number: "04",
      title: "Instagram Reels / Ads",
      description: "Scroll-stopping stories. Trend with AI-generated reels that connect and convert.",
      gradient: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-500 to-purple-500",
      iconBg: "bg-pink-500/10",
      iconColor: "text-pink-400"
    }
  ];

  return (
    <section className="relative bg-linear-to-b from-black via-gray-900 to-black py-24  overflow-hidden">
      <div className='max-w-6xl mx-auto'>
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255) 2px, transparent 2px),
                         linear-gradient(90deg, rgba(255,255,255) 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
                Our Expertise
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Where AI Meets
              </span>
              <br />
              <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Broadcast Quality
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We don't just make AI-generated content — we create full-fledged brand films,
              TV commercials, and cinematic-quality videos ready for screens big and small.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-4 gap-4 lg:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group relative">
                  <div className="relative h-full bg-white backdrop-blur-sm rounded-3xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2">
                  
                    <div className={`absolute inset-0 bg-linear-to-br ${service.bgGradient} rounded-3xl  transition-opacity duration-500`} />

                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-6xl font-bold text-gray-100/40  group-hover:text-gray-100 transition-colors duration-500">
                          {service.number}
                        </span>
                        <div className='w-16 h-16  rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500'>
                          <Icon className="text-white" size={40} />
                        </div>
                      </div>
                      <h3 className="text-lg lg:text-2xl font-bold text-black  mb-4 ">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 text-md leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <p className="text-gray-400 text-lg mb-8">
              Ready to transform your brand's visual story?
            </p>
            <button className="group inline-flex items-center gap-3 bg-white/20 border border-white text-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-white  transition-all duration-300 hover:transform hover:scale-105 ">
              <span>Explore Our Work</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div></section>
  );
}