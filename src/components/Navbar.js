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
                {/*<Link to="/">
                    <img src={logo} alt="Beach Resort"/>
                </Link> */}
                
                <img src={logo} alt="Beach Resort" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar