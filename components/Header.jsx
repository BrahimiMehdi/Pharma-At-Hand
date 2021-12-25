import React,{useEffect,useRef} from "react";
import Link from "next/link";
import {Link as LinkS} from 'react-scroll'
import {gsap,Power3} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
const Header = () => {
    gsap.registerPlugin(ScrollTrigger)
    const headerBg= useRef()
    const bigHeaderBg= useRef()
    useEffect(() => {
        gsap.to(headerBg.current,{backgroundColor:"transparent",ease:Power3.easeInOut,duration:0.3, scrollTrigger:{
            trigger:"#heroButtons",
            start:"top top",
            scrub:1,
        }})
        gsap.to(bigHeaderBg.current,{backgroundColor:"#1B262C",ease:Power3.easeInOut, scrollTrigger:{
            trigger:"#heroButtons",
            start:"top top",
            scrub:1,
        },duration:0.3},0.3)
    }, [])
  return (
    <header ref={bigHeaderBg}  className="flex z-20 justify-between w-screen px-6 h-[80px] items-center fixed">
        <div>
            <LinkS className="text-light-200 text-3xl font-bold cursor-pointer" to="/">Pharma At Hand</LinkS>
        </div>
        <div ref={headerBg} className="flex items-center justify-around h-[70%] transition-all duration-300 hover:bg-light-200 w-[50%] z-10 bg-light-200 rounded-br-3xl rounded-tl-3xl">
            <span className="cursor-pointer text-light transition-all duration-300 hover:text-cyan-200 hover:text-xl">
                <LinkS to="/about">About</LinkS>
            </span>
            <span className="cursor-pointer text-white transition-all duration-300 hover:text-cyan-200 hover:text-xl">
                <LinkS to="/drives">Drives</LinkS>
            </span>
            <span className="cursor-pointer text-white transition-all duration-300 hover:text-cyan-200 hover:text-xl">
                <LinkS to="/videos">Videos</LinkS>
            </span>
        </div>
    </header>
  );
};

export default Header;
