import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu}  from 'react-icons/ai';
import { IoCloseSharp } from "react-icons/io5";
import {HiMenuAlt2}  from 'react-icons/hi';
import Logo from '../images/artwork.png';


const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className = 'flex justify-between items-center mt-5 max-w-[1240] mx-auto px-4 font-semibold text-black'>
        <div className='ml-8 mt-1 mr-2' onClick={handleNav}>
          {!nav ? <IoCloseSharp size={28}/> : <HiMenuAlt2 size={28} /> }
        </div>
        <div className='w-full text-3xl font-bold text-[#966C3B]'>
          <img src={Logo} alt='/' style={{width:"8rem"}} />
        </div>
        <ul className='flex hidden'>
          <li className='p-4'>Departments</li>
          <li className='p-4'>Help</li>
        </ul>
        
        <div className={!nav ? 'fixed left-0 top-0 h-full w-[30%] border-r border-r-gray-100 bg-[#ffffff]' : 'fixed left-[-100%] top-0 h-full w-[30%] border-r border-r-gray-100 bg-[#ffffff]'}>
          <div className='flex  mb-4 justify-between items-center mx-auto px-4'>
            <div className='mt-5 ' onClick={handleNav}>
              {!nav ? <IoCloseSharp size={28}/> : <HiMenuAlt2 size={28}  /> }
            </div>
            <div className='w-full text-3xl font-bold text-[#966C3B] ml-10 mt-4'>
              <img src={Logo} alt='/' style={{width:"8rem"}} />  
            </div>
          </div>
          <ul className=' '>
          <a href="#"><li className='pl-4 pt-2 pb-2 hover:bg-[#f5f5f5]'>Departments</li></a>
          <a href="#"> <li className='pl-4 pt-2 pb-2 hover:bg-[#f5f5f5]'>Help</li></a>
          </ul>
        </div>
        
    </div>
  )
}

export default Navbar
