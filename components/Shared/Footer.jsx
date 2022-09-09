/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import Link from "next/link";
import cer1 from "./../../assets/images/certificates/logo-world-travel-tourism-council.webp"
import cer2 from "./../../assets/images/certificates/childsafe2018.webp"
import cer3 from "./../../assets/images/certificates/iata.webp"
import cer4 from "./../../assets/images/certificates/pata.webp"
import cer5 from "./../../assets/images/certificates/pure.webp"
import cer6 from "./../../assets/images/certificates/Select-ICP.webp"
import cer7 from "./../../assets/images/certificates/tap.webp"
import cer8 from "./../../assets/images/certificates//travelleader-network.webp"
import cer9 from "./../../assets/images/certificates/travellife.webp"
import cer10 from "./../../assets/images/certificates/ustoa.webp"
import cer11 from "./../../assets/images/certificates/virtuoso.webp"
import Social from "./Social";

const Footer = () => {
  return (
    <>
      <Social/>
      <div className="py-8 px-4 text-center grid lg:grid-cols-11 grid-cols-2">
        <p>
          <Image src={cer1} width={100} height={50} alt="img"></Image>
        </p>
        <p>
          <Image src={cer2} width={100} height={50} alt="img"></Image>
        </p>
        <p>
          <Image src={cer3} width={100} height={50} alt="img"></Image>
        </p>
        <p>
          <Image src={cer4} width={100} height={50} alt="img"></Image>
        </p>
        <p>
          <Image src={cer5} width={60} height={60} alt="img"></Image>
        </p>
        <p>
          <Image src={cer6} width={120} height={50} alt="img"></Image>
        </p>
        <p>
          <Image src={cer7} width={60} height={60} alt="img"></Image>
        </p>
        <p>
          <Image src={cer8} width={100} height={50} alt="img"></Image>
        </p>
        <p>
          <Image src={cer9} width={100} height={50} alt="img"></Image>
        </p>
        <p>
          <Image src={cer10} width={100} height={50} alt="img"></Image>
        </p>
        <p>
          <Image src={cer11} width={100} height={50} alt="img"></Image>
        </p>
      </div>
      <footer className="text-left bg-[#313131] text-white z-30 relative">
        <div className="mx-6 py-10 text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="">
              <h6
                className="
            uppercase text-6xl
            font-bold
            text-white
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
              >
                DMC
              </h6>
              <div className="form-control text-white pt-4 space-y-3">
                <label className="mt-2">
                  <span className="text-lg">Enter your email address</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered w-full text-white text-base bg-[#5a5a5a]"
                  />
                  <button className="btn btn-primary absolute top-0 right-0 rounded-l-none text-base bg-white hover:bg-primary">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
            <div className="tracking-wider text-lg">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-primary border-b-2 pb-2 w-32">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-white hover:text-primary">
                  The DMC Travel Story
                </a>
              </p>
              <p>
                <a href="#!" className="text-white hover:text-primary">
                  DMC People
                </a>
              </p>
              <p>
                <a href="#!" className="text-white hover:text-primary">
                  DMC Values
                </a>
              </p>
              <p>
                <a href="#!" className="text-white hover:text-primary">
                  Why Travel with us
                </a>
              </p>
              <p>
                <a href="#!" className="text-white hover:text-primary">
                  Responsible Travel
                </a>
              </p>
            </div>
            <div className="tracking-wider text-lg">
              <h6 className="uppercase font-semibold mb-4 flex justify-start text-primary border-b-2 pb-2 w-24">
                Contact
              </h6>
              <p className="flex items-center justify-start text-white hover:text-primary">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="home"
                  className="w-4 mr-4 text-blue-500"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                  ></path>
                </svg>
                New York, NY 10012, US
              </p>
              <p className="flex items-center justify-start text-white hover:text-primary">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  className="w-4 mr-4 text-orange-400"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                info@example.com
              </p>
              <p className="flex items-center justify-start text-white hover:text-primary">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                  ></path>
                </svg>
                + 01 234 567 88
              </p>
              <p className="flex items-center justify-start text-white hover:text-primary">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="print"
                  className="w-4 mr-4 text-lime-400"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                  ></path>
                </svg>
                + 01 234 567 89
              </p>
            </div>
            <div className="tracking-wider text-lg">
              <h6 className="uppercase font-semibold mb-4 flex justify-start text-primary border-b-2 pb-2 w-20">
                Legals
              </h6>
              <p>
                <a href="#!" className="text-white hover:text-primary">
                  Terms of Use
                </a>
              </p>
              <p>
                <a href="#!" className="text-white hover:text-primary">
                  Booking Conditions
                </a>
              </p>
              <p>
                <a href="#!" className="text-white hover:text-primary">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center p-6 bg-[#494949] text-xs text-zinc-400">
          <span>© 2022 Copyright: </span>
          <Link className="text-white font-semibold" href="/">
            DMC travel all right reserved
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
