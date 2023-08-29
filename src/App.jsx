import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./Components/Home";
import Coins from "./Components/Coins";
import CoinDetails from "./Components/CoinDetails";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;
