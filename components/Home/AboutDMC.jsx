/* eslint-disable react/no-unescaped-entities */

const AboutDMC = ({ title, pera, btnTitle }) => {
  return (
    <div>
      <div className="bg-white lg:pt-20 py-8 text-center">
        <h2 className="text-3xl tracking-wide text-[#444444] mb-4">{title}</h2>
        <hr className="lg:w-1/6 w-1/2 mx-auto border-[1.3px] border-gray-300 bg-gray-300" />
        <p className="lg:w-11/12 w-full mx-auto mb-10 mt-5 lg:text-2xl text-lg text-gray-700">
          {pera}
        </p>
        <button className="btn btn-primary rounded px-10 hover:text-white text-primary bg-white pb-1 text-2xl font-thin capitalize">
          {btnTitle}
        </button>
      </div>
    </div>
  );
};

export default AboutDMC;
