import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Link as LinkS } from "react-scroll";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const HeroSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const heroImage = useRef();
  const heroInfo = useRef();
  const outerDiv = useRef();
  const t1 = gsap.timeline();
  useEffect(() => {
    t1.from(
      heroImage.current,
      { opacity: 0, x: "-100%", ease: Power3.easeInOut, duration: 1 },
      2.5
    ).from(heroInfo.current, {
      opacity: 0,
      x: "100%",
      ease: Power3.easeInOut,
      duration: 1,
    });
    gsap.to(outerDiv.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#aboutSection",
        start: "top bottom",
        toggleActions: "restart pause resume none",
        scrub: 1,
      },
    });
  }, []);
  return (
    <section
      ref={outerDiv}
      name="/"
      className="grid  overflow-x-hidden md:snap-center place-items-center w-full min-h-screen pt-14 sm:pt-0"
    >
      <div className="grid  grid-cols-1 gap-[10px] md:gap-[20%] grid-rows-2 mt-14 md:mt-4 md:grid-cols-2 md:grid-rows-1 pt-14  w-[80%] min-h-[80%]">
        <div
          ref={heroInfo}
          className="h-[70%] w-full flex flex-col row-span-2 sm:row-span-1 justify-evenly"
        >
          <h1 className="text-4xl font-semibold text-left text-dark-200">
            Find All The resources you need
          </h1>
          <p className="text-light-200 mt-2 text-left">
            Phosfluorescently morph economically sound metrics without vertical
            materials. Holisticly leverage existing business niches whereas
            installed.
          </p>
          <div id="heroButtons" className="w-full sm:w-[70%] flex mt-4 items-center text-sm ">
            <Link replace className="grid h-full place-items-center text-center" href={`/year`}>
              <span className="bg-white  cursor-pointer border-[1px] transition-all duration-300 active:scale-95 hover:scale-105 active:bg-light-200 hover:bg-light-100 mr-4 border-dark-200 py-2 text-center text-dark-100 w-[100%]">
                GET STARTED
              </span>
            </Link>
            <LinkS
              className="grid h-full w-full place-items-center text-center"
              to={`/about`}
            >
              <span className="text-white cursor-pointer  border-[1px] ml-4 transition-all duration-300 active:scale-95 hover:scale-105 active:bg-light-200 hover:bg-dark-200 border-dark-200 py-2 text-center bg-dark-100 w-[100%] ">
                SEE MORE
              </span>
            </LinkS>
          </div>
        </div>
        <div
          ref={heroImage}
          className="h-[60%] hidden sm:block w-[60%] md:h-full md:w-full"
        >
          <img src="/Hero.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
