import React from "react";
import { ChooseDepartment } from "../../components";
import { getDepartments, getYears } from "../../Services";
import Head from "next/head";
const years = ({ yearData }) => {
  return (
    <main className="w-full  min-h-screen snap-none  md:snap-y md:snap-proximity  bg-light-100">
      <Head>
        <title>Pharma At Hand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen w-full grid place-items-center">

        {yearData.departements.map((studyYear,index) => {
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
  const yearData = (await getDepartments(params.slug)) || [];
  return {
    props: { yearData },
  };
}
export async function getStaticPaths() {
  const yrs = await getYears();
  return {
    paths: yrs.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
