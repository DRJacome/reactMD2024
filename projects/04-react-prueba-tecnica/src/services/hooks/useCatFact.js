import { useState, useEffect } from "react";
import { getRandomFact } from "../facts";

export function useCatFact() {
    const [fact, setFact] = useState();

    const refreshFact = () => {
        getRandomFact().then((newFact) => setFact(newFact));
    };

    // Usar un useEffect para solicitar la cita recuperando datos de la API al cargar la página.
    // IMPORTANTE: siempre hacer el fetching dentro de un useEffect para evitar loop infinito.
    useEffect(() => refreshFact, []);

    return { fact, refreshFact };
}
