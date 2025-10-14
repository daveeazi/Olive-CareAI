/** @format */
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Whatsapp from './components/Whatsapp/Whatsapp';
import Offers from './components/Offers/Offers';
import Footer from './components/Footer/Footer';
import Faq from './components/Faq/Faq';
import Testimonials from './components/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '70px' }}>
        <Home />
        <Whatsapp />
        <Offers />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;