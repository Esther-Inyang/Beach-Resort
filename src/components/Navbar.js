import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <div className='nav-header'>
              {/* <div className='logo-bg'>
               <img src={logo} alt="Beach Resort" className='logo'/>
              </div> */}
                <Link to="/">
                    <img src={logo} alt="Beach Resort" className='logo'/>
                    {/* <img src={logo} alt="Beach Resort" className='logo'/> */}
                </Link>
                
               <button type="button" className="nav-btn" onClick={handleToggle}><FaAlignRight className='nav-icon' /></button>
            </div>
            <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/rooms">Explore-Rooms</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar