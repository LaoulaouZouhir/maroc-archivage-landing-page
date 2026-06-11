import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-[24px] left-0 right-0 z-50 flex items-center justify-center px-[16px] w-full pointer-events-none"
    >
      <div className="pointer-events-auto w-full max-w-[750px] flex items-center justify-between bg-[#111827]/90 backdrop-blur-xl rounded-full px-[8px] py-[8px] shadow-2xl border border-white/10 h-[56px]">
        <div className="flex items-center gap-[32px] pl-[8px]">
          <div className="w-[34px] h-[34px] rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-white">
            <img 
              alt="Maroc Archivage Logo" 
              className="w-full h-full object-contain p-1.5" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLvsSgbGKdbcLKOA2HcB3eeu_aMqqcULpCSL4w4vIud0k19Nos0f79MOooDkWKD2PYf3YL7YbMwyFVO3vnfAS4ktIOSvjjM3iJ0f9ev9xYZdRHxZHaugY8uWL6eN6knezKF3lM8MH76kwLHZsuQHrUc22Sq3dzRucrD8I8qGic_8JzTlXHvexEO0n0PcZAikUbiccpQMJK17Orh6grziLuFhveX91WEnDCK6dqLOJDmkSXP5b719rbVk7Jw"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {['Services', 'Expertise', 'À Propos', 'Contact'].map((item, index) => (
              <motion.a 
                key={item}
                whileHover={{ scale: 1.05, color: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                className="font-label text-label text-white/70 transition-colors duration-300 cursor-pointer" 
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.9)' }}
          whileTap={{ scale: 0.95 }}
          className="font-label rounded-full bg-white text-black shrink-0 flex items-center px-4 text-[10px] h-[32px] font-bold uppercase tracking-wider cursor-pointer"
        >
          Demander un audit
        </motion.button>
      </div>
    </motion.header>
  );
}
