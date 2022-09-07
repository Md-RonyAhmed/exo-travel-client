/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import icon from "./../../assets/images/others/icon-our-asia.svg";

const ToursBody = () => {
     return (
       <>
         <div className="text-center mt-12 z-10">
           <div>
             <Image src={icon} width={70} height={70} alt="img" />
           </div>
           <div className="lg:py-12 p-8 -mt-10 ">
             <h2 className="text-3xl tracking-wide text-[#444444] mb-4">
               ASIA FOR EVERYONE
             </h2>
             <hr className="lg:w-1/6 w-1/2 mx-auto border-[1.3px] border-[#dbdbdb] bg-[#dbdbdb]" />
             <p className="font-semibold lg:w-11/12 w-full mx-auto mb-10 mt-5 lg:text-2xl text-lg text-[#5e6163]">
               Asia is a collection of nations whose kaleidoscopic range of
               natural and cultural assets provide the ultimate canvas for
               creating lifelong memories. We've carefully crafted these tour
               styles to highlight different elements of Asia while remaining
               true to the soul of each destination and including authentic
               local experiences in abundance.
             </p>
           </div>
         </div>
       </>
     );
};

export default ToursBody;