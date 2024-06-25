/* INSTALAR:
- A nivel de repositorio como dependencia de desarrollo (-D):
npm i standard -D
*/
import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products.jsx";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { IS_DEVELOPMENT } from "./config.js";
import { Cart } from "./components/Cart.jsx";
import { useFilters } from "./hooks/useFilters.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
    const { filterProducts } = useFilters();
    const filteredProducts = filterProducts(initialProducts);

    return (
        <CartProvider>
            <Header />
            <Cart />
            <Products products={filteredProducts} />
            {IS_DEVELOPMENT && <Footer />}
        </CartProvider>
    );
}

export default App;
