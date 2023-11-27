import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/MemberSideBar";

export default function MemberLayout() {
  return (
    <div className="flex bg-primary-light min-h-screen">
      <div className="w-1/5 flex-shrink-0">
        <Sidebar />
      </div>

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
