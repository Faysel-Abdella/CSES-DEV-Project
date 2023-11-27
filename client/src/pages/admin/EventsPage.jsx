import { useState, useEffect } from "react";
import customFetch from "../../utils/customFetch";
import { PiMicrophoneStageBold } from "react-icons/pi";
import { PiMonitorPlayFill } from "react-icons/pi";
import { PiTrophyBold } from "react-icons/pi";
import { MdEventNote } from "react-icons/md";

import { toast } from "react-toastify";
import AddNewEvent from "./AddNewEvent";
import EventForAdmin from "../../components/small/EventForAdmin";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  const [all, setAll] = useState(0);
  const [skill, setSkill] = useState(0);
  const [hack, setHack] = useState(0);
  const [tutor, setTutor] = useState(0);

  const fetchData = async () => {
    try {
      const eventResponse = await customFetch.get("/admin/events/all");
      const events = eventResponse.data.events;

      setEvents(events);

      setAll(events.length);

      setSkill(0);
      setHack(0);
      setTutor(0);

      events.forEach((event) => {
        if (event.eventType == "Skill-sharing") {
          setSkill((prev) => prev + 1);
        }
        if (event.eventType == "Hackathon") {
          setHack((prev) => prev + 1);
        }
        if (event.eventType == "Tutorial") {
          setTutor((prev) => prev + 1);
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const response = await customFetch.delete(`/admin/event/${id}`, {
        withCredentials: true,
      });

      setEvents((prev) => prev.filter((event) => event._id !== id));
      toast.success("Event deleted successfully", { autoClose: 3000 });
      fetchData();
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <section className="p-8 h-full font-poppins ">
      <div>
        <h4 className="mt-2 font-bold text-3xl text-slate-900">
          Manage Events
        </h4>
      </div>

      <div className="mt-14 mb-10">
        <div className="bg-white rounded-lg w-full px-4 py-5 flex items-center shadow-sm justify-center">
          <div className="w-20 h-20 rounded-full bg-primary-light mr-4 flex justify-center items-center">
            <MdEventNote className="w-9 h-10 text-primary-default" />
          </div>
          <div>
            <p className="text-gray-light text-xl ">Total Events</p>
            <p className="text-slate-900 font-bold text-2xl">{all}</p>
          </div>
        </div>

        <div className="flex space-x-6 mt-2">
          <div className="bg-white rounded-lg w-full px-4 py-5 flex items-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-primary-light mr-4 flex justify-center items-center">
              <PiMicrophoneStageBold className="w-7 h-7 text-primary-default" />
            </div>
            <div>
              <p className="text-gray-light text-lg font-semibold ">
                Skill-Sharing
              </p>
              <p className="text-slate-900 font-bold text-2xl">{skill}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg w-full px-4 py-5 flex items-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-primary-light mr-4 flex justify-center items-center">
              <PiTrophyBold className="w-7 h-7 text-primary-default" />
            </div>
            <div>
              <p className="text-gray-light text-lg font-semibold ">
                Hackathon
              </p>
              <p className="text-slate-900 font-bold text-2xl">{hack}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg w-full px-4 py-5 flex items-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-primary-light mr-4 flex justify-center items-center">
              <PiMonitorPlayFill className="w-7 h-7 text-primary-default" />
            </div>
            <div>
              <p className="text-gray-light text-lg font-semibold ">Tutorial</p>
              <p className="text-slate-900 font-bold text-2xl">{tutor}</p>
            </div>
          </div>
        </div>
      </div>

      <AddNewEvent setEvents={setEvents} fetchData={fetchData} />

      <section className="flex flex-col gap-3 mt-8">
        {events.map((event) => {
          const { _id, title, subTitle, description, place, time, eventType } =
            event;

          return (
            <EventForAdmin
              key={_id}
              title={title}
              subTitle={subTitle}
              description={description}
              place={place}
              time={time}
              eventType={eventType}
              deleteHandler={() => deleteHandler(_id)}
            />
          );
        })}
      </section>
    </section>
  );
};

export default EventsPage;
