import { createContext, useReducer } from "react";
import {
    cartReducer,
    cartInitialState,
    CART_ACTION_TYPES,
} from "../reducers/CartReducer";
("../reducers/CartReducer");
import PropTypes from "prop-types";

/* 1. Crear contexto */
export const CartContext = createContext();

/* Usar Reducer */
function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    const addToCart = (product) =>
        /* IMPORTANTE: es preferible usar constantes definidas en CART_ACTION_TYPES 
           para los tipos de acción en lugar de strings literales.
           Ambas formas son funcionales, pero usar CART_ACTION_TYPES es buena práctica. */
        dispatch({
            type: CART_ACTION_TYPES.ADD_TO_CART,
            payload: product,
        });

    const removeFromCart = (product) =>
        dispatch({
            type: CART_ACTION_TYPES.REMOVE_FROM_CART, // Preferible a "REMOVE_FROM_CART"
            payload: product,
        });

    const clearCart = () =>
        dispatch({
            type: CART_ACTION_TYPES.CLEAR_CART,
        });
    return { state, addToCart, removeFromCart, clearCart };
}

/* 2. Crear Prodiver */
export function CartProvider({ children }) {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer();
    return (
        <CartContext.Provider
            value={{
                cart: state,
                addToCart,
                removeFromCart,
                clearCart,
            }}>
            {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
