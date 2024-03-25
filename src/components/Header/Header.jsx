import React from 'react'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import {IoArrowForwardCircleOutline, IoMailUnreadOutline} from "react-icons/io5";
import { IoMdClose } from "react-icons/io";





export function Header(props) {

  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }
    

    return (
      <>
        <header>
          <nav className='p-5 md:fixed w-full bg-white shadow md:flex md:items-center md:justify-between'>
            <div className='flex justify-between items-center'>
               <Link to="/">
             <span>    
                 <img src="image/logo.png" alt="logo" className='h-16 '  />
            </span>
               </Link>
               
              <button className='flex text-3xl cursor-pointer md:hidden'
               onClick={handleClick}
              >
              {menu ? <IoMdClose/> : <FaBars/>}
              </button>
            </div>
            <div className=''>

             <ul className={`md:flex md:items-center md:pb-0 pt-4 pb-5  absolute md:static bg-white md:z-auto z-[-1] left-0 w-40 md:w-auto md:pl-0 py-5 pl-9 transition-all duration-500 transform ease-in ${menu ? 'top-20' : 'top-[-490px]'} `}>
                <li className='mx-1 my-2 md:my-2'><NavLink to="/">HOME</NavLink></li>
                <li className='mx-1 my-2 md:my-2'><NavLink to="/about">ABOUT</NavLink></li>
                <li className='mx-1 my-2 md:my-2'>SERVICES</li>
                <li className='mx-1 my-2 md:my-2'>SOLUTIONS</li>
                <li className='mx-1 my-2 md:my-2'>BLOG</li>
                <li className='mx-1 my-2 md:my-2'>CONTACT</li>
                <li className='mx-1 my-2 md:my-2'>WORK WITH US</li>
              </ul>

              
              
              
            </div>            
          </nav>
        </header>
           
        </>
    )
}
