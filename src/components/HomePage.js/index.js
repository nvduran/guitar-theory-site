import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/HomePage.css";
import PentatonicPage from "../PentatonicPage";
import FullFretboard from "../FullFretboard";

export const HomePage = () => {
        const [fretboardCount, setFretboardCount] = useState(1);

        const addFretboard = () => {
                setFretboardCount(fretboardCount + 1);
        };

        return (
                <div className="homepage">
                        {/* ... other code ... */}
                        <div>
                                {[...Array(fretboardCount)].map((_, index) => (
                                        <FullFretboard key={index} />
                                ))}
                                <button onClick={addFretboard} className="add-fretboard-button">
                                        +
                                </button>
                        </div>
                </div>
        );
};
