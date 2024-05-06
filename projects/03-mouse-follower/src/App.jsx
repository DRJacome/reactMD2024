import { useState, useEffect } from "react";

const FollowMouse = () => {
    const [enabled, setEnabled] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    /* El hook useEffect siempre se ejecuta la primera vez que se monta el componente. */
    useEffect(() => {
        console.log("Efecto", { enabled });

        const handleMove = (evento) => {
            const { clientX, clientY } = evento;
            console.log("handleMove", { clientX, clientY });
            setPosition({ x: clientX, y: clientY });
        };

        // Si se activa el botón "Seguir puntero", se activa la suscripción al evento.
        if (enabled) {
            window.addEventListener("pointermove", handleMove);
        }

        // Cleanup: limpiar suscripción a evento en el return.
        // Se ejecuta cuando el componente se desmonta y/o cuando
        //cambian las dependencias antes de ejecutar el efecto de nuevo.
        return () => {
            console.log("Cleanup");
            window.removeEventListener("pointermove", handleMove);
        };
    }, [enabled]);
    return (
        <>
            <div
            /* Estilos en línea en React; siempre se han de definir como un objeto. */
                style={{
                    position: "absolute",
                    backgroundColor: "#09f",
                    border: "1px solid #fff",
                    borderRadius: "50%",
                    opacity: 0.8,
                    pointerEvents: "none",
                    left: -20,
                    top: -20,
                    width: 40,
                    height: 40,
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}></div>
            <button
                onClick={() => {
                    setEnabled(!enabled);
                }}>
                {enabled ? "Desactivar" : "Activar"} seguir puntero
            </button>
        </>
    );
};

function App() {
    return (
        <main>
            <FollowMouse />
        </main>
    );
}

export default App;
