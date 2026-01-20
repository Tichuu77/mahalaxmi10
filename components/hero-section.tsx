"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, MapPin, Award, TrendingUp } from "lucide-react"
import Script from "next/script"

export function HeroSection() {
  const videoRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [isVideoVisible, setIsVideoVisible] = useState(false)

  // Delay video initialization for better performance
  useEffect(() => {
    setIsLoaded(true)
    
    // Delay video load by 1 second to prioritize critical content
    const timer = setTimeout(() => {
      setIsVideoVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Initialize video player only when script is loaded AND video should be visible
  useEffect(() => {
    if (!scriptLoaded || !isVideoVisible || !videoRef.current) return

    if (window.cloudinary) {
      try {
        window.cloudinary.videoPlayer('cloudinary-player', {
          cloud_name: 'dxujnm2sl',
          publicId: 'Mahalaxmi_1_1_v6khvx',
          controls: false,
          autoplay: true,
          loop: true,
          muted: true,
          fluid: false,
          playsinline: true,
          bigPlayButton: false,
          showLogo: false,
          preload: 'none', // Changed from 'auto' for better performance
        })
      } catch (error) {
        console.error('Video player initialization failed:', error)
      }
    }
  }, [scriptLoaded, isVideoVisible])

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Load Cloudinary scripts asynchronously with Next.js Script component */}
      {isVideoVisible && (
        <>
          <Script
            src="https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.js"
            strategy="lazyOnload"
            onLoad={() => setScriptLoaded(true)}
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.css"
          />
        </>
      )}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background with lazy loading */}
        <div className="absolute inset-0 z-0">
          {/* Placeholder gradient until video loads */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#30534A] via-[#2a453d] to-[#1f3530]" />
          
          {isVideoVisible && (
            <div ref={videoRef} className="w-full h-full">
              <video
                id="cloudinary-player"
                className="cld-video-player"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  filter: 'brightness(0.9)'
                }}
              />
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 pointer-events-none" />
        </div>

        {/* Simplified background elements - removed continuous animations */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-[1]">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#C9862b]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#30534A]/30 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Heading */}
            <div
              className={`transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Build Your Dream Home With{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9862b] via-[#30534A] to-[#C9862b]">
                    Mahalaxmi Infra
                  </span>
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#C9862b] via-[#30534A] to-[#C9862b] opacity-50 blur-sm"></div>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div
              className={`transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/95 mb-6 sm:mb-8 leading-relaxed">
                Residential & Commercial Plots in Heart Of Nagpur
              </h2>
            </div>

            {/* Certification Badge */}
            <div
              className={`transition-all duration-700 delay-200 inline-flex items-center gap-2 sm:gap-3 py-2.5 sm:py-3 px-4 sm:px-8 bg-gradient-to-r from-[#30534A] to-[#30534A]/90 rounded-full shadow-2xl mb-6 sm:mb-8 border border-white/20 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <h3 className="text-xs sm:text-sm md:text-base text-white font-semibold tracking-wide">
                NMRDA SANCTION | RERA APPROVED PROJECTS
              </h3>
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>

            {/* Location Info */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-start gap-2 sm:gap-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 max-w-4xl">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9862b] flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base md:text-lg text-white/90 text-left leading-relaxed">
                  <span className="font-semibold text-white">Prime Locations:</span> Besa, Beltarodi, Shankarpur, Wardha Road, Jamtha, Katol Road, Umred Road, Koradi Road & Samruddhi Circle Nagpur
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`transition-all duration-700 delay-400 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4 sm:px-0 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <button 
                onClick={() => handleScrollToSection("contact")}
                className="group px-6 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-[#30534A] to-[#30534A]/90 hover:from-[#30534A]/90 hover:to-[#30534A] text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl hover:shadow-[#30534A]/50 hover:scale-105 border border-white/20"
              >
                Contact Us Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => handleScrollToSection("projects")}
                className="px-6 sm:px-10 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-300 border-2 border-white/30 hover:scale-105 hover:border-[#C9862b]/70 shadow-lg"
              >
                Explore Projects
              </button>
            </div>

            {/* Investment Highlight */}
            <div
              className={`transition-all duration-700 delay-500 inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#C9862b] to-[#C9862b]/90 py-3 sm:py-4 px-4 sm:px-8 rounded-full shadow-2xl border border-white/20 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <h3 className="text-white text-xs sm:text-sm md:text-base font-bold">
                Best Investment Opportunity @ ₹22 Lakh Only on Samruddhi Circle
              </h3>
            </div>

            {/* Stats Row */}
            <div
              className={`transition-all duration-700 delay-600 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mt-8 sm:mt-12 max-w-3xl mx-auto ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C9862b] mb-1">67+</div>
                <div className="text-xs sm:text-sm text-white/80">Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C9862b] mb-1">17000+</div>
                <div className="text-xs sm:text-sm text-white/80">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C9862b] mb-1">100%</div>
                <div className="text-xs sm:text-sm text-white/80">RERA Approved</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - removed continuous animation */}
        <div 
          className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-700 delay-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-6 h-10 border-2 border-[#C9862b] rounded-full flex items-start justify-center p-2 bg-black/20 backdrop-blur-sm">
            <div className="w-1.5 h-2 bg-[#C9862b] rounded-full" />
          </div>
        </div>
      </section>
    </>
  )
}

// TypeScript declaration for Cloudinary
declare global {
  interface Window {
    cloudinary: {
      videoPlayer: (elementId: string, options: any) => any;
    };
  }
}