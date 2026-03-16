import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, ClipboardCheck, Link2, Cloud, Wallet, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Sistem Informasi Siswa',
    description: 'Platform digital untuk manajemen jadwal, nilai, dan absensi siswa secara terpusat dan efisien.',
    tags: ['React', 'Firebase', 'Tailwind'],
    image: Monitor,
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Smart To-Do List',
    description: 'Aplikasi manajemen tugas harian dengan fitur prioritas untuk meningkatkan produktivitas belajar.',
    tags: ['TypeScript', 'Lucide', 'Framer Motion'],
    image: ClipboardCheck,
    color: 'from-purple-500/20 to-pink-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'My Linktree Clone',
    description: 'Halaman navigasi satu pintu untuk semua media sosial dan proyek kreatif dalam satu tampilan rapi.',
    tags: ['React', 'Vite', 'Cloudinary'],
    image: Link2,
    color: 'from-emerald-500/20 to-teal-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Prakiraan Cuaca',
    description: 'Aplikasi yang menampilkan kondisi cuaca secara real-time berdasarkan lokasi pengguna menggunakan API.',
    tags: ['JavaScript', 'API', 'Tailwind'],
    image: Cloud,
    color: 'from-blue-400/20 to-indigo-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Pencatat Keuangan',
    description: 'Aplikasi sederhana untuk mencatat pemasukan dan pengeluaran harian dengan grafik visualisasi.',
    tags: ['React', 'Chart.js', 'Local Storage'],
    image: Wallet,
    color: 'from-orange-500/20 to-red-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'E-Learning Platform',
    description: 'Situs kursus online sederhana untuk berbagi materi video dan kuis interaktif bagi siswa.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
    image: Code2,
    color: 'from-yellow-500/20 to-orange-500/20',
    github: '#',
    demo: '#',
  },
];

export default function ProjectsSection() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all"
        >
          <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
            <project.image className="w-12 h-12 text-white/80" />
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground text-sm line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href={project.github}>
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </Button>
              <Button size="sm" className="gap-2" asChild>
                <a href={project.demo}>
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}