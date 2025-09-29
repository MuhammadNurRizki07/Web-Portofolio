import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Ciawijapura - Website Desa",
      description: "Website Desa Ciawijapura untuk informasi, layanan, dan transparansi publik.",
      image: "/web.png", // Ganti jika ada gambar khusus
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      github: "https://github.com/MuhammadNurRizki07/Ciawijapura001",
      demo: "https://ciawijapura.vercel.app/",
    },
    {
      title: "Web Kripik Kulit Singkong",
      description: "Website promosi dan penjualan kripik kulit singkong, lengkap dengan katalog produk dan informasi UMKM.",
      image: "/keripik.png", // Ganti jika ada gambar khusus
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      github: "https://github.com/MuhammadNurRizki07/Websites-Kripik-Kulit-Singkong",
      demo: "https://websites-kripik-kulit-singkong.vercel.app/",
    },
    {
      title: "Aplikasi Inventory Management",
      description: "Sistem manajemen inventori dengan fitur tracking dan reporting otomatis",
      image: "/inventory-management-system.png",
      technologies: ["Laravel", "PHP", "PostgreSQL", "Bootstrap"],
      github: "#",
      demo: "#",
    },
    {
      title: "Mobile App Attendance",
      description: "Aplikasi mobile untuk sistem absensi dengan GPS tracking dan face recognition",
      image: "/mobile-attendance-app.jpg",
      technologies: ["React Native", "Firebase", "TensorFlow", "Maps API"],
      github: "#",
      demo: "#",
    },
    {
      title: "E-Learning Platform",
      description: "Platform pembelajaran online dengan fitur video streaming dan quiz interaktif",
      image: "/e-learning-platform-interface.png",
      technologies: ["Next.js", "Prisma", "Supabase", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "IoT Monitoring System",
      description: "Sistem monitoring IoT untuk smart building dengan sensor dan dashboard real-time",
      image: "/iot-monitoring-dashboard.jpg",
      technologies: ["Python", "Arduino", "MQTT", "InfluxDB"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-balance">
            Proyek Saya
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index}>
              <Card className="hover-lift h-full">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" size="sm" asChild className="w-full sm:w-auto bg-transparent">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="w-full sm:w-auto">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
