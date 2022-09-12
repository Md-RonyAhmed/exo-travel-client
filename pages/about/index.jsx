import Head from "next/head";
import AboutBody from "../../components/About/AboutBody";
import Banner from "../../components/About/Banner";


const about = () => {
     return (
       <>
         <Head>
           <title>About|DMC</title>
           <meta name="description" content="Generated by create next app" />
           <link rel="icon" href="/favicon.ico" />
         </Head>
         <Banner />
         <AboutBody/>
       </>
     );
};

export default about;