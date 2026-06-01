"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, MapPin, Award, TrendingUp, Phone, X } from "lucide-react"
import Script from "next/script"

export function HeroSection() {
  const videoRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const [showPhoneHeader, setShowPhoneHeader] = useState(false)
  const [leadForm, setLeadForm] = useState({ name: "", location: "" })
  const heroSectionRef = useRef<HTMLDivElement>(null)

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

  // Detect scroll to show phone header
  useEffect(() => {
    const handleScroll = () => {
      if (heroSectionRef.current) {
        const heroBottom = heroSectionRef.current.getBoundingClientRect().bottom
        setShowPhoneHeader(heroBottom < 0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLeadFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (leadForm.name && leadForm.location) {
      console.log("Lead form submitted:", leadForm)
      setLeadForm({ name: "", location: "" })
      // You can add API call here
    }
  }

  const handleDirectCall = () => {
    window.location.href = "tel:+919922638418"
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

      {/* Sticky Phone Header - Shows after scrolling past hero */}
      {showPhoneHeader && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#30534A] to-[#30534A]/90 border-b border-white/20 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#C9862b]" />
              <span className="text-white font-semibold">+91 9922638418</span>
              <span className="text-white/70 text-sm">Click to Call</span>
            </div>
            <button
              onClick={handleDirectCall}
              className="px-6 py-2 bg-[#C9862b] hover:bg-[#C9862b]/90 text-white rounded-lg font-semibold transition-all hover:scale-105"
            >
              Call Now
            </button>
          </div>
        </div>
      )}

      <section ref={heroSectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Hero Content */}
            <div className="text-left lg:text-left">
              {/* Main Heading */}
              <div
                className={`transition-all duration-700 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Build Your Dream Home <br />
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9862b] via-[#30534A] to-[#C9862b]">
                      With Mahalaxmi Infra
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#C9862b] via-[#30534A] to-[#C9862b] opacity-50 blur-sm"></div>
                  </span>
                </h1>
              </div>

              {/* Price Section */}
              <div
                className={`transition-all duration-700 delay-100 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="inline-block bg-gradient-to-r from-[#C9862b] to-[#C9862b]/80 px-6 py-3 rounded-lg mb-6">
                  <p className="text-white font-bold text-lg sm:text-xl">
                    Starting ₹ <span className="text-2xl">_</span> Lakh
                  </p>
                </div>
              </div>

              {/* Subtitle */}
              <div
                className={`transition-all duration-700 delay-200 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h2 className="text-lg sm:text-xl text-white/95 mb-6 leading-relaxed">
                  Residential & Commercial Plots in Heart Of Nagpur
                </h2>
              </div>

              {/* Location Info */}
              <div
                className={`transition-all duration-700 delay-300 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="inline-flex items-start gap-2 sm:gap-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-4 mb-6 max-w-full">
                  <MapPin className="w-5 h-5 text-[#C9862b] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-white/90 leading-relaxed">
                    <span className="font-semibold text-white">Prime Locations:</span> Besa, Beltarodi, Shankarpur, Wardha Road, Jamtha, Katol Road
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className={`transition-all duration-700 delay-400 flex flex-col gap-3 mb-6 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <button 
                  onClick={() => handleScrollToSection("contact")}
                  className="group px-6 sm:px-8 py-3 bg-gradient-to-r from-[#30534A] to-[#30534A]/90 hover:from-[#30534A]/90 hover:to-[#30534A] text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl hover:shadow-[#30534A]/50 hover:scale-105 border border-white/20"
                >
                  Contact Us Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => handleScrollToSection("projects")}
                  className="px-6 sm:px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-300 border-2 border-white/30 hover:scale-105 hover:border-[#C9862b]/70 shadow-lg"
                >
                  Explore Projects
                </button>
              </div>

              {/* Investment Highlight */}
              <div
                className={`transition-all duration-700 delay-500 inline-flex items-center gap-2 bg-gradient-to-r from-[#C9862b] to-[#C9862b]/90 py-2 px-4 rounded-full shadow-2xl border border-white/20 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <TrendingUp className="w-4 h-4 text-white" />
                <h3 className="text-white text-xs sm:text-sm font-bold">
                  Best Investment in MIHAN</h3>
              </div>
            </div>

            {/* Right Column - Lead Form */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Get Enquiry</h3>
                
                <form onSubmit={handleLeadFormSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-white/80 text-sm font-semibold mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:border-[#C9862b] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Location Input */}
                  <div>
                    <label className="block text-white/80 text-sm font-semibold mb-2">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={leadForm.location}
                      onChange={(e) => setLeadForm({ ...leadForm, location: e.target.value })}
                      required
                      placeholder="Enter your location"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:border-[#C9862b] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#C9862b] to-[#C9862b]/90 hover:from-[#C9862b]/90 hover:to-[#C9862b] text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Submit
                  </button>

                  {/* Trust Badges */}
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Award className="w-4 h-4 text-[#C9862b]" />
                      <span>RERA Approved</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Award className="w-4 h-4 text-[#C9862b]" />
                      <span>NMRDA Approved</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Award className="w-4 h-4 text-[#C9862b]" />
                      <span>Bank Loan Available</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Award className="w-4 h-4 text-[#C9862b]" />
                      <span>Ready Registry</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Stats Row - Below Content */}
          <div
            className={`transition-all duration-700 delay-600 grid grid-cols-3 gap-3 sm:gap-4 mt-12 sm:mt-16 max-w-2xl ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#C9862b] mb-1">70+</div>
              <div className="text-xs sm:text-sm text-white/80">Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#C9862b] mb-1">17000+</div>
              <div className="text-xs sm:text-sm text-white/80">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#C9862b] mb-1">100%</div>
              <div className="text-xs sm:text-sm text-white/80">RERA Approved</div>
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