import React from 'react';
import { FaLightbulb, FaMapMarkedAlt, FaRobot, FaMagic, FaRocket } from 'react-icons/fa';

export default function HowWeWorkSection() {
  const steps = [
    {
      icon: FaLightbulb,
      title: "Brief It",
      description: "We understand your goal and audience.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      icon: FaMapMarkedAlt,
      title: "Plan It",
      description: "Script, style, and visual flow — mapped out.",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      icon: FaRobot,
      title: "Create It",
      description: "AI-generated visuals, crafted to match your brand.",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      icon: FaMagic,
      title: "Polish It",
      description: "Edit, voice, color — post-production magic.",
      color: "from-pink-400 to-red-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80"
    },
    {
      icon: FaRocket,
      title: "Final Touch",
      description: "Feedback, tweaks, and ready to launch.",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&q=80"
    }
  ];

  return (
    <section className="relative bg-linear-to-b from-gray-900 via-black to-gray-900 py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}} />
      
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
              Our Process
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              How We Work?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            At <span className="text-white font-semibold">AI Tales</span>, we blend storytelling experience with the power of AI to craft 
            high-quality films, faster than traditional workflows — without compromising on creativity or clarity.
          </p>
        </div>

        {/* Timeline Process */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2" />

          {/* Steps */}
          <div className=" ">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative ">
                  {/* Desktop Layout */}
                  <div className={`hidden lg:grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    
                    <div className={`${isEven ? 'text-right pr-12' : 'text-left pl-12 col-start-2'}`}>
                      <div className="group">
                        <div className={`inline-flex items-center gap-4 mb-6 ${isEven ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-white border ${step.borderColor}`}>
                            <Icon className={`text-3xl text-${step.color}  `} />
                          </div>
                        
                        </div>
                        
                        <h3 className="text-4xl font-bold text-white mb-4  ">
                          {step.title}
                        </h3>
                        
                        <p className="text-xl text-gray-300 leading-relaxed ">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    
                    <div className={`${isEven ? 'pl-12' : 'pr-12 col-start-1 row-start-1'}`}>
                      <div className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className={`absolute inset-0 bg-linear-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden ">
                    <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-3 border border-white/10 hover:border-white/20 transition-all duration-300">
                      {/* Image */}
                      <div className="relative overflow-hidden rounded-2xl mb-6 border border-white/10">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className={`absolute inset-0 bg-linear-to-br ${step.color} opacity-20`} />
                      </div>

                      {/* Content */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 ${step.bgColor} rounded-xl text-white flex items-center justify-center border ${step.borderColor}`}>
                          <Icon className={`text-2xl text-${step.color} `} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-white">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Circle - Desktop Only */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-4 h-4 rounded-full bg-linear-to-br ${step.color} shadow-lg`}>
                      <div className="absolute inset-0 rounded-full bg-linear-to-br from-white/40 to-transparent animate-ping" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-8">
            Ready to bring your vision to life with AI?
          </p>
          <button className="group inline-flex items-center gap-3 bg-linear-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:transform hover:scale-105 shadow-lg shadow-purple-500/30">
            <span>Let's Get Started</span>
            <FaRocket className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}