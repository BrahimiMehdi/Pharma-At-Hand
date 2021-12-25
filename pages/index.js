import Head from 'next/head'
import { Header } from '../components'
import { HeroSection } from '../components'
import { AboutSection } from '../components'
import { DrivesSection } from '../components'
import {WelcomeAnimation} from '../components'
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-light-100">
      <Head>
        <title>Pharma At Hand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <WelcomeAnimation />
      <HeroSection />
      <AboutSection />
      <DrivesSection />
    </div>
  )
}
