

import bgImage from "./../assets/images/tours/styleheader-landingpage-opt2.jpg";
import Subscribe from "../components/Home/Subscribe";
const Blogs = () => {
  return (
    <>
      <div
        className="hero h-80 "
        style={{ backgroundImage: `url('${bgImage.src}')` }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="space-y-4">
          <h1 className="lg:text-7xl md:text-6xl font-semibold text-5xl text-white text-center">
            DMC Blogs..
          </h1>
          <p className="text-2xl font-semibold text-white text-center">
            Read what you like?
          </p>
        </div>
            </div>
            <div className="my-20 text-center">
                 <h2 className="text-3xl font-semibold mb-4">Coming soon...</h2>
                 <h2 className="text-xl font-semibold">Stay tune with us...</h2>
            </div>
            <Subscribe/>
    </>
  );
};

export default Blogs;