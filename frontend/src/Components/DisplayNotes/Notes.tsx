import React from "react";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { GiCuckooClock } from "react-icons/gi";
import { FaAudioDescription } from "react-icons/fa";

const Notes = ({
  title,
  description,
  priority,
  reminderDate,
  dateCreated,
}: {
  title: string;
  description: string;
  priority: string;
  reminderDate: string;
  dateCreated: string;
}) => {
  return (
    <div className="flex flex-col gap-2 max-w-[360px] bg-amber-400 p-5 rounded-md">
      <div className="flex justify-end gap-2">
        <button className="p-2 bg-sky-500 text-neutral-50 rounded-md">
          Edit
        </button>
        <button className="p-2 bg-red-700 text-neutral-50 rounded-md">
          Delete
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-3xl"> {title} </h2>
        <p className="text-base text-neutral-700">This is the content</p>

        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            <FaArrowUpRightDots className="fill-neutral-500 w-4 h-4" />
            <p className="text-base text-neutral-500">{priority}</p>
          </div>
          <div className="flex gap-1 items-center">
            <GiCuckooClock className="fill-neutral-500 w-4 h-4" />
            <p className="text-base text-neutral-500">{reminderDate}</p>
          </div>
        </div>
        <p className="text-base text-neutral-500 self-end">
          Date Created: {dateCreated}
        </p>
      </div>
    </div>
  );
};

export default Notes;
