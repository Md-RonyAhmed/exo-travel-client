import Image from "next/image";
import icon from "./../../assets/images/others/pic-whytravel.webp";

const Tailor = () => {
     return (
       <>
         <div className="text-center z-10 bg-[#dbdbdb]">
           <div>
             <Image src={icon} alt="img"></Image>
           </div>
           <div className="lg:py-12 p-8 mt-8">
             <h2 className="text-3xl tracking-wide text-[#444444] mb-4">
               TAILOR-MADE ITINERARIES
             </h2>
             <hr className="lg:w-3/12 w-1/2 mx-auto border-[1.3px] border-white bg-white" />
             <p className="w-full mx-auto mb-10 mt-5 lg:text-2xl text-lg text-[#5e6163]">
               Utilizing the expert knowledge of our in-country staff, we
               observe a philosophy of bespoke travel, creating custom
               itineraries for each individual client. Because of this, we are
               the first-choice destination management company for clients with
               specialist interests requiring highly-skilled agents and
               knowledgeable people on the ground in destinations.
             </p>
           </div>
         </div>
       </>
     );
};

export default Tailor;