import React from "react";
import Option from "./Components/Options/Options";
import Inputs from "./Components/Inputs/Inputs";
import DisplayNotes from "./Components/DisplayNotes/DisplayNotes";
import Notes from "./Components/DisplayNotes/Notes";

const App = () => {
  return (
    <div className="my-16  container mx-auto">
      <h1 className="text-center text-5xl mb-[5rem] text-neutral-700">
        This is Jotify
      </h1>
      <div className="flex flex-col gap-12">
        <Option />
        <Inputs />
        <DisplayNotes />
      </div>
    </div>
  );
};

export default App;
