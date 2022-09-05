/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import icon from "./../../assets/images/others/exo-logo2.svg";
const AboutEXO = () => {
  return (
    <div>
      <div className="bg-white lg:py-20 p-8 text-center">
        <div>
          <Image src={icon} width={100} height={60} alt="img"></Image>
        </div>
        <h2 className="text-3xl tracking-wide text-[#444444] mb-4">WHY EXO</h2>
        <hr className="lg:w-1/6 w-1/2 mx-auto border-[1.3px] border-gray-300 bg-gray-300" />
        <p className="lg:w-11/12 w-full mx-auto mb-10 mt-5 lg:text-2xl font-semibold text-lg text-gray-700">
          We've been pioneering unique journeys in Asia for more than two
          decades. Across each of the nine countries we operate in, we've
          developed in-depth tours that go far beyond the surface to reveal the
          heart of each destination. Along with our team of local and
          in-destination travel experts and time-tested logistics, we combine
          encyclopedic knowledge of the region with a progressive vision to make
          us one of Asia's most trusted and exciting DMCs.
        </p>
        <button className="btn btn-primary btn-outline rounded px-10 py-1 text-2xl font-thin capitalize">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default AboutEXO;
