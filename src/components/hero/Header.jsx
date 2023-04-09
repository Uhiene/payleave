import React from 'react'
import hero from "../../assets/logo.svg"
import bars from "../../assets/bars3Icon.svg"

const Header = () => {
  return (
    <div className='flex justify-between items-center w-full py-5 px-5 md:px-20'>
        <div>
            <img src={hero} alt="" className='w-[133px] md:w-fit' />
        </div>
        <div className='flex md:hidden'>
          <img src={bars} className='w-xl' alt="" />
        </div>
        <div className='space-x-5 hidden md:flex'>
            <button className='button p-2 px-4 font-medium text-xl rounded-md text-white border border-[#A3A3A3]'>Join waiting list</button>
            <button className='button p-2 px-4 font-medium text-xl rounded-md bg-white text-[#141414]'>Become a merchant</button>
        </div>
    </div>
  )
}

export default Header