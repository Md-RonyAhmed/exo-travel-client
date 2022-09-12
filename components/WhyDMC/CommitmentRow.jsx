import Image from "next/image";
import img2 from "./../../assets/images/responsible/pic-respons-03.jpg";
import img3 from "./../../assets/images/about/pic-whytravel-03.webp";
import img1 from "./../../assets/images/about/pic-whytravel-01.webp";

const CommitmentRow = ({ header, title, pera }) => {
  return (
    <>
      <div className="flex px-6 justify-center">
        <div className="w-1/2">
          <Image src={img1} alt="img1"></Image>
        </div>
        <div className="w-1/2 mt-12 space-y-6">
          <div>
            <h1 className="text-2xl font-semibold">{header[0]}</h1>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-primary">{title[0]}</h2>
            <p className="text-lg">{pera[0]}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">{title[1]}</h3>
            <p className="text-lg">{pera[1]}</p>
          </div>
        </div>
      </div>
      <div className="flex px-6">
        <div className="w-1/2 mt-12 space-y-6">
          <div>
            <h1 className="text-2xl font-semibold">{header[1]}</h1>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-primary">{title[2]}</h2>
            <p className="text-lg">{pera[2]}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">{title[3]}</h3>
            <p className="text-lg">{pera[3]}</p>
          </div>
        </div>
        <div className="w-1/2">
          <Image src={img2} alt="img1"></Image>
        </div>
      </div>
      <div className="flex px-6">
        <div className="w-1/2">
          <Image src={img3} alt="img1"></Image>
        </div>
        <div className="w-1/2 mt-12 space-y-6">
          <div>
            <h1 className="text-2xl font-semibold">{header[2]}</h1>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-primary">{title[4]}</h2>
            <p className="text-lg">{pera[4]}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">{title[5]}</h3>
            <p className="text-lg">{pera[5]}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommitmentRow;
