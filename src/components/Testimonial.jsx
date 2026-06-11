import { motion } from 'framer-motion';

export default function Testimonial() {
  return (
    <section className="py-[160px] px-margin max-w-[1200px] mx-auto flex flex-col items-center text-center bg-page-bg">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-[40px] md:text-[56px] leading-[1.1] tracking-tight text-primary mb-16 text-balance max-w-[1000px] font-normal"
      >
        "Maroc Archivage a été fondée avec le désir de libérer les organisations des contraintes de gestion physique, leur permettant de se concentrer sur leur cœur de métier."
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-4"
      >
        <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden shadow-md border border-line">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_dQOYUXm-9ocUk-1cRA5ZyP6tu7OdWwNIU7SRhouWt3u89anzj3A5_pr7FGCCICOiz6a2FoSpC-bN53AYbiVQ-spgKPawBtGZtLq-9c6QyNclym7oEuOsCnQllJenEGuMkAeM3mwnTOLdgJakEE63ozCYcDA2l-C2EQnZiozAakUbDrwJG_jxTwrvV9I5p2oiVPXIDBv-rltdG9P0TX6X2OUHQcwckpskXXJEawplcI8ff_rzn1YnIDgrniF27Vjc0Lz4LKcazue9"/>
        </div>
        <div className="text-left">
          <p className="font-label text-sm font-bold text-text">Directeur Général</p>
          <p className="font-label text-xs text-muted">Maroc Archivage S.A.R.L</p>
        </div>
      </motion.div>
    </section>
  );
}
