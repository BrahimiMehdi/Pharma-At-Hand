import Head from 'next/head'
import { Header } from '../components'
import { HeroSection } from '../components'
import { AboutSection } from '../components'
import { DrivesSection } from '../components'
import {WelcomeAnimation} from '../components'
import { ResourceSection } from '../components'
import { getYears } from '../Services'
export default function Home({yearData}) {
  return (
    <main className="w-full  min-h-screen snap-none  md:snap-y md:snap-proximity  bg-light-100">
      <Head>
        <title>Pharma At Hand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <WelcomeAnimation />
      <HeroSection />
      <AboutSection />
      <DrivesSection year={yearData} />
      <ResourceSection />
    </main>
  )
}
export async function getStaticProps() {
  const yearData = (await getYears()) || [];
  return {
    props: { yearData },
  };
}