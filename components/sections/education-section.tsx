import { ScrollReveal } from "@/components/scroll-reveal"
import { GraduationCap, Calendar } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      title: "S1 Teknik Informatika",
      institution: "Universitas Muhammadiyah Cirebon",
      period: "2022 - Sekarang",
      description: "Fokus pada pengembangan software, analisis sistem, dan teknologi informasi",
      status: "Sedang Berlangsung",
    },
    {
      title: "SMK Wahidin - Rekayasa Perangkat Lunak",
      institution: "SMK Wahidin",
      period: "2019 - 2022",
      description: "Mempelajari dasar-dasar pemrograman, database, dan pengembangan aplikasi",
      status: "Lulus",
    },
    {
      title: "SMPN 10 Kota Cirebon",
      institution: "SMPN 10 Kota Cirebon",
      period: "2017 - 2019",
      description: "Pendidikan menengah pertama dengan prestasi akademik yang baik",
      status: "Lulus",
    },
    {
      title: "SDN Kemakmuran 1 Kota Cirebon",
      institution: "SDN Kemakmuran 1 Kota Cirebon",
      period: "2011 - 2017",
      description: "Pendidikan dasar dengan fondasi yang kuat dalam pembelajaran",
      status: "Lulus",
    },
  ]

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance">Pendidikan</h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full"></div>

            {education.map((item, index) => (
              <ScrollReveal key={index}>
                <div className="relative flex items-start mb-12">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-6 shadow-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-grow">
                    <div className="bg-card p-6 rounded-xl shadow-lg hover-lift border border-border/50">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        <div className="flex items-center gap-2 text-primary">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{item.period}</span>
                        </div>
                      </div>
                      <h4 className="text-lg text-muted-foreground mb-3 font-medium">{item.institution}</h4>
                      <p className="text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === "Sedang Berlangsung"
                            ? "bg-primary/20 text-primary"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
