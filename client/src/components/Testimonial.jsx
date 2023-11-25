import faysel from "../assets/testimonial/highprofile.jpg";
import insa from "../assets/testimonial/insa.png";
import a2sv from "../assets/testimonial/a2sv.jpeg";

const Testimonial = () => {
  return (
    <section className="bg-gray-900 font-poppins" id="testimonial">
      <div className="container px-6 py-10 mx-auto">
        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold  capitalize lg:text-3xl text-white">
              What people are saying
            </h1>

            <div className="flex mx-auto mt-6">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3 font-poppins">
          <div className="p-8 border rounded-lg dark:border-gray-700">
            <p className="leading-loose text-gray-400 dark:text-gray-200 font-poppins ">
              “After joining the CSEC development division, I realized that
              learning and working together is the key factor for success. In
              this club, I believe all members have a sense of pride and
              gratitude to be part of it. My dedication and effort towards
              learning have significantly increased since becoming a member of
              this club.”
            </p>

            <div className="flex items-center mt-8 -mx-2">
              <img
                className="object-center mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                src={faysel}
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-white">Faysel Abdella</h1>
                <span className="text-sm text-gray-400">Member</span>
              </div>
            </div>
          </div>

          <div className="p-8 bg-blue-500 border border-transparent rounded-lg dark:bg-blue-600">
            <p className="leading-loose text-white">
              “Graduated students who have been members of the CSEC development
              division are truly skilled and dedicated. We have hired many
              graduates, but it is fair to say that all students from the CSEC
              development division are extraordinary. Looking ahead, we are
              planning to establish an agreement with this club due to their
              dedication and honesty.”
            </p>

            <div className="flex items-center mt-8 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200"
                src={insa}
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-white">INSA</h1>
                <span className="text-sm text-blue-200">
                  Information Network Security Agency
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 border rounded-lg dark:border-gray-700">
            <p className="leading-loose text-gray-400 dark:text-gray-300">
              “We have accepted numerous students from the CSEC development
              division for our internship program. We have observed a common
              trait among all members - a habit of collaboration and hard work.
              In addition to their expertise in their respective fields, they
              possess excellent communication and other essential soft skills.”
            </p>

            <div className="flex items-center mt-8 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700 p-1 bg-slate-300"
                src={a2sv}
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-white">A2SV</h1>
                <span className="text-sm text-gray-400">
                  Africa to Silicon Valley
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonial;
