import React from "react";
import bg from "../assets/Card.svg";
import mobileBg from "../assets/Card2.svg"
import btn1 from "../assets/apple-store-transparent.svg"
import btn2 from "../assets/play-store-transparent.svg"

const Mission = () => {
  const imageUrl = window.innerWidth <= 728 ? mobileBg :  bg;
  return (
    <div className="px-5 py-12 md:p-20" id="mission">
      <div
        className="px-5 py-10 md:p-20 flex flex-col items-center text-center space-y-5 rounded-xl bg-no-repeat bg-cover bg-black  bg-opacity-75"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h1 className="text-3xl text-white">Our mission</h1>
        <p className="text-base md:text-xl text-[#D6D6D6]">
          To decentralized QR payment infrastructure for all businesses across
          Africa making <br /> financial services seamless and reliable
        </p>
        <div className='sm:flex space-y-5 sm:space-y-0 sm:space-x-5'>
          <img src={btn1} alt="" />
          <img src={btn2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
