import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock, FaUserCircle, FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const {email, password, confirmPassword} = formData;
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate();

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
    console.log(e.target.value)
  }
  const onAcceptTerms = () => {
    if(acceptTerms === false) {
      setAcceptTerms(true)
    } else {
      setAcceptTerms(false)
    }
  }

  const onShowPassword = () => {
    if(showPassword === false) {
      setShowPassword(true)
    } else {
      setShowPassword(false)
    }
  }

  const onShowConfirmPassword = () => {
    if(showConfirmPassword === false) {
      setShowConfirmPassword(true)
    } else {
      setShowConfirmPassword(false)
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      if(acceptTerms === false) {
        toast.error('Please agree to the terms of use')
      } else if(email === '') {
        toast.error('Please enter your email')
      } else if (password === '') {
        toast.error('Please enter your password')
      } else if(confirmPassword === '') {
        toast.error('Please enter your password')
      } else if(password !== confirmPassword) {
        toast.error('Passwords need to match!')
      } else {
        setLoading(true)
        await axios.post('/api/register', formData)
        .then((response) => {
          if(response.data.error){
            setLoading(false)
            toast.error(response.data.error)
          } else {
            setLoading(false)
            navigate("/");
          }
          
        })
        .catch((error) => {
          console.log(error)
        });
      }
    } catch (error) {
      toast.error('Please check your details and try again')
    }
  }

  if(loading) {
    return <h1>Signing you up...!</h1>
  }

  return (
    <div className='h-screen md:h-auto bg-gradient-to-r to-orange-500 via-slate-800 from-gray-950'>
      <div className='h-screen md:h-auto flex justify-center items-center md:justify-end'>
        <div className='hidden text-white w-3/4 md:flex justify-center items-center'>
          <h1 className='text-white text-5xl font-bold'><span className='auto-type text-green-400'>SIGN UP</span></h1>
          
        </div>
        <div className='md:h-auto bg-white flex items-center w-11/12 md:w-1/2 lg:w-1/3 xl:1/4 rounded-3xl md:rounded-r-none'>
          <form onSubmit={handleSubmit} className='py-16 md:py-4 px-7 w-full'>
            <div className='flex justify-center mb-4 '>
              <FaUserCircle className='h-16 w-16' />
            </div>
            <div className='text-center mb-16 md:mb-8 font-semibold text-3xl'>Sign Up</div>
            <div className='mb-5 flex flex-col text-sm'>
              <label htmlFor="email" className='font-semibold mb-2'>Email</label>
              <div className='flex items-center border-b-2 px-2 relative'>
                <FaUser className='absolute left-4' />
                <input 
                  className='pl-8 border-0 py-1 focus:outline-none appearance-none w-full rounded-full h-8' 
                  type="" name="email" id="email" value={email} onChange={onChange} placeholder='Type your email' />
              </div>
            </div>
            <div className='pb-4 flex flex-col text-sm'>
              <label htmlFor="password" className='font-semibold mb-2'>Password</label>
              <div className='flex items-center border-b-2 px-2 relative'>
                <FaLock className='absolute left-4' />
                <input 
                  className='text-sm border-0 pl-8 h-8 px-2 py-1 focus:outline-none appearance-none w-full rounded-full' 
                  type={showPassword === true ? "string" : "password"} 
                  name="password" id="password" value={password} onChange={onChange} placeholder='Password' />
                {showPassword === true ? 
                  <FaEyeSlash className='cursor-pointer absolute right-4' onClick={onShowPassword} /> :
                  <FaEye className='cursor-pointer absolute right-4' onClick={onShowPassword} />
                }
              </div> 
              
            </div>
            <div className='pb-4 flex flex-col text-sm'>
              <label htmlFor="password" className='font-semibold mb-2'>Confirm Password</label>
              <div className='flex items-center border-b-2 px-2 relative'>
                <FaLock className='absolute left-4' />
                <input 
                  className='text-sm border-0 pl-8 h-8 px-2 py-1 focus:outline-none appearance-none w-full rounded-full' 
                  type={showConfirmPassword === true ? "string" : "password"}
                  name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={onChange} placeholder='Password' />
                {showConfirmPassword === true ? 
                  <FaEyeSlash className='cursor-pointer absolute right-4' onClick={onShowConfirmPassword} /> :
                  <FaEye className='cursor-pointer absolute right-4' onClick={onShowConfirmPassword} />
                }
              </div>
              
            </div>
            <div className='text-xs mb-5 flex justify-end font-semibold'>
              <Link to="/login">Have an account?</Link>
            </div>
            <div className='flex mb-5'>
              <input type="checkbox" name="terms" id="terms" onChange={onAcceptTerms} checked={acceptTerms} className='mr-1' />
              <span className='text-xs flex'>I agree to <span className='underline ml-1'><a href="/terms.html"> Freelient's Terms of Use</a></span></span>
            </div>
            <button type="submit" className='bg-gradient-to-r from-orange-500 via-slate-800 to-gray-950 hover:bg-gradient-to-l w-full text-white text-bold rounded-full py-3'>Sign Up</button>
        
        
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
