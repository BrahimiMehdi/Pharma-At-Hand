
import React,{useEffect} from "react";

const ChooseDepartment = ({ department,currentYear }) => {
    
    //test
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-evenly">
        
      <div className="grid place-items-center">
        <h1 className="text-4xl text-dark-200">{department.name}</h1>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 place-items-center w-[80%] h-[80%]">
        
      </div>
    </div>
  );
};

export default ChooseDepartment;
