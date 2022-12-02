import React from "react";
import "../../styles/FretboardView.css";
import { useState } from "react";

export default function FretboardView({ advancedSettings }) {
  const [fretCount, setFretCount] = useState(advancedSettings.frets);
  const [chordState, setChordState] = useState({
    e1: false,
    e2: false,
    e3: false,
    e4: false,
    a1: false,
    a2: false,
    a3: false,
    a4: false,
    d1: false,
    d2: false,
    d3: false,
    d4: false,
    g1: false,
    g2: false,
    g3: false,
    g4: false,
    b1: false,
    b2: false,
    b3: false,
    b4: false,
    he1: false,
    he2: false,
    he3: false,
    he4: false,
  });
  const [pentStr, setPentStr] = useState("p1");
  const [chordStr, setChordStr] = useState("M1");

  const handleChoiceSubmit = (pickChord, pickPent) => {
    let output = {
      e1: false,
      e2: false,
      e3: false,
      e4: false,
      a1: false,
      a2: false,
      a3: false,
      a4: false,
      d1: false,
      d2: false,
      d3: false,
      d4: false,
      g1: false,
      g2: false,
      g3: false,
      g4: false,
      b1: false,
      b2: false,
      b3: false,
      b4: false,
      he1: false,
      he2: false,
      he3: false,
      he4: false,
    };

    // set pentatonic outline
    if (pickPent === "p1") {
      output.e4 = "pentatonic-note";
      output.e1 = "pentatonic-note";
      output.a1 = "pentatonic-note";
      output.a3 = "pentatonic-note";
      output.d1 = "pentatonic-note";
      output.d3 = "pentatonic-note";
      output.g1 = "pentatonic-note";
      output.g3 = "pentatonic-note";
      output.b1 = "pentatonic-note";
      output.b4 = "pentatonic-note";
      output.he1 = "pentatonic-note";
      output.he4 = "pentatonic-note";
    } else if (pickPent === "p2") {
      output.e4 = "pentatonic-note";
      output.e2 = "pentatonic-note";
      output.a4 = "pentatonic-note";
      output.a1 = "pentatonic-note";
      output.d1 = "pentatonic-note";
      output.d4 = "pentatonic-note";
      output.g1 = "pentatonic-note";
      output.g3 = "pentatonic-note";
      output.b2 = "pentatonic-note";
      output.b4 = "pentatonic-note";
      output.he2 = "pentatonic-note";
      output.he4 = "pentatonic-note";
    } else if (pickPent === "p3") {
      output.e4 = "pentatonic-note";
      output.e2 = "pentatonic-note";
      output.a4 = "pentatonic-note";
      output.a2 = "pentatonic-note";
      output.d2 = "pentatonic-note";
      output.d4 = "pentatonic-note";
      output.g1 = "pentatonic-note";
      output.g4 = "pentatonic-note";
      output.b2 = "pentatonic-note";
      output.b5 = "pentatonic-note";
      output.he2 = "pentatonic-note";
      output.he4 = "pentatonic-note";
    } else if (pickPent === "p4") {
      output.e4 = "pentatonic-note";
      output.e1 = "pentatonic-note";
      output.a4 = "pentatonic-note";
      output.a1 = "pentatonic-note";
      output.d1 = "pentatonic-note";
      output.d3 = "pentatonic-note";
      output.g1 = "pentatonic-note";
      output.g3 = "pentatonic-note";
      output.b2 = "pentatonic-note";
      output.b4 = "pentatonic-note";
      output.he1 = "pentatonic-note";
      output.he4 = "pentatonic-note";
    } else if (pickPent === "p5") {
      output.e4 = "pentatonic-note";
      output.e2 = "pentatonic-note";
      output.a4 = "pentatonic-note";
      output.a2 = "pentatonic-note";
      output.d1 = "pentatonic-note";
      output.d4 = "pentatonic-note";
      output.g1 = "pentatonic-note";
      output.g4 = "pentatonic-note";
      output.b2 = "pentatonic-note";
      output.b4 = "pentatonic-note";
      output.he2 = "pentatonic-note";
      output.he4 = "pentatonic-note";
    }

    if (pickChord === "M1" && pickPent === "p1") {
      output.he4 = "active-note";
      output.b4 = "active-note";
      output.b1 = "active-note";
      output.g1 = "active-note";
      output.d1 = "active-note";
      output.a3 = "active-note";
      output.e4 = "active-note";
    }
    if (pickChord === "m2" && pickPent === "p1") {
      output.he1 = "active-note";
      output.b2 = "active-note";
      output.g3 = "active-note";
      output.d3 = "active-note";
      output.a1 = "active-note";
      output.a4 = "active-note";
      output.e1 = "active-note";
    }
    if (pickChord === "m3" && pickPent === "p1") {
      output.e3 = "active-note";
      output.a3 = "active-note";
      output.d1 = "active-note";
      output.b1 = "active-note";
      output.b4 = "active-note";
      output.he3 = "active-note";
    }
    if (pickChord === "M4" && pickPent === "p1") {
      output.he1 = "active-note";
      output.he4 = "active-note";
      output.b2 = "active-note";
      output.g1 = "active-note";
      output.d3 = "active-note";
      output.a4 = "active-note";
      output.e4 = "active-note";
    }
    if (pickChord === "M5" && pickPent === "p1") {
      output.he3 = "active-note";
      output.b4 = "active-note";
      output.g3 = "active-note";
      output.d1 = "active-note";
      output.a1 = "active-note";
      output.e3 = "active-note";
    }
    if (pickChord === "m6" && pickPent === "p1") {
      output.he1 = "active-note";
      output.he4 = "active-note";
      output.b1 = "active-note";
      output.g1 = "active-note";
      output.d3 = "active-note";
      output.a3 = "active-note";
      output.e4 = "active-note";
      output.e1 = "active-note";
    }
    if (pickChord === "d7" && pickPent === "p1") {
      output.he3 = "active-note";
      output.b2 = "active-note";
      output.g3 = "active-note";
      output.a4 = "active-note";
      output.a1 = "active-note";
      output.e3 = "active-note";
    }
    if (pickChord === "M1" && pickPent === "p2") {
      output.he1 = "active-note";
      output.b1 = "active-note";
      output.g3 = "active-note";
      output.d4 = "active-note";
      output.a4 = "active-note";
      output.a1 = "active-note";
      output.e2 = "active-note";
    }
    if (pickChord === "m2" && pickPent === "p2") {
      output.he4 = "active-note";
      output.b4 = "active-note";
      output.g4 = "active-note";
      output.g1 = "active-note";
      output.d1 = "active-note";
      output.a2 = "active-note";
      output.e4 = "active-note";
    }
    if (pickChord === "m3" && pickPent === "p2") {
      output.he1 = "active-note";
      output.b2 = "active-note";
      output.g3 = "active-note";
      output.d3 = "active-note";
      output.a4 = "active-note";
      output.a1 = "active-note";
      output.e1 = "active-note";
    }
    if (pickChord === "M4" && pickPent === "p2") {
      output.he2 = "active-note";
      output.b4 = "active-note";
      output.g4 = "active-note";
      output.d4 = "active-note";
      output.d1 = "active-note";
      output.a2 = "active-note";
      output.e2 = "active-note";
    }
    if (pickChord === "M5" && pickPent === "p2") {
      output.he1 = "active-note";
      output.he4 = "active-note";
      output.b2 = "active-note";
      output.g1 = "active-note";
      output.d3 = "active-note";
      output.a4 = "active-note";
      output.e4 = "active-note";
      output.e1 = "active-note";
    }
    if (pickChord === "M5" && pickPent === "p2") {
      output.he1 = "active-note";
      output.he4 = "active-note";
      output.b2 = "active-note";
      output.g1 = "active-note";
      output.d3 = "active-note";
      output.a4 = "active-note";
      output.e4 = "active-note";
      output.e1 = "active-note";
    }
    if (pickChord === "m6" && pickPent === "p2") {
      output.he2 = "active-note";
      output.b4 = "active-note";
      output.g3 = "active-note";
      output.d4 = "active-note";
      output.d1 = "active-note";
      output.a1 = "active-note";
      output.e2 = "active-note";
    }
    if (pickChord === "d7" && pickPent === "p2") {
      output.he1 = "active-note";
      output.he4 = "active-note";
      output.g4 = "active-note";
      output.g1 = "active-note";
      output.d3 = "active-note";
      output.a2 = "active-note";
      output.e4 = "active-note";
      output.e1 = "active-note";
    }
    if (pickChord === "M1" && pickPent === "p3") {
      output.he4 = "active-note";
      output.b5 = "active-note";
      output.g1 = "active-note";
      output.g4 = "active-note";
      output.d2 = "active-note";
      output.a2 = "active-note";
      output.e4 = "active-note";
    }
    if (pickChord === "m2" && pickPent === "p3") {
      output.he2 = "active-note";
      output.b2 = "active-note";
      output.g2 = "active-note";
      output.d4 = "active-note";
      output.a4 = "active-note";
      output.e2 = "active-note";
    }
    if (pickChord === "m3" && pickPent === "p3") {
      output.he4 = "active-note";
      output.b4 = "active-note";
      output.g4 = "active-note";
      output.g1 = "active-note";
      output.d1 = "active-note";
      output.a2 = "active-note";
      output.e4 = "active-note";
    }
    if (pickChord === "M4" && pickPent === "p3") {
      output.b2 = "active-note";
      output.g2 = "active-note";
      output.d2 = "active-note";
      output.a4 = "active-note";
    }
    if (pickChord === "M5" && pickPent === "p3") {
      output.he2 = "active-note";
      output.b4 = "active-note";
      output.g4 = "active-note";
      output.g4 = "active-note";
      output.d1 = "active-note";
      output.a2 = "active-note";
      output.e2 = "active-note";
    }
    if (pickChord === "m6" && pickPent === "p3") {
      output.he4 = "active-note";
      output.b5 = "active-note";
      output.b2 = "active-note";
      output.g1 = "active-note";
      output.d2 = "active-note";
      output.a4 = "active-note";
      output.e4 = "active-note";
    }
    if (pickChord === "d7" && pickPent === "p3") {
      output.he2 = "active-note";
      output.b4 = "active-note";
      output.g2 = "active-note";
      output.d4 = "active-note";
      output.d1 = "active-note";
      output.e2 = "active-note";
    }
    if (pickChord === "M1" && pickPent === "p4") {
      output.he4 = "active-note";
      output.he1 = "active-note";
      output.b2 = "active-note";
      output.g1 = "active-note";
      output.d3 = "active-note";
      output.a4 = "active-note";
      output.e4 = "active-note";
      output.e1 = "active-note";
    }
    if (pickChord === "m2" && pickPent === "p4") {
      output.he2 = "active-note";
      output.b4 = "active-note";
      output.g3 = "active-note";
      output.d4 = "active-note";
      output.d1 = "active-note";
      output.a1 = "active-note";
      output.e2 = "active-note";
    }
    if (pickChord === "m3" && pickPent === "p4") {
      output.he1 = "active-note";
      output.he4 = "active-note";
      output.b1 = "active-note";
      output.g1 = "active-note";
      output.d3 = "active-note";
      output.a3 = "active-note";
      output.e4 = "active-note";
      output.e1 = "active-note";
    }
    if (pickChord === "M4" && pickPent === "p4") {
      output.he2 = "active-note";
      output.b2 = "active-note";
      output.g3 = "active-note";
      output.d4 = "active-note";
      output.a4 = "active-note";
      output.a1 = "active-note";
      output.e2 = "active-note";
    }
    if (pickChord === "M5" && pickPent === "p4") {
      output.he4 = "active-note";
      output.b1 = "active-note";
      output.b4 = "active-note";
      output.g1 = "active-note";
      output.d1 = "active-note";
      output.a3 = "active-note";
      output.e4 = "active-note";
    }
    if (pickChord === "m6" && pickPent === "p4") {
      output.he1 = "active-note";
      output.b2 = "active-note";
      output.g3 = "active-note";
      output.d3 = "active-note";
      output.a4 = "active-note";
      output.a1 = "active-note";
      output.e1 = "active-note";
    }
    if (pickChord === "d7" && pickPent === "p4") {
      output.he2 = "active-note";
      output.b4 = "active-note";
      output.b1 = "active-note";
      output.d4 = "active-note";
      output.d1 = "active-note";
      output.a3 = "active-note";
      output.e2 = "active-note";
    }
    if (pickChord === "M1" && pickPent === "p5") {
      output.he2 = "active-note";
      output.b4 = "active-note";
      output.g4 = "active-note";
      output.d4 = "active-note";
      output.d1 = "active-note";
      output.a2 = "active-note";
      output.e2 = "active-note";
    }
    if (pickChord === "m2" && pickPent === "p5") {
      output.he4 = "active-note";
      output.b2 = "active-note";
      output.g1 = "active-note";
      output.d2 = "active-note";
      output.a4 = "active-note";
      output.e4 = "active-note";
    }
    if (pickChord === "m3" && pickPent === "p5") {
      output.he2 = "active-note";
      output.b4 = "active-note";
      output.g3 = "active-note";
      output.d4 = "active-note";
      output.d1 = "active-note";
      output.a1 = "active-note";
      output.e2 = "active-note";
    }
    if (pickChord === "M4" && pickPent === "p5") {
      output.he4 = "active-note";
      output.b5 = "active-note";
      output.g4 = "active-note";
      output.g1 = "active-note";
      output.d2 = "active-note";
      output.a2 = "active-note";
      output.e4 = "active-note";
    }
    if (pickChord === "M5" && pickPent === "p5") {
      output.he2 = "active-note";
      output.b2 = "active-note";
      output.g3 = "active-note";
      output.d4 = "active-note";
      output.a4 = "active-note";
      output.a1 = "active-note";
      output.e2 = "active-note";
    }
    if (pickChord === "m6" && pickPent === "p5") {
      output.he4 = "active-note";
      output.b4 = "active-note";
      output.g4 = "active-note";
      output.g1 = "active-note";
      output.d1 = "active-note";
      output.a2 = "active-note";
      output.e4 = "active-note";
    }
    if (pickChord === "d7" && pickPent === "p5") {
      output.b2 = "active-note";
      output.g3 = "active-note";
      output.d2 = "active-note";
      output.a4 = "active-note";
      output.a1 = "active-note";
    }

    setChordState(output);
  };

  // handle key selection and setKeySelect
  const handleKeyChoiceChange = (event) => {
    setChordStr(event.target.value);
  };

  // handle pentatonic selection and setPentStr
  const handlePentChoiceChange = (event) => {
    setPentStr(event.target.value);
  };

  return (
    <div className="big-container">
      <div className="selection-div-container">
        <div className="selection-div">
          <div className="key-choice-dropdown-div">
            <select value={chordStr} onChange={handleKeyChoiceChange}>
              <option value="M1">Major 1</option>
              <option value="m2">minor 2</option>
              <option value="m3">minor 3</option>
              <option value="M4">Major 4</option>
              <option value="M5">Major 5</option>
              <option value="m6">minor 6</option>
              <option value="d7">dim 7</option>
            </select>
          </div>
          <div className="shape-choice-dropdown-div">
            <select value={pentStr} onChange={handlePentChoiceChange}>
              <option value="p1">Shape 1</option>
              <option value="p2">Shape 2</option>
              <option value="p3">Shape 3</option>
              <option value="p4">Shape 4</option>
              <option value="p5">Shape 5</option>
            </select>
          </div>
          <div className="submit-div">
            <div
              className="submit-button"
              onClick={() => handleChoiceSubmit(chordStr, pentStr)}
            >
              submit
            </div>
          </div>
        </div>
      </div>
      <div className="fretboard-container">
        {fretCount === 6 ? (
          <div className="fret fret0">
            <div className={`string ${chordState.he0}`}></div>
            <div className={`string ${chordState.b0}`}></div>
            <div className={`string ${chordState.g0}`}></div>
            <div className={`string ${chordState.d0}`}></div>
            <div className={`string ${chordState.a0}`}></div>
            <div className={`string ${chordState.e0}`}></div>
          </div>
        ) : null}
        <div className="fret fret1">
          <div className={`string ${chordState.he1}`}></div>
          <div className={`string ${chordState.b1}`}></div>
          <div className={`string ${chordState.g1}`}></div>
          <div className={`string ${chordState.d1}`}></div>
          <div className={`string ${chordState.a1}`}></div>
          <div className={`string ${chordState.e1}`}></div>
        </div>
        <div className="fret fret2">
          <div className={`string ${chordState.he2}`}></div>
          <div className={`string ${chordState.b2}`}></div>
          <div className={`string ${chordState.g2}`}></div>
          <div className={`string ${chordState.d2}`}></div>
          <div className={`string ${chordState.a2}`}></div>
          <div className={`string ${chordState.e2}`}></div>
        </div>
        <div className="fret fret3">
          <div className={`string ${chordState.he3}`}></div>
          <div className={`string ${chordState.b3}`}></div>
          <div className={`string ${chordState.g3}`}></div>
          <div className={`string ${chordState.d3}`}></div>
          <div className={`string ${chordState.a3}`}></div>
          <div className={`string ${chordState.e3}`}></div>
        </div>
        <div className="fret fret4">
          <div className={`string ${chordState.he4}`}></div>
          <div className={`string ${chordState.b4}`}></div>
          <div className={`string ${chordState.g4}`}></div>
          <div className={`string ${chordState.d4}`}></div>
          <div className={`string ${chordState.a4}`}></div>
          <div className={`string ${chordState.e4}`}></div>
        </div>
        {fretCount === 6 ? (
          <div className="fret fret5">
            <div className={`string ${chordState.he5}`}></div>
            <div className={`string ${chordState.b5}`}></div>
            <div className={`string ${chordState.g5}`}></div>
            <div className={`string ${chordState.d5}`}></div>
            <div className={`string ${chordState.a5}`}></div>
            <div className={`string ${chordState.e5}`}></div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
