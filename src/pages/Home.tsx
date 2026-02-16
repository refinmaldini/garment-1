import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
};

export default Home;
