import { Outlet, redirect } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import customFetch from "../../utils/customFetch";

export const loader = async () => {
  try {
    const response = await customFetch("/auth/get-current-person", {
      withCredentials: true,
    });
    console.log(response.data.role);

    if (response.data.role !== "admin") {
      return redirect("/");
    }
    return null;
  } catch {
    return redirect("/");
  }
};

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
