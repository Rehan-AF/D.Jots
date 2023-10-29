import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import WalletConnect from '../components/walletConnect';
import Login from '../pages/login';

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<WalletConnect />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
