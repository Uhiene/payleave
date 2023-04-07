import React from "react";
import hero from "../../assets/about-hero.svg"

const AboutHero = () => {
  return (
    <div className="bg-[#F9F7F4] flex justify-between w-full h-4/5 px-10 py-14 rounded-2xl">
      <div className="w-3/5 space-y-10">
        <h1 className="text-[#111827] text-3xl">
          Do you know you can make payment just with your camera?
        </h1>
        <div className="space-y-5">
        <p className="text-[#525252] text-xl">
          With our cutting-edge technology, you can make purchases with just a
          simple scan, eliminating the need for carrying cash or fumbling with
          credit cards. Our app is user-friendly and customizable, making it
          easy to manage your finances and keep track of your transactions.
        </p>
        <p className="text-[#525252] text-xl">
          By joining PayPurse, you can take advantage of our low fees and zero
          transaction costs, making it easier than ever to manage your finances.
          Plus, with our top-notch security measures, you can trust that your
          transactions and information are always protected.
        </p>
        </div>
      </div>
      <div className="w-2/4">
        <img src={hero} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default AboutHero;
