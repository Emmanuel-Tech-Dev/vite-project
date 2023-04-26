import React from 'react'

import { AiFillStar } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';


const LiveCards = (props) => {
  return (
    <div>
      
      <div>

<div className="cards ">
    <div className="card p-5 ">

        <div className="content  -mt-5 text-[#fefe]   w-[300px] ">
            <div className="image-card relative">
                <img className='h-[174px] w-[100%] rounded' src={props.item.img} />

                <div className="badge absolute px-3 py-3 bg-[#0B0C17] rounded-[50px] top-[60%] left-[5%]">
                    <BsFillPlayFill size={20} color='#D32444' />
                </div>

            </div>

            <div className="details font-new text-[18px] mt-2 font-medium">
                <h1>{props.item.name}</h1>
                <div className="stats font-sub">
                    <span className='flex gap-2 text-[14px] items-center mt-4'>
                        <h3 className='font-semibold'>{props.item.date}<span className='font-normal opacity-25 text-[14px]'>opening</span></h3>
                        <h3 className='font-semibold'>94<span className='font-normal opacity-25 text-[14px]'>mins</span></h3>
                        <p className='border px-2 rounded text-[12px] font-bold text-[#989AAD]'>{props.item.program}</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>



</div>



    </div>
  )
}

export default LiveCards
