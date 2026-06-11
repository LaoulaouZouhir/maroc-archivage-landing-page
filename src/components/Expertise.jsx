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
      img: "/img/exp_num.png"
    },
    {
      title: "Archivage Physique",
      subtitle: "Stockage Sécurisé",
      desc: "Conservation externalisée de vos documents dans des conditions de sécurité et de confidentialité optimales.",
      icon: "📦",
      color: "from-slate-500/20 to-slate-600/5",
      img: "/img/exp_arch.png"
    },
    {
      title: "Plateforme GED",
      subtitle: "Gestion Électronique",
      desc: "Déploiement de solutions logicielles sur mesure pour centraliser et distribuer l'information.",
      icon: "💻",
      color: "from-indigo-500/20 to-indigo-600/5",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Conformité & Légal",
      subtitle: "Zéro Risque",
      desc: "Application rigoureuse des durées de conservation légales et destruction certifiée des documents obsolètes.",
      icon: "⚖️",
      color: "from-emerald-500/20 to-emerald-600/5",
      img: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Audit & Conseil",
      subtitle: "Ingénierie Documentaire",
      desc: "Analyse de vos processus documentaires existants et recommandation d'une stratégie cible performante.",
      icon: "📋",
      color: "from-purple-500/20 to-purple-600/5",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
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
    const maxScroll = scrollContainer.scrollWidth - window.innerWidth;
    if (maxScroll > 0) {
      gsap.to(scrollContainer, {
        x: -maxScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          start: 'top 100px',
          end: () => "+=" + maxScroll,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
    }

  }, { scope: containerRef });

  return (
    <section id="expertise" className="bg-page-bg relative pt-8">
      <div ref={containerRef} className="h-[75vh] min-h-[550px] max-h-[800px] w-full flex flex-col items-center justify-center overflow-hidden relative">
        
        <div className="expertise-header w-full text-center z-10 px-4 mb-10">
          <h2 className="font-display text-[36px] md:text-[48px] font-bold text-text leading-tight">
            Notre Expertise
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="scroll-container flex gap-6 md:gap-8 px-4 md:px-12 items-center w-max mx-auto">
          {expertiseItems.map((item, index) => (
            <div 
              key={index} 
              className="carousel-card shrink-0 w-[280px] h-[380px] md:w-[320px] md:h-[420px] bg-white rounded-[32px] overflow-hidden shadow-2xl border border-line flex flex-col group cursor-pointer"
            >
              {/* Image Section */}
              <div className="h-1/2 w-full relative overflow-hidden">
                <img 
                  loading="lazy"
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
