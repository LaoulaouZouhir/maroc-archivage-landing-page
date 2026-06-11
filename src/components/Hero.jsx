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
    <section ref={heroRef} className="pt-[160px] px-margin max-w-[1728px] mx-auto flex flex-col items-center text-center relative overflow-visible bg-page-bg pb-[100px] min-h-screen justify-center">
      
      <div className="flex flex-col items-center">
        <h1 className="hero-title text-3xl md:text-4xl font-semibold text-text tracking-tight mb-4">
          Donnez une nouvelle dimension <br />
          <span className="text-4xl md:text-6xl font-bold mt-1 leading-none tracking-tighter block pt-2">
            à vos archives
          </span>
        </h1>
        <p className="hero-text font-body-lg text-body-md md:text-body-lg text-muted max-w-2xl mx-auto mb-[40px]">
          Libérez totalement le potentiel de vos données et documents grâce à notre expertise en gestion de l'information et digitalisation.
        </p>
      </div>

      <div className="hero-video-container w-full max-w-[500px] relative z-10 aspect-video mix-blend-multiply">
        <video
          ref={videoRef}
          src="/hero_video.mp4"
          className="w-full h-full object-contain"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          style={{ 
            WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 100%)', 
            maskImage: 'radial-gradient(circle, black 50%, transparent 100%)',
            filter: 'brightness(1.1) contrast(1.15)'
          }}
        />
      </div>

    </section>
  );
}
