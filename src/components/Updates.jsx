import { motion } from 'framer-motion';

export default function Updates() {
  const articles = [
    {
      cat: "Service • Oct 2024",
      title: "Accélérez votre transition vers la digitalisation",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      gradient: "from-primary/40"
    },
    {
      cat: "Expertise • Sep 2024",
      title: "Le cycle de vie documentaire moderne",
      img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      gradient: "from-slate-900/40"
    },
    {
      cat: "Société • Aug 2024",
      title: "Maroc Archivage renforce sa présence nationale",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      gradient: "from-primary-dark/40"
    }
  ];

  return (
    <section id="updates" className="py-12 md:py-24 px-margin max-w-[1728px] mx-auto bg-page-bg">
      <div className="flex justify-between items-end mb-12">
        <h2 className="font-display text-h2 font-bold tracking-tight text-text">Actualités &amp; Innovations</h2>
        <motion.button 
          whileHover={{ y: -2 }}
          className="font-label text-sm font-bold border-b border-primary text-primary pb-1 hover:text-primary-dark hover:border-primary-dark transition-colors cursor-pointer"
        >
          Tout voir
        </motion.button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative w-full h-[450px] rounded-[40px] mb-6 overflow-hidden shadow-xl border border-line bg-slate-900">
              <img loading="lazy" alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src={item.img}/>
              <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} to-transparent`}></div>
            </div>
            <p className="font-label text-xs text-muted mb-3">{item.cat}</p>
            <h4 className="font-h3 text-xl font-bold text-text group-hover:text-primary transition-colors">{item.title}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
