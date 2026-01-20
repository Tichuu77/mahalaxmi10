"use client"

import { useEffect, useState, useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  { id: 1, src: "/gallery1.jpg", alt: "Morning View", category: "exterior" },
  { id: 2, src: "/gallery2.jpg", alt: "Well Maintained Square", category: "amenities" },
  { id: 3, src: "/gallery3.jpg", alt: "Good Entrance", category: "exterior" },
  { id: 4, src: "/gallery4.jpg", alt: "Tree covered", category: "landscape" },
  { id: 5, src: "/gallery5.jpg", alt: "Night View", category: "exterior" },
  { id: 6, src: "/gallery6.jpg", alt: "Cozy Living Space", category: "interior" },
  { id: 7, src: "/gallery7.jpg", alt: "Designer Interiors", category: "interior" },
  { id: 8, src: "/gallery8.jpg", alt: "Premium Amenities", category: "amenities" },
  { id: 9, src: "/gallery9.jpg", alt: "Swimming Pool", category: "amenities" },
  { id: 10, src: "/gallery10.jpg", alt: "Evening View", category: "exterior" },
  { id: 11, src: "/gallery11.jpg", alt: "Playground", category: "amenities" },
  { id: 12, src: "/gallery12.jpg", alt: "Top View", category: "exterior" },
]

export function GallerySection() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
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

  // Keyboard navigation for modal
  useEffect(() => {
    if (selectedId === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = galleryItems.findIndex(item => item.id === selectedId)
      
      if (e.key === "ArrowRight") {
        e.preventDefault()
        const newIndex = (currentIndex + 1) % galleryItems.length
        setSelectedId(galleryItems[newIndex].id)
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        const newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
        setSelectedId(galleryItems[newIndex].id)
      } else if (e.key === "Escape") {
        e.preventDefault()
        setSelectedId(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedId])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  const navigateModalImage = (direction: 'prev' | 'next') => {
    if (selectedId === null) return
    const currentIndex = galleryItems.findIndex(item => item.id === selectedId)
    const newIndex = direction === 'prev'
      ? (currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1)
      : (currentIndex + 1) % galleryItems.length
    setSelectedId(galleryItems[newIndex].id)
  }

  return (
    <section ref={sectionRef} id="gallery" className="py-12 md:py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Static background - removed animations */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#C9862b]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#30534A]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-8 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-[#30534A] font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 block">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#30534A] mb-3 md:mb-4">
            Visual{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C9862b] to-[#30534A]">
              Inspiration
            </span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#C9862b] to-[#30534A] mx-auto"></div>
        </div>

        {/* Mobile Slider */}
        <div className={`md:hidden mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {galleryItems.map((item) => (
                  <div key={item.id} className="min-w-full relative group">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      width="600"
                      height="288"
                      className="w-full h-72 object-cover"
                      onClick={() => setSelectedId(item.id)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <span className="text-white text-xs uppercase tracking-wider block mb-1">{item.category}</span>
                        <p className="font-bold text-lg mb-1">{item.alt}</p>
                        <p className="text-xs text-white/70">Tap to view full size</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#30534A]/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-[#30534A] active:scale-95 transition-all z-10"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#30534A]/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-[#30534A] active:scale-95 transition-all z-10"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "w-8 bg-[#C9862b]" : "w-2 bg-[#30534A]/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Complex Masonry Layout */}
        <div className={`hidden md:grid grid-cols-12 gap-4 lg:gap-6 auto-rows-[180px] transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Large feature image */}
          <div
            className="col-span-6 row-span-2 group cursor-pointer relative rounded-2xl overflow-hidden"
            onClick={() => setSelectedId(galleryItems[0].id)}
          >
            <img
              src={galleryItems[0].src}
              alt={galleryItems[0].alt}
              loading="lazy"
              width="600"
              height="360"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-white text-xs uppercase tracking-wider block mb-2">{galleryItems[0].category}</span>
              <p className="text-white font-bold text-xl drop-shadow-lg">{galleryItems[0].alt}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-[#C9862b]/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Vertical image */}
          <div
            className="col-span-3 row-span-2 group cursor-pointer relative rounded-2xl overflow-hidden"
            onClick={() => setSelectedId(galleryItems[1].id)}
          >
            <img
              src={galleryItems[1].src}
              alt={galleryItems[1].alt}
              loading="lazy"
              width="300"
              height="360"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-white text-xs uppercase tracking-wider block mb-1">{galleryItems[1].category}</span>
              <p className="text-white font-semibold text-sm drop-shadow-lg">{galleryItems[1].alt}</p>
            </div>
          </div>

          {/* Square images */}
          <div
            className="col-span-3 row-span-1 group cursor-pointer relative rounded-2xl overflow-hidden"
            onClick={() => setSelectedId(galleryItems[2].id)}
          >
            <img
              src={galleryItems[2].src}
              alt={galleryItems[2].alt}
              loading="lazy"
              width="300"
              height="180"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-3 left-3">
              <p className="text-white font-semibold text-xs drop-shadow-lg">{galleryItems[2].alt}</p>
            </div>
          </div>

          <div
            className="col-span-3 row-span-1 group cursor-pointer relative rounded-2xl overflow-hidden"
            onClick={() => setSelectedId(galleryItems[3].id)}
          >
            <img
              src={galleryItems[3].src}
              alt={galleryItems[3].alt}
              loading="lazy"
              width="300"
              height="180"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-3 left-3">
              <p className="text-white font-semibold text-xs drop-shadow-lg">{galleryItems[3].alt}</p>
            </div>
          </div>

          {/* Wide image */}
          <div
            className="col-span-6 row-span-1 group cursor-pointer relative rounded-2xl overflow-hidden"
            onClick={() => setSelectedId(galleryItems[4].id)}
          >
            <img
              src={galleryItems[4].src}
              alt={galleryItems[4].alt}
              loading="lazy"
              width="600"
              height="180"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="text-white text-xs uppercase tracking-wider block mb-1">{galleryItems[4].category}</span>
              <p className="text-white font-semibold text-base drop-shadow-lg">{galleryItems[4].alt}</p>
            </div>
          </div>

          {/* More square images */}
          {galleryItems.slice(5, 12).map((item) => (
            <div
              key={item.id}
              className="col-span-3 row-span-1 group cursor-pointer relative rounded-2xl overflow-hidden"
              onClick={() => setSelectedId(item.id)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width="300"
                height="180"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute bottom-3 left-3">
                <p className="text-white font-semibold text-xs drop-shadow-lg">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedId !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <div className="relative max-w-5xl w-full h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems.find((item) => item.id === selectedId)?.src}
              alt="Gallery"
              className="w-full h-full object-contain rounded-lg"
            />
            
            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('prev') }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-[#30534A]/80 hover:bg-[#30534A] rounded-full transition-colors backdrop-blur-sm"
              aria-label="Previous"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('next') }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-[#30534A]/80 hover:bg-[#30534A] rounded-full transition-colors backdrop-blur-sm"
              aria-label="Next"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Close button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-lg p-4">
              <p className="text-white font-semibold">{galleryItems.find((item) => item.id === selectedId)?.alt}</p>
              <span className="text-white text-sm uppercase tracking-wider">
                {galleryItems.find((item) => item.id === selectedId)?.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}