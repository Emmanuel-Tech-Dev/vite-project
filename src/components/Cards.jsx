import React from 'react'

import { AiFillStar } from 'react-icons/ai';
import { HiOutlineTicket } from 'react-icons/hi';


const Cards = (props) => {
    return (
        <div>

            <div className="cards">
                <div className="card p-5 ">

                    <div className="content -mt-5 text-[#fefe]  ">
                        <div className="image-card relative ">
                            <img className='h-[264px] w-[185px] rounded' src={props.item.img} />

                            <div className="badge absolute px-2 py-2 bg-[#D32444] rounded top-[83%] left-[74%]">
                                <HiOutlineTicket size={20} />
                            </div>

                        </div>

                        <div className="details font-new text-[18px] mt-2 font-medium">
                            <h1>{props.item.name}</h1>
                            <div className="stats font-sub">
                                <span className='flex gap-2 text-[14px] items-center mt-4'>
                                    <AiFillStar color='#FFC400' />
                                    <h3 className='font-semibold'>{props.item.rating}<span className='font-normal opacity-25 text-[14px]'>/10</span></h3>
                                    <h3 className='font-semibold'>{props.item.duration}<span className='font-normal opacity-25 text-[14px]'>mins</span></h3>
                                    <p className='border px-2 rounded text-[12px] font-bold text-[#989AAD]'>{props.item.program}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Cards
