import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-section px-margin bg-page-bg">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center mb-12 bg-white">
            <img alt="Maroc Archivage Logo" className="w-full h-full object-contain p-1.5" src="https://lh3.googleusercontent.com/aida/AP1WRLvsSgbGKdbcLKOA2HcB3eeu_aMqqcULpCSL4w4vIud0k19Nos0f79MOooDkWKD2PYf3YL7YbMwyFVO3vnfAS4ktIOSvjjM3iJ0f9ev9xYZdRHxZHaugY8uWL6eN6knezKF3lM8MH76kwLHZsuQHrUc22Sq3dzRucrD8I8qGic_8JzTlXHvexEO0n0PcZAikUbiccpQMJK17Orh6grziLuFhveX91WEnDCK6dqLOJDmkSXP5b719rbVk7Jw"/>
          </div>
          <h2 className="font-display text-[56px] md:text-[80px] font-bold text-primary tracking-tighter leading-[1.05] mb-12 max-w-4xl text-balance">
            L'excellence en gestion de l'information
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-primary text-primary font-label rounded-full hover:bg-primary hover:text-white transition-all duration-300 shrink-0 flex items-center px-6 text-[10px] h-[40px] font-bold uppercase tracking-wider cursor-pointer"
            >
              Prendre rendez-vous
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white font-label rounded-full hover:bg-primary-dark transition-all duration-300 shrink-0 flex items-center px-6 text-[10px] h-[40px] font-bold uppercase tracking-wider shadow-md cursor-pointer"
            >
              Demander un audit
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
