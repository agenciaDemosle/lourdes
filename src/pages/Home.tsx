import React from 'react';
import { SEO } from '../seo/SEOProvider';
import { MobileMenuProvider } from '../context/MobileMenuContext';
import { useScrollTracking } from '../hooks/useScrollTracking';
import { useHashTracking } from '../hooks/useHashTracking';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Sectors from '../components/Sectors';
import Benefits from '../components/Benefits';
import Portfolio from '../components/Portfolio';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import WhatsAppFloating from '../components/WhatsAppFloating';

const Home: React.FC = () => {
  // Activar tracking
  useScrollTracking();
  useHashTracking();

  return (
    <MobileMenuProvider>
      <SEO />
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Sectors />
      <Benefits />
      <Portfolio />
      <TestimonialCarousel />
      <FAQ />
      <CTA />
      <ContactForm />
      <Footer />
      <WhatsAppFloating />
    </MobileMenuProvider>
  );
};

export default Home;