import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (

    <nav className=' text-violet-100 flex md:flex-row flex-col gap-5 justify-center p-4 text-xl font-bold items-center'>

        <div className='px-5'>
          <img src="favicon.png" alt="logo" width={70}/>
        </div>

        <ul className='flex space-x-10 text-2xl'>
            <li className='hover:text-fuchsia-400 cursor-pointer'><NavLink to="/">Home</NavLink></li>
            <li className='hover:text-fuchsia-400 cursor-pointer'><NavLink to="/about">About</NavLink></li>
            <li className='hover:text-fuchsia-400 cursor-pointer'><NavLink to="/contact">Contact</NavLink></li>
        </ul>

    </nav>

  )
}

export default Navbar
