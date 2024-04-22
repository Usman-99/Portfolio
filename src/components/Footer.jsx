import React from "react";
import { SiGmail } from "react-icons/si";
import ArrowDown from "../assets/arrow-down.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const Footer = ({ scrolling }) => {
  return (
    <div>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2023</p>
          </div>
          <div className="mx-4">
            <ul className="flex gap-4">
              <li>
                <a href="mailto:usmanyousuf1137@gmail.com">
                  <SiGmail size={25} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/muhammadusmanyousuf/">
                  <FaLinkedin size={25} />
                </a>
              </li>
              <li>
                <a href="https://github.com/Usman-99?tab=repositories">
                  <FaGithub size={25} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {scrolling && (
        <button
          className="fixed block right-0 bottom-20 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
};

export default Footer;
