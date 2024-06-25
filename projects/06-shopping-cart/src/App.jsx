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
import { useFilters } from "./useFilters.jsx";

function App() {
    const { filterProducts } = useFilters();
    const filteredProducts = filterProducts(initialProducts);

    return (
        <>
            <Header />
            <Products products={filteredProducts} />
            {IS_DEVELOPMENT && <Footer />}
        </>
    );
}

export default App;
