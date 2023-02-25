import React from "react";
import { useState } from "react";
import "../../styles/FullFretboard.css";

export default function FullFretboard() {
        const [updatePage, setUpdatePage] = useState(false);
        const [userFilters, setUserFilters] = useState({
                noteNames: true,
                keyRoot: "C",
        });
        // INITIAL FRETBORD OBJECT
        const [fretboardObj, setFretboardObj] = useState({
                fret0: {
                        string1: { pitch: "E", divClass: "" },
                        string2: { pitch: "A", divClass: "" },
                        string3: { pitch: "D", divClass: "" },
                        string4: { pitch: "G", divClass: "" },
                        string5: { pitch: "B", divClass: "" },
                        string6: { pitch: "E", divClass: "" },
                },
                fret1: {
                        string1: { pitch: "F", divClass: "" },
                        string2: { pitch: "A#", divClass: "" },
                        string3: { pitch: "D#", divClass: "" },
                        string4: { pitch: "G#", divClass: "" },
                        string5: { pitch: "C", divClass: "" },
                        string6: { pitch: "F", divClass: "" },
                },
                fret2: {
                        string1: { pitch: "F#", divClass: "" },
                        string2: { pitch: "B", divClass: "" },
                        string3: { pitch: "E", divClass: "" },
                        string4: { pitch: "A", divClass: "" },
                        string5: { pitch: "C#", divClass: "" },
                        string6: { pitch: "F#", divClass: "" },
                },
                fret3: {
                        string1: { pitch: "G", divClass: "" },
                        string2: { pitch: "C", divClass: "" },
                        string3: { pitch: "F", divClass: "" },
                        string4: { pitch: "A#", divClass: "" },
                        string5: { pitch: "D", divClass: "" },
                        string6: { pitch: "G", divClass: "" },
                },
                fret4: {
                        string1: { pitch: "G#", divClass: "" },
                        string2: { pitch: "C#", divClass: "" },
                        string3: { pitch: "F#", divClass: "" },
                        string4: { pitch: "B", divClass: "" },
                        string5: { pitch: "D#", divClass: "" },
                        string6: { pitch: "G#", divClass: "" },
                },
                fret5: {
                        string1: { pitch: "A", divClass: "" },
                        string2: { pitch: "D", divClass: "" },
                        string3: { pitch: "G", divClass: "" },
                        string4: { pitch: "C", divClass: "" },
                        string5: { pitch: "E", divClass: "" },
                        string6: { pitch: "A", divClass: "" },
                },
                fret6: {
                        string1: { pitch: "A#", divClass: "" },
                        string2: { pitch: "D#", divClass: "" },
                        string3: { pitch: "G#", divClass: "" },
                        string4: { pitch: "C#", divClass: "" },
                        string5: { pitch: "F", divClass: "" },
                        string6: { pitch: "A#", divClass: "" },
                },
                fret7: {
                        string1: { pitch: "B", divClass: "" },
                        string2: { pitch: "E", divClass: "" },
                        string3: { pitch: "A", divClass: "" },
                        string4: { pitch: "D", divClass: "" },
                        string5: { pitch: "F#", divClass: "" },
                        string6: { pitch: "B", divClass: "" },
                },
                fret8: {
                        string1: { pitch: "C", divClass: "" },
                        string2: { pitch: "F", divClass: "" },
                        string3: { pitch: "A#", divClass: "" },
                        string4: { pitch: "D#", divClass: "" },
                        string5: { pitch: "G", divClass: "" },
                        string6: { pitch: "C", divClass: "" },
                },
                fret9: {
                        string1: { pitch: "C#", divClass: "" },
                        string2: { pitch: "F#", divClass: "" },
                        string3: { pitch: "B", divClass: "" },
                        string4: { pitch: "E", divClass: "" },
                        string5: { pitch: "G#", divClass: "" },
                        string6: { pitch: "C#", divClass: "" },
                },
                fret10: {
                        string1: { pitch: "D", divClass: "" },
                        string2: { pitch: "G", divClass: "" },
                        string3: { pitch: "C", divClass: "" },
                        string4: { pitch: "F", divClass: "" },
                        string5: { pitch: "A", divClass: "" },
                        string6: { pitch: "D", divClass: "" },
                },
                fret11: {
                        string1: { pitch: "D#", divClass: "" },
                        string2: { pitch: "G#", divClass: "" },
                        string3: { pitch: "C#", divClass: "" },
                        string4: { pitch: "F#", divClass: "" },
                        string5: { pitch: "A#", divClass: "" },
                        string6: { pitch: "D#", divClass: "" },
                },
                fret12: {
                        string1: { pitch: "E", divClass: "" },
                        string2: { pitch: "A", divClass: "" },
                        string3: { pitch: "D", divClass: "" },
                        string4: { pitch: "G", divClass: "" },
                        string5: { pitch: "B", divClass: "" },
                        string6: { pitch: "E", divClass: "" },
                },
                fret13: {
                        string1: { pitch: "F", divClass: "" },
                        string2: { pitch: "A#", divClass: "" },
                        string3: { pitch: "D#", divClass: "" },
                        string4: { pitch: "G#", divClass: "" },
                        string5: { pitch: "C", divClass: "" },
                        string6: { pitch: "F", divClass: "" },
                },
                fret14: {
                        string1: { pitch: "F#", divClass: "" },
                        string2: { pitch: "B", divClass: "" },
                        string3: { pitch: "E", divClass: "" },
                        string4: { pitch: "A", divClass: "" },
                        string5: { pitch: "C#", divClass: "" },
                        string6: { pitch: "F#", divClass: "" },
                },
                fret15: {
                        string1: { pitch: "G", divClass: "" },
                        string2: { pitch: "C", divClass: "" },
                        string3: { pitch: "F", divClass: "" },
                        string4: { pitch: "A#", divClass: "" },
                        string5: { pitch: "D", divClass: "" },
                        string6: { pitch: "G", divClass: "" },
                },
                fret16: {
                        string1: { pitch: "G#", divClass: "" },
                        string2: { pitch: "C#", divClass: "" },
                        string3: { pitch: "F#", divClass: "" },
                        string4: { pitch: "B", divClass: "" },
                        string5: { pitch: "D#", divClass: "" },
                        string6: { pitch: "G#", divClass: "" },
                },
                fret17: {
                        string1: { pitch: "A", divClass: "" },
                        string2: { pitch: "D", divClass: "" },
                        string3: { pitch: "G", divClass: "" },
                        string4: { pitch: "C", divClass: "" },
                        string5: { pitch: "E", divClass: "" },
                        string6: { pitch: "A", divClass: "" },
                },
                fret18: {
                        string1: { pitch: "A#", divClass: "" },
                        string2: { pitch: "D#", divClass: "" },
                        string3: { pitch: "G#", divClass: "" },
                        string4: { pitch: "C#", divClass: "" },
                        string5: { pitch: "F", divClass: "" },
                        string6: { pitch: "A#", divClass: "" },
                },
                fret19: {
                        string1: { pitch: "B", divClass: "" },
                        string2: { pitch: "E", divClass: "" },
                        string3: { pitch: "A", divClass: "" },
                        string4: { pitch: "D", divClass: "" },
                        string5: { pitch: "F#", divClass: "" },
                        string6: { pitch: "B", divClass: "" },
                },
                fret20: {
                        string1: { pitch: "C", divClass: "" },
                        string2: { pitch: "F", divClass: "" },
                        string3: { pitch: "A#", divClass: "" },
                        string4: { pitch: "D#", divClass: "" },
                        string5: { pitch: "G", divClass: "" },
                        string6: { pitch: "C", divClass: "" },
                },
                fret21: {
                        string1: { pitch: "C#", divClass: "" },
                        string2: { pitch: "F#", divClass: "" },
                        string3: { pitch: "B", divClass: "" },
                        string4: { pitch: "E", divClass: "" },
                        string5: { pitch: "G#", divClass: "" },
                        string6: { pitch: "C#", divClass: "" },
                },
                fret22: {
                        string1: { pitch: "D", divClass: "" },
                        string2: { pitch: "G", divClass: "" },
                        string3: { pitch: "C", divClass: "" },
                        string4: { pitch: "F", divClass: "" },
                        string5: { pitch: "A", divClass: "" },
                        string6: { pitch: "D", divClass: "" },
                },
                fret23: {
                        string1: { pitch: "D#", divClass: "" },
                        string2: { pitch: "G#", divClass: "" },
                        string3: { pitch: "C#", divClass: "" },
                        string4: { pitch: "F#", divClass: "" },
                        string5: { pitch: "A#", divClass: "" },
                        string6: { pitch: "D#", divClass: "" },
                },
                fret24: {
                        string1: { pitch: "E", divClass: "" },
                        string2: { pitch: "A", divClass: "" },
                        string3: { pitch: "D", divClass: "" },
                        string4: { pitch: "G", divClass: "" },
                        string5: { pitch: "B", divClass: "" },
                        string6: { pitch: "E", divClass: "" },
                },
        });

        const handleRootChange = (e) => {
                console.log(userFilters);
                let tempUserFilters = userFilters;
                console.log(tempUserFilters);
                tempUserFilters.keyRoot = e.target.value.toString();
                tempUserFilters.noteNames = userFilters.noteNames;
                console.log(tempUserFilters);

                setUserFilters(tempUserFilters);
                console.log(userFilters);

                changeNoteHighlighting(e.target.value.toString());
        };

        const changeNoteHighlighting = (note) => {
                let arrOfNotes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
                let indexOfNote = arrOfNotes.indexOf(note);
                let indexOfThird = indexOfNote + 4;
                let targetThird = arrOfNotes[indexOfThird];
                let indexOfFifth = indexOfNote + 7;
                let targetFifth = arrOfNotes[indexOfFifth];
                console.log("changeNoteHighlighting() called with note: " + note);
                let tempFretboardObj = fretboardObj;

                for (let i = 0; i < 25; i++) {
                        for (let j = 1; j < 7; j++) {
                                if (tempFretboardObj["fret" + i]["string" + j].pitch === note) {
                                        tempFretboardObj["fret" + i]["string" + j].divClass = "highlighted-note-root";
                                } else if (tempFretboardObj["fret" + i]["string" + j].pitch === targetThird) {
                                        tempFretboardObj["fret" + i]["string" + j].divClass = "highlighted-note-third";
                                } else if (tempFretboardObj["fret" + i]["string" + j].pitch === targetFifth) {
                                        tempFretboardObj["fret" + i]["string" + j].divClass = "highlighted-note-fifth";
                                } else {
                                        tempFretboardObj["fret" + i]["string" + j].divClass = "";
                                }
                        }
                }

                setFretboardObj(tempFretboardObj);
                setUpdatePage(!updatePage);
        };

        return (
                <div>
                        <div className="big-full-fretboard-container">
                                <div className="big-full-fretboard-div">
                                        <div className="ff-fret0">
                                                <div className={fretboardObj.fret0.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret0.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret0.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret0.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret0.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret0.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret0.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret0.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret0.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret0.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret0.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret0.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret1">
                                                <div className={fretboardObj.fret1.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret1.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret1.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret1.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret1.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret1.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret1.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret1.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret1.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret1.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret1.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret1.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret2">
                                                <div className={fretboardObj.fret2.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret2.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret2.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret2.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret2.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret2.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret2.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret2.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret2.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret2.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret2.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret2.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret3">
                                                <div className={fretboardObj.fret3.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret3.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret3.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret3.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret3.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret3.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret3.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret3.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret3.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret3.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret3.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret3.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret4">
                                                <div className={fretboardObj.fret4.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret4.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret4.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret4.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret4.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret4.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret4.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret4.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret4.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret4.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret4.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret4.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret5">
                                                <div className={fretboardObj.fret5.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret5.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret5.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret5.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret5.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret5.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret5.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret5.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret5.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret5.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret5.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret5.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret6">
                                                <div className={fretboardObj.fret6.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret6.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret6.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret6.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret6.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret6.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret6.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret6.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret6.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret6.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret6.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret6.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret7">
                                                <div className={fretboardObj.fret7.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret7.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret7.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret7.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret7.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret7.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret7.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret7.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret7.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret7.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret7.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret7.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret8">
                                                <div className={fretboardObj.fret8.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret8.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret8.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret8.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret8.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret8.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret8.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret8.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret8.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret8.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret8.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret8.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret9">
                                                <div className={fretboardObj.fret9.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret9.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret9.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret9.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret9.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret9.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret9.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret9.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret9.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret9.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret9.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret9.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret10">
                                                <div className={fretboardObj.fret10.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret10.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret10.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret10.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret10.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret10.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret10.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret10.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret10.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret10.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret10.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret10.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret11">
                                                <div className={fretboardObj.fret11.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret11.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret11.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret11.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret11.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret11.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret11.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret11.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret11.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret11.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret11.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret11.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret12">
                                                <div className={fretboardObj.fret12.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret12.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret12.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret12.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret12.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret12.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret12.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret12.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret12.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret12.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret12.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret12.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret13">
                                                <div className={fretboardObj.fret13.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret13.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret13.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret13.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret13.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret13.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret13.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret13.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret13.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret13.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret13.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret13.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret14">
                                                <div className={fretboardObj.fret14.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret14.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret14.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret14.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret14.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret14.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret14.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret14.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret14.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret14.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret14.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret14.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret15">
                                                <div className={fretboardObj.fret15.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret15.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret15.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret15.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret15.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret15.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret15.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret15.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret15.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret15.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret15.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret15.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret16">
                                                <div className={fretboardObj.fret16.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret16.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret16.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret16.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret16.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret16.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret16.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret16.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret16.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret16.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret16.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret16.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret17">
                                                <div className={fretboardObj.fret17.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret17.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret17.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret17.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret17.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret17.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret17.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret17.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret17.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret17.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret17.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret17.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret18">
                                                <div className={fretboardObj.fret18.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret18.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret18.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret18.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret18.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret18.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret18.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret18.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret18.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret18.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret18.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret18.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret19">
                                                <div className={fretboardObj.fret19.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret19.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret19.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret19.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret19.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret19.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret19.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret19.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret19.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret19.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret19.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret19.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret20">
                                                <div className={fretboardObj.fret20.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret20.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret20.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret20.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret20.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret20.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret20.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret20.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret20.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret20.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret20.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret20.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret21">
                                                <div className={fretboardObj.fret21.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret21.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret21.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret21.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret21.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret21.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret21.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret21.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret21.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret21.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret21.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret21.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret22">
                                                <div className={fretboardObj.fret22.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret22.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret22.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret22.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret22.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret22.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret22.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret22.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret22.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret22.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret22.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret22.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret23">
                                                <div className={fretboardObj.fret23.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret23.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret23.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret23.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret23.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret23.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret23.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret23.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret23.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret23.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret23.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret23.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret24">
                                                <div className={fretboardObj.fret24.string6.divClass}>{userFilters.noteNames ? fretboardObj.fret24.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret24.string5.divClass}>{userFilters.noteNames ? fretboardObj.fret24.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret24.string4.divClass}>{userFilters.noteNames ? fretboardObj.fret24.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret24.string3.divClass}>{userFilters.noteNames ? fretboardObj.fret24.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret24.string2.divClass}>{userFilters.noteNames ? fretboardObj.fret24.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret24.string1.divClass}>{userFilters.noteNames ? fretboardObj.fret24.string1.pitch : null} </div>
                                        </div>
                                </div>
                        </div>

                        <div className="ff-key-selection">
                                <div className="ff-key-selection-title">Root:</div>
                                <select value={userFilters.keyRoot} onChange={handleRootChange} className="">
                                        <option value="C">C</option>
                                        <option value="C#">C#</option>
                                </select>
                        </div>
                </div>
        );
}
