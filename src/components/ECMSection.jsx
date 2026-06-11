import { motion } from 'framer-motion';

export default function ECMSection() {
  const features = [
    {
      title: "Connaissance Centralisée",
      desc: "Réunissez tous vos actifs, archives et documents stratégiques dans un environnement unique, cohérent et consultable."
    },
    {
      title: "Intelligence Contextuelle",
      desc: "Nos solutions ECM comprennent les nuances de votre organisation, facilitant la recherche et l'extraction de données clés."
    },
    {
      title: "Distribution Sécurisée",
      desc: "Assurez-vous que chaque collaborateur habilité accède instantanément aux documents approuvés et à jour."
    }
  ];

  return (
    <section id="services" className="py-12 md:py-24 px-margin max-w-[1728px] mx-auto bg-page-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-[40px] p-8 h-[700px] flex items-center justify-center relative overflow-hidden border border-line shadow-sm"
        >
          <div className="w-full max-w-md bg-white-card rounded-2xl shadow-xl border border-line/20 p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="font-label font-bold text-sm text-primary">Archives Digitales</span>
              <span className="text-muted">•••</span>
            </div>
            <div className="space-y-4">
              {['Dossiers_Historiques', 'Contrats_Signés_2024', 'Pièces_Comptables', 'Registre_Légal'].map((item, idx) => (
                <motion.div 
                  key={item}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                >
                  <span className="text-primary text-xl">📁</span>
                  <span className="font-body-md font-medium text-text">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className="flex flex-col justify-center h-full max-w-lg">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-h2 mb-12 font-bold tracking-tight text-text"
          >
            La fondation intelligente pour votre gestion documentaire.
          </motion.h3>
          <div className="relative pl-8 border-l-[3px] border-line space-y-12">
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
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="opacity-50 hover:opacity-100 transition-opacity cursor-default"
              >
                <h4 className="font-h3 text-xl font-bold mb-3 text-text">{feature.title}</h4>
                <p className="font-body-md text-muted leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
