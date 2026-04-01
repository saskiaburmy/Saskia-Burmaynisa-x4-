import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Medal, PenLine, Rocket, ChevronDown } from 'lucide-react';

// --- KOMPONEN ACCORDION INTERNAL ---
const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-10 border border-white/20 rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md mb-4 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left text-gray-800 hover:bg-white/20 transition-all"
      >
        <span className="font-bold text-lg">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-[#a35c6d]" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-white/10 pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- KOMPONEN UTAMA ABOUT SECTION ---
export default function AboutSection() {
  const stats = [
    { icon: BookOpen, value: '99+', label: 'Tugas Selesai' },
    { icon: Medal, value: '3+', label: 'Prestasi Akademik' },
    { icon: PenLine, value: '70+', label: 'Guratan Tinta' },
    { icon: Rocket, value: '9+', label: 'Rekam Jejak Akademik' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 px-4">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#a35c6d] font-bold tracking-[0.2em] uppercase text-xs">Tentang Saya</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mt-3">Mengenal Lebih Dekat</h2>
          <div className="w-16 h-1 bg-[#a35c6d] mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Kolom Kiri: Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/40 backdrop-blur-sm p-6 rounded-[2rem] border border-white/50 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-[#a35c6d]/10 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#a35c6d]" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">{item.value}</h4>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Kolom Kanan: Accordion Content */}
          <div className="lg:col-span-7">
            <Accordion title="Profil Singkat">
              <div className="space-y-4">
                <p>
                  Perkenalkan, Saya <strong>Saskia Burmaynisa</strong>, lahir di Aceh Besar pada 4 Juli dan kini berdomisili di Neusu. Saat ini, saya sedang menempuh pendidikan di MAN 1 Banda Aceh.
                </p>
                <p>
                  Saya adalah pribadi yang menghargai keseimbangan. Tidak ambisius secara berlebihan, namun saya selalu memastikan setiap tanggung jawab tuntas sebelum menikmati waktu luang.
                </p>
                <p>
                  Bagi saya, ketenangan datang dari tugas yang sudah selesai. Pembawaan saya mungkin terlihat santai, namun saya memiliki kesiapan menghadapi setiap tantangan yang ada.
                </p>
              </div>
            </Accordion>

            <Accordion title="Visi & Kreativitas">
              <p>
                Berfokus pada pengembangan antarmuka web yang bersih dan minimalis. Saya percaya bahwa desain yang bagus adalah desain yang memudahkan penggunanya tanpa mengorbankan estetika.
              </p>
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}