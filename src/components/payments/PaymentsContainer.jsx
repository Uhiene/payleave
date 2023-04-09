import React from 'react'
import PaymentsMain from './PaymentsMain'
import hero from "../../assets/payment-hero.svg"

const PaymentsContainer = () => {
  return (
    <div className='bg-white flex justify-between w-full px-5 py-10 md:pb-0 md:p-10 rounded-2xl'>
        <PaymentsMain/>
        <div className='w-1/2 hidden md:block'>
            <img src={hero} className='w-full' alt="" />
        </div>
    </div>
  )
}

export default PaymentsContainer