import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SayWhat from "../SayWhat";
import "../../styles/NavBar.css";

export default function NavBar() {
        return (
                <div>
                        <Navbar collapseOnSelect expand="lg" variant="light" className="navbar-main-div">
                                <Container className="nav-bs-container">
                                        <Navbar.Brand href="/">
                                                <div className="nav-guitar-div">Guitar-</div>
                                                <div className="nav-theory-div">Theory</div>
                                        </Navbar.Brand>
                                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                        <Navbar.Collapse id="responsive-navbar-nav">
                                                <Nav className="me-auto">
                                                        <Nav.Link href="/FullFretboard">Fretboard View</Nav.Link>
                                                        <Nav.Link href="/PentatonicCharts">Pentatonic Charts</Nav.Link>
                                                        <Nav.Link href="/AboutPentatonics">About Pentatonics</Nav.Link>
                                                        <Nav.Link href="/PrivacyPolicy">Privacy Policy</Nav.Link>
                                                        <Nav.Link href="/About">About</Nav.Link>
                                                </Nav>
                                        </Navbar.Collapse>
                                </Container>
                        </Navbar>
                </div>
        );
}
