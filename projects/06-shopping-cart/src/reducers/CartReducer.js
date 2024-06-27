/* Cómo crear un Reducer: */

/* Leer del localStorage si hay un estado previo de la sesión anterior del usuario. */
export const cartInitialState =
    JSON.parse(window.localStorage.getItem("cart")) || [];

// Definir tipos de acción como constantes.
export const CART_ACTION_TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAR_CART: "CLEAR_CART",
};

/* Guardar en el localStorage el estado con los datos del carrito del usuario. */
export const updateLocalStorage = (state) => {
    window.localStorage.setItem("cart", JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION = {
    [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
        const { id } = action.payload;

        /* Comprobar si el producto ya está en el carrito. */
        const productInCartIndex = state.findIndex((item) => item.id === id);

        if (productInCartIndex >= 0) {
            /* Comprobarción con structuredClone (copia profunda de objeto). */
            const newState = structuredClone(state);
            newState[productInCartIndex].quantity += 1;
            updateLocalStorage(newState);
            return newState;
        }

        /* Si no está en el carrito, se añade. */
        const newState = [
            ...state,
            {
                ...action.payload,
                quantity: 1,
            },
        ];
        updateLocalStorage(newState);
        return newState;
    },
    [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
        const { id } = action.payload;
        const newState = state.filter((item) => item.id != id);
        updateLocalStorage(newState);
        return newState;
    },
    [CART_ACTION_TYPES.CLEAR_CART]: () => {
        updateLocalStorage([]);
        return [];
    },
};

export const cartReducer = (state, action) => {
    const { type: actionType } = action;

    const updateState = UPDATE_STATE_BY_ACTION[actionType];
    return updateState ? updateState(state, action) : state;
};
