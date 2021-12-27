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
  useEffect(() => {
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
  }, [])
  return (
    <section id="driveSection" name="/drives" className="w-full pt-14 overflow-hidden md:snap-center grid place-items-center min-h-screen bg-light-100 overflow-x-hidden">
        <div className="w-4/5 min-h-[80%] flex flex-col justify-between items-center mt-12">
          <div className="w-full mb-2 mt-2 sm:mb-8 sm:mt-4 text-center h-full text-4xl font-semibold text-dark-100">
            <h1 ref={mainTitle}>All the drives you need In One Place</h1>
          </div>
            
            <div ref={gridEl} className="grid place-items-center gap-8 grid-cols-1 w-full h-full mb-12 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2">
              <div className="w-[200px] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-bl hover:from-light hover:to-light-200 text-2xl text-dark-200 h-[200px] rounded-full grid place-items-center bg-gradient-to-br from-green-200 to-light-100">
                <Link  href="/year/1st-year">1st Year</Link>
              </div>
              <div className="w-[200px] shadow-xl  transition-all duration-300 hover:scale-105 hover:bg-gradient-to-bl hover:from-light hover:to-light-200 text-2xl text-dark-200 h-[200px] rounded-full grid place-items-center bg-gradient-to-br from-blue-400 to-light-100">
                <Link  href="/year/2nd-year">2nd Year</Link>
              </div>
              <div className="w-[200px] shadow-xl  transition-all duration-300 hover:scale-105 hover:bg-gradient-to-bl hover:from-light hover:to-light-200 text-2xl text-dark-200 h-[200px] rounded-full grid place-items-center bg-gradient-to-br from-slate-400 to-light-100">
                <Link  href="/year/3rd-year">3rd Year</Link>
              </div>
              <div className="w-[200px] shadow-xl  transition-all duration-300 hover:scale-105 hover:bg-gradient-to-bl hover:from-light hover:to-light-200 text-2xl text-dark-200 h-[200px] rounded-full grid place-items-center bg-gradient-to-br from-amber-400 to-light-100">
                <Link  href="/year/4th-year">4th Year</Link>
              </div>
              <div className="w-[200px] shadow-xl  transition-all duration-300 hover:scale-105 hover:bg-gradient-to-bl hover:from-light hover:to-light-200 text-2xl text-dark-200 h-[200px] rounded-full grid place-items-center bg-gradient-to-br from-indigo-300 to-light-100">
                <Link  href="/year/5th-year">5th Year</Link>
              </div>
              <div className="w-[200px] shadow-xl  transition-all duration-300 hover:scale-105 hover:bg-gradient-to-bl hover:from-light hover:to-light-200 text-2xl text-dark-200 h-[200px] rounded-full grid place-items-center bg-gradient-to-br from-cyan-500 to-light-100">
                <Link  href="/year/intern">Intern</Link>
              </div>
              
            </div>
        </div>
    </section>
  );
};

export default DrivesSection;
