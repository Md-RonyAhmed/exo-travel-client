/* eslint-disable react/no-unescaped-entities */

import Footer from "../components/Shared/Footer";
import Modal from "../components/Shared/Modal";
import Navbar from "../components/Shared/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar>
        <Modal/>
        <Component {...pageProps} />
        <Footer />
      </Navbar>
    </>
  );
}

export default MyApp;
