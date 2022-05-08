import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import BD from './components/Address/BD/BD';
import US from './components/Address/US/US';
import CoinDetail from './components/CoinDetail/CoinDetail';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/coins" element={<Coins />}></Route>
        <Route path="/coins/:id" element={<CoinDetail />}></Route>
        <Route path="/contact" element={<Contact />}>
          <Route path='bdaddress' element={<BD />}></Route>
          <Route path='usaddress' element={<US />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
