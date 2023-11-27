import { useEffect, useState } from "react";
import customFetch from "../../utils/customFetch";
import { PiUsersThree } from "react-icons/pi";
import { PiUserBold } from "react-icons/pi";
import { PiMicrophoneStageBold } from "react-icons/pi";
import { PiMonitorPlayFill } from "react-icons/pi";
import { PiTrophyBold } from "react-icons/pi";
import { MdEventNote } from "react-icons/md";
import { RiBaseStationLine } from "react-icons/ri";
import { ImStarFull } from "react-icons/im";
import { MdOutlineAccessTime } from "react-icons/md";
import { PiMagnifyingGlassPlusFill } from "react-icons/pi";

const MemberDashboard = () => {
  const [events, setEvents] = useState(0);
  const [opprtunity, setOpportunity] = useState(0);

  const [skill, setSkill] = useState(0);
  const [hack, setHack] = useState(0);
  const [tutor, setTutor] = useState(0);

  const [intern, setIntern] = useState(0);
  const [full, setFull] = useState(0);
  const [part, setPart] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventResponse = await customFetch.get("/member/events/all");
        const events = eventResponse.data.events;

        setEvents(events.length);

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

        const Oppresponse = await customFetch.get("/member/opportunities/all");
        const opportunities = Oppresponse.data.opportunities;

        setOpportunity(opportunities.length);

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
    fetchData();
  }, []);

  return (
    <section className="p-8 h-full font-poppins ">
      <div>
        <h4 className="mt-2 font-bold text-3xl text-slate-900">
          Main Dashboard
        </h4>
      </div>

      <div className="mt-14 mb-10">
        <div className="bg-white rounded-lg w-full px-4 py-5 flex items-center shadow-sm justify-center">
          <div className="w-20 h-20 rounded-full bg-primary-light mr-4 flex justify-center items-center">
            <MdEventNote className="w-9 h-10 text-primary-default" />
          </div>
          <div>
            <p className="text-gray-light text-xl ">Total Events</p>
            <p className="text-slate-900 font-bold text-2xl">{events}</p>
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
      <div className="mt-14 mb-10">
        <div className="bg-white rounded-lg w-full px-4 py-5 flex items-center shadow-sm justify-center">
          <div className="w-20 h-20 rounded-full bg-primary-light mr-4 flex justify-center items-center">
            <PiMagnifyingGlassPlusFill className="w-9 h-10 text-primary-default" />
          </div>
          <div>
            <p className="text-gray-light text-xl ">Total Opportunities</p>
            <p className="text-slate-900 font-bold text-2xl">{opprtunity}</p>
          </div>
        </div>

        <div className="flex space-x-6 mt-2">
          <div className="bg-white rounded-lg w-full px-4 py-5 flex items-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-primary-light mr-4 flex justify-center items-center">
              <RiBaseStationLine className="w-7 h-7 text-primary-default" />
            </div>
            <div>
              <p className="text-gray-light text-lg font-semibold ">
                Internship
              </p>
              <p className="text-slate-900 font-bold text-2xl">{intern}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg w-full px-4 py-5 flex items-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-primary-light mr-4 flex justify-center items-center">
              <ImStarFull className="w-7 h-7 text-primary-default" />
            </div>
            <div>
              <p className="text-gray-light text-lg font-semibold ">
                Full-Time
              </p>
              <p className="text-slate-900 font-bold text-2xl">{full}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg w-full px-4 py-5 flex items-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-primary-light mr-4 flex justify-center items-center">
              <MdOutlineAccessTime className="w-7 h-7 text-primary-default" />
            </div>
            <div>
              <p className="text-gray-light text-lg font-semibold ">
                Part-Time
              </p>
              <p className="text-slate-900 font-bold text-2xl">{part}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberDashboard;
