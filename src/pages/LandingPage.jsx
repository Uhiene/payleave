import React from 'react'
import Hero from '../views/Hero'
import About from '../views/About'
import Payments from '../views/Payments'
import RecievePayments from '../views/RecievePayments'
import Mission from '../views/Mission'
import Footer from '../views/Footer'

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Payments/>
        <RecievePayments/>
        <Mission/>
        <Footer/>
    </div>
  )
}

export default LandingPage