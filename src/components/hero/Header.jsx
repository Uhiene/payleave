import React from 'react'
import hero from "../../assets/logo.svg"

const Header = () => {
  return (
    <div className='flex justify-between w-full py-5 px-20'>
        <div>
            <img src={hero} alt="" />
        </div>
        <div className='space-x-5'>
            <button className='button p-2 px-4 font-medium text-xl rounded-md text-white border border-[#A3A3A3]'>Join waiting list</button>
            <button className='button p-2 px-4 font-medium text-xl rounded-md bg-white text-[#141414]'>Become a merchant</button>
        </div>
    </div>
  )
}

export default Header