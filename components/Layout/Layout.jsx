import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar>
        <main>{children}</main>
      </Navbar>
      <Footer />
    </>
  );
};

export default Layout;
