import React from 'react'

import { AiOutlinePlayCircle } from 'react-icons/ai';

const ButtonS = (props) => {
  return (
    <div>
        <div className="button text-[#989AAD]">  
           <a href='#' className='px-4 py-2 border border-[#989AAD] rounded flex items-center gap-2' >
            <span>{props.icon}</span>
            {props.name}</a>
           </div>
 
    </div>
  )
}

export default ButtonS
