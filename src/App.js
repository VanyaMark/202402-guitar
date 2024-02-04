import "./App.css";
import Button from "./components/Button";
import GuitarTone from "./components/GuitarTone";
import FretContainer from "./components/FretContainer";

function App() {
  return (
    <div className="App">
      <h1>Say Hello to your first Guitar Lesson!</h1>
      <div className="row">
        <FretContainer
          className="row"
          title="Free Strings"
          notes="E2 A2 D3 G3 B3 E4"
        />
        <FretContainer title="Fret 1" notes="F2 A#2 D#3 G#3 C4 F4" />
        <FretContainer title="Fret 2" notes="F#2 B2 E3 A3 C#4 F#4" />
      </div>
    </div>
  );
}

export default App;
