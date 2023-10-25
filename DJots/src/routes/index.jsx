import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
