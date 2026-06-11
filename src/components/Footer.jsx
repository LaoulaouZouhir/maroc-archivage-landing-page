export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-[128px] pb-[64px] px-margin rounded-t-[64px] relative z-20">
      <div className="max-w-[1728px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[128px] mb-[128px]">
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-white">
              <img alt="Maroc Archivage Logo" className="w-full h-full object-contain p-1.5" src="/img/logo.png"/>
            </div>
            <p className="font-body-md text-white/50 max-w-xs">
              Le leader de la gestion documentaire au Maroc. Libérez le potentiel de vos données grâce à notre expertise.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-white/80 hover:text-white" href="https://www.linkedin.com/company/maroc-archivage/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>

              <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-white/80 hover:text-white" href="https://www.facebook.com/marocarchivage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Navigation Columns */}
          <div>
            <h4 className="font-label text-white mb-6 uppercase tracking-widest text-[10px]">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Audit &amp; Conseil</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Digitalisation</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Conservation</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Solutions GED</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-label text-white mb-6 uppercase tracking-widest text-[10px]">Société</h4>
            <ul className="flex flex-col gap-4">
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">À Propos</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Carrières</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Actualités</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-label text-white mb-6 uppercase tracking-widest text-[10px]">Ressources</h4>
            <ul className="flex flex-col gap-4">
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Blog</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Documentation</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Législation</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-[32px] border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label text-[11px] text-white/40">© 2024 Maroc Archivage S.A.R.L. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a className="font-label text-[11px] text-white/40 hover:text-white transition-colors" href="#">Politique de Confidentialité</a>
            <a className="font-label text-[11px] text-white/40 hover:text-white transition-colors" href="#">Conditions d'Utilisation</a>
            <a className="font-label text-[11px] text-white/40 hover:text-white transition-colors" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
