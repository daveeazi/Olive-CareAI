/** @format */
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Whatsapp from './components/Whatsapp/whatsapp';
import Offers from './components/Offers/Offers';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '70px' }}>
        <Home />
        <Whatsapp />
        <Offers />
      </main>
    </>
  );
}

export default App;
