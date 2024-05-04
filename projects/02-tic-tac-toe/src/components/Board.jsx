import { TURNS } from "../constants";
import { Square } from "./Square";

export function Board({ resetGame, board, updateBoard, turn }) {
    return (
        <main className='board'>
            <h1>Tic Tac Toe</h1>
            <button onClick={resetGame}>Reiniciar el juego</button>
            <section className='game'>
                {board.map((square, index) => {
                    return (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}>
                            {square}
                        </Square>
                    );
                })}
            </section>
            <section className='turn'>
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>
        </main>
    );
}
