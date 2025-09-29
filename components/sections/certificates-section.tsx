"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Award } from "lucide-react"
import { useState } from "react"

export function CertificatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const certificates = [
    {
      title: "Sertifikat Bawaslu Kota Cirebon",
      issuer: "Bawaslu",
      year: "2025",
      image: "/Sertif Panwascam.jpeg",
    },
    {
      title: "Sertifikat Potlot Printshop",
      issuer: "Praktek Kerja Lapangan",
      year: "2021",
      image: "/Magang Potlot.jpeg",
    },
    {
      title: "Sertifikat Seminar Nasional IT Fest",
      issuer: "Computer Education",
      year: "2022",
      image: "/computer education.jpeg",
    },
    {
      title: "Sertifikat Keterampilan Manajemen Mahasiswa Teknik Informatika",
      issuer: "Himasantika",
      year: "2022",
      image: "/hima1.jpeg",
    },
    {
      title: "Sertifikat Tes Ujian Matrikulasi TIK",
      issuer: "Universitas Muhammdiyah Cirebon",
      year: "2022",
      image: "/Matrikulasi2.jpeg",
    },
    {
      title: "Sertifikat Tes Ujian Matrikulasi ATEP/TOEFL",
      issuer: "Universitas Muhammdiyah Cirebon",
      year: "2022",
      image: "/Matrikulasi1.jpeg",
    },
    {
      title: "Sertifikat Matrikulasi Al-Islam & Kemuhammadiiyahan",
      issuer: "Universitas Muhammdiyah Cirebon",
      year: "2022",
      image: "/Matrikulasi1.jpeg",
    },
    {
      title: "Sertifikat Pesantren",
      issuer: "Universitas Muhammdiyah Cirebon",
      year: "2022",
      image: "/pesantren.jpeg",
    },
    {
      title: "Sertifikat Seminar Nasional Himpunan Mahasiswa Teknik Informatika",
      issuer: "Himasantika",
      year: "2022",
      image: "/hima3.jpeg",
    },
    {
      title: "Sertifikat Pengenalan Organisasi Himpunan Mahasiswa Teknik Informatika",
      issuer: "Himasantika",
      year: "2022",
      image: "/hima2.jpeg",
    },
    {
      title: "Sertifikat Masa Ta'aruf Mahasiswa Teknik Informatika",
      issuer: "Universitas Muhammdiyah Cirebon",
      year: "2022",
      image: "/taaruf.jpeg",
    },
    
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance">Sertifikat</h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {certificates.map((cert, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <Card className="mx-2">
                        <CardContent className="p-6">
                          <div className="grid md:grid-cols-2 gap-6 items-center">
                            <div className="aspect-[4/3] overflow-hidden rounded-lg">
                              <img
                                src={cert.image || "/placeholder.svg"}
                                alt={cert.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <Award className="w-8 h-8 text-primary" />
                                <div>
                                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                                  <p className="text-muted-foreground">{cert.issuer}</p>
                                  <p className="text-sm text-primary font-medium">{cert.year}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 hover-lift bg-transparent"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 hover-lift bg-transparent"
                onClick={nextSlide}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
