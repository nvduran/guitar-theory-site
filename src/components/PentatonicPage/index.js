import React from "react";
import FretboardView from "../FretboardView";
import "../../styles/PentatonicPage.css";

export default function PentatonicPage() {
  const [fretboardCount, setFretboardCount] = React.useState(1);

  //handle adding a fretboard
  const handleAddFretboard = () => {
    //add one to fretboardCount
    setFretboardCount(fretboardCount + 1);
  };

  //handle removing a fretboard
  const handleRemoveFretboard = () => {
    //remove one from fretboardCount
    setFretboardCount(fretboardCount - 1);
  };

  // return one FretboardView component for each fretboardCount
  return (
    <div>
      {Array.from(Array(fretboardCount).keys()).map((i) => (
        <div key={i}>
          <div>
            <FretboardView key={i} />
            {/* <button
              className="remove-fretboard-button"
              onClick={handleRemoveFretboard}
            >
              x
            </button> */}
          </div>
        </div>
      ))}
      <button className="add-fretboard-button" onClick={handleAddFretboard}>
        +
      </button>
    </div>
  );
}
