import React from 'react';
import './Cell.styles.css';

const Cell = (props) => {
    let classes = "Cell" + (props.isLit ? " Cell-lit" : "");
    return (
        <td className = {classes} onClick = {props.flipCellsAroundMe} />
    )
}

export default Cell;


// import React, { Component } from 'react';
// import './Cell.styles.css';

// class Cell extends Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }

//         handleClick (evt)  {
//             this.props.flipCellsAroundMe();
//         }

//         render() {
//             let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");
//             return (
//                  <td className = {classes} onClick = {this.handleClick} />
//                      )

//     }
// }

// export default Cell;