
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedCars from '@/components/FeaturedCars';
import CarCategories from '@/components/CarCategories';
import Features from '@/components/Features';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturedCars />
        <Features />
        <CarCategories />
        <CallToAction />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
