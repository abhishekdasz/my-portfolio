import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-section'> 
    <div className='nav-sec'>
        <div className='nav-container'>
            <div className="left-nav">
                <Link href='/'> <Image src='/logo.png' alt='logo' width={100} height={30} /> </Link>
                <ul>
                    <Link href='/'>  <li> Home </li> </Link>
                    <Link href='/about'>  <li> About </li> </Link>
                    <Link href='/all-projects'> <li> Projects </li> </Link>
                    <li> Skills </li>
                    <li> Contact Me </li>
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
