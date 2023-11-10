import "../App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function Display() {
  return (
    <div className="pl-[25%]    w-screen back text-white  ">
      <Home />
      <About />
      <Contact />
    </div>
  );
}
