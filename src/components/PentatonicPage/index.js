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
          </div>
        </div>
      ))}
      <button className="add-fretboard-button" onClick={handleAddFretboard}>
        +
      </button>
      {/* only show the remove button if there is more than one fretboard */}
      {fretboardCount > 1 && (
        <button
          className="remove-fretboard-button"
          onClick={handleRemoveFretboard}
        >
          -
        </button>
      )}
    </div>
  );
}
