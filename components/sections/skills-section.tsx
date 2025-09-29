import { ScrollReveal } from "@/components/scroll-reveal"
import { Database, Code, FileSpreadsheet, FileText, Monitor, Globe, Server, Zap } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Data & Office",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Entry Data", icon: Database, level: "Expert" },
        { name: "Microsoft Excel", icon: FileSpreadsheet, level: "Advanced" },
        { name: "Microsoft Word", icon: FileText, level: "Advanced" },
        { name: "Data Analysis", icon: Database, level: "Intermediate" },
      ],
    },
    {
      title: "Programming & Development",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Visual Studio Code", icon: Monitor, level: "Advanced" },
        { name: "HTML & CSS", icon: Globe, level: "Intermediate" },
        { name: "JavaScript", icon: Code, level: "Intermediate" },
        { name: "Python", icon: Code, level: "Beginner" },
      ],
    },
    {
      title: "Technical Skills",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Database Management", icon: Server, level: "Intermediate" },
        { name: "System Analysis", icon: Monitor, level: "Intermediate" },
        { name: "Problem Solving", icon: Zap, level: "Advanced" },
        { name: "Technical Documentation", icon: FileText, level: "Advanced" },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "Advanced":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "Beginner":
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  return (
    <section id="skills" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-balance">
            Kemampuan Saya
          </h2>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <ScrollReveal key={categoryIndex}>
                <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-lg hover-lift border border-border/50">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                    >
                      <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-between p-2 sm:p-3 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                          <span className="font-medium text-foreground text-sm sm:text-base">{skill.name}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-8 sm:mt-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-foreground">Soft Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {[
                  "Komunikasi",
                  "Teamwork",
                  "Problem Solving",
                  "Adaptabilitas",
                  "Manajemen Waktu",
                  "Kepemimpinan",
                  "Analitis",
                  "Kreativitas",
                ].map((skill, index) => (
                  <div key={index} className="text-center p-3 sm:p-4 bg-card rounded-lg shadow-sm hover-lift">
                    <span className="font-medium text-foreground text-sm sm:text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
