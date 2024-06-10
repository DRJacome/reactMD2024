// const API_URL = `https://www.omdbapi.com/?apikey=&s=`
const API_KEY = '4287ad07'

export const searchMovies = async ({ search }) => {
    if (search === '') return null
    try {
        const respponse = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await respponse.json()

        const movies = json.Search
        return movies?.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster,
            type: movie.Type,
        }));
    } catch (error) {
        throw new Error('Error buscando películas.')
    }
}
