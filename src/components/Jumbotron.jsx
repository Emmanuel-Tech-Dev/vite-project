import React from 'react'

import {AiFillApple} from 'react-icons/ai'
import {FaGooglePlay} from 'react-icons/fa'


const Jumbotron = () => {
  return (
    <div className='bg-secbg bg-no-repeat bg-center'>
      

      <div className="card backdrop-blur-xl rounded bg-white/5 w-[95%] m-auto p-5 mt-[10%] " >
<div className=" flex flex-col items-center md:flex-row-reverse md:justify-between md:mx-[10%]">
        <div className="image mt-10 md:mr-10">
            <img src='../images/mockup.png' className='md:w-[300px]' />
        </div>
        <div className="context text-[#fefe] font-sub mt-5 md:w-[40%]">
            <h1 className='text-[24px] font-medium w-[200px] py-5 font-new'>Book your movie 
from anywhere</h1>
            <p className='pb-5'>Now, enjoy that experience on the go with the Harkins Theatres App! It’s the best way to view showtimes, buy tickets, watch trailers and find out about the latest movie events happening at Harkins Theatres.</p>
            <ul className='list-disc p-3'>
                <li className='pb-4'>Look up movies and showtimes and share them with friends and family.</li>
                <li className='pb-4'>Be the first to find out about the latest Harkins events and promotions</li>
                <li className='pb-4'>See theatre amenities and view theatre location maps</li>
                <li className=''>Use easy-to-navigate icon indicators for movie features and amenities like 3D, IMAX, Audio Description (AD), Closed Caption (CC) and more</li>
            </ul>
        </div>
</div>
 <div className="buttons flex items-start gap-3 mt-5 md:mx-[10%]">
    <div>
    <a href='#' className='flex items-center gap-1 border rounded bg-black text-[#fefe] py-1 px-2'>
<AiFillApple size={30}/>
        <div>
        <p className='text-[12px]'>Download on the</p>
        <span className='font-semibold'>App Store</span>
        </div>
    </a>
</div> 
 <div>
    <a href='#' className='flex items-center gap-1 border rounded bg-black text-[#fefe] py-1 px-2'>
<FaGooglePlay size={30}/>
        <div>
        <p className='text-[12px]'>Get it on</p>
        <span className='font-semibold'>Google Play</span>
        </div>
    </a>
</div>

 </div>

 <div class="button mt-10 font-sub font-medium text-[#fefe] md:hidden">
  <a class="block bg-[#D32444] py-2 px-4 rounded w-full text-center" href="#">Download Now</a>
</div>


      </div>




    </div>
  )
}

export default Jumbotron
