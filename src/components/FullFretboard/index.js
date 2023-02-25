import React from "react";
import { useState } from "react";
import "../../styles/FullFretboard.css";

export default function FullFretboard() {
        const [fretboardObj, setFretboardObj] = useState({
                fret1: {
                        string1: { pitch: "E", divClass: "" },
                        string2: { pitch: "A", divClass: "" },
                        string3: { pitch: "D", divClass: "" },
                        string4: { pitch: "G", divClass: "" },
                        string5: { pitch: "B", divClass: "" },
                        string6: { pitch: "E", divClass: "" },
                },
                fret2: {
                        string1: { pitch: "F", divClass: "" },
                        string2: { pitch: "A#", divClass: "" },
                        string3: { pitch: "D#", divClass: "" },
                        string4: { pitch: "G#", divClass: "" },
                        string5: { pitch: "C", divClass: "" },
                        string6: { pitch: "F", divClass: "" },
                },
        });

        console.log(fretboardObj);

        return (
                <div className="big-full-fretboard-container">
                        <div className="big-full-fretboard-div">
                                <div className="ff-fret1">
                                        <div className={fretboardObj.fret1.string1.divClass}>{fretboardObj.fret1.string1.pitch} </div>
                                        <div className={fretboardObj.fret1.string2.divClass}>{fretboardObj.fret1.string2.pitch} </div>
                                        <div className={fretboardObj.fret1.string3.divClass}>{fretboardObj.fret1.string3.pitch} </div>
                                        <div className={fretboardObj.fret1.string4.divClass}>{fretboardObj.fret1.string4.pitch} </div>
                                        <div className={fretboardObj.fret1.string5.divClass}>{fretboardObj.fret1.string5.pitch} </div>
                                        <div className={fretboardObj.fret1.string6.divClass}>{fretboardObj.fret1.string6.pitch} </div>
                                </div>
                                <div className="ff-fret2"></div>
                                <div className="ff-fret3"></div>
                                <div className="ff-fret4"></div>
                                <div className="ff-fret5"></div>
                                <div className="ff-fret6"></div>
                                <div className="ff-fret7"></div>
                                <div className="ff-fret8"></div>
                                <div className="ff-fret9"></div>
                                <div className="ff-fret10"></div>
                                <div className="ff-fret11"></div>
                                <div className="ff-fret12"></div>
                                <div className="ff-fret13"></div>
                                <div className="ff-fret14"></div>
                                <div className="ff-fret15"></div>
                                <div className="ff-fret16"></div>
                                <div className="ff-fret17"></div>
                                <div className="ff-fret18"></div>
                                <div className="ff-fret19"></div>
                                <div className="ff-fret20"></div>
                                <div className="ff-fret21"></div>
                                <div className="ff-fret22"></div>
                                <div className="ff-fret23"></div>
                                <div className="ff-fret24"></div>
                        </div>
                </div>
        );
}
