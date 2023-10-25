import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
