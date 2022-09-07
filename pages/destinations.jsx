import Head from "next/head";
import Banner from "../components/Destinations/Banner";
import DestinationsBody from "../components/Destinations/DestinationsBody";

const destinations = () => {
  return (
    <>
      <Head>
        <title>Destinations|Exo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <DestinationsBody />
    </>
  );
};

export default destinations;
