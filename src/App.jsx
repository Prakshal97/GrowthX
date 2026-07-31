import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Portfolio from './components/Portfolio';
import WhyGrowthX from './components/WhyGrowthX';
import TechStack from './components/TechStack';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-dark overflow-x-hidden selection:bg-brand-orange/20 selection:text-brand-orange">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Portfolio />
        <WhyGrowthX />
        <TechStack />
        <Roadmap />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
