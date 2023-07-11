import React from "react";
import me from "../assets/me.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src={me}
        alt="Francisco Porciel"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white bg-opacity-50 select-none">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Francisco Porciel
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "developer",
                1000,
                "coder",
                1000,
                "tech enthusiast",
                1000,
                "lol enjoyer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://github.com/frannpor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/frannpor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer hover:" size={20} />
            </a>
            <a
              href="https://www.instagram.com/frannporciel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer hover:" size={20} />
            </a>
            <a
              href="mailto:frannporciel@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGmail className="cursor- hover:" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
