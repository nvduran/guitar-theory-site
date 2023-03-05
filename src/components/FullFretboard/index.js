import React from "react";
import { useState } from "react";
import { setState } from "react";
import axios from "axios";
import "../../styles/FullFretboard.css";

export default function FullFretboard() {
        const [updatePage, setUpdatePage] = useState(false);
        const [noteNames, setNoteNames] = useState(true);
        const [keyRoot, setKeyRoot] = useState("C");
        const [keyMajorOrMinor, setKeyMajorOrMinor] = useState("major");
        const [userFilters, setUserFilters] = useState({
                noteNames: true,
                keyRoot: "C",
                keyMajorOrMinor: "major",
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
                        string1: { pitch: "F", divClass: "regular-note-div" },
                        string2: { pitch: "A#", divClass: "regular-note-div" },
                        string3: { pitch: "D#", divClass: "regular-note-div" },
                        string4: { pitch: "G#", divClass: "regular-note-div" },
                        string5: { pitch: "C", divClass: "regular-note-div" },
                        string6: { pitch: "F", divClass: "regular-note-div" },
                },
                fret2: {
                        string1: { pitch: "F#", divClass: "regular-note-div" },
                        string2: { pitch: "B", divClass: "regular-note-div" },
                        string3: { pitch: "E", divClass: "regular-note-div" },
                        string4: { pitch: "A", divClass: "regular-note-div" },
                        string5: { pitch: "C#", divClass: "regular-note-div" },
                        string6: { pitch: "F#", divClass: "regular-note-div" },
                },
                fret3: {
                        string1: { pitch: "G", divClass: "regular-note-div" },
                        string2: { pitch: "C", divClass: "regular-note-div" },
                        string3: { pitch: "F", divClass: "regular-note-div" },
                        string4: { pitch: "A#", divClass: "regular-note-div" },
                        string5: { pitch: "D", divClass: "regular-note-div" },
                        string6: { pitch: "G", divClass: "regular-note-div" },
                },
                fret4: {
                        string1: { pitch: "G#", divClass: "regular-note-div" },
                        string2: { pitch: "C#", divClass: "regular-note-div" },
                        string3: { pitch: "F#", divClass: "regular-note-div" },
                        string4: { pitch: "B", divClass: "regular-note-div" },
                        string5: { pitch: "D#", divClass: "regular-note-div" },
                        string6: { pitch: "G#", divClass: "regular-note-div" },
                },
                fret5: {
                        string1: { pitch: "A", divClass: "regular-note-div" },
                        string2: { pitch: "D", divClass: "regular-note-div" },
                        string3: { pitch: "G", divClass: "regular-note-div" },
                        string4: { pitch: "C", divClass: "regular-note-div" },
                        string5: { pitch: "E", divClass: "regular-note-div" },
                        string6: { pitch: "A", divClass: "regular-note-div" },
                },
                fret6: {
                        string1: { pitch: "A#", divClass: "regular-note-div" },
                        string2: { pitch: "D#", divClass: "regular-note-div" },
                        string3: { pitch: "G#", divClass: "regular-note-div" },
                        string4: { pitch: "C#", divClass: "regular-note-div" },
                        string5: { pitch: "F", divClass: "regular-note-div" },
                        string6: { pitch: "A#", divClass: "regular-note-div" },
                },
                fret7: {
                        string1: { pitch: "B", divClass: "regular-note-div" },
                        string2: { pitch: "E", divClass: "regular-note-div" },
                        string3: { pitch: "A", divClass: "regular-note-div" },
                        string4: { pitch: "D", divClass: "regular-note-div" },
                        string5: { pitch: "F#", divClass: "regular-note-div" },
                        string6: { pitch: "B", divClass: "regular-note-div" },
                },
                fret8: {
                        string1: { pitch: "C", divClass: "regular-note-div" },
                        string2: { pitch: "F", divClass: "regular-note-div" },
                        string3: { pitch: "A#", divClass: "regular-note-div" },
                        string4: { pitch: "D#", divClass: "regular-note-div" },
                        string5: { pitch: "G", divClass: "regular-note-div" },
                        string6: { pitch: "C", divClass: "regular-note-div" },
                },
                fret9: {
                        string1: { pitch: "C#", divClass: "regular-note-div" },
                        string2: { pitch: "F#", divClass: "regular-note-div" },
                        string3: { pitch: "B", divClass: "regular-note-div" },
                        string4: { pitch: "E", divClass: "regular-note-div" },
                        string5: { pitch: "G#", divClass: "regular-note-div" },
                        string6: { pitch: "C#", divClass: "regular-note-div" },
                },
                fret10: {
                        string1: { pitch: "D", divClass: "regular-note-div" },
                        string2: { pitch: "G", divClass: "regular-note-div" },
                        string3: { pitch: "C", divClass: "regular-note-div" },
                        string4: { pitch: "F", divClass: "regular-note-div" },
                        string5: { pitch: "A", divClass: "regular-note-div" },
                        string6: { pitch: "D", divClass: "regular-note-div" },
                },
                fret11: {
                        string1: { pitch: "D#", divClass: "regular-note-div" },
                        string2: { pitch: "G#", divClass: "regular-note-div" },
                        string3: { pitch: "C#", divClass: "regular-note-div" },
                        string4: { pitch: "F#", divClass: "regular-note-div" },
                        string5: { pitch: "A#", divClass: "regular-note-div" },
                        string6: { pitch: "D#", divClass: "regular-note-div" },
                },
                fret12: {
                        string1: { pitch: "E", divClass: "regular-note-div" },
                        string2: { pitch: "A", divClass: "regular-note-div" },
                        string3: { pitch: "D", divClass: "regular-note-div" },
                        string4: { pitch: "G", divClass: "regular-note-div" },
                        string5: { pitch: "B", divClass: "regular-note-div" },
                        string6: { pitch: "E", divClass: "regular-note-div" },
                },
                fret13: {
                        string1: { pitch: "F", divClass: "regular-note-div" },
                        string2: { pitch: "A#", divClass: "regular-note-div" },
                        string3: { pitch: "D#", divClass: "regular-note-div" },
                        string4: { pitch: "G#", divClass: "regular-note-div" },
                        string5: { pitch: "C", divClass: "regular-note-div" },
                        string6: { pitch: "F", divClass: "regular-note-div" },
                },
                fret14: {
                        string1: { pitch: "F#", divClass: "regular-note-div" },
                        string2: { pitch: "B", divClass: "regular-note-div" },
                        string3: { pitch: "E", divClass: "regular-note-div" },
                        string4: { pitch: "A", divClass: "regular-note-div" },
                        string5: { pitch: "C#", divClass: "regular-note-div" },
                        string6: { pitch: "F#", divClass: "regular-note-div" },
                },
                fret15: {
                        string1: { pitch: "G", divClass: "regular-note-div" },
                        string2: { pitch: "C", divClass: "regular-note-div" },
                        string3: { pitch: "F", divClass: "regular-note-div" },
                        string4: { pitch: "A#", divClass: "regular-note-div" },
                        string5: { pitch: "D", divClass: "regular-note-div" },
                        string6: { pitch: "G", divClass: "regular-note-div" },
                },
                fret16: {
                        string1: { pitch: "G#", divClass: "regular-note-div" },
                        string2: { pitch: "C#", divClass: "regular-note-div" },
                        string3: { pitch: "F#", divClass: "regular-note-div" },
                        string4: { pitch: "B", divClass: "regular-note-div" },
                        string5: { pitch: "D#", divClass: "regular-note-div" },
                        string6: { pitch: "G#", divClass: "regular-note-div" },
                },
                fret17: {
                        string1: { pitch: "A", divClass: "regular-note-div" },
                        string2: { pitch: "D", divClass: "regular-note-div" },
                        string3: { pitch: "G", divClass: "regular-note-div" },
                        string4: { pitch: "C", divClass: "regular-note-div" },
                        string5: { pitch: "E", divClass: "regular-note-div" },
                        string6: { pitch: "A", divClass: "regular-note-div" },
                },
                fret18: {
                        string1: { pitch: "A#", divClass: "regular-note-div" },
                        string2: { pitch: "D#", divClass: "regular-note-div" },
                        string3: { pitch: "G#", divClass: "regular-note-div" },
                        string4: { pitch: "C#", divClass: "regular-note-div" },
                        string5: { pitch: "F", divClass: "regular-note-div" },
                        string6: { pitch: "A#", divClass: "regular-note-div" },
                },
                fret19: {
                        string1: { pitch: "B", divClass: "regular-note-div" },
                        string2: { pitch: "E", divClass: "regular-note-div" },
                        string3: { pitch: "A", divClass: "regular-note-div" },
                        string4: { pitch: "D", divClass: "regular-note-div" },
                        string5: { pitch: "F#", divClass: "regular-note-div" },
                        string6: { pitch: "B", divClass: "regular-note-div" },
                },
                fret20: {
                        string1: { pitch: "C", divClass: "regular-note-div" },
                        string2: { pitch: "F", divClass: "regular-note-div" },
                        string3: { pitch: "A#", divClass: "regular-note-div" },
                        string4: { pitch: "D#", divClass: "regular-note-div" },
                        string5: { pitch: "G", divClass: "regular-note-div" },
                        string6: { pitch: "C", divClass: "regular-note-div" },
                },
                fret21: {
                        string1: { pitch: "C#", divClass: "regular-note-div" },
                        string2: { pitch: "F#", divClass: "regular-note-div" },
                        string3: { pitch: "B", divClass: "regular-note-div" },
                        string4: { pitch: "E", divClass: "regular-note-div" },
                        string5: { pitch: "G#", divClass: "regular-note-div" },
                        string6: { pitch: "C#", divClass: "regular-note-div" },
                },
                fret22: {
                        string1: { pitch: "D", divClass: "regular-note-div" },
                        string2: { pitch: "G", divClass: "regular-note-div" },
                        string3: { pitch: "C", divClass: "regular-note-div" },
                        string4: { pitch: "F", divClass: "regular-note-div" },
                        string5: { pitch: "A", divClass: "regular-note-div" },
                        string6: { pitch: "D", divClass: "regular-note-div" },
                },
                fret23: {
                        string1: { pitch: "D#", divClass: "regular-note-div" },
                        string2: { pitch: "G#", divClass: "regular-note-div" },
                        string3: { pitch: "C#", divClass: "regular-note-div" },
                        string4: { pitch: "F#", divClass: "regular-note-div" },
                        string5: { pitch: "A#", divClass: "regular-note-div" },
                        string6: { pitch: "D#", divClass: "regular-note-div" },
                },
                fret24: {
                        string1: { pitch: "E", divClass: "regular-note-div" },
                        string2: { pitch: "A", divClass: "regular-note-div" },
                        string3: { pitch: "D", divClass: "regular-note-div" },
                        string4: { pitch: "G", divClass: "regular-note-div" },
                        string5: { pitch: "B", divClass: "regular-note-div" },
                        string6: { pitch: "E", divClass: "regular-note-div" },
                },
        });

        const handleRootChange = (e) => {
                setKeyRoot(e.target.value);
        };

        const handleMajorOrMinorChange = (e) => {
                setKeyMajorOrMinor(e.target.value);
        };

        const handleSubmit = (e) => {
                changeNoteHighlighting();
                submitActivityLog("submit", "user", "full fretboard");
        };

        const handleClear = (e) => {
                //reload page to clear fretboard
                window.location.reload();
        };

        const handleNoteNamesChange = (e) => {
                //handle note names on/off and refresh fretboard
                setNoteNames(e.target.value);
        };

        const submitActivityLog = (action, user, details) => {
                console.log("submitting activity log");
                const log = {
                        action: action,
                        user: user,
                        details: details,
                };
                axios.post("https://irsite4-backend.herokuapp.com/guitarDb/activity", log).then((res) => console.log(res.data));
        };

        // START CHANGE NOTE HIGHLIGHTING FUNCTION
        const changeNoteHighlighting = () => {
                let arrOfNotes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
                let indexOfNote = arrOfNotes.indexOf(keyRoot);
                let indexOfThird = indexOfNote + 4;
                if (keyMajorOrMinor === "minor") {
                        indexOfThird = indexOfNote + 3;
                }
                let targetThird = arrOfNotes[indexOfThird];
                let indexOfFifth = indexOfNote + 7;
                let targetFifth = arrOfNotes[indexOfFifth];
                let tempFretboardObj = fretboardObj;

                //SORT OUT ALL OF THE CHORD TONES HERE WITH ***NO*** NOTE NAMES
                console.log("noteNames: " + noteNames);
                if (noteNames === true) {
                        console.log("SLES");
                        for (let i = 0; i < 25; i++) {
                                for (let j = 1; j < 7; j++) {
                                        if (tempFretboardObj["fret" + i]["string" + j].pitch === keyRoot) {
                                                tempFretboardObj["fret" + i]["string" + j].divClass = "active-note";
                                        } else if (tempFretboardObj["fret" + i]["string" + j].pitch === targetThird) {
                                                tempFretboardObj["fret" + i]["string" + j].divClass = "active-note-3rd";
                                        } else if (tempFretboardObj["fret" + i]["string" + j].pitch === targetFifth) {
                                                tempFretboardObj["fret" + i]["string" + j].divClass = "active-note-5th";
                                        } else {
                                                tempFretboardObj["fret" + i]["string" + j].divClass = "regular-note-div";
                                        }
                                }
                        }
                        setFretboardObj(tempFretboardObj);
                        setUpdatePage(!updatePage);
                } else {
                        console.log("NOS");
                        for (let i = 0; i < 25; i++) {
                                for (let j = 1; j < 7; j++) {
                                        if (tempFretboardObj["fret" + i]["string" + j].pitch === keyRoot) {
                                                tempFretboardObj["fret" + i]["string" + j].divClass = "highlighted-note-root-no-note-name";
                                        } else if (tempFretboardObj["fret" + i]["string" + j].pitch === targetThird) {
                                                tempFretboardObj["fret" + i]["string" + j].divClass = "highlighted-note-third-no-note-name";
                                        } else if (tempFretboardObj["fret" + i]["string" + j].pitch === targetFifth) {
                                                tempFretboardObj["fret" + i]["string" + j].divClass = "highlighted-note-fifth-no-note-name";
                                        } else {
                                                tempFretboardObj["fret" + i]["string" + j].divClass = "regular-note-div-no-note-name";
                                        }
                                }
                        }
                        setFretboardObj(tempFretboardObj);
                        setUpdatePage(!updatePage);
                }
        };
        // END CHANGE NOTE HIGHLIGHTING FUNCTION

        console.log(noteNames);

        let NotesNamesChoice = noteNames;

        return (
                <div>
                        <div className="big-full-fretboard-container">
                                <div className="big-full-fretboard-fret-numbers-div">
                                        <div className="fret-number-div-0fret"></div>
                                        <div className="fret-number-div"></div>
                                        <div className="fret-number-div"></div>
                                        <div className="fret-number-div">
                                                <div className="fret-number-dot-div">3</div>
                                        </div>
                                        <div className="fret-number-div"></div>
                                        <div className="fret-number-div">
                                                <div className="fret-number-dot-div">5</div>
                                        </div>
                                        <div className="fret-number-div"></div>
                                        <div className="fret-number-div">
                                                <div className="fret-number-dot-div">7</div>
                                        </div>
                                        <div className="fret-number-div"></div>
                                        <div className="fret-number-div">
                                                <div className="fret-number-dot-div">9</div>
                                        </div>
                                        <div className="fret-number-div"></div>
                                        <div className="fret-number-div"></div>
                                        <div className="fret-number-div">
                                                <div className="fret-number-dot-div">12</div>
                                        </div>
                                        <div className="fret-number-div"></div>
                                        <div className="fret-number-div"></div>
                                        <div className="fret-number-div">
                                                <div className="fret-number-dot-div">15</div>
                                        </div>
                                        <div className="fret-number-div"></div>
                                        <div className="fret-number-div">
                                                <div className="fret-number-dot-div">17</div>
                                        </div>
                                        <div className="fret-number-div"></div>
                                        <div className="fret-number-div">
                                                <div className="fret-number-dot-div">19</div>
                                        </div>
                                        <div className="fret-number-div"></div>
                                        <div className="fret-number-div">
                                                <div className="fret-number-dot-div">21</div>
                                        </div>
                                        <div className="fret-number-div"></div>
                                        <div className="fret-number-div"></div>
                                        <div className="fret-number-div">
                                                <div className="fret-number-dot-div">24</div>
                                        </div>
                                </div>
                                <div className="big-full-fretboard-div">
                                        <div className="ff-fret0">
                                                <div className="fret-0-notes-div">{userFilters.noteNames ? fretboardObj.fret0.string6.pitch : null} </div>
                                                <div className="fret-0-notes-div">{userFilters.noteNames ? fretboardObj.fret0.string5.pitch : null} </div>
                                                <div className="fret-0-notes-div">{userFilters.noteNames ? fretboardObj.fret0.string4.pitch : null} </div>
                                                <div className="fret-0-notes-div">{userFilters.noteNames ? fretboardObj.fret0.string3.pitch : null} </div>
                                                <div className="fret-0-notes-div">{userFilters.noteNames ? fretboardObj.fret0.string2.pitch : null} </div>
                                                <div className="fret-0-notes-div">{userFilters.noteNames ? fretboardObj.fret0.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret1">
                                                <div className={fretboardObj.fret1.string6.divClass}>{fretboardObj.fret1.string6.pitch} </div>
                                                <div className={fretboardObj.fret1.string5.divClass}>{noteNames ? fretboardObj.fret1.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret1.string4.divClass}>{noteNames ? fretboardObj.fret1.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret1.string3.divClass}>{noteNames ? fretboardObj.fret1.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret1.string2.divClass}>{noteNames ? fretboardObj.fret1.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret1.string1.divClass}>{noteNames ? fretboardObj.fret1.string1.pitch : null} </div>
                                        </div>
                                        <div className="ff-fret2">
                                                <div className={fretboardObj.fret2.string6.divClass}>{noteNames ? fretboardObj.fret2.string6.pitch : null} </div>
                                                <div className={fretboardObj.fret2.string5.divClass}>{noteNames ? fretboardObj.fret2.string5.pitch : null} </div>
                                                <div className={fretboardObj.fret2.string4.divClass}>{noteNames ? fretboardObj.fret2.string4.pitch : null} </div>
                                                <div className={fretboardObj.fret2.string3.divClass}>{noteNames ? fretboardObj.fret2.string3.pitch : null} </div>
                                                <div className={fretboardObj.fret2.string2.divClass}>{noteNames ? fretboardObj.fret2.string2.pitch : null} </div>
                                                <div className={fretboardObj.fret2.string1.divClass}>{noteNames ? fretboardObj.fret2.string1.pitch : null} </div>
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

                        <div className="ff-chord-type-selection-area">
                                <div className="ff-key-selection">
                                        <div className="ff-key-selection-title">Chord:</div>
                                        <select value={keyRoot} onChange={handleRootChange} className="below-ff-change-selectors">
                                                <option value="C">C</option>
                                                <option value="C#">C#</option>
                                                <option value="D">D</option>
                                                <option value="D#">D#</option>
                                                <option value="E">E</option>
                                                <option value="F">F</option>
                                                <option value="F#">F#</option>
                                                <option value="G">G</option>
                                                <option value="G#">G#</option>
                                                <option value="A">A</option>
                                                <option value="A#">A#</option>
                                                <option value="B">B</option>
                                        </select>
                                        <select value={keyMajorOrMinor} onChange={handleMajorOrMinorChange} className="below-ff-change-selectors">
                                                <option value="major">Major</option>
                                                <option value="minor">Minor</option>
                                        </select>
                                </div>

                                <div className="ff-note-names-selection">
                                        <div className="ff-note-names-selection-title">Note Names:</div>
                                        <select value={noteNames} onChange={handleNoteNamesChange} className="below-ff-change-selectors">
                                                <option value={true}>Yes</option>
                                                <option value={false}>No</option>
                                        </select>
                                </div>
                                <div className="ff-submit-button" onClick={handleSubmit}>
                                        Submit
                                </div>
                                <div className="ff-clear-button" onClick={handleClear}>
                                        Reset
                                </div>
                        </div>

                        {/* FRETBOARD COLOR KEY */}
                        <div className="fretboard-view-footer">
                                <div className="footer-big-div">
                                        <div className="footer-little-div">
                                                <div className="active-note-key-example">Root</div>
                                                <div className="active-note-3rd-key-example">Third</div>
                                                <div className="active-note-5th-key-example">Fifth</div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
