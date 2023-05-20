
import { useRef, useState } from 'react';
import './App.css';
//components
import ColorGenerator from './components/ColorGenerator';

function App() {
  const [circles, setCircles] = useState([]);

  const handleCircleClick = (e)=>{}


  const randomColor = () => {
    let color = '#';
    const letters = '0123456789ABCEF';
    for(let i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random()*16)];
    }
    return color;
  }

  const undo = () => {
    setCircles(circles.slice(0, -1));
  }
  
  const redo  = () => {
    setCircles(circles.slice(0, +1));
  }

  return (
    <div className="App">
      <div className="btns-wrapper">
        <button onClick={redo}>redo</button>
        <button onClick={undo}>undo</button>
      </div>
      <ColorGenerator />
    </div>
  );
}

export default App;
