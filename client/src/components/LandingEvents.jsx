import tutorial from "../assets/servicesSVGs/frontend.svg";
import hackathons from "../assets/servicesSVGs/hosting.svg";
import skill from "../assets/servicesSVGs/consultancy.svg";

const LandingEvents = () => {
  return (
    <section
      className="max-container px-10 max-md:px-3 pt-20 font-poppins bg-blue-950"
      id="events"
    >
      <p></p>
      <div className="w-full max-w-[650px] mx-auto text-center">
        <p className="text-[21px] max-md:text-[17px] text-[#00c0ff] mb-[5px] font-medium">
          Events
        </p>
        <h3 className="text-[48px] max-[1600px]:text-[40px] max-[1040px]:text-[35px] max-md:text-[29px] font-semibold text-white max-[413px]:px-[100px]">
          What We Provide for Our Members
        </h3>
      </div>

      <div className="w-full h-auto  pt-[70px]">
        <ul className="m-0 mr-[-25px] max-md:m-0 flex flex-wrap align-baseline p-0 ">
          <li className="m-0 mb-[25px] pl-[25px] max-md:pl-0 w-[33.3333%] max-lg:w-1/2 max-md:w-full">
            <div className="w-full h-full clear-both float-left relative bg-[#3a2b71] rounded-[10px] text-center pt-[105px] pr-[65px] pb-[70px] pl-[65px] max-2xl:pt-[95px] max-2xl:pr-[30px] max-2xl:pb-[60px] max-2xl:pl-[30px]">
              <span
                className="inline-block relative w-[65px] h-[65px] rounded-full bg-[#432d92] mb-[53px] max-mb-[35px]
                            before:absolute before:content-none before:w-full before:h-full before:bg-[#fff] before:left-0 before:transform before:scale-0 before:transition-all before:delay-300 before:ease-in before:text-center
                        "
              >
                <img
                  src={skill}
                  alt="frontend"
                  className="w-[65px] h-[65px] absolute top-[-50%] left-[-40px] z-[2] text-[#00c0ff]"
                />
              </span>

              <h3 className="text-[21px] mb-[20px] font-semibold text-[#fff]">
                Skill Sharing
              </h3>

              <p className="text-[#D3D8E8] leading-5">
                Join us for Skill Sharing, a seminar event where we invite
                successful developers to share their technical and soft skills.
                A total of more than 10 skill sharing events have been prepared,
                and our members have gained valuable skills through this event.
              </p>

              <p className="absolute bottom-6 left-[50%] translate-x-[-50%]  cursor-pointer">
                <a
                  className="font-semibold bg-slate-400 py-1 px-3 rounded-full"
                  href="/login"
                >
                  Login for more
                </a>
              </p>
            </div>
          </li>
          <li className="m-0 mb-[25px] pl-[25px] max-md:pl-0 w-[33.3333%] max-lg:w-1/2 max-md:w-full">
            <div className="w-full h-full clear-both float-left relative bg-[#3a2b71] rounded-[10px] text-center pt-[105px] pr-[65px] pb-[70px] pl-[65px] max-2xl:pt-[95px] max-2xl:pr-[30px] max-2xl:pb-[60px] max-2xl:pl-[30px]">
              <span
                className="inline-block relative w-[65px] h-[65px] rounded-full bg-[#432d92] mb-[53px] max-mb-[35px]
                            before:absolute before:content-none before:w-full before:h-full before:bg-[#fff] before:left-0 before:transform before:scale-0 before:transition-all before:delay-300 before:ease-in before:text-center
                        "
              >
                <img
                  src={hackathons}
                  alt="hackathons"
                  className="w-[80px] h-[80px] absolute top-[-50%] left-[-40px] z-[2] text-[#00c0ff]"
                />
              </span>

              <h3 className="text-[21px] mb-[20px] font-semibold text-[#fff]">
                Hackathons
              </h3>

              <p className="text-[#D3D8E8] leading-5">
                We believe that adopting a competitive mindset can lead to
                extraordinary results. Therefore, we regularly organize
                hackathons for our members, providing them with a platform to
                showcase their skills. Those members who successfully win these
                hackathons are rewarded generously, motivating them to continue
                their journey with increased happiness and enthusiasm.
              </p>

              <p className="absolute bottom-6 left-[50%] translate-x-[-50%]  cursor-pointer">
                <a
                  className="font-semibold bg-slate-400 py-1 px-3 rounded-full"
                  href="/login"
                >
                  Login for more
                </a>
              </p>
            </div>
          </li>
          <li className="m-0 mb-[25px] pl-[25px] max-md:pl-0 w-[33.3333%] max-lg:w-1/2 max-md:w-full">
            <div className="w-full h-full clear-both float-left relative bg-[#3a2b71] rounded-[10px] text-center pt-[105px] pr-[65px] pb-[70px] pl-[65px] max-2xl:pt-[95px] max-2xl:pr-[30px] max-2xl:pb-[60px] max-2xl:pl-[30px]">
              <span
                className="inline-block relative w-[65px] h-[65px] rounded-full bg-[#432d92] mb-[53px] max-mb-[35px]
                            before:absolute before:content-none before:w-full before:h-full before:bg-[#fff] before:left-0 before:transform before:scale-0 before:transition-all before:delay-300 before:ease-in before:text-center
                        "
              >
                <img
                  src={tutorial}
                  alt="tutorial"
                  className="w-[65px] h-[65px] absolute top-[-50%] left-[-40px] z-[2] text-[#00c0ff]"
                />
              </span>

              <h3 className="text-[21px] mb-[20px] font-semibold text-[#fff]">
                Tutorials
              </h3>

              <p className="text-[#D3D8E8] leading-5">
                Our valuable tutorial programs introduce members to new
                technologies and development tools. Many participants become
                experts in their field through these tutorials. Led by
                successful developers, these sessions equally emphasize the
                development of technical and soft skills.
              </p>

              <p className="absolute bottom-6 left-[50%] translate-x-[-50%]  cursor-pointer">
                <a
                  className="font-semibold bg-slate-400 py-1 px-3 rounded-full"
                  href="/login"
                >
                  Login for more
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LandingEvents;
