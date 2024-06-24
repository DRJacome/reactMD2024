/* INSTALAR:
- A nivel de repositorio como dependencia de desarrollo (-D):
npm i standard -D
*/
import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products.jsx";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { IS_DEVELOPMENT } from "./config.js";

function useFilters() {
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0,
    });

    const filterProducts = (products) => {
        return products.filter((product) => {
            return (
                product.price >= filters.minPrice &&
                (filters.category === "all" ||
                    product.category === filters.category)
            );
        });
    };
    return { filters, filterProducts, setFilters };
}

function App() {
    const [products] = useState(initialProducts);
    const { filters, filterProducts, setFilters } = useFilters();
    const filteredProducts = filterProducts(products);

    return (
        <>
            <Header changeFilters={setFilters} />
            <Products products={filteredProducts} />
            {IS_DEVELOPMENT && <Footer filters={filters} />}
        </>
    );
}

export default App;
