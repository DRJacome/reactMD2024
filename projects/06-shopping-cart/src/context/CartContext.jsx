import { createContext, useState } from "react";

/* 1. Crear contexto */
export const CartContext = createContext();

/* 2. Crear Prodiver */
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        /* Comprobar si el producto ya está en el carrito. */
        const productInCartIndex = cart.findIndex(
            (item) => item.id === product.id
        );

        /* Comprobarción con structuredClone (copia profunda de objeto). */
        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1;
            return setCart(newCart);
        }

        /* Si no está en el carrito, se añade. */
        setCart((prevState) => [
            ...prevState,
            {
                ...product,
                quantity: 1,
            },
        ]);
    };

    const removeFromCart = (product) => {
        setCart((prevState) =>
            prevState.filter((item) => item.id != product.id)
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
            }}>
            {children}
        </CartContext.Provider>
    );
}
