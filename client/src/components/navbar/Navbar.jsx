import React, { useContext } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Logo from '../Images/logo.png';
import './navbar.css';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const Navbar = () => {

  const { user } =  useContext(AuthContext);

  return (
    
   <>
   
   <nav className="navbar navbar-expand-lg" id='navigation'>
  <div className="container-fluid">
    <p className='book'>Booking.Spot</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span> 
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item ">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        </ul>
        <ul className="navbar-nav ms-auto">
{user ? user.username : (
      <li className="nav-item">
          <NavLink className="nav-link btn-info" clas to="/login">Signin</NavLink>
        </li>
)}
{!user &&(
<li className="nav-item">
          <NavLink className="btn btn-info" clas to="/login">Signup</NavLink>
        </li>
)}
      </ul>
    </div>
  </div>
</nav>
<Outlet />


   </>
    
  )
  
  
  
  
}

export default Navbar