import Link from "next/link";
import { BsSearch, BsChatSquareText, BsEnvelope } from "react-icons/bs";
const Banner = () => {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover "
            src="https://www.exotravel.com/assets/img/video/Website_Background_%283%29_%285%29.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="video-content">
          <h1 className="font-bold text-5xl lg:text-7xl mb-16">
            EXPERIENCE OUR ASIA
          </h1>
          <div className="grid grid-cols-3 gap-2 w-11/12 mx-auto">
            <div>
              <div className="form-control text-white">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search DMC.."
                    className="input input-bordered w-full text-gray-700 text-base bg-white rounded-none"
                  />
                  <button className="btn btn-primary absolute top-0 right-0 rounded-none text-base bg-green-400 hover:bg-primary">
                    <p className="text-xl text-white">
                      <BsSearch />
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full bg-[#a4a4a4] h-full flex justify-center items-center hover:bg-primary cursor-pointer">
                <p className="text-xl pt-1">
                  <BsChatSquareText />
                </p>
                <p className="font-semibold text-lg uppercase cursor-pointer ml-2">
                  <label htmlFor="my-modal-3" className="cursor-pointer">
                    Get in touch
                  </label>
                </p>
              </div>
            </div>
            <div>
              <div className="w-full bg-[#a4a4a4] h-full flex justify-center items-center hover:bg-primary cursor-pointer">
                <p className="text-xl -rotate-45">
                  <BsEnvelope />
                </p>
                <Link href="/#sub">
                  <a className="ml-2 font-semibold text-lg uppercase">
                    newsletter
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
