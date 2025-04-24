import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { socials } from "../assets/socials";

const Footer = () => {
  return (
    <div className="lg:w-fit lg:m-auto">
      <div className="flex items-center gap-3 lg:gap-20">
        <h2 className="text-6xl font-extrabold text-gray-700">LETS TALK</h2>
        <button className="border border-gray-500 flex gap-2 items-center py-2 px-4 mx-4 cursor-pointer hover:scale-105 transition-all duration-500 ">
          CONTACT <FaExternalLinkAlt />{" "}
        </button>
      </div>
      <hr className="my-12 text-gray-500" />
      <div className="flex flex-col sm:flex-row justify-between items-center flex-nowrap">
        {/* left */}
        <div className="flex-1 flex items-center justify-between gap-6">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        {/* right symbols*/}
        <div className="flex-1 flex items-center justify-end gap-4">
          {socials.map((social, index) => (
            <div
              className="bg-[#ececea] text-cyan-500 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:scale-200 duration-500 transition-all"
              key={index}
            >
              {social.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <p className="text-gray-500 text-lg">
          Adedolapo Yakub ©2025. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
