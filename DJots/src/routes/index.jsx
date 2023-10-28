import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import WalletConnect from '../components/walletConnect';

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<WalletConnect />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
