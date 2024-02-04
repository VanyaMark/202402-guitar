import React, { useState } from "react";
import * as Tone from "tone";

const GuitarTone = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  
  // Create a FMSynth for a guitar-like sound
  const synth = new Tone.FMSynth().toDestination();

  const handleMouseDown = () => {



    // Trigger attack when mouse is down
    synth.triggerAttack("C2");

  };

  const handleMouseUp = () => {
        // Use setTimeout to ensure the triggerRelease is called after a short delay
        setTimeout(() => {
            synth.triggerRelease();
          }, 100); // Adjust the delay as needed
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
