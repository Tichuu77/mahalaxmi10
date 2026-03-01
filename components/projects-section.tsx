"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import { ArrowRight, MapPin, Phone } from "lucide-react"

type Project = {
  id: number
  title: string
  image: string
  description: string
  location: string
  status: string
}

const projects = {
  ongoing: [
    {
      id: 2,
      title: "Mahalaxmi Nagar-31",
      image: "/ongoingProject8.webp",
      description: "Ready to move residential layout on Besa-Pipla Road, opposite Zudio & Croma. Prime location with up to 90% bank finance.",
      location: "MOUZA - BESA",
      status: "ongoing"
    },
    {
      id: 3,
      title: "Mahalaxmi Nagar-39",
      image: "/ongoingProject5.webp",
      description: "New project on Katol Road, Fetri (Chicholi), touching Outer Ring Road. Fully developed NMRDA & RL sanctioned.",
      location: "MOUZA - FETRI",
      status: "ongoing"
    },
    {
      id: 4,
      title: "Mahalaxmi Nagar-41",
      image: "/ongoingProject3.webp",
      description: "Premium layout near Samruddhi Mahamarg with clubhouse & swimming pool. NMRDA + RL approved. Up to 90% finance.",
      location: "MOUZA - GOMGAON",
      status: "ongoing"
    },
    {
      id: 5,
      title: "Mahalaxmi Nagar - 42",
      image: "/ongoingProject2.webp",
      description: "Well-connected plots near Jamtha, Wardha Road. NMRDA & RL sanctioned with excellent amenities.",
      location: "MOUZA - JAMTHA",
      status: "ongoing"
    },
    {
      id: 6,
      title: "Mahalaxmi Nagar - 43",
      image: "/ongoingProject10.webp",
      description: "Ready-to-move plots behind Royal Gondwana School, Shankarpur. Fully developed with 90% finance.",
      location: "MOUZA - SHANKARPUR",
      status: "ongoing"
    },
    {
      id: 7,
      title: "Mahalaxmi Nagar - 45",
      image: "/project_M-45.webp",
      description: "Premium plotted development near Samruddhi Mahamarg, close to AIIMS, IIM, MIHAN & D-Mart.",
      location: "MOUZA - SUMTHANA",
      status: "ongoing"
    },
    {
      id: 8,
      title: "Mahalaxmi Nagar - 46",
      image: "/ongoingProject11.webp",
      description: "Premium plotted development near Samruddhi Mahamarg, close to AIIMS, IIM, MIHAN & D-Mart.",
      location: "MOUZA - SUMTHANA",
      status: "ongoing"
    },
    {
      id: 11,
      title: "Mahalaxmi Nagar - 47",
      image: "/ongoingProject12.jpg",
      description: "New launch behind Haldiram & AM Cinema on Koradi Road. NMRDA & RL approved with 90% finance.",
      location: "KORADI ROAD (Behind Haldiram)",
      status: "ongoing"
    },
  ],
  completed: [
    {
      id: 12,
      title: "Mahalaxmi Nagar - 37",
      image: "/completedProject1.webp",
      description: "NMRDA & RL sanctioned layout in Kotewada. 75-80% bank loan approved.",
      location: "MOUZA - KOTEWADA",
      status: "completed"
    },
    {
      id: 13,
      title: "Mahalaxmi Nagar - 35",
      image: "/completedProject2.webp",
      description: "Fully delivered premium layout with all amenities completed.",
      location: "MOUZA - KOTEWADA",
      status: "completed"
    },
    {
      id: 14,
      title: "Mahalaxmi Nagar - 34",
      image: "/completedProject3.webp",
      description: "Successfully delivered project with high appreciation value.",
      location: "MOUZA - BAHADURA",
      status: "completed"
    },
  ],
  upcoming: [
    { id: 15, title: "Mahalaxmi Nagar - 48", image: "/plotDef.avif", description: "", location: "", status: "upcoming" },
    { id: 16, title: "Mahalaxmi Nagar - 49", image: "/plotDef.avif", description: "", location: "", status: "upcoming" },
    { id: 17, title: "Mahalaxmi Nagar - 50", image: "/plotDef.avif", description: "", location: "", status: "upcoming" },
  ]
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  const statusColors = {
    completed: "bg-green-500/80 text-white border-green-500/40",
    ongoing: "bg-blue-500/80 text-white border-blue-500/40",
    upcoming: "bg-[#C9862b]/80 text-white border-[#C9862b]/40",
  }

  const statusLabels = {
    completed: "✓ Completed",
    ongoing: "⚡ Ongoing",
    upcoming: "🚀 Upcoming",
  }

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in the project "${project.title}" located at ${project.location}. Could you share more details?`
    const url = `https://wa.me/919579889398?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div
      className="group bg-gradient-to-br from-white/5 to-transparent rounded-xl overflow-hidden border border-[#30534A]/20 hover:border-[#C9862b]/40 hover:shadow-lg hover:shadow-[#30534A]/50 transition-all duration-300 hover:scale-105 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shimmer effect - only on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9862b]/0 via-[#C9862b]/20 to-[#C9862b]/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>
      )}

      {/* Image Container */}
      <div className="relative h-48 md:h-64 overflow-hidden bg-black/50">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          loading="lazy"
          width="400"
          height="256"
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm ${statusColors[project.status as keyof typeof statusColors]}`}>
            {statusLabels[project.status as keyof typeof statusLabels]}
          </span>
        </div>

        {/* Title Overlay on Mobile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden">
          <h3 className="text-[#C9862b] font-bold text-lg drop-shadow-lg">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 relative z-10">
        {/* Title - Desktop only */}
        <h3 className="hidden md:block text-xl font-bold text-[#30534A] mb-2 group-hover:text-[#C9862b] transition-colors">
          {project.title}
        </h3>

        {/* Location */}
        {project.location && (
          <div className="flex items-center gap-2 text-[#30534A]/60 mb-3">
            <MapPin className="w-4 h-4 text-[#C9862b] flex-shrink-0" />
            <p className="text-sm font-medium">{project.location}</p>
          </div>
        )}

        {/* Description */}
        {project.description && (
          <p className="text-[#30534A]/60 text-xs md:text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-3">
            {project.description}
          </p>
        )}

        {/* Action Button */}
        <div className="flex gap-2">
          <button
            onClick={handleWhatsApp}
            className="flex-1 bg-gradient-to-r from-[#30534A] to-[#C9862b] text-white py-2.5 md:py-3 px-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#30534A]/50 transition-all flex items-center justify-center gap-2 group/btn"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm md:text-base">Contact Us</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Quick Info Tags */}
        {project.description && (
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="px-2 py-1 bg-[#C9862b]/20 text-[#C9862b] text-xs rounded-full border border-[#C9862b]/30">
              NMRDA Approved
            </span>
            <span className="px-2 py-1 bg-green-500/20 text-green-600 text-xs rounded-full border border-green-500/30">
              Bank Finance
            </span>
          </div>
        )}
      </div>

      {/* Corner glow - only on hover */}
      {isHovered && (
        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-[#C9862b]/30 rounded-full blur-xl opacity-100 transition-opacity pointer-events-none"></div>
      )}
    </div>
  )
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "completed" | "ongoing" | "upcoming">("all")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  // Intersection Observer
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
      { threshold: 0.1, rootMargin: '100px' }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const allProjects = useMemo(() => [
    ...projects.completed,
    ...projects.ongoing,
    ...projects.upcoming,
  ], [])

  const filteredProjects = useMemo(() =>
    activeTab === "all"
      ? allProjects
      : allProjects.filter((project) => project.status === activeTab),
    [activeTab, allProjects]
  )

  return (
    <section ref={sectionRef} id="projects" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Static background - removed animations */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#C9862b]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#30534A]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-[#C9862b]/20 rounded-full border border-[#C9862b]/40">
              <div className="w-2 h-2 bg-[#C9862b] rounded-full"></div>
              <span className="text-[#30534A] font-semibold text-sm uppercase tracking-wider">
                Portfolio
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#30534A] mt-4">Our Projects</h2>
            <p className="text-[#30534A]/60 text-lg mt-4 max-w-2xl">
              Explore our portfolio of completed, ongoing, and upcoming developments
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center lg:justify-start gap-3 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { label: "All Projects", value: "all", icon: "🏢" },
            { label: "Completed", value: "completed", icon: "✓" },
            { label: "Ongoing", value: "ongoing", icon: "⚡" },
            { label: "Upcoming", value: "upcoming", icon: "🚀" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as any)}
              className={`px-5 md:px-6 py-2.5 rounded-full font-semibold transition-all text-sm md:text-base ${
                activeTab === tab.value
                  ? "bg-gradient-to-r from-[#30534A] to-[#C9862b] text-white shadow-lg shadow-[#30534A]/50"
                  : "bg-white/5 text-[#30534A]/70 hover:bg-white/10 border border-[#30534A]/20 hover:border-[#C9862b]/40"
              }`}
            >
              <span className="mr-1">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏗️</div>
            <p className="text-[#30534A]/60 text-lg">
              No projects available under this category.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}