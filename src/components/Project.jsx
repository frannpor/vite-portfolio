import React, { useState } from "react";

const Project = ({ img, title, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative flex items-center justify-center h-auto w-full rounded-xl overflow-hidden ${
        isHovered ? "shadow-2xl" : "shadow-lg"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <img
          className="rounded-xl group-hover:opacity-75 transition-opacity duration-300"
          src={img}
          alt={title}
        />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h3 className="text-white text-2xl font-bold tracking-wider mb-2">
              {title}
            </h3>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-6 bg-white text-gray-800 rounded-lg font-bold text-lg transition-colors duration-300 hover:bg-gray-800 hover:text-white"
            >
              More info
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
