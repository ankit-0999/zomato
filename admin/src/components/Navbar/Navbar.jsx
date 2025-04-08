import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <Link to="/">
          <img className='logo' src={assets.logo} alt="Food Delivery Admin" />
        </Link>
        <h2 className="navbar-title">Admin Dashboard</h2>
      </div>
      
      <div className="navbar-right">
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <img src={assets.order_icon} alt="Search" />
        </div>
        <div className="profile-container">
          <img className='profile' src={assets.profile_image} alt="Profile" />
          <div className="profile-dropdown">
            <p>Admin</p>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
