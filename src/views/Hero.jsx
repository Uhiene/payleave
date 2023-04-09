import React from 'react'
import Header from '../components/hero/Header'
import HeroText from '../components/hero/HeroText'
import hero from "../../src/assets/hero.svg"

const Hero = () => {
  return (
    <div className='bg-[#141414] h-screen w-screen'>
        <Header/>
        <div className='flex justify-between'>
          <HeroText/>
          <div className='hidden md:block w-2/5'>
            <img src={hero} className='w-full' alt="" />
          </div>
        </div>
    </div>
  )
}

export default Hero