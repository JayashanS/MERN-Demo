import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/navbar.css';



const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState(null); 

  const handleLinkClick = (link) => {
    setSelectedLink(link); 
  };

  return (
    <div className="navbar">
     
        <div className="navbar-brand">
          <div className="text">Wrench it</div>
        </div>

        <div className="navbar-item-1">
          <div className="text">
            <Link to="/"  style={{ color: selectedLink === "/" ? "#fff" : "#868e96", textDecoration: "none" }} onClick={() => handleLinkClick("/")}>
              Home
            </Link>
          </div>
        </div>

        <div className="navbar-item-2">
          <div className="text">
            <Link to="/join" style={{ color: selectedLink === "/join" ? "#fff" : "#868e96", textDecoration: "none" }}onClick={() => handleLinkClick("/join")}>
              Join
            </Link>
          </div>
        </div>

        <div className="navbar-item-3">
          <div className="text">
            <Link to="/services"  style={{ color: selectedLink === "/services" ? "#fff" : "#868e96", textDecoration: "none" }} onClick={() => handleLinkClick("/services")}>
              Services
            </Link></div>
        </div>
        <div className="navbar-item-4">
          <div className="text">
            <Link to="/pricing"  style={{ color: selectedLink === "/pricing" ? "#fff" : "#868e96", textDecoration: "none" }} onClick={() => handleLinkClick("/pricing")}>
              Pricing
            </Link></div>
        </div>
        <div className="navbar-item-5">
          <div className="text">
            <Link to="/about"  style={{ color: selectedLink === "/about" ? "#fff" : "#868e96", textDecoration: "none" }} onClick={() => handleLinkClick("/about")}>
              About
            </Link></div>
        </div>
      
    </div>
  );
};

export default Navbar;