import logo from "../assets/harrybaker-logo.svg";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [navs, setNavs] = useState([
    { name: "Home", route: "/" },
    { name: "Courses", route: "/courses" },
    { name: "About", route: "/about" },
    { name: "Blog", route: "/blog" },
    { name: "Contact", route: "/contact" },
  ]);
  const [navOpen, setNavOpen] = useState(false);

  const NavItem = ({ nav }) => {
    return (
      <Link to={nav.route}>
        <li
          className={`flex cursor-pointer items-center space-x-2 ${
            location.pathname === nav.route
              ? "hover:text-black"
              : "hover:text-primary"
          }`}
        >
          <span>{nav.name}</span>
          {nav.name === "Courses" && (
            <span>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </li>
      </Link>
    );
  };

  return (
    <div className="w-full max-h-[10vh">
      <div className="w-full flex justify-between items-center p-[10px]  lg:px-[11vw] lg:py-[10px]">
        <div className="w-[50%] h-[100%] lg:w-[15vw]">
          <img src={logo} alt="logo" />
        </div>
        <div
          className="lg:hidden bg-[#EAF2FD] p-[5.5px] flex items-center"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <svg
              className="w-6 h-6 text-primary "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className=" w-6 h-6 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="hidden lg:flex flex-1 justify-end mr-[40px] ml-[10px] text-sm">
          <ul className="flex justify-between items-center space-x-[40px]">
            {navs.map((nav) => (
              <NavItem nav={nav} key={nav.name} />
            ))}
          </ul>
        </div>
        <button className="hidden lg:block text-white bg-secondary py-[12px] font-bold px-[20px] text-sm rounded-full">
          View Training schedule
        </button>
      </div>

      {navOpen && (
        <ul className="w-full flex flex-col lg:hidden">
          {[...navs, { name: "Training Schedule", route: "/training" }].map(
            (nav) => (
              <Link to={nav.route} key={nav.name}>
                <li
                  className={`${
                    location.pathname === nav.route && "bg-primary text-white"
                  } py-[10px] px-[20px] my-[5px] text-sm font-bold`}
                >
                  {nav.name}
                </li>
              </Link>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
