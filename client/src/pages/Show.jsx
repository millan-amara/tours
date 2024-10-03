import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BahamasImage from '../assets/images/bahamas.webp';
import DubaiImage from '../assets/images/dubai.jpeg';
import EiffelImage from '../assets/images/eiffel.webp';
import MaldivesImage from '../assets/images/maldives.jpeg';
import ThailandImage from '../assets/images/thailand.jpeg';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 
import Footer from '../components/Footer';

function Show() {

    const slides = [
        {
            image: BahamasImage,
            topic: 'Bahamas Package',
            text: "Let's take a trip to the Bahamas",
        },
        {
            image: DubaiImage,
            topic: 'Dubai Package',
            text: "Explore the Dubai Dunes",
        },
        {
            image: EiffelImage,
            topic: 'Eiffel Package',
            text: "Take a trip to Paris",
        },
        {
            image: MaldivesImage,
            topic: 'Maldives Package',
            text: "Swim the Maldives",
        },
        {
            image: ThailandImage,
            topic: 'Thailand Package',
            text: "Visit the Ancient Thai",
        },
    ]

  return (
    <div className=''>
    <Navbar />

    <div className='flex flex-col-reverse md:flex-row my-6 md:mx-2 md:pr-2 shadow-xl md:rounded-xl'>
        <div className='w-full md:w-2/5'>
        <Swiper modules={[Autoplay, Pagination]} pagination={true} grabCursor={true} spaceBetween={10} slidesPerView={1} loop={true} autoplay={{ delay: 3000 }}>
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                <div
                    className="slider-container md:rounded-xl"
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                </div>
                </SwiperSlide>
            ))}
        </Swiper> 
        </div>
        <div className='w-full md:w-2/3 mx-1 md:ml-12 pt-4 flex flex-col items-center'>
            <h1 className='text-5xl font-medium text-center'>Paris Weekend Getaway</h1>
            <p className='font-medium text-xl mt-6 md:mt-3'>8 Days / 7 Nights</p>
            <p className='text-fuchsia-700 text-xl mt-2 font-bold'>Starting at $699</p>
            <p className='mt-8 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In asperiores ipsum assumenda facilis repellat quia ut reprehenderit, odio, consectetur, iure veritatis temporibus neque dolore. Nulla numquam cumque velit ex id.</p>
            <p>tenetur est ab repellat nulla quos fugiat sunt cum ex necessitatibus quod libero eligendi iure saepe recusandae.</p>
            <button className='bg-lime-300 hover:bg-lime-400 px-2 py-2 w-1/2 md:w-1/4 rounded-md text-xl font-semibold border-none my-8'>Book</button>
        </div>


    </div>
    <div className='flex flex-col md:flex-row mt-16 md:mx-2 px-2 py-4 shadow-xl rounded-xl'>
        <div className='w-full md:w-1/2'>
            <p className='text-2xl text-center font-semibold bg-sky-700 text-white mb-8 py-5'>Inclusions</p>
            <ul className='px-4 list-inside list-disc'>
                <li>Return Economy class tickets</li>
                <li>Dubai Tourist Visa</li>
                <li>Tips and gratuities to the guide driver, hotel/lodge or camp staffSoft drinks, local beers and selected house wines</li>
                <li>Government statutory taxes</li>
                <li>Unlimited mileage on game viewing drives</li>
                <li>Services of a professional English-speaking guide driver</li>
                <li>Bed and breakfast accommodation in Nairobi</li>
            </ul>
        </div>
        <div className='border-2 border-black my-6 md:my-0'></div>
        <div className='w-full md:w-1/2'>
            <p className='text-2xl text-center font-semibold bg-fuchsia-700 text-white mb-8 py-5'>Exclusions</p>
            <ul className='list-inside list-disc px-4'>
                <li>Your international airfare – please do let your expert know if you’d like to receive pricing from our Air Team</li>
                <li>Travel insurance, which we offer and can be purchased after you’ve booked your tour</li>
                <li>Visas (unless noted)</li>
                <li>Tips for services and experiences</li>
                <li>Lunches, dinners and drinks (alcoholic and non-alcoholic), unless specified in the itinerary</li>
                <li>Excess baggage charges, and where applicable, baggage not included in your fare</li>
            </ul>
        </div>
    </div>

    <div className='flex flex-col mt-16 py-4 shadow-xl rounded-xl'>
        <div className='flex justify-center w-full mb-12'><h1 className='text-3xl font-bold'>Similar Packages</h1></div>
        <Link className='flex flex-col md:flex-row items-center w-full md:w-3/4 shadow-lg rounded-lg mx-auto mb-12 md:mb-8 pb-6 md:pb-0'>
            <img src={DubaiImage} alt="" className='md:w-2/5 w-full' />
            <div className='md:ml-4 px-3 md:px-0'>
                <p className='mt-6 md:mt-2 font-semibold text-lg mb-4'>7 Days 6 Nights Maldives Luxury Escape</p>
                <p className='text-sky-600 font-medium mb-6'>Indulge in an overwater villa experience with special discounts.</p>
                <p className='text-fuchsia-700 font-bold text-xl text-center'>From $2,999</p>
            </div>
        </Link>
        <Link className='flex flex-col md:flex-row items-center w-full md:w-3/4 shadow-lg rounded-lg mx-auto mb-12 md:mb-8 pb-6 md:pb-0'>
            <img src={BahamasImage} alt="" className='md:w-2/5 w-full' />
            <div className='md:ml-4 px-3 md:px-0'>
                <p className='mt-6 md:mt-2 font-semibold text-lg mb-4'>7 Days 6 Nights Maldives Luxury Escape</p>
                <p className='text-sky-600 font-medium mb-6'>Indulge in an overwater villa experience with special discounts.</p>
                <p className='text-fuchsia-700 font-bold text-xl text-center'>From $2,999</p>
            </div>
        </Link>
        <Link className='flex flex-col md:flex-row items-center w-full md:w-3/4 shadow-lg rounded-lg mx-auto mb-12 md:mb-8 pb-6 md:pb-0'>
            <img src={EiffelImage} alt="" className='md:w-2/5 w-full' />
            <div className='md:ml-4 px-3 md:px-0'>
                <p className='mt-6 md:mt-2 font-semibold text-lg mb-4'>7 Days 6 Nights Maldives Luxury Escape</p>
                <p className='text-sky-600 font-medium mb-6'>Indulge in an overwater villa experience with special discounts.</p>
                <p className='text-fuchsia-700 font-bold text-xl text-center'>From $2,999</p>
            </div>
        </Link>
        <Link className='flex flex-col md:flex-row items-center w-full md:w-3/4 shadow-lg rounded-lg mx-auto mb-12 md:mb-8 pb-6 md:pb-0'>
            <img src={ThailandImage} alt="" className='md:w-2/5 w-full' />
            <div className='md:ml-4 px-3 md:px-0'>
                <p className='mt-6 md:mt-2 font-semibold text-lg mb-4'>7 Days 6 Nights Maldives Luxury Escape</p>
                <p className='text-sky-600 font-medium mb-6'>Indulge in an overwater villa experience with special discounts.</p>
                <p className='text-fuchsia-700 font-bold text-xl text-center'>From $2,999</p>
            </div>
        </Link>
        <Link className='flex flex-col md:flex-row items-center w-full md:w-3/4 shadow-lg rounded-lg mx-auto mb-12 md:mb-8 pb-6 md:pb-0'>
            <img src={MaldivesImage} alt="" className='md:w-2/5 w-full' />
            <div className='md:ml-4 px-3 md:px-0'>
                <p className='mt-6 md:mt-2 font-semibold text-lg mb-4'>7 Days 6 Nights Maldives Luxury Escape</p>
                <p className='text-sky-600 font-medium mb-6'>Indulge in an overwater villa experience with special discounts.</p>
                <p className='text-fuchsia-700 font-bold text-xl text-center'>From $2,999</p>
            </div>
        </Link>
        
    </div>
    <Footer />

    
    </div>
  )
}

export default Show