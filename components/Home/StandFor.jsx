/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import icon from "./../../assets/images/stand/icon-about-exo-2.svg";
import about from "./../../assets/images/stand/about-exo-2.webp";
import responsible from "./../../assets/images/stand/responsible.jpg";
import abouticon from "./../../assets/images/stand/icon-about-exo.svg";
import responsibleicon from "./../../assets/images/stand/icon-responsible-home.svg";
const StandFor = () => {
  return (
    <>
      <div className="text-center mt-12 z-10">
        <div>
          <Image src={icon} width={70} height={70} alt="img"></Image>
        </div>
        <div className=" lg:py-12 p-8 -mt-10 ">
          <h2 className="text-3xl tracking-wide text-[#444444] mb-4">
            WHAT WE STAND FOR
          </h2>
          <hr className="lg:w-1/6 w-1/2 mx-auto border-[1.3px] border-[#5e6163] bg-[#5e6163]" />
          <p className="lg:w-11/12 w-full mx-auto mt-5 lg:text-2xl text-lg text-[#5e6163]">
            Across each of our ten destinations, we operate under the same
            guiding principals. Besides providing unique and innovative
            experiences for travelers, we are dedicated to the task of remaining
            responsible and sustainable in all that we do. Our mission is to
            always leave places better than we've found them.
          </p>
        </div>
      </div>
      <div className="px-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 px-3 my-5">
          <div>
            <div className="relative cursor-pointer hover:opacity-90">
              <div className="h-[250px] w-full">
                <Image src={about} alt="about" height={250} width={600} />
              </div>
              <div className="flex justify-between  items-center py-8 px-5 font-semibold text-white absolute top-0 w-full">
                <h1 className="text-3xl font-bold">About DMC</h1>
                <p>
                  <Image
                    src={abouticon}
                    alt="abouticon"
                    height={60}
                    width={60}
                  />
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative cursor-pointer hover:opacity-90">
              <div className="h-[250px] w-full">
                <Image
                  src={responsible}
                  alt="responsible"
                  height={239}
                  width={560}
                />
              </div>
              <div className="flex justify-between  items-center py-8 px-6 font-semibold text-white absolute top-0 w-full">
                <h1 className="text-3xl font-bold">Responsible</h1>
                <p>
                  <Image
                    src={responsibleicon}
                    alt="responsibleicon"
                    height={60}
                    width={60}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StandFor;
