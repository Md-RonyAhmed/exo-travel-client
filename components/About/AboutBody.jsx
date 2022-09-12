import AboutDMC from "../Home/AboutDMC";
import Image from "next/image";
import img from "./../../assets/images/about/pic-aboutus-1.webp"

const AboutBody = () => {
     return (
       <>
         <AboutDMC
           title={"ABOUT DMC TRAVEL"}
           pera={
             "Inspired by the life-altering vistas, charming cultures, and vibrant cities of Asia, DMC's vision has always been to empower others to discover the same 'magic of Asia' that began our journey some two decades ago."
           }
           btnTitle={"Learn More"}
         />
        
         <AboutDMC
           title={"OUR JOURNEY"}
           pera={
             "From being the first foreign-owned company to receive a tourism operating license in Vietnam (1993) to opening our 10th country in 2017, our passion for travel in Asia has driven us to become one of the region's most reputable DMCs."
           }
           btnTitle={"View full story"}
         />
         <div className="mt-10">
           <Image src={img} alt="img"></Image>
         </div>
         <AboutDMC
           title={"PEOPLE WITH PASSION"}
           pera={
             "Simply put, we love what we do. Our team of in-destination travel experts and locals throughout Asia all have one thing in common: an insatiable appetite and passion for travel, culture and adventure, and for empowering others to discover the same."
           }
           btnTitle={"our people"}
         />
       </>
     );
};

export default AboutBody;