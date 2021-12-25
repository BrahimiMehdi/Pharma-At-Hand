import React from "react";
import Link from "next/link";
import {Link as LinkS} from 'react-scroll'
const Header = () => {
  return (
    <div  className="flex justify-between w-screen px-6 h-[80px] items-center fixed">
        <div>
            <LinkS className="text-light-200 text-3xl font-bold cursor-pointer" to="/">Pharma At Hand</LinkS>
        </div>
        <div className="flex items-center justify-around h-[70%] transition-all duration-300 hover:bg-light-200 w-[50%] bg-dark-100 rounded-br-3xl rounded-tl-3xl">
            <span className="cursor-pointer text-white transition-all duration-300 hover:text-cyan-200 hover:text-xl">
                <LinkS to="/about">About</LinkS>
            </span>
            <span className="cursor-pointer text-white transition-all duration-300 hover:text-cyan-200 hover:text-xl">
                <LinkS to="/drives">Drives</LinkS>
            </span>
            <span className="cursor-pointer text-white transition-all duration-300 hover:text-cyan-200 hover:text-xl">
                <LinkS to="/videos">Videos</LinkS>
            </span>
        </div>
    </div>
  );
};

export default Header;
