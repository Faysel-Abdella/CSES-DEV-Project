import { useState, useEffect } from "react";
import customFetch from "../../utils/customFetch";
import { PiMicrophoneStageBold } from "react-icons/pi";
import { PiMonitorPlayFill } from "react-icons/pi";
import { PiTrophyBold } from "react-icons/pi";
import { MdEventNote } from "react-icons/md";

import AddNewOpp from "./AddNewOpp";

import { toast } from "react-toastify";

import Opp from "../../components/small/Opp";

const OppsPage = () => {
  const [opprtunity, setOpportunity] = useState([]);

  const [all, setAll] = useState(0);

  const [intern, setIntern] = useState(0);
  const [full, setFull] = useState(0);
  const [part, setPart] = useState(0);

  const fetchData = async () => {
    try {
      const Oppresponse = await customFetch.get("/opportunities/all");
      const opportunities = Oppresponse.data.opportunities;

      setAll(opportunities.length);

      setOpportunity(opportunities);

      setIntern(0);
      setFull(0);
      setPart(0);

      opportunities.forEach((member) => {
        if (member.jobType == "Internship") {
          setIntern((prev) => prev + 1);
        }
        if (member.jobType == "Part-time") {
          setPart((prev) => prev + 1);
        }
        if (member.jobType == "Full-time") {
          setFull((prev) => prev + 1);
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
      const response = await customFetch.delete(`/admin/opportunities/${id}`, {
        withCredentials: true,
      });

      setOpportunity((prev) => prev.filter((event) => event._id !== id));
      toast.success("Event deleted successfully", { autoClose: 3000 });
      fetchData();
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <section className="p-8 h-full font-poppins ">
      <p>Hi</p>
      <div>
        <h4 className="mt-2 font-bold text-3xl text-slate-900">
          Manage Opportunities
        </h4>
      </div>

      <div className="mt-14 mb-10">
        <div className="bg-white rounded-lg w-full px-4 py-5 flex items-center shadow-sm justify-center">
          <div className="w-20 h-20 rounded-full bg-primary-light mr-4 flex justify-center items-center">
            <MdEventNote className="w-9 h-10 text-primary-default" />
          </div>
          <div>
            <p className="text-gray-light text-xl ">Total Opportunities</p>
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
              <p className="text-slate-900 font-bold text-2xl">{intern}</p>
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
              <p className="text-slate-900 font-bold text-2xl">{full}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg w-full px-4 py-5 flex items-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-primary-light mr-4 flex justify-center items-center">
              <PiMonitorPlayFill className="w-7 h-7 text-primary-default" />
            </div>
            <div>
              <p className="text-gray-light text-lg font-semibold ">Tutorial</p>
              <p className="text-slate-900 font-bold text-2xl">{part}</p>
            </div>
          </div>
        </div>
      </div>

      <AddNewOpp opprtunity={opprtunity} fetchData={fetchData} />

      <section className="flex flex-col gap-3 mt-8">
        {opprtunity.map((event) => {
          const {
            _id,
            title,
            subTitle,
            description,
            place,
            time,
            eventType,
            date,
          } = event;

          return (
            <Opp
              key={_id}
              _id={_id}
              title={title}
              subTitle={subTitle}
              description={description}
              place={place}
              time={time}
              date={date}
              eventType={eventType}
              deleteHandler={() => deleteHandler(_id)}
            />
          );
        })}
      </section>
    </section>
  );
};

export default OppsPage;
