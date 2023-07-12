const technologies = [
  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "TAILWIND CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "JAVASCRIPT",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TYPESCRIPT",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "REACT",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "NEXT JS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "REDUX",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "NODE JS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "EXPRESS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "GIT",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "POSTGRESQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MONGODB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

const Technologies = () => {
  return (
    <div
      id="technologies"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 select-none"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Technologies
      </h1>
      <p className="text-center py-8">
        Here are the technologies I have experience with:
      </p>
      <div
        className="w-full grid grid-cols-2 dark:font-normal aos-init aos-animate sm:grid-cols-3 gap-4 py-8 font-bold text-center"
        data-aos="fade-in"
      >
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="shadow-xl rounded-lg py-2 hover:scale-110 duration-500"
          >
            <img
              className="w-20 mx-auto"
              src={technology.img}
              alt={technology.name}
            />
            <p className="mt-4">{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
