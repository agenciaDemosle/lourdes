import React from 'react';
import { SEO } from '../seo/SEOProvider';
import { MobileMenuProvider } from '../context/MobileMenuContext';
import { useScrollTracking } from '../hooks/useScrollTracking';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Sectors from '../components/Sectors';
import Benefits from '../components/Benefits';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import WhatsAppFloating from '../components/WhatsAppFloating';

const Home: React.FC = () => {
  // Activar scroll tracking
  useScrollTracking();

  return (
    <MobileMenuProvider>
      <SEO />
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Sectors />
      <Benefits />
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