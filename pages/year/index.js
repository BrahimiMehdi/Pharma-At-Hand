import React from "react";
import { getDepartments } from "../../Services";
import { ChooseDepartment } from "../../components";
import Head from "next/head";

const year = ({ yearData }) => {
 
  return (
    <main className="w-full grid place-items-center min-h-screen snap-none  md:snap-y md:snap-proximity  bg-light-100">
      <Head>
        <title>Pharma At Hand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full  min-h-screen grid place-items-center">
        <h1 className="text-5xl text-dark-100 font-semibold">Coming Soon...</h1>
      </div>
    </main>
  );
};

export default year;

export async function getStaticProps() {
  const yearData = (await getDepartments()) || [];
  return {
    props: { yearData },
  };
}
