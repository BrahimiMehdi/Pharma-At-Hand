import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const ResourceSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const rsrcImage = useRef();
  const subtitle = useRef();
  const trigger = useRef();
  useEffect(() => {
    gsap.from(rsrcImage.current, {
      x: "-90%",
      opacity: 0,
      duration: 1.6,
      scale: 0.8,
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: trigger.current,
        toggleActions: "restart pause resume none",
        start: "top bottom",
        scrub: 1,
      },
    });
    gsap.from(subtitle.current, {
      x: "90%",
      scale: 0.8,
      opacity: 0,
      duration: 1.6,
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: trigger.current,
        toggleActions: "restart pause resume none",
        start: "top bottom",
        scrub: 1,
      },
    });
  }, []);
  return (
    <div
      name="/resources"
      className="bg-light overflow-x-hidden w-full min-h-screen md:snap-center grid place-items-center"
    >
      <div ref={trigger}></div>
      <div
        ref={subtitle}
        className="w-[80%] place-items-center min-h-[80%] grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1"
      >
        <div className="flex row-span-2 sm:row-span-1 flex-col text-left text-dark-200 justify-evenly min-h-full">
          <h1 className="text-4xl mb-2">And Manny Other Usefull Resources</h1>
          <p className="text-dark-100 mb-4">
            we provied a collection of books , videos and usefull tutorials made
            by pharmacy students and professors
            <br /> and you can also find web development courses, design and
            manny other intresting topics here.
          </p>
          <Link replace href={`/year`}>
            <span className="bg-dark-200 cursor-pointer w-[150px] h-[50px] text-light text-center grid place-items-center transition-all duration-300 active:bg-light-200 active:scale-95 hover:bg-dark-100 hover:scale-105">
              GET STARTED
            </span>
          </Link>
        </div>
        <div
          ref={rsrcImage}
          className="w-full hidden h-full sm:grid sm:place-items-center"
        >
          <img className="object-contain" src="/resources.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ResourceSection;
