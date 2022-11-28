import React from "react";
import FretboardView from "../FretboardView";
import "../../styles/PentatonicPage.css";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
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
      <Button variant="primary" onClick={handleShowModal}>
        Advanced Settings
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Frets:
            <ToggleButton
              variant={
                advancedSettings.frets === 4
                  ? "outline-success"
                  : "outline-danger"
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
                  ? "outline-success"
                  : "outline-danger"
              }
              onClick={() => setAdvancedSettings({ frets: 6 })}
            >
              Six
            </ToggleButton>
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
