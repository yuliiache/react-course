import {useState} from "react";
import React from "react";

function Square({ value, onSquareClick }) {
    return <button className="square" onClick={onSquareClick}>
        {value}
    </button>;
}

function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if(squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O'
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : '0');
    }


  return(
      <>
        <div className='status'>{status}</div>
        <div className='board-row'>
            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className='board-row'>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className='board-row'>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
      </>
  )
}

export default function Game() {
    const [history, setHistory] = useState([
        { data: Array(9).fill(null), id: 0}
        ]);
    const [currentMove, setCurrentMove] = useState(0);
    const [isDescending, setIsDescending] = useState(false)
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove].data;

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), {data:nextSquares, id: currentMove + 1}];
        console.log(nextHistory)
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        let lastMove = false;
        if (move > 0 && move < history.length - 1) {
            description = 'Go to move #' + move;
        } else if (move === 0 ) {
            description = 'Go to game start';
        } else {
            lastMove = true;
            description = 'You are at move #' + move;
        }

        return (
            <React.Fragment key={squares.id}>
                {lastMove ? (
                    <li>
                    <p>{description}</p>
                    </li>
                ) : (
                    <li>
                        <button onClick={() => jumpTo(move)}>{description}</button>
                    </li>
                )}
            </React.Fragment>
        );
    })


    function handleToggle() {
        setIsDescending(!isDescending)
        console.log("toggled")
    }

    const sortedMoves = [...moves];
    sortedMoves.sort((a, b) =>
        isDescending
            ? Number(b.key) - Number(a.key)
            : Number(a.key) - Number(b.key)
    );

    return (
        <div className='game'>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className='game-info'>
                <ol>{sortedMoves}</ol>
                <button onClick={() => handleToggle()}>Toggle moves</button>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}