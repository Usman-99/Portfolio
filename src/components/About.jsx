import React from "react";

const About = () => {
  const experience = [
    {
      id: "1",
      year: "2020",
      para: "I graduated from Adamjee Government Science College with a remarkable percentage of 89.91%. Additionally, I was honored to be among the top 20 position holders in the HSC BIEK results.",
    },
    {
      year: "2020",
      para: "I am currently enrolled in the Bachelor of Engineering program in Computer and Information Systems Engineering at NED University.",
    },
    {
      year: "2022",
      para: "I completed a web development internship at MCB Funds, where I gained invaluable experience in understanding the MVC (Model-View-Controller) structure and its application in real-world scenarios. During this internship, I had the opportunity to witness firsthand how financial transactions are managed by banks through web and mobile applications.",
    },
    {
      year: "2023",
      para: "I have done internship at the Karachi Development Authority (KDA), where I gained hands-on experience in understanding server architecture and its functionalities. During this internship, I had the opportunity to delve into the complexities of database management systems and witnessed firsthand how a government organization efficiently manages city property details through systematic database management.",
    },
    {
      year: "2024",
      para: "I graduated with a Bachelor of Engineering in Computer and Information Systems Engineering from NED University with CGPA of 3.564",
    },
  ];
  return (
    <section className="mt-20 py-8" id="aboutme">
      <br />
      <div className="container m-auto px-4">
        <h2 className="text-3xl font-semibold mt-10">About me</h2>
        <br />
        <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
          {experience.map((item, index) => (
            <div
              key={index}
              className={`pl-24 ${
                item.id == 1 ? "" : "mt-24"
              } relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]`}
            >
              <h3 className="absolute left-0 text-lg font-semibold">
                {item.year}
              </h3>
              <p>{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
