import Project1 from "../assets/Capture.webp";
import Project2 from "../assets/Capture1.webp";
import Project3 from "../assets/Capture2.webp";
import Project4 from "../assets/Capture3.webp";
import Project5 from "../assets/Capture4.webp";
import Project6 from "../assets/Capture5.webp";
import Project7 from "../assets/Capture6.webp";
import Project8 from "../assets/Capture7.webp";
import Project9 from "../assets/Capture8.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Project = () => {
  const projects = [
    {
      img: Project1,
      name: "Fithub",
      intro:
        "Created an eCommerce fitness website using React, leveraging useContext and useReducer for state management",
      gitlink: "https://github.com/Usman-99/Fithub",
      dlink: "https://fithubstore.netlify.app/",
    },
    {
      img: Project7,
      name: "ReduxStore",
      intro:
        "E-commerce application that uses Redux Toolkit and createAsyncThunk to manage state and handle asynchronous API calls for fetching products",
      gitlink: "https://github.com/Usman-99/CartWithRedux",
      dlink: "https://usmanreduxstore.netlify.app/",
    },
    {
      img: Project9,
      name: "FoodOrderStore",
      intro:
        "A responsive food ordering app built using React.js, Tailwind CSS, and Redux Toolkit, featuring search and filtering functionality for a seamless user experience.",
      gitlink: "https://github.com/Usman-99/Flavoro-food-filtering-website",
      dlink: "https://usmanpizzafilterstore.netlify.app/",
    },
    {
      img: Project3,
      name: "MovieLand",
      intro:
        "Developed a React-based movie project that fetches and displays movie data using Axios to make GET requests to an API",
      gitlink: "https://github.com/Usman-99/Movie-Search-Website",
      dlink: "https://usman-99.github.io/Movie-Search-Website/",
    },
    {
      img: Project8,
      name: "Personal Website",
      intro:
        "This portfolio is a responsive React application, featuring Framer Motion animations and Tailwind CSS styling. It showcases a modern, gradient design with sections for projects, skills, and experience.",
      gitlink: "https://github.com/Usman-99/New-Portfolio",
      dlink: "https://usmanportfolio99.netlify.app/",
    },
    {
      img: Project4,
      name: "ContactBook",
      intro:
        "Created a React contact adder website that allows users to add and view contacts, with data stored in local storage for persistence.",
      gitlink: "https://github.com/Usman-99/ContactBook",
      dlink: "https://contactadder.netlify.app/",
    },
    {
      img: Project5,
      name: "Redux Todolist",
      intro:
        "Created a to-do list application using Redux Toolkit to learn and demonstrate how Redux works, like creating slices, managing the store and efficient handling of actions and reducers in React",
      gitlink:
        "https://github.com/Usman-99/TodoList-Created-Using-Redux-Toolkit",
      dlink: "https://todolistwithreduxtoolkit.netlify.app/",
    },
    {
      img: Project6,
      name: "Interview EQ Analyzer",
      intro:
        "Our FYP project, EQ Analyzer, is designed to assess and predict the emotional intelligence of individuals through audio analysis. I have developed the frontend of this project using React",
      gitlink: "https://github.com/Usman-99/EQ-Analyzer",
      dlink: "https://eqanalyzerusmanfyp.netlify.app/",
    },
    {
      img: Project2,
      name: "Lensmart",
      intro:
        "Built a beginner React user interface project to learn hooks and understand single-page routing",
      gitlink: "https://github.com/Usman-99/Lensmart-reactversion",
      dlink: "https://lensmart99.netlify.app/",
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
              <LazyLoadImage
                src={item.img}
                className="w-full h-auto"
                alt={item.name}
              />
              <h3 className="text-2xl font-semibold mt-8">{item.name}</h3>
              <p className="text-gray-300 text-md mt-2">{item.intro}</p>

              <div className="content-center flex mt-12 gap-2">
                <a
                  href={item.gitlink}
                  target="_blank"
                  className="text-center flex-1 font-semibold text-md py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                >
                  Link to Code
                </a>
                <a
                  href={item.dlink}
                  target="_blank"
                  className="text-center flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                >
                  Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
