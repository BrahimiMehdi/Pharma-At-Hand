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
      <div className="w-full gap-8 py-4 px-6  min-h-screen grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2  place-items-center">
        {yearData.map((studyYear) => {
          return (
            <div className="grid h-full bg-gradient-to-r from-light-200 to-orange-300 text-4xl text-light transition-all duration-300 hover:scale-105  w-full place-items-center">
              <Link href={`/year/${studyYear.node.currentYear}`} className="text-4xl text-light">
                {studyYear.node.currentYear}
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
