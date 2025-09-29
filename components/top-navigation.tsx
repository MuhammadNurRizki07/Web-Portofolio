"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function TopNavigation() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = ["home", "projects", "certificates"]
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80 // Adjusted offset for better section detection

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call immediately to set initial active section
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Beranda", id: "home" },
    { href: "#projects", label: "Proyek", id: "projects" },
    { href: "#certificates", label: "Sertifikat", id: "certificates" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 70 // Improved offset calculation
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/1.jpg"
                alt="Muhammad Nur Rizki"
                fill
                className="rounded-full object-cover border-2 border-primary/20"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-semibold text-foreground">Muhammad Nur Rizki</h1>
              <p className="text-xs text-muted-foreground">Mahasiswa S1 Teknik Informatika</p>
            </div>
          </div>

          <nav className="flex items-center">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>

            <div className="ml-4 pl-4 border-l border-border/30">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
