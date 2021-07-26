import React from 'react';
import './App.css';
import Board from './Board/Board.component';
import Rulebook from './Rulebook/Rulebook.component';
import Navbar from './Rules/Rules.component';
import { useState } from 'react';


function App() {
  /* let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]; */
    const [menuOpen, setMenuOpen] = useState(false)


  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Rulebook menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="App">
      <Board nrows = {5} ncols = {5} chanceLightStartsOn = {0.33}/>
      </div>
    </div>
    
  );
}

export default App;
