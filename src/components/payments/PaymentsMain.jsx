import React from "react";
import step1 from "../../assets/step1.svg"
import step2 from "../../assets/step2.svg"
import step3 from "../../assets/step3.svg"
import step4 from "../../assets/step4.svg"
import btn1 from "../../assets/apple-store-black.svg"
import btn2 from "../../assets/play-store-black.svg"

const PaymentsMain = () => {
  return (
    <div className="w-1/2 space-y-5">
      <div className="space-y-5">
        <h1 className="text-[#111827] text-3xl">Make payments</h1>
        <p className="text-[#525252] text-xl">
          Our app is designed to make your life easier and more convenient,
          whether you're shopping online or in-store. Join the Fintech
          revolution and register with PayPurse today. Sign up now and
          experience the future of transactions.
        </p>
      </div>
      <div>
        <div className="flex space-x-4">
            <img src={step1} alt="" /> 
            <p className="text-[#525252] text-xl">Download the app on Playstore/iOS</p>
        </div>
        <div className="flex space-x-4">
            <img src={step2} alt="" /> 
            <p className="text-[#525252] text-xl">Sign up and add debit card</p>
        </div>
        <div className="flex space-x-4">
            <img src={step3} alt="" /> 
            <p className="text-[#525252] text-xl">Fund wallet zero charges</p>
        </div>
        <div className="flex space-x-4">
            <img src={step4} alt="" /> 
            <p className="text-[#525252] text-xl">Scan & make payments.</p>
        </div>
      </div>
      <div className="flex space-x-5">
        <img src={btn1} alt="" />
        <img src={btn2} alt="" />
      </div>
    </div>
  );
};

export default PaymentsMain;
