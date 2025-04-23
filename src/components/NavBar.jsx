import React, { useState, useEffect } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const NavBar = () => {
  const [opacity, setOpacity] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min(scrollY / 300, 0.9); // max 0.9
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-5 left-0 right-0 z-50 mx-4 p-4 shadow-lg rounded-full text-lg  lg:w-1/2 lg:m-auto flex justify-between  items-center backdrop-blur-md transition-all duration-500"
        style={{ backgroundColor: `rgba(245, 245, 243, ${opacity})` }}
      >
        {/* left */}
        <div>
          {showMenu ? (
            <IoMdClose
              onClick={() => {
                setShowMenu(false);
              }}
              className="text-5xl cursor-pointer transition-all duration-500 hover:scale-125 text-red-500"
            />
          ) : (
            <BiMenuAltLeft
              onClick={() => {
                setShowMenu(true);
              }}
              className="text-5xl cursor-pointer transition-all duration-500 hover:scale-125"
            />
          )}
        </div>
        {/* middle */}
        <p className="font-bold text-lg">ADEDOLAPO YAKUB</p>

        {/* right */}
        <div>
          <button className="border px-2 py-1 text-sm rounded-2xl flex items-center gap-2 cursor-pointer transition-all hover:scale-105 duration-500">
            <p>HIT ME UP</p>
            <FaExternalLinkAlt />
          </button>
        </div>
      </nav>

      {showMenu && (
        <div className="fixed inset-0 z-40 bg-neutral-700 opacity-90 ">
          <div className="mt-40 flex flex-col gap-10">
            <div className=" cursor-pointer transition-all hover:translate-x-4 hover:bg-neutral-500 duration-700">
              <p className="text-gray-200 text-xl font-semibold p-2">Home</p>
              <hr className="text-gray-500 w-full" />
            </div>
            <div className=" cursor-pointer transition-all hover:translate-x-4 hover:bg-neutral-500 duration-700">
              <p className="text-gray-200 text-xl font-semibold p-2">
                Portfolio
              </p>
              <hr className="text-gray-500 w-full" />
            </div>
            <div className=" cursor-pointer transition-all hover:translate-x-4 hover:bg-neutral-500 duration-700">
              <p className="text-gray-200 text-xl font-semibold p-2">Skills</p>
              <hr className="text-gray-500 w-full" />
            </div>
            <div className=" cursor-pointer transition-all hover:translate-x-4 hover:bg-neutral-500 duration-700">
              <p className="text-gray-200 text-xl font-semibold p-2">About</p>
              <hr className="text-gray-500 w-full" />
            </div>
            <div className=" cursor-pointer transition-all hover:translate-x-4 hover:bg-neutral-500 duration-700">
              <p className="text-gray-200 text-xl font-semibold p-2">
                Testimonials
              </p>
              <hr className="text-gray-500 w-full" />
            </div>
            <div className=" cursor-pointer transition-all hover:translate-x-4 hover:bg-neutral-500 duration-700">
              <p className="text-gray-200 text-xl font-semibold p-2">Contact</p>
              <hr className="text-gray-500 w-full" />
            </div>
            <div className="flex gap-3">
              <button className="w-6 h-6 rounded-full"></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
