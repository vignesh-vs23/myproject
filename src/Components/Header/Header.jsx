import React from 'react'
import {Link } from 'react-router-dom'
import './Header.css'
import logo from './logo.png'
function Header() {
  return (
      <header>
      <nav className='nav'>
        <div className='div1'>
          <img src={logo} alt="" />
          <div>
          <h1>PHOENIX</h1><br />
          <h3>Cricket Club</h3>
          </div>
         
        </div>
        <div className='div2'>
            <ul className='ul'>
                <li><Link to='/Main' className='link'> Home<span></span></Link></li>
                <li><Link to='/Stats' className='link'> Stats<span></span></Link></li>
                <li><Link to='/About' className='link'> About<span></span></Link></li>
                <li className='trainers'><Link to='/Trainers' className='link'>Trainers<span></span></Link></li>
                <li><Link to='/Shop' className='link'> Shop<span></span></Link></li>
                <li><Link to='/Contact' className='link'> Contact<span></span></Link></li>
                <li className='loginbutton'><span></span><Link to='/Login' className='link'> Login </Link></li>
            </ul>
        </div>
        </nav>
      </header>
  )
}

export default Header