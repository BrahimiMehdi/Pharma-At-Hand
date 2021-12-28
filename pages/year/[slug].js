import React from "react";
import { ChooseDepartment } from "../../components";
import { getDepartments, getYears } from "../../Services";
import Head from "next/head";
import { useRouter } from 'next/router';
import { Loader } from "../../components";
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
      <div className="min-h-screen w-full grid place-items-center">

        {currentYearData.departements.map((studyYear,index) => {
          return (
            <ChooseDepartment
              key={index}
              currentYear={studyYear.currentYear}
              department={studyYear}
            />
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
    fallback:true,

  };
}
