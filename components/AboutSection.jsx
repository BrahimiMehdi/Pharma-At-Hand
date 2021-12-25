import React,{useEffect,useRef} from "react";
import { gsap,Power3 } from "gsap";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
const AboutSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  const aboutImage = useRef()
  const mainTitle = useRef()
  const subtitle = useRef()
  useEffect(() => {
    gsap.from(mainTitle.current,{y:"-90%",scale:0.7,opacity:0.1,duration:1.6,ease:Power3.easeInOut,scrollTrigger:{
      trigger:"#aboutSection",
      toggleActions: "restart pause resume none",
      start:"top bottom",
      scrub:1,
    },})
    gsap.from(aboutImage.current,{x:"-90%",opacity:0,duration:1.6,scale:0.8,ease:Power3.easeInOut,scrollTrigger:{
      trigger:mainTitle.current,
      toggleActions: "restart pause resume none",
      start:"top center",
      scrub:1,
    },})
    gsap.from(subtitle.current,{x:"90%",scale:0.8,opacity:0,duration:1.6,ease:Power3.easeInOut,scrollTrigger:{
      trigger:mainTitle.current,
      toggleActions: "restart pause resume none",
      start:"top center",
      scrub:1,
    },})
  }, [])
  return (
    <section
      id="aboutSection"
      name="/about"
      className="w-full snap-center min-h-screen flex flex-col items-center justify-evenly py-8 sm:py-0 bg-light overflow-x-hidden"
    >
      <div className="w-[80%] mt-8 min-h-[100px] grid place-items-center">
        <h1 ref={mainTitle} className="text-5xl text-dark-100">What is Pharma At Hand ?</h1>
      </div>
      <div className="w-[80%] min-h-[60%] grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 place-items-center">
        <img ref={aboutImage} src="/Pharma.svg" alt="" />
        <div ref={subtitle} className="flex flex-col items-center justify-evenly h-full text-dark-200">
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
    </section>
  );
};

export default AboutSection;
