import React from "react";

const Tech = () => {
  const techs = [
    { name: "HTML", len: "95%" },
    { name: "CSS & Bootstrap", len: "80%" },
    { name: "Javascript", len: "78%" },
    { name: "React JS", len: "88%" },
    { name: "Redux", len: "82%" },
    { name: "SQL", len: "74%" },
    { name: "Python", len: "77%" },
  ];
  const addtechs = [
    "Git",
    "Tailwind CSS",
    "Multitasking",
    "Creative Problem Solving",
    "Teamwork",
    "LogicalApproach",
    "Time Management",
    "Work Ethic",
  ];
  return (
    <>
      <section className="mt-20 py-10" id="technologies">
        <br />
        <div className="container m-auto px-4">
          <h2 className="text-3xl font-semibold mt-10">Technologies</h2>
          <div className="mt-14">
            {techs.map((item, index) => (
              <div key={index} className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span
                  style={{ width: item.len }}
                  className="h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Additional skills section */}
      <section>
        <div className="container m-auto px-4 py-14">
          <h2 className="text-2xl font-semibold">
            Additional technologies and skills
          </h2>
          <div
            style={{ gap: "2rem" }}
            className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 sm:flex-row gap-4 sm:gap-28 mt-12 w-full"
          >
            {addtechs.map((item, index) => (
              <div>
                <p
                  key={index}
                  className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5"
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tech;
