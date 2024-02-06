import React from "react";

const Stats = () => {
  return (
    <div className="px-4 flex justify-between gap-4 md:gap-16">
      <div className="bg-watch flex-1 flex justify-center items-center p-6 rounded-[45px] md:py-16">
        <div className="abc h-[130px] w-[130px] flex justify-center items-center md:w-[300px] md:h-[300px] ">
            <div className="xyz">
            <p className="text-white text-lg font-bold md:text-4xl">5,233</p>
            <p className="text-orange text-[12px] md:text-lg md:text-center">Steps</p>
            </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between py-3">
        <div className="bg-[#FFF4EF] rounded-full px-4 py-3 flex flex-col justify-center items-center md:py-12">
          <p className="text-orange text-[12px] md:text-lg">Calories</p>
          <p className="text-md font-bold md:text-2xl">1200 Kcal</p>
        </div>
        <div className="bg-[#FFF4EF] rounded-full px-8 py-2 flex flex-col justify-center items-center md:py-12">
          <p className="text-orange text-[12px] md:text-lg">Water</p>
          <p className="text-md font-bold md:text-2xl">1.8 Ltrs</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
