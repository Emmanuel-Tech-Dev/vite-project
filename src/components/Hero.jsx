import React, { useState } from 'react'

import { AiFillStar , AiOutlinePlayCircle } from 'react-icons/ai';
import {TfiAngleRight , TfiAngleLeft } from 'react-icons/tfi';



// Importing nav components
import Navbar from './Navbar'
import Button from './Button'
import ButtonS from './ButtonS'


const rosterImages = [
   {
    roster : './images/roster.png',
    bgRoster : './images/bg_video.png',
     name: 'The Batman',
        year: 2022,
        rating: 8.0,
        duration: 176,
        program: 'PG13',
   },
    {
    roster : './images/roster2.png',
    bgRoster : './images/bg_video2.png',
     name: 'The Lost City',
        year: 2022,
        rating: 6.7,
        duration: 112,
        program: 'PG13',
   },
     {
    roster : './images/roster3.png',
    bgRoster : './images/bg_video3.png',
      name:'The Northman',
        year: 2022,
        rating: 7.4,
        duration: 137,
        program: 'PG13',
   }, 
    {
    roster : './images/roster4.png',
    bgRoster : './images/bg_video4.png',
      name: 'Doctor strange in the multiverse of madness',
        year: 2022,
        rating: 7.5,
        duration: 126,
        program: 'PG13',
   },
]




const Hero = () => {

   const [activeSlide , setActiveSLide] = useState(0)

   function handleUpdate(newSlide){
      if(newSlide < 0){
         newSlide = 0
      }else if(newSlide >= rosterImages.length){
         newSlide = rosterImages.length - 1
      }
setActiveSLide(newSlide)
   }
  const activeImage = rosterImages.find(image => image.activeSlide === activeSlide);

  return (
    <div>

  <Navbar/>   

<div className='hero overflow-hidden flex flex-col justify-center md:justify-between md:bg-herobg bg-center bg-cover bg-no-repeat bg-none md:overflow-hidden '>
 
   <div style={{
            transform: `translate(-${
              activeSlide * 100
            }%)`,
          }} className="content text-[#fefe] pt-20  md:pt-[10%]">
  
  {rosterImages.map(image =>{
   return (
      <div className='inline-flex flex-col w-[100%] justify-center '  style={{ width: "100%" }}>
       <div className="images md:mx-10 md:w-[400px]"> 
     <img className='w-[100%] ' src={image.roster}/>
     </div>
   
     <div className="details font-new px-5 text-[24px] mt-5 font-medium md:mx-10 md:px-0">
        <h1 className='w-[70%]'>{image.name} ({image.year})</h1>
        <div className="stats font-sub">
         <span className='flex gap-3 text-[18px] items-center mt-4'>
             <AiFillStar color='#FFC400' /> 
            
             <h3 className='font-semibold'>{image.rating} <span className='font-normal opacity-25 text-[14px]'>/10</span></h3>
             <h3 className='font-semibold'>{image.duration}<span className='font-normal opacity-25 text-[14px]'>mins</span></h3>
             <p className='border px-2 rounded text-[12px] font-bold text-[#989AAD]'>{image.program}</p>
            
             
             </span>
        </div>
     </div>
     </div>
   )
  })}

   </div>

<div className="button-section flex gap-4 p-5 mt-[5%] items-center md:mt-5 md:mx-10  md:px-0">
    <Button name="Book now" />
    <ButtonS name="Watch Trailer" icon={<AiOutlinePlayCircle size={20}/>} />
</div>
  

<div className="controls mx-[32%] mt-6">
    <div className="control flex justify-between items-center md:w-[170px] md:m-auto">
     <button onClick={() => {handleUpdate(activeSlide -1)}}>
            <TfiAngleLeft size={20} color='#989AAD' className='cursor-pointer'  />
     </button >
       <div className="indicators  flex gap-2 ">
      {rosterImages.map((image , i) => {
         return (
            
             <span className={`indix w-[10px] h-[4px] rounded ${
                    i === activeSlide
                      ? "w-[30px] bg-[#D32444]"
                      :  "bg-[#989AAD]"
                  }`}></span>
          
              
         )
      })}
         
        </div>
        <button onClick={() => {handleUpdate( activeSlide +1)}}>
             <TfiAngleRight size={20}  color='#989AAD' className='cursor-pointer'/>
        </button>
       </div>
</div>


</div>

    </div>
  )
}

export default Hero
