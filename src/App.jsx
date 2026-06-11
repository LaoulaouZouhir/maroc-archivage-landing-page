import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Expertise from './components/Expertise';
import Manifesto from './components/Manifesto';
import ECMSection from './components/ECMSection';
import Digitalization from './components/Digitalization';
import UseCases from './components/UseCases';
import Testimonial from './components/Testimonial';
import Updates from './components/Updates';
import CTA from './components/CTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="text-text font-body-lg min-h-screen antialiased selection:bg-primary selection:text-white bg-page-bg relative">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Expertise />
        <Manifesto />
        <ECMSection />
        <Digitalization />
        <UseCases />
        <Testimonial />
        <Updates />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
