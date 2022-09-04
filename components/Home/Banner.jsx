
const Banner = () => {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src="https://www.exotravel.com/assets/img/video/Website_Background_%283%29_%285%29.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="video-content">
          <h1 className="font-bold text-7xl">EXPERIENCE OUR ASIA</h1>
        </div>
      </section>
    </>
  );
};

export default Banner;
