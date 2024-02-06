import React from "react";

const TitleButton = () => {
  return (
    <div>
      <div className="px-6">
        <h1 className="text-3xl font-bold">
          <span className="block">Your </span>
          <span>Fitness Tracker</span>
        </h1>
      </div>
      <div className="btn pl-4 my-4 flex overflow-x-scroll scrollbar-hide">
        <button className="px-8 py-4 text-lg flex-shrink-0 bg-orange text-white rounded-full font-semibold">
          Connected Devices
        </button>
        <button className="ml-4 px-8 py-4 flex-shrink-0 text-lg bg-[#f2f2f2] text-gray-400 rounded-full font-semibold">
          Statistics
        </button>
      </div>
    </div>
  );
};

export default TitleButton;
