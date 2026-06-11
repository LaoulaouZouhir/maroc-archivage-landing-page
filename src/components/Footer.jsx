export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-[128px] pb-[64px] px-margin rounded-t-[64px] relative z-20">
      <div className="max-w-[1728px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[128px] mb-[128px]">
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-white">
              <img alt="Maroc Archivage Logo" className="w-full h-full object-contain p-1.5" src="https://lh3.googleusercontent.com/aida/AP1WRLvsSgbGKdbcLKOA2HcB3eeu_aMqqcULpCSL4w4vIud0k19Nos0f79MOooDkWKD2PYf3YL7YbMwyFVO3vnfAS4ktIOSvjjM3iJ0f9ev9xYZdRHxZHaugY8uWL6eN6knezKF3lM8MH76kwLHZsuQHrUc22Sq3dzRucrD8I8qGic_8JzTlXHvexEO0n0PcZAikUbiccpQMJK17Orh6grziLuFhveX91WEnDCK6dqLOJDmkSXP5b719rbVk7Jw"/>
            </div>
            <p className="font-body-md text-white/50 max-w-xs">
              Le leader de la gestion documentaire au Maroc. Libérez le potentiel de vos données grâce à notre expertise.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer" href="#">
                <span>🔗</span>
              </a>
              <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer" href="#">
                <span>🌐</span>
              </a>
              <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer" href="#">
                <span>💼</span>
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
