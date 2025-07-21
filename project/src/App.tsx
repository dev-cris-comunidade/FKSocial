import React from 'react';
import Hero from './components/Hero';
import WhyThisMatters from './components/WhyThisMatters';
import WhatYouWillFind from './components/WhatYouWillFind';
import ForWho from './components/ForWho';
import HowItWorks from './components/HowItWorks';
import Manifesto from './components/Manifesto';
import Investment from './components/Investment';
import About from './components/About';
import Commitment from './components/Commitment';
import FinalCTA from './components/FinalCTA';
import AboutFK from './components/AboutFK';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyThisMatters />
      <WhatYouWillFind />
      <ForWho />
      <HowItWorks />
      <Manifesto />
      <Investment />
      <About />
      <Commitment />
      <FinalCTA />
      <AboutFK />
      <Footer />
    </div>
  );
}

export default App;