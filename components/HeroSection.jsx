import React from 'react'
import Link from "next/link"
import {Link as LinkS} from "react-scroll"
const HeroSection = () => {
    return (
        <div name="/" className='grid place-items-center w-full min-h-screen'>
            <div className="grid grid-cols-1 gap-[10px] md:gap-[20%] grid-rows-2 mt-14 md:mt-4 md:grid-cols-2 md:grid-rows-1 pt-14  w-[80%] min-h-[80%]">
                <div className='h-[70%] w-full flex flex-col justify-evenly'>
                    <h1 className="text-4xl font-semibold text-left text-dark-200">Find All The resources you need</h1>
                    <p className="text-light-200 text-left">Phosfluorescently morph economically sound metrics without vertical materials. Holisticly leverage existing business niches whereas installed.</p>
                    <div className="w-full flex items-center ">
                    <span className="bg-white px-4 border-[1px] transition-all duration-300 active:scale-95 hover:scale-105 active:bg-light-200 hover:bg-light-100 mr-4 border-dark-200 py-2 text-center text-dark-100 w-[150px]"><Link href="/study-year">GET STARTED</Link></span>
                    <span ><LinkS className="text-white px-4 border-[1px] ml-4 transition-all duration-300 active:scale-95 hover:scale-105 active:bg-light-200 hover:bg-dark-200 border-dark-200 py-2 text-center bg-dark-100 w-[150px] cursor-pointer" to="/about">SEE MORE</LinkS></span>
                    </div>
                </div>
                <div className='h-[60%] hidden sm:block w-[60%] md:h-full md:w-full'>
                    <img src="/Hero.svg" alt="" />
                </div>
           </div>
        </div>
    )
}

export default HeroSection
