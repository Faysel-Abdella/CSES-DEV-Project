import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/404";

import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Home from "./components/Home";
import LandingEvents from "./components/LandingEvents";
import NavBar from "./components/NavBar";
import Testimonial from "./components/Testimonial";

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
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      // {
      //   path: "dashboard",
      //   element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
      //   loader: dashboardLoader,
      //   children: [
      //     {
      //       index: true,
      //       element: <AddJob />,
      //       action: addJobAction,
      //     },
      //     { path: "stats", element: <Stats />, loader: statsLoader },
      //     {
      //       path: "all-jobs",
      //       element: <AllJobs />,
      //       loader: allJobsLoader,
      //     },

      //     {
      //       path: "profile",
      //       element: <Profile />,
      //       action: profileAction,
      //     },
      //     {
      //       path: "admin",
      //       element: <Admin />,
      //       loader: adminLoader,
      //     },
      //     {
      //       path: "edit-job/:id",
      //       element: <EditJob />,
      //       loader: editJobLoader,
      //       action: editPageAction,
      //     },
      //     { path: "delete-job/:id", action: deleteJobAction },
      //   ],
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
