"use client"

import type React from "react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
  const response = await fetch("https://formspree.io/f/xjkagzry", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })
      if (response.ok) {
        alert("Pesan berhasil dikirim!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        alert("Gagal mengirim pesan. Silakan coba lagi.")
      }
    } catch (error) {
      alert("Terjadi kesalahan. Silakan coba lagi.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance">Hubungi Saya</h2>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Mari Berkolaborasi</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Saya terbuka untuk peluang kerja, proyek kolaborasi, atau sekadar diskusi tentang teknologi. Jangan
                  ragu untuk menghubungi saya!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:muhammadnurrizki61@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      muhammadnurrizki61@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Telepon</p>
                    <a href="tel:+6281234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      +62 821-2042-9471
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Lokasi</p>
                    <p className="text-muted-foreground">Cirebon, Jawa Barat, Indonesia</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Ikuti Saya</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="hover-lift bg-transparent" asChild>
                    <a href="https://github.com/MuhammadNurRizki07" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="hover-lift bg-transparent" asChild>
                    <a href="https://www.linkedin.com/in/muhammad-nurrizki-380339344/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="hover-lift bg-transparent" asChild>
                    <a href="https://www.instagram.com/imnotkyki/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Nama Lengkap"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Pesan Anda"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full hover-lift">
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
