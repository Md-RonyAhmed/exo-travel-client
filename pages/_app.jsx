import Layout from "../components/Layout/Layout";
import Navbar from "../components/Shared/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Navbar>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Navbar>
  );
}

export default MyApp;
