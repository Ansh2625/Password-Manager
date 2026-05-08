import React from 'react'

const Navbar = () => {
  return (

    <nav className='bg-slate-950 text-slate-100 flex justify-between p-4 text-xl font-bold items-center'>

        <div>Logo</div>

        <ul className='flex space-x-10'>
            <li className='hover:text-blue-400 cursor-pointer'><a href="/">Home</a></li>
            <li className='hover:text-blue-400 cursor-pointer'><a href="/about">About</a></li>
            <li className='hover:text-blue-400 cursor-pointer'><a href="/contact">Contact</a></li>
        </ul>

        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl">Login</button>

    </nav>

  )
}

export default Navbar
