import React from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export function Navbar(props) {

    let Links = [
        {name:"HOME", link:"/"},
        {name:"ABOUT", link:"/"},
        {name:"SERVICES", link:"/"},
        {name:"SOLUTIONS", link:"/"},
        {name:"BLOG", link:"/"},
        {name:"CONTACT", link:"/"},
        {name:"WORK WITH US", link:"/"},
    ];

 const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }
    

    return (
        <>
          <div className='w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
              <div className='flex justify-between items-center cursor-pointer'>
              <span>    
                 <img src="image/logo.png" alt="logo" className='h-16 '  />
              </span>
              </div>
              <div>
              <button className='text-3xl cursor-pointer absolute right-8 top-6 md:hidden'
              onClick={handleClick}
              >
              {menu ? <IoMdClose/> : <FaBars/>}
              </button>
              </div>
              <ul className='md:flex md:items-center md:pb-0 pt-4 pb-5  absolute md:static bg-white md:z-auto z-[-1] left-0 w-40 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in   '>
                {
                    Links.map( (link) => (
                        <li key={link.name} className='md:ml-8 md:my-0 my-2 text-sm text-blue-800'>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))
                }
                
              </ul>
            </div>
          </div> 
        </>
    )
}
