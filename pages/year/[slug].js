import React from "react";
import { ChooseDepartment } from "../../components";
import { getDepartments, getYears } from "../../Services";
import Head from "next/head";
import { useRouter } from "next/router";
import { Loader } from "../../components";
import { Link as LinkS } from "react-scroll";
import { SecondaryHeader } from "../../components";
const years = ({ currentYearData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <main className="w-full  min-h-screen snap-none  md:snap-y md:snap-proximity  bg-light-100">
      <Head>
        <title>Pharma At Hand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SecondaryHeader />
      <div name="/" className="min-h-screen w-full grid place-items-center">
        <div className="min-h-screen py-16 w-full grid place-items-center bg-opacity-80 bg-gradient-to-b from-dark-200 to-dark-100 ">
          <div id="depSection" className="w-[80%] rounded-lg gap-4 place-items-center text-2xl py-8  text-light min-h-[80%] grid auto-rows-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {currentYearData.departements.map((getName,index) => {
                return (
                  <LinkS key={index} to={`/${getName.name}`}>
                    <div className="w-[185px] hover:from-green-300 h-[185px] md:w-[205px] md:h-[205px] rounded-full transition-all duration-500 hover:bg-gradient-to-tl hover:scale-105 active:scale-95 shadow-lg active:bg-light hover:text-dark-200 text-center grid place-items-center cursor-pointer bg-gradient-to-bl from-sky-400 to-light-200">{getName.name}</div>
                  </LinkS>
                )
              })}
          </div>
        </div>
        {currentYearData.departements.map((studyYear, index) => {
          return (
            <div name={`/${studyYear.name}`} className="min-h-screen w-full">
              <ChooseDepartment
                key={index}
                currentYear={studyYear.currentYear}
                department={studyYear}
              />
            </div>
          );
        })}
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
