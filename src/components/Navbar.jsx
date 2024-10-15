import React from "react";
import Navpic from "../assets/Navpic.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = ({ scrolling }) => {
  const navitems = [
    { name: "Projects", href: "#projects" },
    { name: "Technologies", href: "#technologies" },
    { name: "About Me", href: "#aboutme" },
  ];
  return (
    <header
      className={`${
        scrolling ? "border-b border-gray-800" : ""
      }  fixed left-4 right-4 top-0 z-20 `}
      id="home"
    >
      <div className="container m-auto  py-6 max-w-7xl bg-black">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <a href="#">
            <div>
              <LazyLoadImage
                style={{ width: "50px", height: "55px" }}
                className="h-15 w-10"
                src={Navpic}
                alt="Logo"
              ></LazyLoadImage>
            </div>
          </a>
          <div>
            <ul className="flex gap-4">
              {navitems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="font-bold text-xl text-gray-400 hover:text-white cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
