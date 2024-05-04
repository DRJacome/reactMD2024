import { WINNER_COMBOS } from "../constants";

const checkWinner = (boardToCheck) => {
    /* Se revisan todas las combinaciones ganadoras para ver si ganó el jugador X el jugador O. */
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (
            boardToCheck[a] && // Comprobar si en la posición 0 hay una X o una O
            boardToCheck[a] === boardToCheck[b] && // Comprobar si en ambas posiciones (0 y 1) hay la misma figura -> (X u O)
            boardToCheck[a] === boardToCheck[c] // Comprobar si en ambas posiciones (0 y 2) hay la misma figura -> (X u O)
        ) {
            // Si todas las posiciones son iguales, se devuelve el ganador.
            return boardToCheck[a];
        }
    }
    // Si no hay ganador, se edvuelve null (empate).
    return null;

    /* Si no hay más espacios vacíos en el tablero, revisamos si hay un empate. */
}; const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square != null);
};

export { checkWinner, checkEndGame }