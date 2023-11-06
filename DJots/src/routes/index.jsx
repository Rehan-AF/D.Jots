import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import WalletConnect from '../components/walletConnect';
import Login from '../pages/login';
import ShowNotes from '../pages/notes';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import ShowPredictions from '../pages/predictions';

const Routers = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<WalletConnect />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/notes" element={<ShowNotes />} />
          <Route path="/predictions" element={<ShowPredictions />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Routers;
