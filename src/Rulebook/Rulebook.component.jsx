import React from 'react';
import './Rulebook.styles.css';

 const Rulebook = ({menuOpen, setMenuOpen}) => {

     if (menuOpen)
    return(
        <div className={"Rulebook"+("active")}>
        <div className="Winner">
            <span className = 'neon-orange'>Rule</span>
            <span className = 'neon-blue'>Book</span>
        </div>
        <div className="Text">
            <div>Lights Out is a game which consists of a 5 by 5 grid of lights. Some are on and some are off.</div>
            <div>Clicking a light will toggle it(on to off, off to on). It will also toggle 4 adjascent lights (on the left, right, above and below it).</div>
            <div>To solve the puzzle, you have to turn OFF all the ligts on the board</div>
            <div >All the best!!</div>
        </div> 
        </div>
    );

    else return (
        <div className={"Rulebook"}>
            <span className = 'neon-orange'>Rule</span>
            <span className = 'neon-blue'>Book</span> 
            <p>These are the set of rules to play</p>
            <p>All the best!!</p>
        </div>
    );

}

export default Rulebook;