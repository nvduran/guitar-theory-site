import React from "react";
import FretboardView from "../FretboardView";
import "../../styles/PentatonicPage.css";

export default function PentatonicPage() {
  const [fretboardCount, setFretboardCount] = React.useState(1);

  //handle adding a fretboard
  const handleAddFretboard = () => {
    console.log("Add fretboard");
    //add one to fretboardCount
    setFretboardCount(fretboardCount + 1);
    console.log("fretboardCount: " + fretboardCount);
  };

  // return one FretboardView component for each fretboardCount
  return (
    <div>
      {Array.from(Array(fretboardCount).keys()).map((i) => (
        <div key={i}>
          <FretboardView key={i} />
          <button className="add-fretboard-button" onClick={handleAddFretboard}>
            +
          </button>
        </div>
      ))}
    </div>
  );
}
