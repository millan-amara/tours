import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaUser } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import EiffelImage from '../assets/images/eiffel.webp';

function Footer() {
  return (
    <footer id="footer" className="bg-zinc-900 text-white px-5 pt-14 pb-8 text-sm">
    <div className="flex flex-col md:flex-row justify-around mb-5">
        <div className="w-full md:w-1/4 md:flex md:flex-col md:justify-center md:items-center">
            <p className="brand text-3xl mb-3 text-fuchsia-700">YALAFLY</p>
            <p className="mb-5 text-base">Welcome to travel with us. We're here to give you the most amazing experiences.</p>
            <p>info@yalafy.com</p>
            <p>+254 789-056-743</p>
            <Link to="/packages" className="border-2 border-sky-600 hover:bg-sky-600 hover:text-white py-2 px-4 rounded-lg font-bold mt-6">View Packages</Link>
        </div>
        <div className="border-l-2 border-white hidden md:block">
            <p className=""></p>
        </div>
        <div className="mt-10 md:mt-0">
            <img src={EiffelImage} alt="" className='h-56 rounded-3xl w-full ' />
            <div className='-mt-48 text-center'>
                <p className='text-3xl font-black'>Discount!!</p>
                <p className='text-lg mt-4 font-semibold text-black px-2'>6 days Dubai December Deal</p>
                <button className='bg-fuchsia-700 w-1/2 px-4 py-1 text-xl rounded-md mt-6 hover:bg-fuchsia-800'>Get it</button>
            </div>
            <div className='flex mt-20 text-xl justify-center'>
                <p className='mr-3 bg-zinc-700 rounded-full flex py-2 px-2'><Link className='text-blue-400'><FaFacebookF /></Link></p>
                <p className='mr-3 bg-zinc-700 rounded-full flex py-2 px-2'><Link><FaInstagram /></Link></p>
                <p className='mr-3 bg-green-400 rounded-full flex py-2 px-2'><Link><FaWhatsapp /></Link></p>
                <p className='mr-3 bg-zinc-700 rounded-full flex py-2 px-2'><Link><FaTiktok /></Link></p>
                <p className='mr-3 bg-zinc-700 rounded-full flex py-2 px-2'><Link to='/login'><FaUser /></Link></p>
            </div>
        </div>
    </div>
    <div className="flex justify-center">
        <p>&copy; Yalafly 2024. All rights reserved</p>
    </div>

  </footer>
  )
}

export default Footer