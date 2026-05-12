import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {v4 as uuidv4} from 'uuid'


const Content = () => {

  const ref = useRef();
  const passwordRef = useRef();
  
  const [form,setForm] = useState({site:"",username:"",password:""});
  
  const [passwordArray, setPasswordArray] = useState([])

  const getPasswords = async ()=>{
    let req = await fetch("http://localhost:3000/")
    let passwords = await req.json();
    setPasswordArray(passwords)
  }

  useEffect(()=>{
    getPasswords()

  },[])

  const showPassword = ()=>{
    
    if(ref.current.src.includes("eyecross.png"))
    {
      ref.current.src = "eye.png";
      passwordRef.current.type = "password";
    }
    else
    {
      ref.current.src = "eyecross.png"  
      passwordRef.current.type = "text";
    }
  }

  const savePassword = async ()=>{
    setPasswordArray([...passwordArray,{...form,id: uuidv4()}]);
    // localStorage.setItem("passwords",JSON.stringify([...passwordArray,{...form,id: uuidv4()}]))

    await fetch("http://localhost:3000/", {method:"DELETE", headers: {"Content-Type": "application/json"}, body: JSON.stringify({id: form.id})})
    setForm({site:"",username:"",password:""});

    let res = await fetch("http://localhost:3000/", {method:"POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({...form,id: uuidv4()})})
    setForm({site:"",username:"",password:""});
    toast('Password Saved!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const editPassword = (id)=> {
    setForm({...passwordArray.filter(item=>item.id===id)[0], id:id});
    setPasswordArray(passwordArray.filter(item=>item.id!==id));
  }

  const deletePassword = async (id)=>{
    setPasswordArray(passwordArray.filter(item=>item.id!==id));
    // localStorage.setItem("passwords",JSON.stringify(passwordArray.filter(item=>item.id!==id)))
    let res = await fetch("http://localhost:3000/", {method:"DELETE", headers: {"Content-Type": "application/json"}, body: JSON.stringify({id})})
    setForm({site:"",username:"",password:""});
    toast('Password Deleted!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const handleChange = (e)=>{
    setForm({...form, [e.target.name] : e.target.value})
  }

  const copyText = (text)=>{
    toast('Text Copied!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  }

  return (
    <div className='flex-1'>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    
      <div className="md:container mx-auto max-w-4xl">
        
        <h1 className='text-white text-center text-5xl font-bold mt-25 mb-20'>Store your Passwords easily.</h1>

        <div className='flex flex-col gap-8 '>

          <input type="text" name='site' value={form.site} onChange={handleChange} placeholder="Enter URL" className='rounded-full bg-white border border-fuchsia-600 text-black py-2 px-4 w-[90%] md:w-full max-w-3xl mx-auto'/>

          <div className='flex flex-col md:flex-row justify-center md:gap-30 items-center gap-5'>
            <input type="text" name='username' value={form.username} onChange={handleChange} placeholder="Enter Username" className='rounded-full bg-white border border-fuchsia-600 text-black py-1 px-4'/>

            <div className='relative'>
              <input ref={passwordRef} type="password" name='password' value={form.password} onChange={handleChange} placeholder="Enter Password" className='rounded-full bg-white border border-fuchsia-600 text-black py-1 px-4'/>
              <span className='absolute right-3 top-1.5'>
                <img ref={ref} src="eye.png" alt="eye" width={20} className='cursor-pointer' onClick={showPassword}/>
              </span>
            </div>
          </div>

          <div className='flex justify-center'>
            <button className="bg-fuchsia-600 hover:bg-fuchsia-500 px-4 py-2 rounded-xl text-white font-bold flex justify-center items-center w-fit gap-2" onClick={savePassword}>
              <lord-icon src="https://cdn.lordicon.com/efxgwrkc.json" trigger="hover"></lord-icon>
              Save Password
            </button>
          </div>

        </div>

        <div className="passwords">
          <h2 className='font-bold text-4xl py-4 text-white my-10 md:text-left text-center'>Your Passwords</h2>
          {passwordArray.length===0 && <div className='text-white text-center font-bold text-xl mt-10'>No passwords to show</div>}
          {passwordArray.length!==0 && 
          <table className='table-auto w-full rounded-md overflow-hidden'>
            <thead className='bg-fuchsia-600 text-white'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-fuchsia-200'>
              {passwordArray.map((item,index)=>{
                return <tr key={index}>
                  <td className='text-center w-32 py-2 border border-white'>
                    <div className='flex items-center justify-center gap-3'>
                      <a href={item.site} target='_blank'>{item.site}</a>
                      <img src="copy.png" alt="copy" width={25} className='cursor-pointer' onClick={()=>copyText(item.site)}/>
                    </div>
                  </td>
                  <td className='text-center w-32 py-2 border border-white'>
                    <div className='flex items-center justify-center gap-3'>
                      {item.username}
                      <img src="copy.png" alt="copy" width={25} className='cursor-pointer' onClick={()=>copyText(item.username)}/>
                    </div>
                  </td>
                  <td className='text-center w-32 py-2 border border-white'>
                    <div className='flex items-center justify-center gap-3'>
                      {"*".repeat(item.password.length)}
                      <img src="copy.png" alt="copy" width={25} className='cursor-pointer' onClick={()=>copyText(item.password)}/>
                    </div>
                  </td>
                  <td className='text-center w-32 py-2 border border-white'>
                    <div className='flex items-center justify-center gap-5'>
                      <img src="edit.png" alt="edit" width={20} className='cursor-pointer' onClick={()=>editPassword(item.id)}/>
                      <img src="delete.png" alt="delete" width={20} className='cursor-pointer' onClick={()=>deletePassword(item.id)}/>
                    </div>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
          }
        </div>

      </div>

    </div>
  )
}

export default Content
