export const saveGameToStorage = ({ board, turn }) => {
    // Guardar partida con el tablero y el turno.
    window.localStorage.setItem("board", JSON.stringify(board));
    window.localStorage.setItem("turn", JSON.stringify(turn));
}

export const resetSaveGameStorage = () => {
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
}