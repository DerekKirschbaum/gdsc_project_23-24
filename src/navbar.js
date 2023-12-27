import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar= () =>{
  return (
  <div className="navbar">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Search">Search</Link>
    </li>
    <li>
      <Link to="/AddListing">Add Listing</Link>
    </li>
    <li>
      <Link to="/SignIn">Sign In</Link>
    </li>
    <li>
      <Link to="/Register">Register</Link>
    </li>
    
  </div>
  );
}
export default Navbar;