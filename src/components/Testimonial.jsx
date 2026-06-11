import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Mariame Gaouane",
    text: "C'est presque magique d'avoir toutes les archives a portee de main! Travail propre efficace et en toute rapidite. Maroc archivage est une superbe équipe humaine! Et en bonus plusieurs conseils sur la manière avec laquelle les archives devraient être tenues. Je recommande!",
    initials: "MG",
    color: "bg-purple-500"
  },
  {
    name: "Mohamed Belmkaddem",
    text: "Une startup en pleine ascension comme en témoigne son grand sérieux et son professionnalisme dans l'accomplissement sans faille de son métier au niveau de tous les partenaires privés et publics.(administrations, entreprises publiques et sociétés privées.)",
    initials: "MB",
    color: "bg-orange-600"
  },
  {
    name: "Othmane Touzani",
    text: "La confiance boost la performance et l'engagement. Maroc archivage est notre partenaire stratégique.",
    initials: "OT",
    color: "bg-indigo-500"
  },
  {
    name: "Karim Amrani",
    text: "Sérieux et professionalisme. Merci pour la réussite de notre projet.",
    initials: "KA",
    color: "bg-green-700"
  },
  {
    name: "Hamli Mariam",
    text: "Equipe très qualifiée et professionnelle. Merci pour votre collaboration.",
    initials: "HM",
    color: "bg-stone-600"
  }
];

export default function Testimonial() {
  return (
    <section className="py-12 md:py-24 px-margin w-full bg-page-bg overflow-hidden relative" id="testimonials">
      <div className="max-w-[1728px] mx-auto mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[40px] md:text-[56px] font-bold text-slate-900 leading-[1.1] mb-6"
        >
          Ce que disent nos <span className="text-primary">clients</span>
        </motion.h2>
        <p className="font-body-md text-lg text-slate-600 max-w-2xl mx-auto">
          Découvrez les avis authentiques de nos partenaires qui ont franchi le pas vers une gestion documentaire optimisée.
        </p>
      </div>

      <div className="max-w-[1728px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bg-white rounded-[24px] p-8 shadow-sm border border-slate-100 flex flex-col gap-6 ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''} ${i === 1 ? 'lg:col-span-1 lg:row-span-2' : ''}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.color}`}>
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{review.name}</h3>
                  <div className="flex items-center gap-1 mt-1 text-yellow-400">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                </div>
              </div>
              <svg className="w-8 h-8 text-slate-200" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.583 8.353c-.318-1.579-1.078-2.926-2.28-4.041-1.203-1.115-2.731-1.672-4.585-1.672-1.258 0-2.483.253-3.673.76-1.19.506-2.269 1.34-3.237 2.502-1.07 1.24-1.91 2.651-2.522 4.232C4.673 11.714 4.367 13.52 4.367 15.55c0 1.954.512 3.513 1.537 4.678 1.024 1.165 2.378 1.748 4.062 1.748 1.53 0 2.827-.478 3.892-1.433 1.064-.955 1.596-2.14 1.596-3.553 0-1.096-.341-2.001-1.023-2.714-.682-.713-1.541-1.07-2.576-1.07-.63 0-1.189.13-1.677.391-.488.261-.926.589-1.314.985-.14-.234-.236-.481-.289-.741a3.784 3.784 0 01-.079-.884c0-1.636.575-3.327 1.724-5.074 1.149-1.747 2.766-2.62 4.851-2.62.92 0 1.636.21 2.148.631.512.42.828.948.948 1.583.12.634.025 1.199-.285 1.696-.31.496-.697.868-1.161 1.116-.362.193-.769.29-1.22.29-.865 0-1.579-.296-2.142-.888-.564-.592-.846-1.341-.846-2.247 0-.906.31-1.657.93-2.253.62-.596 1.378-.894 2.274-.894.887 0 1.633.298 2.24.894.606.596.909 1.347.909 2.253 0 .753-.198 1.488-.593 2.205-.395.717-.936 1.258-1.624 1.623-.523.277-1.12.416-1.792.416-.906 0-1.66-.298-2.262-.894a3.02 3.02 0 01-.903-2.253c0-.906.301-1.657.903-2.253.602-.596 1.356-.894 2.262-.894.86 0 1.603.284 2.228.852.625.568.969 1.272 1.033 2.112z"/>
              </svg>
            </div>
            <p className={`font-body-md text-slate-600 ${i === 0 || i === 1 ? 'text-lg leading-relaxed' : 'text-base'}`}>
              "{review.text}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
