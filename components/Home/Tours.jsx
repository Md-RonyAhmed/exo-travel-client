/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import icon from "./../../assets/images/tours/icon-place-we-love.svg";
import tour1 from "./../../assets/images/tours/philipp-trubchenko-bXszQFO-Src-unsplash-min.jpg";
import tour2 from "./../../assets/images/tours/nick-fewings-rpjfrpCFkDo-unsplash-min.jpg";
const Tours = () => {
  return (
    <>
      <div className="text-center mt-12 z-10 mb-0">
        <div>
          <Image src={icon} width={70} height={70} alt="img"></Image>
        </div>
        <div className="bg-[#dbdbdb] lg:py-12 p-8 -mt-10 ">
          <h2 className="text-3xl tracking-wide text-[#444444] mb-4">
            TOURS WE LOVE
          </h2>
          <hr className="lg:w-1/6 w-1/2 mx-auto border-[1.3px] border-white bg-white" />
          <p className="lg:w-4/5 w-full mx-auto mb-10 mt-5 lg:text-2xl text-lg text-[#5e6163]">
            Here at EXO, we're all travelers at heart. This is reflected in the
            exciting and immersive range of tours across Asia we've meticulously
            crafted. Here's a shortlist of tours we're especially proud of to
            fuel some wanderlust.
          </p>
        </div>
      </div>
      <div className="bg-[#dbdbdb] pb-16">
        <div className=" grid grid-rows-1 mx-4">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div className="h-72 relative cursor-pointer hover:opacity-90">
              <div>
                <div className="">
                  <Image src={tour1} alt="myanmar" layout="fill" />
                </div>
                <div className="absolute top-0 ml-12 mt-3 text-white">
                  <h1 className="text-center font-bold text-2xl">
                    Trek the Headhunters Trail
                  </h1>
                  <p className="text-center font-semibold text-lg">Malaysia</p>
                </div>
                <div className="absolute bottom-0 ml-24 text-white">
                  <hr />
                  <h1 className="text-center font-bold mb-2 text-xl">
                    4 DAYS / 3 NIGHTS
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-72 relative cursor-pointer hover:opacity-90">
              <div>
                <div className="">
                  <Image src={tour2} alt="myanmar" layout="fill" />
                </div>
                <div className="absolute top-0 ml-12 mt-3 text-white">
                  <h1 className="text-center font-bold text-2xl">
                    Trek the Headhunters Trail
                  </h1>
                  <p className="text-center font-semibold text-lg">Malaysia</p>
                </div>
                <div className="absolute bottom-0 ml-24 text-white">
                  <hr />
                  <h1 className="text-center font-bold mb-2 text-xl">
                    4 DAYS / 3 NIGHTS
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-72 relative cursor-pointer hover:opacity-90">
              <div>
                <div className="">
                  <Image src={tour1} alt="myanmar" layout="fill" />
                </div>
                <div className="absolute top-0 ml-12 mt-3 text-white">
                  <h1 className="text-center font-bold text-2xl">
                    Trek the Headhunters Trail
                  </h1>
                  <p className="text-center font-semibold text-lg">Malaysia</p>
                </div>
                <div className="absolute bottom-0 ml-24 text-white">
                  <hr />
                  <h1 className="text-center font-bold mb-2 text-xl">
                    4 DAYS / 3 NIGHTS
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-72 relative cursor-pointer hover:opacity-90">
              <div>
                <div className="">
                  <Image src={tour2} alt="myanmar" layout="fill" />
                </div>
                <div className="absolute top-0 ml-12 mt-3 text-white">
                  <h1 className="text-center font-bold text-2xl">
                    Trek the Headhunters Trail
                  </h1>
                  <p className="text-center font-semibold text-lg">Malaysia</p>
                </div>
                <div className="absolute bottom-0 ml-24 text-white">
                  <hr />
                  <h1 className="text-center font-bold mb-2 text-xl">
                    4 DAYS / 3 NIGHTS
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-72 relative cursor-pointer hover:opacity-90">
              <div>
                <div className="">
                  <Image src={tour1} alt="myanmar" layout="fill" />
                </div>
                <div className="absolute top-0 ml-12 mt-3 text-white">
                  <h1 className="text-center font-bold text-2xl">
                    Trek the Headhunters Trail
                  </h1>
                  <p className="text-center font-semibold text-lg">Malaysia</p>
                </div>
                <div className="absolute bottom-0 ml-24 text-white">
                  <hr />
                  <h1 className="text-center font-bold mb-2 text-xl">
                    4 DAYS / 3 NIGHTS
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-72 relative cursor-pointer hover:opacity-90">
              <div>
                <div className="">
                  <Image src={tour2} alt="myanmar" layout="fill" />
                </div>
                <div className="absolute top-0 ml-12 mt-3 text-white">
                  <h1 className="text-center font-bold text-2xl">
                    Trek the Headhunters Trail
                  </h1>
                  <p className="text-center font-semibold text-lg">Malaysia</p>
                </div>
                <div className="absolute bottom-0 ml-24 text-white">
                  <hr />
                  <h1 className="text-center font-bold mb-2 text-xl">
                    4 DAYS / 3 NIGHTS
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tours;
