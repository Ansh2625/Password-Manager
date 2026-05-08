import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const Content = () => {

  const ref = useRef();

  
  const [form,setForm] = useState({site:"",username:"",password:""});

  
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(()=>{
    let passwords = localStorage.getItem("passwords");
    if(passwords)
      setPasswordArray(JSON.parse(passwords))
  },[])


  const showPassword = ()=>{
    if(ref.current.src.includes("eyecross.png"))
      ref.current.src = "eye.png";
    else
      ref.current.src = "eyecross.png"  
  }

  const savePassword = ()=>{
    setPasswordArray([...passwordArray,form]);
    localStorage.setItem("passwords",JSON.stringify([...passwordArray,form]))
    console.log([...passwordArray,form]);
  }

  const handleChange = (e)=>{
    setForm({...form, [e.target.name] : e.target.value})
  }

  return (
    <>
    
      <div className='absolute inset-0 -z-10 h-full w-full bg-[#000000] bg-[radial-gradient(125%_125%_at_50%_100%,#000000_40%,#350136_100%)] bg-size-[100%_100%]'></div>


      <div className="bg-gray-700 mx-auto max-w-4xl">
        
        <h1 className='text-white text-center text-4xl'>Store your Passwords easily.</h1>

        <div className='flex flex-col gap-8 '>

          <input type="text" name='site' value={form.site} onChange={handleChange} placeholder="Enter URL" className='rounded-full bg-white border border-fuchsia-600 text-black py-1 px-4'/>

          <div className='flex flex-row justify-between'>
            <input type="text" name='username' value={form.username} onChange={handleChange} placeholder="Enter Username" className='rounded-full bg-white border border-fuchsia-600 text-black py-1 px-4'/>

            <div className='relative'>
              <input type="password" name='password' value={form.password} onChange={handleChange} placeholder="Enter Password" className='rounded-full bg-white border border-fuchsia-600 text-black py-1 px-4'/>
              <span className='absolute right-3 top-1.5'>
                <img ref={ref} src="eye.png" alt="eye" width={20} className='cursor-pointer' onClick={showPassword}/>
              </span>
            </div>
          </div>

          <div className='flex justify-center'>
            <button className="bg-fuchsia-600 hover:bg-fuchsia-500 px-4 py-2 rounded-xl text-white font-bold flex justify-center items-center w-fit gap-2" onClick={savePassword}>
              <lord-icon src="https://cdn.lordicon.com/efxgwrkc.json" trigger="hover"></lord-icon>
              Add Password
            </button>
          </div>

        </div>

        <div className="passwords">
          <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
          {passwordArray.length===0 && <div>No passwords to show</div>}
          {passwordArray.length!==0 && 
          <table className='table-auto w-full rounded-md overflow-hidden'>
            <thead className='bg-fuchsia-600 text-white'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
              </tr>
            </thead>
            <tbody className='bg-fuchsia-200'>
              {passwordArray.map((item,index)=>{
                return <tr key={index}>
                  <td className='text-center w-32 py-2 border border-white'>
                    <a href={item.site} target='_blank'>{item.site}</a>
                  </td>
                  <td className='text-center w-32 py-2 border border-white'>{item.username}</td>
                  <td className='text-center w-32 py-2 border border-white'>{item.password}</td>
                </tr>
              })}
            </tbody>
          </table>
          }
        </div>

      </div>

    </>
  )
}

export default Content
