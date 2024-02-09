import React, { useState } from "react";
import * as Tone from "tone";
import Button from 'react-bootstrap/Button';

const BtnTone = () => {
  const [audioStarted, setAudioStarted] = useState(false);

  const handleButtonClick = async () => {
    try {
      // Ensure that Tone.start() is invoked directly within the user action
      await Tone.start();

      // Update state to indicate that audio has started
      setAudioStarted(true);
    } catch (error) {
      console.error("Error starting audio:", error);
    }
  };

  return (
    <Button variant="primary" onClick={handleButtonClick}>
      Start Audio
    </Button>
  );
};

export default BtnTone;