import WorkItem from "./WorkItem";

const data = [
  {
    year: 2019,
    title: "Manager",
    duration: "2 years",
    details:
      "I had the opportunity to work in a formal environment and quickly advanced to a managerial position. Through my dedication, excellent customer service, and responsibility, I was entrusted with increasing responsibilities, which I always fulfilled according to expectations.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 select-none">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work Experience</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          title={item.title}
          year={item.year}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
