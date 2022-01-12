import React from "react";
import {FaBars} from "react-icons/fa"
const DepartementsPage = ({ drivesData, openNav, setopenNav }) => {

  return (
    <div
      className={`px-2  grid place-items-center min-h-screen transition-all duration-300 ${
        openNav ? "col-span-8" : "col-span-12"
      }`}
    >
      <div className="min-w-[80%] flex flex-col min-h-[70%] py-0 font-semibold  text-dark-purple ">
      <div className={`py-4 px-2 z-10  sticky top-0 ${openNav ? "hidden" :"flex items-center"}`}>
        <FaBars onClick={setopenNav} className={`text-dark-purple transition-all duration-300 hover:scale-105 hover:text-yellow cursor-pointer sm:text-3xl md:text-4xl text-2xl ${openNav ? "hidden" :"inline-block"}`} />
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl mt-12 mb-8">
          Find your drive
        </h1>
        <div className="grid grid-cols-1  min-h-[80%] sm:grid-cols-2 md:grid-cols-3 gap-8 grid-rows-auto ">
          {drivesData.map((drv) => {
            return (
              drv.drives.map((drvDetail,index)=>{
                return(
                    <a
                key={index}
                rel="noopener noreferrer"
                href={drvDetail.driveLink}
                target="_blank"
              >
                <span className="flex min-w-full items-center justify-evenly rounded-2xl py-2 px-4 cursor-pointer transition-all hover:scale-105 shadow-lg hover:bg-high-green duration-300 bg-yellow">
                  <h3 className="text-black text-lg md:text-xl font-light">
                    {drvDetail.title}
                  </h3>
                  <img
                    className="w-[25px] h-[25px] sm:h-[35px] sm:w-[35px] md:w-[65px] md:h-[65px]"
                    src="/notebook.png"
                    alt=""
                  />
                </span>
              </a>
                )
              })
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DepartementsPage;
