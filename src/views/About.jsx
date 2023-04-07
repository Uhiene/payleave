import React from 'react'
import AboutHeader from '../components/about/AboutHeader'
import AboutHero from '../components/about/AboutHero'

const About = () => {
  return (
    <div className='p-20 space-y-10'>
        <AboutHeader/>
        <AboutHero/>
    </div>
  )
}

export default About