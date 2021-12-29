import React from "react";

const ChooseDepartment = ({ department, currentYear }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-evenly bg-dark-200">
      <div className="grid place-items-center h-full">
        <h1 className="text-4xl text-center text-light-200">
          {department.name}
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 grid-rows-9 sm:grid-cols-2 sm:grid-rows-6 md:grid-rows-3 md:grid-cols-3 place-items-center w-[80%] h-[80%]">
        {department.drives.map((drv, index) => {
          return (
            <a
              rel="noopener noreferrer"
              key={index}
              href={drv.driveLink}
              target="_blank"
              className="shadow-lg rounded-xl text-dark-200 transition-all duration-300 hover:bg-light-200 hover:scale-105 hover:text-light w-full px-4 py-4 bg-light h-full flex flex-col justify-around items-center"
            >
              <h1 className="text-4xl">{drv.title}</h1>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseDepartment;
