import React from 'react'
import Header from '../components/hero/Header'
import HeroText from '../components/hero/HeroText'
import hero from "../../src/assets/hero2.svg"

const Hero = () => {
  return (
    <div className='bg-[#424242] h-screen sm:h-[50vh] md:h-screen w-screen' id='home'>
        <Header/>
        <div className='flex justify-between'>
          <HeroText/>
          <div className='hidden sm:block w-2/5'>
            <img src={hero} className='w-full' alt="" />
          </div>
        </div>
    </div>
  )
}

export default Hero