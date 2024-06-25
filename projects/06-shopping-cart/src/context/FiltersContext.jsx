import { createContext, useState } from "react";

/* 1. Crear context */
export const FiltersContext = createContext();

/* 2. Crear el Provider para proveer acceo al context */

export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 1000,
    });
    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
    );
}
