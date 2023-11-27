import React from "react";
import { FaTag } from "react-icons/fa";
import { PiMapPinLineDuotone } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";

const EventForAdmin = ({
  title,
  subTitle,
  description,
  place,
  time,
  deleteHandler,
  eventType,
}) => {
  return (
    <>
      <section className="bg-blue-950 py-5 px-5 rounded-2xl text-white font-poppins relative">
        <div>
          <h2 className="text-[23px] bg-blue-500 inline-block rounded-2xl px-2 py-2 mb-3">
            How to develop?
          </h2>
          <h3 className="mb-6 text-center text-[20px]">
            A complete giude of developing
          </h3>
          <p className="mb-3 text-[18px] leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            earum ullam nisi a consequatur labore ad repudiandae? Deserunt
            distinctio, aut natus qui ducimus magnam accusantium repellat
            tempore animi, maxime aliquam.
          </p>
          <div className="flex gap-8 mt-10">
            <p className="flex items-center">
              <span>
                <PiMapPinLineDuotone className="text-[30px]" />
              </span>
              <span>{place}</span>
            </p>
            <p className="flex items-center">
              <span>
                <FaRegClock className="text-[30px]" />
              </span>
              <span className="ml-1">{time}</span>
            </p>
          </div>
        </div>
        <p className="bg-blue-500 py-2 px-2 rounded-2xl inline-flex items-center gap-1 absolute top-3 right-4 ">
          <span>
            <FaTag />
          </span>
          <span> {eventType}</span>
        </p>
      </section>
    </>
  );
};

export default EventForAdmin;
