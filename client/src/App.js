import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Join from './pages/JoinUs';
import Driver from './pages/Driver';
import RepairCenter from './pages/RepairCenter';
import Services from './pages/Services';
import About from './pages/About';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join/*" element={<Join />}>
          <Route path="driver" element={<Driver />} />
          <Route path="repairCenter" element={<RepairCenter />} />
        </Route>
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
