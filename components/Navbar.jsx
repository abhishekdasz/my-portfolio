import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-section'> 
    <div className='nav-sec'>
        <div className='nav-container'>
            <div className="left-nav">
                <h1> <Image src='/logo.png' alt='logo' width={100} height={30} /> </h1>
                <ul>
                    <li> Home </li>
                    <li> About </li>
                    <li> Services </li>
                    <li> Contact Us </li>
                </ul>
            </div>
            
            <div className="right-nav">
                {/* <img src={searchImg} alt="searchImg" /> */}
                <button>Hire Now</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar
