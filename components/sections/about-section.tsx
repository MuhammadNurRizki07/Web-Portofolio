import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-balance">
              Tentang Saya
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[26rem] mx-auto relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
                  <img
                    src="/Riski.jpeg"
                    alt="Muhammad Nur Rizki - Foto Profil"
                    className="w-full h-full object-contain bg-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Saya adalah mahasiswa S1 Teknik Informatika di Universitas Muhammadiyah Cirebon yang memiliki minat
                  mendalam di bidang teknologi informasi dan pengembangan sistem.
                </p>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Dengan pengalaman di Badan Pusat Statistik (BPS) dan Badan Pengawas Pemilu (Bawaslu), saya telah
                  mengembangkan kemampuan dalam analisis data, manajemen informasi, dan penggunaan teknologi untuk
                  mendukung proses kerja yang efisien.
                </p>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Saya bersemangat untuk terus belajar dan berkontribusi dalam dunia teknologi, khususnya dalam
                  pengembangan aplikasi dan solusi digital yang dapat memberikan dampak positif.
                </p>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6">
                  <div className="text-center p-3 sm:p-4 bg-primary/10 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-primary">3+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Tahun Pengalaman</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-secondary/20 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-primary">7+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Proyek Selesai</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-accent/20 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-primary">10+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Sertifikat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
