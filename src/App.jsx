import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Tech from "./components/Tech";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl m-auto relative">
      <Navbar scrolling={scrolling} />
      <main className="relative mt-28 mb-10 left-4 right-0">
        <Intro />
        <Project />
        <Tech />
        <About />
      </main>
      <Footer scrolling={scrolling} />
    </div>
  );
}

export default App;
