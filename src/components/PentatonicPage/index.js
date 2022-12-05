import React from "react";
import FretboardView from "../FretboardView";
import "../../styles/PentatonicPage.css";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";

export default function PentatonicPage() {
  const [fretboardCount, setFretboardCount] = React.useState(1);
  const [advancedSettings, setAdvancedSettings] = React.useState({ frets: 4 });
  const [showModal, setShowModal] = React.useState(false);

  //handle adding a fretboard
  const handleAddFretboard = () => {
    //add one to fretboardCount
    setFretboardCount(fretboardCount + 1);
  };

  //handle removing a fretboard
  const handleRemoveFretboard = () => {
    //remove one from fretboardCount
    setFretboardCount(fretboardCount - 1);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // return one FretboardView component for each fretboardCount
  return (
    <div>
      <div className="advanced-settings-button-div">
        <Button variant="outline-secondary" size="sm" onClick={handleShowModal}>
          Settings
        </Button>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="frets-selection-in-modal">
            <div className="frets-text-in-modal">Frets:</div>
            <div className="button-group-frets-in-modal">
              <ButtonGroup>
                <ToggleButton
                  variant={
                    advancedSettings.frets === 4
                      ? "secondary"
                      : "outline-secondary"
                  }
                  onClick={() => {
                    setAdvancedSettings({ frets: 4 });
                  }}
                >
                  Four
                </ToggleButton>
                <ToggleButton
                  variant={
                    advancedSettings.frets === 6
                      ? "secondary"
                      : "outline-secondary"
                  }
                  onClick={() => setAdvancedSettings({ frets: 6 })}
                >
                  Six
                </ToggleButton>
              </ButtonGroup>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        {Array.from(Array(fretboardCount).keys()).map((i) => (
          <div key={i}>
            <div>
              <FretboardView
                advancedSettings={advancedSettings}
                setAdvancedSettings={setAdvancedSettings}
                key={advancedSettings.frets}
              />
            </div>
          </div>
        ))}

        {/* FRETBOARD COLOR KEY */}
        <div className="fretboard-view-footer">
          <div className="footer-big-div">
            <div className="footer-little-div">
              <div className="active-note-key-example">Root</div>
              <div className="active-note-3rd-key-example">3rd</div>
              <div className="active-note-5th-key-example">5th</div>
            </div>
          </div>
        </div>

        {/* add button  */}
        <button className="add-fretboard-button" onClick={handleAddFretboard}>
          +
        </button>
        {/* only show the remove button if there is more than one fretboard */}
        {fretboardCount > 1 && (
          <button
            className="remove-fretboard-button"
            onClick={handleRemoveFretboard}
          >
            -
          </button>
        )}
      </div>
    </div>
  );
}
