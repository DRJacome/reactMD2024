import { useState, useEffect } from "react";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

/* El hook useCatImage es una caja negra que recibe la cita y devuelve la imagen del gato. */
export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    // Recuperamos la imagen según la cita dada por la API.
    useEffect(() => {
        // Si "fact" no tiene un valor válido porque es null o undefined (aún no hay cita), la ejecución se detendrá.
        if (!fact) return

        // Acceder al array 'fact', separarlo por palabras, seleccionar las tres primeras palabras
        // y devolverlas unidas en un nuevo array.
        const threeFirstWords = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { _id } = response
                const url = `/cat/${_id}/says/${threeFirstWords}`
                setImageUrl(url)
            })
    }, [fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}