import Image from "next/image";
import img2 from "./../../assets/images/responsible/pic-respons-03.jpg";
import img3 from "./../../assets/images/responsible/pic-respons-04.jpg";
import img1 from "./../../assets/images/responsible/pic-respons-05.jpg";

const Commitment = () => {
  return (
    <>
      <div className="mt-10 text-center">
        <div className="lg:py-12 p-8 -mt-10 ">
          <h2 className="text-3xl tracking-wide text-[#444444] mb-4">
            OUR COMMITMENT TO YOU
          </h2>
          <hr className="lg:w-3/12 w-1/2 mx-auto border-[1.3px] border-[#dbdbdb] bg-[#dbdbdb]" />
          <p className="w-full mx-auto mb-10 mt-5 lg:text-2xl text-lg text-[#5e6163]">
            DMC Travel understands the benefits of a good working relationship.
            With all our clients, we share a common commitment to quality and
            the delivery of authentic travel experiences.Our high level of
            service and professionalism will never be compromised, regardless of
            the client or destination. To that end, we offer the following:
          </p>
        </div>
      </div>
    </>
  );
};

export default Commitment;