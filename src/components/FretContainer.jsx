import React from 'react'
import * as Tone from "tone";
import GuitarTone from './GuitarTone';

import ButtonGroup from 'react-bootstrap/ButtonGroup';


const FretContainer = ({title, notes}) => {
    const notesArray = typeof notes === 'string' ? notes.split(' ') : [];

  return (
    <div>
    <ButtonGroup className="me-2" aria-label={title} vertical>
        <h3>{title}</h3>
        <GuitarTone note={notesArray[0]}/>
        <GuitarTone note={notesArray[1]} />
        <GuitarTone note={notesArray[2]} />
        <GuitarTone note={notesArray[3]} />
        <GuitarTone note={notesArray[4]} />
        <GuitarTone note={notesArray[5]} />
    </ButtonGroup>
    </div>
  )
}

export default FretContainer