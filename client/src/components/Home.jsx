import { Link, animateScroll as scroll } from "react-scroll";

import home from "../assets/backgrounds/home.svg";

const Home = () => {
  return (
    <section
      id="home"
      className="max-container font-poppins px-24 pt-4 max-lg:px-20 max-md:px-0 max-[380px]:px-1 bg-blue-950"
    >
      <div className="flex flex-col-reverse md:flex-row gap-2 justify-between max-md:items-center max-md:gap-0 ">
        <div className="pt-16 max-md:text-center">
          <h3 className="text-7xl max-lg:text-5xl mb-[14px] leading-[1.1] text-white font-bold px-2">
            CSEC <span className="text-[#00c0ff]">Devs</span>
          </h3>
          <p className="text-xl mb-3 mt-5 text-white font-medium px-2">
            Computer Science and Engineering Club
          </p>
          <p className="text-xl mb-3 mt-5 text-white font-medium px-2">
            Development Division
          </p>
          <p className="mb-9 md:mb-20 font-Lora font-semibold leading-6 tracking-wider text-slate-200 px-2">
            A community of powerful digital solution makers.
          </p>
          <div>
            <button className="mx-5 bg-bgjar1">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeSppvxQC8evzOgp8lREM0UHYgt3A49LwNaCIDjUelC6npDkw/closedform"
                className=" max-lg:py-[13px] max-lg:px-[38px] py-[15px] px-[20px] rounded-[50px] bg-[#00c0ff] text-white text-lg font-semibold"
              >
                Register
              </a>
            </button>
            <button>
              <a
                href="/login"
                className="max-lg:py-[13px] max-lg:px-[38px] py-[15px] px-[20px]  rounded-[50px] bg-[#00c0ff] text-white text-lg font-semibold"
              >
                Login
              </a>
            </button>
          </div>
        </div>

        <div className="md:pr-8 text-center max-md:px-20 image-container">
          <img
            src={home}
            alt="profile"
            width={550}
            // height={350}
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 50vw, 33vw"
            className="rounded-full text-center"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Home;
