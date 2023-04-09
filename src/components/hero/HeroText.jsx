import React from 'react'
import btn1 from "../../assets/play_store.svg"
import btn2 from "../../assets/apple_store.svg"

const HeroText = () => {
  return (
    <div className='w-[750px] px-5 md:px-0 md:ml-20 mt-10'>
      <div className='space-y-5 mb-10 pr-18 md:pr-0'>
        <h1 className='text-white hero-text text-4xl md:text-6xl leading-[40px] md:leading-[60px] tracking-[-2%] md:tracking-[-2.5%]'>
        Welcome to the future of payments with PayPurse.
        </h1>
        <p className='text-[#D6D6D6] font-light text-lg md:text-xl leading-6 md:leading-8'>
        Our innovative scan to pay wallet app is designed to make transactions faster, more secure, and more convenient than ever before. By registering with us, you can experience a whole new level of hassle-free payments.
        </p>
      </div>
      <div className='md:flex space-y-5 md:space-y-0 md:space-x-5'>
        <img src={btn1} className='w-40' alt="" />
        <img src={btn2} className='w-40' alt="" />
      </div>
    </div>
  )
}

export default HeroText