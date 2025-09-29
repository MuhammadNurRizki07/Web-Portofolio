export function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl text-primary mb-4">Muhammad Nur Rizki</h3>
            <p className="text-muted-foreground">
              Mahasiswa S1 Teknik Informatika yang passionate dalam teknologi dan inovasi digital.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                Tentang Saya
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Proyek
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Kemampuan
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Kontak
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>muhammadnurrizki61@gmail.com</p>
              <p>+62 821-2042-9471</p>
              <p>Cirebon, Jawa Barat</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Muhammad Nur Rizki. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
