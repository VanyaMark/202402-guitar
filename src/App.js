import "./App.css";
import Button from "./components/Button";
import GuitarTone from "./components/GuitarTone";
import FretContainer from "./components/FretContainer";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App() {
  return (
    <div className="App">
      <h1>Say Hello to your first Guitar Lesson!</h1>
      <ButtonGroup className="me-2" aria-label="Second group">
        <FretContainer
          className="row"
          title="Free Strings"
          notes="E2 A2 D3 G3 B3 E4"
        />
        <FretContainer title="Fret 1" notes="F2 A#2 D#3 G#3 C4 F4" />
        <FretContainer title="Fret 2" notes="F#2 B2 E3 A3 C#4 F#4" />
        <FretContainer title="Fret 3" notes="G2 C3 F3 A#3 D4 G4" />
        <FretContainer title="Fret 4" notes="G#2 C#3 F#3 B3 D#4 G#4" />
        <FretContainer title="Fret 5" notes="A2 D3 G3 C4 E4 A4" />
        <FretContainer title="Fret 6" notes="A#2 D#3 G#3 C#4 F4 A#4" />
        <FretContainer title="Fret 7" notes="B2 E3 A3 D4 F#4 B4" />
        <FretContainer title="Fret 8" notes="C3 F3 A#3 D#4 G4 C5" />
        <FretContainer title="Fret 9" notes="C#3 F#3 B3 E4 G#4 C#5" />
        <FretContainer title="Fret 10" notes="D3 G3 C4 F4 A4 D5" />
      </ButtonGroup>
    </div>
  );
}

export default App;
