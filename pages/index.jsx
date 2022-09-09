/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import AboutDMC from '../components/Home/AboutDMC'
import Banner from '../components/Home/Banner'
import OurAsia from '../components/Home/OurAsia'
import StandFor from '../components/Home/StandFor'
import Subscribe from '../components/Home/Subscribe'
import Tours from '../components/Home/Tours'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home|DMC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AboutDMC />
      <OurAsia />
      <StandFor />
      <Tours />
      <Subscribe />
    </div>
  );
}
