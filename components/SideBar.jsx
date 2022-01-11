import React from "react";
import Link from "next/link";
import {HiOutlineArrowCircleLeft} from "react-icons/hi"
const SideBar = ({openNav,setopenNav}) => {
  return (
    <div className={`pt-[5%] min-w-full col-span-4 min-h-screen overflow-x-hidden bg-dark-purple transition-all duration-300 ${(openNav ? "-translate-x-0 col-span-4" : "-translate-x-[100%] col-span-1")}`}>
      
      <div className=" h-[20%] min-w-full flex justify-center">
      <div className="grid place-items-center h-[100px] mr-4">
      <HiOutlineArrowCircleLeft onClick={setopenNav} className="text-white ml-4 text-4xl transition-all duration-300 hover:text-5xl cursor-pointer hover:text-yellow" />
      </div>
        <Link className="" href="/">
          <div className={`w-[80%] mr-4 flex-1 sm:w-[180px] h-[100px] border-b-4 border-high-green hidden sm:grid sm:place-items-center ${(openNav ? "-translate-x-0 " : "-translate-x-[100%]")} `}>
            <img className={`object-contain w-[80px] sm:w-[100px] md:w-[150px] cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out ${(openNav ? "-translate-x-0 " : "-translate-x-[100%]")}`}  src="/PAH.svg" alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
