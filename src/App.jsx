/** @format */
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import HomeDesk from './components/Home/HomeDesk';
import Whatsapp from './components/Whatsapp/Test';
import WhatsappDesk from './components/Whatsapp/TestDesk';
import Offers from './components/Offers/Offers';
import Footer from './components/Footer/Footer';
import FooterDesk from './components/Footer/FooterDesk';
import Faq from './components/Faq/Faq';
import Testimonial from './components/Testimonial/Testimonial';
import TestimonialDesk from './components/Testimonial/TestimonialDesk';

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {isDesktop ? <HomeDesk /> : <Home />}
        {isDesktop ? <WhatsappDesk /> : <Whatsapp />}
        <Offers />
        {isDesktop ? <TestimonialDesk /> : <Testimonial />}
        <Faq />
      </main>
      {isDesktop ? <FooterDesk /> : <Footer />}
    </>
  );
}

export default App;
