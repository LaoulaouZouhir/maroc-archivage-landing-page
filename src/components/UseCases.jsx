import { motion } from 'framer-motion';

export default function UseCases() {
  const cases = [
    {
      title: "Conseil et Audit",
      desc: "Expertise pour optimiser vos processus documentaires.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      gradient: "from-primary/90 to-transparent"
    },
    {
      title: "Conservation et Classement",
      desc: "Stockage sécurisé et organisation physique rigoureuse.",
      img: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&w=800&q=80",
      gradient: "from-slate-900/90 to-transparent"
    },
    {
      title: "Ingénierie GED",
      desc: "Solutions sur mesure (Synology, Alfresco, Bureau d'ordre).",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      gradient: "from-primary-dark/90 to-transparent"
    },
    {
      title: "Destruction Certifiée",
      desc: "Élimination sécurisée avec certificat de conformité.",
      img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      gradient: "from-slate-800/90 to-transparent"
    }
  ];

  return (
    <section className="py-12 md:py-24 px-margin max-w-[1728px] mx-auto flex flex-col items-center bg-page-bg">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-display text-h2 mb-12 font-bold tracking-tight text-center text-text"
      >
        Solutions pour chaque secteur d'activité.
      </motion.h2>
      
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {['Finance', 'Juridique', 'RH', 'Logistique'].map((tab, i) => (
          <motion.button 
            key={tab}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full font-label text-sm shadow-sm transition-colors ${i === 0 ? 'bg-primary text-white shadow-md' : 'bg-white text-text border border-line hover:bg-slate-50'}`}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {cases.map((c, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="relative h-[400px] rounded-[32px] p-8 flex flex-col justify-end group overflow-hidden shadow-sm border border-line/20 cursor-pointer"
          >
            <img 
              loading="lazy"
              alt={c.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60 bg-slate-900" 
              src={c.img}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${c.gradient}`}></div>
            <div className="relative z-10 transition-transform duration-500 group-hover:translate-y-[-10px]">
              <h3 className="font-h3 text-xl font-bold mb-2 text-white">{c.title}</h3>
              <p className="font-body-md text-white/80">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
