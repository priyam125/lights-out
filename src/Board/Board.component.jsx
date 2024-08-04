import React, { Component } from 'react';
import Cell from '../Cell/Cell.component';
import './Board.styles.css';

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasWon: false,
            board: this.craeteBoard()
        };
    }

    craeteBoard = () => {
        let board = [];
        
        for(let y = 0; y< this.props.nrows; y++) {
            let row = [];
            for(let x =0; x < this.props.ncols; x++) {
                row.push(Math.random() < this.props.chanceLightStartsOn);
            }
            board.push(row);
        }
        return board;
    }

    flipCellsAround = (coord) => {
        let { ncols, nrows } = this.props;
        let board = this.state.board;
        let [y, x] = coord.split("-").map(Number);

         const flipCell = (y, x) => {
            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                board[y][x] = !board[y][x];
        }
    }

        flipCell(y,x);
        flipCell(y, x-1);
        flipCell(y, x+1);
        flipCell(y-1, x);
        flipCell(y+1, x);

        let hasWon = board.every(row => row.every(cell => !cell));
        this.setState({
            board: board,
            hasWon: hasWon
        });
    }

    render() {

        if(this.state.hasWon)
        return (
            <div className = 'Board-title'>
                <div className = 'winner'>
                    <span className = 'neon-orange'>You</span>
                    <span className = 'neon-blue'>Win</span>    
                </div>
            </div>
        )

        let tblBoard = [];
        for (let y=0; y < this.props.nrows; y++) {
            let row = [];
            for (let x =0; x<this.props.ncols; x++) {
                let coord = `${y}-${x}`;
                row.push(
                    <Cell
                     key = {coord} 
                     isLit = {this.state.board[y][x]} 
                     flipCellsAroundMe = {() => this.flipCellsAround(coord)} />);
            }
            tblBoard.push(<tr key = {y}>{row}</tr>);
        }

        return(
            <div className='board-container'>
                <div className = 'Board-title'>
                    <div className = 'neon-orange'>Lights</div>
                    <div className = 'neon-blue'>Out</div>
                </div>
                <table className = 'Board'>
                    <tbody>
                        {tblBoard}
                    </tbody>
                </table>
            </div>
            
        )
    }
}


export default Board;