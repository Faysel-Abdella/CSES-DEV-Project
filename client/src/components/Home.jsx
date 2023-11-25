import { Link, animateScroll as scroll } from "react-scroll";

import home from "../assets/backgrounds/home.svg";

import bgjar1 from "../assets/backgrounds/bgjar1.svg";

const Home = () => {
  return (
    <section
      id="home"
      className="max-container font-poppins px-24 pt-4 max-lg:px-20 max-md:px-0 max-[380px]:px-1 bg-bgjar1"
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
            Transforming ideas into powerful digital solutions.
          </p>
          <div>
            <button className="mx-5 bg-bgjar1">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                className="max-lg:py-[13px] max-lg:px-[38px] py-[15px] px-[20px] rounded-[50px] bg-[#00c0ff] text-white text-lg font-semibold"
              >
                Register
              </Link>
            </button>
            <button>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                className="max-lg:py-[13px] max-lg:px-[38px] py-[15px] px-[20px]  rounded-[50px] bg-[#00c0ff] text-white text-lg font-semibold"
              >
                Login
              </Link>
            </button>
          </div>

          {/* <div className="flex items-center gap-2 mt-10 max-md:justify-center">
            <a
              className="bg-[#00c0ff] p-1 rounded-full"
              href="https://www.linkedin.com/in/faysel-code"
              target="_blank" rel="noreferrer"
            >
              <
                src={linkedin}
                alt="linkedin"
                width={18}
                height={10}
                className="text-white"
              />
            </a>
            <a
              className="bg-[#00c0ff] p-1 rounded-full"
              href="https://x.com/Fayseltonext?t=e6QiHzcUt0omIHpuQcTYiA&s=09"
              target="_blank"
            >
              <Image
                src={twitter}
                alt="twitter"
                width={20}
                height={10}
                className=""
                color="white"
              />
            </a>

            <a
              href="https://github.com/Faysel-Abdella"
              target="_blank"
              className=" bg-[#00c0ff] p-1 rounded-full"
            >
              <Image src={github} alt="github" width={20} height={10} />
            </a>
            <a
              href="https://t.me/Infomyn"
              target="_blank"
              className="bg-[#00c0ff] p-1 rounded-full"
            >
              <Image
                src={telegram}
                alt="telegram"
                width={20}
                height={10}
                className=""
              />
            </a>
          </div> */}
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
