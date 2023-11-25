import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import favIcon from "../../public/cseclogo.jpg";

import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [navbar, setNavBar] = useState(false);
  return (
    <header className="max-container py-3 bg-blue-900 font-poppins md:fixed-nav">
      <nav className="flex justify-between items-center w-[82%] mx-auto ">
        <div className="z-50">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className="cursor-pointer"
          >
            <img
              src={favIcon}
              alt="logo"
              width={40}
              height={30}
              className="rounded-full"
            />
          </Link>
        </div>

        <div
          className={`md:static bg-blue-900 absolute md:min-h-fit  min-h-[40vh]  left-0 w-full md:w-auto  flex items-center px-5 ${
            navbar ? "top-[9%]" : "top-[-100%]"
          } duration-500`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 pt-6 pb-1">
            <li className="">
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="font-poppins text-white cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                // href="#about"
                to="about"
                smooth={true}
                duration={500}
                className="font-poppins text-white cursor-pointer"
                onClick={() => setNavBar(!navbar)}
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                className="font-poppins text-white cursor-pointer"
                onClick={() => setNavBar(!navbar)}
              >
                Events
              </Link>
            </li>

            <li className="">
              <Link
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                className="font-poppins text-white cursor-pointer"
                onClick={() => setNavBar(!navbar)}
              >
                Why Dev?
              </Link>
            </li>

            <li className="">
              <Link
                to="testimonial"
                smooth={true}
                duration={500}
                spy={true}
                className="font-poppins text-white cursor-pointer"
                onClick={() => setNavBar(!navbar)}
              >
                What people are says?
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <button className="bg-[#00c0ff] text-white px-5 py-2  hover:bg-[rgb(111,200,230)] rounded-full text-lg font-medium relative">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              className="font-poppins text-white cursor-pointer"
              onClick={() => setNavBar(!navbar)}
            >
              Contact Us
            </Link>
          </button>
          {navbar ? (
            <AiOutlineClose
              onClick={() => setNavBar(!navbar)}
              className="text-white text-3xl cursor-pointer md:hidden"
            />
          ) : (
            <AiOutlineAlignRight
              onClick={() => setNavBar(!navbar)}
              className="text-white text-3xl cursor-pointer md:hidden"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
