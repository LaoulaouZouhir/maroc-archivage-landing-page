export default function TrustStrip() {
  const clients = ['National', 'International', 'Banque', 'Assurance', 'Public'];
  
  return (
    <section className="py-[128px] px-margin border-t border-line/30 max-w-[1728px] mx-auto flex flex-col items-center bg-page-bg relative z-0 pt-[40px]">
      <p className="font-label text-label text-muted mb-[32px] uppercase tracking-widest text-center">
        Plus de 65 clients nous font confiance
      </p>
      <div className="flex justify-center items-center opacity-100 text-muted w-full">
        <div className="marquee-container">
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
    </section>
  );
}
