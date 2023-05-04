import React from 'react'


const Button = (props) => {
  return (
    <div>
        <div className="button text-[#fefe]">  
           <a href='#' className='px-4 py-2 bg-[#D32444] rounded ' > 
           <span>{props.icon}</span>
            {props.name}</a>
           </div>
 
    </div>
  )
}

export default Button
