import React, { useContext, useState } from 'react'

import { Link } from 'react-router-dom'


const Login = () => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [isLoading,setIsLoading] = useState();

  return (
    <div className=' flex items-center justify-center bg-blue-950 h-screen'>

    <div className=' bg-blue-800 md:w-1/2 p-2 bg-opacity-25 mt-12 rounded-lg'>
        <div className=' flex justify-center'>
        <div>
        <h1 className=' font-playwrite p-2 text-white text-2xl md:text-4xl text-center font-semibold'>Login</h1>
        
        <div className='mt-6 space-x-4'>
            <div className='text-white text-md font-playwrite' htmlFor="">Email</div>
       <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' className=' border-none p-2 outline-none w-80 rounded-md font-playwrite' type="text" />
        </div>
        <div className='mt-6 space-x-4'>
            <div className='text-white text-md font-playwrite' htmlFor="">Password</div>
       <input value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter Your Password' className=' border-none w-80 outline-none font-playwrite p-2 rounded-md' type="text" />
        </div>
        
        </div> 
        

        </div>
       <div className=' mt-6 flex justify-center'>
       {/* <button onClick={handleClick} className=' font-mono text-white w-40  mb-4 bg-orange-600 p-2 rounded-md'>{isLoading? <ClipLoader
        loading={isLoading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />:"SignIn"}</button> */}
       </div> 
       <div className='text-center mb-4'>
        <p className="text-white text-sm font-playwrite">Not Registered Yet?<Link to='/register' className='text-orange-600 cursor-pointer font-playwrite'>Click Here</Link></p>
       </div>
    </div>

       
      
    </div>
  )
}

export default Login