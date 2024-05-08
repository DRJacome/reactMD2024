import { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;
//const CAT_ENDPOINT_IMAGE_URL = `​https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [factError, setFactError] = useState();

    // Usar un useEffect para hacer fetching de datos de la API.
    // IMPORTANTE: siempre hacer el fetching dentro de un useEffect para evitar loop infinito.
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then((resp) => {

                // Si la API no devuelve una respuesta, se controla el error.
                if (!resp.ok) {
                    setFactError("No se ha podido recuperar la cita.");
                }
                return resp.json();
            })
            .then((data) => {
                const { fact } = data;
                setFact(fact);
            });
    }, []);

    // Recuperamos la imagen según la cita dada por la API.
    useEffect(() => {
        // Si "fact" no tiene un valor válido porque es null o undefined (aún no hay cita), la ejecución se detendrá.
        if (!fact) return;

        // Acceder al array 'fact', separarlo por palabras y devolver un nuevo array con la primera palabra.
        const firstWord = fact.split(" ")[0];

        // Acceder al array 'fact', separarlo por palabras, seleccionar las tres primeras palabras
        // y devolverlas unidas en un nuevo array.
        const threeFirstWords = fact.split(" ", 3).join(" ");
        const firstWords = fact.split(" ").slice(0, 3).join(" ");
        console.log(firstWord);
        console.log(threeFirstWords);
        console.log(firstWords);

        fetch(
            `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
        )
            .then((resp) => resp.json())
            .then((response) => {
                console.log(response);
                const { _id } = response;
                const url = `/cat/${_id}/says/${threeFirstWords}`;
                setImageUrl(url);
            });
    }, [fact]);

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {fact && (
                <img
                    src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
                    alt={`Imagen extraída usando las primeras tres palabras de ${fact}`}
                />
            )}
        </main>
    );
}
