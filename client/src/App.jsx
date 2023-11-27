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

// Functions
import { action as loginAction } from "./pages/LoginPage";
import EventsPage from "./pages/admin/EventsPage";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
