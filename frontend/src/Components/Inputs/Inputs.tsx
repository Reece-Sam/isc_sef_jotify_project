import React from "react";
import "./Inputs.css";
import { IoIosAddCircle } from "react-icons/io";

const Inputs = () => {
  return (
    <div className=" flex flex-col gap-5">
      <h2 className="text-base text-neutral-600 font-bold">Input</h2>
      <form method="POST" className="flex gap-8">
        <input
          type="text"
          required
          placeholder="Title"
          className="p-2 bg-amber-200 border border-neutral-50 rounded-md w-[320px] active:outline-amber-300  hover:outline-amber-300"
          text-neutral-50
        />
        <input
          type="text"
          required
          placeholder="Description"
          className="p-2 bg-amber-200 border border-neutral-50 rounded-md w-[320px] active:outline-amber-300  hover:outline-amber-300"
        />
        <select
          required
          className="p-2 bg-amber-200 border border-neutral-50 rounded-md w-[320px] active:outline-amber-300  hover:outline-amber-300"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="datetime-local"
          required
          placeholder="Reminder date & time"
          className="p-2 bg-amber-200 border border-neutral-50 rounded-md w-60 active:outline-amber-300  hover:outline-amber-300"
        />
        <button
          type="submit"
          className=" flex gap-2 p-2 border bg-violet-700 text-neutral-50 border-neutral-50 rounded-md font-semibold w-[320px] active:outline-amber-300  hover:outline-amber-300 
          justify-center items-center "
        >
          Add note <IoIosAddCircle className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
};

export default Inputs;
