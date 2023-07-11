import Project from "./Project";
import dogworldImg from "../assets/DogWorld.png";
import sweethomeImg from "../assets/SweetHome.png";
import airbnbImg from "../assets/Airbnb.png"

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 select-none">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Here you will find a selection of the projects I have worked on. I'm
        passionate about web development and have gained experience in various
        areas, from designing and implementing websites to creating interactive
        applications. Take a look below to explore some of my featured projects.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <Project img={sweethomeImg} title="Sweet Home" link="https://sweet-home-w1rt.onrender.com/" />
        <Project img={airbnbImg} title="Airbnb" link="https://github.com/frannpor/Airbnb" />
        <Project img={dogworldImg} title="Dog World" link="https://github.com/frannpor/PI-Dogs-main" />
      </div>
    </div>
  );
};

export default Projects;
