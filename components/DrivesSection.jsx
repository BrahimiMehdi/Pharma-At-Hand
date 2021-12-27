import React,{useRef,useEffect} from "react";
import Link from "next/link";
import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import { Children } from "react/cjs/react.production.min";
const DrivesSection = () => {
  gsap.registerPlugin(ScrollTrigger)
  const t1 = gsap.timeline();
  const gridEl= useRef()
  const mainTitle= useRef()
  /*useEffect(() => {
    t1.from(mainTitle.current, 0.5, {
      y:"-100%",
      scale:0.8,
      opacity:0,
      scrollTrigger:{
        trigger:mainTitle.current,
        start:"top bottom",
        scrub:1,
      }
    })
    .from(gridEl.current, 0.5, {
      y:"100%",
      scale:0.8,
      opacity:0,
      scrollTrigger:{
        trigger:mainTitle.current,
        start:"top bottom",
        scrub:1,
      }
    })
  }, [])*/
  return (
    <section id="driveSection" name="/drives" className="w-full pt-14 overflow-hidden md:snap-center grid place-items-center min-h-screen bg-light-100 overflow-x-hidden">
        <div className="w-4/5 min-h-[80%] flex flex-col justify-between items-center mt-12">
          <div className="w-full mb-2 mt-2 sm:mb-8 sm:mt-4 text-center h-full text-4xl font-semibold text-dark-100">
            <h1 ref={mainTitle}>All the drives you need In One Place</h1>
          </div>
            
            
        </div>
    </section>
  );
};

export default DrivesSection;
