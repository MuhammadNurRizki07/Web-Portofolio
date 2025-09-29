import { ScrollReveal } from "@/components/scroll-reveal"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Staf Panwascam Kejaksan",
      organization: "Bawaslu Kota Cirebon",
      period: "2024 - 2025",
      location: "Cirebon",
      description:
        "Mengawasi proses pemilihan umum, mengelola administrasi pengawasan, dan memastikan integritas pemilu di tingkat kecamatan",
      skills: ["Administrasi", "Pengawasan", "Dokumentasi", "Koordinasi"],
    },
    {
      title: "Operator Entry Data & Pencacah Lapangan Mitra",
      organization: "Badan Pusat Statistik (BPS)",
      period: "2022 - 2023",
      location: "Cirebon",
      description:
        "Melakukan entry data statistik, pencacahan lapangan, dan memastikan akurasi data untuk survei nasional",
      skills: ["Entry Data", "Survei Lapangan", "Analisis Data", "Microsoft Excel"],
    },
    {
      title: "Magang",
      organization: "Percetakan Potlot",
      period: "2020",
      location: "Cirebon",
      description: "Mempelajari proses produksi percetakan, desain grafis, dan manajemen operasional percetakan",
      skills: ["Desain Grafis", "Produksi", "Manajemen Operasional"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance">Pengalaman Kerja</h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-accent to-primary rounded-full"></div>

            {experiences.map((item, index) => (
              <ScrollReveal key={index}>
                <div className="relative flex items-start mb-12">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mr-6 shadow-lg">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-grow">
                    <div className="bg-card p-6 rounded-xl shadow-lg hover-lift border border-border/50">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        <div className="flex items-center gap-2 text-secondary">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{item.period}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-3">
                        <h4 className="text-lg text-muted-foreground font-medium">{item.organization}</h4>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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
