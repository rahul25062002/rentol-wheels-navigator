
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedCars from '@/components/FeaturedCars';
import CarCategories from '@/components/CarCategories';
import Features from '@/components/Features';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Features />
        <FeaturedCars />
        <CarCategories />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
