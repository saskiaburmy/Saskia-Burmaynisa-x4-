import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    // Latar belakang pink dusty rose (#C28291)
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#C28291]">
      
      {/* 1. MATA KEDIP (Memanggil class dari index.css) */}
      <div className="loader-eye"></div>
      
      {/* 2. TEKS DI BAWAH MATA */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-10 text-white font-medium tracking-[0.3em] uppercase text-[10px]"
      >
        Saskia Portfolio...
      </motion.p>
      
      {/* 3. EFEK CAHAYA LEMBUT (Opsional biar lebih estetik) */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-white/5 to-transparent opacity-50"></div>
      
    </div>
  );
};

export default LoadingScreen;