import React from "react";

const Introduction = () => {
  return (
    <div className="w-4/5 flex flex-col justify-center items-center m-auto gap-6">
      <img className="w-20 h-20 rounded-full " src="" alt="" />
      <h2 className="font-semibold text-3xl">Hello There Stranger</h2>
      <p className="text-gray-500 text-xl font-extralight">
        Hi, I'm Adedolapo — a frontend developer who brings designs to life with
        clean, responsive, and interactive websites. From concept to polished
        product, I build and maintain user-friendly interfaces that not only
        look great but work seamlessly.
      </p>
      <div className="my-10 flex justify-center items-center gap-6 text-center">
        <div className="flex flex-col gap-2">
            <p className="text-7xl text-gray-700 font-semibold">30+</p>
            <p className="text-2xl text-gray-500">Projects</p>
        </div>
        <div>
            <p className="text-7xl text-gray-700 font-semibold">3+</p>
            <p className="text-2xl text-gray-500">Years of Experience</p>
        </div>

      </div>
    </div>
  );
};

export default Introduction;
