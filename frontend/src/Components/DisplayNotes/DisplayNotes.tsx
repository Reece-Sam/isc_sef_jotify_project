import React from "react";
import "./DisplayNotes";
import Notes from "./Notes";
// import axios from axios;

type SingleNote = {
  id: number;
  title: string;
  description: string;
  priority: string;
  reminderDate: string;
  dateCreated: string;
};

const notes: SingleNote[] = [
  {
    id: 1,
    title: "Sample Note 1",
    description: "This is the first sample note.",
    priority: "High",
    reminderDate: "2024-07-01",
    dateCreated: "2024-06-20",
  },
  {
    id: 2,
    title: "Sample Note 2",
    description: "This is the second sample note.",
    priority: "Medium",
    reminderDate: "2024-07-05",
    dateCreated: "2024-06-21",
  },
  {
    id: 3,
    title: "Sample Note 3",
    description: "This is the third sample note.",
    priority: "Low",
    reminderDate: "2024-07-10",
    dateCreated: "2024-06-22",
  },
  {
    id: 4,
    title: "Sample Note 4",
    description: "This is the fourth sample note.",
    priority: "High",
    reminderDate: "2024-07-15",
    dateCreated: "2024-06-23",
  },
  {
    id: 5,
    title: "Sample Note 5",
    description: "This is the fifth sample note.",
    priority: "Medium",
    reminderDate: "2024-07-20",
    dateCreated: "2024-06-24",
  },
  {
    id: 6,
    title: "Sample Note 6",
    description: "This is the sixth sample note.",
    priority: "Low",
    reminderDate: "2024-07-25",
    dateCreated: "2024-06-25",
  },
  {
    id: 7,
    title: "Sample Note 7",
    description: "This is the seventh sample note.",
    priority: "High",
    reminderDate: "2024-07-30",
    dateCreated: "2024-06-26",
  },
  {
    id: 8,
    title: "Sample Note 8",
    description: "This is the eighth sample note.",
    priority: "Medium",
    reminderDate: "2024-08-04",
    dateCreated: "2024-06-27",
  },
];

const DisplayNotes = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {notes.map((note: SingleNote) => (
        <Notes
          key={note.id}
          title={note.title}
          description={note.description}
          priority={note.priority}
          reminderDate={note.reminderDate}
          dateCreated={note.dateCreated}
        />
      ))}
    </div>
  );
};

export default DisplayNotes;
