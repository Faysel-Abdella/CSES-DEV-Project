import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Home from "./components/Home";
import LandingEvents from "./components/LandingEvents";
import NavBar from "./components/NavBar";
import Testimonial from "./components/Testimonial";

// Common pages
import ErrorPage from "./pages/404";
import LogIn from "./pages/LoginPage";
import DashboardLayout from "./components/Layout/DashboardLayout";

// Admin pages
import DashboardHome from "./pages/admin/DashboardHome";
import UsersPage from "./pages/admin/UsersPage";
import EditEventPage from "./pages/admin/EditEventPage";
import EventsPage from "./pages/admin/EventsPage";

// Member Page
import MemberLayout from "./components/Layout/MemberLayout";
import MemberDashboard from "./pages/member/MemberDashboard";
import MemberSideBar from "./components/Sidebar/MemberSideBar";
import MemberEvents from "./pages/member/MemberEvents";

// Functions
import { action as loginAction } from "./pages/LoginPage";
import { loader as editEventLoader } from "./pages/admin/EditEventPage";
import { action as editEventAction } from "./pages/admin/EditEventPage";
import { loader as layoutLoader } from "./components/Layout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <>
        <NavBar />
        <Home />
        <About />
        <LandingEvents />
        <Features />
        <Testimonial />
        <Contact />
      </>
    ),
  },
  {
    path: "/login",
    element: <LogIn />,
    action: loginAction,
  },
  {
    path: "/admin/dashboard/home",
    element: <DashboardLayout />,
    loader: layoutLoader,

    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "edit-event/:id",
        element: <EditEventPage />,
        loader: editEventLoader,
        action: editEventAction,
      },
      // {
      //   path: "opportunities",
      //   element: <OppsPage />,
      // },
    ],
  },
  {
    path: "/member/dashboard/home",
    element: <MemberLayout />,
    children: [
      {
        index: true,
        element: <MemberDashboard />,
      },
      {
        path: "events",
        element: <MemberEvents />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
