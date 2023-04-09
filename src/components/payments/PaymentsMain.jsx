import React from "react";
import step1 from "../../assets/step1.svg"
import step2 from "../../assets/step2.svg"
import step3 from "../../assets/step3.svg"
import step4 from "../../assets/step4.svg"
import btn1 from "../../assets/apple-store-black.svg"
import btn2 from "../../assets/play-store-black.svg"

const PaymentsMain = () => {
  return (
    <div className="w-full md:w-1/2 space-y-5">
      <div className="space-y-5">
        <h1 className="text-[#111827] text-2xl md:text-3xl">Make payments</h1>
        <p className="text-[#525252] text-base md:text-xl">
          Our app is designed to make your life easier and more convenient,
          whether you're shopping online or in-store. Join the Fintech
          revolution and register with PayPurse today. Sign up now and
          experience the future of transactions.
        </p>
        <p className="text-[#525252] block md:hidden text-base md:text-xl">
        By joining PayPurse, you can take advantage of our low fees and zero transaction costs, making it easier than ever to manage your finances. Plus, with our top-notch security measures, you can trust that your transactions and information are always protected.
        </p>
      </div>
      <div>
        <div className="flex space-x-3 md:space-x-4">
            <img src={step1} alt="" /> 
            <p className="text-[#525252] text-base md:text-xl">Download the app on Playstore/iOS</p>
        </div>
        <div className="flex space-x-3 md:space-x-4">
            <img src={step2} alt="" /> 
            <p className="text-[#525252] text-base md:text-xl">Sign up and add debit card</p>
        </div>
        <div className="flex space-x-3 md:space-x-4">
            <img src={step3} alt="" /> 
            <p className="text-[#525252] text-base md:text-xl">Fund wallet zero charges</p>
        </div>
        <div className="flex space-x-3 md:space-x-4">
            <img src={step4} alt="" /> 
            <p className="text-[#525252] text-base md:text-xl">Scan & make payments.</p>
        </div>
      </div>
      <div className="md:flex space-y-5 md:space-y-0 md:space-x-5">
        <img src={btn1} className='w-40' alt="" />
        <img src={btn2} className='w-40' alt="" />
      </div>
    </div>
  );
};

export default PaymentsMain;
