import Link from "next/link";

const Navbar = ({ children }) => {
  const navbar = (
    <>
      <li>
        <Link href="/">DESTINATIONS</Link>
      </li>
      <li>
        <Link href="/">TOUR STYLES</Link>
      </li>
      <li>
        <Link href="/">ABOUT</Link>
      </li>
      <li>
        <Link href="/">RESPONSIBLE</Link>
      </li>
      <li>
        <Link href="/blogs">BLOGS</Link>
      </li>
      <li className="bg-primary rounded-md mr-6">
        <Link href="/">ENQUIRE</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="drawer drawer-end">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="w-full flex navbar bg-transparent justify-between items-center fixed top-0 z-50 py-4">
            <div>
              <div className="flex text-6xl text-primary font-bold tracking-wider pl-6">
                EXO
              </div>
            </div>

            <div className="lg:hidden flex-1 justify-end">
              <label htmlFor="sidebar" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current text-white"
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
              <ul className="menu menu-horizontal p-0 m-0 font-semibold tracking-widest text-white">{navbar}</ul>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 font-semibold">
            {navbar}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
