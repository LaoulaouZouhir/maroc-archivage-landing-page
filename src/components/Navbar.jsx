import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-[16px] md:top-[24px] left-0 right-0 z-50 flex flex-col items-center justify-center px-2 md:px-4 w-full pointer-events-none"
    >
      <div 
        className="pointer-events-auto flex items-center bg-primary/95 backdrop-blur-xl rounded-full p-1.5 md:p-2 shadow-2xl border border-white/10 relative z-50 w-max max-w-full overflow-x-auto"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          ::-webkit-scrollbar { display: none; }
        `}} />
        
        {/* Logo */}
        <div 
          className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] shrink-0 rounded-full border border-white/20 flex items-center justify-center bg-white cursor-pointer ml-1" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            alt="Maroc Archivage Logo" 
            className="w-full h-full object-contain p-1 md:p-1.5" 
            src="/img/logo.png"
          />
        </div>
        
        {/* Links */}
        <nav className="flex items-center gap-3 md:gap-8 px-4 md:px-8">
          <motion.a 
            href="#services"
            onClick={(e) => { e.preventDefault(); scrollTo('services'); }}
            whileHover={{ scale: 1.05, color: '#ffffff' }}
            whileTap={{ scale: 0.95 }}
            className="font-label text-[11px] md:text-[13px] text-white/80 hover:text-white cursor-pointer tracking-wide" 
          >
            Services
          </motion.a>
          <motion.a 
            href="#expertise"
            onClick={(e) => { e.preventDefault(); scrollTo('expertise'); }}
            whileHover={{ scale: 1.05, color: '#ffffff' }}
            whileTap={{ scale: 0.95 }}
            className="font-label text-[11px] md:text-[13px] text-white/80 hover:text-white cursor-pointer tracking-wide" 
          >
            Expertise
          </motion.a>
          <motion.a 
            href="#updates"
            onClick={(e) => { e.preventDefault(); scrollTo('updates'); }}
            whileHover={{ scale: 1.05, color: '#ffffff' }}
            whileTap={{ scale: 0.95 }}
            className="font-label text-[11px] md:text-[13px] text-white/80 hover:text-white cursor-pointer tracking-wide" 
          >
            Actualités
          </motion.a>
          <motion.a 
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            whileHover={{ scale: 1.05, color: '#ffffff' }}
            whileTap={{ scale: 0.95 }}
            className="font-label text-[11px] md:text-[13px] text-white/80 hover:text-white cursor-pointer tracking-wide" 
          >
            Contact
          </motion.a>
        </nav>

        {/* Button */}
        <motion.button 
          onClick={() => scrollTo('contact')}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.9)' }}
          whileTap={{ scale: 0.95 }}
          className="font-label rounded-full bg-white text-primary shrink-0 flex items-center justify-center px-4 md:px-6 text-[10px] md:text-[11px] h-[32px] md:h-[40px] font-bold uppercase tracking-wider cursor-pointer mr-1"
        >
          <span className="hidden md:inline">Demander un audit</span>
          <span className="md:hidden">Audit</span>
        </motion.button>
      </div>
    </motion.header>
  );
}
