import { motion } from 'framer-motion';

export default function UseCases() {
  const cases = [
    {
      title: "Conseil et Audit",
      desc: "Expertise pour optimiser vos processus documentaires.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChKRPJn1gSFDrt1GQDzfiU4I3yCzTQVQeuNO8ytisTcKlK31yEv5K86cdWMKJBg3GC95w5q1ERJKHJLKU3w-6SojCl15IPwtoKItbHfym_OWSwde4Lc_X0Q39r2NUE_oZu-ti8_Zs_OibuoUCAcJYE-cSQuZwNsvFjQJC5rdU9maW6xzUq0FkX5WNlRsxq4L4CR7oinVYlFK6v9BDjMPShHM5UEvXrG_3JYGqBIWaiRdb9MTmRBmaZdMBZC44wnynC-oFH9TaZlB9Q",
      gradient: "from-primary/90 to-transparent"
    },
    {
      title: "Conservation et Classement",
      desc: "Stockage sécurisé et organisation physique rigoureuse.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABa0q5BJ_DreMgIZGB-8at3sYpuFks_tT431tznVrVWB2C49LzdUC651wzXTj9LD-7VYCWRRpo9bqyyAQ_b54KnjtoPjXSRfeIXbBgjwHXIr8Ojo51Y8MG8CC0mGtvupgQSf4RnLcvReiqPWlUs5L2KkemFlhV-MfAQAzfyxIvGWfFM2Orh3ChuU5A6sOS2VBQbJyPWAQcwMlr6YWpCbln_V8DC4Yo90e6mK4QAINc-FrScaJ_KPin-t6UJ12p4Dnl5CbWpvGS2GiO",
      gradient: "from-slate-900/90 to-transparent"
    },
    {
      title: "Ingénierie GED",
      desc: "Solutions sur mesure (Synology, Alfresco, Bureau d'ordre).",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsZf4UPkmlE6_mXYyjLE0rRS6z3wyPwTyXyHBEx2fzb_1GTK9oiAbqHMYNp1BpaU32inyxnVzpmayXVCbCKB_1Vo5pWerZ__YxCtY56FNpcHMwYf9urWgXAJQyGfscYHxMbULHWIsDeg5XCImbVDEPCwNhnAFC1xNYFgDTRv4KBYk1lGhIhBi4Pez_FSe2stW1TrgJkEhZUjpZcpgdrnwOaIDJo-2fibASWue5TrVKAp0CiX5ahI1LePNwx8xkgPfEO5mMALLcQWo",
      gradient: "from-primary-dark/90 to-transparent"
    },
    {
      title: "Destruction Certifiée",
      desc: "Élimination sécurisée avec certificat de conformité.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5cY_8WSiYE8XLX9-TC1PN-9mihq_rEdAuIWhtvcYj7w3Jym37KSRruLnz0ZQY5zy1_DktUdT0RLTDQ4dIOGeKAvBWKyz6Fg4AS8M9VGl8uRkbhFz7qmqDNDpZ-CnVzYng1m39Wxi--hMoM4aMjONRhxBfdlgygDuhMZXzobuhZkCisfF6llXxrL9fOU48PhgyUNZx5V5gH-adc6HxffpgIWavNNpFCUnafc-d7HEDWlEQx3S8yVrTddmzqlMzQIOc0ib4Bxpxxe-W",
      gradient: "from-slate-800/90 to-transparent"
    }
  ];

  return (
    <section className="py-[160px] px-margin max-w-[1728px] mx-auto flex flex-col items-center bg-page-bg">
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
              alt={c.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60 bg-slate-900" 
              src={c.img}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${c.gradient}`}></div>
            <div className="relative z-10 transition-transform duration-500 group-hover:translate-y-[-10px]">
              <h4 className="font-h3 text-xl font-bold mb-2 text-white">{c.title}</h4>
              <p className="font-body-md text-white/80">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
