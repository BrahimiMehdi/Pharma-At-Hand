
import React from "react";

const ChooseDepartment = ({ department,currentYear }) => {
    
    //{yearData.map((studyYear)=>{return(studyYear.node.departements.map((dep,index)=>{return(<ChooseDepartment key={index} currentYear={studyYear.node.currentYear} department={dep} />)}))})}
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-evenly">
        <div>

        </div>
      <div className="grid place-items-center">
        <h1 className="text-4xl text-dark-200">{department.name}</h1>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 place-items-center w-[80%] h-[80%]">
        {department.drives.map((drv) => {
          return (
            <a href={drv.driveLink} target="_blank" className="shadow-lg text-dark-200 transition-all duration-300 hover:bg-light-200 hover:scale-105 hover:text-light w-full px-4 py-4 bg-light h-full flex flex-col justify-around items-center">
              <h1 className="text-4xl">{drv.title}</h1>   
            </a>
          )
        })}
      </div>
    </div>
  );
};

export default ChooseDepartment;
