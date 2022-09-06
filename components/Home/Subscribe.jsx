/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

const Subscribe = () => {
  return (
    <div className="text-center mt-0 z-10">
      <div className="bg-[#dbdbdb] lg:py-12 lg:p-8">
        <h2 className="text-3xl tracking-wide text-[#444444] mb-4">
          SUBSCRIBE TO OUR NEWSLETTER
        </h2>
        <hr className="lg:w-3/12 w-1/2 mx-auto border-[1.3px] border-white bg-white" />
        <p className="lg:w-4/5 w-full mx-auto mb-10 mt-5 lg:text-2xl text-lg text-[#5e6163]">
          The world of EXO Travel is always evolving. Stay in touch and we'll
          keep you up to speed.
        </p>
        <div className="form-control text-white h-24">
          <div className="lg:relative w-11/12">
            <input
              type="text"
              placeholder="Enter your email..."
              className="input input-bordered w-1/2 mx-auto h-16 rounded-sm text-[#5e6163] text-lg rounded-r-none"
            />
            <button className="btn btn-primary text-xl text-white mx-auto lg:absolute rounded-sm h-16 top-0 rounded-l-none bg-[#444444] hover:bg-primary">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
