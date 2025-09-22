import React from 'react';
import { SEO } from '../seo/SEOProvider';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Sectors from '../components/Sectors';
import Benefits from '../components/Benefits';
import TestimonialCarousel from '../components/TestimonialCarousel';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import WhatsAppFloating from '../components/WhatsAppFloating';

const Home: React.FC = () => {
  return (
    <>
      <SEO />
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Sectors />
      <Benefits />
      <TestimonialCarousel />
      <CTA />
      <ContactForm />
      <Footer />
      <WhatsAppFloating />
    </>
  );
};

export default Home;