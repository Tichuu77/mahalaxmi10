"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What types of properties do you offer?",
    answer: "We offer a wide range of residential and commercial plots in prime locations across Nagpur, including Besa, Beltarodi, Shankarpur, Wardha Road, and more. All properties are NMRDA sanctioned and RERA approved.",
    category: "Properties"
  },
  {
    id: 2,
    question: "What is the price range for your plots?",
    answer: "Our plots start from ₹22 Lakh onwards, depending on the location, size, and amenities. We offer flexible payment plans and financing options to suit various budgets.",
    category: "Pricing"
  },
  {
    id: 3,
    question: "Are all your projects RERA approved?",
    answer: "Yes, all our projects are 100% RERA approved and NMRDA sanctioned. We ensure complete legal compliance and transparency in all our dealings.",
    category: "Legal"
  },
  {
    id: 4,
    question: "What financing options are available?",
    answer: "We offer multiple financing options including bank loans, in-house payment plans, and EMI facilities. Our team will help you choose the best option based on your financial situation.",
    category: "Finance"
  },
  {
    id: 5,
    question: "How can I schedule a site visit?",
    answer: "You can schedule a site visit by contacting us through our website, calling our helpline, or using the WhatsApp button. Our team will confirm your visit within 24 hours and provide all necessary details.",
    category: "Visits"
  },
  {
    id: 6,
    question: "What amenities are included?",
    answer: "Our properties come with world-class amenities including 24/7 security, power backup, green spaces, community halls, and more. Specific amenities vary by project location.",
    category: "Amenities"
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1)
  const [filter, setFilter] = useState<string>("all")

  const filteredFaqs = filter === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category.toLowerCase() === filter)

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-background/80 to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider"
            >
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 px-4">
            Frequently Asked Questions
          </h2>
          <p className="text-primary/60 text-sm sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
            Find answers to common questions about our properties and services
          </p>
        </div>

        {/* Filter Tabs - Mobile Optimized */}
        <div className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-hide px-1">
          {["all", "properties", "pricing", "legal", "finance"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 sm:px-5 py-2 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                filter === category
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white/5 text-primary/70 hover:bg-white/10 border border-primary/20"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openId === faq.id
            
            return (
              <div
                key={faq.id}
                className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "border-primary/60 shadow-lg shadow-primary/20 bg-white/5" 
                    : "border-primary/20 hover:border-primary/40 bg-transparent"
                }`}
                style={{ 
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  animationDelay: `${index * 50}ms`,
                  opacity: 0
                }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-start gap-3 sm:gap-4 hover:bg-primary/5 transition-colors text-left group"
                >
                  {/* Question Number Badge */}
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    isOpen 
                      ? "bg-primary text-white scale-110" 
                      : "bg-primary/10 text-primary group-hover:bg-primary/20"
                  }`}>
                    {faq.id}
                  </div>

                  {/* Question Text */}
                  <div className="flex-1 min-w-0">
                    <span
                      style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                      className="font-semibold text-primary text-sm sm:text-base lg:text-lg leading-snug block"
                    >
                      {faq.question}
                    </span>
                    {/* Category Badge - Mobile */}
                    <span className="inline-block mt-1.5 sm:mt-2 px-2 py-0.5 text-[10px] sm:text-xs bg-primary/10 text-primary/70 rounded-full">
                      {faq.category}
                    </span>
                  </div>

                  {/* Chevron Icon */}
                  <ChevronDown
                    size={20}
                    className={`sm:w-6 sm:h-6 text-primary transition-transform duration-300 flex-shrink-0 mt-1 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer Section */}
                {isOpen && (
                  <div 
                    className="px-4 sm:px-6 py-4 sm:py-5 bg-gradient-to-br from-primary/5 to-transparent border-t border-primary/20"
                    style={{
                      animation: 'slideDown 0.3s ease-out forwards'
                    }}
                  >
                    <div className="flex gap-3 sm:gap-4">
                      {/* Answer Icon */}
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/20 flex items-center justify-center mt-0.5">
                        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      </div>
                      {/* Answer Text */}
                      <p className="text-primary/80 leading-relaxed text-xs sm:text-sm lg:text-base flex-1">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/30 text-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-2 sm:mb-3">
            Still have questions?
          </h3>
          <p className="text-primary/70 text-xs sm:text-sm mb-4 sm:mb-6">
            Our team is here to help you. Get in touch with us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="px-6 sm:px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold text-sm sm:text-base transition-all hover:scale-105 shadow-lg"
            >
              Contact Us
            </button>
            <a
              href="tel:+919403738418"
              className="px-6 sm:px-8 py-3 bg-white/10 hover:bg-white/20 border-2 border-primary/30 text-primary rounded-xl font-semibold text-sm sm:text-base transition-all hover:scale-105"
            >
              Call Now
            </a>
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

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}