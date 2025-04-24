import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import portImg from "../assets/Images/portImg.png";
import { socials } from "../assets/socials";

const Home = () => {
  return (
    <div className="mx-2 sm:ml-16 my-24 sm:my-32 flex flex-col sm:flex-row ">
      {/* left */}
      <div className="sm:flex-1 lg:flex flex-col lg:justify-center ">
        <h1 className="font-extrabold text-4xl sm:text-6xl text-gray-700 text-center sm:text-left">
          MY NAME IS ADEDOLAPO YAKUB, A FRONT END DEVELOPER
        </h1>
        <div className="flex gap-4 items-center justify-center my-8">
          <button className="flex items-center gap-2 border p-2">
            CONTACT
            <FaExternalLinkAlt />
          </button>
          <button className="flex items-center gap-2 border p-2">WORK</button>
        </div>
      </div>
      {/* right */}
      <div className="sm:flex-1 relative">
        <img src={portImg} alt="" />
        <div className="absolute bottom-0 bg-cyan-500 p-4 flex gap-4">
          {socials.map((social, index) => (
            <a href={social.name === 'Mail'? `mailto:adedolaposamuel21@gmail.com`:social.link} target="_blank" rel="noopener noreferrer">

            <div className="relative bg-white cursor-pointer text-cyan-500 rounded-full w-8 h-8 flex items-center justify-center hover:scale-125 duration-500 transition-all group" key={index}>
              {social.icon}
              <p className="text-xs absolute -top-5 text-gray-600 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-1000">{social.name}</p>
            </div>        
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
