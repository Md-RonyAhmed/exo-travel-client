
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar>
        <Component {...pageProps} />
        <Footer />
      </Navbar>
    </>
  );
}

export default MyApp;
