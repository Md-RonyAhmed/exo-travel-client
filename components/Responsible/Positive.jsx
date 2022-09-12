/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import icon from "./../../assets/images/responsible/icon-reponstible-main.webp";

const Positive = () => {
  return (
    <>
      <div className="text-center mt-12 z-10">
        <div>
          <Image src={icon} width={70} height={70} alt="img"></Image>
        </div>
        <div className="lg:py-12 p-8 -mt-10 ">
          <h2 className="text-3xl tracking-wide text-[#444444] mb-4">
            MAKING A POSITIVE IMPACT
          </h2>
          <hr className="lg:w-4/12 w-1/2 mx-auto border-[1.3px] border-[#dbdbdb] bg-[#dbdbdb]" />
          <p className="w-full mx-auto mb-10 mt-5 lg:text-2xl text-lg text-[#5e6163]">
            Responsible travel promotes the sustainable development of
            destinations by minimising negative impacts and maximising positive
            ones for both the environments we operate in, and the people living
            in them. A steadfast commitment to responsible travel is vital to
            our ethos.
          </p>
          <p className="w-full mx-auto mb-10 mt-5 lg:text-2xl text-lg px-4 text-[#5e6163]">
            To help us stay true to this ethos, we work with Trave life. Its
            certification process provides stringent guidelines for us to
            follow. To further guide our responsible practices, we created the
            DMC Foundation. Operating independently of DMC Travel, the
            Foundation actively supports a wide range of sustainability programs
            and audits DMC Travel to keep us on track with global sustainability
            measures.
          </p>
        </div>
      </div>
    </>
  );
};

export default Positive;
