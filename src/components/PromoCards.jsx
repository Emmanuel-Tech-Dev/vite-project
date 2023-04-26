import React from 'react'

import { AiFillStar } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';


const PromoCards = (props) => {
  return (
    <div>
      
      <div>

<div className="cards ">
    <div className="card p-5 ">

        <div className="content  -mt-5 text-[#fefe]  bg-[#000] w-[300px] ">
            <div className="image-card relative">
                <img className='h-[] w-[100%] rounded' src={props.item.img} />

                <div className="badge absolute px-3 py-3 bg-[#0B0C17] rounded-[50px] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                    <BsFillPlayFill size={20} color='#D32444' />
                </div>

            </div>

            <div className="details font-new text-[18px] mt-2 px-2 font-medium">
                <h1>{props.item.name}</h1>
               
            </div>
        </div>
    </div>
</div>



</div>



    </div>
  )
}

export default PromoCards
