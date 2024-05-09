const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;

/* Usamos async para convertir esta función en asíncrona y await para que espera por la promesa. */
export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT); // 1. Fetch devuelve una promesa.
    const data = await res.json(); // 2. then() devuelve una promesa convertida en JSON.
    const { fact } = data; // 3. Extraemos el dato fact del array del objeto data.
    return fact; // 4. Devolvemos la cita.
};
