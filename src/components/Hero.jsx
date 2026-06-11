import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    )
    .fromTo('.hero-text', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo('.hero-video-container',
      { opacity: 0, scale: 0.95, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out' },
      '-=0.6'
    );


  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="px-margin max-w-[1728px] mx-auto flex flex-col items-center text-center relative overflow-hidden bg-page-bg min-h-[85vh] md:min-h-screen">
      
      <div className="absolute top-[12vh] md:top-[18vh] left-0 right-0 z-10 px-4 w-full mt-4">
        <h1 className="hero-title text-2xl md:text-4xl font-semibold text-slate-900 tracking-tight">
          Donnez une nouvelle dimension <br />
          <span className="text-3xl md:text-5xl font-bold mt-1 leading-none tracking-tighter block pt-2 text-primary">
            à vos archives
          </span>
        </h1>
      </div>

      <div className="absolute bottom-[8vh] md:bottom-[12vh] left-0 right-0 z-10 px-4 w-full">
        <p className="hero-text font-body-lg text-sm md:text-lg text-slate-700 max-w-2xl mx-auto font-medium">
          Libérez totalement le potentiel de vos données et documents grâce à notre expertise en gestion de l'information et digitalisation.
        </p>
      </div>

      <div className="hero-video-container absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover scale-[1.05]"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
        >
          <source src="/hero_video_desktop.mp4" media="(min-width: 768px)" type="video/mp4" />
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>
        {/* Soft, tall ambient bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[25vh] bg-gradient-to-t from-page-bg to-transparent z-10"></div>
        {/* Larger, much smoother bottom-right corner fade */}
        <div className="absolute bottom-0 right-0 w-[60vw] max-w-[700px] h-[40vh] bg-gradient-to-tl from-page-bg to-transparent z-10"></div>
      </div>

    </section>
  );
}
