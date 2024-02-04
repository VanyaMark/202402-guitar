import './App.css';
import Button from './components/Button';
import GuitarTone from './components/GuitarTone';
import FretContainer from './components/FretContainer';

function App() {
  return (
    <div className="App">
      <h1>Say Hello to your first Guitar Lesson!</h1>
      <Button />
      <GuitarTone />
      <FretContainer />
    </div>
  );
}

export default App;
