import bgImage from "./../../assets/images/about/header-about-whytravel.jpg";

const Banner = () => {
  return (
    <>
      <div
        className="hero h-96"
        style={{ backgroundImage: `url('${bgImage.src}')` }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="space-y-4">
          <h1 className="lg:text-7xl md:text-6xl font-semibold text-5xl text-white text-center">
            Why Travel with DMC?
          </h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
