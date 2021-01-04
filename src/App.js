import React from 'react';
import './App.css';
import Board from './Board/Board.component';

function App() {
  /* let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]; */
  return (
    <div className="App">
      <Board nrows = {5} ncols = {5} chanceLightStartsOn = {0.33}/>
    </div>
  );
}

export default App;
