import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-header">
        <h3>Admin Panel</h3>
      </div>
      
      <div className="sidebar-options">
        <NavLink to='/add' className={({isActive}) => isActive ? "sidebar-option active" : "sidebar-option"}>
            <div className="sidebar-icon">
              <img src={assets.add_icon} alt="" />
            </div>
            <p>Add Items</p>
        </NavLink>
        
        <NavLink to='/list' className={({isActive}) => isActive ? "sidebar-option active" : "sidebar-option"}>
            <div className="sidebar-icon">
              <img src={assets.order_icon} alt="" />
            </div>
            <p>List Items</p>
        </NavLink>
        
        <NavLink to='/orders' className={({isActive}) => isActive ? "sidebar-option active" : "sidebar-option"}>
            <div className="sidebar-icon">
              <img src={assets.order_icon} alt="" />
            </div>
            <p>Orders</p>
        </NavLink>
      </div>
      
      <div className="sidebar-footer">
        <div className="sidebar-option">
          <div className="sidebar-icon">
            <img src={assets.order_icon} alt="" />
          </div>
          <p>Settings</p>
        </div>
        <div className="sidebar-option">
          <div className="sidebar-icon">
            <img src={assets.order_icon} alt="" />
          </div>
          <p>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
