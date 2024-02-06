import React from "react";
import watch from "../../assets/watch.png";

const Watch = () => {
  return (
    <div className="px-1 mt-16">
      <div className="parent h-[286px] relative flex justify-center md:h-[380px] mb-16">
        <div className="child z-10 absolute translate-y-[-30px] bg-3 w-[90%] h-[200px] rounded-[40px]"></div>
        <div className="child z-30 absolute translate-y-[-15px] bg-2 w-[95%] h-[200px] rounded-[40px]"></div>
        <div className="child absolute z-40 bg-watch h-[250px] rounded-[40px] flex md:w-full md:justify-between md:h-[400px]">
          <div className="flex flex-col pt-4 pb-3 pl-4 justify-between md:flex-1 md:justify-center items-center">
            <div className="px-2">
              <p className="text-orange text-[12px] md:text-lg">Smart Watch</p>
              <h2 className="text-white text-2xl font-bold md:text-4xl md:my-4">Fire Boltt</h2>
            </div>
            <div className="">
              <p className="text-[12px] px-2 text-gray-400 mb-8 md:text-lg md:my-4">
                <span className="block leading-none">Scan the device</span>
                <span className="leading-none">QR to connect</span>
              </p>
              <button className="bg-orange px-8 py-2 rounded-full text-white md:px-16 md:py-6 text-xl">
                Scan
              </button>
            </div>
          </div>
          <div className="flex-1 md:flex md:justify-center items-center">
            <div className="">
              <img
                src={watch}
                className="translate-y-[-18px] h-[280px] flex-1 md:h-[380px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
