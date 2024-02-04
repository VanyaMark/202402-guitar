import React from 'react'
import * as Tone from "tone";
import GuitarTone from './GuitarTone';

const FretContainer = () => {
  return (
    <div>
        <GuitarTone note="E1"/>
        <GuitarTone note="B1" />
        <GuitarTone note="G1" />
        <GuitarTone note="D1" />
        <GuitarTone note="A1" />
        <GuitarTone note="E2" />
    </div>
  )
}

export default FretContainer