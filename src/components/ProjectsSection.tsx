import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

// 1. DATA PROJECTS (6 BUAH - SESUAI PROJECT KAMU)
const projects = [
  {
    title: 'Sistem Informasi Siswa',
    description: 'Platform digital untuk manajemen jadwal, nilai, dan absensi siswa secara terpusat dan efisien.',
    tags: ['React', 'Firebase', 'Tailwind'],
    images: [
      'https://picsum.photos/400/300?random=1',
      'https://picsum.photos/400/300?random=2',
      'https://picsum.photos/400/300?random=3'
    ],
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Smart To-Do List',
    description: 'Aplikasi manajemen tugas harian dengan fitur prioritas untuk meningkatkan produktivitas belajar.',
    tags: ['TypeScript', 'Lucide', 'Framer Motion'],
    images: [
      'https://picsum.photos/400/300?random=4',
      'https://picsum.photos/400/300?random=5',
      'https://picsum.photos/400/300?random=6'
    ],
    color: 'from-purple-500/20 to-pink-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'My Linktree Clone',
    description: 'Halaman navigasi satu pintu untuk semua media sosial dan proyek kreatif dalam satu tampilan rapi.',
    tags: ['React', 'Vite', 'Cloudinary'],
    images: [
      'https://picsum.photos/400/300?random=7',
      'https://picsum.photos/400/300?random=8',
      'https://picsum.photos/400/300?random=9'
    ],
    color: 'from-green-500/20 to-emerald-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'E-Learning Platform',
    description: 'Sistem pembelajaran online interaktif dengan fitur kuis, materi video, dan pelacakan progres.',
    tags: ['Next.js', 'Supabase', 'Tailwind'],
    images: [
      'https://picsum.photos/400/300?random=10',
      'https://picsum.photos/400/300?random=11',
      'https://picsum.photos/400/300?random=12'
    ],
    color: 'from-orange-500/20 to-yellow-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Pantau kondisi cuaca real-time di berbagai kota dengan visualisasi data yang bersih.',
    tags: ['JavaScript', 'OpenWeather', 'CSS'],
    images: [
      'https://picsum.photos/400/300?random=13',
      'https://picsum.photos/400/300?random=14',
      'https://picsum.photos/400/300?random=15'
    ],
    color: 'from-red-500/20 to-rose-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Personal Finance Tracker',
    description: 'Catat pengeluaran dan pemasukan dengan grafik visual yang memudahkan pengelolaan uang.',
    tags: ['React', 'Chart.js', 'Node.js'],
    images: [
      'https://picsum.photos/400/300?random=16',
      'https://picsum.photos/400/300?random=17',
      'https://picsum.photos/400/300?random=18'
    ],
    color: 'from-indigo-500/20 to-blue-500/20',
    github: '#',
    demo: '#',
  }
];

// 2. KOMPONEN MESIN SLIDER GAMBAR
const ProjectSlider = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-white/30 backdrop-blur-md border border-white/20">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      
      {/* Indikator Titik */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-4 bg-white" : "w-1.5 bg-white/40"}`} 
          />
        ))}
      </div>
    </div>
  );
};

// 3. KOMPONEN UTAMA (YANG KAMU TAMPILIN DI WEB)
const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="projects">
      <div className="flex items-center gap-2 mb-12">
        <Code2 className="text-[#a35c6d]" />
        <h2 className="text-3xl font-bold text-gray-800 tracking-tight">My Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className={`relative group bg-gradient-to-br ${project.color} backdrop-blur-lg p-6 rounded-[2rem] border border-white/40 shadow-xl overflow-hidden`}
          >
            {/* INI DIA SLIDERNYA - Pengganti Icon Monitor/Clipboard */}
            <ProjectSlider images={project.images} />

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed font-medium">
                {project.description}
              </p>

              {/* Tags Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-white/60 text-[10px] font-bold rounded-full uppercase tracking-widest text-gray-700 border border-white/50">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tombol Code & Demo */}
              <div className="flex gap-4 mt-auto">
                <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/40 hover:bg-white rounded-2xl transition-all text-sm font-bold border border-white/60 text-gray-800">
                  <Github size={18} /> Code
                </a>
                <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#a35c6d] hover:bg-[#8e4d5d] text-white rounded-2xl shadow-lg transition-all text-sm font-bold">
                  <ExternalLink size={18} /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;