import Image from "next/image";
import img2 from "./../../assets/images/responsible/pic-respons-03.jpg";
import img3 from "./../../assets/images/responsible/pic-respons-04.jpg";
import img1 from "./../../assets/images/responsible/pic-respons-05.jpg";
import CommitmentRow from "./CommitmentRow";

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
      <div>
        <CommitmentRow
          header={[
            "TIMELY AND PROFESSIONAL SERVICE",
            "TRAINING AND QUALITY",
            "DEDICATION & EXPERTISE",
          ]}
          title={[
            "A timely response",
            "A professional organization",
            "High quality service on the ground",
            "Consultative and well trained staff",
            "Specialized teams and personal service",
            "An investment in product development",
          ]}
          pera={[
            "We know that a fast response is imperative for success in our industry and, as your partners on the ground, we are committed to responding to every inquiry the same day or, at the most, within 48 hours.",
            "We use the internationally recognized and fully-integrated travel software 'TOURPLAN.' Our reservations and operations teams receive complete and regular professional training while our organization allows us to deliver fast and consistent service and seamless itineraries through each of our destinations.",
            "From the use of high-quality vehicles to our thorough guide-training programs, we are committed to providing the highest quality of service possible. Our preferred suppliers are all subject to regular and rigorous training programs to ensure that quality is always at a high standard.",
            "We ensure our teams are the most knowledgeable and qualified in the business through industry-leading, comprehensive training programs.",
            "Whether it be about MICE, Adventure, Luxury or general travel, we have specialized teams in each destination waiting to deliver personalized services tailored specifically to each request.",
            "Because authenticity and innovation are at the heart of DMC, we have specialized product teams in each of our destinations. With local experts who live and breathe our destinations, we ensure that all of our travel products are as authentic as possible.",
          ]}
        />
      </div>
    </>
  );
};

export default Commitment;
