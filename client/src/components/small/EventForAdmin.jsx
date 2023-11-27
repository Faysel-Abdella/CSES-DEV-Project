import React from "react";
import { FaTag } from "react-icons/fa";
import { PiMapPinLineDuotone } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const EventForAdmin = ({
  _id,
  title,
  subTitle,
  description,
  place,
  time,
  date,
  deleteHandler,
  eventType,
}) => {
  return (
    <>
      <section className="bg-blue-950 py-5 px-5 rounded-2xl text-white font-poppins relative">
        <div>
          <h2 className="text-[23px] bg-blue-500 inline-block rounded-2xl px-2 py-2 mb-3">
            {title}
          </h2>
          <h3 className="mb-6 text-center text-[20px]">{subTitle}</h3>
          <p className="mb-3 text-[18px] leading-6">{description}</p>
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
              <span className="ml-1">
                {date}, {time}
              </span>
            </p>
          </div>
        </div>
        <p className="bg-blue-500 py-2 px-2 rounded-2xl inline-flex items-center gap-1 absolute top-3 right-4 ">
          <span>
            <FaTag />
          </span>
          <span> {eventType}</span>
        </p>
        <div className="flex justify-center gap-2 absolute bottom-2 right-4">
          <Link
            className="bg-green-700 py-3 px-3 rounded-2xl hover:bg-green-500 text-white text-[18px]"
            to={`../edit-event/${_id}`}
          >
            Edit Event
          </Link>
          <button
            className="bg-red-500 py-3 px-3 rounded-2xl hover:bg-green-500 text-white text-[18px]"
            onClick={deleteHandler}
          >
            Delete Event
          </button>
        </div>
      </section>
    </>
  );
};

export default EventForAdmin;
