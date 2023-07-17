import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./styles/App.css";
import Header from './Components/Header';
import Home from './Components/Home';
import Coins from './Components/Coins';
import CoinDetails from './Components/CoinDetails';
import Exchanges from './Components/Exchanges';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
