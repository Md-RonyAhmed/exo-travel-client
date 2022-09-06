/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import icon from "./../../assets/images/others/icon-our-asia.svg";
import myicon from "./../../assets/images/asia/icon-myanmar.webp";
import vicon from "./../../assets/images/asia/icon-vietnam.webp";
import thicon from "./../../assets/images/asia/icon-thailand.webp";
import myanmar from "./../../assets/images/asia/Layer_2.webp";
import vietnam from "./../../assets/images/asia/Layer_3.webp"
import thailand from "./../../assets/images/asia/Layer_4.webp"

const OurAsia = () => {
  return (
    <>
      <div className="text-center mt-12 z-10">
        <div>
          <Image src={icon} width={70} height={70} alt="img"></Image>
        </div>
        <div className="bg-[#dbdbdb] lg:py-12 p-8 -mt-10 ">
          <h2 className="text-3xl tracking-wide text-[#444444] mb-4">
            OUR ASIA
          </h2>
          <hr className="lg:w-1/6 w-1/2 mx-auto border-[1.3px] border-white bg-white" />
          <p className="lg:w-4/5 w-full mx-auto mb-10 mt-5 lg:text-2xl text-lg text-[#5e6163]">
            Home to some of the world's most colorful cultures and exotic
            destinations, Asia is a veritable feast for the senses. Delve into
            our country selection to uncover a range of exhilarating, inspiring
            journeys.
          </p>
        </div>
      </div>
      <div className="bg-[#dbdbdb] pb-10">
        <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 px-3">
          <div>
            <div className="relative">
              <div className="h-[216px] w-full">
                <Image src={myanmar} alt="myanmar" height={512} />
              </div>
              <div className="flex space-x-2 p-2 font-semibold justify-center items-center bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                <h1 className="text-xl">MYANMAR</h1>
                <p>
                  <Image src={myicon} alt="myanmar" height={30} width={50} />
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-auto">
            <div className="relative">
              <div className="h-[216px] w-full">
                <Image src={vietnam} alt="vietnam" height={280} />
              </div>
              <div className="flex justify-center space-x-2 py-2 items-center font-semibold bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                <h1 className="text-xl uppercase">vietnam</h1>
                <p>
                  <Image src={vicon} alt="vietnam" height={30} width={50} />
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 col-auto">
            <div className="relative">
              <div className="h-[216px] w-full">
                <Image src={thailand} alt="thailand" height={334} />
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
        <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#dbdbdb] gap-3 px-3 my-5">
          <div>
            <div className="relative">
              <div className="h-[250px] w-full">
                <Image src={vietnam} alt="vietnam" height={323} />
              </div>
              <div className="flex justify-center space-x-2 py-2 items-center font-semibold bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                <h1 className="text-xl uppercase">vietnam</h1>
                <p>
                  <Image src={vicon} alt="vietnam" height={30} width={50} />
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="h-[250px] w-full">
                <Image src={thailand} alt="thailand" height={255} />
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
        <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 px-3 my-5 ">
          <div>
            <div className="relative">
              <div className="h-[216px] w-full">
                <Image src={myanmar} alt="myanmar" height={512} />
              </div>
              <div className="flex space-x-2 p-2 font-semibold justify-center items-center bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                <h1 className="text-xl">MYANMAR</h1>
                <p>
                  <Image src={myicon} alt="myanmar" height={30} width={50} />
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-auto">
            <div className="relative">
              <div className="h-[216px] w-full">
                <Image src={vietnam} alt="vietnam" height={280} />
              </div>
              <div className="flex justify-center space-x-2 py-2 items-center font-semibold bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                <h1 className="text-xl uppercase">vietnam</h1>
                <p>
                  <Image src={vicon} alt="vietnam" height={30} width={50} />
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 col-auto">
            <div className="relative">
              <div className="h-[216px] w-full">
                <Image src={thailand} alt="thailand" height={334} />
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
        <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#dbdbdb] gap-3 px-3 my-5">
          <div>
            <div className="relative">
              <div className="h-[250px] w-full">
                <Image src={vietnam} alt="vietnam" height={323} />
              </div>
              <div className="flex justify-center space-x-2 py-2 items-center font-semibold bg-black opacity-60 text-white absolute bottom-0 w-full hover:h-full transition-all">
                <h1 className="text-xl uppercase">vietnam</h1>
                <p>
                  <Image src={vicon} alt="vietnam" height={30} width={50} />
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="h-[250px] w-full">
                <Image src={thailand} alt="thailand" height={255} />
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
      </div>
    </>
  );
}

export default OurAsia