import React from "react";
import hero from "../assets/Scan-to-pay.svg"

const RecievePayments = () => {
  return (
    <div className="bg-[#141414] flex justify-between w-full text-white p-20">
      <div className="space-y-5  w-1/2">
        <h1 className="text-3xl">Receive payments</h1>
        <div className="space-y-5">
          <p className="text-xl text-[#D6D6D6]">
            Our cutting-edge scan to pay wallet app is made to provide merchants
            with a quick, safe, and practical payment experience. Businesses can
            use the app in their everyday sales by signing up with PayPurse,
            enabling customers to buy things with simply a scan.
          </p>
          <p className="text-xl text-[#D6D6D6]">
            Low fees, no transaction costs, and excellent security are all
            provided by PayPurse. By giving customers a simple payment
            alternative, it hopes to aid in the expansion and prosperity of
            enterprises.
          </p>
        </div>
        <button className="button p-2 px-4 font-medium text-xl rounded-md bg-white text-[#141414]">
          Become a merchant
        </button>
      </div>
      <div className="w-1/2">
        <img src={hero} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default RecievePayments;