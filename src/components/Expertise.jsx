import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const containerRef = useRef(null);

  const expertiseItems = [
    {
      title: "Numérisation",
      subtitle: "Haute fidélité",
      desc: "Transformation de vos archives papier en actifs numériques indexés et recherchables instantanément.",
      icon: "🖨️",
      color: "from-blue-500/20 to-blue-600/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGxwLNMP2KVAWtuqvWXiFZkBm5YgSXjM45PkkRPvB3NsuAPX4Nse6nAySmOSPxXiaWvlTk0fB0Pagx0EkNf1L8x3CFyxgAWpQbdP2z4ZXhaiVorAeLCKBcI2qvs9oG9HqdMdiJrUYvBgL1Dr8nKNzygffqFMIlgWyshucf41s65I_hV3kCGtjFYShml4zOn9O6MuvVW54WVcjP7bBLEAYguBfutmc0Yq73HP9-yBiY6b98be0hC6KYAZFesHH3FkL4Gx0Yks2fyrpu"
    },
    {
      title: "Archivage Physique",
      subtitle: "Stockage Sécurisé",
      desc: "Conservation externalisée de vos documents dans des conditions de sécurité et de confidentialité optimales.",
      icon: "📦",
      color: "from-slate-500/20 to-slate-600/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRI6ZfedfqJ42Kz8fkZTlqC5CbQ5Q_0kVkLxIu7Xh8-ABjTl2K4v_yJEBQE1wi3AZMYD9IMvFxFOJyc86piFVAfQ0g6nyc1fRoYl7wB1_YDB3zlrCqOGtEow28qlTRV6LL9s1-rRPvAYojJgQhjJ9ERQ7Jf-IhHeg0bAcA4QWd3YKyDnVxSjTGeJ--ir7xqCghMtZPJ5OjvBwWSTiw7xPHbFrwOa_f5RTQGV6WOEWxuC-xwV7Ayb1q0kBzYF_oQHCxP3Dn3PL-aewa"
    },
    {
      title: "Plateforme GED",
      subtitle: "Gestion Électronique",
      desc: "Déploiement de solutions logicielles sur mesure pour centraliser et distribuer l'information.",
      icon: "💻",
      color: "from-indigo-500/20 to-indigo-600/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRd7pAyBrUx31zx6klyDiCWD04EiIaiDfNYNdGO8HozSTYH3bTc4IhWoBbOh4CpW4jAmMk2H_ecdJwzZL71ta4NvHIyMqapKo2BK36h0hn674xlIS0FoLhl6jQwDTwu_Idk9ZLj6MN8k5s-VrWMSox9J5YNpnlpqVlAVnzCXtAeDkwyvNWzXtGXt76wUk85CfXUmdE9Vi6RxqxkyBORzc1__OdpVEqiYNrMD1dKFJIU7gC874F--k_Kf5C1_yMSnhoytWkS9XWPwsm"
    },
    {
      title: "Conformité & Légal",
      subtitle: "Zéro Risque",
      desc: "Application rigoureuse des durées de conservation légales et destruction certifiée des documents obsolètes.",
      icon: "⚖️",
      color: "from-emerald-500/20 to-emerald-600/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJHfj4_xGj0yuLj8FKt6X72bCIskF-kJl3LA3T3_1-Qfv6mfKwCLXqKuU41nv1J3p_M1VLaKyUwt7jymaxu9IqrMBeOZwhDvKB2NclDw7qctzcy_CAPxlD6DRpxJ5uMf6G4nCRrvnMp59n2r2y9HaRxoemHYv9Vm4p_TMdRUwKitMvWXTR13rOY5umPLmIVd6L5RMbQMm1ZFC8-WMQdUrzWugK5J4Eh0Ph9XOn2e4G84KG4Az4KXAh3-n2Y52A1ycQ8Ow3OGXHosuz"
    },
    {
      title: "Audit & Conseil",
      subtitle: "Ingénierie Documentaire",
      desc: "Analyse de vos processus documentaires existants et recommandation d'une stratégie cible performante.",
      icon: "📋",
      color: "from-purple-500/20 to-purple-600/5",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbheL8VQt2V3qxmEXBukkZcNptuzepd42MEKEg9-qDVlpepWCcPZIR5s9MzcSFv4FH-6IuiF9uWjjxSWg2IQ-A_CdbSU7IbdGFdbRPcFqz1DyoSSA1w-kOaLoqdLsFYVQuBBDENJ0aa2OHfgIFFJ1Y7GClriULppWYz7d7fGuv-GPC_YjW-mQfwtuP1rbtxhAb-IzFfX6o7nj41jI_XdcVGj6on-6bwuQl_W5NMa4g3MvEW_sVCeo4Tgf1W3QkrnYFQKfSyl3ScLps"
    }
  ];

  useGSAP(() => {
    // Fade in text
    gsap.fromTo('.expertise-header', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, y: 0, duration: 1, 
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      }
    );

    const scrollContainer = document.querySelector('.scroll-container');

    // Horizontal scroll
    gsap.to(scrollContainer, {
      x: () => {
        const maxScroll = scrollContainer.scrollWidth - window.innerWidth;
        return maxScroll > 0 ? -maxScroll : 0;
      },
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-[300vh] w-full bg-page-bg relative">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        <div className="expertise-header absolute top-[10%] w-full text-center z-10 px-4">
          <h2 className="font-display text-[36px] md:text-[48px] font-bold text-text leading-tight">
            Notre Expertise
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="scroll-container flex gap-6 md:gap-8 px-4 md:px-12 items-center w-max mt-[80px]">
          {[...expertiseItems, ...expertiseItems].map((item, index) => (
            <div 
              key={index} 
              className="carousel-card shrink-0 w-[280px] h-[380px] md:w-[320px] md:h-[420px] bg-white rounded-[32px] overflow-hidden shadow-2xl border border-line flex flex-col group cursor-pointer"
            >
              {/* Image Section */}
              <div className="h-1/2 w-full relative overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} to-transparent`}></div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg text-xl">
                  {item.icon}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex flex-col flex-1 justify-center bg-white">
                <span className="font-label text-[10px] uppercase text-primary font-bold mb-1">{item.subtitle}</span>
                <h3 className="font-h3 text-2xl font-bold text-text mb-3">{item.title}</h3>
                <p className="font-body-md text-sm text-muted leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      </div>
    </section>
  );
}
