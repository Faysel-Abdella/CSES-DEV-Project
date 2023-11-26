import { PiUsersThree } from "react-icons/pi";
import { PiUserBold } from "react-icons/pi";

import { useState, useEffect } from "react";
import customFetch from "../../utils/customFetch";
import MemberProfileForAdmin from "../../components/small/MeberProfileForAdmin";

import { toast } from "react-toastify";

const UsersPage = () => {
  const [members, setMembers] = useState([]);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);
  const [fifth, setFifth] = useState(0);
  const [all, setAll] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customFetch.get("/admin/members/all");
        const members = response.data.members;

        setAll(members.length);
        setMembers(members);

        setSecond(0);
        setThird(0);
        setFourth(0);
        setFifth(0);

        members.forEach((member) => {
          if (member.year == "2") {
            setSecond((prev) => prev + 1);
          }
          if (member.year == "3") {
            setThird((prev) => prev + 1);
          }
          if (member.year == "4") {
            setFourth((prev) => prev + 1);
          }
          if (member.year == "5") {
            setFifth((prev) => prev + 1);
          }
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const response = await customFetch.delete(`/admin/member/${id}`, {
        withCredentials: true,
      });

      setMembers(response.data.restMembers);

      toast.success("Member removed from the club", { autoClose: 3000 });
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <section className="p-8 h-full font-poppins ">
      <div>
        <h4 className="mt-2 font-bold text-3xl text-slate-900">
          Manage Members
        </h4>
      </div>

      <div className="mt-14 mb-10">
        <div className="bg-white rounded-lg w-full px-4 py-5 flex items-center shadow-sm justify-center">
          <div className="w-20 h-20 rounded-full bg-primary-light mr-4 flex justify-center items-center">
            <PiUsersThree className="w-9 h-10 text-primary-default" />
          </div>
          <div>
            <p className="text-gray-light text-xl ">Total Members</p>
            <p className="text-slate-900 font-bold text-2xl">{all}</p>
          </div>
        </div>

        <div className="flex space-x-6 mt-2">
          <div className="bg-white rounded-lg w-full px-4 py-5 flex items-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-primary-light mr-4 flex justify-center items-center">
              <PiUserBold className="w-7 h-7 text-primary-default" />
            </div>
            <div>
              <p className="text-gray-light text-lg font-semibold ">3rd Year</p>
              <p className="text-slate-900 font-bold text-2xl">{third}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg w-full px-4 py-5 flex items-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-primary-light mr-4 flex justify-center items-center">
              <PiUserBold className="w-7 h-7 text-primary-default" />
            </div>
            <div>
              <p className="text-gray-light text-lg font-semibold ">4th Year</p>
              <p className="text-slate-900 font-bold text-2xl">{fourth}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg w-full px-4 py-5 flex items-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-primary-light mr-4 flex justify-center items-center">
              <PiUserBold className="w-7 h-7 text-primary-default" />
            </div>
            <div>
              <p className="text-gray-light text-lg font-semibold ">5th Year</p>
              <p className="text-slate-900 font-bold text-2xl">{fifth}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-3">
        {members.map((member) => {
          const joinOnDate = new Date(member.joinOn);

          const day = joinOnDate.getDate();
          const month = joinOnDate.getMonth() + 1; // Months are zero-indexed, so we add 1
          const year = joinOnDate.getFullYear();

          const formattedDate = `${day}-${month}-${year}`;
          return (
            <MemberProfileForAdmin
              key={member._id}
              name={member.name}
              year={member.year}
              contact={member.email}
              since={formattedDate}
              deleteHandler={() => deleteHandler(member._id)}
            />
          );
        })}
      </section>
    </section>
  );
};

export default UsersPage;
