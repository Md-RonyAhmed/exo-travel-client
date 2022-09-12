import Image from "next/image";
import img2 from './../../assets/images/responsible/pic-respons-03.jpg'
import img3 from './../../assets/images/responsible/pic-respons-04.jpg'
import img1 from './../../assets/images/responsible/pic-respons-05.jpg'

const ResponsibleRow = ({head1,head2,head3,body1,body2,body3,btn}) => {
     return (
       <>
         <div className="flex px-6 justify-center">
           <div className="w-1/2">
             <Image src={img1} alt="img1"></Image>
           </div>
           <div className="w-1/2 mt-12 space-y-8">
             <p className=" text-2xl font-semibold">{head1}</p>
             <p className="text-lg">{body1}</p>
             <button className="btn btn-primary rounded px-10 hover:text-white text-primary bg-white pb-1 text-2xl font-thin capitalize">
               {btn}
             </button>
           </div>
         </div>
         <div className="flex px-6">
           <div className="w-1/2 pt-12 mr-5 space-y-8">
             <p className=" text-2xl font-semibold">{head2}</p>
             <p className="text-lg">{body2}</p>
             <button className="btn btn-primary rounded px-10 hover:text-white text-primary bg-white pb-1 text-2xl font-thin capitalize">
               {btn}
             </button>
           </div>
           <div className="w-1/2">
             <Image src={img2} alt="img1"></Image>
           </div>
         </div>
         <div className="flex px-6">
           <div className="w-1/2">
             <Image src={img3} alt="img1"></Image>
           </div>
           <div className="w-1/2 pt-12 space-y-8">
             <p className=" text-2xl font-semibold">{head3}</p>
             <p className="text-lg">{body3}</p>
             <button className="btn btn-primary rounded px-10 hover:text-white text-primary bg-white pb-1 text-2xl font-thin capitalize">
               {btn}
             </button>
           </div>
         </div>
       </>
     );
};

export default ResponsibleRow;