import React from "react";

const Cta = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center bg-cyan-500 -mx-8 py-36 my-24">
      <h2 className="text-5xl font-bold text-gray-800">LET'S BUILD THE FUTURE TODAY</h2>
      <p className="text-center text-gray-700 w-2/3 ">
        Looking for someone that actually listens to your requirements,
        understands them, and executes efficiently and effectively? Reach Out!
      </p>
      <button className=" rounded-full p-4 cursor-pointer bg-[#ececea] hover:scale-110 transition-all duration-500 ease-in-out">Get In Touch</button>
    </div>
  );
};

export default Cta;
