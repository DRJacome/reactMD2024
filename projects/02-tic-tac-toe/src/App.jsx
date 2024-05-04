/* INSTALAR:
npm i canvas-confetti -E
*/

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { TURNS } from "./constants";
import { checkEndGame, checkWinner } from "./logic/boardLogic";
import { WinnerModal } from "./components/WinnerModal";
import { Board } from "./components/Board";
import "./App.css";
import { resetSaveGameStorage, saveGameToStorage } from "./logic/storage/Index";

function App() {
    /* Valores iniciales: */
    // console.log("Primer render");
    const [board, setBoard] = useState(() => {
        /* Comprueba si hay una partida guardada en el localStorage y la recupera; si no la hay,
         pinta un tablero nuevo. */
        // console.log("Inicializar el estado del board");
        const boardFromStorage = window.localStorage.getItem("board");
        if (boardFromStorage) return JSON.parse(boardFromStorage);
        return Array(9).fill(null);
    });

    const [turn, setTurn] = useState(() => {
        const turnFromStorage = window.localStorage.getItem("turn");

        /* ?? -> Operador de fusión nula: comprueba si el primer valor es nulo o indefinido, y si lo es, devuelve el segundo valor. */
        return turnFromStorage ?? TURNS.X;
    });

    // Null es que no hay ganador, y false es que hay empate.
    const [winner, setWinner] = useState(null);

    const updateBoard = (index) => {
        /* Si ya hay algo en la posición en la que clica el jugador, se finaliza la ejecución (return) sin continuar 
        con el resto de líneas de la función updateBoard() y no se actualiza el estado. */
        if (board[index] || winner) return;

        /* IMPORTANTE: se debe pasar un array u objeto nuevo en un nuevo estado y no modificar directamente el estado original;
        el estado original debe ser inmutable.*/
        const newBoard = [...board]; // Se actualiza el tablero.
        newBoard[index] = turn; // Los valores de turn pueden ser X u O.
        setBoard(newBoard);
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X; // Se cambia de turno.
        setTurn(newTurn);

        // Guardar partida con el tablero y el turno.
        saveGameToStorage({
            board: newBoard,
            turn: newTurn,
        });

        // Después de actualizar la posición, revisamos si hay un ganador.
        const newWinner = checkWinner(newBoard);
        if (newWinner) {
            setWinner(newWinner);
            confetti();
        } else if (checkEndGame(newBoard)) {
            setWinner(false);
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null);
        resetSaveGameStorage();
    };

    useEffect(() => {
        console.log("useEffect");
    }, [winner]);

    return (
        <>
            <Board
                board={board}
                turn={turn}
                updateBoard={updateBoard}
                resetGame={resetGame}
            />

            <WinnerModal winner={winner} resetGame={resetGame} />
        </>
    );
}

export default App;
