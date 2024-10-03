import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Navbar() {
  return (
    <>
        <div id="top-nav" className='bg-zinc-900 text-white text-sm pt-6 pb-6 px-2 flex justify-center font-semibold items-center' style={{ height: '30px' }}>
            <p className='mr-6 flex items-center'><span className='mr-1'><FaPhone /></span> +254 700-587-767</p>
            <p className='mr-6 flex items-center'><span className='mr-1'><MdEmail /></span>info@toursandtravel.com</p>
            <p className='mr-3 bg-zinc-700 rounded-full flex py-2 px-2'><Link className='text-lg'><FaFacebookF /></Link></p>
            <p className='mr-3 bg-zinc-700 rounded-full flex py-2 px-2'><Link className='text-lg'><FaInstagram /></Link></p>
            <p className='mr-3 bg-green-500 rounded-full flex py-2 px-2'><Link className='text-lg'><FaWhatsapp /></Link></p>
            <p className='mr-3 bg-zinc-700 rounded-full flex py-2 px-2'><Link className='text-lg'><FaTiktok /></Link></p>
            
        </div>
        <div id="navbar" className='flex justify-between px-8 items-center bg-zinc-900' style={{ height: '80px', position: 'sticky', top: 0, zIndex: 1000 }}>
            <Link to='/' className='flex flex-col items-center'>
                <p className='text-4xl font-semibold text-fuchsia-700'>YALAFLY</p>
                <p className='text-xl font-normal text-sky-600'>Adventures</p>
            </Link>
   
            <div className='font-medium text-base text-white'>
                <Link to="/" className='mr-5 hover:underline hover:underline-offset-2 hover:text-sky-600'>Home</Link>
                <Link to="/" className='mr-5 hover:underline hover:underline-offset-2 hover:text-sky-600'>Landmarks</Link>
                <Link to="/packages" className='mr-5 hover:underline hover:underline-offset-2 hover:text-sky-600'>Domestic Adventures</Link>
                <Link to="/" className='mr-5 hover:underline hover:underline-offset-2 hover:text-sky-600'>Tailored Themes</Link>
                <Link to="/" className='mr-5 hover:underline hover:underline-offset-2 hover:text-sky-600'>Wild Encounters</Link>
                <Link to="/" className='mr-5 hover:underline hover:underline-offset-2 hover:text-sky-600'>Corporate</Link>
                
            </div>
        </div>
    
    </>
  )
}

export default Navbar