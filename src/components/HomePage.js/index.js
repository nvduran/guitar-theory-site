import React from "react";
import { Link } from "react-router-dom";
import "../../styles/HomePage.css";

export const HomePage = () => {
        return (
                <div className="homepage">
                        <div className="top-background-div">
                                <h1>Guitar-Theory</h1>
                        </div>
                        <h2 className="home-charts-title">Applying</h2>
                        <div className="button-container">
                                <Link to="/FullFretboard" className="homepage-button">
                                        Full Fretboard
                                </Link>
                                <Link to="/PentatonicCharts" className="homepage-button">
                                        Pentatonic Charts
                                </Link>
                        </div>
                        <h2 className="home-charts-title-2">Learning</h2>
                        <div className="button-container">
                                <Link to="/AboutPentatonics" className="homepage-button">
                                        What are Pentatonics?
                                </Link>
                        </div>
                </div>
        );
};
