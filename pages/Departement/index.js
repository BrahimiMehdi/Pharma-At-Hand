import React, { useEffect, useRef } from "react";
import { getDepDetails } from "../../Services";

import Head from "next/head";
import Link from "next/link";
import { gsap, Power3 } from "gsap";
const year = ({ yearData }) => {
  const pharmaTitle = useRef();
  const yearsGrid = useRef();
  const tl = gsap.timeline();
  useEffect(() => {
    tl.from(
      pharmaTitle.current,
      { y: "-100%", opacity: 0, ease: Power3.easeOut, duration: 0.8 },
      0.1
    ).from(
      yearsGrid.current,
      {
        y: "100%",
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 1.8,
        scale: 0,
      },
      0.5
    );
  }, []);
  return (
    <main className="w-full grid place-items-center min-h-screen snap-none  md:snap-y md:snap-proximity  bg-dark-200">
      <Head>
        <title>Pharma At Hand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </main>
  );
};

export default year;

export async function getStaticProps() {
  const yearData = (await getDepDetails()) || [];
  return {
    props: { yearData },
  };
}
