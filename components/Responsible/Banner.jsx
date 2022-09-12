/* eslint-disable react/no-unescaped-entities */
import bgImage from "./../../assets/images/responsible/responsible-bg2_1.jpg";

const Banner = () => {
  return (
    <>
      <div
        className="hero h-96 "
        style={{ backgroundImage: `url('${bgImage.src}')` }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="space-y-4">
          <h1 className="lg:text-7xl md:text-6xl font-semibold text-5xl text-white text-center">
            We are responsible..
          </h1>
          <p className="text-2xl font-semibold text-white text-center">
            Don't worry?
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
