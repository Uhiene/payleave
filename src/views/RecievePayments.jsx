import React from "react";
import hero from "../assets/Scan to pay-amico.svg"

const RecievePayments = () => {
  return (
    <div className="bg-[#141414] flex justify-between items-center w-full text-white px-5 py-12 md:p-20">
      <div className="space-y-5  sm:w-1/2">
        <h1 className="text-3xl">Receive payments</h1>
        <div className="space-y-5">
          <p className="text-base md:text-xl text-[#D6D6D6]">
            Our cutting-edge scan to pay wallet app is made to provide merchants
            with a quick, safe, and practical payment experience. Businesses can
            use the app in their everyday sales by signing up with PayLeave,
            enabling customers to buy things with simply a scan.
          </p>
          <p className="text-base md:text-xl  text-[#D6D6D6]">
            Low fees, no transaction costs, and excellent security are all
            provided by PayLeave. By giving customers a simple payment
            alternative, it hopes to aid in the expansion and prosperity of
            enterprises.
          </p>
        </div>
        <button className="button w-48 py-3 px-4 font-medium text-xl rounded-md bg-white text-[#141414] hover:bg-[#FF7F00]">
          Become a merchant
        </button>
      </div>
      <div className="w-1/2 hidden sm:block">
        <img src={hero} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default RecievePayments;
