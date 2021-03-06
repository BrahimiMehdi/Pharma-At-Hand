import React from "react";
import Link from "next/link";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { ImHome3 } from "react-icons/im";
const SideBar = ({ openNav, setopenNav }) => {
  return (
    <aside
      className={`pt-[5%] min-w-full col-span-4 z-30  min-h-screen overflow-x-hidden bg-dark-purple transition-all duration-300 ${
        openNav ? "-translate-x-0 col-span-4 block" : "-translate-x-[100%] hidden"
      }`}
    >
      <div className=" h-[20%] min-w-full flex justify-center">
        <div className="flex items-center justify-around h-[100px] mr-4">
          <Link href="/">
            <div>
            <ImHome3 className="text-white ml-4 inline sm:hidden text-2xl sm:text-3xl md:text-4xl transition-all duration-300 cursor-pointer hover:text-yellow" />
            </div>
          </Link>
          <HiOutlineArrowCircleLeft
            onClick={setopenNav}
            className="text-white ml-4 text-2xl sm:text-3xl md:text-4xl transition-all duration-300 sm:hover:text-4xl md:hover:text-5xl cursor-pointer hover:text-yellow"
          />
        </div>
        <Link className="" href="/">
          <div
            className={`w-[80%] mr-4 flex-1 sm:w-[180px] h-[100px] rounded-xl border-b-4 border-high-green hidden sm:grid sm:place-items-center ${
              openNav ? "-translate-x-0 " : "-translate-x-[100%]"
            } `}
          >
            <img
              className={`object-contain w-[80px] sm:w-[100px] md:w-[150px] cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out ${
                openNav ? "-translate-x-0 " : "-translate-x-[100%]"
              }`}
              src="/PAH.svg"
              alt=""
            />
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
