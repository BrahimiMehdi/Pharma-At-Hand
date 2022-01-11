import React from "react";
import Link from "next/link";
import {FaBars} from 'react-icons/fa'
const HomePage = ({ yearsDat,openNav,setopenNav }) => {
  
  return (
    <div className={`px-12 overflow-x-hidden grid place-items-center h-screen transition-all duration-300 ${openNav ? "col-span-8" :"col-span-10"}`}>
      <div className="min-w-[80%] flex flex-col min-h-[70%] py-12 font-semibold  text-dark-purple ">
        <FaBars onClick={setopenNav} className={`text-dark-purple transition-all duration-300 hover:scale-105 hover:text-yellow absolute sm:top-[8%] mb-4 top-[3%] cursor-pointer sm:text-3xl md:text-4xl text-2xl ${openNav ? "hidden" :"inline-block"}`} />
        <h1 className="text-2xl sm:text-4xl md:text-5xl">Choose your Study Year</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 grid-rows-auto mt-12 ">
          {yearsDat.map((year, index) => {
            return (
              <Link key={index} href={`/year/${year.node.slug}`}>
                <div className="flex min-w-full items-center justify-evenly rounded-2xl py-2 px-4 cursor-pointer transition-all hover:scale-105 hover:rounded-sm hover:bg-high-green duration-300 bg-yellow">
                  <h3 className="text-black text-lg sm:text-xl md:text-2xl font-light">
                    {year.node.currentYear}
                  </h3>
                  <img className="w-[25px] h-[25px] sm:h-[35px] sm:w-[35px] md:w-[65px] md:h-[65px]" src="/notebook.png" alt="" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
     
    </div>
  );
};

export default HomePage;
