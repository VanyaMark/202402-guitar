import React from 'react'
import * as Tone from "tone";
import GuitarTone from './GuitarTone';

const FretContainer = ({title}) => {
  return (
    <div>
        <h3>{title}</h3>
        <GuitarTone note="E2"/>
        <GuitarTone note="A2" />
        <GuitarTone note="D3" />
        <GuitarTone note="G3" />
        <GuitarTone note="B3" />
        <GuitarTone note="E4" />
    </div>
  )
}

export default FretContainer