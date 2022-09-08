/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import icon from "./../../assets/images/others/icon-our-asia.svg";
import icon1 from "./../../assets/images/tours/icon-01.webp";
import icon2 from "./../../assets/images/tours/icon-02.webp";
import icon3 from "./../../assets/images/tours/icon-03.webp";
import icon4 from "./../../assets/images/tours/icon-04.webp";
import icon5 from "./../../assets/images/tours/icon-05.webp";
import icon6 from "./../../assets/images/tours/icon-06.webp";
import icon7 from "./../../assets/images/tours/icon-07.webp";
import icon8 from "./../../assets/images/tours/icon-08.webp";
import icon9 from "./../../assets/images/tours/icon-09.webp";
import icon10 from "./../../assets/images/tours/icon-01.webp";
import icon11 from "./../../assets/images/tours/icon-01.webp";
import icon12 from "./../../assets/images/tours/icon-01.webp";
import icon13 from "./../../assets/images/tours/icon-01.webp";
import icon14 from "./../../assets/images/tours/icon-14.webp";
import img1 from "./../../assets/images/tours/tourstyles-classicjourneys.webp";
import img2 from "./../../assets/images/tours/tourstyles-beach.webp";
import img4 from "./../../assets/images/tours/tourstyles-nature.jpg";
import img5 from "./../../assets/images/tours/tourstyles-activetravel.jpg";
import img6 from "./../../assets/images/tours/tourstyles-family.webp";
import img7 from "./../../assets/images/tours/tourstyles-experiences.webp";
import img8 from "./../../assets/images/tours/tourstyles-adventure.webp";
import img9 from "./../../assets/images/tours/pic-tour-style-08.webp";
import img10 from "./../../assets/images/tours/tourstyles-cruising.png";
import img11 from "./../../assets/images/tours/tourstyles-short-trips.webp";
import img12 from "./../../assets/images/tours/tourstyles-culinary.webp";
import img13 from "./../../assets/images/tours/tourstyles-homestay.jpg";
import img14 from "./../../assets/images/tours/tourstyles-undiscovered.jpg";

const ToursBody = () => {
  return (
    <>
      <div className="text-center mt-12 z-10">
        <div>
          <Image src={icon} width={70} height={70} alt="img" />
        </div>
        <div className="lg:py-12 p-8 -mt-10 ">
          <h2 className="text-3xl tracking-wide text-[#444444] mb-4">
            ASIA FOR EVERYONE
          </h2>
          <hr className="lg:w-1/6 w-1/2 mx-auto border-[1.3px] border-[#dbdbdb] bg-[#dbdbdb]" />
          <p className="font-semibold lg:w-11/12 w-full mx-auto mb-10 mt-5 lg:text-2xl text-lg text-[#5e6163]">
            Asia is a collection of nations whose kaleidoscopic range of natural
            and cultural assets provide the ultimate canvas for creating
            lifelong memories. We've carefully crafted these tour styles to
            highlight different elements of Asia while remaining true to the
            soul of each destination and including authentic local experiences
            in abundance.
          </p>
        </div>
      </div>
      <div className="bg-white">
        <div className="grid grid-rows-1">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 px-3">
            <div>
              <div className="relative h-64 w-full cursor-pointer">
                <div className="">
                  <Image src={img1} alt="" layout="fill" />
                </div>
                <div className="flex flex-col-reverse space-y-2 p-2 font-semibold justify-center items-center bg-black opacity-60 hover:scale-75 hover:border-4 hover:border-primary hover:rounded-md text-white absolute bottom-0 w-full h-full transition-all">
                  <h1 className="text-xl">CLASSIC JOURNEYS</h1>
                  <p>
                    <Image src={icon1} alt="" height={40} width={50} />
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="relative h-64 w-full cursor-pointer">
                <div className="">
                  <Image src={img2} alt="" layout="fill" />
                </div>
                <div className="flex flex-col-reverse justify-center space-x-2 py-2 items-center font-semibold bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                  <h1 className="text-xl uppercase">beach</h1>
                  <p>
                    <Image src={icon2} alt="" height={40} width={40} />
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="relative h-64 w-full cursor-pointer">
                <div className="">
                  <Image src={img4} alt="img3" layout="fill" />
                </div>
                <div className="flex flex-col-reverse space-y-2 p-2 font-semibold justify-center items-center bg-black opacity-60 hover:scale-75 hover:border-4 hover:border-primary hover:rounded-md text-white absolute bottom-0 w-full h-full transition-all">
                  <h1 className="text-xl uppercase">nature & wildlife</h1>
                  <p>
                    <Image src={icon3} alt="img3" height={40} width={40} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 px-3 my-4">
            <div>
              <div className="relative h-64 w-full cursor-pointer">
                <div className="">
                  <Image src={img5} alt="" layout="fill" />
                </div>
                <div className="flex flex-col-reverse space-y-2 p-2 font-semibold justify-center items-center bg-black opacity-60 hover:scale-75 hover:border-4 hover:border-primary hover:rounded-md text-white absolute bottom-0 w-full h-full transition-all">
                  <h1 className="text-xl">ACTIVE TRAVELS</h1>
                  <p>
                    <Image src={icon4} alt="" height={40} width={40} />
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="relative h-64 w-full cursor-pointer">
                <div className="">
                  <Image src={img6} alt="" layout="fill" />
                </div>
                <div className="flex flex-col-reverse justify-center space-x-2 py-2 items-center font-semibold bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                  <h1 className="text-xl uppercase">family</h1>
                  <p>
                    <Image src={icon5} alt="" height={40} width={40} />
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="relative h-64 w-full cursor-pointer">
                <div className="">
                  <Image src={img7} alt="img3" layout="fill" />
                </div>
                <div className="flex flex-col-reverse space-y-2 p-2 font-semibold justify-center items-center bg-black opacity-60 hover:scale-75 hover:border-4 hover:border-primary hover:rounded-md text-white absolute bottom-0 w-full h-full transition-all">
                  <h1 className="text-xl uppercase">experiences</h1>
                  <p>
                    <Image src={icon6} alt="img3" height={40} width={40} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 px-3">
            <div>
              <div className="relative h-64 w-full cursor-pointer">
                <div className="">
                  <Image src={img8} alt="" layout="fill" />
                </div>
                <div className="flex flex-col-reverse space-y-2 p-2 font-semibold justify-center items-center bg-black opacity-60 hover:scale-75 hover:border-4 hover:border-primary hover:rounded-md text-white absolute bottom-0 w-full h-full transition-all">
                  <h1 className="text-xl">ADVENTURES</h1>
                  <p>
                    <Image src={icon7} alt="" height={40} width={40} />
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="relative h-64 w-full cursor-pointer">
                <div className="">
                  <Image src={img9} alt="" layout="fill" />
                </div>
                <div className="flex flex-col-reverse justify-center space-x-2 py-2 items-center font-semibold bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                  <h1 className="text-xl uppercase">golf</h1>
                  <p>
                    <Image src={icon8} alt="" height={40} width={30} />
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="relative h-64 w-full cursor-pointer">
                <div className="">
                  <Image src={img10} alt="img3" layout="fill" />
                </div>
                <div className="flex flex-col-reverse space-y-2 p-2 font-semibold justify-center items-center bg-black opacity-60 hover:scale-75 hover:border-4 hover:border-primary hover:rounded-md text-white absolute bottom-0 w-full h-full transition-all">
                  <h1 className="text-xl uppercase">cruising</h1>
                  <p>
                    <Image src={icon9} alt="img3" height={40} width={40} />
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

export default ToursBody;
