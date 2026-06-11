import { motion } from 'framer-motion';

export default function Updates() {
  const articles = [
    {
      cat: "Service • Oct 2024",
      title: "Accélérez votre transition vers la digitalisation",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChKRPJn1gSFDrt1GQDzfiU4I3yCzTQVQeuNO8ytisTcKlK31yEv5K86cdWMKJBg3GC95w5q1ERJKHJLKU3w-6SojCl15IPwtoKItbHfym_OWSwde4Lc_X0Q39r2NUE_oZu-ti8_Zs_OibuoUCAcJYE-cSQuZwNsvFjQJC5rdU9maW6xzUq0FkX5WNlRsxq4L4CR7oinVYlFK6v9BDjMPShHM5UEvXrG_3JYGqBIWaiRdb9MTmRBmaZdMBZC44wnynC-oFH9TaZlB9Q",
      gradient: "from-primary/40"
    },
    {
      cat: "Expertise • Sep 2024",
      title: "Le cycle de vie documentaire moderne",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsZf4UPkmlE6_mXYyjLE0rRS6z3wyPwTyXyHBEx2fzb_1GTK9oiAbqHMYNp1BpaU32inyxnVzpmayXVCbCKB_1Vo5pWerZ__YxCtY56FNpcHMwYf9urWgXAJQyGfscYHxMbULHWIsDeg5XCImbVDEPCwNhnAFC1xNYFgDTRv4KBYk1lGhIhBi4Pez_FSe2stW1TrgJkEhZUjpZcpgdrnwOaIDJo-2fibASWue5TrVKAp0CiX5ahI1LePNwx8xkgPfEO5mMALLcQWo",
      gradient: "from-slate-900/40"
    },
    {
      cat: "Société • Aug 2024",
      title: "Maroc Archivage renforce sa présence nationale",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5cY_8WSiYE8XLX9-TC1PN-9mihq_rEdAuIWhtvcYj7w3Jym37KSRruLnz0ZQY5zy1_DktUdT0RLTDQ4dIOGeKAvBWKyz6Fg4AS8M9VGl8uRkbhFz7qmqDNDpZ-CnVzYng1m39Wxi--hMoM4aMjONRhxBfdlgygDuhMZXzobuhZkCisfF6llXxrL9fOU48PhgyUNZx5V5gH-adc6HxffpgIWavNNpFCUnafc-d7HEDWlEQx3S8yVrTddmzqlMzQIOc0ib4Bxpxxe-W",
      gradient: "from-primary-dark/40"
    }
  ];

  return (
    <section className="py-[120px] px-margin max-w-[1728px] mx-auto bg-page-bg">
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
              <img alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src={item.img}/>
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
