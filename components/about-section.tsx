"use client"

import { useEffect, useState } from "react"
import { Award, Users, Building2, CheckCircle2, TrendingUp, Shield } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, sqft: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const targets = { projects: 70, clients: 17000, years: 13, sqft: 500 }
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let current = { projects: 0, clients: 0, years: 0, sqft: 0 }

    const timer = setInterval(() => {
      current.projects = Math.min(current.projects + targets.projects / steps, targets.projects)
      current.clients = Math.min(current.clients + targets.clients / steps, targets.clients)
      current.years = Math.min(current.years + targets.years / steps, targets.years)
      current.sqft = Math.min(current.sqft + targets.sqft / steps, targets.sqft)

      setCounters({
        projects: Math.floor(current.projects),
        clients: Math.floor(current.clients),
        years: Math.floor(current.years),
        sqft: Math.floor(current.sqft)
      })

      if (
        current.projects >= targets.projects &&
        current.clients >= targets.clients &&
        current.years >= targets.years &&
        current.sqft >= targets.sqft
      ) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, increment)
  }

  const features = [
    { icon: Award, text: "Premium Materials", color: "from-primary to-primary" },
    { icon: Users, text: "Expert Craftsmanship", color: "from-primary to-secondary" },
    { icon: Shield, text: "Quality Assurance", color: "from-primary/80 to-primary" },
    { icon: CheckCircle2, text: "Timely Delivery", color: "from-primary to-secondary" },
    { icon: TrendingUp, text: "Value Appreciation", color: "from-primary/80 to-primary" },
    { icon: Building2, text: "Modern Architecture", color: "from-primary to-secondary" }
  ]

  const stats = [
    { value: counters.projects, suffix: "+", label: "Completed Projects", icon: Building2 },
    { value: counters.clients, suffix: "+", label: "Happy Families", icon: Users },
    { value: counters.years, suffix: "+", label: "Years Experience", icon: Award },
    { value: counters.sqft, suffix: "K+", label: "Sq.Ft Delivered", icon: TrendingUp }
  ]

  return (
    <section id="about" className="py-12 md:py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 block">About Us</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 px-4">
            Where Luxury Meets{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/80 to-primary">
              Craftsmanship
            </span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center mb-12 md:mb-20">
          {/* Left: Image with overlay effects */}
          <div className={`relative h-[280px] md:h-[400px] lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden group transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <img 
              src="/aboutUs.webp" 
              alt="Mahalaxmi  Infra Premium Projects" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            {/* Floating badge */}
            <div className="absolute top-3 right-3 md:top-6 md:right-6 bg-gradient-to-r from-primary to-secondary text-white px-3 py-2 md:px-6 md:py-3 rounded-full shadow-2xl backdrop-blur-sm border border-primary/20 animate-pulse">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Award size={16} className="md:w-5 md:h-5" />
                <span className="font-semibold text-xs md:text-base">RERA Approved</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <p className="text-black text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
              With over two decades of excellence in real estate development, <span className="text-primary font-semibold">Mahalaxmi  Infra</span> is committed to creating architectural landmarks that blend luxury, sustainability, and innovation in the heart of Nagpur.
            </p>
            <p className="text-black text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
              Our portfolio showcases projects that reflect our dedication to quality craftsmanship, timely delivery, and customer satisfaction. We believe in building not just structures, but <span className="text-primary">thriving communities</span> where families create lasting memories.
            </p>

            {/* Features Grid - Mobile optimized */}
            <div className="grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-4 mb-6 md:mb-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div
                    key={idx}
                    className="group flex flex-col md:flex-row items-center gap-2 md:gap-3 p-2.5 md:p-4 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10 hover:scale-105"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform`}>
                      <Icon size={14} className="md:w-[18px] md:h-[18px] text-white" />
                    </div>
                    <span className="text-black text-[10px] md:text-sm font-medium text-center md:text-left leading-tight">{feature.text}</span>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <a href="#projects" className="group inline-flex px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-lg font-semibold transition-all duration-300 items-center gap-2 shadow-lg hover:shadow-primary/50 hover:shadow-2xl hover:scale-105 text-sm md:text-base">
              Explore Our Projects
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats Counter Section - Mobile optimized */}
        <div className={`grid grid-cols-2 gap-3 md:gap-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="relative p-3 md:p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl md:rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <Icon size={16} className="md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-4xl font-bold text-black mb-0.5 md:mb-1">
                    {stat.value}
                    <span className="text-primary">{stat.suffix}</span>
                  </div>
                  <p className="text-black text-[10px] md:text-sm font-medium">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Badges - Mobile optimized */}
        <div className={`mt-8 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-8 items-center transition-all duration-1000 delay-600 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center gap-1.5 md:gap-2 text-primary">
            <Shield className="text-primary" size={18} />
            <span className="font-medium text-xs md:text-base">NMRDA Sanctioned</span>
          </div>
          <div className="w-px h-6 md:h-8 bg-white/20"></div>
          <div className="flex items-center gap-1.5 md:gap-2 text-primary">
            <CheckCircle2 className="text-primary" size={18} />
            <span className="font-medium text-xs md:text-base">RERA Approved</span>
          </div>
          <div className="w-px h-6 md:h-8 bg-white/20"></div>
          <div className="flex items-center gap-1.5 md:gap-2 text-primary">
            <Award className="text-primary" size={18} />
            <span className="font-medium text-xs md:text-base">ISO Certified</span>
          </div>
        </div>
      </div>
    </section>
  )
}