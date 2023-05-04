import React from 'react'

import { TfiAngleUp } from 'react-icons/tfi'


const Footer = () => {
  return (
    <div>
      <div className="footer mt-[20%] md:mt-[8%]">
        <hr className='bg-[#D32444] h-[3px] outline-none border-none' />

        <footer className='mt-5 p-5 md:mx-[5%] '>
          <div className=" md:flex md:justify-between">
            <div className="logo">
              <img src='../images/logo.png' />
            </div>
            <div className="news mt-10 md:mt-0">
              <h1 className='text-[#D32444] text-[32px] w-[200px] font-new'>Join our
                newsletter</h1>
              <form class="w-full max-w-sm mt-5">
                <div class="border-b border-[#D32444] py">

                  <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-5 leading-tight focus:outline-none" type="text" placeholder="Your Email" aria-label="Email" />

                </div>
              </form>
            </div>
            <div className="items flex gap-[20%] mt-20 md:mt-0">
              <div className="list text-[#fefe]">
                <h1>Menu</h1>
                <hr className='bg-[#D32444] h-[2px] outline-none border-none w-[100px]' />
                <ul className='text-[#D32444] mt-5'>
                  <li className='mb-2'>Theaters</li>
                  <li className='mb-2'>IMAX</li>
                  <li className='mb-2'>Playcenter</li>
                  <li className='mb-2'>Group Events</li>
                  <li className='mb-2'>My Harkins Awards</li>
                  <li className='mb-2'>Behind the Screens</li>
                  <li>Stores</li>
                </ul>
              </div>
              <div className="list text-[#fefe]">
                <h1>More</h1>
                <hr className='bg-[#D32444] h-[2px] outline-none border-none w-[100px]' />
                <ul className='opacity-[48%] text-[#fefe] mt-5'>
                  <li className='mb-2'>Contact Us</li>
                  <li>Advertise On screen</li>

                </ul>

              </div>

              <div className="toTop ">
                <a className='hidden md:block py-2 px-3 bg-[#D32444] h-[40px] rounded' href='#'><TfiAngleUp size={20} color='#fefe'  /></a>
              </div>

            </div>

          </div>
          <div className="text ">
            <ul className='opacity-[48%] text-[#fefe] mt-20 md:flex justify-center gap-10'>
              <li className='mb-2'>Safety Protocols</li>
              <li className='mb-2'>Terms of Use</li>
              <li className=''>Privacy Policy</li>


            </ul>
          </div>


          <p className='mt-10 text-center text-[12px] text-[#fefe] opacity-[50%]'>Copyright ©2022  Harkins Reels Deals, L.L.C. All Rights Reserved</p>

        </footer>

      </div>

    </div>
  )
}

export default Footer
