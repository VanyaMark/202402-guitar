import React, { useEffect } from "react";
import * as Tone from "tone";
import Button from 'react-bootstrap/Button';

const GuitarTone = ({note}) => {
  
  // Create a FMSynth for a guitar-like sound
  const synth = new Tone.FMSynth().toDestination();

  useEffect(() => {
    // Start the audio context when the component mounts
    Tone.start();
  }, []);

  const handleMouseDown = () => {

     // Start the audio context in response to a user gesture
     Tone.start();

    // Trigger attack when mouse is down
    synth.triggerAttack(note);

  };

  const handleMouseUp = () => {
        // Use setTimeout to ensure the triggerRelease is called after a short delay
        setTimeout(() => {
            synth.triggerRelease();
          }, 100); // Adjust the delay as needed
  };

  return (

      <Button variant="danger" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        {note}
      </Button>

  );
};


/*
const GuitarPlayer = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = () => {
    setIsMouseDown(true);

    // Create a PluckSynth for a guitar-like sound
    const synth = new Tone.PluckSynth().toDestination();

    // Trigger attack when mouse is down
    synth.triggerAttack('C3');
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);

    // Release the note when mouse is up
    Tone.Transport.scheduleOnce(() => {
      const synth = new Tone.PluckSynth().toDestination();
      synth.triggerRelease();
    }, '+0.1'); // Add a small delay to release after mouse up
  };

  return (
    <div>
      <h1>Guitar Player</h1>
      <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        Play Guitar Sound
      </button>
    </div>
  );
};

*/

export default GuitarTone;
