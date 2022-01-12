import React, { useState } from "react";
import { SideBar,DepartementsPage } from "../../components";
import { getDepDetails,getDrives } from "../../Services";
import Head from "next/head";
import { useRouter } from "next/router";
import { Loader } from "../../components";


const Drives = ({ drivesData }) => {
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

   
      <div className="min-w-full min-h-screen overflow-x-hidden grid grid-cols-12 gap-0 sm:gap-6 md:gap-20 grid-rows-1">
        <SideBar setopenNav={changeNav} openNav={openNav} />
        <DepartementsPage setopenNav={changeNav} openNav={openNav} drivesData={drivesData} />
      </div>
    </main>
  );
};

export default Drives;

export async function getStaticProps({ params }) {
  const drivesData = (await getDrives(params.slug)) || [];
  return {
    props: { drivesData },
  };
}
export async function getStaticPaths() {
  const departs = await getDepDetails();
  return {
    paths: departs.edges.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
