"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home, User, GraduationCap, Briefcase, FolderOpen, Award, Briefcase as Certificate, Mail } from "lucide-react"
import Image from "next/image"

export function SidebarNavigation() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "projects", "skills", "certificates", "contact"]
      const scrollPosition = window.scrollY + 100

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
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Beranda", icon: Home, id: "home" },
    { href: "#about", label: "Tentang", icon: User, id: "about" },
    { href: "#education", label: "Pendidikan", icon: GraduationCap, id: "education" },
    { href: "#experience", label: "Pengalaman", icon: Briefcase, id: "experience" },
    { href: "#projects", label: "Proyek", icon: FolderOpen, id: "projects" },
    { href: "#skills", label: "Kemampuan", icon: Award, id: "skills" },
    { href: "#certificates", label: "Sertifikat", icon: Certificate, id: "certificates" },
    { href: "#contact", label: "Kontak", icon: Mail, id: "contact" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element && element instanceof HTMLElement) {
      const offsetTop = element.offsetTop - 20
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <aside className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-background via-background/95 to-background/90 backdrop-blur-xl border-r border-border/50 shadow-2xl z-40">
        <div className="flex flex-col h-full p-4">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-6 pb-4 border-b border-border/30">
            <div className="relative w-24 h-32 mb-3 group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-full animate-pulse opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <Image
                src="/Riski.jpeg"
                alt="Muhammad Nur Rizki"
                fill
                className="rounded-2xl object-contain bg-white border-4 border-primary/20 shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-lg font-bold text-center mb-1 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Muhammad Nur Rizki
            </h2>
            <p className="text-xs text-muted-foreground text-center leading-tight font-medium">
              Mahasiswa S1 Teknik Informatika
            </p>
            <p className="text-xs text-muted-foreground/80 text-center mt-1">Universitas Muhammadiyah Cirebon</p>
            <div className="flex items-center mt-2 px-2 py-1 bg-primary/10 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-xs font-medium text-primary">Available for Work</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {navItems.map((item, index) => {
                const IconComponent = item.icon
                const isActive = activeSection === item.id
                return (
                  <li key={item.href} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in-up">
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`w-full flex items-center space-x-3 px-3 py-2.5 text-left rounded-lg
                        transition-all duration-300 group relative overflow-hidden ${
                          isActive
                            ? "bg-gradient-to-r from-primary to-blue-600 text-primary-foreground shadow-lg scale-105"
                            : "text-muted-foreground hover:text-primary hover:bg-primary/5 hover:scale-102"
                        }`}
                    >
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 animate-pulse"></div>
                      )}
                      <IconComponent
                        className={`h-4 w-4 group-hover:scale-110 transition-all duration-300 relative z-10 ${
                          isActive ? "text-primary-foreground drop-shadow-sm" : ""
                        }`}
                      />
                      <span className={`font-medium text-xs relative z-10 ${isActive ? "font-semibold" : ""}`}>
                        {item.label}
                      </span>
                      {isActive && (
                        <div className="absolute right-2 w-1.5 h-1.5 bg-primary-foreground rounded-full animate-bounce"></div>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <div className="pt-4 border-t border-border/30">
            <div className="flex items-center justify-between p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <span className="text-xs font-medium">Mode Tema</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
