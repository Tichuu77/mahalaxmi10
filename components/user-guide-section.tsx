"use client"

import { ChevronDown, Home, Calendar, Briefcase, CheckCircle } from "lucide-react"
import { useState } from "react"

const guides = [
  {
    number: "01",
    title: "Explore Properties",
    description: "Browse through our extensive collection of premium residential and commercial properties in Nagpur.",
    icon: Home,
    emoji: "🏠",
    details: [
      "Visit our website and create an account",
      "Filter properties by location, price, and amenities",
      "Save your favorite properties to a wishlist",
    ],
  },
  {
    number: "02",
    title: "Schedule Site Visit",
    description: "Book a personalized site visit with our expert consultants to experience the property firsthand.",
    icon: Calendar,
    emoji: "📅",
    details: [
      "Select your preferred date and time",
      "Our team will confirm your visit within 24 hours",
      "Receive directions and consultant contact details",
    ],
  },
  {
    number: "03",
    title: "Consultation & Financing",
    description: "Get expert advice on financing options and investment benefits from our experienced team.",
    icon: Briefcase,
    emoji: "💼",
    details: [
      "Discuss investment strategies with our experts",
      "Explore various financing and payment options",
      "Get personalized financial advice",
    ],
  },
  {
    number: "04",
    title: "Complete Purchase",
    description: "Finalize your investment with our transparent and hassle-free documentation process.",
    icon: CheckCircle,
    emoji: "✅",
    details: [
      "Sign all required legal documents",
      "Complete payment processing",
      "Receive your property documentation",
    ],
  },
]

export function UserGuideSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="user-guide" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider"
            >
              User Guide
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 px-4">
            How to Get Started
          </h2>
          <p className="text-primary/60 text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
            Follow our simple step-by-step guide to maximize your experience
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-3 sm:space-y-4">
          {guides.map((guide, index) => {
            const Icon = guide.icon
            const isExpanded = expandedIndex === index
            
            return (
              <div
                key={index}
                className={`border-2 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent transition-all duration-300 ${
                  isExpanded 
                    ? "border-primary/60 shadow-lg shadow-primary/20" 
                    : "border-primary/20 hover:border-primary/40"
                }`}
                style={{ 
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${index * 100}ms`,
                  opacity: 0
                }}
              >
                {/* Header - Clickable */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full p-4 sm:p-6 flex items-start sm:items-center gap-3 sm:gap-6 hover:bg-white/5 transition-all text-left"
                >
                  {/* Icon - Mobile friendly */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white shadow-lg">
                    <Icon size={24} className="sm:w-8 sm:h-8" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 mb-1 sm:mb-2">
                      <span className="text-2xl sm:text-3xl font-bold text-primary/30">
                        {guide.number}
                      </span>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary flex-1">
                        {guide.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-primary/70 leading-relaxed pr-8">
                      {guide.description}
                    </p>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    size={20}
                    className={`sm:w-6 sm:h-6 text-primary transition-transform duration-300 flex-shrink-0 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expandable Content */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-primary/20 animate-fadeIn">
                    <div className="pt-4 sm:pt-6 pl-0 sm:pl-[88px]">
                      <h4 className="text-sm font-semibold text-primary mb-3 sm:mb-4">
                        Steps to follow:
                      </h4>
                      <ul className="space-y-2.5 sm:space-y-3">
                        {guide.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2.5 sm:gap-3">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-primary/80 leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Quick Tips */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Quick Tips
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-4 rounded-xl bg-white/5 border border-primary/10">
              <div className="text-primary font-semibold mb-2 text-sm sm:text-base flex items-center gap-2">
                <span>💡</span>
                <span>Pro Tip</span>
              </div>
              <p className="text-primary/70 text-xs sm:text-sm leading-relaxed">
                Compare multiple properties before making a decision. Visit at different times of the day.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-primary/10">
              <div className="text-primary font-semibold mb-2 text-sm sm:text-base flex items-center gap-2">
                <span>🎯</span>
                <span>Best Practice</span>
              </div>
              <p className="text-primary/70 text-xs sm:text-sm leading-relaxed">
                Review all legal documents carefully and consult with our experts for any clarifications.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-primary/10 sm:col-span-2 lg:col-span-1">
              <div className="text-primary font-semibold mb-2 text-sm sm:text-base flex items-center gap-2">
                <span>📚</span>
                <span>Resources</span>
              </div>
              <p className="text-primary/70 text-xs sm:text-sm leading-relaxed">
                Contact our support team anytime for assistance. We're here to help you every step of the way.
              </p>
            </div>
          </div>
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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}