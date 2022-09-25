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

  const handleChordChoice = (pick) => {
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
    if (pentatonicOutline === "p1") {
      output.e4 = "pentatonic-note";
    }

    if (pick === "M1") {
      output.e4 = "active-note";
    }

    setChordState(output);
  };
  return (
    <div>
      <div className="chord-picker" onClick={() => handleChordChoice("M1")}>
        Major 1
      </div>
      <div className="chord-picker" onClick={() => handleChordChoice("m2")}>
        minor 2
      </div>
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
    </div>
  );
}
