import React, { useState, useRef } from "react";
import { SideBar } from "../../components";
import { getDepartments, getYears } from "../../Services";
import Head from "next/head";
import { useRouter } from "next/router";
import { Loader } from "../../components";
import {YearPage} from "../../components";

const years = ({ currentYearData }) => {
  const router = useRouter();

  const [openNav, setopenNav] = useState(false)
  const changeNav = ()=>{
    setopenNav(!openNav)

  }

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <main className="min-w-full min-h-screen">
      <Head>
        <title>Pharma At Hand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="min-w-full overflow-x-hidden min-h-screen grid grid-cols-12 gap-0 sm:gap-0 md:gap-20 grid-rows-1">
        <SideBar setopenNav={changeNav} openNav={openNav} />
        <YearPage setopenNav={changeNav} openNav={openNav} yearsDat={currentYearData} />
      </div>
    </main>
  );
};

export default years;

export async function getStaticProps({ params }) {
  const currentYearData = (await getDepartments(params.slug)) || [];
  return {
    props: { currentYearData },
  };
}
export async function getStaticPaths() {
  const yrs = await getYears();
  return {
    paths: yrs.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}