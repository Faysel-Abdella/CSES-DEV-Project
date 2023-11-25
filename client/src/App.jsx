import About from "./components/About";
import Features from "./components/Features";
import Home from "./components/Home";
import LandingEvents from "./components/LandingEvents";
import NavBar from "./components/NavBar";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <LandingEvents />
      <Features />
      <Testimonial />
    </>
  );
}

export default App;
