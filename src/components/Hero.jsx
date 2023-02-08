import React from 'react'
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='text-[#474745] col-span-3 mr-16 w-full my-6 pb-20 h-auto mx-auto flex flex-col  bg-[#f1e4cf] '>
        <div></div>
        <div className='max-w-[800] mt-[40px] container col-span-3  mx-[120px] w-full '>
            <h1 className='text-4xl font-medium col-span-1 mb-[6px]'>Get your laundry for pickup </h1>
            <h1 className='text-4xl  font-medium col-span-1 mb-[20px]'> and delivery today</h1>
            <div className='flex'>
              <p>We'll be right at your door, for your</p>
              <Typed className='pl-2' strings={['laundry.', 'linen.', 'carpets.']} typeSpeed={120} backSpeed={130} loop/>
            </div>
        </div>
    </div>
  )
}

export default Hero
