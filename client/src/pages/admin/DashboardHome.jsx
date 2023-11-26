import { useEffect, useState } from "react";
import customFetch from "../../utils/customFetch";

const DashboardHome = () => {
  const [users, setUsers] = useState(0);
  const [events, setEvents] = useState(0);
  const [opprtunity, setOpportunity] = useState(0);

  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);
  const [fifth, setFifth] = useState(0);
  const [all, setAll] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customFetch.get("/admin/members/all");
        console.log("Response:", response);

        const members = response.data.members;

        setAll(members.length);

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

  return <></>;
};

export default DashboardHome;
