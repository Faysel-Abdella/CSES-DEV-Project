import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Home from "./components/Home";
import LandingEvents from "./components/LandingEvents";
import NavBar from "./components/NavBar";
import Testimonial from "./components/Testimonial";

// Pages
import ErrorPage from "./pages/404";
import LogIn from "./pages/LoginPage";
import DashboardLayout from "./components/Layout/DashboardLayout";

// Functions
import { action as loginAction } from "./pages/LoginPage";

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
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
