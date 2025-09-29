"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Beranda" },
    { href: "#about", label: "Tentang" },
    { href: "#education", label: "Pendidikan" },
    { href: "#projects", label: "Proyek" },
    { href: "#skills", label: "Kemampuan" },
    { href: "#certificates", label: "Sertifikat" },
    { href: "#contact", label: "Kontak" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 pt-[env(safe-area-inset-top)]">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="font-bold text-lg sm:text-xl text-primary">MNR</div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            {navItems.slice(0, 4).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-1">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[calc(3.5rem+env(safe-area-inset-top))] z-40 bg-background/95 backdrop-blur-md border-t flex flex-col items-center justify-start w-full min-h-[calc(100vh-env(safe-area-inset-top)-env(safe-area-inset-bottom))] pb-[env(safe-area-inset-bottom)]">
            <div className="w-full flex flex-col items-center px-2 pt-8 pb-8 space-y-3 max-w-md mx-auto overflow-y-auto">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="w-full max-w-md min-w-0 text-center block px-6 py-3 rounded-xl text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all tracking-wide"
                  style={{ fontFamily: 'inherit', letterSpacing: '0.01em' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
