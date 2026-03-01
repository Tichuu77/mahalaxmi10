"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 3000)
      return
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "4a812223-4e48-4fb5-8cef-4ecbbc996bf6", // 🔑 Replace with your Web3Forms access key
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitStatus("success")
        setFormState({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 3000)
      }
    } catch (error) {
      console.error(error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider"
            >
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Contact Us
          </h2>
          <p className="text-primary/60 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Have a question or ready to get started? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Contact Information - Left Side */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5">
            {/* Contact Cards */}
            <a
              href="tel:+919403738418"
              className="group flex items-start gap-4 p-4 sm:p-5 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <Phone size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  style={{ fontFamily: "var(--font-heading)" }}
                  className="font-bold text-primary text-sm sm:text-base mb-1"
                >
                  Phone
                </h3>
                <p className="text-primary/70 group-hover:text-primary transition-colors text-sm sm:text-base">
                  +91 9403738418
                </p>
                <p className="text-primary/40 text-xs mt-1">Available Mon-Fri, 9am-6pm</p>
              </div>
            </a>

            <a
              href="mailto:umeshwandhare19@gmail.com"
              className="group flex items-start gap-4 p-4 sm:p-5 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <Mail size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  style={{ fontFamily: "var(--font-heading)" }}
                  className="font-bold text-primary text-sm sm:text-base mb-1"
                >
                  Email
                </h3>
                <p className="text-primary/70 group-hover:text-primary transition-colors text-sm sm:text-base break-all">
                  umeshwandhare19@gmail.com
                </p>
                <p className="text-primary/40 text-xs mt-1">We'll respond within 24 hours</p>
              </div>
            </a>

            <div className="group flex items-start gap-4 p-4 sm:p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/10">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center text-white">
                <MapPin size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  style={{ fontFamily: "var(--font-heading)" }}
                  className="font-bold text-primary text-sm sm:text-base mb-1"
                >
                  Address
                </h3>
                <p className="text-primary/70 text-sm sm:text-base">
                  Nagpur, Maharashtra<br />India 441106
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="hidden lg:block pt-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-xs text-primary/70">Quick Response</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-xs text-primary/70">Free Consultation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-background/60 backdrop-blur-sm border-2 border-primary/20 p-5 sm:p-6 lg:p-8 rounded-3xl shadow-xl">
              {submitStatus === "success" ? (
                <div className="py-12 sm:py-16 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Message Sent Successfully!</h3>
                  <p className="text-primary/60 text-sm sm:text-base">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <input type="hidden" name="from_name" value="Contact Form Website" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="name" className="block text-primary font-semibold mb-2 text-sm">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 sm:py-3.5 bg-primary/5 border-2 border-primary/20 rounded-xl text-primary placeholder:text-primary/40 focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-primary font-semibold mb-2 text-sm">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 sm:py-3.5 bg-primary/5 border-2 border-primary/20 rounded-xl text-primary placeholder:text-primary/40 focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-primary font-semibold mb-2 text-sm">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 sm:py-3.5 bg-primary/5 border-2 border-primary/20 rounded-xl text-primary placeholder:text-primary/40 focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-primary font-semibold mb-2 text-sm">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 sm:py-3.5 bg-primary/5 border-2 border-primary/20 rounded-xl text-primary placeholder:text-primary/40 focus:border-primary focus:outline-none transition-all resize-none text-sm sm:text-base"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <div className="p-3 sm:p-4 bg-red-500/10 border-2 border-red-500/30 rounded-xl text-red-400 text-sm flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Please fill in all required fields and try again.</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3.5 sm:py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  {/* Mobile Trust Badges */}
                  <div className="lg:hidden grid grid-cols-2 gap-2 pt-2">
                    <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-primary/70">Quick Response</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-primary/70">Free Consultation</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}