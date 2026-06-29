"use client"

import { useState, useRef, useEffect } from "react"
import { projects, ProjectCard } from "./projects-section"

export function OngoingProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true)
            hasAnimated.current = true
          }
        })
      },
      { threshold: 0.1, rootMargin: "100px" }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const ongoingProjects = projects.ongoing

  return (
    <section
      ref={sectionRef}
      id="ongoing-projects"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative premium background blobs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#C9862b]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#30534A]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-[#C9862b]/20 rounded-full border border-[#C9862b]/40">
              <div className="w-2 h-2 bg-[#C9862b] rounded-full animate-ping"></div>
              <span className="text-[#30534A] font-semibold text-sm uppercase tracking-wider">
                Live Status
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#30534A] mt-4">
              Ongoing Projects
            </h2>
            <p className="text-[#30534A]/60 text-lg mt-4 max-w-2xl">
              Discover our active premium developments, featuring premium amenities, prime connectivity, and verified sanctions.
            </p>
          </div>
        </div>

        {/* Ongoing Projects Grid */}
        {ongoingProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {ongoingProjects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏗️</div>
            <p className="text-[#30534A]/60 text-lg">
              No ongoing projects available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
