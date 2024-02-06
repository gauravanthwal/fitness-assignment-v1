import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Form = () => {
  return (
    <div className="bg-orange mt-12 px-4 py-8 rounded-tl-[40px] rounded-tr-[40px] md:max-w-[500px] md:mx-auto md:rounded-[40px] md:mb-8">
      <h2 className="text-white text-lg font-semibold px-4 mb-4">Add details</h2>
      <form>
        <div className="form-control">
          <input
            className="w-full py-3 px-6 rounded-full text-black text-sm font-semibold"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="form-control flex my-3 gap-2">
          <input
            className="w-full py-3 px-6 rounded-full text-black text-sm font-semibold"
            type="text"
            placeholder="Age"
          />
          <input
            className="w-full py-3 px-6 rounded-full text-black text-sm font-semibold"
            type="text"
            placeholder="Height"
          />
        </div>
        <div className="form-control flex">
          <input
            className="w-full py-3 px-6 rounded-tl-full rounded-bl-full text-black text-sm font-semibold"
            type="text"
            value={"Are you a gym member?"}
            placeholder=""
          />
          <button className="bg-white px-4 rounded-tr-full rounded-br-full">
            <FaArrowDown />
          </button>
        </div>
        <div className="form-control flex my-3">
          <input
            className="w-full py-3 px-6 rounded-tl-full rounded-bl-full text-black text-sm font-semibold"
            type="text"
            value={"Do you eat meat?"}
            placeholder=""
          />
          <button className="bg-white px-4 rounded-tr-full rounded-br-full">
            <FaArrowDown />
          </button>
        </div>
        <div className="form-control flex my-3">
          <input
            className="w-full py-3 px-6 rounded-tl-full rounded-bl-full text-black text-sm font-semibold"
            type="text"
            value={"Are you a cyclist?"}
            placeholder=""
          />
          <button className="bg-white px-4 rounded-tr-full rounded-br-full">
            <FaArrowDown />
          </button>
        </div>
        <div className="btn">
            <button className="bg-watch text-white text-center text-md font-bold rounded-full w-full py-3">Save Details</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
