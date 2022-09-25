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

  const handleChordChoice = (pick) => {
    if (pick === "M1") {
      setChordState({
        e1: false,
        e2: false,
        e3: false,
        e4: true,
        a1: false,
        a2: false,
        a3: true,
        a4: false,
        d1: true,
        d2: false,
        d3: false,
        d4: false,
        g1: true,
        g2: false,
        g3: false,
        g4: false,
        b1: true,
        b2: false,
        b3: false,
        b4: true,
        he1: false,
        he2: false,
        he3: false,
        he4: true,
      });
    }
    if (pick === "m2") {
      setChordState({
        e1: true,
        e2: false,
        e3: false,
        e4: false,
        a1: true,
        a2: false,
        a3: false,
        a4: true,
        d1: false,
        d2: false,
        d3: true,
        d4: false,
        g1: false,
        g2: false,
        g3: true,
        g4: false,
        b1: false,
        b2: true,
        b3: false,
        b4: false,
        he1: true,
        he2: false,
        he3: false,
        he4: false,
      });
    }
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
          <div
            className={
              chordState.he1 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.b1 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.g1 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.d1 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.a1 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.e1 ? "string active-note" : "string inactive-note"
            }
          ></div>
        </div>
        <div className="fret fret2">
          <div
            className={
              chordState.he2 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.b2 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.g2 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.d2 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.a2 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.e2 ? "string active-note" : "string inactive-note"
            }
          ></div>
        </div>
        <div className="fret fret3">
          <div
            className={
              chordState.he3 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.b3 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.g3 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.d3 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.a3 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.e3 ? "string active-note" : "string inactive-note"
            }
          ></div>
        </div>
        <div className="fret fret4">
          <div
            className={
              chordState.he4 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.b4 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.g4 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.d4 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.a4 ? "string active-note" : "string inactive-note"
            }
          ></div>
          <div
            className={
              chordState.e4 ? "string active-note" : "string inactive-note"
            }
          ></div>
        </div>
      </div>
    </div>
  );
}
