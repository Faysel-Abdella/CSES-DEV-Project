import all from "../assets/Feature/all.webp";

import dedication from "../assets/Feature/first.svg";
import collaboration from "../assets/Feature/collaboration.svg";
import creativity from "../assets/Feature/creativity.svg";

const Features = () => {
  return (
    <section
      className="max-container px-10 max-md:px-3 pt-20 pb-3 font-poppins bg-blue-950"
      id="whydev"
    >
      <div className="w-full max-w-[650px] mx-auto text-center">
        <p className="text-[21px] max-md:text-[17px] text-[#00c0ff] mb-[5px] font-medium">
          Features
        </p>
        <h3 className="text-[48px] max-[1600px]:text-[40px] max-[1040px]:text-[35px] max-md:text-[29px] font-semibold text-white max-[413px]:px-[100px]">
          Why Join Dev?
        </h3>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="md:mx-4">
            <div className="grid place-items-center w-12 h-12 rounded-full my-3 bg-violet-50 dark:bg-blue-800">
              <div className="text-violet-500 dark:text-violet-60">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 0 1-11.2 1.7L483.3 569.8a7.92 7.92 0 0 1-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"></path>
                </svg>
              </div>
            </div>
            <span className="text-violet-500 dark:text-violet-60 mb-3 inline-block font-medium md:font-semibold">
              Fast-track your learning
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-5">
              Collaboration and Learning together:
            </h2>
            <p className="text-[#D3D8E8] ">
              We believe in the power of collaboration and value your time
              throughout the learning process. Our Dev community is full of
              growth-minded developers and students who actively share their
              knowledge and experiences. This enriches your learning journey,
              making it faster and easier.
            </p>
          </div>

          <div className="flex justify-center ">
            <img
              src={collaboration}
              alt="all in one"
              className="w-5/6 md:w-full lg:pt-4 xl:w-5/6"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="md:mx-4">
            <div className="grid place-items-center w-12 h-12 rounded-full my-3 bg-violet-50 dark:bg-blue-800">
              <div className="text-violet-500 dark:text-violet-60">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 0 1-11.2 1.7L483.3 569.8a7.92 7.92 0 0 1-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"></path>
                </svg>
              </div>
            </div>
            <span className="text-violet-500 dark:text-violet-60 mb-3 inline-block font-medium md:font-semibold">
              Strong Dedication:
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-5">
              above and beyond the expected dedication:
            </h2>
            <p className="text-[#D3D8E8] text-opacity-100">
              The environment is a core factor for successful developers. With
              our 14-hour open lab service, you can concentrate and put maximum
              effort into learning and developing. One of the main benefits our
              members gain from joining this community is the ability to stay
              focused and dedicated.
            </p>
          </div>

          <div className="flex justify-center md:order-first">
            <img src={dedication} alt="all in one" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="md:mx-4">
            <div className="grid place-items-center w-12 h-12 rounded-full my-3 bg-violet-50 dark:bg-blue-800">
              <div className="text-violet-500 dark:text-violet-60">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 0 1-11.2 1.7L483.3 569.8a7.92 7.92 0 0 1-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"></path>
                </svg>
              </div>
            </div>
            <span className="text-violet-500 dark:text-violet-60 mb-3 inline-block font-medium md:font-semibold">
              Creativity and Innovation
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-5">
              A fresh perspective and imaginative solutions:
            </h2>
            <p className="text-[#D3D8E8] text-opacity-100">
              We bring a fresh perspective to each members, pushing boundaries
              and exploring new possibilities. We not only appreciate a fresh
              perspective and imaginative solutions, we reward on it and change
              to a real world product. Throughout our tutorials and other events
              you will find a great chance for upgrading your creativity
            </p>
          </div>

          <div className="flex justify-center ">
            <img src={creativity} alt="all in one" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
