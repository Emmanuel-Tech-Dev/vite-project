import React from 'react'

import { CiSearch } from 'react-icons/ci';
import { RxPerson } from 'react-icons/rx';



const Navbar = () => {
    return (
        <div>
            <header className= ''>
                {/* MObile Nav */}
                <nav className='p-4 flex w-full  fixed z-10 justify-between items-center  backdrop-blur-[50px] bg-black/75 '>
                    <label><img src='./public/images/logo.png' /></label>
<div className="icons text-[#fefe] flex gap-3">
      <div className="search py-4 px-3 border rounded-[8px] "><CiSearch size={20} /></div>
      <div className="profile  px-3 py-4 border rounded-[8px] "><RxPerson size={20} /></div>
  
</div>
                </nav>
            </header>
            {/* Mobile Nav Ends */}


        </div>
    )
}

export default Navbar
