import React, { useState } from "react";
import hero from "../../assets/logo2.svg";
import bars from "../../assets/bars3Icon.svg";
import {FaTimes} from "react-icons/fa"

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full py-5 px-5 md:px-20">
      <di className="flex space-x-3">
        <img src={hero} alt="" className="w-fit" />
        <h1 className="text-white text-3xl font-semibold">PayLeave</h1>
      </di>
      <div className="flex md:hidden">
        <DropdownSidebar />
      </div>
      <div className="space-x-5 hidden md:flex">
        <button className="button p-2 px-4 font-medium text-xl rounded-md text-white bg-[#FF7F00]">
          Join waiting list
        </button>
        <button className="button p-2 px-4 font-medium text-xl rounded-md bg-white text-[#141414]">
          Become a merchant
        </button>
      </div>
    </div>
  );
};

function DropdownSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div >
      <div onClick={toggleDropdown} className="relative">
        {!isOpen ? <img src={bars} className="w-6" alt="" /> : <FaTimes className="text-2xl text-white hover:text-red-500"/>}
      </div>
      {isOpen && (
        <div className="absolute right-0 w-screen rounded-md bg-[#141414] text-md text-[#bbbaba]">
          <a
            href="#home"
            className="block px-4 py-4 border-b border-[#817f7f] cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-4 border-b border-[#817f7f] cursor-pointer"
          >
            About
          </a>
          <a href="#mission" className="block px-4 py-4 cursor-pointer">
            Mission
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
