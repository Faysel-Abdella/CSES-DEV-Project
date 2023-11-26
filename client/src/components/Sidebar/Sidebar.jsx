import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaChartSimple } from "react-icons/fa6";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";
import { MdOutlineNewspaper } from "react-icons/md";
import { useState } from "react";

export default function DashboardLayout() {
  // const [active, setActive] = useState('dashboard');

  return (
    <section className="h-full bg-white py-12 fixed w-1/5 font-poppins">
      <ul className="mt-9 ml-8 space-y-4">
        <li className="py-2">
          <NavLink
            to="/admin/dashboard/home"
            className={({ isActive }) =>
              "group flex font-medium items-center border-r-4 border-transparent rounded-sm " +
              (isActive
                ? "text-primary-default font-bold !border-primary-default"
                : "text-gray-light")
            }
          >
            <AiFillHome className="w-6 h-6 mr-3" />
            Dashboard
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink
            to="/dashboard/manage"
            className={({ isActive }) =>
              "group flex font-medium items-center border-r-4 border-transparent rounded-sm " +
              (isActive
                ? "text-primary-default font-bold !border-primary-default"
                : "text-gray-light")
            }
          >
            <FaChartSimple className="mr-3 w-6 h-6" />
            Manage
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink
            to="/dashboard/service"
            className={({ isActive }) =>
              "group flex font-medium items-center border-r-4 border-transparent rounded-sm " +
              (isActive
                ? "text-primary-default font-bold !border-primary-default"
                : "text-gray-light")
            }
          >
            <RiLayoutMasonryFill className="mr-3 w-6 h-6" /> Work out list
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              "group flex font-medium items-center border-r-4 border-transparent rounded-sm " +
              (isActive
                ? "text-primary-default font-bold !border-primary-default"
                : "text-gray-light")
            }
          >
            <BiSolidUser className="mr-3 w-6 h-6" /> User
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink
            to="/dashboard/events"
            className={({ isActive }) =>
              "group flex font-medium items-center border-r-4 border-transparent rounded-sm " +
              (isActive
                ? "text-primary-default font-bold !border-primary-default"
                : "text-gray-light")
            }
          >
            <MdOutlineNewspaper className="mr-3 w-6 h-6" />
            Event/Notice
          </NavLink>
        </li>
      </ul>

      <button className="ml-8 fixed bottom-10 px-12 py-2 text-white font-bold rounded-full bg-primary-default">
        Logout
      </button>
    </section>
  );
}
