import Image from "next/image";
import ResponsibleRow from "../Responsible/ResponsibleRow";
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
      <div>
        <ResponsibleRow
          head1={"TIMELY AND PROFESSIONAL SERVICE"}
          head2={"LOCAL CHARITIES"}
          head3={"COMMUNITY BASED TOURISM"}
          body1={
            "A timely response: We know that a fast response is imperative for success in our industry and, as your partners on the ground, we are committed to responding to every inquiry the same day or, at the most, within 48 hours. A professional organisation: We use the internationally recognised and fully-integrated travel software 'TOURPLAN.' Our reservations and operations teams receive complete and regular professional training while our organisation allows us to deliver fast and consistent service and seamless itineraries through each of our destinations."
          }
          body2={
            "By supporting local charities, enterprises and organizations that contribute to environmental and cultural causes, we're able to maximize the benefits that tourism has on locals and their economy. Whenever possible, we encourage guests to partake in sustainable tourism activities, shop at fair-trade shops, or dine in restaurants run by vocational institutions that train youths and disadvantaged peoples. Additionally, we regularly take part in charity fundraising events such as the Angkor Wat Marathon, and encourage clients and travelers to do the same."
          }
          body3={
            "By actively supporting community-based tourism projects alongside local and international development organizations, DMC helps generate revenue in remote and impoverished communities in Asia. These projects allow visitors to engage in unique and authentic cultural experiences while simultaneously helping to preserve local traditions, improve welfare and support environmental preservation."
          }
          btn={"More Information"}
        />
      </div>
    </>
  );
};

export default Commitment;
