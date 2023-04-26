import React from 'react'

import { AiFillStar , AiOutlinePlayCircle } from 'react-icons/ai';
import {TfiAngleRight , TfiAngleLeft } from 'react-icons/tfi';



// Importing nav components
import Navbar from './Navbar'
import Button from './Button'
import ButtonS from './ButtonS'

const Hero = () => {
  return (
    <div>
  <Navbar/>   

<div className="hero w-full h-[624px] md:bg-herobg bg-center bg-cover bg-no-repeat bg-none ">
 
   <div className="content text-[#fefe] pt-20 md:p-5 md:pt-[8%]">
    <div className="images md:mx-10 md:w-[400px]"> 
     <img className='w-[100%] ' src='./images/roster.png'/>
     </div>
   
     <div className="details font-new px-5 text-[24px] mt-5 font-medium md:mx-10 md:px-0">
        <h1>The Batman(2022)</h1>
        <div className="stats font-sub">
         <span className='flex gap-3 text-[18px] items-center mt-4'>
             <AiFillStar color='#FFC400' /> 
            
             <h3 className='font-semibold'>8.5 <span className='font-normal opacity-25 text-[14px]'>/10</span></h3>
             <h3 className='font-semibold'>176<span className='font-normal opacity-25 text-[14px]'>mins</span></h3>
             <p className='border px-2 rounded text-[12px] font-bold text-[#989AAD]'>PG13</p>
            
             
             </span>
        </div>
     </div>
   </div>

<div className="button-section flex gap-4 p-5 mt-[5%] items-center md:mt-5 md:mx-10">
    <Button name="Book now" />
    <ButtonS name="Watch Trailer" icon={<AiOutlinePlayCircle size={20}/>} />
</div>
  

<div className="controls mx-[32%] mt-6">
    <div className="control flex justify-between items-center md:w-[170px] md:m-auto">
        <TfiAngleLeft size={20} color='#989AAD' className='cursor-pointer'  />
        <div className="indicators  flex gap-2 ">
        <span className='w-[30px] h-[4px] bg-[#989AAD] rounded'></span>
        <span className='w-[10px] h-[4px] bg-[#989AAD] rounded'></span>
        <span className='w-[10px] h-[4px] bg-[#989AAD] rounded'></span>
        <span className='w-[10px] h-[4px] bg-[#989AAD] rounded'></span>
        </div>
        <TfiAngleRight size={20}  color='#989AAD' className='cursor-pointer'/>
    </div>
</div>


</div>

    </div>
  )
}

export default Hero
