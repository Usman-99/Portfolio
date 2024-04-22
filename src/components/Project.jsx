import React from "react";
import Project1 from "../assets/capture.png";
import Project2 from "../assets/capture1.png";
import Project3 from "../assets/capture2.png";
import Project4 from "../assets/capture3.png";

const Project = () => {
  const projects = [
    {
      img: Project1,
      name: "Fithub",
      intro: "An Ecommerce Fitness Website using React JS",
      gitlink: "https://github.com/Usman-99/Fithub",
    },
    {
      img: Project2,
      name: "Lensmart",
      intro: "A Frontend Glasses Website Store using React JS",
      gitlink: "https://github.com/Usman-99/Lensmart-React-Version",
    },
    {
      img: Project3,
      name: "MovieLand",
      intro: "A Website where you can search any movies using React JS and API",
      gitlink: "https://github.com/Usman-99/Movie-Search-Website",
    },
    {
      img: Project4,
      name: "ContactBook",
      intro: "A simple contact adder webpage using React JS",
      gitlink: "https://github.com/Usman-99/ContactBook",
    },
  ];
  return (
    <section className="mt-20" id="projects">
      <br />
      <br />
      <div className="container m-auto px-4 sm:py-12">
        <h2 className="text-3xl font-semibold mt-10">Projects</h2>
        <br />
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 sm:flex-row gap-10 mt-11">
          {projects.map((item, index) => (
            <div
              key={index}
              className="border border-gray-500 rounded-md p-5 flex-1"
            >
              <img src={item.img} className="w-full h-auto" alt={item.name} />
              <h3 className="text-2xl font-semibold mt-8">{item.name}</h3>
              <p className="text-gray-300 text-md mt-2">{item.intro}</p>
              <a href={item.gitlink}>
                <div className="content-center flex mt-12 gap-2">
                  <button className="flex-1 font-semibold text-md py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Checkout Github
                  </button>
                  {/* <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Live Preview
                  </button> */}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
