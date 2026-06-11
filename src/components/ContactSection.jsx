import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="py-12 md:py-24 px-margin max-w-[1728px] mx-auto bg-white" id="contact">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px]">
        
        {/* Left Side: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h2 className="font-display text-[40px] md:text-[56px] font-bold text-slate-900 leading-[1.1] mb-6">
            Prêt à transformer vos <span className="text-primary">archives</span> ?
          </h2>
          <p className="font-body-md text-lg text-slate-600 mb-10 max-w-md">
            Laissez-nous vos coordonnées, nos experts reviendront vers vous très rapidement pour discuter de votre projet et vous proposer un audit gratuit.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="font-label text-xs text-slate-500 uppercase tracking-wider mb-1">Téléphone</p>
                <p className="font-semibold text-slate-900">+212 661 17 77 95</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="font-label text-xs text-slate-500 uppercase tracking-wider mb-1">Email</p>
                <p className="font-semibold text-slate-900">contact@maroc-archivage.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <p className="font-label text-xs text-slate-500 uppercase tracking-wider mb-1">Siège social</p>
                <p className="font-semibold text-slate-900">Casablanca, Maroc</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="font-label text-xs text-slate-600 font-semibold uppercase tracking-wider">Nom complet</label>
                <input 
                  id="fullName"
                  type="text" 
                  placeholder="Jean Dupont" 
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-line focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="font-label text-xs text-slate-600 font-semibold uppercase tracking-wider">Entreprise</label>
                <input 
                  id="company"
                  type="text" 
                  placeholder="Votre société" 
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-line focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-label text-xs text-slate-600 font-semibold uppercase tracking-wider">Email pro</label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="jean@societe.com" 
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-line focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-label text-xs text-slate-600 font-semibold uppercase tracking-wider">Téléphone</label>
                <input 
                  id="phone"
                  type="tel" 
                  placeholder="+212 661 17 77 95" 
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-line focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-label text-xs text-slate-600 font-semibold uppercase tracking-wider">Message</label>
              <textarea 
                id="message"
                placeholder="Parlez-nous de vos besoins en archivage..." 
                rows="4"
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-line focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-slate-400 text-slate-900"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-4 w-full bg-primary hover:bg-primary-dark text-white font-label font-bold uppercase tracking-wider py-5 rounded-2xl transition-colors duration-300 shadow-lg shadow-primary/30"
            >
              Envoyer la demande
            </button>
            <p className="text-center text-xs text-slate-400 mt-2">
              Vos données sont sécurisées et strictement confidentielles.
            </p>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
