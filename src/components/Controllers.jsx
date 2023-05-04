import { useState } from 'react'

import {TfiAngleRight , TfiAngleLeft } from 'react-icons/tfi'

const Controllers = (props) => {

// Trigger the scroll when a prev and next button is clicked on larger screens

    const [scrollPosition , setScrollPosition] = useState(0);

    const handleScroll = (scrollOffset) => {
        const container = document.getElementById("card-container");
        container.scrollLeft += scrollOffset;
        setScrollPosition(container.scrollLeft);
      }; 
      
    
  






  return (
    <div>
        <div className="card-title text-[#fefe] flex justify-between w-[100%] p-5 mt-[13%] md:flex md:gap-10">
          <div className="text flex justify-between w-full md:justify-start md:gap-5">
            <h1 className='font-new font-semibold'>{props.title}</h1>
            <a href='#'><h4 className='font-sub text-[#D32444] font-bold'>{props.link}</h4></a>
            </div> 
            <div className="controls hidden  md:flex  md:gap-3  ">
              <button className='border px-3 py-1 rounded-xl' onClick={() => handleScroll(-100)}>
                <TfiAngleLeft/>
              </button>
              <button className='border px-3 py-1 rounded-xl' onClick={() => handleScroll(100)}>
                <TfiAngleRight/>
              </button>
            </div>
          </div>
    </div>
  )
}

export default Controllers
