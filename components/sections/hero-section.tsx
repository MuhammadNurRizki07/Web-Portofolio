"use client"

import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/typing-animation"
import { Download, FileText, ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-blue-600/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto text-center max-w-5xl relative z-10 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
              Muhammad Nur Rizki
            </span>
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 h-10 sm:h-12">
            <TypingAnimation text="Mahasiswa S1 Teknik Informatika" className="text-primary font-semibold" />
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty animate-fade-in-up px-4 leading-relaxed">
            Universitas Muhammadiyah Cirebon | Passionate about technology, data analysis, and creating innovative
            solutions for the digital world
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up max-w-md sm:max-w-none mx-auto mb-16">
            <a
              href="/CV%20Muhammad%20Nur%20Rizki.pdf"
              download
              className="inline-flex items-center justify-center hover-lift w-full sm:w-auto bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 text-white font-semibold rounded-md px-6 py-3 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:scale-110 transition-transform duration-300 p-2 rounded-full bg-primary/10 hover:bg-primary/20"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  )
}
