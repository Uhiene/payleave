import React from 'react'
import btn1 from "../../assets/play_store.svg"
import btn2 from "../../assets/apple_store.svg"

const HeroText = () => {
  return (
    <div className='w-[750px] ml-20 mt-10'>
      <div className='space-y-5 mb-10'>
        <h1 className='text-white hero-text text-6xl leading-[60px]'>
        Welcome to the future of payments with PayPurse.
        </h1>
        <p className='text-[#D6D6D6] font-light text-xl leading-8'>
        Our innovative scan to pay wallet app is designed to make transactions faster, more secure, and more convenient than ever before. By registering with us, you can experience a whole new level of hassle-free payments.
        </p>
      </div>
      <div className='flex space-x-5'>
        <img src={btn1} alt="" />
        <img src={btn2} alt="" />
      </div>
    </div>
  )
}

export default HeroText