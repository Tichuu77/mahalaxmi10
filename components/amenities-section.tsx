"use client"

import { Wifi, Dumbbell, Trees, Zap, Shield, Users } from "lucide-react"
import { useState } from "react"

const secondSectionAmenities = [
  {
    icon: Wifi,
    title: "Smart Home",
    description: "Advanced IoT integration for modern living.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym facilities.",
  },
  {
    icon: Trees,
    title: "Green Spaces",
    description: "Lush landscaping and parks.",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Uninterrupted power supply 24/7.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "CCTV surveillance and personnel.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Spaces for social gatherings.",
  },
  {
    emoji: "🏊",
    title: "Swimming Pool",
    description: "Olympic-sized pool with children's area.",
  },
  {
    emoji: "🎮",
    title: "Gaming Zone",
    description: "Indoor games and entertainment facilities.",
  },
  {
    emoji: "🧘",
    title: "Yoga & Meditation",
    description: "Dedicated spaces for wellness activities.",
  },
  {
    emoji: "🚗",
    title: "Covered Parking",
    description: "Secure multi-level parking facilities.",
  },
  {
    emoji: "🎪",
    title: "Banquet Hall",
    description: "Event spaces for celebrations.",
  },
  {
    emoji: "👶",
    title: "Kids Play Area",
    description: "Safe and fun playground for children.",
  },
]

export function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <section id="amenities" className="py-12 sm:py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-background rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-background rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-background rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-background/10 rounded-full border border-primary animate-bounce" style={{animationDuration: '3s'}}>
            <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
            <span
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider"
            >
              Our Amenities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4">
            Everything You Need
          </h2>
          <p className="text-primary/60 text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
            Comprehensive features designed to exceed your expectations
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 flex-wrap px-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
              activeTab === "all"
                ? "bg-primary text-white shadow-lg"
                : "bg-white/5 text-black/70 hover:bg-white/10 border border-amber-900/20"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("wellness")}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
              activeTab === "wellness"
                ? "bg-primary text-white shadow-lg"
                : "bg-white/5 text-black/70 hover:bg-white/10 border border-amber-900/20"
            }`}
          >
            🧘 Wellness
          </button>
          <button
            onClick={() => setActiveTab("entertainment")}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
              activeTab === "entertainment"
                ? "bg-primary text-white shadow-lg"
                : "bg-white/5 text-black/70 hover:bg-white/10 border border-amber-900/20"
            }`}
          >
            🎮 Fun
          </button>
          <button
            onClick={() => setActiveTab("facilities")}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
              activeTab === "facilities"
                ? "bg-primary text-white shadow-lg"
                : "bg-white/5 text-black/70 hover:bg-white/10 border border-amber-900/20"
            }`}
          >
            🏢 Facilities
          </button>
        </div>

        {/* Amenities Grid - Mobile Optimized */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
          {secondSectionAmenities
            .filter(amenity => {
              if (activeTab === "all") return true
              if (activeTab === "wellness") return ["Fitness Center", "Yoga & Meditation", "Green Spaces", "Swimming Pool"].includes(amenity.title)
              if (activeTab === "entertainment") return ["Gaming Zone", "Banquet Hall", "Kids Play Area", "Community"].includes(amenity.title)
              if (activeTab === "facilities") return ["Smart Home", "Power Backup", "Security", "Covered Parking"].includes(amenity.title)
              return true
            })
            .map((amenity, index) => {
              const Icon = amenity.icon
              const isEmoji = amenity.emoji
              
              return (
                <div
                  key={index}
                  className="group p-3 sm:p-4 md:p-5 rounded-xl border border-primary/20 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:to-white/5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 relative overflow-hidden flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px]"
                  style={{ 
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${index * 50}ms`,
                    opacity: 0
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  
                  {/* Icon */}
                  <div className="mb-2 sm:mb-3 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-amber-900/50 transition-all group-hover:rotate-12 relative flex-shrink-0">
                    {isEmoji ? (
                      <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">{amenity.emoji}</span>
                    ) : (
                      <Icon size={24} className="sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
                    )}
                    {/* Rotating border */}
                    <div className="absolute inset-0 rounded-xl border-2 border-dashed border-amber-400/30 animate-spin" style={{animationDuration: '8s'}}></div>
                  </div>
                  
                  {/* Text - Fixed height container */}
                  <div className="text-center flex-1 flex flex-col items-center justify-start w-full">
                    <h3 className="text-xs sm:text-sm font-bold text-primary mb-0.5 sm:mb-1 line-clamp-2 w-full px-1">
                      {amenity.title}
                    </h3>
                    {/* Hide description on mobile, show on sm and up */}
                    <p className="hidden sm:block text-black/70 text-[10px] sm:text-xs leading-relaxed line-clamp-2 w-full px-1">
                      {amenity.description}
                    </p>
                  </div>
                  
                  {/* Corner glow */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              )
            })}
        </div>

        {/* Mobile Info Text */}
        <div className="sm:hidden text-center mt-6 px-4">
          <p className="text-xs text-primary/50">
            Tap any amenity to learn more
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}