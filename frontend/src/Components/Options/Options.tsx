import React from "react";
import "./Options.css";
import { FaSearch } from "react-icons/fa";

const Options = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-base text-neutral-600 font-bold">Options</h2>
      <div className="flex justify-between">
        <div className="">
          <form
            className="bg-amber-100 p-4 rounded-[100px] border border-neutral-100 focus:border-amber-400 "
            method="Get"
          >
            <input
              type="text"
              placeholder="Search note"
              required
              className="w-400px focus:outline-none"
            />
            <button>
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="flex gap-8">
          <button className="p-4 bg-amber-200 font-semibold rounded-md">
            Order by date
          </button>
          <button className="p-4 bg-amber-200 font-semibold rounded-md">
            Priority
          </button>
          <button className="p-4 bg-red-700 text-neutral-50 font-semibold rounded-md">
            Delete all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
