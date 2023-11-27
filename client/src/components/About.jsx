import linkedin from "../assets/contactSVGs/linkedin-in.svg";
import twitter from "../assets/contactSVGs/twitter.svg";
import telegram from "../assets/contactSVGs/telegram.svg";
import github from "../assets/contactSVGs/github.svg";

const About = () => {
  return (
    <section
      className="max-container px-10 max-md:px-3 pt-20 font-poppins bg-blue-dark"
      id="about"
    >
      <div className="w-full max-w-[650px] mx-auto text-center">
        <p className="text-[21px] max-md:text-[17px] text-[#00c0ff] mb-[5px] font-medium">
          About Us
        </p>
        <h3 className="text-[48px] max-[1600px]:text-[40px] max-[1040px]:text-[35px] max-md:text-[29px] font-semibold text-white max-[413px]:px-[100px]">
          Passionate Developers United
        </h3>
      </div>

      <div className="w-full clear-both flex max-lg:flex-col mt-75">
        <div className="w-full mb-[60px] lg:mr-8 max-md:px-3">
          <p className="text-[30px] mb-[35px] max-[1600]:mb-[20px] font-semibold text-white leading-[1.3] max-md:mt-10">
            About Us
          </p>
          <div className="text-slate-300">
            <p className="leading-5">
              👋 Welcome to the CSEC ASTU Development Division! We are a vibrant
              club nestled within Adama Science and Technology University
              (ASTU). Our primary mission is to foster creativity and innovation
              in the lives of our members and beyond. As passionate developers,
              we come together to build, support, and inspire one another.
            </p>
            <p className="mt-10 mb-8 leading-5">
              At our core, we believe in the power of collaboration and the
              transformative potential of technology. Through our diverse range
              of activities and projects, we aim to enrich the learning
              experience of our members, while also making a positive impact on
              our university and the wider community.
            </p>
            <p>🚀 Together, we shape the future of innovation at ASTU.</p>
          </div>
        </div>

        <div className="w-full float-left clear-both overflow-hidden border-[2px] border-solid border-[#625a7d] rounded-[10px] mb-[40px]">
          <ul className="max-[768px]:pb[25px] float-left pl-[2px] min-w-[calc(100% + 12px)] m-[-2px] mr-[-10px]">
            <li className="m-0 float-left  border-2px border-solid border-[#625a7d] max-md:border-none max-md:w-full relative mt-[-2px] ml-[2px] overflow-hidden">
              <ul className="m-0 py-[25px] px-[35px] max-md:pb-0 ">
                <li className="m-0 mb-[11px] max-[1600px]:mb-[7px]">
                  <span className="text-[16px] font-medium inline-block text-white mb-1">
                    Location
                  </span>
                  <p className="text-[16px] text-gray-400">Adama, Ethiopia</p>
                </li>
                <li className="m-0 mb-[11px] max-[1600px]:mb-[7px]">
                  <span className="text-[16px] font-medium inline-block text-white mb-1">
                    Institution
                  </span>
                  <p className="text-[16px] text-gray-400">
                    <a href="#">Adama Science and Technology University</a>
                  </p>
                </li>
                <li className="m-0 mb-[11px] max-[1600px]:mb-[7px]">
                  <span className="text-[16px] font-medium inline-block text-white mb-1">
                    Office
                  </span>
                  <p className="text-[16px] text-gray-400">
                    <a href="#">B-508, R-10</a>
                  </p>
                </li>
                <li className="m-0 mb-[11px] max-[1600px]:mb-[7px]">
                  <span className="text-[16px] font-medium inline-block text-white mb-1">
                    Email
                  </span>
                  <p className="text-[16px] text-gray-400">
                    <a href="mailto:astu.dev@astu.edu.et">
                      {" "}
                      astu.dev@astu.edu.et
                    </a>
                  </p>
                </li>
                <li className="m-0 mb-[11px] max-[1600px]:mb-[7px]">
                  <span className="text-[16px] font-medium inline-block text-white mb-1">
                    Call
                  </span>
                  <p className="text-[16px] text-gray-400">+251 96813 74 73</p>
                </li>
                <li className="m-0 mb-[11px] max-[1600px]:mb-[7px]">
                  <span className="text-[16px] font-medium inline-block text-white mb-1">
                    We are available on:
                    <div className="flex items-center gap-2 mt-2 max-md:justify-center">
                      <a
                        className="bg-[#00c0ff] p-1 rounded-full"
                        href="https://www.linkedin.com/showcase/csec-astu-devs/about/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={linkedin}
                          alt="linkedin"
                          width={18}
                          height={10}
                          className="text-white"
                        />
                      </a>
                      <a
                        className="bg-[#00c0ff] p-1 rounded-full"
                        href="https://t.me/csec_devs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={telegram}
                          alt="telegram"
                          width={18}
                          height={10}
                          className="text-white"
                        />
                      </a>
                    </div>
                  </span>
                  <p className="text-[16px] text-gray-400"></p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
