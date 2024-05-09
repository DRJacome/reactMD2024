import "./App.css";
import { useCatImage } from "./services/hooks/useCatImage";
import { useCatFact } from "./services/hooks/useCatFact";

export function App() {
    const { fact, refreshFact } = useCatFact();
    const { imageUrl } = useCatImage({ fact });

    const handleClick = async () => {
        refreshFact();
    };

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Nueva cita</button>
            {fact && <p>{fact}</p>}
            {fact && (
                <img
                    src={`${imageUrl}`}
                    alt={`Imagen extraída usando las primeras tres palabras de ${fact}`}
                />
            )}
            <hr />
        </main>
    );
}
