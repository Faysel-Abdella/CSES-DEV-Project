import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function AdminLayout() {
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
