import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <section className="py-[200px] px-margin max-w-[1728px] mx-auto relative flex flex-col items-center text-center bg-page-bg">
      <div className="absolute top-0 right-[10%] w-[400px] h-[400px] opacity-10 pointer-events-none">
        <svg className="w-full h-full animate-spin-slow" fill="none" stroke="url(#manifesto-grad)" strokeWidth="0.5" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="manifesto-grad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a"></stop>
              <stop offset="100%" stopColor="#64748b"></stop>
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48"></circle>
          <ellipse cx="50" cy="50" rx="24" ry="48"></ellipse>
          <ellipse cx="50" cy="50" rx="48" ry="24"></ellipse>
          <line x1="2" x2="98" y1="50" y2="50"></line>
          <line x1="50" x2="50" y1="2" y2="98"></line>
        </svg>
      </div>
      <motion.h2 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-display text-[49px] leading-[1.1] text-balance tracking-tight text-text relative z-10 max-w-[1000px] font-light"
      >
        Alors que les volumes de données explosent, une source unique de vérité est cruciale. Maroc Archivage unifie votre stratégie documentaire.
      </motion.h2>
    </section>
  );
}
