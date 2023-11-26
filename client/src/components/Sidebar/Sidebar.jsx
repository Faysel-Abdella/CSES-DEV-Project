import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaChartSimple } from "react-icons/fa6";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";
import { MdOutlineNewspaper } from "react-icons/md";
import { useState } from "react";

import { PiMegaphoneBold } from "react-icons/pi";
import { PiMagnifyingGlassPlusFill } from "react-icons/pi";

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
            to="/admin/dashboard/users"
            className={({ isActive }) =>
              "group flex font-medium items-center border-r-4 border-transparent rounded-sm " +
              (isActive
                ? "text-primary-default font-bold !border-primary-default"
                : "text-gray-light")
            }
          >
            <BiSolidUser className="mr-3 w-6 h-6" />
            Users
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink
            to="/admin/dashboard/events"
            className={({ isActive }) =>
              "group flex font-medium items-center border-r-4 border-transparent rounded-sm " +
              (isActive
                ? "text-primary-default font-bold !border-primary-default"
                : "text-gray-light")
            }
          >
            <RiLayoutMasonryFill className="mr-3 w-6 h-6" /> Events
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink
            to="/admin/dashboard/opportunities"
            className={({ isActive }) =>
              "group flex font-medium items-center border-r-4 border-transparent rounded-sm " +
              (isActive
                ? "text-primary-default font-bold !border-primary-default"
                : "text-gray-light")
            }
          >
            <PiMagnifyingGlassPlusFill className="mr-3 w-6 h-6" /> Opportunities
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink
            to="/admin/dashboard/notices"
            className={({ isActive }) =>
              "group flex font-medium items-center border-r-4 border-transparent rounded-sm " +
              (isActive
                ? "text-primary-default font-bold !border-primary-default"
                : "text-gray-light")
            }
          >
            <PiMegaphoneBold className="mr-3 w-6 h-6" />
            Notices
          </NavLink>
        </li>
      </ul>

      <button className="ml-8 fixed bottom-10 px-12 py-2 text-white font-bold rounded-full bg-primary-default">
        Logout
      </button>
    </section>
  );
}
