import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#141414] px-20 py-10">
      <div className="flex justify-between items-end border-b border-[#424242] pb-5">
        <div className="space-y-2">
          <h1 className="text-4xl text-white">
            Be the first to know when we launch
          </h1>
          <p className="text-xl text-[#D6D6D6]">
            We’re still building. Join our waiting list now!
          </p>
        </div>
        <div className="space-x-2">
          <input
            type="text"
            className="text-[#A3A3A3] placeholder:text-[#A3A3A3] bg-white rounded-md h-12 p-2 px-4 w-72"
            placeholder="Enter your email"
          />
          <input
            type="submit"
            className="button p-2 h-12 px-4 font-medium text-xl rounded-md text-white border border-[#A3A3A3]"
            placeholder="submit"
          />
        </div>
      </div>
      <div className="flex justify-between items-center py-5">
        <p className="text-xl text-[#D6D6D6]">
          © 2023 Purse. All rights reserved.
        </p>
        <div className="text-[#D6D6D6] text-xl space-x-5 flex">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
