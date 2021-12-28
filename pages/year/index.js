import React from "react";
import { getYears } from "../../Services";
import { ChooseDepartment } from "../../components";
import Head from "next/head";
import Link from "next/link";

const year = ({ yearData }) => {
  return (
    <main className="w-full grid place-items-center min-h-screen snap-none  md:snap-y md:snap-proximity  bg-dark-200">
      <Head>
        <title>Pharma At Hand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full grid place-items-center mt-4 mb-2 h-full ">
          <Link
            href="/"
          >
            <span className="text-light-100 transition-all duration-300 hover:scale-105 hover:text-light active:scale-95 active:text-green-300 text-5xl sm:text-3xl font-bold cursor-pointer">
                pharma at hand
            </span>
          </Link>
        </div>
      <div className="w-full gap-8 py-4 px-6  min-h-screen grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2  place-items-center">
        {yearData.map((studyYear, index) => {
          return (
            <div
              key={index}
              className="h-full px-4 shadow-light-100 py-8 bg-gradient-to-t from-light-100 to-light rounded-xl shadow-md w-full flex flex-col justify-evenly items-center"
            >
              
              <div className="h-full w-4/5">
                <img className="object-contain" src={`/bg (${index + 1}).svg`} alt="" />
              </div>
              <Link href={`/year/${studyYear.node.slug}`}>
                <span className="w-[200px] h-[50px] text-center grid place-items-center border border-light transition-all duration-300 hover:bg-gradient-to-l hover:scale-105 active:bg-dark-200 active:scale-95 text-white cursor-pointer text-2x bg-gradient-to-r from-dark-100 to-dark-200">
                  {studyYear.node.currentYear}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default year;

export async function getStaticProps() {
  const yearData = (await getYears()) || [];
  return {
    props: { yearData },
  };
}
