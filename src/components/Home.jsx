import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import portImg from "../assets/Images/portImg.png";
import { socials } from "../assets/socials";

const Home = () => {
  return (
    <div className="ml-16 my-32 flex">
      {/* left */}
      <div className="flex-1">
        <h1 className="font-bold text-6xl text-gray-700">
          MY NAME IS ADEDOLAPO YAKUB, A FRONT END DEVELOPER
        </h1>
        <div className="flex gap-4 items-center my-8">
          <button className="flex items-center gap-2 border p-2">
            CONTACT
            <FaExternalLinkAlt />
          </button>
          <button className="flex items-center gap-2 border p-2">WORK</button>
        </div>
      </div>
      {/* right */}
      <div className="flex-1 relative">
        <img src={portImg} alt="" />
        <div className="absolute bottom-0 bg-cyan-500 p-4 flex gap-4">
          {socials.map((social, index) => (
            <div className="bg-white text-cyan-500 rounded-full w-8 h-8 flex items-center justify-center" key={index}>
              {social.icon}
            </div>        
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
