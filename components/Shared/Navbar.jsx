import Image from "next/image";
import Link from "next/link";
import useNav from "../../hooks/useNav";
import img1 from "./../../assets/images/destinations/vietnam.webp";
import img2 from "./../../assets/images/others/whyEXO.jpg";
const Navbar = ({ children }) => {
  const navBar = (
    <>
      <div className="dropdown dropdown-hover">
        <li tabIndex="0" className="hover:text-primary">
          <Link href="/destinations">
            <a>
              DESTINATIONS
              <svg
                className="fill-current ml-0 pl-0"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
          </Link>
        </li>
        <ul
          tabIndex="0"
          className="dropdown-content z-40 p-3 mt-1 bg-white text-black lg:w-[750px] w-full lg:h-[400px] h-full grid lg:grid-cols-5 lg:gap-3 gap-0 grid-cols-1"
        >
          <div>
            <div
              className="hero h-24 mt-3"
              style={{ backgroundImage: `url('${img1.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40 bg-primary brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:border-b-2">
                  Vietnam
                </h2>
              </div>
            </div>
            <div className="pt-3 text-sm text-center bg-white">
              <p className=" hover:text-primary cursor-pointer">All Tours</p>
              <p className=" hover:text-primary cursor-pointer">
                Preferred Hotels
              </p>
              <p className=" hover:text-primary cursor-pointer">Experiences</p>
            </div>
          </div>
          <div>
            <div
              className="hero h-24 mt-3"
              style={{ backgroundImage: `url('${img2.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40 bg-primary brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:border-b-2">
                  Vietnam
                </h2>
              </div>
            </div>
            <div className="pt-3 text-sm text-center">
              <p className=" hover:text-primary cursor-pointer">All Tours</p>
              <p className=" hover:text-primary cursor-pointer">
                Preferred Hotels
              </p>
              <p className=" hover:text-primary cursor-pointer">Experiences</p>
            </div>
          </div>
          <div>
            <div
              className="hero h-24 mt-3"
              style={{ backgroundImage: `url('${img1.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40 bg-primary brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:border-b-2">
                  Vietnam
                </h2>
              </div>
            </div>
            <div className="pt-3 text-sm text-center">
              <p className=" hover:text-primary cursor-pointer">All Tours</p>
              <p className=" hover:text-primary cursor-pointer">
                Preferred Hotels
              </p>
              <p className=" hover:text-primary cursor-pointer">Experiences</p>
            </div>
          </div>
          <div>
            <div
              className="hero h-24 mt-3"
              style={{ backgroundImage: `url('${img2.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40 bg-primary brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:border-b-2">
                  Vietnam
                </h2>
              </div>
            </div>
            <div className="pt-3 text-sm text-center">
              <p className=" hover:text-primary cursor-pointer">All Tours</p>
              <p className=" hover:text-primary cursor-pointer">
                Preferred Hotels
              </p>
              <p className=" hover:text-primary cursor-pointer">Experiences</p>
            </div>
          </div>
          <div>
            <div
              className="hero h-24 mt-3"
              style={{ backgroundImage: `url('${img1.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40 bg-primary brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:border-b-2">
                  Vietnam
                </h2>
              </div>
            </div>
            <div className="pt-3 text-sm text-center">
              <p className=" hover:text-primary cursor-pointer">All Tours</p>
              <p className=" hover:text-primary cursor-pointer">
                Preferred Hotels
              </p>
              <p className=" hover:text-primary cursor-pointer">Experiences</p>
            </div>
          </div>
          <div>
            <div
              className="hero h-24 mt-3"
              style={{ backgroundImage: `url('${img2.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40 bg-primary brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:border-b-2">
                  Vietnam
                </h2>
              </div>
            </div>
            <div className="pt-3 text-sm text-center">
              <p className=" hover:text-primary cursor-pointer">All Tours</p>
              <p className=" hover:text-primary cursor-pointer">
                Preferred Hotels
              </p>
              <p className=" hover:text-primary cursor-pointer">Experiences</p>
            </div>
          </div>
          <div>
            <div
              className="hero h-24 mt-3"
              style={{ backgroundImage: `url('${img1.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40 bg-primary brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:border-b-2">
                  Vietnam
                </h2>
              </div>
            </div>
            <div className="pt-3 text-sm text-center">
              <p className=" hover:text-primary cursor-pointer">All Tours</p>
              <p className=" hover:text-primary cursor-pointer">
                Preferred Hotels
              </p>
              <p className=" hover:text-primary cursor-pointer">Experiences</p>
            </div>
          </div>
          <div>
            <div
              className="hero h-24 mt-3"
              style={{ backgroundImage: `url('${img2.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40 bg-primary brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:border-b-2">
                  Vietnam
                </h2>
              </div>
            </div>
            <div className="pt-3 text-sm text-center">
              <p className=" hover:text-primary cursor-pointer">All Tours</p>
              <p className=" hover:text-primary cursor-pointer">
                Preferred Hotels
              </p>
              <p className=" hover:text-primary cursor-pointer">Experiences</p>
            </div>
          </div>
          <div>
            <div
              className="hero h-24 mt-3"
              style={{ backgroundImage: `url('${img1.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40 bg-primary brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:border-b-2">
                  Vietnam
                </h2>
              </div>
            </div>
            <div className="pt-3 text-sm text-center">
              <p className=" hover:text-primary cursor-pointer">All Tours</p>
              <p className=" hover:text-primary cursor-pointer">
                Preferred Hotels
              </p>
              <p className=" hover:text-primary cursor-pointer">Experiences</p>
            </div>
          </div>
          <div>
            <div
              className="hero h-24 mt-3"
              style={{ backgroundImage: `url('${img2.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40 bg-primary brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:border-b-2">
                  Vietnam
                </h2>
              </div>
            </div>
            <div className="pt-3 text-sm text-center">
              <p className=" hover:text-primary cursor-pointer">All Tours</p>
              <p className=" hover:text-primary cursor-pointer">
                Preferred Hotels
              </p>
              <p className=" hover:text-primary cursor-pointer">Experiences</p>
            </div>
          </div>
        </ul>
      </div>
      <div className="dropdown dropdown-hover">
        <li tabIndex="0" className=" hover:text-primary">
          <Link href="/tours">
            <a>
              TOUR STYLES
              <svg
                className="fill-current ml-0 pl-0"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
          </Link>
        </li>
        <ul
          tabIndex="0"
          className="dropdown-content z-40 p-3 mt-1 bg-white text-black w-[720px] h-[230px] grid lg:grid-cols-3 grid-cols-1"
        >
          <div className="pt-3 space-y-3 cursor-pointer">
            <p className=" hover:text-primary uppercase">classic journeys</p>
            <p className=" hover:text-primary uppercase">beach</p>
            <p className=" hover:text-primary uppercase">natural & wildlife</p>
            <p className=" hover:text-primary uppercase">active travel</p>
            <p className=" hover:text-primary uppercase">RESPONSIBLE travel</p>
          </div>
          <div className="pt-3 space-y-3 cursor-pointer">
            <p className=" hover:text-primary uppercase">family</p>
            <p className=" hover:text-primary uppercase">home stay</p>
            <p className=" hover:text-primary uppercase">honeymoon</p>
            <p className=" hover:text-primary uppercase">undiscovered asia</p>
          </div>
          <div className="pt-3 space-y-3 cursor-pointer">
            <p className=" hover:text-primary uppercase">cruising</p>
            <p className=" hover:text-primary uppercase">golf</p>
            <p className=" hover:text-primary uppercase">short trips</p>
            <p className=" hover:text-primary uppercase">culinary</p>
          </div>
        </ul>
      </div>
      <div className="dropdown dropdown-hover lg:dropdown-end">
        <li tabIndex="0" className="hover:text-primary">
          <Link href="/about">
            <a>
              ABOUT
              <svg
                className="fill-current ml-0 pl-0"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
          </Link>
        </li>
        <ul
          tabIndex="0"
          className="dropdown-content z-40 px-4 pt-3 mt-1 bg-white lg:w-[600px] w-full lg:h-[300px] h-full grid lg:grid-cols-3 lg:gap-2 gap-2 grid-cols-1"
        >
          <div>
            <div
              className="hero h-28 w-full"
              style={{ backgroundImage: `url('${img2.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40 brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:btn-link">
                  DMC story
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div
              className="hero h-28 w-full"
              style={{ backgroundImage: `url('${img2.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40 brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:btn-link">
                  DMC people
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div
              className="hero h-28 w-full"
              style={{ backgroundImage: `url('${img2.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40  brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:btn-link">
                  DMC values
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div
              className="hero h-28 w-full"
              style={{ backgroundImage: `url('${img2.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40 brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:btn-link">
                  why DMC
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div
              className="hero h-28 w-full"
              style={{ backgroundImage: `url('${img2.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40  brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:btn-link">
                  careers
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div
              className="hero h-28 w-full"
              style={{ backgroundImage: `url('${img2.src}')` }}
            >
              <div className="hero-overlay bg-opacity-40 brightness-50 cursor-pointer"></div>
              <div className="hero-content text-center text-neutral-content cursor-pointer">
                <h2 className="font-bold text-lg uppercase hover:btn-link">
                  awards
                </h2>
              </div>
            </div>
          </div>
        </ul>
      </div>
      <div className="dropdown dropdown-hover lg:dropdown-end">
        <li tabIndex="0" className=" hover:text-primary">
          <Link href="/responsible">
            <a>
              RESPONSIBLE
              <svg
                className="fill-current ml-0 pl-0"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
          </Link>
        </li>
        <ul
          tabIndex="0"
          className="dropdown-content z-40 p-3 mt-1 bg-white text-black w-[600px] h-[160px] grid lg:grid-cols-2 grid-cols-1"
        >
          <div className="pt-3 space-y-3 cursor-pointer">
            <p className=" hover:text-primary uppercase">
              responsible experiences
            </p>
            <p className=" hover:text-primary uppercase">responsible hotels</p>
            <p className=" hover:text-primary uppercase">RESPONSIBLE travel</p>
          </div>
          <div className="pt-3 space-y-3 cursor-pointer">
            <p className=" hover:text-primary uppercase">responsible tours</p>
            <p className=" hover:text-primary uppercase">carbon neutral</p>
          </div>
        </ul>
      </div>
      <li className="hover:text-primary">
        <Link href="/blogs">BLOGS</Link>
      </li>
      <li className="hover:bg-primary hover:text-white rounded-md mr-6">
          <label htmlFor="my-modal-3">ENQUIRE</label>
      </li>
    </>
  );
  const { nav } = useNav();
  return (
    <>
      <div className="drawer drawer-end h-full">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {children}
          <div
            className={`w-full flex navbar justify-between text-white items-center fixed top-0 z-50 transition-all ${
              nav && "bg-white shadow-md text-black"
            }`}
          >
            <div>
              <Link href={"/"}>
                <div
                  className={`flex text-6xl cursor-pointer text-white font-bold tracking-wider pl-6 ${
                    nav && "text-primary"
                  }`}
                >
                  DMC
                </div>
              </Link>
            </div>

            <div className="lg:hidden flex-1 justify-end mr-4">
              <label htmlFor="sidebar" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-none hidden lg:block">
              <ul
                className={`menu menu-horizontal p-0 m-0 font-semibold tracking-widest`}
              >
                {navBar}
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 font-semibold">
            {navBar}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
