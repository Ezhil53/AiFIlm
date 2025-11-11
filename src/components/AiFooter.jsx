import React from 'react';
import { Phone, MoveUpRight, Map, Mail}from 'lucide-react'
import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
import Img from '../assets/images/footer.jpg'


export default function Footer() {
  return (
    <footer className="w-full bg-black relative overflow-hidden">
      {/* Background Image */}
      <img 
        src={Img}
        alt="footer background" 
        className="w-full object-cover absolute inset-0 z-0  opacity-80"
        
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-black z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Logo & Description */}
          <div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Vishnu Ads & Ventures
              </h3>
              <div className="w-36 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full" />
            </div>
            <p className="text-gray-200 text-justify leading-relaxed text-md">
              Blending 25+ years of storytelling expertise with cutting-edge AI technology. 
              Creating cinematic-quality ad films that captivate audiences and drive results—faster, 
              smarter, and more affordable than ever.
            </p>
          </div>

          {/* Column 2: Reach Us */}
          <div className='flex flex-col justify-center items-center'>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-left text-purple-400 mb-6">Reach Us</h4>
              {/* Address */}
              <div className="flex items-start gap-3 text-gray-200 text-md">
                <Map />
                <div>
                  <p> 9, David Towers, 5th floor, </p>
                  <p>Ashoknagar main Rd, Kodambakkam, </p>
                  <p>Chennai, Tamil Nadu 600024</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex  items-center gap-3 text-gray-200 text-md">
                <Phone />
                <a href="tel:+919876543210" className="hover:text-purple-400 transition-colors">
                  +91 85318 18181
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-gray-200 text-md">
                <Mail />
                <a href="mailto:contact@vishnuads.com" className="hover:text-purple-400 transition-colors">
                 contact@vishnuads.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Social Links */}
          <div className='flex flex-col justify-center items-center'>
            <h4 className="text-xl font-bold text-purple-400 mb-6">Follow Us</h4>
            <div className="space-y-1">
              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-200 hover:text-pink-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <FaInstagram/>
                </div>
                <span className="text-md">Instagram</span>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-200 hover:text-blue-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                 <FaLinkedin/>
                </div>
                <span className="text-md">LinkedIn</span>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-200 hover:text-red-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                 <FaYoutube/>
                </div>
                <span className="text-md">YouTube</span>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-200 hover:text-blue-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                 <FaFacebook/>
                </div>
                <span className="text-md">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left: Vishnu Ads Link */}
            <div className="flex items-center gap-2 text-md">
              <span className="text-gray-200">For more details visit -</span>
              <a 
                href="https://vishnuads.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                Vishnu Ads
                <MoveUpRight size={14} />
              </a>
            </div>

            {/* Center: Copyright */}
            <div className="text-gray-400 text-md">
              © 2025 Vishnu ads & Ventures. All rights reserved.
            </div>

            {/* Right: Phone */}
            {/* <div className="flex items-center gap-3 text-white">
              <span className="border border-gray-700 rounded-full p-2 hover:border-purple-500 transition-colors">
                <Phone size={14} />
              </span>
              <a href="tel:+919876543210" className="text-sm hover:text-purple-400 transition-colors">
                +91 98765 43210
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}