import Image from "next/image";
import icon from "./../../assets/images/responsible/icon-reponstible-main.webp";

const DmcExperience = () => {
  return (
    <>
      <div className="text-center mt-12 z-10 bg-white">
        <div>
          <Image src={icon} width={70} height={70} alt="img"></Image>
        </div>
        <div className="lg:py-12 p-8 -mt-10 ">
          <h2 className="text-3xl tracking-wide text-[#444444] mb-4">
            THE DMC EXPERIENCE
          </h2>
          <hr className="lg:w-2/12 w-1/2 mx-auto border-[1.3px] border-[#dbdbdb] bg-[#dbdbdb]" />
          <p className="w-full mx-auto mb-10 mt-5 lg:text-2xl text-lg text-[#5e6163]">
            DMC Travel crafts one-of-a-kind experiences in Asia that excite,
            challenge, and educate. We specifically employ travel enthusiasts
            with extensive knowledge within the region to ensure that the
            experience and service you receive is the best in the business.
          </p>
        </div>
      </div>
    </>
  );
};

export default DmcExperience;
