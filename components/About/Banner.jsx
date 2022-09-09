import bgImage from "./../../assets/images/about/header-aboutus-humanlogo.jpg";

const Banner = () => {
  return (
    <>
      <div
        className="hero h-80 md:mt-10 lg:mt-10 mt-16"
        style={{ backgroundImage: `url('${bgImage.src}')` }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="space-y-4">
          <h1 className="lg:text-7xl md:text-6xl font-semibold text-5xl text-white text-center">
            About EXO Travels..
          </h1>
          <p className="text-2xl font-semibold text-white text-center">
            Where will you go?
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
