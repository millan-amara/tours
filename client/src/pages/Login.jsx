import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaUser, FaLock, FaUserCircle, FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const {email, password} = formData;
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onShowPassword = () => {
    if(showPassword === false) {
      setShowPassword(true)
    } else {
      setShowPassword(false)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try{
      setLoading(true)
      await axios.post('/api/login', formData)
      .then((response) => {
        if(response.data.error){
          setLoading(false)
          toast.error('email or password incorrect')
        } else {
          setLoading(false)
          toast.success('Welcome...')
          navigate('/')
        }
      })
      .catch((error) => {
          console.log(error)
      })

    } catch (error) {
      setLoading(false)
      toast.error('Wrong email or password')
    }
  }

  if(loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className='h-screen md:h-auto flex flex-col justify-center items-center bg-gradient-to-r from-orange-500 via-slate-800 to-gray-950'>
      <div className='z-10 w-11/12 sm:w-1/2 lg:w-1/3'>
      <div className="">
           <Link to='/' className="text-3xl font-semibold">
            </Link>
        </div>
      <form onSubmit={onSubmit} className='bg-white py-16 md:py-12 px-7 rounded-3xl'>
        <div className='flex justify-center mb-4 '>
          <FaUserCircle className='h-16 w-16' />
        </div>
          <div className='text-center mb-16 font-semibold text-3xl'>Sign In</div>
          <div className='mb-5 flex flex-col text-sm'>
            <label htmlFor="email" className='font-semibold mb-2'>Email</label>
            <div className='flex items-center border-b-2 px-2 relative'>
              <FaUser className='absolute left-4' />
              <input 
                className='pl-8 border-0 px-2 py-1 focus:outline-none appearance-none w-full rounded-full h-8' 
                type="" name="email" id="email" value={email} onChange={onChange} placeholder='Type your email' />
            </div>
            
          </div>
          <div className='pb-4 flex flex-col text-sm'>
            <label htmlFor="password" className='font-semibold mb-2'>Password</label>
            <div className='flex items-center border-b-2 px-2 relative'>
              <FaLock className='absolute left-4' />
              <input 
                className='text-sm pl-8 border-0 px-2 py-1 focus:outline-none appearance-none w-full rounded-full h-8' 
                type={showPassword === true ? "string" : "password"}
                name="password" 
                id="password" value={password} onChange={onChange} placeholder='Password' />
              {showPassword === true ? 
                <FaEyeSlash className='cursor-pointer absolute right-4' onClick={onShowPassword} /> :
                <FaEye className='cursor-pointer absolute right-4' onClick={onShowPassword} />
              }
           
           
            </div>
            
          </div>
          <div className='text-xs mb-5 flex justify-end font-semibold'>
            <a href="/forgot">Forgot password?</a>
          </div>
          <button type="submit" className='bg-gradient-to-r from-orange-500 via-slate-800 to-gray-950 hover:bg-gradient-to-l w-full text-white text-bold rounded-full py-2'>Log In</button>

          <div className='text-xs mb-5 flex justify-center mt-5 font-semibold'>
            <Link to="/register" className='underline-offset-3 underline'>Create Account</Link>
          </div>
      </form>
      </div>
      
    </div>
  )
}

export default Login