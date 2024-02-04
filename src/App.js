import './App.css';
import Button from './components/Button';
import GuitarTone from './components/GuitarTone';
import FretContainer from './components/FretContainer';

function App() {
  return (
    <div className="App">
      <h1>Say Hello to your first Guitar Lesson!</h1>
      <Button />
      <FretContainer title="Free Strings" notes="E2 A2 D3 G3 B3 E4"/>
      <FretContainer title="Fret 1" notes="E2 A2 D3 G3 B3 E4"/>
    </div>
  );
}

export default App;
