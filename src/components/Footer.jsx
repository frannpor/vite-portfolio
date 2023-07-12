import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001b5e] text-white py-8 select-none">
      <div className="flex justify-center items-center">
        <a
          href="https://github.com/frannpor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500 mr-6"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/frannpor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500 mr-6"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="mailto:frannporciel@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500 mr-6"
        >
          <FaEnvelope size={32} />
        </a>
        <a
          href="https://drive.google.com/file/d/1eonEEXUAFcBo2R3XMeFnAnmOcvbmf3ph/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500 mr-6"
        >
          <FaFilePdf size={32} />
        </a>
      </div>
      <p className="text-center text-sm mt-4">
        Connect with me on social media and check out my latest projects!
      </p>
    </footer>
  );
};

export default Footer;
