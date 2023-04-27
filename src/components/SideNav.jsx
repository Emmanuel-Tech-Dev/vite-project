import React, { useState } from 'react'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { TfiAngleRight } from 'react-icons/tfi'

const SideNav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }




    return (
        <div>

            <div className="sidenav fixed text-[#fefe] bottom-3 right-1 z-50 border border-[#D32444] bg-[#0B0C17] rounded-md ">


                <nav className="content flex gap-20 p-5" >
                     

 <div className={ !nav ? "hidden " : ' div flex flex-col gap-5 md:flex-row md:gap-20 '}>

                    <div className="movies">
                        <div className="content">
                            <h1 className='text-[#D32444] text-[24px] font-bold  cursor-pointer' >Movies</h1>
                            <ul className='hidden md:mt-2 md:block cursor-pointer '>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Now Showing</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Spotlight</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Coming Soon</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Art & Independent</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Summer Movie Fun</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Tuesday Night Classics</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Moonlight Cinema</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Special Events</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Sensory Friendly Screenings </li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>On-screen Captioned Films</li>
                            </ul>
                            <div className="div mt-10 cursor-pointer">
                                <h1 className='text-[#D32444] text-[24px] font-bold cursor-pointer w-[100%]'>My Harkins Awards</h1>
                            </div>
                        </div>



                    </div>
                     <div className="theater">
                        <div className="content">
                            <h1 className='text-[#D32444] text-[24px] font-bold cursor-pointer' >Theater</h1>
                            <ul className='hidden md:mt-2 md:block  cursor-pointer'>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Arizona Mills 18 w/ IMAX</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Cerritos 16</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Arvada 14</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Bricktown 16</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500  mt-3 flex items-center gap-3'>View All  <TfiAngleRight size={12} /></li>

                            </ul>
                            <div className="div mt-10">
                                <h1 className='text-[#D32444] text-[24px] font-bold cursor-pointer'>Stores</h1>
                                <ul className='hidden md:mt-2 md:block  cursor-pointer'>
                                    <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500'>Gift Cards</li>
                                    <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500'>Gift Cards Balance</li>
                                    <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500'>Gift Packages</li>
                                    <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500'>Loyalty/Popcorn Perks</li>
                                    <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Discount Tickets</li>
                                    <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Discount Concessions</li>

                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className="ge">
                        <div className="content">
                            <h1 className='text-[#D32444] text-[24px] font-bold cursor-pointer' >Group Events </h1>
                            <ul className='hidden md:mt-2 md:block  cursor-pointer '>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500'>Private Screenings</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>IMAX</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500'>Gaming</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500'>Field Trips</li>
                                <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 mt-3 flex items-center gap-3'>View All  <TfiAngleRight size={12} /></li>

                            </ul>
                            <div className="div mt-10">
                                <h1 className='text-[#D32444] text-[24px] font-bold cursor-pointer'>More</h1>

                                <ul className='hidden md:mt-2 md:block  cursor-pointer'>
                                    <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Careers</li>
                                    <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Contact Us</li>
                                    <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Theater Openings</li>
                                    <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500 '>Herkins History </li>
                                    <li className='opacity-[50%] hover:opacity-[100] transition-all duration-500  mt-3 flex items-center gap-3'>View All  <TfiAngleRight size={12} /></li>


                                </ul>
                            </div>
                        </div>



                    </div>


</div>

                    <div className={ !nav ? " flex flex-row items-center gap-10 " : 'socails flex flex-row items-center gap-10 md:flex-col mt-[90%] md:mt-[35%]'}>
                      <div className={!nav ? "hidden md:flex flex-row gap-3" : "container flex flex-row gap-3 md:flex-col " }>
                        <a href=''><img className='w-[34px]' src='../images/FB.png' /></a>
                        <a href=''><img className='w-[34px]' src='../images/IN.png' /></a>
                        <a href=''><img className='w-[34px]' src='../images/TW.png' /></a>
</div>
                        <div className="btn  cursor-pointer transition-all duration-500" onClick={handleNav}>
                            {!nav ? <AiOutlineMenu  size={20} color='#D32444' /> : <AiOutlineClose size={20} color='#D32444' />}
                        </div>
                    </div>
   </nav>



             


            </div>


        </div>
    )
}

export default SideNav
