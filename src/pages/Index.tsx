import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  // 1. Ini sistem buat ngatur loading-nya (true artinya loading jalan)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Kunci warna latar belakang biar nggak jadi putih
    document.body.style.backgroundColor = "#C28291";
    
    // 2. Timer: Loading bakal muncul selama 2.5 detik
    const timer = setTimeout(() => {
      setLoading(false); // Setelah 2.5 detik, loading dimatikan
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // 3. Kalau statusnya 'loading', tampilin si mata (LoadingScreen)
  if (loading) {
    return <LoadingScreen />;
  }

  // 4. Kalau loading selesai, baru tampilin semua isi portfolio
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#C28291' }}>
      <Navbar isDark={false} toggleTheme={() => {}} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;