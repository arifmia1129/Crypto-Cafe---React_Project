import { Route, Routes } from 'react-router-dom';
import './App.css';
import Coins from './components/Coins/Coins';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/coins" element={<Coins />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
