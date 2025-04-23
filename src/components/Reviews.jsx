import React from "react";
import Carousel from "./Carousel";

const Reviews = () => {
  return (
    <div className="flex flex-col gap-6 items-center my-15">
      <h2 className="text-6xl text-gray-700 font-bold">Reviews</h2>
      <p className="text-gray-400">
        Real stories from people I have worked with
      </p>
    <Carousel/>
    </div>
  );
};

export default Reviews;
