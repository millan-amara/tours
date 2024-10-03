import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
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

function Home() {

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
    <div id='hero'>
        <Navbar />

        <div className='bg-zinc-900 flex justify-center py-5' style={{ height: '80px' }}>
            <input type="search" name="" id="" className='px-2 py-2 outline-none font-semibold text-lg rounded-l-lg w-1/3 lg:w-1/4' placeholder='Search' />
            <button className='text-white bg-stone-700 px-2 rounded-r-lg w-1/6 hover:bg-stone-800'>Search</button>
        </div>

        <Swiper modules={[Autoplay]} spaceBetween={10} slidesPerView={1} loop={true} autoplay={{ delay: 3000 }}>
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                <div
                    className="slider-container"
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="slider-content">
                    <h1>{slide.topic}</h1>
                    <p className='text-xl mb-4'>{slide.text}</p>
                    <Link to='/show' className='bg-fuchsia-700 rounded-md px-4 py-2 text-lg'>Book Now</Link>
                    </div>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>

        <div id='featured' className='mx-2 mt-20 flex justify-center'>
            <div className='flex justify-between w-3/4'>
                <div className='w-1/3 bg-slate-200 rounded-3xl mx-1'>
                    <img src={DubaiImage} alt="" className='rounded-t-3xl h-48 w-full' />
                    <div className='bg-slate-800 -mt-48 opacity-70 hover:opacity-30 h-48 py-4 rounded-t-3xl flex flex-col items-center justify-center'>
                        <p className='font-bold text-3xl text-center text-white'><span className='text-lg'>From</span> $400</p>
                        <p className='text-xl font-bold underline text-center text-rose-600'>Dubai</p>
                    </div>
                </div>
                <div className='w-1/3 bg-slate-200 rounded-3xl mx-1'>
                    <img src={MaldivesImage} alt="" className='rounded-t-3xl h-48 w-full' />
                    <div className='bg-slate-800 -mt-48 opacity-70 hover:opacity-30 h-48 py-4 rounded-t-3xl flex flex-col items-center justify-center'>
                        <p className='font-bold text-3xl text-center text-white'><span className='text-lg'>From</span> $400</p>
                        <p className='text-xl font-bold underline text-center text-rose-600'>Maldives</p>
                    </div>
                </div>
                <div className='w-1/3 bg-slate-200 rounded-3xl mx-1'>
                    <img src={EiffelImage} alt="" className='rounded-t-3xl h-48 w-full' />
                    <div className='bg-slate-800 -mt-48 opacity-70 hover:opacity-30 h-48 py-4 rounded-t-3xl flex flex-col items-center justify-center'>
                        <p className='font-bold text-3xl text-center text-white'><span className='text-lg'>From</span> $400</p>
                        <p className='text-xl font-bold underline text-center text-rose-600'>Paris</p>
                    </div>

                </div>
            </div>
      </div>

      <div id='themed' className='mt-20 mb-20 px-4 flex items-center flex-col'>
        <h1 className='text-6xl font-semibold mb-12'>Trending <span className='text-sky-600'>Vacation</span> Ideas</h1>
        <p className='description text-2xl text-center'>Explore unique and specially curated travel packages around the globe. Whether it’s for adventure, relaxation, or cultural immersion, find the perfect destination.</p>
        <div className='mt-16 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-1 md:gap-x-4 gap-y-8 md:gap-y-8 justify-items-center'>
            <div className='flex flex-col items-center shadow-lg pb-4 rounded-lg'>
                <img src={DubaiImage} alt="" className='h-48 w-full' />
                <p className='mt-6 font-semibold text-lg text-center mb-4'>14 Days 13 Nights Japan Cherry Blossom Tour 2024</p>
                <p className='text-sky-600 font-bold mb-6'>14 Days / 13 Nights</p>
                <button className='bg-fuchsia-800 text-white rounded-lg py-2 px-4 hover:opacity-80'>View Info</button>
            </div>
            <div className='flex flex-col items-center shadow-lg pb-4 rounded-lg'>
                <img src={ThailandImage} alt="" className='h-48 w-full' />
                <p className='mt-6 font-semibold text-lg text-center mb-4'>8 Days 7 Nights Greece Summer Escape 2024</p>
                <p className='text-sky-600 font-bold mb-6'>8 Days / 7 Nights</p>
                <button className='bg-fuchsia-800 text-white rounded-lg py-2 px-4 hover:opacity-80'>View Info</button>
            </div>
            <div className='flex flex-col items-center shadow-lg pb-4 rounded-lg'>
                <img src={EiffelImage} alt="" className='h-48 w-full' />
                <p className='mt-6 font-semibold text-lg text-center mb-4'>12 Days 11 Nights Australia Outback Adventure 2024</p>
                <p className='text-sky-600 font-bold mb-6'>12 Days / 11 Nights</p>
                <button className='bg-fuchsia-800 text-white rounded-lg py-2 px-4 hover:opacity-80'>View Info</button>
            </div>
            <div className='flex flex-col items-center shadow-lg pb-4 rounded-lg'>
                <img src={BahamasImage} alt="" className='h-48 w-full' />
                <p className='mt-6 font-semibold text-lg text-center mb-4'>6 Days 5 Nights Paris & Disneyland Christmas Magic 2024</p>
                <p className='text-sky-600 font-bold mb-6'>6 Days / 5 Nights</p>
                <button className='bg-fuchsia-800 text-white rounded-lg py-2 px-4 hover:opacity-80'>View Info</button>
            </div>
            <div className='flex flex-col items-center shadow-lg pb-4 rounded-lg'>
                <img src={MaldivesImage} alt="" className='h-48 w-full' />
                <p className='mt-6 font-semibold text-lg text-center mb-4'>9 Days 8 Nights New Zealand Nature & Adventure Package</p>
                <p className='text-sky-600 font-bold mb-6'>9 Days / 8 Nights</p>
                <button className='bg-fuchsia-800 text-white rounded-lg py-2 px-4 hover:opacity-80'>View Info</button>
            </div>
            <div className='flex flex-col items-center shadow-lg pb-4 rounded-lg'>
                <img src={EiffelImage} alt="" className='h-48 w-full' />
                <p className='mt-6 font-semibold text-lg text-center mb-4'>5 Days 4 Nights Singapore City & Universal Studios 2024</p>
                <p className='text-sky-600 font-bold mb-6'>5 Days / 4 Nights</p>
                <button className='bg-fuchsia-800 text-white rounded-lg py-2 px-4 hover:opacity-80'>View Info</button>
            </div>
        </div>
      </div>

      <div id='offers' className='mt-20 mb-20 px-4 flex items-center flex-col'>
        <h1 className='text-6xl font-semibold mb-12'>Unbeatable<span className='text-sky-600'> Travel Deals</span></h1>
        <p className='description text-2xl text-center'>Discover incredible holiday packages with amazing discounts and offers. With our trusted team, you can plan your trip with confidence.</p>

        <h1 className='mt-12 font-semibold text-lg mb-4'>Exclusive Getaways for Less</h1>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-1 md:gap-x-4 gap-y-8 md:gap-y-8 justify-items-center'>
            <div className='flex items-center shadow-lg rounded-lg'>
                <img src={DubaiImage} alt="" className='h-full w-2/5' />
                <div className='md:ml-4'>
                    <p className='mt-6 md:mt-2 font-semibold text-lg mb-4'>7 Days 6 Nights Maldives Luxury Escape</p>
                    <p className='text-sky-600 font-medium mb-6'>Indulge in an overwater villa experience with special discounts.</p>
                    <p className='text-fuchsia-700 font-bold text-xl'>From $2,999</p>
                </div>
            </div>
            <div className='flex items-center shadow-lg rounded-lg'>
                <img src={MaldivesImage} alt="" className='h-full w-2/5' />
                <div className='md:ml-4'>
                    <p className='mt-6 md:mt-2 font-semibold text-lg mb-4'>4 Days 3 Nights Bali Spa & Wellness Retreat</p>
                    <p className='text-sky-600 font-medium mb-6'>Unwind with a wellness package at a fraction of the cost.</p>
                    <p className='text-fuchsia-700 font-bold text-xl'>Save 20%</p>
                </div>
            </div>
        </div>
        <h1 className='mt-16 font-semibold text-lg mb-4'>Limited-Time Festive Discounts</h1>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-1 md:gap-x-4 gap-y-8 md:gap-y-8 justify-items-center'>
            <div className='flex items-center shadow-lg rounded-lg'>
                <img src={BahamasImage} alt="" className='h-full w-2/5' />
                <div className='md:ml-4'>
                    <p className='mt-6 md:mt-2 font-semibold text-lg mb-4'>6 Days 5 Nights Christmas in New York</p>
                    <p className='text-sky-600 font-medium mb-6'>Celebrate the festive season with sparkling lights and magical moments.</p>
                    <p className='text-fuchsia-700 font-bold text-xl'>Special Offer: $1,799</p>
                </div>
            </div>
            <div className='flex items-center shadow-lg rounded-lg'>
                <img src={EiffelImage} alt="" className='h-full w-2/5' />
                <div className='md:ml-4'>
                    <p className='mt-6 md:mt-2 font-semibold text-lg mb-4'>5 Days 4 Nights Dubai New Year’s Eve Spectacular</p>
                    <p className='text-sky-600 font-medium mb-6'>Ring in the New Year with an unforgettable celebration and savings.</p>
                    <p className='text-fuchsia-700 font-bold text-xl'>Discounted Price: $1,999</p>
                </div>
            </div>
        </div>
        <h1 className='mt-16 font-semibold text-lg mb-4'>Family Fun for Less</h1>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-1 md:gap-x-4 gap-y-8 md:gap-y-8 justify-items-center'>
            <div className='flex items-center shadow-lg rounded-lg'>
                <img src={ThailandImage} alt="" className='h-full w-2/5' />
                <div className='md:ml-4'>
                    <p className='mt-6 md:mt-2 font-semibold text-lg mb-4'>5 Days 4 Nights Orlando Theme Park Adventure</p>
                    <p className='text-sky-600 font-medium mb-6'>Enjoy family-friendly fun with special rates for kids.</p>
                    <p className='text-fuchsia-700 font-bold text-xl'>Discounted Family Package</p>
                </div>
            </div>
            <div className='flex items-center shadow-lg rounded-lg'>
                <img src={BahamasImage} alt="" className='h-full w-2/5' />
                <div className='md:ml-4'>
                    <p className='mt-6 md:mt-2 font-semibold text-lg mb-4'>6 Days 5 Nights Singapore Family Discovery</p>
                    <p className='text-sky-600 font-medium mb-6'>Explore theme parks, zoos, and cultural spots with savings on family bookings.</p>
                    <p className='text-fuchsia-700 font-bold text-xl'>Special Family Deal</p>
                </div>
            </div>
        </div>
        <h1 className='mt-16 font-semibold text-lg mb-4'>Last-Minute Getaway Specials</h1>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-1 md:gap-x-4 gap-y-8 md:gap-y-8 justify-items-center'>
            <div className='flex items-center shadow-lg rounded-lg'>
                <img src={ThailandImage} alt="" className='h-full w-2/5' />
                <div className='md:ml-4'>
                    <p className='mt-6 md:mt-2 font-semibold text-lg mb-4'>3 Days 2 Nights Paris Weekend Getaway</p>
                    <p className='text-sky-600 font-medium mb-6'>A romantic last-minute trip to Paris at a special rate.</p>
                    <p className='text-fuchsia-700 font-bold text-xl'>Starting at $699</p>
                </div>
            </div>
            <div className='flex items-center shadow-lg rounded-lg'>
                <img src={BahamasImage} alt="" className='h-full w-2/5' />
                <div className='md:ml-4'>
                    <p className='mt-6 md:mt-2 font-semibold text-lg mb-4'>4 Days 3 Nights Iceland Northern Lights Tour</p>
                    <p className='text-sky-600 font-medium mb-6'>Catch the magical Northern Lights with special last-minute pricing.</p>
                    <p className='text-fuchsia-700 font-bold text-xl'>Book Now: $1,299</p>
                </div>
            </div>
        </div>
      </div>

      <section id="contact">
          <div className="contact">
            <h2>Get in Touch</h2>
            <p>Want us to help you plan your <span className='text-sky-600'> next trip?</span></p>
            <form id="contact-form" className="contact-form px-3">
              <div className="mb-7">
                  <label htmlFor="email" className="mb-3">Email/Phone:</label>
                  <input type="email" id="email" name="email" required className="focus:outline-none focus:ring-2 appearance-none text-sm" />
              </div>

              <div className="mb-5">
                  <label htmlFor="message" className="mb-3">Message:</label>
                  <textarea id="message" name="message" rows="4" required className="focus:outline-none focus:ring-2 appearance-none text-sm"></textarea>
              </div>
              <div className='flex items-center justify-center'>
                  <button id="contact-button" type="submit" className="bg-gradient-to-r from-black from-20% via-fuchsia-800 via-70% to-black to-90% hover:bg-gradient-to-l text-white w-1/2 py-2 rounded-md">Send Message</button>
              </div>
              
            </form>
          </div>
        </section>

        <Footer />
    </div>
  )
}

export default Home