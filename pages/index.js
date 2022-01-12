import Head from "next/head";
import { useState } from "react";
import { WelcomeAnimation } from "../components";
import { HomePage } from "../components";
import { getYears } from "../Services";
import { SideBar } from "../components";
export default function Home({ yearData }) {
  const [openNav, setopenNav] = useState(false)
  const changeNav = ()=>{
    setopenNav(!openNav)

  }
  return (
    <main className="min-w-full min-h-screen">
      <Head>
        <title>Pharma At Hand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WelcomeAnimation />
      <div className="min-w-full min-h-screen grid grid-cols-12 gap-0 sm:gap-6 md:gap-20 grid-rows-1">
        <SideBar setopenNav={changeNav} openNav={openNav} />
        <HomePage setopenNav={changeNav} openNav={openNav} yearsDat={yearData} />
      </div>
    </main>
  );
}
export async function getStaticProps() {
  const yearData = (await getYears()) || [];
  return {
    props: { yearData },
  };
}
