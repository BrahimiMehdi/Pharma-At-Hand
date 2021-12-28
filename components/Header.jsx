import React,{useEffect,useRef,useState} from "react";
import Link from "next/link";
import {Link as LinkS} from 'react-scroll'
import {gsap,Power3} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {FaBars} from 'react-icons/fa'
const Header = () =>  {
    const [openNav, setopenNav] = useState(false);
    const changeNav = () => {
      setopenNav(!openNav)
      if (openNav) {
          gsap.to(navMenu.current,{y:"0%",ease:Power3.easeOut,display:"block"})
      }
      else{
          gsap.to(navMenu.current,{y:"100%",ease:Power3.easeOut,display:"hidden"})
      }
    };
    gsap.registerPlugin(ScrollTrigger);
    const headerBg = useRef();
    const bigHeaderBg = useRef();
    const navMenu = useRef()
    useEffect(() => {
      gsap.to(headerBg.current, {
        backgroundColor: "transparent",
        ease: Power3.easeInOut,
        duration: 0.3,
        scrollTrigger: {
          trigger: "#aboutSection",
          start: "top bottom",
          scrub: 1,
        },
      });
      gsap.to(
        bigHeaderBg.current,
        {
          backgroundColor: "#1B262C",
          ease: Power3.easeInOut,
          scrollTrigger: {
            trigger: "#aboutSection",
            start: "top bottom",
            scrub: 1,
          },
          duration: 0.3,
        },
        0.3
      );
      
    }, []);
    return (
      <header
        ref={bigHeaderBg}
        className="flex z-20 justify-center sm:justify-between w-screen px-0 md:px-6 h-[80px] items-center fixed"
      >
          
        <div>
          <LinkS
            className="text-light-200 text-xl sm:text-3xl font-bold cursor-pointer"
            to="/"
          >
            Pharma At Hand
          </LinkS>
        </div>
        <FaBars onClick={changeNav} className="md:hidden text-2xl ml-12 text-dark-100 cursor-pointer" />
        <div onClick={changeNav} ref={navMenu} className="absolute hidden top-0 text-light bg-light w-full  z-50 h-screen md:hidden">
          <div className="w-full h-[80%] flex flex-col items-center justify-around">
            <span className="cursor-pointer text-light-100 transition-all duration-300 hover:text-dark-200 hover:text-xl">
              <LinkS onClick={changeNav} to="/about">About</LinkS>
         </span>
            <span className="cursor-pointer text-light-100 transition-all duration-300 hover:text-dark-200 hover:text-xl">
              <LinkS onClick={changeNav} to="/drives">Drives</LinkS>
            </span>
            <span className="cursor-pointer active:text-sm text-dark-100 transition-all duration-300 hover:text-dark-200 hover:text-xl">
              <LinkS onClick={changeNav} to="/resources">Resources</LinkS>
            </span>
          </div>
        </div>
        <div
          ref={headerBg}
          className="hidden sm:flex sm:items-center sm:justify-around h-[70%] transition-all duration-300 hover:bg-light-200 w-[50%] z-10 bg-light-200 rounded-br-3xl rounded-tl-3xl"
        >
          <span className="cursor-pointer text-light transition-all duration-300 hover:text-white hover:text-xl">
              <LinkS to="/about">About</LinkS>
         </span>
            <span className="cursor-pointer text-light transition-all duration-300 hover:text-white hover:text-xl">
              <LinkS to="/drives">Drives</LinkS>
            </span>
            <span className="cursor-pointer text-light transition-all duration-300 hover:text-white hover:text-xl">
              <LinkS to="/resources">Resources</LinkS>
            </span>
        </div>
      </header>
    );
  };

export default Header;
