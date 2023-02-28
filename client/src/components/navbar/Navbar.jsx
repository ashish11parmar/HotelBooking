import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Logo from '../Images/logo.png';
import './navbar.css';
import { NavLink, Outlet } from 'react-router-dom';


const Navbar = () => {


  return (
    
   <>
   
   <nav className="navbar navbar-expand-lg" id='navigation'>
  <div className="container-fluid">
    <img width="120px" height="40px" className='logo'  alt="BOOKING SPOT"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span> 
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item ">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      <li className="nav-item">
          <NavLink className="nav-link" to="/signin">Signin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Outlet />


   </>
    
  )
  
  
  
  
}

export default Navbar