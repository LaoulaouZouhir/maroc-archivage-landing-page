export default function TrustStrip() {
  const clients = ['National', 'International', 'Banque', 'Assurance', 'Public'];
  
  return (
    <section className="pb-8 md:pb-12 w-full border-y border-slate-200/50 bg-white relative z-0 pt-12 shadow-sm">
      <div className="max-w-[1728px] mx-auto px-margin flex flex-col items-center">
        <p className="font-label text-label text-slate-500 mb-[32px] uppercase tracking-widest text-center">
          Plus de 65 clients nous font confiance
        </p>
        <div className="flex justify-center items-center opacity-100 w-full">
          <div className="marquee-container w-full overflow-hidden">
            <div className="marquee-content animate-marquee flex gap-[100px] items-center text-primary/40">
            {/* Original content */}
            {clients.map((client, i) => (
              <span key={i} className="font-h3 text-h3 font-semibold tracking-tight hover:text-primary transition-all duration-300 cursor-default">
                {client}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {clients.map((client, i) => (
              <span key={`dup-${i}`} className="font-h3 text-h3 font-semibold tracking-tight hover:text-primary transition-all duration-300 cursor-default">
                {client}
              </span>
            ))}
             {/* Duplicate again for wider screens */}
             {clients.map((client, i) => (
              <span key={`dup2-${i}`} className="font-h3 text-h3 font-semibold tracking-tight hover:text-primary transition-all duration-300 cursor-default">
                {client}
              </span>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
