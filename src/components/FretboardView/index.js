import React from "react";
import "../../styles/FretboardView.css";
import { useState } from "react";

export default function FretboardView() {
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
  const [pentatonicOutline, setPentatonicOutline] = useState("p1");
  const [pentStr, setPentStr] = useState("");
  const [chordStr, setChordStr] = useState("");

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
    }

    if (pickChord === "M1") {
      output.he4 = "active-note";
      output.b4 = "active-note";
      output.b1 = "active-note";
      output.g1 = "active-note";
      output.d1 = "active-note";
      output.a3 = "active-note";
      output.e4 = "active-note";
    }
    if (pickChord === "m2") {
      output.he1 = "active-note";
      output.b2 = "active-note";
      output.g3 = "active-note";
      output.d3 = "active-note";
      output.a1 = "active-note";
      output.a4 = "active-note";
      output.e1 = "active-note";
    }
    if (pickChord === "m3") {
      output.e3 = "active-note";
      output.a3 = "active-note";
      output.d1 = "active-note";
      output.b1 = "active-note";
      output.b4 = "active-note";
      output.he3 = "active-note";
    }

    setChordState(output);
  };
  return (
    <div>
      <div className="fretboard-container">
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
      </div>
      <div className="selection-div">
        <div className="chord-selection-area">
          <div
            className={chordStr === "M1" ? "chord-picker-sel" : "chord-picker"}
            onClick={() => setChordStr("M1")}
          >
            Major 1
          </div>
          <div
            className={chordStr === "m2" ? "chord-picker-sel" : "chord-picker"}
            onClick={() => setChordStr("m2")}
          >
            minor 2
          </div>
          <div
            className={chordStr === "m3" ? "chord-picker-sel" : "chord-picker"}
            onClick={() => setChordStr("m3")}
          >
            minor 3
          </div>
        </div>
        <div className="pentatonic-selection-area">
          <div
            className={
              pentStr === "p1" ? "pentatonic-picker-sel" : "pentatonic-picker"
            }
            onClick={() => setPentStr("p1")}
          >
            Pentatonic 1
          </div>
        </div>
      </div>
      <div
        className="submit-button"
        onClick={() => handleChoiceSubmit(chordStr, pentStr)}
      >
        submit
      </div>
    </div>
  );
}
