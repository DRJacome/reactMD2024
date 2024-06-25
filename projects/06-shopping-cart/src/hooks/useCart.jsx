import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
    const contextCart = useContext(CartContext);

    if (contextCart === undefined) {
        throw new Error("useCart debe ser usado con un Provider");
    }

    return contextCart;
};
