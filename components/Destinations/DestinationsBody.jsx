/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import icon from "./../../assets/images/others/icon-our-asia.svg";
import myicon from "./../../assets/images/asia/icon-myanmar.webp";
import vicon from "./../../assets/images/asia/icon-vietnam.webp";
import thicon from "./../../assets/images/asia/icon-thailand.webp";
import myanmar from "./../../assets/images/destinations/myanmar-agm.jpg";
import vietnam from "./../../assets/images/destinations/vietnam-agm.jpg";
import thailand from "./../../assets/images/destinations/thailand-agm.jpg";
import multi from './../../assets/images/destinations/multi-country-3.jpg';
import laos from './../../assets/images/destinations/laos-agm.jpg';
import indo from './../../assets/images/destinations/indonesia-agm.jpg';
import singa from './../../assets/images/destinations/Singapore-Architecture-Merlion-sunrise.webp';
import malay from './../../assets/images/destinations/malaysia-agm.jpg';
import japan from './../../assets/images/destinations/japan-agm.jpg';
import cambo from "./../../assets/images/asia/Layer_4.webp";

const DestinationsBody = () => {
  return (
    <>
      <div className="text-center mt-12 z-10">
        <div>
          <Image src={icon} width={70} height={70} alt="img"></Image>
        </div>
        <div className="lg:py-12 p-8 -mt-10 bg-white ">
          <h2 className="text-3xl font-semibold tracking-wide text-[#444444] mb-4">
            OUR ASIA
          </h2>
          <hr className="lg:w-1/6 w-1/2 mx-auto border-[1.3px] border-[#dbdbdb] bg-[#dbdbdb]" />
          <p className="font-semibold lg:w-11/12 w-full mx-auto mb-10 mt-5 lg:text-2xl text-lg text-[#5e6163]">
            The planet's largest continent is as varied as it is vast. With
            otherworldly landscapes, mystic cultures, amazing cuisine, exotic
            beaches and friendly people, there's no place on earth with more to
            offer. Check out our carefully designed range of exhilarating
            adventures across Asia showcasing the very best of each destination.
          </p>
        </div>
      </div>
      <div className="bg-white pb-10">
        <div className="grid grid-rows-1">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 px-3">
            <div>
              <div className="relative h-64 w-full cursor-pointer">
                <div className="">
                  <Image src={myanmar} alt="myanmar" layout="fill" />
                </div>
                <div className="flex space-x-2 p-2 font-semibold justify-center items-center bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                  <h1 className="text-xl">MYANMAR</h1>
                  <p>
                    <Image src={myicon} alt="myanmar" height={30} width={50} />
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="relative h-64 w-full cursor-pointer">
                <div className="">
                  <Image src={vietnam} alt="vietnam" layout="fill" />
                </div>
                <div className="flex justify-center space-x-2 py-2 items-center font-semibold bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                  <h1 className="text-xl uppercase">vietnam</h1>
                  <p>
                    <Image src={vicon} alt="vietnam" height={30} width={50} />
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="relative h-64 w-full cursor-pointer">
                <div className="">
                  <Image src={thailand} alt="thailand" layout="fill" />
                </div>
                <div className="flex justify-center space-x-2 p-2 font-semibold items-center bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                  <h1 className="text-xl uppercase">thailand</h1>
                  <p>
                    <Image src={thicon} alt="thailand" height={30} width={50} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 bg-white gap-3 px-3 my-5">
            <div>
              <div className="relative h-72 w-full cursor-pointer">
                <div className="">
                  <Image src={japan} alt="japan" layout="fill" />
                </div>
                <div className="flex justify-center space-x-2 py-2 items-center font-semibold bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                  <h1 className="text-xl uppercase">japan</h1>
                  <p>
                    <Image src={vicon} alt="vietnam" height={30} width={50} />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative h-72 w-full cursor-pointer">
                <div className="">
                  <Image src={laos} alt="laos" layout="fill" />
                </div>
                <div className="flex justify-center space-x-2 p-2 font-semibold items-center bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                  <h1 className="text-xl uppercase">Laos</h1>
                  <p>
                    <Image src={thicon} alt="thailand" height={30} width={50} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 px-3 mb-5 ">
            <div>
              <div className="relative h-64 w-full cursor-pointer">
                <div className="">
                  <Image src={singa} alt="singapore" layout="fill" />
                </div>
                <div className="flex space-x-2 p-2 font-semibold justify-center items-center bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                  <h1 className="text-xl uppercase">singapore</h1>
                  <p>
                    <Image src={myicon} alt="myanmar" height={30} width={50} />
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="relative h-64 w-full cursor-pointer">
                <div className="">
                  <Image src={malay} alt="malaysia" layout="fill" />
                </div>
                <div className="flex justify-center space-x-2 py-2 items-center font-semibold bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                  <h1 className="text-xl uppercase">Malaysia</h1>
                  <p>
                    <Image src={vicon} alt="vietnam" height={30} width={50} />
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="relative h-64 w-full cursor-pointer">
                <div className="">
                  <Image src={indo} alt="indonesia" layout="fill" />
                </div>
                <div className="flex justify-center space-x-2 p-2 font-semibold items-center bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                  <h1 className="text-xl uppercase">Indonesia</h1>
                  <p>
                    <Image src={thicon} alt="thailand" height={30} width={50} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 bg-white gap-3 px-3">
            <div>
              <div className="relative h-72 w-full cursor-pointer">
                <div className="">
                  <Image src={cambo} alt="cambodia" layout="fill" />
                </div>
                <div className="flex justify-center space-x-2 py-2 items-center font-semibold bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                  <h1 className="text-xl uppercase">cambodia</h1>
                  <p>
                    <Image src={vicon} alt="vietnam" height={30} width={50} />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative h-72 w-full cursor-pointer">
                <div className="">
                  <Image src={multi} alt="multi" layout="fill" />
                </div>
                <div className="flex justify-center space-x-2 p-2 font-semibold items-center bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                  <h1 className="text-xl uppercase">multi country</h1>
                  <p>
                    <Image src={thicon} alt="thailand" height={30} width={50} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationsBody;
