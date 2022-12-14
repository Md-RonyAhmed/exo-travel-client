import Head from "next/head";
import Banner from "../components/Tours/Banner";
import ToursBody from "../components/Tours/ToursBody";

const tours = () => {
  return (
    <>
      <Head>
        <title>Tours|DMC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <ToursBody />
    </>
  );
};

export default tours;
