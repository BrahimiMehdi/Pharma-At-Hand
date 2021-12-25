import React from "react";

const AboutSection = () => {
  return (
    <div
      id="aboutSection"
      name="/about"
      className="w-full min-h-screen flex flex-col items-center justify-evenly py-8 sm:py-0 bg-light"
    >
      <div className="w-[80%] min-h-[100px] grid place-items-center">
        <h1 className="text-5xl text-dark-100">What is Pharma At Hand ?</h1>
      </div>
      <div className="w-[80%] min-h-[60%] grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 place-items-center">
        <img src="/Pharma.svg" alt="" />
        <div className="flex flex-col items-center justify-evenly h-full text-dark-200">
          <h1 className="text-2xl">A platform made by pharmacy students for pharmacy students</h1>
          <p className="mt-4 sm:mt-0">
            Efficiently network scalable ROI vis-a-vis pandemic technology.
            Authoritatively communicate ubiquitous channels with reliable growth
            strategies. Assertively strategize sticky markets and installed base
            infrastructures. Collaboratively streamline web-enabled value
            whereas covalent platforms. Dynamically whiteboard innovative
            processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
