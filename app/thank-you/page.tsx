"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ThankYouPage() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("contactModalSuppress", "true")
    }

    const timer = setTimeout(() => {
      router.push("/")
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-xl rounded-[2rem] bg-white/95 border border-primary/10 shadow-2xl p-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Thank You!</h1>
        <p className="text-primary/70 text-base sm:text-lg mb-6">
          Your message has been sent successfully. We will get back to you shortly.
        </p>
        <p className="text-sm text-primary/50">You will be redirected to the homepage in 3 seconds.</p>
      </div>
    </main>
  )
}
