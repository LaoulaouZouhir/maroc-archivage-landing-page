import { motion } from 'framer-motion';

export default function Digitalization() {
  const features = [
    {
      title: "Alignement Normatif Automatisé",
      desc: "Chaque document numérisé est instantanément vérifié par rapport à vos règles de gestion et durées légales."
    },
    {
      title: "Indexation Intelligente",
      desc: "Une technologie qui comprend le contenu, qu'il s'agisse de contrats, factures ou plans techniques."
    },
    {
      title: "Bureau d'Ordre Digital",
      desc: "Gérez et déployez le courrier entrant et sortant de manière fluide à travers toute l'entreprise."
    },
    {
      title: "Analyse Prédictive du Cycle de Vie",
      desc: "Anticipez les besoins de destruction ou de transfert aux archives historiques selon les obligations légales."
    }
  ];

  return (
    <section className="py-12 md:py-24 px-margin max-w-[1728px] mx-auto bg-page-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-center">
        
        <div className="flex flex-col justify-center h-full max-w-lg order-2 lg:order-1">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-h2 mb-12 font-bold tracking-tight text-text"
          >
            Digitalisation et dématérialisation de vos documents.
          </motion.h3>
          <div className="relative pl-8 border-l-[3px] border-line space-y-10">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute left-[-3px] top-0 w-[3px] bg-gradient-to-b from-primary to-accent"
            ></motion.div>
            
            {features.map((feature, idx) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="opacity-60 hover:opacity-100 transition-opacity cursor-default"
              >
                <h4 className="font-h3 text-xl font-bold mb-2 text-text">{feature.title}</h4>
                <p className="font-body-md text-muted leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-tr from-slate-200 to-slate-300 rounded-[40px] p-8 h-[700px] flex items-center justify-center relative overflow-hidden border border-line/30 shadow-inner order-1 lg:order-2"
        >
          <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[24px] h-[24px] rounded-full border border-primary flex items-center justify-center shrink-0 bg-white">
                <img loading="lazy" alt="Logo" className="w-full h-full object-contain p-0.5" src="/img/logo.png"/>
              </div>
              <span className="font-label text-xs font-bold text-primary">PLATEFORME GED</span>
            </div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/60 backdrop-blur-md rounded-xl p-4 mb-6 border border-line shadow-sm"
            >
              <p className="font-body-md text-text">Recherche : "Contrat bail commercial 2023 Casablanca"... Indexation en cours pour un accès immédiat.</p>
            </motion.div>
            <div className="flex justify-end">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md animate-pulse">
                <span className="text-white text-sm">🔍</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
