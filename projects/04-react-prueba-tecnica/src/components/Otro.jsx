import { useCatImage } from "../services/hooks/useCatImage";

export function Otro() {
    const { imageUrl } = useCatImage({ fact: "cat" });
    console.log(imageUrl);
    return (
        <>
            {imageUrl && <img src={imageUrl} alt='Imagen 2' />}
        </>
    );
}
