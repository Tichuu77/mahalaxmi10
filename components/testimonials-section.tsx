"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

 const testimonials = [
    {
      id: 1,
      content:
        "Investing in a by Maha Laxmi  Infra transparent process made effortless experience. The best decision I ever made. The local transparent process made it an effortless experience.",
      name: "Rajkumar Gharjale",
      location: "Nagpur",
      image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/1-9.png",
      rating: 5,
    },
    {
      id: 2,
      content:
        "I wanted to invest in a growing area, and plots in Nagpur Besa seemed perfect. Maha Laxmi  Infra exceeded my expectations. Highly recommended!",
      name: "Priya Shah",
      location: "Mumbai",
      image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/3-4.png",
      rating: 5,
    },
    {
      id: 3,
      content:
        "Investing in residential plots with Mahalaxmi  Infra was one of my best decisions. Their transparency, clear titles, and prompt assistance gave me peace of mind.",
      name: "Karan Akojwar",
      location: "Pune",
      image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/4-2.png",
      rating: 5,
    },
  ]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 bg-gradient-to-b from-white/20 to-primary/50 relative overflow-hidden"
    >
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mt-4 text-balance">Loved by Clients</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative h-fit">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === current ? "opacity-100 scale-100" : "absolute opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-primary/20 rounded-lg p-8 lg:p-12">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed italic">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <p
                        style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                        className="font-bold text-white"
                      >
                        {testimonial.name}
                      </p>
                      <p className="text-primary text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full hover:cursor-pointer border border-primary/50 hover:border-white text-primary hover:textwhite transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    setAutoplay(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-primary w-6" : "bg-primary/40 hover:bg-primary/60"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 hover:cursor-pointer rounded-full border border-primary/50 hover:border-white text-primary hover:textwhite transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
